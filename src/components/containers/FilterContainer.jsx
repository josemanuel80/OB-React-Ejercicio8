import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../store/actions/action';
import { Filter } from '../pure/Filter';

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.filterState === ownProps.filter,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
  };
};

export const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter);
