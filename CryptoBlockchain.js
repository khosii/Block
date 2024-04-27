//handle all operations of the entire chain

class CryptoBlockchain{
    constructor(){
        this.blockchain = [this.startGenesisBlock()];
    }
    
    createGenesisBlock(){
        return new CryptoBlock(0, "27/04/2024", "Initial Block in the chain", "0");

    }

    obtainLatestBlock(){
        return this.blockchain[this.blockchain.length -1];
    }

    addNewBlock(newBlock){
        newBlock.precedingHash = this.obtainLatestBlock().hash;
        newBlock.hash = newBlock.computeHash();
        this.blockchain.push(newBlock);
    }

    checkChainValidity(){
        for(let i =1; i < globalThis.blockchain.length; i++){
            const currentBlock = this.blockchain[i];
            const precedingBlock = this.blockchain[i-1];

            if(currentBlock.hash !== currentBlock.computeHash()){
                return false;
            }
            
            if(currentBlock.precedingHash !== precedingBlock.hash)
            return false;
        }

        return true;
    }
}