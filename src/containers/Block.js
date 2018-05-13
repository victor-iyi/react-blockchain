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

class Block extends Component {

  render() {
    return (
      <div>
        <BlockCard />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ block: state.block });

export default connect(mapStateToProps)(Block);
