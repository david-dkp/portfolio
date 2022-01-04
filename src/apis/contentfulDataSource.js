const contentful = require("contentful");
let client = null

const initialize = () => {
    client = contentful.createClient({
        space: process.env["REACT_APP_CONTENTFUL_SPACE_ID"],
        accessToken: process.env["REACT_APP_CONTENTFUL_API_KEY"]
    })
}

module.exports.initialize = initialize
module.exports.getClient = () => client