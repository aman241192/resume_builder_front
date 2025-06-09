import React, { useState } from "react";
import CustomLayout from "../../Layout/CustomLayout";
import Text from "../../components/CustomTexts/Text";
import { LuCirclePlus } from "react-icons/lu";
import { generatePath, useNavigate } from "react-router-dom";
import { pathConstant } from "../../pathConstant";

const data = [
  {
    _id: "0",
    title: "Resume 1",
    image:
      "https://gdoc.io/uploads/University-Student-Resume-Template-web1.jpg",
  },
  {
    _id: "1",
    title: "Resume 2",
    image: "https://www.meetscottbenson.com/img/ScottBensonResume.jpg",
  },
  {
    _id: "2",
    title: "Resume 2",
    image: "https://www.meetscottbenson.com/img/ScottBensonResume.jpg",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const [resumeList] = useState(data);

  const handleClick = (id) => {
    const path = generatePath(pathConstant.resume, { id: id });
    navigate(path);
  };

  return (
    <CustomLayout>
      <div className="py-4">
        <div className="container flex flex-wrap justify-start items-stretch gap-4">
          <div className="resumeBox p-4 rounded-lg">
            <div className="min-w-[180px] h-full w-full mb-2 flex flex-col justify-center items-center align-middle">
              <div className="bg-[#EEE0FD] w-[40px] h-[40px] flex justify-center items-center rounded-xl cursor-pointer hover:bg-[#dec7f7] hover:scale-105 transition-all duration-300 ease-in-out">
                <LuCirclePlus className="text-[20px] text-[#b370fa]" />
              </div>
              <Text title={"Add New Resume"} />
            </div>
          </div>

          {resumeList?.map((item) => (
            <div
              key={item?._id}
              className="resumeBox p-4 rounded-lg cursor-pointer"
              onClick={() => handleClick(item?._id)}
            >
              <div className="max-w-[180px] w-full mb-2">
                <img src={item?.image} alt="item?.image" />{" "}
              </div>
              <Text title={item?.title} />
            </div>
          ))}
        </div>
      </div>
    </CustomLayout>
  );
};

export default Home;
