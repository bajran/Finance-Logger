import { Invoice } from "./Classes/Invoice.js";
import { Payment } from "./Classes/Payment.js";
import { HasFormatter } from "./Interface/HasFormatter.js";
import { ListTemplate } from "./Classes/ListTemplate.js";

// form element
const form = <HTMLFormElement>document.querySelector(".new-item-form");
// input details
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
// list template instance

const ul = <HTMLUListElement>document.querySelector("ul");
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  list.render(doc, type.value, "end");
});
