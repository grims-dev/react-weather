import styled from "styled-components";

const DayStyled = styled.div`
  background: #fff;
  margin: 10px 15px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.2);
  line-height: 160%;
  color: #222;
  min-width: 155px;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
`;

const Icon = styled.img`
  margin: auto;
  display: block;
`;

const Name = styled.h2`
  text-align: center;
  margin: 0 0 5px;
`;

const TheDate = styled.h4`
  text-align: center;
  margin: 0 0 10px;
  color: #444;
  font-size: 14px;
`;

const Description = styled.span`
  display: block;
  font-size: 18px;
  color: #444;
  font-style: italic;
  flex-grow: 1;
`;

const Temperature = styled.div`
  margin-top: 10px;
  text-align: right;

  .temp-main {
    display: block;
  }
`;

export { DayStyled, Icon, Name, TheDate, Description, Temperature };
