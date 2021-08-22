import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const pushProjectsData = (projectsArray, projectsAssets, projectsData) => {
  projectsArray.forEach((project) => {
    let imageUrl = '';
    projectsAssets.forEach((asset) => {
      if (asset.sys.id === project.fields.image.sys.id) {
        imageUrl = `https:${asset.fields.file.url}`;
      }
    });
    projectsData.push({
      title: project.fields.title,
      date: project.fields.date,
      description: documentToReactComponents(project.fields.description),
      linkUrl: project.fields.linkUrl,
      linkCaption: project.fields.linkCaption,
      videoUrl: project.fields.videoUrl,
      imageUrl,
    });
  });
};

export default pushProjectsData;
