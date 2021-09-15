import { Field, Formik } from "formik";
import renderer from "react-test-renderer";
import { FormControl } from "@material-ui/core";
import { render } from "@testing-library/react";
import { ComboBox } from "./ComboBox";

const handleSubmit = jest.fn();

describe("<ComboBox />", () => {
  test("rend correctement", () => {
    const component = renderer
      .create(
        <Formik
          initialValues={{ accountingSystem: "" }}
          onSubmit={handleSubmit}
          validationSchema={{}}
        >
          <FormControl variant="outlined" size="medium">
            <Field
              as="select"
              name="accountingSystem"
              component={ComboBox}
              placeholder="Système comptable"
              options={[]}
              value={""}
            />
          </FormControl>
        </Formik>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test("should have not content texts in the component", () => {
    const { container } = render(
      <Formik
        initialValues={{ accountingSystem: "" }}
        onSubmit={handleSubmit}
        validationSchema={{}}
      >
        <FormControl variant="outlined" size="medium">
          <Field
            as="select"
            name="accountingSystem"
            component={ComboBox}
            placeholder="Système comptable"
            options={[]}
            value={""}
          />
        </FormControl>
      </Formik>
    );
    expect(container).not.toHaveTextContent("SGBCI");
    expect(container).not.toHaveTextContent("NSIA");
    expect(container).not.toHaveTextContent("SIB");
  });
});
