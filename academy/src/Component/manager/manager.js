/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ManagerSideContent } from "./managerSideContents/managerSideContent";
import { ManagerSideMenu } from "./managerSideMenu";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { ManagerSideContentMain } from "./managerSideContents/managerSideContentMain";

const managerWrap = css`
  max-width: 1920px;
  width: 100%;
  height: 100vh;
  /* background-color: yellow; */
  display: flex;
`;

export const ManagerPage = () => {
  // const selector = useSelector((state) => state);
  const params = useParams();

  useEffect(() => {
    console.log(params["*"]);
  }, []);

  return (
    <div className="managerWrap" css={managerWrap} onClick={() => {}}>
      <Routes>
        <Route path="/*" element={<ManagerSideMenu params={params["*"]} />} />
      </Routes>
      <ManagerSideContentMain />
    </div>
  );
};
