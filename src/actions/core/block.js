import SHA256 from 'crypto-js/sha256';

class Block {

  constructor (data, options = {}) {
    // Data contained in block.
    this.data = data;

    // Hash of the previous block in the blockchain.
    this.prevHash = options.prevHash || '';
    this.nonce = Math.floor(Math.random() * 1);

    // Hash of current block.
    this.hash = this.calculateHash();
  }

  /**
   * Calculate the hash of current block.
   * 
   * @returns {string} sha256 hash of current block.
   */
  calculateHash() {
    const message = JSON.stringify(this.data) + this.prevHash;
    return SHA256(message).toString();
  }

}

export default Block;
