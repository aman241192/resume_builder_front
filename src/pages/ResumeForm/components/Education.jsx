// import React, { useEffect, useMemo, useState } from "react";
// import * as Yup from "yup";
// import { Formik, FieldArray } from "formik";

// import { IoSave } from "react-icons/io5";
// import { FaArrowLeft, FaArrowRight, FaPlus, FaTrash } from "react-icons/fa6";

// import IconButton from "../../../components/Buttons/IconButton";
// import Heading from "../../../components/CustomTexts/Heading";
// import NormalInputField from "../../../components/InputFields/NormalInputField";
// import CustomDatePicker from "../../../components/InputFields/CustomDatePicker";
// import { useDispatch, useSelector } from "react-redux";
// import { educationAction } from "../../../Slice/Resume/thunk";
// import NormalTextArea from "../../../components/InputFields/NormalTextArea";
// import { nextPageAction } from "../../../Slice/ActiveTab/slice";
// import CustomCheckBox from "../../../components/CustomCheckBox/CustomCheckBox";
// import {
//   educationFormAction,
//   educationInfoAction,
// } from "../../../Slice/Resume/slice";

// const Education = ({ data }) => {
//   const dispatch = useDispatch();

//   const { userId } = useSelector((state) => state?.login);

//   // const [initialValues, setInitialValues] = useState({
//   //   education: [
//   //     {
//   //       university: "",
//   //       degree: "",
//   //       start: "",
//   //       end: "",
//   //       description: "",
//   //       fieldOfStudy: "",
//   //       grade: "",
//   //     },
//   //   ],
//   // });

//   // useEffect(() => {
//   //   if (data) {
//   //     setInitialValues({ education: data.education });
//   //   }
//   // }, [data]);

//   const initialValues = useMemo(() => {
//     if (data?.experience?.length > 0) {
//       return {
//         education: data.education.map((edu) => ({
//           ...edu,
//           isCurrent: edu.endDate === "Present",
//         })),
//       };
//     } else {
//       return {
//         education: [
//           {
//             university: "",
//             degree: "",
//             start: "",
//             end: "",
//             description: "",
//             fieldOfStudy: "",
//             grade: "",
//           },
//         ],
//       };
//     }
//   }, [data]);

//   const validationSchema = Yup.object({
//     education: Yup.array()
//       .of(
//         Yup.object({
//           university: Yup.string().required("Required"),
//           degree: Yup.string().required("Required"),
//           start: Yup.string().required("Required"),
//           end: Yup.string().required("Required"),
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
//     dispatch(educationAction(data))
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
//         // dispatch(educationInfoAction(formik.values));

//         dispatch(educationFormAction(formik.values));
//         return (
//           <form onSubmit={formik.handleSubmit}>
//             <Heading className="font-bold" size={20} title="Education" />

//             <div>
//               <FieldArray name="education">
//                 {({ push, remove }) => (
//                   <>
//                     {formik.values.education.map((exp, index) => (
//                       <div
//                         key={index}
//                         className="mt-5 relative p-4 rounded-lg border-2   border-[#e6e1e1]"
//                       >
//                         <div className="flex justify-between flex-wrap gap-4">
//                           <div className="w-[48%]">
//                             <NormalInputField
//                               name={`education[${index}].university`}
//                               label="University"
//                               placeholder="University"
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               value={exp.university}
//                             />

//                             {formik.touched.education?.[index]?.university &&
//                             formik.errors.education?.[index]?.university ? (
//                               <span className="text-[red] mt-[-5px] block">
//                                 {formik.errors.education?.[index]?.university}
//                               </span>
//                             ) : (
//                               ""
//                             )}
//                           </div>

//                           <div className="w-[48%]">
//                             <NormalInputField
//                               name={`education[${index}].degree`}
//                               label="Degree"
//                               placeholder="Degree"
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               value={exp.degree}
//                             />
//                             {formik.touched.education?.[index]?.degree &&
//                             formik.errors.education?.[index]?.degree ? (
//                               <span className="text-[red] mt-[-5px] block">
//                                 {formik.errors.education?.[index]?.degree}
//                               </span>
//                             ) : (
//                               ""
//                             )}
//                           </div>

//                           <div className="w-[48%]">
//                             <NormalInputField
//                               name={`education[${index}].fieldOfStudy`}
//                               label="Field Of Study"
//                               placeholder="Field Of Study"
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               value={exp.fieldOfStudy}
//                             />

//                             {formik.touched.education?.[index]?.fieldOfStudy &&
//                             formik.errors.education?.[index]?.fieldOfStudy ? (
//                               <span className="text-[red] mt-[-5px] block">
//                                 {formik.errors.education?.[index]?.fieldOfStudy}
//                               </span>
//                             ) : (
//                               ""
//                             )}
//                           </div>
//                           <div className="w-[48%]">
//                             <NormalInputField
//                               name={`education[${index}].grade`}
//                               label="Grade"
//                               placeholder="Grade"
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               value={exp.grade}
//                             />

//                             {formik.touched.education?.[index]?.grade &&
//                             formik.errors.education?.[index]?.grade ? (
//                               <span className="text-[red] mt-[-5px] block">
//                                 {formik.errors.education?.[index]?.grade}
//                               </span>
//                             ) : (
//                               ""
//                             )}
//                           </div>

//                           <div className="w-[48%]">
//                             <NormalInputField
//                               label="Start Date"
//                               name={`education[${index}].start`}
//                               placeholder="Start Date"
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               value={exp.start}
//                             />

//                             {formik.touched.education?.[index]?.start &&
//                             formik.errors.education?.[index]?.start ? (
//                               <span className="text-[red] mt-[-5px] block">
//                                 {formik.errors.education?.[index]?.start}
//                               </span>
//                             ) : (
//                               ""
//                             )}
//                           </div>

//                           <div className="w-[48%]">
//                             <NormalInputField
//                               label="End Date"
//                               name={`education[${index}].end`}
//                               placeholder="End Date"
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               value={exp.end}
//                             />

//                             {formik.touched.education?.[index]?.end &&
//                             formik.errors.education?.[index]?.end ? (
//                               <span className="text-[red] mt-[-5px] block">
//                                 {formik.errors.education?.[index]?.end}
//                               </span>
//                             ) : (
//                               ""
//                             )}
//                           </div>
//                           {index == 0 && (
//                             <CustomCheckBox
//                               name="pursing"
//                               onChange={(e) => {
//                                 const checked = e.target.checked;
//                                 checked
//                                   ? formik.setFieldValue(
//                                       `education[${index}].end`,
//                                       "Present"
//                                     )
//                                   : formik.setFieldValue(
//                                       `education[${index}].end`,
//                                       ""
//                                     );
//                               }}
//                               title="Pursing"
//                             />
//                           )}

//                           <div className="w-full">
//                             <NormalTextArea
//                               name={`education[${index}].description`}
//                               label="Description"
//                               placeholder="Description"
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               value={exp.description}
//                             />
//                             {formik.touched.education?.[index]?.description &&
//                             formik.errors.education?.[index]?.description ? (
//                               <span className="text-[red] mt-[-5px] block">
//                                 {formik.errors.education?.[index]?.description}
//                               </span>
//                             ) : (
//                               ""
//                             )}
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
//                             university: "",
//                             degree: "",
//                             start: "",
//                             end: "",
//                             description: "",
//                             fieldOfStudy: "",
//                             grade: "",
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

// export default Education;

import React, { useEffect, useMemo } from "react";
import * as Yup from "yup";
import { Formik, FieldArray } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { IoSave } from "react-icons/io5";
import { FaPlus, FaTrash } from "react-icons/fa6";

import IconButton from "../../../components/Buttons/IconButton";
import Heading from "../../../components/CustomTexts/Heading";
import NormalInputField from "../../../components/InputFields/NormalInputField";
import NormalTextArea from "../../../components/InputFields/NormalTextArea";
import CustomCheckBox from "../../../components/CustomCheckBox/CustomCheckBox";

import { educationAction } from "../../../Slice/Resume/thunk";
import { nextPageAction } from "../../../Slice/ActiveTab/slice";
import {
  educationFormAction,
  educationInfoAction,
} from "../../../Slice/Resume/slice";

const Education = ({ data }) => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state?.login);

  const initialValues = useMemo(() => {
    if (data?.education?.length > 0) {
      return {
        education: data.education.map((edu) => ({
          ...edu,
          isCurrent: edu.end === "Present",
        })),
      };
    }
    return {
      education: [
        {
          university: "",
          degree: "",
          start: "",
          end: "",
          description: "",
          fieldOfStudy: "",
          grade: "",
          isCurrent: false,
        },
      ],
    };
  }, [data]);

  const validationSchema = Yup.object({
    education: Yup.array()
      .of(
        Yup.object({
          university: Yup.string().required("Required"),
          degree: Yup.string().required("Required"),
          start: Yup.string().required("Required"),
          end: Yup.string().required("Required"),
        })
      )
      .min(1, "Add at least one education entry"),
  });

  const onSubmit = (values) => {
    const payload = {
      user: userId,
      education: values.education.map((edu) => ({
        ...edu,
        end: edu.isCurrent ? "Present" : edu.end,
      })),
    };
    dispatch(educationAction(payload))
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
        // useEffect(() => {
        //   dispatch(educationFormAction(formik.values));
        // }, [formik.values, dispatch]);

        dispatch(educationFormAction(formik.values));

        return (
          <form onSubmit={formik.handleSubmit}>
            <Heading className="font-bold" size={20} title="Education" />
            <FieldArray name="education">
              {({ push, remove }) => (
                <>
                  {formik.values.education.map((edu, index) => (
                    <div
                      key={index}
                      className="mt-5 relative p-4 rounded-lg border-2 border-[#e6e1e1]"
                    >
                      <div className="flex justify-between flex-wrap gap-4">
                        <div className="w-[48%]">
                          <NormalInputField
                            name={`education[${index}].university`}
                            label="University"
                            placeholder="University"
                            onChange={formik.handleChange}
                            value={edu.university}
                          />
                        </div>

                        <div className="w-[48%]">
                          <NormalInputField
                            name={`education[${index}].degree`}
                            label="Degree"
                            placeholder="Degree"
                            onChange={formik.handleChange}
                            value={edu.degree}
                          />
                        </div>

                        <div className="w-[48%]">
                          <NormalInputField
                            name={`education[${index}].fieldOfStudy`}
                            label="Field of Study"
                            placeholder="Field of Study"
                            onChange={formik.handleChange}
                            value={edu.fieldOfStudy}
                          />
                        </div>

                        <div className="w-[48%]">
                          <NormalInputField
                            name={`education[${index}].grade`}
                            label="Grade"
                            placeholder="Grade"
                            onChange={formik.handleChange}
                            value={edu.grade}
                          />
                        </div>

                        <div className="w-[48%]">
                          <NormalInputField
                            name={`education[${index}].start`}
                            label="Start Date"
                            placeholder="Start Date"
                            onChange={formik.handleChange}
                            value={edu.start}
                          />
                        </div>

                        <div className="w-[48%]">
                          <NormalInputField
                            name={`education[${index}].end`}
                            label="End Date"
                            placeholder="End Date"
                            disabled={edu.isCurrent}
                            onChange={formik.handleChange}
                            value={edu.isCurrent ? "Present" : edu.end}
                          />
                        </div>

                        <div className="w-full">
                          <CustomCheckBox
                            name={`education[${index}].isCurrent`}
                            title="Pursuing"
                            checked={edu.isCurrent}
                            onChange={(e) => {
                              const checked = e.target.checked;
                              formik.setFieldValue(
                                `education[${index}].isCurrent`,
                                checked
                              );
                              if (checked) {
                                formik.setFieldValue(
                                  `education[${index}].end`,
                                  "Present"
                                );
                              } else {
                                formik.setFieldValue(
                                  `education[${index}].end`,
                                  ""
                                );
                              }
                            }}
                          />
                        </div>

                        <div className="w-full">
                          <NormalTextArea
                            name={`education[${index}].description`}
                            label="Description"
                            placeholder="Description"
                            onChange={formik.handleChange}
                            value={edu.description}
                          />
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
                      text="Add Education"
                      icon={FaPlus}
                      onClick={() =>
                        push({
                          university: "",
                          degree: "",
                          start: "",
                          end: "",
                          description: "",
                          fieldOfStudy: "",
                          grade: "",
                          isCurrent: false,
                        })
                      }
                    />
                  </div>
                </>
              )}
            </FieldArray>

            {/* Footer Navigation */}
            <div className="flex justify-end items-center gap-2 mt-[15px]">
              <div className="max-w-[140px] w-full">
                <IconButton type="submit" text="Save and Exit" icon={IoSave} />
              </div>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default Education;
