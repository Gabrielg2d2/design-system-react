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
  classNameInput?: string;
  classNameLabel?: string;
  classNameIcon?: string;
}

export const TextInput = ({
  label,
  iconLeft,
  iconRight,
  classNameInput,
  classNameLabel,
  classNameIcon,
  ...rest
}: TextInputProps) => {
  return (
    <>
      <TextInputLabel label={label} classNameLabel={classNameLabel} />
      <TextInputRoot>
        <TextInputIconLeft classNameIcon={classNameIcon}>
          {iconLeft}
        </TextInputIconLeft>
        <TextInputInput className={classNameInput} {...rest} />
        <TextInputIconRight classNameIcon={classNameIcon}>
          {iconRight}
        </TextInputIconRight>
      </TextInputRoot>
    </>
  );
};
