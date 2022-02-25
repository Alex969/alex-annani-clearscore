export interface Address {
  buildingName: string;
  format: string;
  postcode: string;
  street: string;
  town: string;
}

export interface Balance {
  amount: number;
  currency: string;
}

export interface Limit {
  amount: number;
  currency: string;
}

export interface Overview {
  lastUpdated: string;
  utilization: number;
  balance: Balance;
  frequency: string;
  limit: Limit;
  accountOpened: string;
}

export interface PaymentHistory {
  month: number;
  paymentStatus: string;
  year: number;
}

export interface Account {
  accountCategory: string;
  accountNumber: string;
  address: Address;
  contentKey: string;
  displayName: string;
  key: string;
  name: string;
  overview: Overview;
  paymentHistory: PaymentHistory[];
  status: string;
  supplierName: string;
}

export interface Address2 {
  buildingName: string;
  format: string;
  postcode: string;
  street: string;
  town: string;
}

export interface ElectoralRoll {
  address: Address2;
  contextKey: string;
  current: boolean;
  endDateString: string;
  name: string;
  startDateString: string;
  supplied: string;
}

export interface Amount {
  amount: number;
  currency: string;
}

export interface Address3 {
  buildingName: string;
  format: string;
  postcode: string;
  street: string;
  town: string;
}

export interface Details {
  catDesc: string;
}

export interface Type {
  code: string;
  details: Details;
}

export interface CourtAndInsolvency {
  name: string;
  dob: string;
  courtName: string;
  contextKey: string;
  dischargeDate: string;
  caseReference: string;
  amount: Amount;
  address: Address3;
  type: Type;
  startDate: string;
}

export interface PublicInfo {
  courtAndInsolvencies: CourtAndInsolvency[];
}

export interface Personal {
  electoralRoll: ElectoralRoll[];
  publicInfo: PublicInfo;
}

export interface CustomerDataType {
  accounts: Account[];
  personal: Personal;
}
