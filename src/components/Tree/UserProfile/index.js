import React from "react";
import PropTypes from "prop-types";
import { UserContext } from "../../../contexts";
import styles from './UserProfile.module.scss';

const UserProfile = (props) => {
  const viewUser = ({ id, firstName, lastName }) => {
    return <article className={styles.article}>
      <h3>
        <em>{id}) </em>
        {firstName} {lastName}
      </h3>
    </article>;
  };
  return <UserContext.Consumer>{viewUser}</UserContext.Consumer>;
};

UserProfile.defaultProps = {
  user: {
    id: 0,
    firstName: "noname",
    lastName: "noname",
    isSelected: true,
  },
  userSelector: () => {},
};

export const userShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
});

UserProfile.propTypes = {
  user: userShape.isRequired,
  userSelector: PropTypes.func,
};

export default UserProfile;
