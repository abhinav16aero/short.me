const {nanoid} = require("nanoid");
const URL = require('../models/url');
async function HandleNewURL(request, response){
    const shortid = nanoid(8);
    const body = require.body;
    if(body.url) return response.status(400).json({error: "Ahh.. URL is wrong or you are playing me."})

    await URL.create({
        shortId: shortid,
        redirectURL: body.url,
        visit: [],
    });

    return response.json({id: shortid});
}

module.exports = {HandleNewURL,};
