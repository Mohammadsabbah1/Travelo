const axios = require('axios');

const getImage = async (location) => {
  const apiKey = process.env.PIXABAY_API_KEY;
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(location)}&image_type=photo`;

  try {
    const response = await axios.get(url);
    if (response.data.hits && response.data.hits.length > 0) {
      return response.data.hits[0].webformatURL;
    } else {
      throw new Error('No images found for the location.');
    }
  } catch (error) {
    console.error('Error getting image:', error.message);
    throw error;
  }
};

module.exports = getImage;

