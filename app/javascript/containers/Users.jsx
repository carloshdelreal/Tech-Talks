
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser } from '../actions/index';

class Users extends Component {
  componentDidMount() {
    const { getTheUser } = this.props;
    fetch('api/v1/the_users')
      .then((res) => res.json())
      .then((data) => getTheUser(data));
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="current_user pt-1 pb-1 pl-5">
        { currentUser ? (
          <h6>
            Current user:
            {' '}
            {currentUser.email}
          </h6>
        ) : 'No current user yet'}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  getTheUser: (user) => dispatch(getUser(user)),
});

Users.propTypes = {
  getTheUser: PropTypes.instanceOf(Function).isRequired,
  currentUser: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
