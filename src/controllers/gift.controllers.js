const Gift = require('../models/gift.model');


const createGift = async (req, res) => {
  try {
    const { noun, address, city, donation, quantity, expirationDate } = req.body;
    const newGift = new Gift({
        noun,
        address,
        city,
        donation,
        quantity,
        expirationDate: expirationDate?new Date(expirationDate):''
    });
    await newGift.save();

    return res.status(201).json({
      success: true,
      message: 'Gift created successfully',
      data: newGift,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'An error occurred while creating the gift',
      error: error.message,
    });
  }
};


const getAllGifts = async (req, res) => {
  try {
    const gifts = await Gift.find();
    res.status(200).json({ success: true, gifts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


module.exports = {
  createGift,
  getAllGifts
};
