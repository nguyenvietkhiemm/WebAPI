var router = require('express').Router();

const siteController = require('../app/controllers/SiteController');

router.get('/', siteController.show);

module.exports = router;