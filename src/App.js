import React from "react";
import "./App.css";
import { Connect } from "aws-amplify-react";
import { graphqlOperation } from "aws-amplify";
import { createBlog } from "./graphql/mutations";
import Form from "./components/Form";
import Blogs from "./components/Blogs";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Connect mutation={graphqlOperation(createBlog)}>
          {({ mutation }) => (
            <Form
              onSubmit={async input => {
                console.log(input);
                const response = await mutation({ input });
                console.log(response);
              }}
            />
          )}
        </Connect>
        <Blogs />
      </div>
    );
  }
}

export default App;
