const ascendent = (a, b) => {
  if (Number(a.edad) > Number(b.edad)) {
    return 1;
  }
  if (Number(a.edad) < Number(b.edad)) {
    return -1;
  }
  return 0;
};
const descendent = (a, b) => {
  if (Number(a.edad) > Number(b.edad)) {
    return -1;
  }
  if (Number(a.edad) < Number(b.edad)) {
    return 1;
  }
  return 0;
};

export const sortedTableByAgeMax = async (dataToFilter) => {
  const sorted = await dataToFilter.sort(descendent);
  return sorted

};

export const sortedTableByAgeMin = async (dataToFilter) => {
    const sorted = await dataToFilter.sort(ascendent);
    return sorted
  
  };

