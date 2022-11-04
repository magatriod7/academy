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

  padding: 3vh 0px;

  box-sizing: border-box;
`;

const studentContentLeftWrap = css`
  height: 100%;
  width: 100%;
  border: 1px solid #c8c8c8;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 60px 45px 0px 45px;
`;

const studentContentRightWrap = css`
  height: 100%;
  width: 384px;
  border: 1px solid #c8c8c8;
  border-radius: 20px;
  box-sizing: border-box;

  margin-left: 24px;
`;

const LoginCalender1 = css`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  color: #ed7700;
  border-right: 1px solid #686868;
  padding-right: 24px;
  margin-bottom: 37.5px;
`;

const LoginCalender2 = css`
  border: 1px solid #c8c8c8;
  height: 458px;
  border-radius: 20px;
  padding: 45px 24px 0px 24px;
`;

const BlackBoldFont = css`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  padding-left: 8px;
  /* identical to box height */

  color: #000000;
`;

const BlackBoldFont2 = css`
  display: inline-block;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;

  min-width: 150px;
  /* identical to box height */

  color: #000000;
`;

const GrayFont1 = css`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 33px;
  color: #686868;

  margin-left: 24px;
`;

const OrangeFont1 = css`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 35px;

  color: #ed7700;

  margin-left: 32px;
`;

const FlexBox = css`
  display: flex;
`;

const marginLeft32px = css`
  margin-left: 32px;
`;

const padding32px = css`
  padding: 32px 0px;
`;

const padding8px = css`
  padding: 8px 0px;
`;

const greyBottom = css`
  border-bottom: 1px solid #686868;
`;

const marginBottom48px = css`
  margin-bottom: 48px;
`;

const marginBottom24px = css`
  margin-bottom: 24px;
`;
const margin24px = css`
  margin: 24px;
`;
const margineLft20px = css`
  margin-left: 20px;
`;

const blueFont = css`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;

  /* secondary */

  color: #4f84ee;
`;

const loginFont1 = css`
  margin: 73px 0px 136px 0;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 33px;

  color: #000000;
`;

const loginInput = css`
  box-sizing: border-box;
  border-radius: 999px;
  border: none;
  width: 319px;
  height: 60px;
  margin: 0px 32px 24px 32px;
  padding: 0px 24px;

  &::placeholder {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;

    color: #686868;
  }
  &:focus {
    background: #e4e4e4;
  }
`;

const loginButton = css`
  display: inline-block;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;

  color: #ffffff;

  padding: 13px 24px;

  background: #ed7700;
  border-radius: 999px;
`;

export const StudentLoginPage = () => {
  // const selector = useSelector((state) => state);
  const params = useParams();

  useEffect(() => {
    // console.log(params["*"]);
  }, []);

  return (
    <div
      className="studentLoginPage"
      css={studentContentWrap}
      onClick={() => {}}
    >
      <div className="loginPage-left" css={studentContentLeftWrap}>
        <div css={FlexBox}>
          <span css={LoginCalender1}>독서실</span>
        </div>
        <div css={[LoginCalender2]}>
          <div css={[FlexBox, padding8px]}>
            <span css={BlackBoldFont}>다가오는 일정</span>
          </div>
          <div css={[FlexBox, padding32px, greyBottom, marginBottom48px]}>
            <span css={GrayFont1}>수능</span>
            <span css={OrangeFont1}>D-36</span>
            <span css={GrayFont1}>모의고사</span>
            <span css={OrangeFont1}>D-1</span>
          </div>
          <div css={[FlexBox, marginBottom24px, margineLft20px]}>
            <span css={BlackBoldFont2}>2022-10-12</span>
            <span css={[blueFont, marginLeft32px]}>
              10월 경기도 교육청 모의고사
            </span>
          </div>
          <div css={[FlexBox, marginBottom24px, margineLft20px]}>
            <span css={BlackBoldFont2}>2022-10-17</span>

            <span css={[blueFont, marginLeft32px]}>
              2023학년도 대학수학능력시험
            </span>
          </div>
          <div css={[FlexBox, marginBottom24px, margineLft20px]}>
            <span css={BlackBoldFont2}>2022-11-13</span>

            <span css={[blueFont, marginLeft32px]}>
              2023년도 대학수학능력평가
            </span>
          </div>
        </div>
      </div>
      <div className="loginPage-right" css={studentContentRightWrap}>
        <div css={loginFont1}>로그인 하세요.</div>
        <input placeholder="ID" css={loginInput} />
        <input placeholder="Password" type="password" css={loginInput} />
        <div css={loginButton}>로그인</div>
      </div>
    </div>
  );
};
