export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="py-4 px-3 bg-cyan-500 rounded text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white"
      {...rest}
    >
      {children}
    </button>
  );
}
