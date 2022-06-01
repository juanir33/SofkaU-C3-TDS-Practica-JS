import {data, sorted} from '../db/data.js';

const ascendent = (a, b) => {
  if (a.nombre > b.nombre) {
    return 1;
  }
  if (a.nombre < b.nombre) {
    return -1;
  }
  return 0;
};
const descendent = (a, b) => {
  if (a.nombre > b.nombre) {
    return -1;
  }
  if (a.nombre < b.nombre) {
    return 1;
  }
  return 0;
};

export const sortedTableByNameAz = async () => {
  try {
     sorted = await data.sort(ascendent);
  return sorted
  } catch (error) {
    alert(error);
    
  }
  

};

export const sortedTableByNameZa = async () => {
  try {
     sorted = await data.sort(descendent);
    return sorted
  } catch (error) {
    alert(error);
    
  }
    
  
  };

