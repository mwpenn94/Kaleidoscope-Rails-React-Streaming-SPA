import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchScope, editScope } from '../../actions';
import ScopeForm from './ScopeForm';

class ScopeEdit extends React.Component {
  componentDidMount() {
    this.props.fetchScope(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editScope(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.scope) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a Scope</h3>
        <ScopeForm
          initialValues={_.pick(this.props.scope, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { scope: state.scopes[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchScope, editScope }
)(ScopeEdit);