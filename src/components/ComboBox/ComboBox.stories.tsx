import { Story, Meta } from "@storybook/react/types-6-0";
import { Field, Form, Formik, FormikProps, FormikValues } from "formik";
import { ComboBox } from "./ComboBox";
import { Paper, TableContainer } from "@material-ui/core";

export default {
  title: "ComboBox",
  component: ComboBox,
  description: `A ComboBox.`,
  argTypes: {},
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = (args) => (
  <TableContainer component={Paper} elevation={0} style={{ height: "18rem" }}>
    <Formik initialValues={{ banque: "" }} onSubmit={() => {}}>
      {({ handleChange, values }: FormikProps<FormikValues>) => (
        <Form>
          <Field
            name="bankId"
            onChange={handleChange}
            component={ComboBox}
            placeholder="Banque"
            options={[]}
            value={values.banque}
          />
        </Form>
      )}
    </Formik>
  </TableContainer>
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
