import {myLocal} from '../db/data.js';


function ascendent(a, b) {
  if (a.apellidos > b.apellidos) {
    return 1;
  }
  if (a.apellidos < b.apellidos) {
    return -1;
  }
  return 0;
}
function descendent(a, b) {
  if (a.apellidos > b.apellidos) {
    return -1;
  }
  if (a.apellidos < b.apellidos) {
    return 1;
  }
  return 0;
}

export const sortedTableByLastNameAz = async () => {
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


export const sortedTableByLastNameZa = async () =>{
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

