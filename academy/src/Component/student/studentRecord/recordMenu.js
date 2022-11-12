/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import leftArrow from "../../../img/arrow_forward_ios.svg";
import rightArrow from "../../../img/arrow_forward_ios2.svg";

const RecordMenu2 = css`
  height: 56px;
  min-height: 56px;
  max-height: 56px;
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

  display: flex;

  justify-content: center;
  align-items: center;

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
  height: 56px;
  border-bottom: 1px solid #c8c8c8;
  align-items: center;
`;

export const RecordMenu = () => {
  // const selector = useSelector((state) => state);
  const params = useParams();
  const [menu2, setMent2] = useState("Day");

  useEffect(() => {
    // console.log(params["*"]);
  }, []);

  return (
    <div css={recordMenu2Wrap}>
      <div css={RecordMenu2}>
        <div
          css={menu2Css}
          className={menu2 === "Day" ? "menu2Black" : ""}
          onClick={() => {
            setMent2("Day");
          }}
        >
          Day
        </div>
        <div
          css={menu2Css}
          className={menu2 === "Week" ? "menu2Black" : ""}
          onClick={() => {
            setMent2("Week");
          }}
        >
          Week
        </div>
        <div
          css={menu2Css}
          className={menu2 === "Month" ? "menu2Black" : ""}
          onClick={() => {
            setMent2("Month");
          }}
        >
          Month
        </div>
      </div>
      <div css={RecordMenu2RightVoid}> 빈 페이지</div>
    </div>
  );
};
