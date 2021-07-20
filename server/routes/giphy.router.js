const axios = require('axios');
const express = require('express');
const router = express.Router();
// Add dotenv config to server
require('dotenv').config();

router.get ('/giphy', (req, res) => {
	axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}`
	)
	.then(response => {
		console.log(response.data);
		res.sendStatus(200);
	})
	.catch(err => {
		console.log(err);
		res.sendStatus(500);
	});
})

module.exports = router;