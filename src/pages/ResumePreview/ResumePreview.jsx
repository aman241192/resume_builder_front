import React from "react";
import Templates1 from "./Templates/Templates1";
import ResumeClassic from "./Templates/ResumeClassic";
import { useLocale } from "antd/es/locale";
import { useParams } from "react-router-dom";
import ResumeModern from "./Templates/ResumeModern ";
import { useSelector } from "react-redux";

const ResumePreview = () => {
  const { id } = useParams();

  const { resumeData } = useSelector((state) => state?.resume);

  const templetes = [
    {
      key: 1,
      component: Templates1,
    },
    {
      key: 2,
      component: ResumeClassic,
    },
    {
      key: 3,
      component: ResumeModern,
    },
  ];

  const ActiveResumeTheme = templetes?.[id]?.component;

  return (
    <div>
      <ActiveResumeTheme />
    </div>
  );
};

export default ResumePreview;
