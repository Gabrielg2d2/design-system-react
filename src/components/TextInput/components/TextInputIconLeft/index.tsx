interface TextInputComponent {
  children: React.ReactNode;
}

export function TextInputIconLeft({ children }: TextInputComponent) {
  if (!children) return null;

  return (
    <div className="w-6 h-6 mr-2 text-2xl flex items-center justify-center text-gray-400">
      {children}
    </div>
  );
}
