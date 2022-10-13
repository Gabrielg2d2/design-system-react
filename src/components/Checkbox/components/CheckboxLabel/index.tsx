interface CheckboxLabelProps {
  label?: string;
  children: React.ReactNode;
}

export function CheckboxLabel({ label, children }: CheckboxLabelProps) {
  if (!label) return <>{children}</>;

  return (
    <label className="cursor-pointer flex items-center text-gray-100 gap-2">
      {children}
      <span className="text-ellipsis">{label}</span>
    </label>
  );
}
