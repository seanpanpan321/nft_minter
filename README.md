# `DFPay demo app`

> This is the demo app for DFPay

DFPay aims to allow users to make food delivery payments using stable coins on the Solana blockchain. This repository contains the source code for DFPay, which is built on top of the [Solana-nft-minter boilerplate](https://github.com/JohnVersus/solana-nft-minter) by JohnVersus, and uses the [Moralis](https://moralis.io?utm_source=github&utm_medium=readme&utm_campaign=ethereum-boilerplate) API for interacting with the blockchain.

## Features

- Payment processing using stable coins on the Solana blockchain.
- Minting of receipts as NFTs upon successful payment.
- Fetching and displaying metadata of receipts in the receipt section of the Dapp.

## Getting Started

To get started with DFPay, follow these steps:

1. Clone this repository to your local machine:

```sh
git clone https://github.com/seanpanpan321/nft_minter.git
```

2. Install the dependencies:

```sh
cd DFPay
yarn install
```

3. Set up Moralis API credentials:

DFPay uses Moralis API for interacting with the Solana blockchain. You need to set up Moralis API credentials in order to use DFPay. Follow the steps below:

- Sign up for a free account at https://moralis.io/.
- Create a new project and obtain the Application ID and Server URL from the Moralis dashboard.
- Set up the environment variables by creating a `.env.local` file in the root of the project and adding the following:

```sh
# devnet is used for chain Id as we will be testing the app on devnet chain
APP_CHAIN_ID=devnet
APP_DOMAIN=ethereum.boilerplate 

MORALIS_API_KEY= [your moralis api key]

# Linux: `openssl rand -hex 32` or go to https://generate-secret.now.sh/64
NEXTAUTH_SECRET= xxx
 
# replace for production
NEXTAUTH_URL=http://localhost:3000

# Wallet private used to upload NFT metadata to arweave storage
PRIVATE_KEY = [your private key]
```

4. Start the development server:

```sh
yarn build
yarn start
```


This will start the DFPay Dapp on your local machine, which you can access in your web browser at http://localhost:3000/.

## Usage

DFPay allows users to make food delivery payments using stable coins on the Solana blockchain. Upon successful payment, a receipt is minted as an NFT, and the metadata of the receipt can be fetched and displayed in the receipt section of the Dapp.

To use DFPay, follow these steps:

1. Connect your wallet: Connect your Solana wallet to the DFPay Dapp using Solflare wallet, as Phantom wallet currently has dependency issues in the recent update.

2. Choose a food item: Select a food item from the available options in the Dapp.

3. Make payment: Choose the stable coin you want to use for payment and follow the on-screen instructions to complete the payment process.

4. Mint receipt: Upon successful payment, a receipt will be minted as an NFT on the Solana blockchain. The receipt will contain metadata such as the food item details, payment amount, and transaction information.

5. View receipt: The metadata of the minted receipt can be fetched and displayed in the receipt section of the Dapp. You can view the details of the receipt, including the NFT token ID, transaction hash, and other relevant information.

## Acknowledgements

DFPay is built on top of the Solana-nft-minter boilerplate by JohnVersus, and we are grateful for their contribution to the Solana developer community. We also acknowledge the Moralis API for providing powerful tools for interacting with the Solana blockchain, enabling the seamless payment and NFT minting functionality in DFPay.


