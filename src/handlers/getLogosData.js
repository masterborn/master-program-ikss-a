const getLogosData = (logosArray) => {
    const logosDataArray = [];
    logosArray.forEach((logo) => {
      logosDataArray.push({
        title: logo.fields.name,
        linkUrl: logo.fields.linkUrl,
        imageUrl: logo.fields.logo.fields.file.url,
        width: logo.fields.logo.fields.file.details.image.width,
        height: logo.fields.logo.fields.file.details.image.height
      });
    });
    return logosDataArray;
  };

  export default getLogosData;