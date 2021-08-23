import axios from 'axios';

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;

const contentfulClient = {
  baseUrl: `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCESS_TOKEN}&order=-sys.updatedAt&content_type=`,
  
  cache: {},
  
  async makeRequest(url){
  
  },

  async getItems(contentType) {
    return this.makeRequest(`${this.baseUrl}${contentType}`);
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
    return this.makeRequest(`${this.baseUrl}basicContent&fields.page[in]=${page}`);
  },
};

export default contentfulClient;
