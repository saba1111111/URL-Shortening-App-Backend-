const encodeUrls = {
  tags: ['URL'],
  description: 'encode urls.',
  summary: 'encode urls.',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            url: {
              type: 'string',
              description: 'long url',
              example: 'https://github.com/achogovadze/feazy_dashboard',
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK!',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            example: {
              urlInfo: {
                long_url: 'https://github.com/achogovadze/feazy_dashboard',
                link: 'https://bit.ly/3HBZnrt',
                id: 'bit.ly/3HBZnrt',
              },
            },
          },
        },
      },
    },
  },
};

const encodeUrlRoute = {
  '/encode': {
    post: encodeUrls,
  },
};

export default encodeUrlRoute;
