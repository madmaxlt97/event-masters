type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return <div className={`w-[90%] mx-auto ${className}`}>{children}</div>;
}
