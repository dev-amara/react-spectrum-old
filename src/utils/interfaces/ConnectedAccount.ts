export interface ConnectedAccount {
  id?: string;
  username: string;
  password: string;
  iban: string;
  journal: string;
  accountNumber: string;
  bankBalance: string;
  opsInWaiting: string;
  AccountingBalance: string;
  rib: string;
  updatedAt: Date;
  createdAt: string;
  clientId: string;
  bankId: string;
  bankName: string;
  countryId: string;
  status?: string;
}
