import React from 'react';
import {LabelError} from 'redux-form-validator';

export default ({validate, onSubmit}) => (
  <section>
    <LabelError classes="form-error" field={validate.formStore()} />
    <form name="syncForm" onSubmit={ (evt) => { evt.preventDefault(); onSubmit.call(this, evt, validate); }} >
      <h2>Asyncronous inputs</h2>
      <div className="form-group">
        <label>Validate async function</label>
        <input type="text" className={validate.classes('input-line', 'asyncInput')} name="asyncInput" {...validate} />
        <LabelError field={validate.fieldStore('asyncInput')} />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="text" className={validate.classes('input-line', 'username')} name="username" {...validate} />
        <LabelError field={validate.fieldStore('username')} />
      </div>
      <button type="submit">submit</button>
    </form>
  </section>
);
