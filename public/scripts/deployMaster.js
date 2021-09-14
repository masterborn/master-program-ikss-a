const axios = require('axios');

axios.post('https://api.vercel.com/v1/integrations/deploy/prj_7ZlhSf710zyOamUNh2Ajex5sA8P9/1PDdGPHbkY')
  .then(() => console.log('✅ Deploying'))
  .catch(() => console.log('❌ Something went wrong.'));
