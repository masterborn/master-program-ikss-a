import axios from 'axios';

import mergeAssets from '@root/handlers/mergeAssets';

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_API_TOKEN;
const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;

const contentfulClient = {
  baseUrl: `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCESS_TOKEN}&order=-sys.updatedAt&content_type=`,

  cache: {},

  async makeRequest(url) {
    if (this.cache[url]) {
      return this.cache[url];
    }
    let response;
    try {
      response = await axios.get(url);
    } catch (error) {
      throw new Error(`Contentful API: Exception while making request: ${JSON.stringify(error, null, 2)}`);
    }
    if (typeof response.data === 'string') {
      throw new Error('Response data type is not valid.');
    }
    if (response.status !== 200) {
      throw new Error('Invalid response status code.');
    }
    this.cache[url] = await mergeAssets(response.data);
    return this.cache[url];
  },

  async getData(contentType, page) {
    return this.makeRequest(
      contentType === 'basicContent' ?
        `${this.baseUrl}basicContent&fields.page[in]=${page}` :
        `${this.baseUrl}${contentType}`
    );
  },

  async getItems(contentType) {
    return this.getData(contentType);
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
    return this.getData('basicContent', page);
  },
};

export default contentfulClient;
