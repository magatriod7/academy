/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import SearchButtonSvg from "../../../img/SearchButton.svg";
import LeftArrow from "../../../img/arrow_forward_ios.svg";
import RightArrow from "../../../img/arrow_forward_ios2.svg";
import { useState } from "react";
import styled from "@emotion/styled";

const rightWrap = css`
  width: 50%;
  height: 100%;
  /* background-color: red; */

  display: flex;
  flex-direction: column;
  align-items: center;

  & .info-right-title {
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

  & .info-right-title-left {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;

    color: #ed7700;

    margin-left: 20px;
  }
  & .info-right-title-right {
    display: flex;
    margin-right: 32px;
  }

  & .info-right-title-right > div {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    padding: 8px;

    color: #686868;
  }

  & .info-right-title-right > .orange {
    color: #ed7700;
    position: relative;
  }

  & .info-right-title-right > .orange::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 3px;
    background-color: #ed7700;
    bottom: 2px;
    right: 0px;
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
    /* background-color: red; */
  }

  & .date-status {
    /* width: 100%; */

    /* background-color: blue; */
    display: flex;
    justify-content: center;
    align-items: center;

    /* padding: 20px 20px 0 20px; */

    /* border: 1px solid #e4e4e4; */
    border-radius: 20px;
  }

  & .date-status-box-wrap {
    position: relative;
    width: 40px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background-color: blue; */
    overflow: hidden;
  }

  & .date-status-box {
    width: 40px;
    height: 50px;
    box-sizing: border-box;

    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    color: #686868;

    display: flex;
    justify-content: center;
    align-items: center;

    border-left: 0.5px dashed #e4e4e4;
    border-top: 0.5px dashed #e4e4e4;
  }

  & .date-status-box-nodash {
    width: 40px;
    height: 50px;
    box-sizing: border-box;

    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    color: #686868;

    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  & .date-status-box-date {
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

  & .dashed {
    border-bottom: 0.5px dashed #e4e4e4;
    position: relative;
  }
`;

const OrangeBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 999;
  background-color: #ed7700;

  width: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: ${(props) => {
    return (props.time / 15) * 300;
  }}%;
`;

export const InfoRight = () => {
  const [chooseDate, setChooseDate] = useState("week");
  return (
    <div css={rightWrap} className="info-chart-right">
      <div className="info-right-title">
        <div className="info-right-title-left">출석</div>
        <div className="info-right-title-right">
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
              <div className="date-status-box-nodash">15hr</div>
              <div className="date-status-box-nodash">10hr</div>
              <div className="date-status-box-nodash">5hr</div>
              <div className="date-status-box-date"></div>
            </div>
            <div className="date-status-box-wrap">
              <div className="date-status-box"></div>
              <div className="date-status-box"></div>
              <div className="date-status-box dashed">
                <OrangeBar time={12}></OrangeBar>
              </div>
              <div className="date-status-box-date">월</div>
            </div>

            <div className="date-status-box-wrap">
              <div className="date-status-box"></div>
              <div className="date-status-box"></div>
              <div className="date-status-box dashed">
                <OrangeBar time={9}></OrangeBar>
              </div>
              <div className="date-status-box-date">화</div>
            </div>
            <div className="date-status-box-wrap">
              <div className="date-status-box"></div>
              <div className="date-status-box"></div>
              <div className="date-status-box dashed">
                <OrangeBar time={4}></OrangeBar>
              </div>
              <div className="date-status-box-date">수</div>
            </div>
            <div className="date-status-box-wrap">
              <div className="date-status-box"></div>
              <div className="date-status-box"></div>
              <div className="date-status-box dashed">
                <OrangeBar time={2}></OrangeBar>
              </div>
              <div className="date-status-box-date">목</div>
            </div>
            <div className="date-status-box-wrap">
              <div className="date-status-box"></div>
              <div className="date-status-box"></div>
              <div className="date-status-box dashed">
                <OrangeBar time={15}></OrangeBar>
              </div>
              <div className="date-status-box-date">금</div>
            </div>
            <div className="date-status-box-wrap">
              <div className="date-status-box"></div>
              <div className="date-status-box"></div>
              <div className="date-status-box dashed">
                <OrangeBar time={11}></OrangeBar>
              </div>
              <div className="date-status-box-date">토</div>
            </div>
            <div className="date-status-box-wrap">
              <div className="date-status-box"></div>
              <div className="date-status-box"></div>
              <div className="date-status-box dashed">
                <OrangeBar time={22}></OrangeBar>
              </div>
              <div className="date-status-box-date">일</div>
              <div className="orange-bar"></div>
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
