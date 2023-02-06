const getAllUrls = {
  tags: ['URL'],
  description: 'List all the urls.',
  summary: 'List all the urls.',
  responses: {
    200: {
      description: 'OK!',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            example: {
              urls: [
                {
                  long_url: 'random long link',
                  link: 'random small link',
                  id: 'random id',
                },
              ],
            },
          },
        },
      },
    },
  },
};

const getAllUrlsRouter = {
  '/allUrls': {
    get: getAllUrls,
  },
};

export default getAllUrlsRouter;
