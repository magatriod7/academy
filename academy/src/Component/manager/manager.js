/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { ManagerSideContent } from "./managerSideContent";
import { ManagerSideMenu } from "./managerSideMenu";

const managerWrap = css`
  max-width: 1920px;
  width: 100%;
  height: 100vh;
  background-color: yellow;
  display: flex;
`;

export const ManagerPage = () => {
  // const selector = useSelector((state) => state);
  const [nowPage, setNowPage] = useState("attandence");

  return (
    <div className="managerWrap" css={managerWrap} onClick={() => {}}>
      <ManagerSideMenu nowPage={nowPage} setNowPage={setNowPage} />
      <ManagerSideContent />
    </div>
  );
};
