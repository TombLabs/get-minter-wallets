import { Metaplex } from '@metaplex-foundation/js'
import { Connection, PublicKey } from '@solana/web3.js'
import fs from 'fs'

const creator = process.argv[2]
const rpc = process.argv[3]


const connection = new Connection(rpc || 'https://rpc.ankr.com/solana', 'confirmed')
const metaplex = Metaplex.make(connection)

const creatorPub = new PublicKey(creator)
function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getWallets(){
    const results = await connection.getSignaturesForAddress(creatorPub)
    let sigArr: Array<string> = []

    results.forEach((tx) =>{
        sigArr.push(tx.signature)
    })

    if (sigArr.length === results.length){
        const parsedTxs = await connection.getParsedTransactions(sigArr)
        let holders: Array<string> = []
        for (let i = 0; i < parsedTxs.length; i++){
            
            if (parsedTxs?.[i]?.meta?.postTokenBalances?.[0].owner){
                holders.push(parsedTxs?.[i]?.meta?.postTokenBalances?.[0].owner!)
                console.log(`Saving: ${parsedTxs?.[i]?.meta?.postTokenBalances?.[0].owner!}`)
            }
            if (i === parsedTxs.length - 1){
                createJson(holders)
            }
await sleep(300)
        }

        
    }
    
}
getWallets()

function createJson(holders: Array<string>){
    fs.writeFile('./src/wallets/wallets.json', JSON.stringify(holders), (err) =>{
        if (err)
        console.log(err)
        else{
            console.log('Success, file can be found in ./src/wallets/wallets.json')
        }
    })
}