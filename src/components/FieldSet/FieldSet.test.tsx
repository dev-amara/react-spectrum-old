import { Form, Formik } from "formik";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import { FieldSet } from "./FieldSet";

const handleSubmit = jest.fn();

describe("<FieldSet />", () => {
  test("rend correctement", () => {
    const component = renderer
      .create(
        <Formik
          initialValues={{ email: "" }}
          onSubmit={handleSubmit}
          validationSchema={{}}
        >
          <Form>
            <FieldSet name="email" placeholder="Entrez votre email" />
          </Form>
        </Formik>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test("should have not content texts in the component", () => {
    const { container } = render(
      <Formik
        initialValues={{ email: "" }}
        onSubmit={handleSubmit}
        validationSchema={{}}
      >
        <Form>
          <FieldSet name="name" placeholder="Entrez votre email" />
        </Form>
      </Formik>
    );
    expect(container).not.toHaveTextContent("Entrez votre email");
  });

  test("try to display the profile without its require props", () => {
    expect(FieldSet).toThrowError();
  });
});
