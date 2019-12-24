import React, { useState, useRef } from "react";

const Form = () => {
  const nameEl = useRef(null);
  const [name, setName] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    setName(nameEl.current.value);
    console.log(name);
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };

  return (
    <div>
      {/* <form
        onSubmit={async e => {
          e.preventDefault();
          this.props.onSubmit(this.state);
        }}
      > */}
      <form onSubmit={handleSubmit}>
        <h3>Create Blog</h3>
        <label htmlFor="name">Blog</label>
        <input type="text" id="name" placeholder="Name" ref={nameEl} />
        {/* <input
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}
        /> */}
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Form;
