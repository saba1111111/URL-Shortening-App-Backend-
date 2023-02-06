const decodeUrls = {
  tags: ['URL'],
  description: 'decode urls.',
  summary: 'decode urls.',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            link: {
              type: 'string',
              description: 'short url',
              example: 'https://bit.ly/3HBZnrt',
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'ok!',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            example: {
              result: {
                created_at: '2023-01-29T17:40:58+0000',
                link: 'http://bit.ly/3HBZnrt',
                id: 'bit.ly/3HBZnrt',
                long_url: 'https://github.com/achogovadze/feazy_dashboard',
              },
            },
          },
        },
      },
    },
  },
};

const decodeUrlRoute = {
  '/decode': {
    post: decodeUrls,
  },
};

export default decodeUrlRoute;
