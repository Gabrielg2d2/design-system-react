export interface TextProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  component?: "p" | "span" | "div";
  className?: string;
}

function color(size: string) {
  switch (size) {
    case "sm":
      return "text-sm";
    case "md":
      return "text-base";
    case "lg":
      return "text-lg";
  }
}

export function Text({
  children,
  size = "md",
  component = "span",
  className,
}: TextProps) {
  const Component = component as keyof JSX.IntrinsicElements;

  return (
    <Component
      className={`${color(size)} text-gray-100 font-sans ${className}`}
    >
      {children}
    </Component>
  );
}
