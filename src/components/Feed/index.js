import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../actions";
import Post from "./Post";
import Form from "./Form";

class Feed extends Component {
  state = {
    value: ""
  };

  componentWillMount() {
    this.props.getPosts();
  }

  onInputChange = e => this.setState({ value: e.target.value });

  onSubmit = () => {
    const { value } = this.state;
    const { addPost } = this.props;
    addPost({ title: value });
    this.setState({ value: "" });
  };

  renderPosts() {
    const { posts } = this.props;
    const toDos = _.map(posts, (value, key) => {
      return <Post key={key} postId={key} post={value} />;
    });
    if (!_.isEmpty(toDos)) {
      return toDos;
    }
    return (
      <div>
        <h4>There are no Posts</h4>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Form
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
          value={this.state.value}
        />
        {this.renderPosts()}
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts
  };
};

export default connect(
  mapStateToProps,
  actions
)(Feed);
