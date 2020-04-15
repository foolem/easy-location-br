import { getAllStates, getAllCities, getStateCities } from ".";

describe("getAllStates", () => {
  it("returns all states", () => {
    expect(getAllStates()).toBeTruthy();
  });
});

describe("getAllCities", () => {
  it("returns all cities", () => {
    expect(getAllCities()).toBeTruthy();
  });
});

describe("getStateCities", () => {
  describe("when valid stateId", () => {
    it("returns all cities from state", () => {
      expect(getStateCities("PR")).toBeTruthy();
    });
  });

  describe("when invalid stateId", () => {
    it("returns an empty array", () => {
      expect(getStateCities("PRA")).toEqual([]);
    });
  });
});
