/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const studentContentWrap = css`
  max-width: 1200px;
  width: 100%;
  height: 100%;

  /* background-color: black; */
  display: flex;

  padding: 3vh 5%;

  box-sizing: border-box;
`;

const studentContentLeftWrap = css`
  height: 100%;
  width: 100%;
  border: 1px solid #c8c8c8;
  border-radius: 20px;
  box-sizing: border-box;
`;

const studentContentRightWrap = css`
  height: 100;
  width: 384px;
  border: 1px solid #c8c8c8;
  border-radius: 20px;
  box-sizing: border-box;

  margin-left: 24px; ;
`;

const divForFlexShrink = css`
  flex-shrink: 5;
  width: 60px;
  height: 60px;
  background-color: white;
`;

export const StudentLoginPage = () => {
  // const selector = useSelector((state) => state);
  const params = useParams();

  useEffect(() => {
    console.log(params["*"]);
  }, []);

  return (
    <div
      className="studentLoginPage"
      css={studentContentWrap}
      onClick={() => {}}
    >
      <div className="loginPage-left" css={studentContentLeftWrap}></div>
      <div className="loginPage-right" css={studentContentRightWrap}></div>
    </div>
  );
};
