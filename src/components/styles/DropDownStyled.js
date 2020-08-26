import styled from 'styled-components';

const DropDownStyled = styled.ul`
  text-align: left;
  list-style-type: none;
  margin: 0 auto 10px;
  padding: 0;
  width: 100%;
  border: 1px solid rgba(0,0,0,0.1);
  border-top: none;
  border-radius: 0 0 10px 10px;
  position: absolute;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  background: #fff;

  &:empty {
    display: none;
  }

  li {
    padding: 12px;
    color: #444;
    cursor: pointer;
    transition: 0.05s ease;
    position: relative;
    
    &:not(:last-of-type) {
      border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    &:hover {
      background: rgba(0,0,0,0.1);
      transition: 0s;
    }

    .city {
      color: #222;
    }

    .fav-icon {
      background: none;
      border: none;
      font-size: 25px;
      line-height: 100%;
      position: absolute;
      right: 12px;
      top: 7px;

      &.favourited {
        color: #EAB636;
      }
    }
  }
`;

export default DropDownStyled;