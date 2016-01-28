import React from 'react';
import {LabelError} from 'redux-form-validator';
/* component styles */


export default ({validate, onSubmit}) => (
  <section>
    <LabelError classes="form-error" field={validate.formStore()} />
    <form name="syncForm" onSubmit={ (evt) => { evt.preventDefault(); console.log(evt.target.elements); onSubmit.call(this, evt, validate); }} >
      <h2>Syncronous form</h2>
      <div className="form-group">
        <label>Validate function, valid string is test</label>
        <input type="text" className={validate.classes('input-line', 'func')} name="func" {...validate} />
        <LabelError field={validate.fieldStore('func')} />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="text" className={validate.classes('input-line', 'username')} name="username" {...validate} />
        <LabelError field={validate.fieldStore('username')} />
      </div>
      <div className="form-group">
        <label>customPattern (regex match sample)</label>
        <input type="text" className={validate.classes('input-line', 'customPattern')} name="customPattern" {...validate} />
        <LabelError field={validate.fieldStore('customPattern')} />
      </div>
      <div className="form-group">
        <label>age</label>
        <input type="text" className={validate.classes('input-line', 'age')}name="age" {...validate} />
        <LabelError field={validate.fieldStore('age')} />
      </div>
      <div className="form-group">
        <label>range 1-10</label>
        <input type="text" className={validate.classes('input-line', 'age')} name="range" {...validate} />
        <LabelError field={validate.fieldStore('range')} />
      </div>
      <div className="form-group">
        <label>postalCode length 8</label>
        <input type="text" className={validate.classes('input-line', 'postalCode')} name="postalCode" {...validate} />
        <LabelError field={validate.fieldStore('postalCode')} />
      </div>
      <div className="form-group">
        <label>country (oneof array, canada)</label>
        <input type="text" className={validate.classes('input-line', 'country')} name="country" {...validate} />
        <LabelError field={validate.fieldStore('country')} />
      </div>
      <div className="form-group">
        <label>password (minlength 4, maxLength 10)</label>
        <input type="text" className={validate.classes('input-line', 'password')} name="password" {...validate} />
        <LabelError field={validate.fieldStore('password')} />
      </div>
      <div className="form-group">
        <label>repeat password (equalto password)</label>
        <input type="text" className={validate.classes('input-line', 'repeatpassword')} name="repeatpassword" {...validate} />
        <LabelError field={validate.fieldStore('repeatpassword')} />
      </div>
      <div className="form-group">
        <label>rangeLength 4-10</label>
        <input type="text" className={validate.classes('input-line', 'rangeLength')} name="rangeLength" {...validate} />
        <LabelError field={validate.fieldStore('rangeLength')} />
      </div>

      <div className="form-group">
        <label>Radio buttons</label>
        <div><input type="radio" className={validate.classes('input-line', 'gender')} value="male" name="gender" {...validate} /> male</div>
        <div><input type="radio" className={validate.classes('input-line', 'gender')} value="female" name="gender" {...validate} /> female</div>
        <div><input type="radio" className={validate.classes('input-line', 'gender')} value="" name="gender" {...validate} /> no value</div>

        <LabelError field={validate.fieldStore('gender')} />
      </div>


      <div className="form-group">
        <label>Checkboxes</label>
        <div><input type="checkbox" className={validate.classes('input-line', 'car')} value="honda" name="car" {...validate} /> toyota</div>
        <div><input type="checkbox" className={validate.classes('input-line', 'car')} value="toyota" name="car" {...validate} /> toyota</div>
        <div><input type="checkbox" className={validate.classes('input-line', 'car')} value="camaro" name="car" {...validate} /> camaro</div>
        <div><input type="checkbox" className={validate.classes('input-line', 'car')} value="Hyunday" name="car" {...validate} /> Hyunday</div>

        <LabelError field={validate.fieldStore('car')} />
      </div>


      <div className="form-group">
        <label>select</label>
        <select name="country2" className={validate.classes('input-line', 'country2')} {...validate} >
          <option value=""></option>
          <option value="Canada">Canada</option>
          <option value="France">France</option>
          <option value="England">England</option>
        </select>
        <LabelError field={validate.fieldStore('country2')} />
      </div>

      <div className="select-multi">
        <label>select</label>

      </div>
      <button type="submit">submit</button>
    </form>
  </section>
);
