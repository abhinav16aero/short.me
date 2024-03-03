const {nanoid} = require("shortid");
const URL = require('../models/url');
async function HandleNewURL(request, response){
    const shortid = nanoid();
    const body = require.body;
    if(body.url) return response.status(400).json({error: "Ahh.. URL is wrong or you are playing me."})

    await URL.create({
        shortId: shortid,
        redirectURL: body.url,
        visit: [],
    });
    return response.json({id: shortid});
}

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.json({
      totalClicks: result.visitHistory.length,
      analytics: result.visitHistory,
    });
}

module.exports = {
    HandleNewURL,
    handleGetAnalytics,
};
