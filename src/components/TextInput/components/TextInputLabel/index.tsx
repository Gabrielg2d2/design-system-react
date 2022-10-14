interface TextInputLabelProps {
  label?: string;
  classNameLabel?: string;
}

export function TextInputLabel({ label, classNameLabel }: TextInputLabelProps) {
  return (
    <label
      className={`text-gray-100 text-sm font-sans font-semibold ${classNameLabel}`}
    >
      {label}
    </label>
  );
}
