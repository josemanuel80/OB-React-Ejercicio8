import PropTypes from 'prop-types';

export const Filter = ({ active, onFilterClick, children }) => {
  if (active) {
    return <span>{children}</span>;
  }

  const handleClick = (e) => {
    e.preventDefault();
    onFilterClick();
  };

  return <button onClick={handleClick}>{children}</button>;
};
Filter.propTypes = {
  active: PropTypes.bool.isRequired,
  onFilterClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
