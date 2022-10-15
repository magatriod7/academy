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
import { useState } from "react";

const managerSettingMenuWrap = css`
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
  display: flex;
`;

const managerSideSettingMenuWrap = css`
  background-color: #ffffff;
  width: 180px; // 이 부분 어떻게 할지 한번 생각해봐야함
  min-width: 180px;
  height: 100%;
  background-color: white;
`;

const sideMenuTopComponent = css`
  position: relative;
  background-color: #8f8f8f;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => {
    console.log(props);
    if (props.menufor === props.nowpage) {
      return `#686868;`;
    } else {
      return `#8F8F8F;`;
    }
  }};
  color: white;
`;

const SideMenuSettingComponent = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const imgSize = css`
  width: 32px;
`;

export const ManagerSideSettingMenu = ({ nowPage, setting, setSetting }) => {
  const [settingDetail, setSettingDetail] = useState("editStudentInfo");
  return (
    <div className="side-menu-wrap" css={managerSettingMenuWrap}>
      <div css={managerSideSettingMenuWrap}>
        <div
          className="test"
          css={sideMenuTopComponent}
          onClick={() => {
            setSetting(0);
          }}
        >
          <img css={imgSize} src={sideImage9} alt="side menu"></img>
        </div>
        <SideMenuComponent
          menufor="editStudentInfo"
          nowpage={settingDetail}
          onClick={() => {
            setSettingDetail("editStudentInfo");
          }}
        >
          <img src={sideImage8} css={imgSize} />
          <div>학생 정보 수정</div>
        </SideMenuComponent>
        <SideMenuComponent
          menufor="editWebpage"
          nowpage={settingDetail}
          onClick={() => {
            setSettingDetail("editWebpage");
          }}
        >
          <img src={sideImage8} css={imgSize} />
          <div>웹페이지 설정</div>
        </SideMenuComponent>
      </div>
    </div>
  );
};
