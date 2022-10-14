interface TextInputComponent {
  children: React.ReactNode;
  classNameIcon?: string;
}

export function TextInputIconRight({
  children,
  classNameIcon,
}: TextInputComponent) {
  if (!children) return null;

  return (
    <div
      className={`w-6 h-6 ml-2 text-2xl flex items-center justify-center text-gray-400 ${classNameIcon}`}
    >
      {children}
    </div>
  );
}
