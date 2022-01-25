import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchScope, deleteScope } from '../../actions';

class ScopeDelete extends React.Component {
  componentDidMount() {
    this.props.fetchScope(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteScope(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.scope) {
      return 'Are you sure you want to delete this scope?';
    }

    return `Are you sure you want to delete the scope with title: ${
      this.props.scope.title
    }`;
  }

  render() {
    return (
      <Modal
        title="Delete Scope"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { scope: state.scopes[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchScope, deleteScope }
)(ScopeDelete);