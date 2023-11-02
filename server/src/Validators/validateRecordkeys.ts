import { ITransaction } from "../../../entities/Transaction";

const hasReferenceId = (transaction: object) =>
  "Reference" in transaction && typeof transaction.Reference === "string";
const hasaccountNumber = (transaction: object) =>
  "Account Number" in transaction &&
  typeof transaction["Account Number"] === "string";
const hasdescription = (transaction: object) =>
  "Description" in transaction &&
  typeof transaction["Description"] === "string";
const hasstartBalance = (transaction: object) =>
  "Start Balance" in transaction &&
  typeof transaction["Start Balance"] === "string";
const hasendBalance = (transaction: object) =>
  "End Balance" in transaction &&
  typeof transaction["End Balance"] === "string";
const hasmutation = (transaction: object) =>
  "Mutation" in transaction && typeof transaction["Mutation"] === "string";

export default (transaction: object) => {
  if (
    hasReferenceId(transaction) &&
    hasaccountNumber(transaction) &&
    hasdescription(transaction) &&
    hasstartBalance(transaction) &&
    hasendBalance(transaction) &&
    hasmutation(transaction)
  ) {
    return transaction as ITransaction;
  } else {
    throw new Error(`transaction: ${JSON.stringify(transaction)} is not valid`);
  }
};
