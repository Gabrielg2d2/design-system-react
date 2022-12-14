import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

export interface CheckboxInputProps extends CheckboxPrimitive.CheckboxProps {
  className?: string;
}

export function CheckboxInput({ className, ...props }: CheckboxInputProps) {
  return (
    <CheckboxPrimitive.Root
      className={`w-6 h-6 p-[2px] bg-gray-800 rounded ${className}`}
      {...props}
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
