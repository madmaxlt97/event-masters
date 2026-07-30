import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
};

export default function Button({
  children,
  onClick,
  className = "",
  href,
}: ButtonProps) {
  const buttonStyles = `hover:cursor-pointer px-6 py-3 rounded-xl ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={buttonStyles}>
      {children}
    </button>
  );
}
