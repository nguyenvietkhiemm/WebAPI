class SiteController{
    show(req, res, next) {
        return res.status(200).json({msg: "Here is site"});
    }
}

module.exports = new SiteController();