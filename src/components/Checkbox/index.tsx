import { CheckboxInput } from "./components/CheckboxInput";
import { CheckboxLabel } from "./components/CheckboxLabel";

export interface CheckboxProps {
  label?: string;
  className?: string;
}

export function Checkbox({ label, className, ...props }: CheckboxProps) {
  return (
    <CheckboxLabel label={label}>
      <CheckboxInput className={className} {...props} />
    </CheckboxLabel>
  );
}
