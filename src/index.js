import data from "./data";

export const getAllStates = () =>
  data.map(item => ({ id: item.id, name: item.name }));

export const getAllCities = () => data.map(item => item.cities);

export const getStateCities = stateId => {
  const result = data.find(item => item.id === stateId);
  return result !== undefined ? result.cities : [];
};
