require("dotenv").config();
express = require("express");
const cors = require("cors");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

const corsOptions = {
  // origin: ["https://fabricadserv.netlify.app", "http://localhost:4000"],
  origin: "https://fabricadserv-typescript.vercel.app/", // Set the correct origin for your frontend
};

app.use(cors(corsOptions));

app.use(express.static("public"));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to the Stripe Payment Gateway!");
});

app.get("/success", (req, res) => {
  res.send("Payment Successful!");
});

app.get("/cancel", (req, res) => {
  res.send("Payment Cancelled!");
});

app.post("/checkout", async (req, res) => {
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "https://backend-fabricad.onrender.com/success",
    cancel_url: "https://backend-fabricad.onrender.com/cancel",
    shipping_address_collection: {
      allowed_countries: ["US", "CA", "GB", "DE", "RO"],
    },
  });
  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

const port = 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
