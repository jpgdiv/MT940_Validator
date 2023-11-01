import { ITransactionValidationResponse } from "../../entities/Transaction";

const randomLetter = (n: number) => {
  return String.fromCharCode(65 + n);
};
const randomWord = (n: number) =>
  [...Array(n).keys()].map((s, idx) => randomLetter(idx)).join("");

const transactionCreator = (n: number) => ({
  referenceID: n * 100,
  accountNumber: randomWord(n),
  description: `${randomWord(n * 2)} ${randomWord(2 / 2)} ${randomWord(1)}`,
  startBalance: n * 2,
  endBalance: n * 3,
  mutation: n,
});

const transactionListCreator = (n: number) =>
  [...Array(n).keys()].map((n, idx) => transactionCreator(idx));

export const mockDataPostRecord: ITransactionValidationResponse = {
  validTransActions: transactionListCreator(10),
  failedReference: transactionListCreator(2),
  failedBalance: transactionListCreator(3),
};
