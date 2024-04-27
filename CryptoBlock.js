const Desktop = require('crypto-js');

class CryptoBlock{
    constructor(index, timestamp, data, precedingHash=" ") {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.precedingHash = precedingHash;
        this.hash = this.computeHash();

    }
    computeHash(){
        return Desktop(this.index + this.precedingHash 
        + this.timestamp + JSON.stringify(this.data)+this.nonce).toString();
    
    }

    proofOfWork(difficulty){
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.computeHash(); 
        }
    }

    addNewBlock() {
        newBlock.precedingHash = this.obtainLatestBlock().hash;
        newBlock.proofOfWork(this.difficulty);
        this.blockchain.push(newBlock);
    
    }
}