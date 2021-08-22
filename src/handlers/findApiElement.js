export const findApiElementById = (objectToSearch, idToFind) =>
  objectToSearch.find((element) => element.sys.id === idToFind);

export const findApiAssetById = (objectToSearch, idToFind) =>
  objectToSearch.find((element) => element.sys.id === idToFind);
