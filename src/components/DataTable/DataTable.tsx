import { DataGrid } from "@material-ui/data-grid";
import { createStyles, withStyles } from "@material-ui/core";

export const DataTable = withStyles(() =>
  createStyles({
    root: {
      border: "none",
      "& .MuiDataGrid-row.Mui-even:not(:hover)": {
        backgroundColor: "#ebebeb",
      },
      "& .MuiDataGrid-row": {
        backgroundColor: "#fff",
      },
      "& .MuiDataGrid-footerContainer": {
        backgroundColor: "none",
      },
      "& .MuiDataGrid-columnsContainer": {
        backgroundColor: "#fff",
        borderRadius: "8px",
        border: "1px solid #fafafa",
      },
      "& .MuiDataGrid-columnSeparator": {
        display: "none",
      },
      "& .MuiDataGrid-cell": {
        borderBottom: "none",
      },
    },
  })
)(DataGrid);
