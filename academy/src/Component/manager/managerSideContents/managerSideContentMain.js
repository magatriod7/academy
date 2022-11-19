/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";

import logo from "../../../img/logo.svg";
import questionBox from "../../../img/questionBox.svg";
import { ManagerSideContentMainTop } from "./managerSideContentTop";
import { MainContent } from "./managerSideContentAttendance";
import { StudentDetail } from "./managetStudentDetail";

const ManagerSideContentWrap = styled.div`
  /* background-color: blue; */

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 24px;
  overflow: hidden;
`;
const fontInfo = css`
  color: red;
`;

export const ManagerSideContentMain = () => {
  return (
    <ManagerSideContentWrap>
      <ManagerSideContentMainTop />
      <Routes>
        <Route path="/main" element={<MainContent />}></Route>
        <Route path="/studentDetail" element={<StudentDetail />}></Route>
      </Routes>
    </ManagerSideContentWrap>
  );
};
