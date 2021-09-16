import React from "react";
import { Order } from "../../utils/types";

export const withDataTableRoot = (Component: any) => {
  const WithStateComponent = () => {
    const [order, setOrder] = React.useState<"asc" | "desc">("asc");
    const [orderBy, setOrderBy] = React.useState("id");
    const [selected, setSelected] = React.useState<string[]>([]);
    const [page, setPage] = React.useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);

    function descendingComparator(a: any, b: any, orderBy: string) {
      if (b[orderBy] < a[orderBy]) {
        return -1;
      }
      if (b[orderBy] > a[orderBy]) {
        return 1;
      }
      return 0;
    }

    function getComparator(order: Order, orderBy: string) {
      return order === "desc"
        ? (a: any, b: any) => descendingComparator(a, b, orderBy)
        : (a: any, b: any) => -descendingComparator(a, b, orderBy);
    }

    function stableSort(array: unknown, comparator: any) {
      if (array && Array.isArray(array)) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
          const order = comparator(a[0], b[0]);
          if (order !== 0) return order;
          return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
      }

      return;
    }

    const handleRequestSort = (
      event: React.MouseEventHandler<HTMLSpanElement>,
      property: string
    ) => {
      const isAsc = orderBy === property && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(property);
    };

    const handleClick = (
      event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
      name: string
    ) => {
      const selectedIndex = selected.indexOf(name);
      let newSelected: string[] = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
        );
      }

      setSelected(newSelected);
    };

    const handleChangePage = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
      newPage: number
    ) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    return (
      <Component
        selected={selected}
        order={order}
        setOrder={setOrder}
        setOrderBy={setOrderBy}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        orderBy={orderBy}
        setSelected={setSelected}
        handleRequestSort={handleRequestSort}
        handleClick={handleClick}
        handleChangePage={handleChangePage}
        isSelected={isSelected}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        stableSort={stableSort}
        getComparator={getComparator}
      />
    );
  };
  return WithStateComponent;
};

