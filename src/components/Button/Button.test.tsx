import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Button } from "./Button";

describe("<Button />", () => {
  test("rend correctement", () => {
    const component = renderer.create(<Button>Valider</Button>).toJSON();
    expect(component).toMatchSnapshot();
  });

  test("should have content texts in the component", () => {
    const component = render(<Button>VALIDER</Button>);
    expect(component.container).toHaveTextContent("VALIDER");
    expect(component.container).not.toHaveTextContent("NO_VALIDER");
  });

  test("try to display the profile without its require props", () => {
    expect(Button).toThrowError();
  });
});
