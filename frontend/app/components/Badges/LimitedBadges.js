import React from 'react';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';

function LimitedBadges(props) {
  const {
    children,
    limit,
    value,
    ...rest
  } = props;
  return (
    <Badge badgeContent={value > limit ? limit + '+' : value} {...rest}>
      { children }
    </Badge>
  );
}

LimitedBadges.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
};

export default LimitedBadges;
