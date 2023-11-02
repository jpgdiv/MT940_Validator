export interface ITransaction {
  Reference: string;
  "Account Number": string;
  Description: string;
  "Start Balance": string;
  "End Balance": string;
  Mutation: string;
}

export interface ITransactionValidationResponse {
  validTransActions: ITransaction[];
  failedReference: ITransaction[];
  failedBalance: ITransaction[];
}
