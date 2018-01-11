class Block {
    constructor(index, previousHash, timestamp, data, hash) {
        this.index = index;
        this.previousHas = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.has = hash.toString();
    }
}