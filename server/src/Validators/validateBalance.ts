import { ITransaction } from "../../../entities/Transaction";

export default function validateBalance(transaction: ITransaction) {
  const startBalance = Number.parseFloat(transaction["Start Balance"]);
  const endBalance =
    Math.round(Number.parseFloat(transaction["End Balance"]) * 100) / 100;
  const mutation = Number.parseFloat(transaction.Mutation);

  const calculatedBalance = Math.round((startBalance + mutation) * 100) / 100;
  return endBalance === calculatedBalance;
}
