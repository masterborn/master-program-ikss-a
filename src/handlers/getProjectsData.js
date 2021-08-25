import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const getProjectsData = (projectsArray) => {
  const projectsDataArray = [];
  projectsArray.forEach((project) => {
    projectsDataArray.push({
      title: project.fields.title,
      date: project.fields.date,
      description: documentToReactComponents(project.fields.description),
      linkUrl: project.fields.linkUrl,
      linkCaption: project.fields.linkCaption,
      videoUrl: project.fields.videoUrl,
      imageUrl: `https:${project.fields.image.fields.file.url}`,
    });
  });
  return projectsDataArray;
};

export default getProjectsData;
