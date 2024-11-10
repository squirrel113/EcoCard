import { ethers } from 'ethers';
import React from 'react';

const WalletPage = () => {
  async function connectWallet() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const address = await signer.getAddress();
      const message = "Please sign this message to verify wallet ownership.";
      const signature = await signer.signMessage(message);

      const response = await fetch('/api/connect-wallet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address, signature, message }),
      });

      const result = await response.json();
      console.log(result);
    } else {
      console.error('MetaMask not detected!');
    }
  }

  return (
    <div>
      <h1>Connect Your Wallet</h1>
      <button onClick={connectWallet}>Connect Wallet</button>
    </div>
  );
};

export default WalletPage;
