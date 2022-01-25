import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchScope } from '../../actions';

class ScopeShow extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchScope(id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  buildPlayer() {
    if (this.player || !this.props.scope) {
      return;
    }

    const { id } = this.props.match.params;
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    if (!this.props.scope) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.scope;

    return (
      <div>
        <video ref={this.videoRef} style={{ width: '100%' }} controls />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { scope: state.scopes[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchScope }
)(ScopeShow);