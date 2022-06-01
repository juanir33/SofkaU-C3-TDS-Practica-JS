import { myLocal } from "../db/data.js";

function ascendent(a, b) {
  if (Number(a.edad) > Number(b.edad)) {
    return 1;
  }
  if (Number(a.edad) < Number(b.edad)) {
    return -1;
  }
  return 0;
}
function descendent(a, b) {
  if (Number(a.edad) > Number(b.edad)) {
    return -1;
  }
  if (Number(a.edad) < Number(b.edad)) {
    return 1;
  }
  return 0;
}

export const sortedTableByAgeMax = async () => {
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

export const sortedTableByAgeMin = async () => {
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
