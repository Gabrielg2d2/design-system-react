export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function TextInputInput({ ...rest }: TextInputProps) {
  return (
    <input
      className="bg-transparent flex-1  text-gray-100 text-base placeholder:text-gray-400 w-full outline-none"
      {...rest}
    />
  );
}
