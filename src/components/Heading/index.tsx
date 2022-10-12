export interface HeadingProps {
  children: React.ReactNode;
  size?: "xl" | "2xl" | "3xl" | "4xl";
  component?: "h1" | "h2" | "h3" | "h4";
}

function color(size: string) {
  switch (size) {
    case "xl":
      return "text-xl";
    case "2xl":
      return "text-2xl";
    case "3xl":
      return "text-3xl";
    case "4xl":
      return "text-4xl";
  }
}

export function Heading({
  children,
  size = "xl",
  component = "h1",
}: HeadingProps) {
  const Component = component as keyof JSX.IntrinsicElements;

  return (
    <Component className={`${color(size)} text-gray-100 font-sans`}>
      {children}
    </Component>
  );
}
