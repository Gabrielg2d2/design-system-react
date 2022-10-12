export interface ButtonProps {
  children: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  return (
    <button className="py-4 px-3 bg-cyan-500 rounded text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white">
      {children}
    </button>
  );
}
