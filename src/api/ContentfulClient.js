import axios from 'axios';
import mergeAssets from '@root/handlers/mergeAssets';

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;

const contentfulClient = {
  baseUrl: `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCESS_TOKEN}&order=-sys.updatedAt&content_type=`,

  cache: {},

  async getItems(contentType) {
    const response = await axios.get(`${this.baseUrl}${contentType}`);
    const mergedData = await mergeAssets(response.data);
    return mergedData;
  },
  async getProjects() {
    return this.getItems('projects');
  },
  async getBoardMembers() {
    return this.getItems('boardMembers');
  },
  async getPartnerLogos() {
    return this.getItems('partnerLogos');
  },
  async getBasicContent(page) {
    const response = await axios.get(`${this.baseUrl}basicContent&fields.page[in]=${page}`);
    const mergedData = await mergeAssets(response.data);
    return mergedData;
  },
};

export default contentfulClient;
