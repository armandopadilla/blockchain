const calcHash = (index, previousHash, timestamp, data) => {
    return CryptoJS.SHA256(index+previousHash+timestamp+data).toString();
}