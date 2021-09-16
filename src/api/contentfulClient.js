import axios from 'axios';
import mergeAssets from '@root/handlers/mergeAssets';

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_API_TOKEN;
const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;

const contentfulClient = {
  baseUrl: `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCESS_TOKEN}&order=-sys.updatedAt&content_type=`,

  cache: {},

  async makeRequest(contentType, page) {
    if (this.cache[contentType]) {
      return this.cache[contentType];
    }
    if (contentType === 'basicContent') {
      try {
        const response = await axios.get(`${this.baseUrl}basicContent&fields.page[in]=${page}`);
        if (typeof response.data === 'string') {
          throw new Error('Response data type is not valid.');
        }
        if (response.status !== 200) {
          throw new Error('Invalid response status code.');
        }
        const mergedData = await mergeAssets(response.data);
        this.cache[`${contentType}-${page}`] = mergedData;
        return this.cache[`${contentType}-${page}`];
      } catch (error) {
        throw new Error(error.message);
      }
    }

    try {
      const response = await axios.get(`${this.baseUrl}${contentType}`);
      if (typeof response.data === 'string') {
        throw new Error('Response data type is not valid.');
      }
      if (response.status !== 200) {
        throw new Error('Invalid response status code.');
      }
      const mergedData = await mergeAssets(response.data);
      this.cache[contentType] = mergedData;
      return this.cache[contentType];
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async getItems(contentType) {
    return this.makeRequest(contentType);
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
    return this.makeRequest('basicContent', page);
  },
};

export default contentfulClient;
