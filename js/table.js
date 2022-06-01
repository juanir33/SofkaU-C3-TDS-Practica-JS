import {
  sortedTableByAgeMax,
  sortedTableByAgeMin,
} from "./helpers/sortTableAge.js";

import {
  sortedTableByNameAz,
  sortedTableByNameZa,
} from "./helpers/sortTableName.js";
import {
  sortedTableByLastNameAz,
  sortedTableByLastNameZa,
} from "./helpers/sortTableLastName.js";

const dataLocal = localStorage.getItem("data");
let sort = JSON.parse(dataLocal);
const listData = sort;

const titulos = [
  {
    nombre: "Nombre",
    btn: sortedTableByNameAz,
    btnDown: sortedTableByNameZa,
    simbol: "A-Z",
    simbol2: "Z-A",
  },
  {
    nombre: "Apellido",
    btn: sortedTableByLastNameAz,
    btnDown: sortedTableByLastNameZa,
    simbol: "A-Z",
    simbol2: "Z-A",
  },
  {
    nombre: "Edad",
    btn: sortedTableByAgeMin,
    btnDown: sortedTableByAgeMax,
    simbol: "&#9757",
    simbol2: "&#9759",
  },
  { nombre: "Email" },
  { nombre: "Telefono", btn: "", btnDown: "" },
];

export const table = () => {
  const container = document.querySelector("#container");
  container.classList.add("container", "d-flex", "flex-column");

  const titleH1 = document.createElement("h3");
  titleH1.textContent = "SofkaU-C3-Training desarrollo-JavasCript";
  titleH1.classList.add("h3", "text-center", "font-monospace", "text-primary");

  const tableContainer = document.createElement("div");
  tableContainer.classList.add("table-responsive");
  const tableFull = document.createElement("table");
  tableFull.classList.add(
    "table",
    "table-info",
    "table-striped",

    "mt-1"
  );
  const tableHead = document.createElement("thead");

  const tableRowTitle = document.createElement("tr");

  const tableBody = document.createElement("tbody");

  titulos.forEach((titulo) => {
    let th = document.createElement("th");

    let btn = document.createElement("button");
    btn.classList.add("btn", "ms-4");
    btn.innerHTML = titulo.simbol;
    btn.onclick = titulo.btn;
    !titulo.btn ? btn.classList.add("d-none") : "";
    let btnDown = document.createElement("button");
    btnDown.classList.add("btn", "ms-2");
    btnDown.innerHTML = titulo.simbol2;
    btnDown.onclick = titulo.btnDown;
    !titulo.btnDown ? btnDown.classList.add("d-none") : "";

    th.textContent = titulo.nombre;
    th.append(btn, btnDown);
    tableRowTitle.appendChild(th);
  });

  listData.forEach((list) => {
    let row = document.createElement("tr");

    let tdName = document.createElement("td");
    let tdLastName = document.createElement("td");
    let tdAge = document.createElement("td");
    let tdMail = document.createElement("td");
    let tdPhoneNumber = document.createElement("td");

    tdName.textContent = list.nombre;
    tdLastName.textContent = list.apellidos;
    tdAge.textContent = list.edad;
    tdMail.textContent = list.email;
    tdPhoneNumber.textContent = list.telefono;

    row.append(tdName, tdLastName, tdAge, tdMail, tdPhoneNumber);

    tableBody.appendChild(row);
  });

  tableHead.appendChild(tableRowTitle);

  tableFull.append(tableHead, tableBody);
  tableContainer.append(tableFull);
  container.append(titleH1, tableContainer);
};
