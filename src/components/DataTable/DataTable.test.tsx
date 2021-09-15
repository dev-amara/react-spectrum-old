import renderer from "react-test-renderer";
import { Paper, TableContainer } from "@material-ui/core";
import CustomLoadingOverlay from "./components/CustomLoadingOverlay";
import { DataTable } from "./DataTable";

describe("<DataTable />", () => {
  test("rend correctement", () => {
    const component = renderer
      .create(
        <TableContainer
          component={Paper}
          elevation={0}
          style={{ height: "38rem" }}
        >
          <DataTable
            columns={[
              {
                field: "field",
                headerName: "col",
                flex: 1,
              },
            ]}
            rows={[
              {
                id: "row1",
                field: "row",
              },
            ]}
            loading={false}
            checkboxSelection
            disableSelectionOnClick
            density="compact"
            disableColumnMenu
            rowsPerPageOptions={[20, 50, 100]}
            pageSize={20}
            components={{
              LoadingOverlay: CustomLoadingOverlay,
            }}
            localeText={{
              errorOverlayDefaultLabel: "Une erreur s'est produite.",
              noRowsLabel: "Aucun résultat trouvé.",
              toolbarDensity: "Compact",
            }}
            hideFooterSelectedRowCount={true}
          />
        </TableContainer>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
