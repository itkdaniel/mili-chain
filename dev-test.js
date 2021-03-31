const Blockchain = require('./blockchain')
const Block = require('./block');


// const block = new Block('foo','bar','zoo', 'baz');

// console.log(block.toString());
// console.log(Block.genesis().toString());

// const fooBlock = Block.mineBlock(Block.genesis(), 'foo');
// console.log(fooBlock.toString());

// const blockchain = new Blockchain();
// blockchain.addBlock(Block.genesis);
// blockchain.addBlock(fooBlock);

// console.log(blockchain.toString);

const fooBlock = Block.mineBlock(Block.genesis(), 'foo');
console.log(fooBlock.toString());