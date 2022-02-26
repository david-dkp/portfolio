import contentfulDataSource from './contentfulDataSource';

const getAvailability = async () => {
  const data = await contentfulDataSource
    .getClient()
    .getEntry('42Gi5GnmzCcr5XckULAf3V');
  return data;
};

const availabilityApi = {
  getAvailability,
};

export default availabilityApi;
