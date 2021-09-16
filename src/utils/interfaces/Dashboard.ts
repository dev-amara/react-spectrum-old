export interface IWidget {
  amount: number;
  date: string;
}

export interface Dashboard {
  accountingBalance: IWidget;
  bankBalance: IWidget;
  opsFound: IWidget;
  opsInWaiting: IWidget;
}
