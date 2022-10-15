/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";

import { ManagerSideContentMainTop } from "./managerSideContentTop";
import { useEffect, useState } from "react";
import SearchButtonSvg from "../../../img/SearchButton.svg";
import { MainSearchWrapJSX } from "./managerSideContentAttendanceSearch";
import { StudentListWrapJSX } from "./managerSideContentAttendanceStudentList";

const ManagerSideContentWrap = styled.div`
  /* background-color: blue; */

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 24px;
  box-sizing: border-box;
`;
const imageCss = css``;

const MainContentWrap = styled.div`
  /* background-color: blue; */
  height: 100%;
  width: 100%;
  background-color: white;
  padding: 25px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const StudentListWrap = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: yellow; */
  overflow: scroll;
  max-height: ${(props) => props.maxHeight}px;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const StudentListWrap2 = styled.div`
  height: 100%;
  width: 100%;
  /* background-color: blue; */
  box-sizing: border-box;
  padding: 0px 10px;
`;

const StudentListDetail = styled.div`
  width: 100%;
  height: 200px;
  /* background-color: red; */
  overflow: scroll;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }
  border: 1px solid black;
`;

const MainSearchWrap = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 5px;
  border-bottom: 1px #c8c8c8 solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainSearchLeft = styled.div`
  height: 100px;
  /* border: 1px solid black; */
  position: relative;
  border-bottom: 1px #c8c8c8 solid;
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;
const MainSearchLeftComponent1 = styled.div`
  width: 3px;
  height: 24px;
  background-color: #4f84ee;
  margin-left: 24px;
`;
const MainSearchLeftComponent2 = styled.div`
  min-width: 80px;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  margin-left: 16px;
`;

const MainSearchLeftComponent3Wrap = styled.div`
  /* width: 244px; */
  height: 40px;
  border: 1px solid black;
  border-radius: 999px;
  margin-left: 16px;
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
`;

const MainSearchLeftComponent3Input = styled.input`
  /* margin-left: 30px; */
  height: 40px;
  padding: 0px 0px 0px 20px;
  width: 260px;
  border: none;
  background-color: rgba(255, 255, 255, 0);

  &:focus {
    border: 0px;
    outline: none;
  }
`;
const SearchButton = styled.div`
  height: 100%;
  width: 30px;
  margin-right: 10px;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainSearchRight = styled.div`
  width: 100%;
  /* opacity: 50%; */
  height: 100px;
  display: flex;
  justify-content: end;
  margin-right: 10px;
  align-items: center;
  /* border: 1px solid black; */
  /* margin-bottom: 5px; */
  /* border-bottom: 1px #c8c8c8 solid; */
  /* background-color: blue; */
`;

const MainSearchRightComponentSelect = styled.select`
  /* margin-left: 30px; */
  height: 40px;
  padding: 0px 20px 0px 0px;
  margin: 0px 20px;
  /* border: none; */
  /* background-color: rgba(255, 255, 255, 0); */

  &:focus {
    /* border: 0px; */
    /* outline: none; */
  }
`;

export const MainContent = () => {
  return (
    <MainContentWrap>
      <MainSearchWrapJSX />
      <StudentListWrapJSX />
    </MainContentWrap>
  );
};
