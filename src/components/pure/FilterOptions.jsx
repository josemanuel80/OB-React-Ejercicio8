import { FilterContainer } from '../containers/FilterContainer';

export const Filteroptions = () => {
  return (
    <>
      <FilterContainer filter="SHOW_ALL">ALL</FilterContainer>
      <FilterContainer filter="SHOW_ACTIVE">ACTIVE</FilterContainer>
      <FilterContainer filter="SHOW_COMPLETED">COMPLETED</FilterContainer>
    </>
  );
};
