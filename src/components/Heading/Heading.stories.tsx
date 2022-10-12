import { Meta, Story } from "@storybook/react";
import { Heading } from ".";

export default {
  title: "Heading",
  component: Heading,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["xl", "2xl", "3xl", "4xl"],
      },
    },
    component: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4"],
      },
    },
    children: {
      defaultValue: "Hello World",
      control: {
        type: "text",
      },
    },
  },
} as Meta;

export const Default: Story = (args) => (
  <Heading {...args}>{args.children}</Heading>
);

export const HXL: Story = (args) => (
  <Heading size="xl" {...args}>
    {args.children}
  </Heading>
);

export const H2XL: Story = (args) => (
  <Heading size="2xl" {...args}>
    {args.children}
  </Heading>
);

export const H3XL: Story = (args) => (
  <Heading size="3xl" {...args}>
    {args.children}
  </Heading>
);

export const H4XL: Story = (args) => (
  <Heading size="4xl" {...args}>
    {args.children}
  </Heading>
);
