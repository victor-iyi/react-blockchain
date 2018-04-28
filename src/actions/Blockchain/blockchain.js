import Block from './block';

class Blockchain {
  constructor () {
    this.chain = [this.createGensisBlock()];
  }

  createGensisBlock() {
    return new Block({ name: 'Genesis Block' }, {
      options: {
        prevHash: '',
      }
    });
  }

}

export default Blockchain;
