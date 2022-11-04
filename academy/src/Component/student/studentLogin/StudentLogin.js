/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import logo from "../../img/logo.svg";
import arrow_drop_down from "../../img/arrow_drop_down.svg";

const studentWrap = css`
  max-width: 1920px;
  width: 100%;
  height: 100vh;
  /* background-color: yellow; */
  display: flex;
  box-sizing: border-box;
`;

const StudentTopBar = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  padding: 24px 120px;
  justify-content: center;
  /* background-color: pink; */
  box-sizing: border-box;
  border-bottom: 1px solid #c8c8c8;
`;

export const StudentPage = () => {
  // const selector = useSelector((state) => state);
  const params = useParams();

  useEffect(() => {
    console.log(params["*"]);
  }, []);

  return <div></div>;
};
