/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable array-callback-return */
const mergeAssets = (apiElements) => {
  if (apiElements.hasOwnProperty('includes')) {
    const items = [...apiElements.items];
    const assets = [...apiElements.includes.Asset];
    const assetsNames = [];

    items.map((item) => {
      for (const property in item.fields) {
        if (item.fields[property].sys) {
          assetsNames.push(property);
        }
      }
      assetsNames.map((assetName) => {
        if (item.fields.hasOwnProperty(assetName)) {
          assets.map((asset) => {
            if (asset.sys.id === item.fields[assetName].sys.id) {
              // eslint-disable-next-line no-param-reassign
              item.fields[assetName] = asset;
            }
          });
        }
      });
    });
    return items;
  }
  return apiElements.items;
  
};

export default mergeAssets;
