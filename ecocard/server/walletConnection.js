const express = require('express');
const ethers = require('ethers'); 
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());

router.post('/connect-wallet', async (req, res) => {
  try {
   
    const { address, signature, message } = req.body;

    if (!address || !signature || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const signerAddress = ethers.utils.verifyMessage(message, signature);
    if (signerAddress.toLowerCase() !== address.toLowerCase()) {
      return res.status(401).json({ error: 'Invalid wallet signature' });
    }
    return res.status(200).json({ success: true, message: 'Wallet connected', address });
  } catch (error) {
    console.error('Error connecting wallet:', error);
    return res.status(500).json({ error: 'Failed to connect wallet' });
  }
});

module.exports = router;
