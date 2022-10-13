import { Meta, Story } from "@storybook/react";
import { Text, TextProps } from ".";

export default {
  title: "Text",
  component: Text,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
    component: {
      control: {
        type: "select",
        options: ["p", "span", "div"],
      },
    },
  },
} as Meta<TextProps>;

export const Default: Story = (args) => <Text {...args}>Default</Text>;

export const Small: Story = (args) => <Text {...args}>Small</Text>;

export const Large: Story = (args) => <Text {...args}>Large</Text>;

export const Custom: Story = (args) => (
  <Text {...args} component="p">
    Large
  </Text>
);
