/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import logo from "../../img/logo.svg";
import arrow_drop_down from "../../img/arrow_drop_down.svg";
import { StudentLoginPage } from "./studentLogin/studentLoginPage";
import { StudentRecordPage } from "./studentRecord/studentRecordPage";

const studentWrap = css`
  max-width: 1920px;
  width: 100%;
  height: 100vh;
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const StudentTopBar = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  padding: 24px 0px;
  justify-content: center;
  /* background-color: pink; */
  box-sizing: border-box;
  border-bottom: 1px solid #c8c8c8;

  @media (max-width: 1200px) {
    padding: 24px 5px 24px 10px;
    justify-content: left;
  }

  & .logo {
    height: 100%;
    /* background-color: green; */
    min-width: 384px;
    box-sizing: border-box;
    /* padding: 24px 0; */

    & img {
      width: 100%;
      height: 100%;
      /* margin: 24px 0px; */
    }

    @media (max-width: 1200px) {
      min-width: 0px;
    }
  }

  & .date {
    height: 100%;
    width: 588px;
    min-width: 480px;
    border: 1px solid #c8c8c8;
    border-radius: 20px;
    box-sizing: border-box;
    margin-left: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .date span:nth-child(1) {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
  }
  & .date span:nth-child(2) {
    margin-left: 8px;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    color: #686868;
  }
  & .date div:nth-child(3) {
    height: 40px;
    border: 1px solid #8f8f8f;
    margin-left: 36px;
  }
  & .date span:nth-child(4) {
    margin-left: 36px;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    color: #000000;
  }
  & .date span:nth-child(5) {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    color: #686868;
    margin-left: 16px;
  }

  & .name {
    min-width: 180px;
    height: 100%;
    border: 1px solid #c8c8c8;
    border-radius: 20px;
    box-sizing: border-box;
    margin-left: 24px;

    @media (max-width: 1200px) {
      display: none;
    }
  }
  & .name div:nth-child(1) {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    color: #686868;
    margin: 13.5px 0px 0px 16px;
    text-align: left;
  }
  & .name div:nth-child(2) {
    display: flex;
    align-items: center;
    /* background-color: yellow; */
    justify-content: space-between;
    padding-left: 16px;
    padding-right: 12px;
    margin-top: 8px;
  }
  & .name div:nth-child(2) span {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    color: #000000;
  }
`;

export const StudentPage = () => {
  // const selector = useSelector((state) => state);
  const params = useParams();

  useEffect(() => {
    console.log(params["*"]);
  }, []);

  return (
    <div className="studentWrap" css={studentWrap} onClick={() => {}}>
      <StudentTopBar>
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="date">
          <span>10:00</span>
          <span>AM</span>
          <div></div>
          <span>2022-10-11</span>
          <span>화요일</span>
        </div>
        <div className="name">
          <div>프로필 보기 / 수정</div>
          <div>
            <span>한상훈</span> <img src={arrow_drop_down}></img>
          </div>
        </div>
      </StudentTopBar>
      <Routes>
        <Route path="/Login" element={<StudentLoginPage />} />
        <Route path="/Record/*" element={<StudentRecordPage />} />
      </Routes>
    </div>
  );
};
