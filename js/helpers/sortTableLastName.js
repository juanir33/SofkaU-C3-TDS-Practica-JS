const ascendent = (a, b) => {
  if (a.apellidos > b.apellidos) {
    return 1;
  }
  if (a.apellidos < b.apellidos) {
    return -1;
  }
  return 0;
};
const descendent = (a, b) => {
  if (a.apellidos > b.apellidos) {
    return -1;
  }
  if (a.apellidos < b.apellidos) {
    return 1;
  }
  return 0;
};

export const sortedTableByLastNameAz = async (dataToFilter) => {
  const sorted = await dataToFilter.sort(ascendent);
 
  console.log(sorted);

};


export const sortedTableByLastNameZa = async (dataToFilter) => {
    const sorted = await dataToFilter.sort(descendent);
    console.log(sorted);
  
  };

