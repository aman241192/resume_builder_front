import React, { useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import { Formik, FieldArray } from "formik";

import { IoSave } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight, FaPlus, FaTrash } from "react-icons/fa6";

import IconButton from "../../../components/Buttons/IconButton";
import Heading from "../../../components/CustomTexts/Heading";
import NormalInputField from "../../../components/InputFields/NormalInputField";
import CustomDatePicker from "../../../components/InputFields/CustomDatePicker";
import { useDispatch, useSelector } from "react-redux";
import { projectAction } from "../../../Slice/Resume/thunk";
import NormalTextArea from "../../../components/InputFields/NormalTextArea";
import JoditEditor from "jodit-react";
import { Typography } from "antd";
import { nextPageAction } from "../../../Slice/ActiveTab/slice";
import GenerateAI from "../../../components/Buttons/GenerateAI";
import { LoadingOutlined } from "@ant-design/icons";
import { FaBrain } from "react-icons/fa";
import { generateAiAction } from "../../../Slice/GenerateAI/thunk";
import { projectsInfoAction } from "../../../Slice/Resume/slice";

const Projects = ({ data }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const { userId } = useSelector((state) => state?.login);
  const { jobTitle } = useSelector((state) => state?.resume?.personal);

  const [aiLoader, setAiLoader] = useState(null);
  const [summaries, setSummaries] = useState([]);
  const [initialValues, setInitialValues] = useState({
    projects: [
      {
        name: "",
        description: "",
      },
    ],
  });

  const handleGenerateAI = async (ind, item) => {
    setAiLoader(ind);
    setSummaries([]); // Clear previous summaries

    const prompt = `
    I have the following work experience details:

Job Title: ${jobTitle}  
Raw Description: ${item?.description}

Please rewrite this description in a professional, resume-ready format with strong, action-oriented bullet points. Each bullet should:
- Clearly describe contributions and responsibilities
- Highlight specific technologies used and how they were applied
- Include quantifiable results if possible
- Be suitable for a software developer resume

I want 2 to 4 variations of the description, and I need the final result in the following strict JSON format:

{
  "position":  ${jobTitle}  ,
   "description_options": [
    {
      "option_number": 1,
      "bullets": [
        "First bullet point",
        "Second bullet point",
        "Third bullet point"
      ]
    },
    {
      "option_number": 2,
      "bullets": [
        "First bullet point",
        "Second bullet point",
        "Third bullet point"
      ]
    }
  ]
}

Do not add any commentary outside the JSON. Keep it ATS-optimized and ready to be used directly in a resume.
`;
    dispatch(generateAiAction(prompt))
      .unwrap()
      .then((resp) => {
        setAiLoader(null);
        setSummaries(resp?.description_options);
      });
  };
  useEffect(() => {
    if (data) {
      setInitialValues({ projects: data.projects });
    }
  }, [data]);

  const validationSchema = Yup.object({
    projects: Yup.array()
      .of(
        Yup.object({
          name: Yup.string().required("Required"),
          description: Yup.string().required("Required"),
        })
      )
      .min(1, "Add at least one experience"),
  });

  const onSubmit = (values) => {
    console.log("Submitted values:", values);

    let data = {
      user: userId,
      ...values,
    };
    dispatch(projectAction(data))
      .unwrap()
      .then((resp) => {
        if (resp.success) {
          dispatch(nextPageAction());
        }
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(formik) => {
        dispatch(projectsInfoAction(formik.values));

        return (
          <form onSubmit={formik.handleSubmit}>
            <Heading className="font-bold" size={20} title="Project" />

            <div>
              <FieldArray name="projects">
                {({ push, remove }) => (
                  <>
                    {formik.values.projects.map((project, index) => (
                      <div
                        key={index}
                        className="mt-5 relative p-4 rounded-lg border-2   border-[#e6e1e1]"
                      >
                        <div className="flex justify-between flex-wrap gap-4">
                          <div className="w-full">
                            <NormalInputField
                              name={`projects[${index}].name`}
                              label="Name"
                              placeholder="Name"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={project.name}
                            />

                            {formik.touched.projects?.[index]?.name &&
                            formik.errors.projects?.[index]?.name ? (
                              <span className="text-[red] mt-[-5px] block">
                                {formik.errors.projects?.[index]?.name}
                              </span>
                            ) : (
                              ""
                            )}
                          </div>

                          <div className="w-full">
                            <div className="flex mb-1">
                              <Typography.Text className="text-[13px]">
                                Description
                              </Typography.Text>
                            </div>
                            {/* <JoditEditor
                            // key={index} // ensures re-render
                            ref={editor}
                            value={project.description}
                            tabIndex={1}
                            config={{
                              placeholder: "Enter project description here...", // your custom placeholder
                            }}
                            // onChange={(newContent) => {
                            // formik.setFieldValue(
                            //   `projects[${index}].description`,
                            //   newContent
                            // );
                            // }}
                          /> */}
                            <JoditEditor
                              ref={editor}
                              value={project.description}
                              config={{
                                placeholder:
                                  "Enter project description here...", // your custom placeholder
                              }}
                              tabIndex={1} // tabIndex of textarea
                              onBlur={(newContent) =>
                                //  setContent(newContent)

                                formik.setFieldValue(
                                  `projects[${index}].description`,
                                  newContent
                                )
                              } // preferred to use only this option to update the content for performance reasons
                              onChange={(newContent) => {}}
                            />

                            {formik.touched.projects?.[index]?.description &&
                            formik.errors.projects?.[index]?.description ? (
                              <span className="text-[red] mt-[-5px] block">
                                {formik.errors.projects?.[index]?.description}
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                          <GenerateAI
                            text="Generate from AI"
                            icon={aiLoader == index ? LoadingOutlined : FaBrain}
                            onClick={() => handleGenerateAI(index, project)}
                            disabled={aiLoader == index}
                          />
                          <div className="mt-[10px]">
                            {summaries?.length > 0 &&
                              summaries?.map((item, ind) => (
                                <div
                                  key={ind}
                                  className="mt-[10px]"
                                  onClick={(e) => {
                                    const bulletHTML = `<ul>${item.bullets
                                      .map((points) => `<li  >${points}</li>`)
                                      .join("")}</ul>`;

                                    formik.setFieldValue(
                                      `projects[${index}].description`,
                                      bulletHTML
                                    );
                                  }}
                                >
                                  <div className="mt-[10px] rounded-md p-[15px] mb-4 bg-white aiTextContainer cursor-pointer">
                                    <ul className="pl-[20px]">
                                      {item?.bullets?.map((it) => {
                                        return (
                                          <li
                                            className="mb-3"
                                            style={{ listStyle: "auto" }}
                                          >
                                            {it}
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>

                        {index > 0 && (
                          <button
                            type="button"
                            onClick={() => remove(index)}
                            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                          >
                            <FaTrash />
                          </button>
                        )}
                      </div>
                    ))}

                    <div className="max-w-[150px] w-full mt-4">
                      <IconButton
                        type="button"
                        text="Add Experience"
                        icon={FaPlus}
                        onClick={() =>
                          push({
                            name: "",
                            description: "",
                          })
                        }
                      />
                    </div>
                  </>
                )}
              </FieldArray>
            </div>

            {/* Footer Navigation */}
            <div className="flex justify-end items-center gap-2 mt-[15px]">
              <div className="max-w-[140px] w-full">
                <IconButton
                  type="submit"
                  text="Save and Exit"
                  icon={IoSave}
                  // onClick={() => handleChange("save", formik)}
                />
              </div>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default Projects;
