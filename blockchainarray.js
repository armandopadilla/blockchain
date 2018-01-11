const calcHash = require('./calcHash');

const hash = calcHash(0, "0", 1465154705, "Armando's Genesis Block");

const getGenesisBlock = () => {
    return new Block(0, "0", 1465154705, "Armando's Genesis Block", hash);
};

const blockchain = [getGenesisBlock()];