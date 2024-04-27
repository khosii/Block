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
        + this.timestamp + JSON.stringify(this.data)).toString();
    
    }
}