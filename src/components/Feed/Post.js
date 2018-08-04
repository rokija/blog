import React, { Component } from "react";
import { connect } from "react-redux";
import { removePost } from "../../actions";

class Post extends Component {
  onRemoveClick = postId => {
    const { removePost } = this.props;
    removePost(postId);
  };

  render() {
    const { postId, post } = this.props;
    return (
      <div key={postId}>
        <h4>
          {post.title}{" "}
          <span onClick={() => this.onRemoveClick(postId)}>
            <i className="large material-icons">delete</i>
          </span>
        </h4>
      </div>
    );
  }
}

export default connect(
  null,
  { removePost }
)(Post);
