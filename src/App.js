import React from "react";
import "./App.css";
import { Connect } from "aws-amplify-react";
import { graphqlOperation } from "aws-amplify";
import { createBlog } from "./graphql/mutations";
import Form from "./Form";

function App() {
  const handleMutation = async (input, mutation) => {
    const response = await mutation({ input });
    console.log(response);
  };

  return (
    <div className="App">
      <Connect mutation={graphqlOperation(createBlog)}>
        {({ mutation }) => (
          <Form
            onSubmit={async input => {
              const response = await mutation({ input });
              console.log(response);
            }}
          />
        )}
      </Connect>
    </div>
  );
}

export default App;
