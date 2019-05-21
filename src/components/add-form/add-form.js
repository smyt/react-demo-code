import React from 'react';
import { connect } from 'react-redux'

const AddForm = ({ dispatch }) => {
  return (
    <div>
    <form>
      <input ref={node => (input = node)} />
      <button type="submit">Add Todo</button>
    </form>
  </div>
  )
};

export default connect()(AddForm)