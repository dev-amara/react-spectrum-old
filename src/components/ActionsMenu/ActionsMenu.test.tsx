// Consider adding an error boundary to your tree to customize error handling behavior.
// Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.


// import { render } from "@testing-library/react";
// import renderer from "react-test-renderer";
import { ActionsMenu } from "./ActionsMenu";

// const handleDelete = jest.fn();
// const handleEdit = jest.fn();
// const handleDetails = jest.fn();

describe("<ActionsMenu />", () => {
  // test("rend correctement", () => {
  //   const component = renderer
  //     .create(
  //       <ActionsMenu
  //         handleDelete={() => handleDelete}
  //         handleEdit={() => handleEdit}
  //         handleDetails={() => handleDetails}
  //       />
  //     )
  //     .toJSON();
  //   expect(component).toMatchSnapshot();
  // });

  // test("should have content texts in the component", () => {
  //   const component = render(
  //     <ActionsMenu
  //       handleDelete={() => handleDelete}
  //       handleEdit={() => handleEdit}
  //       handleDetails={() => handleDetails}
  //     />
  //   );
  //   expect(component.container).toHaveTextContent("Details");
  //   expect(component.container).toHaveTextContent("Modifier");
  //   expect(component.container).not.toHaveTextContent("Supprimer");
  // });

  test("try to display the profile without its require props", () => {
    expect(ActionsMenu).toThrowError();
  });
});
