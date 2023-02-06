import getUrls from './routes/getUrls';
import encodeUrls from './routes/encodeUrl';
import decodeUrls from './routes/decodeUrls';

const swaggerDocumentation = {
  openapi: '3.0.3',
  info: {
    title: 'URL Shortening App',
    description:
      'URL Shortening App can makes your url shorten and also it can makes it Lengthen.',
    version: '1.0.11',
  },
  contact: {
    email: 'sabapachulia123@gmail.com',
  },
  servers: [
    {
      url: 'http://localhost:4000',
      description: 'Local dev',
    },
  ],
  tags: [{ name: 'URL', description: 'Shorten and Lengthen Urls.' }],
  paths: { ...getUrls, ...encodeUrls, ...decodeUrls },
};

export default swaggerDocumentation;
