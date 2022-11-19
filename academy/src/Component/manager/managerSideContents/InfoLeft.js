/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import SearchButtonSvg from "../../../img/SearchButton.svg";
import LeftArrow from "../../../img/arrow_forward_ios.svg";
import RightArrow from "../../../img/arrow_forward_ios2.svg";
import { useState } from "react";

const leftWrap = css`
  width: 50%;
  height: 100%;
  /* background-color: red; */

  display: flex;
  flex-direction: column;
  align-items: center;

  & .info-left-title {
    height: 34px;
    width: 100%;
    border-width: 1px 1px 0px 1px;
    border-style: solid;
    border-color: #ed7700;
    border-radius: 20px 20px 0px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .info-left-title-left {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;

    color: #ed7700;

    margin-left: 20px;
  }
  & .info-left-title-right {
    display: flex;
    margin-right: 32px;
  }

  & .info-left-title-right > div {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    padding: 8px;

    margin-left: 8px;
    color: #686868;
  }

  & .info-left-title-right > .orange {
    color: #ed7700;
    position: relative;
  }

  & .info-left-title-right > .orange::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 3px;
    background-color: #ed7700;
    bottom: 2px;
    left: 0px;
  }

  & .info-date {
    padding: 8px 24px;

    width: 150px;
    height: 34px;

    border: 1px solid #e4e4e4;
    border-radius: 999px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px auto;
    box-sizing: border-box;
    height: 34px;

    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;

    color: #000000;
  }

  & .info-date-status-wrap {
    display: flex;
    position: relative;
    /* background-color: red; */
    height: 100%;
    width: 100%;
  }

  & .info-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 24px;
    padding: 16px;
    /* background-color: red; */
    /* height: 100%; */
    /* background-color: red; */
  }

  & .date-status-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .date-status {
    /* width: 100%; */

    /* background-color: blue; */
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 20px 20px 0 20px;

    border: 1px solid #e4e4e4;
    border-radius: 20px;
  }

  & .date-status-box-wrap {
    width: 40px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background-color: blue; */
  }

  & .date-status-box {
    width: 40px;
    height: 30px;
    box-sizing: border-box;
    margin-bottom: 20px;

    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    color: #686868;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const InfoLeft = () => {
  const [chooseDate, setChooseDate] = useState("week");
  return (
    <div css={leftWrap} className="info-chart-left">
      <div className="info-left-title">
        <div className="info-left-title-left">출석</div>
        <div className="info-left-title-right">
          {chooseDate == "week" ? (
            <div
              className="orange"
              onClick={() => {
                setChooseDate("week");
              }}
            >
              주
            </div>
          ) : (
            <div
              onClick={() => {
                setChooseDate("week");
              }}
            >
              주
            </div>
          )}
          {chooseDate == "month" ? (
            <div
              className="orange"
              onClick={() => {
                setChooseDate("month");
              }}
            >
              월
            </div>
          ) : (
            <div
              onClick={() => {
                setChooseDate("month");
              }}
            >
              월
            </div>
          )}
        </div>
      </div>
      <div className="info-date"> 09.12 ~ 09.17</div>
      <div className="info-date-status-wrap">
        <div className="info-arrow">
          <img className="info-arrow-img" src={LeftArrow} />
        </div>
        <div className="date-status-wrap">
          <div className="date-status">
            <div className="date-status-box-wrap">
              <div className="date-status-box">-</div>
              <div className="date-status-box">-</div>
              <div className="date-status-box">월</div>
            </div>
            <div className="date-status-box-wrap">
              <div className="date-status-box">-</div>
              <div className="date-status-box">-</div>
              <div className="date-status-box">화</div>
            </div>
            <div className="date-status-box-wrap">
              <div className="date-status-box">-</div>
              <div className="date-status-box">-</div>
              <div className="date-status-box">수</div>
            </div>
            <div className="date-status-box-wrap">
              <div className="date-status-box">-</div>
              <div className="date-status-box">-</div>
              <div className="date-status-box">목</div>
            </div>
            <div className="date-status-box-wrap">
              <div className="date-status-box">-</div>
              <div className="date-status-box">-</div>
              <div className="date-status-box">금</div>
            </div>
            <div className="date-status-box-wrap">
              <div className="date-status-box">-</div>
              <div className="date-status-box">-</div>
              <div className="date-status-box">토</div>
            </div>
            <div className="date-status-box-wrap">
              <div className="date-status-box">-</div>
              <div className="date-status-box">-</div>
              <div className="date-status-box">일</div>
            </div>
          </div>
        </div>
        <div className="info-arrow">
          <img className="info-arrow-img" src={RightArrow} />
        </div>
      </div>
    </div>
  );
};
