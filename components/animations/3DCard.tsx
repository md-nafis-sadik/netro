"use client";

import {
  useRef,
  useState,
  useContext,
  createContext,
  useEffect,
  MouseEvent,
  ReactNode,
  ElementType,
} from "react";

const HoverContext = createContext<{
  isHovered: boolean;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

export function HoverCardRoot({
  children,
  ...props
}: {
  children: ReactNode;
  [key: string]: any;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HoverContext.Provider value={{ isHovered, setIsHovered }} {...props}>
      {children}
    </HoverContext.Provider>
  );
}

export function useHoverContext() {
  const context = useContext(HoverContext);
  if (!context) throw new Error("useHoverContext must be inside HoverCardRoot");
  return context;
}

export function HoverCardContainer({
  children,
  className = "",
  containerClassName = "",
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { setIsHovered } = useHoverContext();

  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
    }
  };

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    cardRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  return (
    <div
      className={`flex items-center justify-center ${containerClassName}`}
      style={{ perspective: "1000px" }}
    >
      <div
        ref={cardRef}
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={`transition-all duration-200 ease-linear ${className}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </div>
  );
}

export function HoverCardBody({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] ${className}`}
    >
      {children}
    </div>
  );
}

export function HoverCardItem({
  children,
  as: Tag = "div",
  className = "",
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  translateX?: number;
  translateY?: number;
  translateZ?: number;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
  [key: string]: any;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { isHovered } = useHoverContext();

  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.transform = isHovered
      ? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
      : `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
  }, [isHovered]);

  return (
    <Tag
      ref={ref}
      className={`transition duration-200 ease-linear ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
