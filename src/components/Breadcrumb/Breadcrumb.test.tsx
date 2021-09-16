import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Breadcrumb } from "./Breadcrumb";

describe("<Breadcrumb />", () => {
  test("rend correctement", () => {
    const component = renderer
      .create(
        <Breadcrumb
          title="Comptes connectés"
          secondLabel="Liste des comptes connectés"
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test("should have content texts in the component", () => {
    const component = render(
      <Breadcrumb
        title="Comptes connectés"
        secondLabel=" Liste des comptes connectés"
      />
    );
    expect(component.container).toHaveTextContent("Comptes connectés");
    expect(component.container).not.toHaveTextContent("Comptes non connectés");
  });

  test("try to display the profile without its require props", () => {
    expect(Breadcrumb).toThrowError();
  });
});
