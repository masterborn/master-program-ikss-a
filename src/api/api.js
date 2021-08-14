import axios from 'axios';

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;

const fetchApiData = async (page) => {
  try {
    const response = await axios.get(
      `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCESS_TOKEN}&content_type=basicContent&fields.page[in]=${page}`,
    );
    return response.data;
  } catch (error) {
    throw new Error('API data fetch failed');
  }
};

export default fetchApiData;
