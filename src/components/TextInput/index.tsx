import { TextInputInput } from "./components/TextInputInput";
import { TextInputLabel } from "./components/TextInputLabel";
import { TextInputRoot } from "./components/TextInputRoot";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

// function TextInputIcon() {}

export const TextInput = ({ label, ...rest }: TextInputProps) => {
  return (
    <>
      <TextInputLabel label={label} />
      <TextInputRoot>
        <TextInputInput {...rest} />
      </TextInputRoot>
    </>
  );
};
