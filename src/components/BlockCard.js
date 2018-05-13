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
        <label htmlFor="block-id">Block ID: 1</label>
      </div>
      {/* Nonce */}
      <label htmlFor="nonce">Nonce</label>
      <div className="input-group mb-3">
        <input type="text" id="nonce" className="form-control"
          value={props.nonce} placeholder="Nonce" aria-label="Nonce" />
      </div>

      {/* Data. */}
      <label htmlFor="data">Data</label>
      <div className="input-group mb-3">
        <textarea onChange={e => props.updateData(e.target.value)} id="data" value={props.data}
          className="form-control" placeholder="Data" aria-label="Data">
        </textarea>
      </div>

      {/* Hash */}
      <label htmlFor="hash">Hash</label>
      <div className="input-group mb-3">
        <input type="text" id="hash" className="form-control" readOnly
          placeholder="Hash" value={props.hash} aria-label="Hash" />
      </div>
      {/* Previous Hash */}
      <label htmlFor="hash">Previous Hash</label>
      <div className="input-group mb-3">
        <input type="text" id="prev-hash" className="form-control" readOnly
          placeholder="Previous hash" value={props.prevHash} aria-label="Previous hash" />
      </div>
    </div>

    {/* Block footer. */}
    <div className="card-footer bg-transparent">
      <button className="btn btn-outline-secondary btn-lg btn-block">Mine</button>
    </div>
  </div>;

export default BlockCard;
