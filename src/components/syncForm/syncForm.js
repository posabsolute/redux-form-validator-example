import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SyncForm from './syncForm.jsx';
import syncModel from '../../models/syncModel.js';

import {validateProps} from 'redux-form-validator';
import {validateActions} from 'redux-form-validator';

const mapStateToProps = state => ({ validationStore: state.validate});
const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(validateActions, dispatch),
    onSubmit: function submit(evt, validate) {
      const form = evt.target;
      if (validate.formValidate(form.elements)) {
        console.log('form valid');
      }else {
        console.log('form invalid');
      }
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class SyncFormComponent extends React.Component {
  componentWillMount() {
    console.log("TABAR")
    this.validate = validateProps(this, syncModel);
  }
  render() {
    return <SyncForm {...this.props} validate={this.validate} />;
  }
}
