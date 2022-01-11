const contentfulDataSource = require("./contentfulDataSource");

const getAvailability = async () => {
    const data = await contentfulDataSource.getClient().getEntry("42Gi5GnmzCcr5XckULAf3V")
    return data
}

module.exports = {
    getAvailability
}