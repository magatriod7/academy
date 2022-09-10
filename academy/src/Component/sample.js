/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

const divStyle = css`
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  padding: 32px;
  text-align: center;
  &:hover {
    color: white;
    background-color: blue;
  }
  label: test;
`;

export const Sample = () => {
  return <div css={divStyle}>React-Router-Dom </div>;
};
