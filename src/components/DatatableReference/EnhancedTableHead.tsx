import React from "react";
import {
  Checkbox,
  createStyles,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Theme,
  withStyles,
} from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { Order } from "../../utils/types";

type EnhancedTableHeadProps = {
  classes: ClassNameMap;
  noCheckbox?: boolean;
  onSelectAllClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  numSelected: number;
  rowCount: number;
  headCells: any[];
  onRequestSort: (
    event: React.MouseEventHandler<HTMLSpanElement>,
    property: string
  ) => void;
};

export const EnhancedTableHead: React.FC<EnhancedTableHeadProps> = (props) => {
  const {
    classes,
    noCheckbox,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    headCells,
  } = props;

  const createSortHandler = (property: string) => (event: any) =>
    onRequestSort(event, property);

  return (
    <TableHead>
      <TableRow>
        <StyledTableCell padding="checkbox" style={{ padding: 0 }}>
          {!noCheckbox ? (
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ "aria-label": "select all desserts" }}
            />
          ) : (
            <></>
          )}
        </StyledTableCell>

        {headCells.map((headCell: any) => (
          <StyledTableCell
            align="center"
            key={headCell.id}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <StyledTableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </StyledTableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

const StyledTableCell = withStyles(() =>
  createStyles({
    root: {
      borderBottom: 0,
    },
  })
)(TableCell);

const StyledTableSortLabel = withStyles((theme: Theme) => ({
  icon: {
    color: `${theme.palette.secondary.main} !important`,
  },
}))(TableSortLabel);
