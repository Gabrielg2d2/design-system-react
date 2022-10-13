interface TextInputLabelProps {
  label?: string;
}

export function TextInputLabel({ label }: TextInputLabelProps) {
  return (
    <label className="text-gray-100 text-sm font-sans font-semibold">
      {label}
    </label>
  );
}
