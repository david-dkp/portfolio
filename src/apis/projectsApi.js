import contentfulDataSource from './contentfulDataSource';

const getProjects = async () => {
  const data = await contentfulDataSource
    .getClient()
    .getEntries({ content_type: 'project' });
  return data.items;
};

const projectsApi = {
  getProjects,
};

export default projectsApi;
