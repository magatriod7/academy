/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { RecordPage } from "./record";

export const StudentRouter = () => {
  // const selector = useSelector((state) => state);
  const params = useParams();

  useEffect(() => {
    console.log(params["*"]);
  }, []);

  return (
    <Routes>
      <Route path="/Record" element={<RecordPage />} />
    </Routes>
  );
};
