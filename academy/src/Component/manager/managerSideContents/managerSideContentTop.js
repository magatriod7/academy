/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";

import logo from "../../../img/logo.svg";
import questionBox from "../../../img/questionBox.svg";
import { useState } from "react";

const ManagerSideContentWrap = styled.div`
  /* background-color: blue; */

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 24px;
`;
const ManagerSideContentTop = styled.div`
  display: flex;
  height: 120px;
  min-height: 120px;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #c8c8c8;
`;
const ManagerSideContentTopContemt = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  width: ${(props) => {
    return props.width + "%";
  }};
  background-color: ${(props) => {
    return props.color;
  }};
`;

const ManagerSideContentTopAttendance = styled.div`
  height: 50%;
  width: 279px;
  margin: 0px 30px 0px 30px;
  border-radius: 20px;
  border: 1px solid #c8c8c8;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  max-width: 523px;
  @media screen and (max-width: 1000px) {
    margin: auto;
  }
`;

const TopAttendanceBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => {
    if (props.width) {
      return props.width;
    } else {
      return "0px";
    }
  }};
  min-width: ${(props) => {
    if (props.minWidth) {
      return props.minWidth;
    } else {
      return "0px";
    }
  }};

  margin: ${(props) => {
    if (props.margin) {
      return props.margin;
    } else {
      return "0px 10px";
    }
  }};
`;

const TopAttendanceBox1 = styled.div`
  width: 70px;
  height: 18px;

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 12px 0px 24px;
`;
const TopAttendanceBox2 = styled.div`
  width: 2px;
  height: 18px;

  background-color: #8f8f8f;
`;
const TopAttendanceBox3 = styled.div`
  width: 76px;
  height: 18px;

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 12px 0px 24px;
`;

const ManagerSideContentTopDate = styled.div`
  height: 50%;
  margin: 0px 30px 0px 0px;
  /* min-width: 322px; */
  border-radius: 20px;
  border: 1px solid #c8c8c8;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1000px) {
    margin: auto;
  }
`;
const TopDateBox1 = styled.div`
  height: 18px;

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 12px 0px 24px;
`;
const TopDateBox2 = styled.div`
  width: 2px;
  height: 18px;

  background-color: #8f8f8f;
`;
const TopDateBox3 = styled.div`
  height: 18px;

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 12px 0px 24px;
`;

const ImageWrap = styled.div`
  /* width: 300px; */
  height: 50%;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const imgSize = css`
  height: 60px;
`;
const imgSize2 = css`
  height: 20px;
  margin-left: 4px;
  margin-right: 24px;
`;

const fontInfo = css`
  color: red;
`;

const FixedBox = styled.div`
  position: fixed;
  max-width: 1920px;
  width: 100vw; // 이 부분 어떻게 할지 한번 생각해봐야함
  height: 100vh;
  background-color: red;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(200, 200, 200, 0.7);
  /* background-color: green; */
  z-index: 9999;
  display: flex;
`;

const PopUp = styled.div`
  width: 800px;
  min-height: 463px;
  max-height: 463px;
  position: absolute;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;

  border-radius: 20px;
  overflow: hidden;
`;
const PopUpIn = styled.div`
  width: 700px;
  height: 363px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  overflow: hidden;

  position: absolute;
`;
const PopUpInTitle = styled.div`
  display: flex;
  align-items: center;
  padding-left: 24px;
  height: 41px;
  width: 100%;
  background-color: #8f8f8f;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  /* identical to box height */

  /* white */

  color: #ffffff;
`;

const PopUpInStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 100%;
  background-color: white;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;

  /* identical to box height */

  /* warning 01 */

  color: #b00020;
`;
const PopUpInListWrap = styled.div`
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  min-height: 140px;
  max-height: 140px;
  box-sizing: border-box;
  width: 100%;
  /* border: 1px solid black; */
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const PopUpInListClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
  /* border: 1px solid black; */

  width: 100px;
  height: 41px;
  background: #8f8f8f;
  border-radius: 999px;

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;

  /* identical to box height */

  /* white */

  color: #ffffff;
`;

const PopStudentListDetail = styled.div`
  background-color: white;
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;

  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  border-bottom: 1px solid #e4e4e4;
  &.div {
    flex: 1;
  }
`;

const PopNumberBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  height: 100%;
  max-width: 50px;
  min-width: 40px;
  flex: 1;
`;
const PopNameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  /* tablet/text/Medium */

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  max-width: 120px;
  min-width: 90px;

  height: 100%;

  flex: 1;
`;
const PopStateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  min-width: 120px;
  max-width: 120px;

  height: 100%;

  flex: 1;
`;
const PopPhoneBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  max-width: 170px;
  /* tablet/text/Medium */

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  height: 100%;

  flex: 1;
`;
const PopRecordBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 145px;
  max-width: 250px;

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  /* black */

  color: #000000;

  height: 100%;

  flex: 1;
`;
const PopDetailBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 125px;
  max-width: 150px;

  height: 100%;

  flex: 1;
`;

const StateBoxContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 5px;
  box-sizing: border-box;
  border-radius: 999px;

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  height: 34px;
  width: 100%;
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
`;

export const ManagerSideContentMainTop = () => {
  const [seeDetail, setSeeDetail] = useState(0);
  return (
    <ManagerSideContentTop>
      <ManagerSideContentTopContemt
        width="100"
        color="white"
        className="attendance"
      >
        <ImageWrap>
          <img css={imgSize} src={logo} alt="logo"></img>
        </ImageWrap>
        <ManagerSideContentTopAttendance>
          <TopAttendanceBox1>출석현황</TopAttendanceBox1>
          <TopAttendanceBox2 />

          <TopAttendanceBox3>
            <p css={fontInfo}>38</p> &nbsp;&nbsp; / &nbsp;&nbsp;40
          </TopAttendanceBox3>
          <img
            css={imgSize2}
            src={questionBox}
            alt="questionBox"
            onClick={() => {
              setSeeDetail(1);
            }}
          ></img>
        </ManagerSideContentTopAttendance>
        <ManagerSideContentTopDate>
          <TopDateBox1> 10:00 AM</TopDateBox1>
          <TopDateBox2 />
          <TopDateBox3> 2022-09-13 화요일</TopDateBox3>
        </ManagerSideContentTopDate>
      </ManagerSideContentTopContemt>

      {seeDetail ? (
        <FixedBox>
          <PopUp>
            <PopUpIn>
              <PopUpInTitle>출석 현황</PopUpInTitle>
              <PopUpInStatus> 2명 부재중</PopUpInStatus>
              <PopUpInListWrap>
                <PopStudentListDetail>
                  <PopNumberBox>1</PopNumberBox>
                  <PopNameBox>홍길동</PopNameBox>
                  <PopStateBox>
                    <StateBoxContent color="#B00020">부재중</StateBoxContent>
                  </PopStateBox>
                  <PopPhoneBox>010-1234-5678</PopPhoneBox>
                  <PopRecordBox>사유: 병원</PopRecordBox>
                </PopStudentListDetail>
                <PopStudentListDetail>
                  <PopNumberBox>1</PopNumberBox>
                  <PopNameBox>홍길동</PopNameBox>
                  <PopStateBox>
                    <StateBoxContent color="#B00020">부재중</StateBoxContent>
                  </PopStateBox>
                  <PopPhoneBox>010-1234-5678</PopPhoneBox>
                  <PopRecordBox>사유: 병원</PopRecordBox>
                </PopStudentListDetail>
                <PopStudentListDetail>
                  <PopNumberBox>1</PopNumberBox>
                  <PopNameBox>홍길동</PopNameBox>
                  <PopStateBox>
                    <StateBoxContent color="#B00020">부재중</StateBoxContent>
                  </PopStateBox>
                  <PopPhoneBox>010-1234-5678</PopPhoneBox>
                  <PopRecordBox>사유: 병원</PopRecordBox>
                </PopStudentListDetail>
                <PopStudentListDetail>
                  <PopNumberBox>1</PopNumberBox>
                  <PopNameBox>홍길동</PopNameBox>
                  <PopStateBox>
                    <StateBoxContent color="#B00020">부재중</StateBoxContent>
                  </PopStateBox>
                  <PopPhoneBox>010-1234-5678</PopPhoneBox>
                  <PopRecordBox>사유: 병원</PopRecordBox>
                </PopStudentListDetail>
                <PopStudentListDetail>
                  <PopNumberBox>1</PopNumberBox>
                  <PopNameBox>홍길동</PopNameBox>
                  <PopStateBox>
                    <StateBoxContent color="#B00020">부재중</StateBoxContent>
                  </PopStateBox>
                  <PopPhoneBox>010-1234-5678</PopPhoneBox>
                  <PopRecordBox>사유: 병원</PopRecordBox>
                </PopStudentListDetail>
                <PopStudentListDetail>
                  <PopNumberBox>1</PopNumberBox>
                  <PopNameBox>홍길동</PopNameBox>
                  <PopStateBox>
                    <StateBoxContent color="#B00020">부재중</StateBoxContent>
                  </PopStateBox>
                  <PopPhoneBox>010-1234-5678</PopPhoneBox>
                  <PopRecordBox>사유: 병원</PopRecordBox>
                </PopStudentListDetail>
              </PopUpInListWrap>
              <PopUpInListClose
                onClick={() => {
                  setSeeDetail(0);
                }}
              >
                확인
              </PopUpInListClose>
            </PopUpIn>
          </PopUp>
        </FixedBox>
      ) : (
        ""
      )}
    </ManagerSideContentTop>
  );
};
