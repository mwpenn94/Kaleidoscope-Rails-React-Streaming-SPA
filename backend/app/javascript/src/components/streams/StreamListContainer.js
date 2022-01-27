import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import StreamList from './StreamList';


const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};
  
export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);