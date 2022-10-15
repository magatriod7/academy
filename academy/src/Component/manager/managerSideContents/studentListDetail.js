/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import arrow from "../../../img/arrow_back.svg";
import arrowRight from "../../../img/ArrowRight.svg";
import arrowLeft from "../../../img/ArrowLeft.svg";

const StudentListDetail = styled.div`
  background-color: white;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  /* background-color: red; */
  overflow: scroll;

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

const NumberBox = styled.div`
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
const NameBox = styled.div`
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
const StateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  min-width: 120px;
  max-width: 120px;

  height: 100%;

  flex: 1;
`;
const PhoneBox = styled.div`
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
const RecordBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 145px;
  max-width: 250px;

  height: 100%;

  flex: 1;
`;
const DetailBox = styled.div`
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

const FixedBox = styled.div`
  position: fixed;
  max-width: 1920px;
  width: 100vw; // 이 부분 어떻게 할지 한번 생각해봐야함
  height: 100vh;
  /* background-color: red; */
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(200, 200, 200, 0.7);
  /* background-color: green; */
  display: flex;
`;

const PopUp = styled.div`
  width: 800px;
  min-height: 579px;
  max-height: 579px;
  position: absolute;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;

  border-radius: 20px;
  overflow: hidden;
`;
const PopUpIn = styled.div`
  width: 100%;
  height: 100%;
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
  margin-bottom: 40px;
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
  bottom: 30px;
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
const PopDetailInfoTopWrap = styled.div`
  height: 250px;
  /* background: pink; */
  margin: 0px 25px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const PopDetailInfoTop = styled.div`
  width: 300px;
  height: 248px;
  /* background-color: yellow; */
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #c8c8c8;
`;
const PopDetailInfoTop1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  height: 160px;

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  /* background: #ffffff; */
  /* border-radius: 20px; */

  & .face {
    width: 80px;
    height: 80px;
    border-radius: 50px;
    background-color: #d9d9d9;
    margin-bottom: 8px;
  }
`;

const PopDetailInfoTop2 = styled.div`
  width: 100%;
  height: 72px;
  /* background-color: red; */
  padding-bottom: 10px;

  & > div {
    height: 50%;
    box-sizing: border-box;
    /* background-color: green; */
    /* border: pink 1px solid; */
    display: flex;

    align-items: center;
  }

  & > div > .line {
    width: 3px;
    height: 18px;
    background-color: #4f84ee;
    margin-left: 24px;
  }
  & > div > .text1 {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    width: 52px;
    text-align: left;
    /* identical to box height */

    /* grey 01 */

    color: #686868;
    margin-left: 16px;
  }
  & > div > .text2 {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height */

    /* black */

    color: #000000;
    margin-left: 56px;
  }
`;

const PopDetailDateTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 384px;
  height: 250px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  /* border: 1px solid #c8c8c8; */

  & > .date {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 138px;
    height: 34px;
    border: 1px solid #c8c8c8;
    border-radius: 999px;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
  }

  /* background-color: yellow; */
`;

const PopDetailDateListWrap = styled.div`
  width: 100%;
  height: 200px;
  /* border: 1px solid #c8c8c8; */
  border-radius: 20px;
  display: flex;
  justify-content: center;

  & > .arrow {
    width: 30px;
    justify-content: center;
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
  }
`;
const PopDetailDateList = styled.div`
  width: 320px;
  height: 200px;
  border: 1px solid #c8c8c8;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .DateListLine1 {
    height: 29px;
    width: 280px;
    margin-top: 53px;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
  }

  & > .DateListLine1 > .DateListLine1Kids {
    width: 14.2%;
    height: 100%;
    box-sizing: border-box;
    /* border: red solid 1px; */
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 13px;
    color: #686868;
  }

  & > .DateListLine2 {
    height: 29px;
    width: 280px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
  }

  & > .DateListLine2 > .DateListLine2Kids {
    width: 14.2%;
    height: 100%;
    box-sizing: border-box;
    /* border: red solid 1px; */
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 13px;
    color: #686868;
  }
  & > .DateListLine3 {
    height: 29px;
    width: 280px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
  }

  & > .DateListLine3 > .DateListLine3Kids {
    width: 14.2%;
    height: 100%;
    box-sizing: border-box;
    /* border: red solid 1px; */
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 13px;
    color: #686868;
  }
`;

const PopDetailDateListStateRed = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #b00020;
  border-radius: 999px;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 13px;
  color: #b00020;
`;

const PopDetailDateListStateblue = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #4f84ee;
  border-radius: 999px;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 13px;
  color: #4f84ee;
`;

const PopDetailDateListStateRedBig = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #b00020;
  border-radius: 999px;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 13px;
  color: #b00020;
`;

const PopDetailDateListStateblueBig = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #4f84ee;
  border-radius: 999px;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 13px;
  color: #4f84ee;
`;

const PopDetailInfoBottomWrap = styled.div`
  height: 120px;
  /* background: pink; */
  margin: 0px 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  & > div {
    display: flex;
    align-items: center;

    box-sizing: border-box;
    height: 60px;
    min-height: 60px;
    width: 100%;
    border-bottom: 1px solid #e4e4e4;
  }
`;

const PopDetailInfoBottomDetail1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 34px;

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  /* black */

  color: #000000;
`;
const PopDetailInfoBottomDetail2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 24px;
  width: 100px;
  height: 34px;
`;
const PopDetailInfoBottomDetail3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 24px;

  width: 150px;
  height: 34px; ;
`;
const PopDetailInfoBottomDetail4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 24px;

  border-radius: 999px;

  background: #ed7700;
  /* border-radius: 20px; */

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;

  width: 50px;
  height: 34px;
`;
const PopDetailInfoBottomDetail5 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 24px;

  width: 200px;
  height: 34px;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  /* black */

  color: #000000;
`;

export const StudentListDetailJSX = () => {
  const [seeDetail, setSeeDetail] = useState(0);
  return (
    <StudentListDetail>
      <NumberBox>1</NumberBox>
      <NameBox>김누리한</NameBox>
      <StateBox>
        <StateBoxContent color="#B00020">부재중</StateBoxContent>
      </StateBox>
      <PhoneBox>010-3393-0972</PhoneBox>
      <RecordBox>
        <StateBoxContent color="#B00020">22:33 PM 퇴실</StateBoxContent>
      </RecordBox>
      <DetailBox
        onClick={() => {
          setSeeDetail(1);
        }}
      >
        <img src={arrow}></img>
      </DetailBox>

      {seeDetail ? (
        <FixedBox>
          <PopUp>
            <PopUpIn>
              <PopUpInTitle>자세히 보기</PopUpInTitle>
              <PopDetailInfoTopWrap>
                <PopDetailInfoTop>
                  <PopDetailInfoTop1>
                    <div className="face"></div>
                    <div>한상훈</div>
                  </PopDetailInfoTop1>
                  <PopDetailInfoTop2>
                    <div>
                      <div className="line"></div>
                      <div className="text1">전화번호</div>
                      <div className="text2">010-1234-5678</div>
                    </div>
                    <div>
                      <div className="line"></div>
                      <div className="text1">소속</div>
                      <div className="text2">홍천고등학교 이공계열</div>
                    </div>
                  </PopDetailInfoTop2>
                </PopDetailInfoTop>
                <PopDetailDateTop>
                  <div className="date">9.17 ~ 2.23</div>
                  <PopDetailDateListWrap>
                    <div className="arrow">
                      <img src={arrowLeft} />
                    </div>
                    <PopDetailDateList>
                      <div className="DateListLine1">
                        <div className="DateListLine1Kids">
                          <PopDetailDateListStateRed>
                            지각
                          </PopDetailDateListStateRed>
                        </div>
                        <div className="DateListLine1Kids">-</div>
                        <div className="DateListLine1Kids">-</div>
                        <div className="DateListLine1Kids">-</div>
                        <div className="DateListLine1Kids">-</div>
                        <div className="DateListLine1Kids">-</div>
                        <div className="DateListLine1Kids">-</div>
                      </div>
                      <div className="DateListLine2">
                        <div className="DateListLine2Kids">-</div>
                        <div className="DateListLine2Kids">-</div>
                        <div className="DateListLine2Kids">
                          <PopDetailDateListStateblue>
                            조퇴
                          </PopDetailDateListStateblue>
                        </div>
                        <div className="DateListLine2Kids">-</div>
                        <div className="DateListLine2Kids">-</div>
                        <div className="DateListLine2Kids">-</div>
                        <div className="DateListLine2Kids">-</div>
                      </div>
                      <div className="DateListLine3">
                        <div className="DateListLine3Kids">월</div>
                        <div className="DateListLine3Kids">화</div>
                        <div className="DateListLine3Kids">수</div>
                        <div className="DateListLine3Kids">목</div>
                        <div className="DateListLine3Kids">금</div>
                        <div className="DateListLine3Kids">토</div>
                        <div className="DateListLine3Kids">일</div>
                      </div>
                    </PopDetailDateList>
                    <div className="arrow">
                      <img src={arrowRight} />
                    </div>
                  </PopDetailDateListWrap>
                </PopDetailDateTop>
              </PopDetailInfoTopWrap>
              <PopUpInListClose
                onClick={() => {
                  setSeeDetail(0);
                }}
              >
                확인
              </PopUpInListClose>
              <PopDetailInfoBottomWrap>
                <div>
                  <PopDetailInfoBottomDetail1>월</PopDetailInfoBottomDetail1>
                  <PopDetailInfoBottomDetail2>
                    <PopDetailDateListStateRedBig>
                      지각
                    </PopDetailDateListStateRedBig>
                  </PopDetailInfoBottomDetail2>
                  <PopDetailInfoBottomDetail3>
                    <PopDetailDateListStateRedBig>
                      10:00AM 입실
                    </PopDetailDateListStateRedBig>
                  </PopDetailInfoBottomDetail3>
                  <PopDetailInfoBottomDetail4>사유</PopDetailInfoBottomDetail4>
                  <PopDetailInfoBottomDetail5>
                    오전 병원 치과
                  </PopDetailInfoBottomDetail5>
                </div>
                <div>
                  <PopDetailInfoBottomDetail1>수 </PopDetailInfoBottomDetail1>
                  <PopDetailInfoBottomDetail2>
                    <PopDetailDateListStateRedBig>
                      지각
                    </PopDetailDateListStateRedBig>
                  </PopDetailInfoBottomDetail2>
                  <PopDetailInfoBottomDetail3>
                    <PopDetailDateListStateRedBig>
                      10:00AM 입실
                    </PopDetailDateListStateRedBig>
                  </PopDetailInfoBottomDetail3>
                  <PopDetailInfoBottomDetail4>사유</PopDetailInfoBottomDetail4>
                  <PopDetailInfoBottomDetail5>
                    오전 병원 치과
                  </PopDetailInfoBottomDetail5>
                </div>
                <div>
                  <PopDetailInfoBottomDetail1>금</PopDetailInfoBottomDetail1>
                  <PopDetailInfoBottomDetail2>
                    <PopDetailDateListStateblueBig>
                      조퇴
                    </PopDetailDateListStateblueBig>
                  </PopDetailInfoBottomDetail2>
                  <PopDetailInfoBottomDetail3>
                    <PopDetailDateListStateblueBig>
                      14:00AM 퇴실
                    </PopDetailDateListStateblueBig>
                  </PopDetailInfoBottomDetail3>
                  <PopDetailInfoBottomDetail4>사유</PopDetailInfoBottomDetail4>
                  <PopDetailInfoBottomDetail5>
                    가족 모임
                  </PopDetailInfoBottomDetail5>
                </div>
              </PopDetailInfoBottomWrap>
            </PopUpIn>
          </PopUp>
        </FixedBox>
      ) : (
        ""
      )}
      {/* <FixedBox></FixedBox> */}
    </StudentListDetail>
  );
};
