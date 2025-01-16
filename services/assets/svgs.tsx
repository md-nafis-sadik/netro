interface IFSvgProps {
  className?: string;
  color?: string;
}

// R

export const RightArrowIcon = ({
  className,
  color = "#ffffff",
  ...props
}: IFSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="41"
    viewBox="0 0 40 41"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M20 7.16675L17.65 9.51675L26.95 18.8334H6.66669V22.1667H26.95L17.65 31.4834L20 33.8334L33.3334 20.5001L20 7.16675Z"
      fill={color}
    />
  </svg>
);
