interface TextInputComponent {
  children: React.ReactNode;
}

export function TextInputIconRight({ children }: TextInputComponent) {
  if (!children) return null;

  return (
    <div className="w-6 h-6 ml-2 text-2xl flex items-center justify-center text-gray-400">
      {children}
    </div>
  );
}
