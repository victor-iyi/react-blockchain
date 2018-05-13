import Block from './block';

class Blockchain {

  constructor () {
    /* TODO: Chain is represented as arrays for simplicity. In reality, it should be a DB or sth. */
    this.chain = [this.createGensisBlock()];
  }

  /**
   * Creates the First block in this blockchain - called The Gensis Block.
   * 
   * @returns {Block} First block in the chain.
   */
  createGensisBlock() {
    const data = { name: 'Genesis block' };
    const options = { prevHash: '' };

    return new Block(data, { options: options });
  }

}

export default Blockchain;
