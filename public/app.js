import { Invoice } from "./Classes/Invoice.js";
// Creating Object
const invOne = new Invoice("John", "work on web projects", 1740);
const invTwo = new Invoice("Micheal", "Works on native device", 1400);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
// form element
const form = document.querySelector(".new-item-form");
// input details
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value);
    console.log(tofrom.value);
    console.log(details.value);
    console.log(amount.value);
});
