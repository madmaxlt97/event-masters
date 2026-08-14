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
  const buttonStyles = `hover:cursor-pointer inline-flex items-center justify-center px-6 py-3 rounded-xl ${className}`;

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
