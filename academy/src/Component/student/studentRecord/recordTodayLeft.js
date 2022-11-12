/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import leftArrow from "../../../img/arrow_forward_ios.svg";
import rightArrow from "../../../img/arrow_forward_ios2.svg";
import { RecordMenu } from "./recordMenu";
import { RecordTodayLeftTimeTable } from "./recordTodayLeftTimeTable";

const studentContentLeftWrap = css`
  height: 100%;
  width: 100%;
  /* border: 1px solid #c8c8c8; */
  display: flex;
  flex-direction: column;

  border-radius: 20px;
  box-sizing: border-box;
  /* padding: 60px 45px 0px 45px; */
  & * {
  }
`;

const studentContentLeftWrap2 = css`
  height: 100%;
  width: 100%;
  border: 1px solid #c8c8c8;
  display: flex;
  flex-direction: column;

  border-radius: 20px;
  box-sizing: border-box;
  margin: 12px 0px 43px 0px;
`;
const dateWrap = css`
  display: flex;
  align-items: center;
  height: 60px;
  padding-left: 48px;
  min-height: 60px;

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;

  color: #000000;
  border-bottom: 1px solid #c8c8c8;

  margin: 12px 0px 0px 0px;
`;
const dateBlue = css`
  color: #4f84ee;
`;

const titleToday = css`
  min-height: 60px;
  border-bottom: 1px solid #c8c8c8;
  border-top: 1px solid #c8c8c8;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  margin: 24px 0px;
  /* background-color: red; */

  display: flex;
  align-items: center;
  justify-content: center;

  /* color: #000000; */
`;

const titleToday2 = css`
  min-height: 60px;
  max-height: 60px;
  min-width: 290px;
  border-bottom: 1px solid #c8c8c8;
  border-top: 1px solid #c8c8c8;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  margin: 24px 0px;
  /* background-color: red; */

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 32px;

  /* color: #000000; */
`;

const totalStudyFont = css`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #000000;
`;

const totalStudyHour = css`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 33px;
  /* identical to box height */

  /* secondary */
  margin-left: 32px;

  color: #4f84ee;
`;

const flex = css`
  display: flex;
`;

const arrowCss = css`
  width: 48px;
  height: 100%;
  display: flex;
  align-items: center;
  /* background-color: red; */
`;

const bugFix = css`
  height: calc(100% - 72px);
  /* max-height: calc(100% - 116px); */
`;

const bugFix2 = css`
  height: 100%;
  /* max-height: calc(100% - 116px); */
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Subject = styled.div`
  padding: 6.5px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  /* pc/button/Medium */

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  border-radius: 5px;
  /* identical to box height */

  /* grey 01 */

  color: black;

  background-color: ${(props) => {
    switch (props.subject) {
      case "국어":
        return "#B0D751";
        break;
      case "수학":
        return "#FFAA2C";
        break;
      case "영어":
        return "#4996E2";
        break;
      case "탐구1":
        return "#FF89A5;";
        break;
      case "탐구2":
        return "#D7C0F9;";
        break;
    }
  }};
`;
const How = styled.div`
  padding: 6.5px 8px;
  margin-right: 8px;
  /* pc/button/Medium */

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  border-radius: 5px;
  /* identical to box height */

  /* grey 01 */

  color: black;

  background-color: ${(props) => {
    switch (props.how) {
      case "인강":
        return "#51D7CF";
        break;
      case "모의고사":
        return "#FFEC45";
        break;
      case "자습":
        return "#5DA700";
        break;
      case "탐구1":
        return "#FF89A5;";
        break;
      case "탐구2":
        return "#D7C0F9;";
        break;
    }
  }};
`;
export const RecordTodayLeft = () => {
  const [timeTable, setTimeTable] = useState([
    ["9:10", "11:20", "수학", "인강"],
    ["12:30", "13:20", "영어", "자습"],
  ]);

  useEffect(() => {
    // console.log(params["*"]);
  }, []);

  return (
    <div className="loginPage-left" css={studentContentLeftWrap}>
      <div css={studentContentLeftWrap2}>
        <div css={dateWrap}>
          2022-10-12 화요일
          <span css={dateBlue}> &nbsp;(Today)&nbsp; </span> <div>img</div>
        </div>
        <div css={[flex, bugFix]}>
          <div css={arrowCss}>
            <img src={leftArrow} />
          </div>
          <div css={bugFix2}>
            <div>
              <div css={titleToday}>이 날의 공부계획</div>
            </div>
            <div css={planList}>
              <div>
                <div className="planCard">
                  <div className="planCard-upline">
                    <Subject subject="수학" className="subject">
                      수학
                    </Subject>
                    <How how="인강" className="how">
                      자습
                    </How>
                    9:10 ~ 10:40
                  </div>
                  <div className="planCard-downline">
                    2020 9월 모의고사 문제 풀이 및 복습
                  </div>
                </div>
                <div className="planCard"></div>
                <div className="planCard"></div>
                <div className="planCard"></div>
                <div className="planCard"></div>
                <div className="planCard"></div>
                <div className="planCard"></div>
                <div className="planCard"></div>
                <div className="planCard"></div>
                <div className="planCard"></div>
                <div className="planCard"></div>
              </div>
            </div>
          </div>
          <RecordTodayLeftTimeTable
            timeTable={timeTable}
          ></RecordTodayLeftTimeTable>
          <div css={arrowCss}>
            <img src={rightArrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

const planList = css`
  width: 100%;
  height: 100%;
  margin-bottom: 40px;
  position: relative;

  & > div {
    position: absolute;
    /* display: flex; */
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-right: 4px;
    color: black;
    overflow-y: auto;
    overflow-x: hidden;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  & > div::-webkit-scrollbar {
    display: none;
  }

  & div .planCard {
    width: 100%;
    height: 75px;
    border-bottom: 1px solid #c8c8c8;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .planCard-upline {
    display: flex;

    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    display: flex;
    align-items: center;
    /* identical to box height */

    /* grey 01 */

    color: #686868;
    /* background-color: red; */
  }

  .planCard-downline {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    /* identical to box height */

    color: #000000;

    display: flex;

    /* background-color: red; */
    margin-bottom: 8px;
    margin-left: 8px;
  }
`;
