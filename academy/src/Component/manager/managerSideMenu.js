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
import { ManagerSideSettingMenu } from "./managerSideSettingMenu";
import { Link } from "react-router-dom";
import { useState } from "react";

const managerSideMenuWrap = css`
  background-color: #ffffff;
  width: 180px; // 이 부분 어떻게 할지 한번 생각해봐야함
  min-width: 180px;
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

const SideMenuComponent = styled(Link)`
  width: 100%;
  height: 133px;
  display: block;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-decoration: none;

  color: ${(props) => {
    console.log(props);
    if (props.menufor === props.nowpage) {
      console.log("orange");
      return `white;`;
    } else {
      return `#686868;`;
    }
  }};
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

const imgSize = css`
  width: 32px;
`;

export const ManagerSideMenu = ({ params }) => {
  const [setting, setSetting] = useState(0);
  return (
    <div className="side-menu-wrap" css={managerSideMenuWrap}>
      <div
        css={sideMenuTopComponent}
        onClick={() => {
          setSetting(1);
        }}
      >
        <img css={imgSize} src={sideImage4} alt="side menu"></img>
      </div>
      <SideMenuComponent to="/manager/main" menufor="main" nowpage={params}>
        {params === "main" ? (
          <img src={sideImage6} css={imgSize} />
        ) : (
          <img src={sideImage} css={imgSize} />
        )}
        출석부
      </SideMenuComponent>
      <SideMenuComponent
        to="/manager/studentDetail"
        menufor="studentDetail"
        nowpage={params}
      >
        {params === "studentDetail" ? (
          <img src={sideImage5} css={imgSize} />
        ) : (
          <img src={sideImage10} css={imgSize} />
        )}
        학생 상세 정보
      </SideMenuComponent>

      {setting ? (
        <ManagerSideSettingMenu
          nowPage={params}
          setSetting={setSetting}
          setting={setting}
        ></ManagerSideSettingMenu>
      ) : (
        ""
      )}
    </div>
  );
};
