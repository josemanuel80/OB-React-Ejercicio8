import PropTypes from 'prop-types';
import { useRef } from 'react';

export const Form = ({ submit }) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <>
      <h2>Create your TODOS</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Create TODO</button>
      </form>
    </>
  );
};
Form.propTypes = {
  submit: PropTypes.func.isRequired,
};
