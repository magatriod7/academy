/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { RecordPage } from "./record";

const studentContentWrap = css`
  max-width: 1200px;
  width: 100%;
  height: 100%;

  /* background-color: black; */

  box-sizing: border-box;
  display: flex;

  flex-direction: column;
`;

const studentContentWrap2 = css`
  display: flex;
  height: 100%;
  /* background-color: black; */
  padding: 3vh 0px;
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
  height: 100%;
  width: 384px;
  display: flex;
  flex-direction: column;
  border: 1px solid #c8c8c8;
  border-radius: 20px;
  box-sizing: border-box;
  margin-left: 24px;

  /* margin-left: 24px; */
  margin: 12px 0px 0px 24px;
`;

const RecordMenu1Wrap = css`
  display: flex;
  border-bottom: 1px solid #c8c8c8;
  overflow: visible;

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
    border-bottom: 3px solid #ed7700;
    position: relative;
    overflow: visible;
  }
  & .RecordMenu1Orange .bar {
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;

    bottom: -4px;
    background-color: #ed7700;
  }
`;
const RecordMenu1Content = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 180px;

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
export const StudentRouter = () => {
  // const selector = useSelector((state) => state);
  const params = useParams();
  const [menu, setMenu] = useState("Record");

  useEffect(() => {
    console.log(params["*"]);
  }, []);

  return (
    <Routes>
      <Route path="/Record" element={<RecordPage />} />
    </Routes>
  );
};
