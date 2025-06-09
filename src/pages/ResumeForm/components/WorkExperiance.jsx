// import React, { useEffect, useRef, useState } from "react";
// import * as Yup from "yup";
// import { Formik, FieldArray } from "formik";
// import { IoSave } from "react-icons/io5";
// import IconButton from "../../../components/Buttons/IconButton";
// import Heading from "../../../components/CustomTexts/Heading";
// import NormalInputField from "../../../components/InputFields/NormalInputField";
// import CustomDatePicker from "../../../components/InputFields/CustomDatePicker";
// import { useDispatch, useSelector } from "react-redux";
// import { experianceAction } from "../../../Slice/Resume/thunk";
// import CustomCheckBox from "../../../components/CustomCheckBox/CustomCheckBox";
// import JoditEditor from "jodit-react";
// import { FaArrowLeft, FaArrowRight, FaPlus, FaTrash } from "react-icons/fa6";
// import { Typography } from "antd";
// import { nextPageAction } from "../../../Slice/ActiveTab/slice";
// import GenerateAI from "../../../components/Buttons/GenerateAI";
// import { LoadingOutlined } from "@ant-design/icons";
// import { FaBrain } from "react-icons/fa";
// import { generateAiAction } from "../../../Slice/GenerateAI/thunk";
// import { workExpFormAction } from "../../../Slice/Resume/slice";

// const WorkExperiance = ({ data }) => {
//   const dispatch = useDispatch();
//   const editor = useRef(null);

//   const { userId } = useSelector((state) => state?.login);

//   const [aiLoader, setAiLoader] = useState(null);
//   const [summaries, setSummaries] = useState([]);
//   const [initialValues, setInitialValues] = useState({
//     experiences: [
//       {
//         company: "",
//         position: "",
//         startDate: "",
//         endDate: "",
//         description: "",
//       },
//     ],
//   });

//   useEffect(() => {
//     if (data) {
//       setInitialValues({ experiences: data.experience });
//     }
//   }, [data]);

//   const handleGenerateAI = async (ind, item) => {
//     setAiLoader(ind);
//     setSummaries([]); // Clear previous summaries

//     const prompt = `
//     You are a resume content generator. Based on the following inputs:

// - Position: {${item?.position}}
// - Date Range: {${item?.date_range}} (Start: ${item?.start_date}}, End: {${item?.end_date}})
// - Core Responsibilities/Description: {{description}}

// Generate 2 to 4 polished experience description options for a resume. Each option should contain 3 to 5 concise, action-oriented bullet points. These should reflect accomplishments and responsibilities relevant to the position.

// Return the result in the following JSON structure:

// {
//   "position": "{{position}}",
//   "date_range": "{{start_date}} – {{end_date}}",
//   "description_options": [
//     {
//       "option_number": 1,
//       "bullets": [
//         "First bullet point",
//         "Second bullet point",
//         "Third bullet point"
//       ]
//     },
//     {
//       "option_number": 2,
//       "bullets": [
//         "First bullet point",
//         "Second bullet point",
//         "Third bullet point"
//       ]
//     }
//   ]
// }

// Requirements:
// - Use resume-appropriate language (start each bullet with a strong action verb).
// - Each bullet point should be concise, clear, and specific.
// - Ensure bullet points are not repeated across options.
// `;

//     dispatch(generateAiAction(prompt))
//       .unwrap()
//       .then((resp) => {
//         setAiLoader(null);
//         setSummaries(resp?.description_options);
//       });
//   };

//   const validationSchema = Yup.object({
//     experiences: Yup.array()
//       .of(
//         Yup.object({
//           company: Yup.string().required("Required"),
//           position: Yup.string().required("Required"),
//           startDate: Yup.string().required("Required"),
//           endDate: Yup.string().required("Required"),
//           // description: Yup.string().required("Required"),
//         })
//       )
//       .min(1, "Add at least one experience"),
//   });

//   const onSubmit = (values) => {
//     console.log("Submitted values:", values);
//     let data = {
//       user: userId,
//       ...values,
//     };
//     dispatch(experianceAction(data))
//       .unwrap()
//       .then((resp) => {
//         if (resp.success) {
//           dispatch(nextPageAction());
//         }
//       });
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={onSubmit}
//       enableReinitialize
//     >
//       {(formik) => {
//         console.log("formik.values", formik.values);
//         // dispatch(workExpInfoAction(formik.values));
//         // dispatch(workExpFormAction(formik.values));
//         useEffect(() => {
//           dispatch(workExpFormAction(formik.values));
//         }, [formik.values]);

//         return (
//           <form onSubmit={formik.handleSubmit}>
//             <Heading className="font-bold" size={20} title="Work Experience" />

//             <div>
//               <FieldArray name="experiences">
//                 {({ push, remove }) => (
//                   <>
//                     {formik?.values?.experiences?.map((exp, index) => (
//                       <div
//                         key={index}
//                         className="mt-5 relative p-4 rounded-lg border-2   border-[#e6e1e1]"
//                       >
//                         <div className="flex justify-between flex-wrap gap-4">
//                           <div className="w-[48%]">
//                             <NormalInputField
//                               name={`experiences[${index}].company`}
//                               label="Company Name"
//                               placeholder="Enter company name"
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               value={exp.company}
//                             />

//                             {formik.touched.experiences?.[index]?.company &&
//                             formik.errors.experiences?.[index]?.company ? (
//                               <span className="text-[red] mt-[-5px] block">
//                                 {formik.errors.experiences?.[index]?.company}
//                               </span>
//                             ) : (
//                               ""
//                             )}
//                           </div>

//                           <div className="w-[48%]">
//                             <NormalInputField
//                               name={`experiences[${index}].position`}
//                               label="Position"
//                               placeholder="Enter position"
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               value={exp.position}
//                             />
//                             {formik.touched.experiences?.[index]?.position &&
//                             formik.errors.experiences?.[index]?.position ? (
//                               <span className="text-[red] mt-[-5px] block">
//                                 {formik.errors.experiences?.[index]?.position}
//                               </span>
//                             ) : (
//                               ""
//                             )}
//                           </div>

//                           <div className="w-[48%]">
//                             <NormalInputField
//                               name={`experiences[${index}].startDate`}
//                               label="Start Date"
//                               placeholder="Enter Start Date"
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               value={exp.startDate}
//                             />

//                             {formik.touched.experiences?.[index]?.startDate &&
//                             formik.errors.experiences?.[index]?.startDate ? (
//                               <span className="text-[red] mt-[-5px] block">
//                                 {formik.errors.experiences?.[index]?.startDate}
//                               </span>
//                             ) : (
//                               ""
//                             )}
//                           </div>
//                           <div className="w-[48%]">
//                             <NormalInputField
//                               name={`experiences[${index}].endDate`}
//                               label="End Date"
//                               placeholder="Enter End Date"
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               value={exp.endDate}
//                             />

//                             {formik.touched.experiences?.[index]?.endDate &&
//                             formik.errors.experiences?.[index]?.endDate ? (
//                               <span className="text-[red] mt-[-5px] block">
//                                 {formik.errors.experiences?.[index]?.endDate}
//                               </span>
//                             ) : (
//                               ""
//                             )}
//                           </div>

//                           {index == 0 && (
//                             <CustomCheckBox
//                               name="currentWork"
//                               onChange={(e) => {
//                                 const checked = e.target.checked;
//                                 checked
//                                   ? formik.setFieldValue(
//                                       `experiences[${index}].endDate`,
//                                       "Present"
//                                     )
//                                   : formik.setFieldValue(
//                                       `experiences[${index}].endDate`,
//                                       ""
//                                     );
//                               }}
//                               title="Currently Work Here"
//                             />
//                           )}

//                           <div className="w-full">
//                             <div className="flex mb-1">
//                               <Typography.Text className="text-[13px]">
//                                 Description
//                               </Typography.Text>
//                             </div>

//                             {/* <JoditEditor
//                             // key={index} // ensures re-render
//                             value={exp.description}
//                             tabIndex={1}
//                             config={{
//                               placeholder: "Enter project description here...", // your custom placeholder
//                             }}
//                             onChange={(newContent) => {
//                               formik.setFieldValue(
//                                 `experiences[${index}].description`,
//                                 newContent
//                               );
//                             }}
//                           /> */}

//                             <JoditEditor
//                               ref={editor}
//                               value={exp.description}
//                               config={{
//                                 placeholder:
//                                   "Enter project description here...", // your custom placeholder
//                               }}
//                               tabIndex={1} // tabIndex of textarea
//                               onBlur={(newContent) =>
//                                 //  setContent(newContent)

//                                 formik.setFieldValue(
//                                   `experiences[${index}].description`,
//                                   newContent
//                                 )
//                               } // preferred to use only this option to update the content for performance reasons
//                               onChange={(newContent) => {}}
//                             />
//                           </div>

//                           <GenerateAI
//                             text="Generate from AI"
//                             icon={aiLoader == index ? LoadingOutlined : FaBrain}
//                             onClick={() => handleGenerateAI(index, exp)}
//                             disabled={aiLoader == index}
//                           />

//                           <div className="mt-[10px]">
//                             {summaries?.length > 0 &&
//                               summaries?.map((item, ind) => (
//                                 <div
//                                   key={ind}
//                                   className="mt-[10px]"
//                                   onClick={(e) => {
//                                     const bulletHTML = `<ul>${item.bullets
//                                       .map((points) => `<li  >${points}</li>`)
//                                       .join("")}</ul>`;

//                                     formik.setFieldValue(
//                                       `experiences[${index}].description`,
//                                       bulletHTML
//                                     );
//                                   }}
//                                 >
//                                   <div className="mt-[10px] rounded-md p-[15px] mb-4 bg-white aiTextContainer cursor-pointer">
//                                     <ul className="pl-[20px]">
//                                       {item?.bullets?.map((it) => {
//                                         return (
//                                           <li
//                                             className="mb-3"
//                                             style={{ listStyle: "auto" }}
//                                           >
//                                             {it}
//                                           </li>
//                                         );
//                                       })}
//                                     </ul>
//                                   </div>
//                                 </div>
//                               ))}
//                           </div>
//                         </div>

//                         {index > 0 && (
//                           <button
//                             type="button"
//                             onClick={() => remove(index)}
//                             className="absolute top-2 right-2 text-red-500 hover:text-red-700"
//                           >
//                             <FaTrash />
//                           </button>
//                         )}
//                       </div>
//                     ))}

//                     <div className="max-w-[150px] w-full mt-4">
//                       <IconButton
//                         type="button"
//                         text="Add Experience"
//                         icon={FaPlus}
//                         onClick={() =>
//                           push({
//                             company: "",
//                             position: "",
//                             startDate: "",
//                             endDate: "",
//                             description: "",
//                           })
//                         }
//                       />
//                     </div>
//                   </>
//                 )}
//               </FieldArray>
//             </div>

//             {/* Footer Navigation */}
//             <div className="flex justify-end items-center gap-2 mt-[15px]">
//               <div className="max-w-[140px] w-full">
//                 <IconButton
//                   type="submit"
//                   text="Save and Exit"
//                   icon={IoSave}
//                   // onClick={() => handleChange("save", formik)}
//                 />
//               </div>
//             </div>
//           </form>
//         );
//       }}
//     </Formik>
//   );
// };

// export default WorkExperiance;

import React, { useMemo, useRef, useState } from "react";
import * as Yup from "yup";
import { Formik, FieldArray } from "formik";
import { IoSave } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { experianceAction } from "../../../Slice/Resume/thunk";
import { nextPageAction } from "../../../Slice/ActiveTab/slice";
import { generateAiAction } from "../../../Slice/GenerateAI/thunk";
import { workExpFormAction } from "../../../Slice/Resume/slice";
import IconButton from "../../../components/Buttons/IconButton";
import Heading from "../../../components/CustomTexts/Heading";
import NormalInputField from "../../../components/InputFields/NormalInputField";
import CustomCheckBox from "../../../components/CustomCheckBox/CustomCheckBox";
import GenerateAI from "../../../components/Buttons/GenerateAI";
import { LoadingOutlined } from "@ant-design/icons";
import { FaArrowLeft, FaArrowRight, FaPlus, FaTrash } from "react-icons/fa6";
import { FaBrain } from "react-icons/fa";
import { Typography } from "antd";
import JoditEditor from "jodit-react";

const WorkExperiance = ({ data }) => {
  const dispatch = useDispatch();
  const editor = useRef(null);
  const { userId } = useSelector((state) => state?.login);

  const [aiLoader, setAiLoader] = useState(null);
  const [summaries, setSummaries] = useState([]);

  const initialValues = useMemo(() => {
    if (data?.experience?.length > 0) {
      return {
        experiences: data.experience.map((exp) => ({
          ...exp,
          isCurrent: exp.endDate === "Present",
        })),
      };
    } else {
      return {
        experiences: [
          {
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            isCurrent: false,
            description: "",
          },
        ],
      };
    }
  }, [data]);

  const validationSchema = Yup.object({
    experiences: Yup.array()
      .of(
        Yup.object({
          company: Yup.string().required("Required"),
          position: Yup.string().required("Required"),
          startDate: Yup.string().required("Required"),
          endDate: Yup.string().required("Required"),
        })
      )
      .min(1, "Add at least one experience"),
  });

  const handleGenerateAI = async (ind, item) => {
    setAiLoader(ind);
    setSummaries([]);

    const prompt = `
You are a resume content generator. Based on the following inputs:

- Position: ${item?.position}
- Date Range: ${item?.startDate} – ${item?.endDate}
- Description: ${item?.description}

Generate 2 to 4 polished experience description options for a resume. Each option should contain 3 to 5 concise, action-oriented bullet points. Return in JSON as described.`;

    dispatch(generateAiAction(prompt))
      .unwrap()
      .then((resp) => {
        setAiLoader(null);
        setSummaries(resp?.description_options || []);
      });
  };

  const onSubmit = (values) => {
    const payload = {
      user: userId,
      experiences: values.experiences.map((exp) => ({
        ...exp,
        endDate: exp.isCurrent ? "Present" : exp.endDate,
      })),
    };

    dispatch(experianceAction(payload))
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
        dispatch(workExpFormAction(formik.values));

        return (
          <form onSubmit={formik.handleSubmit}>
            <Heading className="font-bold" size={20} title="Work Experience" />

            <FieldArray name="experiences">
              {({ push, remove }) => (
                <>
                  {formik.values.experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="mt-5 relative p-4 rounded-lg border-2 border-[#e6e1e1]"
                    >
                      <div className="flex justify-between flex-wrap gap-4">
                        <div className="w-[48%]">
                          <NormalInputField
                            name={`experiences[${index}].company`}
                            label="Company Name"
                            placeholder="Enter company name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={exp.company}
                          />
                          {formik.touched.experiences?.[index]?.company &&
                          formik.errors.experiences?.[index]?.company ? (
                            <span className="text-red-500 text-sm">
                              {formik.errors.experiences[index].company}
                            </span>
                          ) : null}
                        </div>

                        <div className="w-[48%]">
                          <NormalInputField
                            name={`experiences[${index}].position`}
                            label="Position"
                            placeholder="Enter position"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={exp.position}
                          />
                          {formik.touched.experiences?.[index]?.position &&
                          formik.errors.experiences?.[index]?.position ? (
                            <span className="text-red-500 text-sm">
                              {formik.errors.experiences[index].position}
                            </span>
                          ) : null}
                        </div>

                        <div className="w-[48%]">
                          <NormalInputField
                            name={`experiences[${index}].startDate`}
                            label="Start Date"
                            placeholder="Enter Start Date"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={exp.startDate}
                          />
                          {formik.touched.experiences?.[index]?.startDate &&
                          formik.errors.experiences?.[index]?.startDate ? (
                            <span className="text-red-500 text-sm">
                              {formik.errors.experiences[index].startDate}
                            </span>
                          ) : null}
                        </div>

                        <div className="w-[48%]">
                          <NormalInputField
                            name={`experiences[${index}].endDate`}
                            label="End Date"
                            placeholder="Enter End Date"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={exp.endDate}
                          />
                          {formik.touched.experiences?.[index]?.endDate &&
                          formik.errors.experiences?.[index]?.endDate ? (
                            <span className="text-red-500 text-sm">
                              {formik.errors.experiences[index].endDate}
                            </span>
                          ) : null}
                        </div>

                        <CustomCheckBox
                          name={`experiences[${index}].isCurrent`}
                          title="Currently Work Here"
                          onChange={(e) => {
                            const isChecked = e.target.checked;
                            formik.setFieldValue(
                              `experiences[${index}].isCurrent`,
                              isChecked
                            );
                            formik.setFieldValue(
                              `experiences[${index}].endDate`,
                              isChecked ? "Present" : ""
                            );
                          }}
                          checked={exp.isCurrent}
                        />

                        <div className="w-full">
                          <Typography.Text className="text-sm mb-1 block">
                            Description
                          </Typography.Text>

                          <JoditEditor
                            ref={editor}
                            value={exp.description}
                            config={{ placeholder: "Enter description..." }}
                            tabIndex={1}
                            onBlur={(newContent) =>
                              formik.setFieldValue(
                                `experiences[${index}].description`,
                                newContent
                              )
                            }
                            onChange={() => {}}
                          />
                        </div>

                        <GenerateAI
                          text="Generate from AI"
                          icon={aiLoader === index ? LoadingOutlined : FaBrain}
                          onClick={() => handleGenerateAI(index, exp)}
                          disabled={aiLoader === index}
                        />

                        <div className="mt-2 w-full">
                          {summaries.length > 0 &&
                            summaries.map((item, ind) => (
                              <div
                                key={ind}
                                className="cursor-pointer bg-white border rounded p-3 mb-3"
                                onClick={() => {
                                  const html = `<ul>${item.bullets
                                    .map((b) => `<li>${b}</li>`)
                                    .join("")}</ul>`;
                                  formik.setFieldValue(
                                    `experiences[${index}].description`,
                                    html
                                  );
                                }}
                              >
                                <ul className="pl-4 list-disc">
                                  {item.bullets.map((b, i) => (
                                    <li key={i} className="mb-1">
                                      {b}
                                    </li>
                                  ))}
                                </ul>
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
                          company: "",
                          position: "",
                          startDate: "",
                          endDate: "",
                          isCurrent: false,
                          description: "",
                        })
                      }
                    />
                  </div>
                </>
              )}
            </FieldArray>

            <div className="flex justify-end mt-6">
              <IconButton type="submit" text="Save and Exit" icon={IoSave} />
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default WorkExperiance;
