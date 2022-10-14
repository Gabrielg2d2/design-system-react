export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={`py-3 px-4 bg-cyan-500 rounded text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
