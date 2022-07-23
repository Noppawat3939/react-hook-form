import styled from "styled-components";

const Container = (props) => {
  const { children } = props;

  return <Main>{children}</Main>;
};

export default Container;

const Main = styled.main`
  margin: 2% auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
