/**
 * @author
 *   Victor I. Afolabi
 *   Artificial Intelligence & Software Engineer.
 *   Email: javafolabi@gmail.com
 *   GitHub: https://github.com/victor-iyiola
 *
 * @project
 *   File: Block.jsx
 *   Created on 12 May, 2018 @ 8:38 PM.
 *
 * @license
 *   MIT License
 *   Copyright (c) 2018. Victor I. Afolabi. All rights reserved.
 **/

import React, { Component } from 'react';
import { connect } from 'react-redux';


import BlockCard from '../components/BlockCard';
import { createBlock, updateBlock } from '../actions/block';

class Block extends Component {

  constructor (props) {
    super(props);
    this.state = {
      data: '',
      id: 1,
    };

    // Method binding.
    this._updateBlock = this._updateBlock.bind(this);
  }

  componentDidMount() {
    this.props.createBlock(this.state.data);
  }

  _updateBlock(data) {
    this.setState({ data });

    this.props.updateBlock(this.props.block, data);
  }

  render() {
    const { block } = this.props;

    // console.log(block);
    return (
      <div>
        <BlockCard data={this.state.data} updateData={this._updateBlock}
          id={block.id} nonce={block.nonce}
          hash={block.hash} prevHash={block.prevHash} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ block: state.block });

export default connect(mapStateToProps, { createBlock, updateBlock })(Block);
