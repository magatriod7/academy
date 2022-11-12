/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { RecordTodayRightCard } from "./recordTodayRightCard";

const studentContentRightWrap2 = css`
  /* height: 100%; */
  width: 384px;
  min-width: 384px;
  display: flex;
  flex-direction: column;
  border: 1px solid #c8c8c8;
  border-radius: 20px;
  box-sizing: content-box;
  margin-left: 24px;

  /* margin-left: 24px; */
  margin: 12px 0px 43px 24px;

  & .RecordTodayRightTop {
    /* background-color: red; */
    display: flex;
    padding: 0px 24px;
    border-bottom: 1px solid #c8c8c8;
  }

  & .RightTopText {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    padding: 0px 24px;

    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    /* identical to box height */

    /* secondary */

    color: #686868;
  }

  & .Selected {
    color: #4f84ee;
    position: relative;
  }

  & .Selected::after {
    width: 100%;
    height: 3px;
    bottom: -1px;
    content: "";
    position: absolute;
    background-color: #4f84ee;
  }

  & .RecordTodayRightBottomWrap {
    margin: 24px;
    /* width: 100%; */
    height: 100%;
    position: relative;
  }

  & .RecordTodayRightBottom {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  & .RecordTodayRightBottom::-webkit-scrollbar {
    display: none;
  }
`;

export const RecordTodayRight = () => {
  // const selector = useSelector((state) => state);
  const params = useParams();
  const [menu, menuSet] = useState("Week");

  useEffect(() => {
    // console.log(params["*"]);
  }, []);

  return (
    <div css={studentContentRightWrap2}>
      <div className="RecordTodayRightTop">
        <div
          className={"RightTopText " + (menu == "Week" ? "Selected" : "")}
          onClick={() => {
            menuSet("Week");
          }}
        >
          Week
        </div>
        <div
          className={"RightTopText " + (menu == "Month" ? "Selected" : "")}
          onClick={() => {
            menuSet("Month");
          }}
        >
          Month
        </div>
      </div>
      <div className="RecordTodayRightBottomWrap">
        <div className="RecordTodayRightBottom">
          <RecordTodayRightCard></RecordTodayRightCard>
          <RecordTodayRightCard></RecordTodayRightCard>
          <RecordTodayRightCard></RecordTodayRightCard>
          <RecordTodayRightCard></RecordTodayRightCard>
          <RecordTodayRightCard></RecordTodayRightCard>
          <RecordTodayRightCard></RecordTodayRightCard>
        </div>
      </div>
    </div>
  );
};
