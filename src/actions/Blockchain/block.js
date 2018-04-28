import SHA256 from 'crypto-js/sha256';

class Block {

  constructor (data, options = {}) {
    this.data = data;
    this.options = options;

    /* TODO: Extract prevHash from options. */
    this.prevHash = '';
    this.hash = this.calculateHash();
  }

  calculateHash() {
    const message = JSON.stringify(this.data) + this.prevHash + JSON.stringify(this.options);
    return SHA256(message).toString();
  }

}

export default Block;
