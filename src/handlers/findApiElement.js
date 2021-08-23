const findApiElementByIdentifier = (objectToSearch, identifierToFind) =>
  objectToSearch.find((element) => element.fields.identifier === identifierToFind);

export default findApiElementByIdentifier;
