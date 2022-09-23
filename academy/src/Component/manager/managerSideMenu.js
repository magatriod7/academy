/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import sideImage from "../../img/side_bar_icon-1.svg";
import sideImage2 from "../../img/side_bar_icon-2.svg";
import sideImage3 from "../../img/side_bar_icon-3.svg";
import sideImage4 from "../../img/side_bar_icon-4.svg";
import sideImage5 from "../../img/side_bar_icon-5.svg";
import sideImage6 from "../../img/side_bar_icon-6.svg";
import sideImage7 from "../../img/side_bar_icon-7.svg";
import sideImage8 from "../../img/side_bar_icon-8.svg";
import sideImage9 from "../../img/side_bar_icon-9.svg";
import sideImage10 from "../../img/side_bar_icon.svg";
import styled from "@emotion/styled";

const managerSideMenuWrap = css`
  background-color: #ffffff;
  width: 200px; // 이 부분 어떻게 할지 한번 생각해봐야함
  height: 100%;
`;

const sideMenuTopComponent = css`
  position: relative;
  background-color: #ffffff;
  width: 100%;
  height: 133px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SideMenuComponent = styled.div`
  width: 100%;
  height: 133px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => {
    console.log(props);
    if (props.menufor === props.nowpage) {
      console.log("orange");
      return `#ed7700;`;
    } else {
      return `white;`;
    }
  }};
`;

const SideMenuSettingComponent = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: grey;
`;

const imgSize = css`
  width: 32px;
`;

export const ManagerSideMenu = ({ nowPage, setNowPage }) => {
  return (
    <div
      className="side-menu-wrap"
      css={managerSideMenuWrap}
      onClick={() => {}}
    >
      <div css={sideMenuTopComponent}>
        <img css={imgSize} src={sideImage4} alt="side menu"></img>
      </div>
      <SideMenuComponent
        menufor="attandence"
        nowpage={nowPage}
        onClick={() => {
          setNowPage("attandence");
        }}
      >
        {nowPage === "attandence" ? (
          <img src={sideImage6} css={imgSize} />
        ) : (
          <img src={sideImage} css={imgSize} />
        )}
      </SideMenuComponent>
      <SideMenuComponent
        menufor="studentDetail"
        nowpage={nowPage}
        onClick={() => {
          setNowPage("studentDetail");
        }}
      >
        {nowPage === "studentDetail" ? (
          <img src={sideImage5} css={imgSize} />
        ) : (
          <img src={sideImage10} css={imgSize} />
        )}
      </SideMenuComponent>
    </div>
  );
};
