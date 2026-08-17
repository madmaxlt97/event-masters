import type { LucideIcon } from "lucide-react";

type ContactItemProps = {
  icon: LucideIcon;
  label: string;
  value: string;
};

export default function ContactItem({
  icon: Icon,
  label,
  value,
}: ContactItemProps) {
  return (
    <div className="group flex items-start gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-colors duration-300 group-hover:bg-black group-hover:text-white">
        <Icon size={22} />
      </div>
      <div>
        <p className="text-sm uppercase tracking-wider text-gray-500">
          {label}
        </p>
        <p className="mt-1 text-lg font-medium text-gray-900">{value}</p>
      </div>
    </div>
  );
}
