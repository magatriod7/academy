/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const rightCard = css`
  & .RightCardText {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 33px;
    border-bottom: 1px solid #686868;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 18px;
    /* identical to box height */

    color: #000000;
  }

  & .RightCardArticle {
    height: 0px;
    overflow: hidden;
    margin-bottom: 24px;
  }

  & .up {
    height: auto;
  }
`;

export const RecordTodayRightCard = () => {
  // const selector = useSelector((state) => state);
  const params = useParams();
  const [close, setClose] = useState(false);

  useEffect(() => {
    // console.log(params["*"]);
  }, []);

  return (
    <div
      css={rightCard}
      onClick={() => {
        setClose(!close);
      }}
    >
      <div className="RightCardText">2022-10-10 ~ 10-16</div>
      <div className={"RightCardArticle " + (close == true ? "up" : "")}>
        공부하기 <br />
        공부하기 <br />
        공부하기 <br />
        공부하기 <br />
        공부하기 <br />
      </div>
    </div>
  );
};
