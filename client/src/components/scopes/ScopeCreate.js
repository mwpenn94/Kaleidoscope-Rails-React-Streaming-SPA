import React from 'react';
import { connect } from 'react-redux';
import { createScope } from '../../actions';
import ScopeForm from './ScopeForm';

class ScopeCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createScope(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Scope</h3>
        <ScopeForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createScope }
)(ScopeCreate);