import { connect } from 'react-redux';
import { Form } from '../pure/Form';
import { addTodo } from '../../store/actions/action';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (text) => dispatch(addTodo(text)),
  };
};

export const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);
