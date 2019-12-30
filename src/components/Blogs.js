import React, { Component } from "react";
import { Connect } from "aws-amplify-react";
import { graphqlOperation } from "aws-amplify";
import { listBlogs } from "../graphql/queries";

export default class Blogs extends Component {
  render() {
    return (
      <Connect query={graphqlOperation(listBlogs)}>
        {({ data: { listBlogs: blogs } }) => {
          if (!blogs) {
            return null;
          }

          return blogs.items.map(blog => {
            return <div key={blog.name}>{blog.name}</div>;
          });
        }}
      </Connect>
    );
  }
}
