const Blockchain = require('./blockchain');
const Block = require('./block');

// Test- Blockchain's initial Block
// Test- adding a new block to its chain successfully
describe('Blockchain', () => {
	let bc, bc2;

	beforeEach(() => {
		bc = new Blockchain();
		bc2 = new Blockchain();
	});

	// Test genesis block
	it('starts with genesis block', () => {
		expect(bc.chain[0]).toEqual(Block.genesis());
	});

	// Test add new block
	it('adds a new block', () => {
		const data = 'foo';
		bc.addBlock(data);

		expect(bc.chain[bc.chain.length-1].data).toEqual(data);
	});

	// Test validate a valid chain
	it('validates a valid chain', () => {
		bc2.addBlock('foo');

		expect(bc.isValidChain(bc2.chain)).toBe(true);
	});
	it('invalidates a chain with a corrupt genesis block', () => {
		bc2.chain[0].data = 'Bad data';

		expect(bc.isValidChain(bc2.chain)).toBe(false);
	});
	it('invalidates a corrupt chain', () => {
		bc2.addBlock('foo');
		bc2.chain[1].data = 'Not foo';

		expect(bc.isValidChain(bc2.chain)).toBe(false);
	});

	it('replaces chain with valid chain', () => {
		bc2.addBlock('goo');
		bc.replaceChain(bc2.chain);

		expect(bc.chain).not.toEqual(bc2.chain);
	});
	it('Does not replace the chain with one of less than or equal to length', () => {
		bc.addBlock('foo');
		bc.replaceChain(bc2.chain);

		expect(bc.chain).not.toEqual(bc2.chain);
	});
});

