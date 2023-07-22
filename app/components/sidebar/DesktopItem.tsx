"use client";

import clsx from "clsx";
import Link from "next/link";

interface DesktopItemProps {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
  label,
  icon: Icon,
  href,
  onClick,
  active,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <li onClick={handleClick}>
      <Link
        href={href}
        className={clsx(
          "group flex gap-x-3 rounded-lg p-3 text-sm leading-6 font-semibold w-80 text-gray-600",
          active && "bg-white/10 text-green-500",
          !active && " hover:text-white hover:bg-gray-100/10"
        )}
      >
        <Icon className="h-6 w-6 shrink-0" />
        <span className="text-white">{label}</span>
      </Link>
    </li>
  );
};

export default DesktopItem;
