const router = require('express').Router();
const giftController = require('../controllers/gift.controllers');

router.post('/gift', giftController.createGift);

router.get('/gifts', giftController.getAllGifts);



module.exports = router;
