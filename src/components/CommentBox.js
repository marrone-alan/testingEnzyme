import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment, fetchComments } from '../actions';

class CommentBox extends Component {
  state = { comment: '' };

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.saveComment(this.state.comment);

    this.setState({ comment: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Add a Comment</label>
            <textarea onChange={this.handleChange} value={this.state.comment} />
          </div>
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Request</button>
      </>
    );
  }
}

export default connect(null, { saveComment, fetchComments })(CommentBox);
