import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputProps } from ".";
import { Envelope } from "phosphor-react";

export default {
  title: "TextInput",
  component: TextInput,
  args: {
    label: "Label",
    placeholder: "Type your e-mail address",
  },
} as Meta<TextInputProps>;

export const Default: StoryObj<TextInputProps> = {};

export const InputIconLeft: StoryObj<TextInputProps> = {
  args: {
    iconLeft: <Envelope />,
  },
};

export const InputIconRight: StoryObj<TextInputProps> = {
  args: {
    iconRight: <Envelope />,
  },
};
