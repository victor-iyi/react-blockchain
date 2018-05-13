import React from 'react';
import { englishNum } from '../actions/utils';

const BlockCard = (props) =>
  <div className={`card block-card ${!props.integrity ? '' : 'bg-danger'}`}>
    {/* Block header. */}
    <div className="card-header">
      <h5 className="card-title">{`${englishNum(1)} Block`}</h5>
    </div>

    {/* Block body. */}
    <div className="card-body">
      {/* Block ID */}
      <div className="input-group mb-3">
        <label for="block-id">Block ID: 1</label>
      </div>
      {/* Nonce */}
      <label for="nonce">Nonce</label>
      <div className="input-group mb-3">
        <input type="text" id="nonce" className="form-control"
          placeholder="Nonce" aria-label="Nonce" />
      </div>

      {/* Data. */}
      <label for="data">Data</label>
      <div className="input-group mb-3">
        <textarea className="form-control" id="data" placeholder="Data" aria-label="Data">
          {props.data}
        </textarea>
      </div>

      {/* Hash */}
      <label for="hash">Hash</label>
      <div className="input-group mb-3">
        <input type="text" id="hash" className="form-control" readOnly
          placeholder="Hash" value={props.hash} aria-label="Hash" />
      </div>
      {/* Previous Hash */}
      <label for="hash">Previous Hash</label>
      <div className="input-group mb-3">
        <input type="text" id="prev-hash" className="form-control" readOnly
          placeholder="Previous hash" value={props.prev_has} aria-label="Previous hash" />
      </div>
    </div>

    {/* Block footer. */}
    <div className="card-footer bg-transparent">
      <button className="btn btn-outline-secondary btn-lg btn-block">Mine</button>
    </div>
  </div>;

export default BlockCard;
