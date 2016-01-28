import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FormComponent from './asyncInput.jsx';
import formModel from '../../models/asyncInputModel.js';

import {validateProps} from 'redux-form-validator';
import {validateActions} from 'redux-form-validator';

const mapStateToProps = state => ({ validationStore: state.validate});
const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(validateActions, dispatch),
    onSubmit: function submit(evt, validate) {
      const form = evt.target;
      validate.formValidate(form.elements).then( () => {
        console.log('form valid');
      }).catch(() => {
        console.log('form invalid');
      });
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class SyncFormComponent extends React.Component {
  componentWillMount() {
    this.validate = validateProps(this, formModel);
  }
  render() {
    return <FormComponent {...this.props} validate={this.validate} />;
  }
}
