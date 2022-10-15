/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import SearchButtonSvg from "../../../img/SearchButton.svg";

const imageCss = css``;

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
  border: 1px solid #c8c8c8;
`;

const MainSearchLeftComponent3Input = styled.input`
  /* margin-left: 30px; */
  height: 40px;
  padding: 0px 0px 0px 20px;
  width: 280px;
  border: none;

  background-color: rgba(255, 255, 255, 0);

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  /* grey 01 */

  color: #686868;

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
  padding: 0px 20px 0px 10px;
  margin: 0px 20px;

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  border: 1px solid #c8c8c8;
  /* identical to box height */

  /* grey 01 */

  color: #686868;
  &:focus {
    /* border: 0px; */
    /* outline: none; */
  }
`;

export const MainSearchWrapJSX = () => {
  const [year, setYear] = useState([]);
  const [month, setMonth] = useState([]);
  const [form, setValues] = useState({ info: "", year: "", month: "" });

  const onChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const date = new Date();
    const yearTXT = date.getFullYear();
    let yearList = [];
    for (let i = yearTXT; i > 2016; i--) {
      yearList.push(i);
    }
    let monthList = [];
    for (let i = 1; i < 13; i++) {
      monthList.push(i);
    }
    setYear(yearList);
    setMonth(monthList);
  }, []);
  return (
    <MainSearchWrap>
      <MainSearchLeft>
        <MainSearchLeftComponent1 />
        <MainSearchLeftComponent2>학생 검색</MainSearchLeftComponent2>
        <MainSearchLeftComponent3Wrap>
          <MainSearchLeftComponent3Input
            placeholder="ex. 홍길동 / 010-1234-5678 / 한국고등학교"
            onChange={onChange}
            name="info"
            type="text"
            id="info"
          />

          <SearchButton
            onClick={() => {
              console.log(form);
            }}
          >
            <img src={SearchButtonSvg} css={imageCss} />
          </SearchButton>
        </MainSearchLeftComponent3Wrap>
      </MainSearchLeft>
      <MainSearchRight>
        <MainSearchRightComponentSelect
          name="year"
          onChange={onChange}
          defaultValue={""}
        >
          <option value="" disabled hidden>
            년도별 검색
          </option>
          {year.map((i) => (
            <option key={`${i}-option-year`} value={i}>
              {i}
            </option>
          ))}
        </MainSearchRightComponentSelect>
        <MainSearchRightComponentSelect
          name="month"
          onChange={onChange}
          defaultValue={""}
        >
          <option value="" disabled hidden>
            월별 검색
          </option>
          {month.map((i) => (
            <option key={`${i}-option-month`} value={i}>
              {i}
            </option>
          ))}
        </MainSearchRightComponentSelect>
      </MainSearchRight>
    </MainSearchWrap>
  );
};
