import contentful from "contentful";
let client = null

const initialize = () => {
    client = contentful.createClient({
        space: process.env["REACT_APP_CONTENTFUL_SPACE_ID"],
        accessToken: process.env["REACT_APP_CONTENTFUL_API_KEY"]
    })
}

const getClient = () => client

const contentfulDataSource = { initialize, getClient }

export default contentfulDataSource