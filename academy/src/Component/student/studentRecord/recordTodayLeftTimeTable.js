/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import leftArrow from "../../../img/arrow_forward_ios.svg";
import rightArrow from "../../../img/arrow_forward_ios2.svg";
import { RecordMenu } from "./recordMenu";

const titleToday2 = css`
  min-height: 60px;
  max-height: 60px;
  min-width: 290px;
  border-bottom: 1px solid #c8c8c8;
  border-top: 1px solid #c8c8c8;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  margin: 24px 0px;
  /* background-color: red; */

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 32px;

  /* color: #000000; */
`;

const totalStudyFont = css`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #000000;
`;

const totalStudyHour = css`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 33px;
  /* identical to box height */

  /* secondary */
  margin-left: 32px;

  color: #4f84ee;
`;

const DivColor = styled.div`
  background-color: ${(props) => {
    switch (props.subject) {
      case "국어":
        return "#B0D751";
        break;
      case "수학":
        return "#FFAA2C";
        break;
      case "영어":
        return "#4996E2";
        break;
      case "탐구1":
        return "#FF89A5;";
        break;
      case "탐구2":
        return "#D7C0F9;";
        break;
    }
  }};
`;

export const RecordTodayLeftTimeTable = ({ timeTable }) => {
  const [arrayInfo, setArrayInfo] = useState([
    [9, "", "", "", "", "", ""],
    [10, "", "", "", "", "", "", ""],
    [11, "", "", "", "", "", "", ""],
    [12, "", "", "", "", "", "", ""],
    [13, "", "", "", "", "", "", ""],
    [14, "", "", "", "", "", "", ""],
    [15, "", "", "", "", "", "", ""],
    [16, "", "", "", "", "", "", ""],
    [17, "", "", "", "", "", "", ""],
    [18, "", "", "", "", "", "", ""],
    [19, "", "", "", "", "", "", ""],
    [20, "", "", "", "", "", "", ""],
    [21, "", "", "", "", "", "", ""],
    [22, "", "", "", "", "", "", ""],
  ]);
  useEffect(() => {
    // console.log(params["*"]);
  }, []);

  useEffect(() => {
    if (!timeTable) {
      return;
    }
    const arr1 = [
      [9, "", "", "", "", "", ""],
      [10, "", "", "", "", "", ""],
      [11, "", "", "", "", "", ""],
      [12, "", "", "", "", "", ""],
      [13, "", "", "", "", "", ""],
      [14, "", "", "", "", "", ""],
      [15, "", "", "", "", "", ""],
      [16, "", "", "", "", "", ""],
      [17, "", "", "", "", "", ""],
      [18, "", "", "", "", "", ""],
      [19, "", "", "", "", "", ""],
      [20, "", "", "", "", "", ""],
      [21, "", "", "", "", "", ""],
      [22, "", "", "", "", "", ""],
    ];
    // console.log(timeTable);

    timeTable.map((props) => {
      let startHour = Number(props[0].split(":")[0]);
      let startMinute = Number(props[0].split(":")[1]);
      let endHour = Number(props[1].split(":")[0]);
      let endMinute = Number(props[1].split(":")[1]);
      let subject = props[2];

      // console.log(arr1[0][0]);

      if (startHour == endHour) {
        //시간이 처음부터 같은 경우
        // console.log("sametime", startHour, endHour);
        for (let j = startMinute; j < endMinute; j = j + 10) {
          arr1[startHour - 9][j / 10 + 1] = subject;
        }
      } else {
        // console.log("diftime", startHour, endHour);
        for (let i = startHour; i <= endHour; i++) {
          if (i == endHour) {
            // 시간이 같아질 경우
            for (let j = 0; j < endMinute; j = j + 10) {
              // console.log(i - 1, j / 10 + 1);
              arr1[i - 9][j / 10 + 1] = subject;
            }
          } else {
            //시간이 다를 경우 일단 다 채운다
            arr1[i - 9][1] = subject;
            arr1[i - 9][2] = subject;
            arr1[i - 9][3] = subject;
            arr1[i - 9][4] = subject;
            arr1[i - 9][5] = subject;
            arr1[i - 9][6] = subject;
          }
        }
      }

      setArrayInfo(arr1);

      // console.log(startHour, startMinute, endHour, endMinute, subject);
    });
  }, [timeTable]); // timeTable은 받아온 정보를 기준으로 변경시 변형 예정. useSelector을 이용해서 적용할 듯?

  return (
    <div css={timeTableWrap}>
      <div css={titleToday2}>
        <div css={totalStudyFont}>
          총 공부시간 <span css={totalStudyHour}> 22 : 49 Hr</span>
        </div>
      </div>
      <div css={timeTable2}>
        <div>
          {arrayInfo.map((index) => {
            console.log(index);
            return (
              <div>
                <div>{index[0]}</div>
                <DivColor subject={index[1]}></DivColor>
                <DivColor subject={index[2]}></DivColor>
                <DivColor subject={index[3]}></DivColor>
                <DivColor subject={index[4]}></DivColor>
                <DivColor subject={index[5]}></DivColor>
                <DivColor subject={index[6]}></DivColor>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const timeTableWrap = css`
  margin-left: 48px;
  display: flex;
  flex-direction: column;
`;

const timeTable2 = css`
  /* max-height: calc(100% - 152px); */
  height: 100%;
  margin: auto;
  position: relative;
  /* background-color: red; */
  width: 224px;
  overflow: scroll;
  box-sizing: border-box;

  /* background-color: red; */
  margin-bottom: 40px;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  & > div > div {
    box-sizing: border-box;
    height: 32px;
    width: 100%;
    display: flex;
  }

  & > div > div > div {
    box-sizing: border-box;
    width: calc(100% / 7);
    border-left: 1px solid black;
    border-top: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > div > div > div:nth-child(1) {
    border: none;

    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;

    color: #686868;
  }
  & > div > div > div:nth-child(7) {
    border-right: 1px solid black;
  }

  & > div > div:last-child > div {
    border-bottom: 1px solid black;
  }

  & > div > div:last-child > div:first-child {
    border-bottom: none;
  }
`;
