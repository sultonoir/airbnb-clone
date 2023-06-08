const fetch = require("node-fetch");

const url = "https://app.sandbox.midtrans.com/snap/v1/transactions";
const options = {
  method: "POST",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    authorization:
      "Basic U0ItTWlkLXNlcnZlci1pYmJRR3VSQV9xZVcyellFemNELXd5N1M6TWludXN0dTM2NQ==",
  },
  body: JSON.stringify({
    transaction_details: { order_id: "order-id", gross_amount: 10000 },
    credit_card: { secure: true },
  }),
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
