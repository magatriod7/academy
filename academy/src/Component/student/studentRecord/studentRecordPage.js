/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { RecordPage } from "./record";
import { StudentRouter } from "./StudentRouter";

const studentContentWrap = css`
  max-width: 1200px;
  max-height: calc(100vh - 150px);
  width: 100%;
  height: 100%;

  /* background-color: black; */

  box-sizing: border-box;
  display: flex;

  flex-direction: column;
`;

const RecordMenu1Wrap = css`
  display: flex;
  border-bottom: 1px solid #c8c8c8;
  overflow: visible;
  min-height: 80px;
  height: 80px;
  box-sizing: border-box;

  & .RecordMenu1Grey {
    color: #686868;

    position: relative;
    overflow: visible;
  }

  & .RecordMenu1Grey .bar {
    display: none;
    position: absolute;
    height: 1px;
  }
  & .RecordMenu1Orange {
    color: #ed7700;
    border-bottom: 1px solid #ed7700;
    position: relative;
    overflow: visible;
  }
  & .RecordMenu1Orange .bar {
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;

    bottom: -1px;
    background-color: #ed7700;
  }
`;
const RecordMenu1Content = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 100%;

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 33px;

  /* box-sizing: border-box; */

  /* background-color: red; */
`;

const RecordMenu2 = css`
  height: 48px;
  min-height: 48px;
  max-height: 48px;
  width: 100%;
  box-sizing: content-box;
  border-bottom: 1px solid #c8c8c8;
`;
export const StudentRecordPage = () => {
  // const selector = useSelector((state) => state);
  const params = useParams();
  const [menu, setMenu] = useState("Record");

  useEffect(() => {
    console.log(params["*"], "test");
  }, []);

  return (
    <div
      className="studentLoginPage"
      css={studentContentWrap}
      onClick={() => {}}
    >
      <div css={RecordMenu1Wrap}>
        <div
          css={RecordMenu1Content}
          className={
            menu === "Record" ? "RecordMenu1Orange" : "RecordMenu1Grey"
          }
          onClick={() => {
            setMenu("Record");
          }}
        >
          기록
          <div className="bar"></div>
        </div>
        <div
          css={RecordMenu1Content}
          className={menu === "Plan" ? "RecordMenu1Orange" : "RecordMenu1Grey"}
          onClick={() => {
            setMenu("Plan");
          }}
        >
          계획 <div className="bar"></div>
        </div>
        <div
          css={RecordMenu1Content}
          className={
            menu === "Statistic" ? "RecordMenu1Orange" : "RecordMenu1Grey"
          }
          onClick={() => {
            setMenu("Statistic");
          }}
        >
          통계 <div className="bar"></div>
        </div>
      </div>
      <StudentRouter />
    </div>
  );
};
