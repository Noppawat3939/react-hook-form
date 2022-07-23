import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { STYLES } from "../../constants";

const TextLink = (props) => {
  const { to, text } = props;
  return <Link to={to}>{text}</Link>;
};

export default TextLink;

const Link = styled(NavLink)`
  text-decoration: none;
  color: ${STYLES.WHITE};
  text-transform: uppercase;
  font-size: ${STYLES.FS_SM};
  transition: 0.4 ease-in-out;

  &:hover {
    color: ${STYLES.RUBER};
  }
`;
