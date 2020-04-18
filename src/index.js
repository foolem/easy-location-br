import data from "./data/index.json";

export const getAllStates = () =>
  data.map((item) => ({ id: item.id, name: item.name }));

export const getAllCities = () => [].concat(...data.map((item) => item.cities));

export const getStateCities = (stateId) => {
  const result = data.find((item) => item.id === stateId);
  return result !== undefined ? result.cities : [];
};
