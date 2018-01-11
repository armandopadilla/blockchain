const calcHash = require('./calcHash');

const isValidNewBlock = (newBlock, previousBlock) => {
    if (previousBlock.index + 1 !== newBlock.index) {
        console.log("invalid index yo");
        return false;
    }
    else if (previousBlock.hash !== newBlock.previousHash) {
        console.log("invalid previousHash");
        return false;
    }
    else if (calcHashForBlock(newBlock) !== newBlock.hash) {
        console.log("invalid hash: "+calcHashForBlock(newBlock) + ' '+newBlock.hash);
        return false;
    }

    return true;
}

const calcHashForBlock = (block) => {
    return calcHash(block.index, block.previousHas, block.timestamp, block.data);
}

