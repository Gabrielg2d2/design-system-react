export function TextInputRoot({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
}
