// schema.js

export const transaction = {
  title: "Transaction",
  name: "transaction",
  type: "document",
  fields: [
    {
      title: "Transaction ID",
      name: "transactionId",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Amount",
      name: "amount",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Currency",
      name: "currency",
      type: "string",
      options: {
        list: [
          { title: "NGN", value: "NGN" },
          { title: "USD", value: "USD" },
          // Add more currency options as needed
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Status",
      name: "status",
      type: "string",
      options: {
        list: [
          { title: "Success", value: "success" },
          { title: "Failure", value: "failure" },
          // Add more status options as needed
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    // Add other relevant fields such as user ID, timestamp, etc. as needed
  ],
};
