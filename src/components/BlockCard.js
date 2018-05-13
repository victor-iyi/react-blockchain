import React, { Component } from 'react';

const BlockCard = (props) =>
  <div className="card block-card">
    {/* Block header. */}
    <div className="card-header">
      <h5 className="card-title">1st Block</h5>
    </div>

    {/* Block body. */}
    <div className="card-body">
    <label for="block-id">Block ID</label>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="block-id">#</span>
        </div>
        <input type="text" className="form-control" placeholder="Block ID"
          aria-label="Block ID" aria-describedby="block-id" />
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
        <textarea className="form-control" id="data" placeholder="Data" aria-label="Data"></textarea>
      </div>
      {/* Hash */}
      <label for="hash">Hash</label>
      <div className="input-group mb-3">
        <input type="text" id="hash" className="form-control"
          placeholder="Hash" aria-label="Hash" />
      </div>
    </div>

    {/* Block footer. */}
    <div className="card-footer bg-transparent">
      <button className="btn btn-primary">Mine</button>
    </div>
  </div>;

export default BlockCard;
