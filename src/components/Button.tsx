/* eslint-disable prettier/prettier */

import { ButtonProps } from "../config/types";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className = '',
  type = 'button',
  icon,
}) => {
  return (
    <button
      className={`bg-slate-100 dark:bg-slate-800 dark:text-white no-underline group cursor-pointer relative shadow-2xl dark:shadow-zinc-900 rounded-xl p-px text-base leading-7 inline-block tracking-wide ${className}`}
      type={type}
      onClick={onClick}
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-50" />
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-xl py-2 px-6 ring-1 ring-white/10">
        <span className="tracking-wide">{label}</span>
        {icon && <span className="flex items-center">{icon}</span>}
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-sky-400/0 via-sky-400/90 to-sky-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  );
};

export default Button;
