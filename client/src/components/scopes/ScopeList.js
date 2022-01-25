import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchScopes } from '../../actions';

class ScopeList extends React.Component {
  componentDidMount() {
    this.props.fetchScopes();
  }

  renderAdmin(scope) {
    if (scope.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/scopes/edit/${scope.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/scopes/delete/${scope.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.scopes.map(scope => {
      return (
        <div className="item" key={scope.id}>
          {this.renderAdmin(scope)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/scopes/${scope.id}`} className="header">
              {scope.title}
            </Link>
            <div className="description">{scope.description}</div>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/scopes/new" className="ui button primary">
            Create Scope
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Scopes</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    scopes: Object.values(state.scopes),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchScopes }
)(ScopeList);