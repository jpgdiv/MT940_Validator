export interface ITransaction {
    referenceID: number
    accountNumber: string
    description: string
    startBalance: number
    endBalance: number
    mutation: number
}

export interface ITransactionValidationResponse {
    validTransActions: ITransaction[],
    failedReference: ITransaction[],
    failedBalance: ITransaction[],
}
