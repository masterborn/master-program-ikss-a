import axios from 'axios';

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;

const fetchContentfulApi = {
  baseUrl: `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCESS_TOKEN}&content_type=`,

  async getAssets(contentType) {
    const response = await axios.get(`${this.baseUrl}${contentType}`);
    return response.data.includes.Asset;
  },
  async getItems(contentType) {
    const response = await axios.get(`${this.baseUrl}${contentType}`);
    return response.data.items;
  },

  async getProjects() {
    return this.getItems('projects');
  },
  async getProjectsAssets() {
    return this.getAssets('projects');
  },
  async getBoardMembers() {
    return this.getItems('boardMembers');
  },
  async getBoardMembersAssets() {
    return this.getAssets('boardMembers');
  },
  async getPartnerLogos() {
    return this.getItems('partnerLogos');
  },
  async getPartnerLogosAssets() {
    return this.getAssets('partnerLogos');
  },
  async getBasicContent(page) {
    const response = await axios.get(`${this.baseUrl}basicContent&fields.page[in]=${page}`);
    return response.data.items;
  },
  async getBasicContentAssets(page) {
    const response = await axios.get(`${this.baseUrl}basicContent&fields.page[in]=${page}`);
    return response.data.includes.Asset;
  },
};

export default fetchContentfulApi;
