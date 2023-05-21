import { Store, DiscountOffer } from "./store";

import fs from "fs";

const discountOffers = [
  new DiscountOffer("Velib", 20, 30),
  new DiscountOffer("Naturalia", 10, 5),
  new DiscountOffer("Vinted", 5, 40),
  new DiscountOffer("Ilek", 15, 40),
  new DiscountOffer("BackMarket",25,50)
];
const store = new Store(discountOffers);

const arrayLog = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  arrayLog.push(JSON.stringify(store.updateDiscounts()));
}
const log = JSON.stringify(arrayLog);
/* eslint-disable no-console */
fs.writeFile("output.txt", log, err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
