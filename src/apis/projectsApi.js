const contentfulDataSource = require("./contentfulDataSource");


const getProjects = async () => {
    const data = await contentfulDataSource.getClient().getEntries({content_type: "project"})
    return data.items
}

module.exports = {
    getProjects
}