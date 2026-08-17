import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function Button({
  children,
  onClick,
  className = "",
  href,
  type = "button",
  disabled,
}: ButtonProps) {
  const buttonStyles = `
  inline-flex items-center justify-center
  rounded-xl px-6 py-3
  cursor-pointer
  transition-all duration-300
  disabled:cursor-not-allowed
  disabled:opacity-50
  focus-visible:outline-none
  focus-visible:ring-2 focus-visible:ring-black
  focus-visible:ring-offset-2
  ${className}
`;

  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {children}
      </Link>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonStyles}
    >
      {children}
    </button>
  );
}
