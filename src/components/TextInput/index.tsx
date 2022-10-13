import { TextInputIconLeft } from "./components/TextInputIconLeft";
import { TextInputIconRight } from "./components/TextInputIconRight";
import { TextInputInput } from "./components/TextInputInput";
import { TextInputLabel } from "./components/TextInputLabel";
import { TextInputRoot } from "./components/TextInputRoot";

type IconProps = React.ReactNode;

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  iconLeft?: IconProps;
  iconRight?: IconProps;
}

export const TextInput = ({
  label,
  iconLeft,
  iconRight,
  ...rest
}: TextInputProps) => {
  return (
    <>
      <TextInputLabel label={label} />
      <TextInputRoot>
        <TextInputIconLeft>{iconLeft}</TextInputIconLeft>
        <TextInputInput {...rest} />
        <TextInputIconRight>{iconRight}</TextInputIconRight>
      </TextInputRoot>
    </>
  );
};
