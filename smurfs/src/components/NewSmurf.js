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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={smurf.name}
        onChange={handleChange}
      />
      <input
        type='int'
        name="age"
        placeholder="age"
        value={smurf.age}
        onChange={handleChange}
      />
      <input
        type="int"
        name="height"
        placeholder="height (in cm)"
        value={smurf.height}
        onChange={handleChange}
      />
      <button type='submit'>Add Smurf</button>
    </form>
  );
};

export default connect(null, {sendSmurfs})(NewSmurf)