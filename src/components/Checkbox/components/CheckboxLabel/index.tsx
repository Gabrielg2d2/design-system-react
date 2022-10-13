interface CheckboxLabelProps {
  label?: string;
  children: React.ReactNode;
}

export function CheckboxLabel({ label, children }: CheckboxLabelProps) {
  if (!label) return <>{children}</>;

  return (
    <label className="cursor-pointer flex items-center text-gray-100">
      {children}
      <span className="ml-2 text-ellipsis">{label}</span>
    </label>
  );
}
