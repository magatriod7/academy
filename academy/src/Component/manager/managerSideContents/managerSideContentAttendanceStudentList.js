/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { StudentListDetailJSX } from "./studentListDetail";

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

const StudentListDetailTop = styled.div`
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
  background: rgba(237, 119, 0, 0.3);
  color: #ed7700;
  /* background-color: red; */
  overflow: scroll;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }
  /* border: 1px solid black; */
`;
const InnerDiv = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  min-width: ${(props) => props.minWidth}px;
  flex: 1;
  box-sizing: border-box;
`;

const TitleState = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;

  width: 120px;
  min-width: 120px;
  max-width: 120px;
  box-sizing: border-box;

  min-width: ${(props) => props.minWidth}px;
  flex: 1;
`;

const TitleNumber = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;

  max-width: 50px;
  min-width: 40px;
  box-sizing: border-box;

  flex: 1;
`;
const TitlePhone = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  min-width: 150px;
  max-width: 170px;
  box-sizing: border-box;

  flex: 1;
`;
const TitleName = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;

  max-width: 120px;
  min-width: 90px;
  box-sizing: border-box;

  flex: 1;
`;
const TitleRecord = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  min-width: 145px;
  max-width: 250px;
  box-sizing: border-box;

  flex: 1;
`;
const TitleDetail = styled.div`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  box-sizing: border-box;

  min-width: 125px;
  max-width: 150px;

  min-width: ${(props) => props.minWidth}px;
  flex: 1;
`;

export const StudentListWrapJSX = () => {
  const [maxHeight, setMaxHeight] = useState(0);
  const heightSetFunc = () => {
    const Height =
      document.getElementsByClassName("MainContentWrap")[0].clientHeight - 54;
    setMaxHeight(Height);
    console.log(Height);
  };

  useEffect(() => {
    heightSetFunc();
    window.addEventListener("resize", heightSetFunc);
    return () => {
      window.removeEventListener("resize", heightSetFunc);
    };
  }, []);
  return (
    <StudentListWrap2 className="MainContentWrap">
      <StudentListDetailTop>
        <TitleNumber>No.</TitleNumber>
        <TitleName>이름</TitleName>
        <TitleState>상태</TitleState>
        <TitlePhone>전화번호</TitlePhone>
        <TitleRecord>출입 기록</TitleRecord>
        <TitleDetail>상세 보기</TitleDetail>
      </StudentListDetailTop>
      <StudentListWrap maxHeight={maxHeight}>
        <StudentListDetailJSX></StudentListDetailJSX>
        <StudentListDetailJSX></StudentListDetailJSX>
        <StudentListDetailJSX></StudentListDetailJSX>
        <StudentListDetailJSX></StudentListDetailJSX>
        <StudentListDetailJSX></StudentListDetailJSX>
        <StudentListDetailJSX></StudentListDetailJSX>
        <StudentListDetailJSX></StudentListDetailJSX>
        <StudentListDetailJSX></StudentListDetailJSX>
        <StudentListDetailJSX></StudentListDetailJSX>
        <StudentListDetailJSX></StudentListDetailJSX>
        <StudentListDetailJSX></StudentListDetailJSX>
        <StudentListDetailJSX></StudentListDetailJSX>
        <StudentListDetailJSX></StudentListDetailJSX>
        <StudentListDetailJSX></StudentListDetailJSX>
        <StudentListDetailJSX></StudentListDetailJSX>
        <StudentListDetailJSX></StudentListDetailJSX>
        <StudentListDetailJSX></StudentListDetailJSX>
        <StudentListDetailJSX></StudentListDetailJSX>
        <StudentListDetailJSX></StudentListDetailJSX>
        <StudentListDetailJSX></StudentListDetailJSX>
      </StudentListWrap>
    </StudentListWrap2>
  );
};
