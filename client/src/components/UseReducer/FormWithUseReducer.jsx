import React, { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  password: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value, // dynamic field update
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const FormWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name,   // name="email" → field: "email"
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={state.name}
        onChange={handleChange}
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={state.email}
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={state.password}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Submit</button>
      <br />
      <button type="button" onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </form>
  );
};

export default FormWithUseReducer;
