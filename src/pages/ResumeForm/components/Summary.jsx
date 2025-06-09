import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import DynamicFormik from "../../../helpers/DynamicFormik";
import Heading from "../../../components/CustomTexts/Heading";
import NormalTextArea from "../../../components/InputFields/NormalTextArea";
import { IoSave } from "react-icons/io5";
import IconButton from "../../../components/Buttons/IconButton";
import { FaBrain } from "react-icons/fa";
import GenerateAI from "../../../components/Buttons/GenerateAI";
import { summaryAction } from "../../../Slice/Resume/thunk";
import { generateAiAction } from "../../../Slice/GenerateAI/thunk";
import { nextPageAction } from "../../../Slice/ActiveTab/slice";
import { BiLoaderAlt } from "react-icons/bi";
import { LoadingOutlined } from "@ant-design/icons";
import { summaryFormAction } from "../../../Slice/Resume/slice";

const Summary = ({ data }) => {
  const dispatch = useDispatch();

  const { userId } = useSelector((state) => state?.login);

  const [summaries, setSummaries] = useState([]);
  const [aiLoader, setAiLoader] = useState(false);

  const initialValues = {
    summary: data?.summary || "",
  };

  const validationSchema = Yup.object().shape({
    summary: Yup.string().required("Required"),
  });

  const handleSubmit = () => {
    formik.handleSubmit();
  };

  const onSubmit = (values) => {
    let data = {
      user: userId,
      ...values,
    };
    dispatch(summaryAction(data))
      .unwrap()
      .then((resp) => {
        if (resp.success) {
          dispatch(nextPageAction());
        }
      });
  };

  const formik = DynamicFormik(initialValues, validationSchema, onSubmit);

  useEffect(() => {
    if (formik.values) {
      dispatch(summaryFormAction(formik.values.summary));
    }
  }, [formik.values]);

  // useEffect(() => {
  //   if (data?.summary) {
  //     formik.setValues(data?.summary);
  //   }
  // }, [data]);

  // useEffect(() => {
  //   dispatch(summaryInfoAction(formik.values));
  // }, [formik.values]);

  const handleChange = () => {
    handleSubmit();
  };

  const handleGenerateAI = async () => {
    setAiLoader(true);
    setSummaries([]); // Clear previous summaries
    const prompt = `
    Generate a JSON object containing resume summaries and relevant keywords for a ${data.personal.jobTitle} across different experience levels: "Fresher", "Mid-level", and "Experienced".

    The JSON structure should be:
    {
      "jobTitle": "Desired Job Title",
      "experienceLevels": [
        {
          "level": "Experience Level",
          "summary": "Concise summary for this experience level.",
          "keywords": ["keyword1", "keyword2", "keyword3"]
        }
      ]
    }

    Ensure the summaries are action-oriented, highlight relevant skills, and include placeholders like "[Number]" for years of experience where applicable. The keywords should be suitable for ATS and recruiter searches.
    `;

    dispatch(generateAiAction(prompt))
      .unwrap()
      .then((resp) => {
        setAiLoader(false);
        setSummaries(resp?.experienceLevels);
      });
  };

  return (
    <>
      <div>
        <Heading className="font-bold" sise={20} title={"Summary"} />

        <div className="mt-[20px] flex justify-between align-baseline items-baseline flex-wrap gap-1">
          <div className="mb-[10px] w-full">
            <NormalTextArea
              name="summary"
              label="Add Summary"
              type="text"
              rows={6}
              value={formik.values.summary}
              placeholder="Enter Summary ..."
              required={true}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={
                formik.touched.summary && formik.errors.summary && formik.errors
              }
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-2">
        <div>
          <div>
            <GenerateAI
              text="Generate from AI"
              icon={aiLoader ? LoadingOutlined : FaBrain}
              onClick={handleGenerateAI}
              disabled={aiLoader}
            />
          </div>
        </div>
        <div className="max-w-[140px] w-full">
          <IconButton
            type="submit"
            text="Save and Exit"
            icon={IoSave}
            onClick={() => handleChange("save")}
          />
        </div>
      </div>

      <div className="mt-[10px]">
        {summaries.length > 0 &&
          summaries.map((item, index) => (
            <div
              key={index}
              className="mt-[10px]"
              onClick={(e) => {
                formik.setFieldValue("summary", e.target.innerText);
              }}
            >
              <div className="mt-[10px] rounded-md p-[15px] mb-4 bg-white aiTextContainer cursor-pointer">
                <p>{item?.summary}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Summary;
