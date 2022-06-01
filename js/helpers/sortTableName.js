import { myLocal } from "../db/data.js";

function ascendent(a, b) {
  if (a.nombre > b.nombre) {
    return 1;
  }
  if (a.nombre < b.nombre) {
    return -1;
  }
  return 0;
}
function descendent(a, b) {
  if (a.nombre > b.nombre) {
    return -1;
  }
  if (a.nombre < b.nombre) {
    return 1;
  }
  return 0;
}

export const sortedTableByNameAz = async () => {
  try {
    let response = myLocal.getItem("data");
    let dataString = JSON.parse(response);

    let sorted = await dataString.sort(ascendent);
    myLocal.setItem("data", JSON.stringify(sorted));
    location.reload();
  } catch (error) {
    alert(error);
  }
};

export const sortedTableByNameZa = async () => {
  try {
    let response = myLocal.getItem("data");
    let dataString = JSON.parse(response);

    let sorted = await dataString.sort(descendent);
    myLocal.setItem("data", JSON.stringify(sorted));
    location.reload();
  } catch (error) {
    alert(error);
  }
};
