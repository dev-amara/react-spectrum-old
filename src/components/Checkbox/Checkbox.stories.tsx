import { Story, Meta } from "@storybook/react/types-6-0";
import { Checkbox } from "./Checkbox";
import { CheckboxProps } from "@material-ui/core";

export default {
  title: "Checkbox",
  component: Checkbox,
  description: `A Checkbox.`,
  argTypes: {

  },
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<CheckboxProps> = (args) => (
  <Checkbox {...args}/>
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  size: "small",
  checked: true,
  name: "terms",
};
