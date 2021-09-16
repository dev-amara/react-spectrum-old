export interface AccountingPlan {
  id?: string;
  clientId: string;
  clientName?: string;
  accountingSystem: string;
  items: AccountingAccount[];
  status?: string;
  createdAt?: string;
  createdBy?: string;
}

export interface AccountingAccount {
  id?: string;
  accountNumber: string;
  label: string;
}

export interface AccountingSytems {
  id?: string;
  name?: string;
}
