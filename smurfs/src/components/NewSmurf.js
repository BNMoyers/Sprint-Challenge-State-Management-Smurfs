import React, { useState } from "react";
import { connect } from "react-redux";

import { sendSmurfs } from "./actions";

const NewSmurf = props => {
  const [smurf, setSmurf] = useState({ name: "", age: "", height: "", id: "" });

  const handleChange = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    const newbie = {
      name: smurf.name,
      age: parseInt(smurf.age),
      height: smurf.height,
      id: Date.now()
    };

    props.sendSmurfs(smurf);
  };

  return (
    <div className="form-group">
      <h2>Add a Smurf:</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="name"
          value={smurf.name}
          onChange={handleChange}
        />
        <input
          className="form-control"
          type="int"
          name="age"
          placeholder="age"
          value={smurf.age}
          onChange={handleChange}
        />
        <input
          className="form-control"
          type="int"
          name="height"
          placeholder="height (in cm)"
          value={smurf.height}
          onChange={handleChange}
        />
        <button className="btn btn-primary" type="submit">
          Add Smurf
        </button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { sendSmurfs }
)(NewSmurf);
