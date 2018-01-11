const crypto = require('crypto');

module.exports = class Block{
  constructor(index, data, timestamp, previous_hash = ''){
    this.index = index;
    this.data = data;
    this.timestamp = timestamp;
    this.previous_hash = previous_hash;
    this.hash = '';
    this.nonce = 0;
  }

  calculateHash(complexity){
    this.nonce = 0;
    while(1){
      var calculated_hash = crypto.createHash('sha256')
        .update(this.index + JSON.stringify(this.data) + this.timestamp + this.previous_hash + this.nonce)
        .digest('base64').toString();
      this.nonce += 1;

      if(calculated_hash.substr(0, complexity) == Array(complexity).fill('0').join('')){
        this.hash = calculated_hash;
        return this.hash;
      }
    }
  }
}
