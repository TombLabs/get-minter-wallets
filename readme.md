# Get Minted Wallets

Small script to get a hashlist of minters from a candy machine using the Candy Machine Creator ID. AFter running you can find your wallets.json in the ./src/wallets folder.

The Candy Machine Creator ID can be found by looking at the creator array of an nft. It is the address at index 0 (the first) in the array. On Solscan, navigate to an nft, click creators and it will be the first address and should have 0% royalties.

## Installation

Clone this repository

```bash
yarn install
or
npm install
```

## Usage

```bash
yarn start <candy machine creator id> <custom rpc>
```

```bash
npm start <candy machine creator id> <custom rpc>
```

Example:

```bash
yarn start 61X22Z6QnRzeuaPjvdWN4npRBBFNpVdkdMgWvRNt5dfm https://api.mainnet-beta.solana.com
```

```bash
npm start 61X22Z6QnRzeuaPjvdWN4npRBBFNpVdkdMgWvRNt5dfm https://api.mainnet-beta.solana.com
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
