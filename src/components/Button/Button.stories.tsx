import { Story, Meta } from "@storybook/react/types-6-0";
import { Button, ButtonProps } from "./Button";
import { Omit } from "@material-ui/types";
import { ButtonProps as BtnProps } from "@material-ui/core/Button/Button";

export default {
  title: "Button",
  component: Button,
  description: `A button.`,
  argTypes: {
    background: { control: "color" },
    color: { control: "color" },
    borderRadius: { control: "string" },
  },
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps & Omit<BtnProps, keyof ButtonProps>> = (
  args
) => <Button {...args}>Click me</Button>;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  background: "none",
  border: "1px solid #13938F",
  color: "#0d4e4c",
};
