const generateNextBlock = (blockData) => {
    const previousBlock = getLastestBlock();
    const nextIndex = previousBlock.index + 1;
    const nextTimestamp = new Date().getTime() / 1000;
    const nextHash = calcHash(nextIndex, previousBlock.hash, nextTimestamp, blockData);

    return new Block(nextIndex, previousBlock.hash, nextTimestamp, blockData, nextHash);
}