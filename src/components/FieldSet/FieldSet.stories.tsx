import { Story, Meta } from "@storybook/react/types-6-0";
import { Form, Formik, FormikProps, FormikValues } from "formik";
import { FieldSet } from "./FieldSet";

export default {
  title: "FieldSet",
  component: FieldSet,
  description: `A FieldSet.`,
  argTypes: {},
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = (args) => (
  <Formik initialValues={{ email: "" }} onSubmit={() => {}}>
    {({ handleChange, isSubmitting }: FormikProps<FormikValues>) => (
      <Form>
        <FieldSet
          name={"email"}
          placeholder={"Entrez votre email"}
          type={"email"}
          {...args}
        />
      </Form>
    )}
  </Formik>
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
