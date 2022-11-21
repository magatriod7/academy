/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";

import { ManagerSideContentMainTop } from "./managerSideContentTop";
import { useEffect, useState } from "react";
import SearchButtonSvg from "../../../img/SearchButton.svg";
import SampleImg from "../../../img/sampleImg.svg";
import { MainSearchWrapJSX } from "./managerSideContentAttendanceSearch";
import { StudentListWrapJSX } from "./managerSideContentAttendanceStudentList";
import { InfoLeft } from "./InfoLeft";
import { InfoRight } from "./InfoRight";

const StudentDetailWrap = css`
  width: 100%;
  height: 100%;

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: #000000;

  & .search-wrap {
    height: 88px;

    flex-shrink: 0;
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #c8c8c8;
  }

  & .blue-bar {
    width: 3px;
    height: 20px;
    background-color: #4f84ee;
    margin: 0px 16px 0px 24px;
  }

  & .search {
    width: 244px;
    height: 40px;

    /* grey 03 */

    border: 1px solid #c8c8c8;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 16px;
  }

  & .search-input {
    width: 100%;
    border: none;
    margin-left: 12px;

    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #000000;
  }

  & .search-input:focus {
    border: none;
    outline: none;
    /* background-color: red; */
  }

  & .search-input::placeholder {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #686868;

    /* grey 01 */

    color: #686868;
  }

  & .search-button {
    margin-right: 16px;
  }

  & .info-wrap {
    height: 138px;
    width: 600px;
    border: 1px solid #c8c8c8;
    border-radius: 20px;
    margin: 40px auto;
    box-sizing: border-box;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-height: 720px) {
    & .info-wrap {
      margin: 20px auto;
    }

    & .search-wrap {
      height: 60px;
      min-height: 60px;
    }
  }

  & .image-wrap {
    width: 80px;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    margin-right: 50px;

    color: #000000;
  }

  & .Info-image {
    width: 80px;
    height: 80px;
    margin-bottom: 8px;
  }

  & .Info-Contents {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;

    color: #000000;
  }
  & .info-blue-bar {
    width: 3px;
    height: 20px;
    background-color: #4f84ee;
  }
  & .Font-wrap {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;

    color: #000000;

    display: flex;
  }

  & .grey-font {
    display: flex;
    align-items: center;
    width: 110px;
    margin-left: 16px;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;

    color: #686868;
  }

  & .margin-bottom16 {
    margin-bottom: 16px;
  }

  & .info-chart-wrap {
    width: 100%;
    height: 100%;
    position: relative;
    margin-bottom: 32px;
    /* background-color: blue; */
  }

  & .info-chart-wrap-ab {
    width: 100%;
    height: 100%;
    /* background-color: red; */
    position: absolute;
    display: flex;
  }

  & .blank-box {
    width: 8px;
    height: 100%;
  }
`;

export const StudentDetail = () => {
  return (
    <div css={StudentDetailWrap}>
      <div className="search-wrap">
        <div className="blue-bar"></div>
        학생 검색
        <div className="search">
          <input
            className="search-input"
            placeholder="ex. 홍길동 / 010-1234-5678 / 한국고등학교"
          />
          <img className="search-button" src={SearchButtonSvg} />
        </div>
      </div>
      <div className="info-wrap">
        <div className="image-wrap">
          <img className="Info-image" src={SampleImg} />
          한상훈
        </div>
        <div className="Info-Contents">
          <div className="Font-wrap  margin-bottom16">
            <div className="info-blue-bar"></div>
            <div className="grey-font">전화번호</div>
            010-3393-0972
          </div>
          <div className="Font-wrap">
            <div className="info-blue-bar"></div>
            <div className="grey-font">소속</div>
            다원고등학교 테스트
          </div>
        </div>
      </div>
      <div className="info-chart-wrap">
        <div className="info-chart-wrap-ab">
          <InfoLeft></InfoLeft>
          <div className="blank-box"></div>
          <InfoRight></InfoRight>
        </div>
      </div>
    </div>
  );
};
