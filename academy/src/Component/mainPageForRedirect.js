/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

export const RedirectPage = () => {
  // const selector = useSelector((state) => state);
  const navigate = useNavigate();

  function RedirectManage() {
    navigate(`/manager/main`);
  }
  useEffect(() => {
    RedirectManage();
  }, []);

  return <div></div>;
};
