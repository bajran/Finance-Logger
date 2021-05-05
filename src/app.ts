import {Invoice} from "./Classes/Invoice.js";


// Creating Object
const invOne = new Invoice("John", "work on web projects", 1740);
const invTwo = new Invoice("Micheal", "Works on native device", 1400);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});

// form element
const form = <HTMLFormElement>document.querySelector(".new-item-form");
// input details
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value);
  console.log(tofrom.value);
  console.log(details.value);
  console.log(amount.value);
});
