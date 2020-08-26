import styled from 'styled-components';

const CitySearchBarStyled = styled.form`
  text-align: center;
  padding: 10px 0;
  width: 100%;
  max-width: 450px;
  margin: auto;
  position: relative;

  input[type=search] {
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(0,0,0,0.4);
  }
`;

export default CitySearchBarStyled;