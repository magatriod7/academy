/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import leftArrow from "../../../img/arrow_forward_ios.svg";
import rightArrow from "../../../img/arrow_forward_ios2.svg";
import { RecordMenu } from "./recordMenu";
import { RecordTodayLeft } from "./recordTodayLeft";
import { RecordTodayRight } from "./recordTodayRight";

const studentContentWrap2 = css`
  & * {
    box-sizing: border-box;
  }

  & .sample {
    width: 100%;
    height: 100%;
    background-color: red;
    overflow: hidden;
  }

  /* display: flex; */
  height: calc(100% - 100px);
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
`;

const studentContentLeftWrap = css`
  height: 100%;
  width: 100%;
  /* border: 1px solid #c8c8c8; */
  display: flex;
  flex-direction: column;

  border-radius: 20px;
  box-sizing: border-box;
  /* padding: 60px 45px 0px 45px; */
`;

const studentContentRightWrap = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  /* border: 1px solid #c8c8c8; */
  border-radius: 20px;
  box-sizing: border-box;

  /* margin-left: 24px; */
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
const studentContentRightWrap2 = css`
  /* height: 100%; */
  width: 384px;
  display: flex;
  flex-direction: column;
  border: 1px solid #c8c8c8;
  border-radius: 20px;
  box-sizing: content-box;
  margin-left: 24px;

  /* margin-left: 24px; */
  margin: 12px 0px 43px 24px;
`;

const RecordMenu2 = css`
  height: 48px;
  min-height: 48px;
  max-height: 48px;
  width: 100%;
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const menu2Css = css`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  color: #686868;
  height: 100%;
  padding: 0px 32px;

  &.menu2Black {
    color: black;
  }
`;

const RecordMenu2RightVoid = css`
  width: 384px;
  margin: 0px 0px 0px 24px;
`;

const recordMenu2Wrap = css`
  width: 100%;
  display: flex;
  height: 60px;
  border-bottom: 1px solid #c8c8c8;
`;

const contentWrap = css`
  /* margin: auto; */
  height: 100%;
  width: 100%;
  /* background-color: black; */
  display: flex;
  box-sizing: border-box;
`;

const dateWrap = css`
  display: flex;
  align-items: center;
  height: 60px;
  padding-left: 48px;

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 33px;

  color: #000000;
  border-bottom: 1px solid #c8c8c8;
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
  min-width: 230px;
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

const timeTableWrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 48px;
  /* background-color: black; */
`;
const timeTable = css`
  height: 100%;
  width: 224px;
  /* background-color: black; */
  margin: 12px 0px 42px 0px;
`;
const tableContent = css`
  width: 100%;
  height: 100%;
  /* background-color: black; */
  display: flex;
`;

const tableContentIn = css`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  align-content: stretch;
  /* background-color: red; */

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    width: calc(100% / 7);
    height: calc(100% / 14);
    box-sizing: border-box;
    border: 1px solid #e4e4e4;
    align-self: stretch;
  }

  & div:nth-child(7n + 1) {
    border: none;
  }
`;

export const RecordPage = () => {
  // const selector = useSelector((state) => state);
  const params = useParams();
  const [menu2, setMent2] = useState("Day");

  useEffect(() => {
    // console.log(params["*"]);
  }, []);

  return (
    <div css={studentContentWrap2}>
      <RecordMenu />
      {/* <div className="sample">
        <div></div>
      </div> */}
      <div css={contentWrap}>
        <RecordTodayLeft />
        <RecordTodayRight />
      </div>
    </div>
  );
};
