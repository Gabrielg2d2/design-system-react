import { CheckboxInput } from "./components/CheckboxInput";
import { CheckboxLabel } from "./components/CheckboxLabel";

export interface CheckboxProps {
  label?: string;
}

export function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <CheckboxLabel label={label}>
      <CheckboxInput {...props} />
    </CheckboxLabel>
  );
}
