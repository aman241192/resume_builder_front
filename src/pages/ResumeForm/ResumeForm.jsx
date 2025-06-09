import React, { useEffect, useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import WorkExperiance from "./components/WorkExperiance";
import ContactInfo from "./components/ContactInfo";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Languages from "./components/Languages";
import { IoSave } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import IconButton from "../../components/Buttons/IconButton";
import Summary from "./components/Summary";
import { useDispatch, useSelector } from "react-redux";
import {
  nextPageAction,
  previousPageAction,
} from "../../Slice/ActiveTab/slice";
import { getDetail } from "../../Slice/Resume/thunk";

const tabs = [
  {
    key: 0,
    component: PersonalInfo,
  },
  {
    key: 1,
    component: Summary,
  },
  // {
  //   key: 2,
  //   component: WorkExperiance,
  // },

  // {
  //   key: 3,
  //   component: Education,
  // },
  // {
  //   key: 4,
  //   component: Skills,
  // },
  // {
  //   key: 5,
  //   component: Projects,
  // },
  // {
  //   key: 6,
  //   component: Certifications,
  // },
  // {
  //   key: 6,
  //   component: Languages,
  // },
];

const ResumeForm = ({ data }) => {
  const dispatch = useDispatch();

  // const { userId } = useSelector((state) => state?.login);

  // const [resumeData, setResumeData] = useState({});

  // useEffect(() => {
  //   if (userId) {
  //     dispatch(getDetail(userId))
  //       .unwrap()
  //       .then((resp) => {
  //         if (resp.success) {
  //           setResumeData(resp?.data);
  //         }
  //       });
  //   }
  // }, [userId]);

  const { activeTabStatus } = useSelector((state) => state?.activeTab);

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setActiveTab(activeTabStatus);
  }, [activeTabStatus]);

  const handleChange = (key) => {
    switch (key) {
      case "back":
        dispatch(previousPageAction());
        break;
      case "next":
        dispatch(nextPageAction());
        break;

      default:
        break;
    }
  };

  const ActiveTabComponent = tabs?.[activeTab].component;

  return (
    <div className="max-w-[600px] w-full border-2 border-[#dec7f7]  rounded-lg p-[15px]">
      <div className="flex justify-end ml-auto max-w-[200px] gap-2">
        {activeTab > 0 && (
          <div className="max-w-[80px]">
            <IconButton
              text="Back"
              icon={FaArrowLeft}
              onClick={() => handleChange("back")}
            />
          </div>
        )}

        {activeTab < tabs.length - 1 && (
          <div className="max-w-[80px]">
            <IconButton
              text="Next"
              iconPosition={true}
              icon={FaArrowRight}
              onClick={() => handleChange("next")}
            />
          </div>
        )}
      </div>

      <ActiveTabComponent data={data} />
    </div>
  );
};

export default ResumeForm;
