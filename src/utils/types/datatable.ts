import React from "react";
import { Order } from ".";
import {
  AccountingAccount,
  AccountingPlan,
} from "../interfaces/AccountingPlans";
import { Entreprise } from "../interfaces/Entreprise";
import { ConnectedAccount } from "../interfaces/ConnectedAccount";

export type DataTableProps = {
  handleDetails?: (event: React.MouseEvent<HTMLElement>) => void;
  users: any;
  bankOperations: any;
  accounts: ConnectedAccount[];
  clientConnectedAccounts: ConnectedAccount[];
  entreprises: Entreprise[];
  accountingPlans: AccountingPlan[];
  clientAccountingAccounts: AccountingAccount[];
  isLoading?: boolean;
  canDelete: boolean;
  _id: any;
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => void;
  handleChangeRowsPerPage: () => void;
  isSelected: (name: string) => boolean;
  handleSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    name: string
  ) => void;
  handleRequestSort: (
    event: React.MouseEventHandler<HTMLSpanElement>,
    property: string
  ) => void;
  order: Order;
  setOrder: React.Dispatch<React.SetStateAction<"asc" | "desc">>;
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  orderBy: string;
  page: number;
  rowsPerPage: number;
  selected: any[];
  descendingComparator: () => void;
  stableSort: (array: any[], comparator: any) => any[];
  getComparator: (order: Order, orderBy: string) => (a: any, b: any) => number;
};
