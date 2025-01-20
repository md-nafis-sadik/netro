interface IFSvgProps {
  className?: string;
  color?: string;
}

// C

export const CallMissedIcon = ({
  className,
  color = "#ffffff",
  ...props
}: IFSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M3 8.20501L12 17.205L19 10.205V14.795H21V6.79501H13V8.79501H17.59L12 14.385L4.41 6.79501L3 8.20501Z"
      fill={color}
    />
  </svg>
);

export const CheckedCircleIcon = ({
  className,
  color = "#2CC672",
  ...props
}: IFSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M10 2.1665C5.40002 2.1665 1.66669 5.89984 1.66669 10.4998C1.66669 15.0998 5.40002 18.8332 10 18.8332C14.6 18.8332 18.3334 15.0998 18.3334 10.4998C18.3334 5.89984 14.6 2.1665 10 2.1665ZM7.74169 14.0748L4.75002 11.0832C4.42502 10.7582 4.42502 10.2332 4.75002 9.90817C5.07502 9.58317 5.60002 9.58317 5.92502 9.90817L8.33335 12.3082L14.0667 6.57484C14.3917 6.24984 14.9167 6.24984 15.2417 6.57484C15.5667 6.89984 15.5667 7.42484 15.2417 7.74984L8.91669 14.0748C8.60002 14.3998 8.06669 14.3998 7.74169 14.0748Z"
      fill={color}
    />
  </svg>
);

// L

export const LinkedinOutlinedIcon = ({
  className,
  color = "#ffffff",
  ...props
}: IFSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M18.9788 18.0003V11.4078C18.9788 8.16778 18.2812 5.69278 14.5012 5.69278C12.6787 5.69278 11.4637 6.68278 10.9687 7.62778H10.9237V5.98528H7.34623V18.0003H11.0812V12.0378C11.0812 10.4628 11.3737 8.95529 13.3087 8.95529C15.2212 8.95529 15.2437 10.7328 15.2437 12.1278V17.9778H18.9788V18.0003Z"
      fill={color}
    />
    <path d="M1.27124 5.98477H5.00625V17.9998H1.27124V5.98477Z" fill={color} />
    <path
      d="M3.13876 -9.15527e-05C1.94626 -9.15527e-05 0.97876 0.96741 0.97876 2.15991C0.97876 3.35242 1.94626 4.34242 3.13876 4.34242C4.33127 4.34242 5.29877 3.35242 5.29877 2.15991C5.29877 0.96741 4.33127 -9.15527e-05 3.13876 -9.15527e-05Z"
      fill={color}
    />
  </svg>
);

export const LeftSignIcon = ({
  className,
  color = "#000000",
  ...props
}: IFSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M20.94 22.12L14.8333 16L20.94 9.88L19.06 8L11.06 16L19.06 24L20.94 22.12Z"
      fill={color}
    />
  </svg>
);

// P

export const PlusRoundedIcon = ({
  className,
  color = "#ffffff",
  ...props
}: IFSvgProps) => (
  <svg
    width="40"
    height="41"
    viewBox="0 0 40 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect y="0.5" width="40" height="40" rx="20" fill="#111111" />
    <path
      d="M20 10.5C14.48 10.5 10 14.98 10 20.5C10 26.02 14.48 30.5 20 30.5C25.52 30.5 30 26.02 30 20.5C30 14.98 25.52 10.5 20 10.5ZM25 21.5H21V25.5H19V21.5H15V19.5H19V15.5H21V19.5H25V21.5Z"
      fill={color}
    />
  </svg>
);

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

export const RightSignIcon = ({
  className,
  color = "#000000",
  ...props
}: IFSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M11.06 22.12L17.1667 16L11.06 9.88L12.94 8L20.94 16L12.94 24L11.06 22.12Z"
      fill={color}
    />
  </svg>
);

// T

export const TelegramOutlinedIcon = ({
  className,
  color = "#ffffff",
  ...props
}: IFSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="16"
    viewBox="0 0 18 16"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M17.9896 0.799412L15.1521 15.1051C15.1521 15.1051 14.7555 16.097 13.664 15.6208L7.0869 10.5868C7.97093 9.79213 14.8291 3.62634 15.129 3.34673C15.5926 2.91401 15.3049 2.65647 14.766 2.98373L4.63593 9.41686L0.7277 8.10115C0.7277 8.10115 0.112418 7.88286 0.0532025 7.40668C-0.00636354 6.93051 0.747672 6.67262 0.747672 6.67262L16.6802 0.422394C16.6802 0.422394 17.9896 -0.152944 17.9896 0.799412Z"
      fill={color}
    />
  </svg>
);

// W

export const WhatsappOutlinedIcon = ({
  className,
  color = "#ffffff",
  ...props
}: IFSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M0 24L1.687 17.837C0.645998 16.033 0.0989998 13.988 0.0999998 11.891C0.103 5.335 5.43799 0 11.993 0C15.174 0.001 18.16 1.24 20.406 3.488C22.6509 5.736 23.8869 8.724 23.8859 11.902C23.8829 18.459 18.548 23.794 11.993 23.794C10.003 23.793 8.04198 23.294 6.30499 22.346L0 24ZM6.59698 20.193C8.27298 21.188 9.87298 21.784 11.989 21.785C17.437 21.785 21.875 17.351 21.878 11.9C21.88 6.438 17.463 2.01 11.997 2.008C6.54498 2.008 2.11 6.442 2.108 11.892C2.107 14.117 2.75899 15.783 3.85399 17.526L2.85499 21.174L6.59698 20.193ZM17.984 14.729C17.91 14.605 17.712 14.531 17.414 14.382C17.117 14.233 15.656 13.514 15.383 13.415C15.111 13.316 14.913 13.266 14.714 13.564C14.516 13.861 13.946 14.531 13.773 14.729C13.6 14.927 13.426 14.952 13.129 14.803C12.832 14.654 11.874 14.341 10.739 13.328C9.85598 12.54 9.25898 11.567 9.08598 11.269C8.91298 10.972 9.06798 10.811 9.21598 10.663C9.34998 10.53 9.51298 10.316 9.66198 10.142C9.81298 9.97 9.86198 9.846 9.96198 9.647C10.061 9.449 10.012 9.275 9.93698 9.126C9.86198 8.978 9.26798 7.515 9.02098 6.92C8.77898 6.341 8.53398 6.419 8.35198 6.41L7.78198 6.4C7.58398 6.4 7.26198 6.474 6.98998 6.772C6.71798 7.07 5.94999 7.788 5.94999 9.251C5.94999 10.714 7.01498 12.127 7.16298 12.325C7.31198 12.523 9.25798 15.525 12.239 16.812C12.948 17.118 13.502 17.301 13.933 17.438C14.645 17.664 15.293 17.632 15.805 17.556C16.376 17.471 17.563 16.837 17.811 16.143C18.059 15.448 18.059 14.853 17.984 14.729Z"
      fill={color}
    />
  </svg>
);
