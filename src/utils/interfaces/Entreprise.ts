export interface Bank {
  id?: number;
  region?: string;
  bankName?: string;
  bankId: string;
  countryId: string;
  iban: string;
  rib: string;
  username: string;
  password: string;
  accountNumber: string;
  journal: string;
}

export interface Entreprise {
  id?: string;
  logo?: string;
  folderId: string;
  socialReason: string;
  nrc: string;
  ncc: string;
  niu: string;
  countryId: string;
  countryName?: string;
  bankAccounts: Bank[];
}
