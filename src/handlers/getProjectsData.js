import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const getProjectsData = (projectsArray) =>
  projectsArray.map((project) => ({
    title: project.fields.title,
    date: project.fields.date,
    description: documentToReactComponents(project.fields.description),
    linkUrl: project.fields.linkUrl,
    linkCaption: project.fields.linkCaption,
    videoUrl: project.fields.videoUrl,
    imageUrl: `https:${project.fields.image.fields.file.url}`,
  }));
export default getProjectsData;
