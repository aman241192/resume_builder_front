import Heading from "../../components/CustomTexts/Heading";
import { MdEdit } from "react-icons/md";
import CustomLayout from "../../Layout/CustomLayout";
import { IoIosColorPalette } from "react-icons/io";
import Text from "../../components/CustomTexts/Text";
import ResumeForm from "../ResumeForm/ResumeForm";
import ResumePreview from "../ResumePreview/ResumePreview";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDetail } from "../../Slice/Resume/thunk";

const Resume = () => {
  const buttons = [
    { icon: IoIosColorPalette, title: "Change Theme", key: "" },
    { icon: IoIosColorPalette, title: "Delete", key: "" },
    { icon: IoIosColorPalette, title: "Preview", key: "" },
  ];

  const handlePreview = () => {
    debugger;
  };

  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state?.login);

  const [resumeData, setResumeData] = useState({});

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

  useEffect(() => {
    if (userId) {
      dispatch(getDetail(userId))
        .unwrap()
        .then((resp) => {
          if (resp.success) {
            setResumeData(resp?.data);
          }
        });
    }
  }, [userId]);

  return (
    <div>
      <CustomLayout>
        <div className="py-4">
          <div className="container">
            <div className="resumeContainer">
              <div className="bg-white rounded-md">
                <div className="flex items-center gap-4">
                  <Heading size={20} title={"UI UX Designer Resume"} />
                  <MdEdit className="text-[20px] text-purple-500" />
                </div>
              </div>

              <div className="flex justify-between gap-3 max-w-[420px] ">
                {buttons?.map((item, index) => {
                  let Icon = item?.icon;
                  return (
                    <div
                      key={index}
                      className="flex justify-center px-[8px] gap-2 items-center rounded-md bg-[#dec7f7] w-fit cursor-pointer"
                      onClick={handlePreview}
                    >
                      {<Icon className="text-[#9944f3] text-[20px]" />}
                      <Text
                        className="text-[#9944f3] font-bold"
                        size={14}
                        title={item?.title}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-between mt-[15px] gap-4">
              <ResumeForm data={resumeData} />
              <ResumePreview data={resumeData} />
            </div>
          </div>
        </div>
      </CustomLayout>
    </div>
  );
};

export default Resume;
