var BlockChain = require('./BlockChain');

var easy_bc = new BlockChain();
easy_bc.addBlock('1st block', '1/1/2011');
easy_bc.addBlock('2nd block', '1/2/2011');
easy_bc.addBlock('3rd block', '1/3/2011');

console.log(easy_bc.blocks);
console.log('BlockChain isValid: ', easy_bc.isValid());

console.log('changing data of a block...')
easy_bc.blocks[1].data = 'ASD';
easy_bc.blocks[1].hash = easy_bc.blocks[1].calculateHash(easy_bc.complexity);
console.log('BlockChain isValid: ', easy_bc.isValid());
