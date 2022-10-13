export function TextInputRoot({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-1 flex items-center py-4 px-3 rounded bg-gray-900 focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
}
