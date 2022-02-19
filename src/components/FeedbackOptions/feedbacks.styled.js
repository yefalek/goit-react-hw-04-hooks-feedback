import styled from '@emotion/styled';

export const Button = styled.button`
  width: 60px;
  height: 30px;
  margin: 10px;

  background: linear-gradient(
    to bottom,
    rgba(210, 255, 82, 1) 0%,
    rgba(145, 232, 66, 1) 100%
  );
  color: #27355a;

  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  border: none;

  -webkit-box-shadow: 2px 3px 4 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 3px 4 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 3px 4px 0px rgba(0, 0, 0, 0.75);

  cursor: pointer;
  border: none;

  &:active {
    background: linear-gradient(
      to bottom,
      rgba(164, 179, 87, 1) 0%,
      rgba(117, 137, 12, 1) 100%
    );
    color: #fff;

    -webkit-box-shadow: 2px 3px 4 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 3px 4 0px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 3px 4px 0px rgba(0, 0, 0, 0.75);

    transform: translateY(4px);
  }
`;
