var Block = require('./Block');

module.exports = class BlockChain{
  constructor(){
    this.complexity = 3;

    var genysisBlock = this.createGenysisBlock();
    genysisBlock.calculateHash(this.complexity);
    this.blocks = [genysisBlock];
  }

  createGenysisBlock(){
    return new Block(0, '1/1/2011', 'Genysis Block', '')
  }

  addBlock(data, timestamp){
    var previous_hash = this.blocks[this.blocks.length - 1].hash;
    var newBlock = new Block(this.blocks.length, data, timestamp, previous_hash);
    newBlock.calculateHash(this.complexity);
    this.blocks.push(newBlock);
  }

  isValid(){
    for(var i = 1; i < this.blocks.length ; i++){
      if(this.blocks[i].previous_hash != this.blocks[i-1].hash){
        return false;
      }
      if(this.blocks[i].calculateHash(this.complexity) != this.blocks[i].hash){
        return false;
      }
    }
    return true;
  }
}
