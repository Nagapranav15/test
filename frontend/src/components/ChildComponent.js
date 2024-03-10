import React from 'react';
import PropTypes from 'prop-types';

const ChildComponent = ({ user, items }) => {
  return (
    <div>
      {user && <p>User: {user.name}, Age: {user.age}</p>}
      {items && <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>}
    </div>
  );
};

ChildComponent.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  items: PropTypes.arrayOf(PropTypes.string),
};

ChildComponent.defaultProps = {
  user: { name: 'Guest', age: 18 },
  items: [],
};

export default ChildComponent;