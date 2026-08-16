import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  onClick,
  className = "",
  href,
  type = "button",
}: ButtonProps) {
  const buttonStyles = `
  inline-flex items-center justify-center
  rounded-xl px-6 py-3
  cursor-pointer
  transition-all duration-300
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
    <button type={type} onClick={onClick} className={buttonStyles}>
      {children}
    </button>
  );
}
