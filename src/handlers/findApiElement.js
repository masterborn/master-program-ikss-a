export const findApiElementByIdentifier = (objectToSearch, identifierToFind) =>
  objectToSearch.find((element) => element.fields.identifier === identifierToFind);

export const findAssetByTitle = (objectToSearch, titleToFind) =>
  objectToSearch.find((element) => element.fields.title === titleToFind);
