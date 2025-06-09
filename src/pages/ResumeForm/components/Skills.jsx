import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, FieldArray } from "formik";

import { IoSave } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight, FaPlus, FaTrash } from "react-icons/fa6";

import IconButton from "../../../components/Buttons/IconButton";
import Heading from "../../../components/CustomTexts/Heading";
import NormalInputField from "../../../components/InputFields/NormalInputField";
import CustomDatePicker from "../../../components/InputFields/CustomDatePicker";
import { useDispatch, useSelector } from "react-redux";
import { skillAction } from "../../../Slice/Resume/thunk";
import CustomRating from "../../../components/CustomRating/CustomRating";
import { nextPageAction } from "../../../Slice/ActiveTab/slice";
import { skillsInfoAction } from "../../../Slice/Resume/slice";

const Skills = ({ data }) => {
  const dispatch = useDispatch();

  const { userId } = useSelector((state) => state?.login);

  const [initialValues, setInitialValues] = useState({
    skills: [
      {
        name: "",
        rating: 0,
      },
    ],
  });

  useEffect(() => {
    if (data) {
      setInitialValues({ skills: data.skills });
    }
  }, [data]);

  const validationSchema = Yup.object({
    skills: Yup.array()
      .of(
        Yup.object({
          name: Yup.string().required("Required"),
        })
      )
      .min(1, "Add at least one experience"),
  });

  const onSubmit = (values) => {
    let data = {
      user: userId,
      ...values,
    };
    dispatch(skillAction(data))
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
        dispatch(skillsInfoAction(formik.values));

        return (
          <form onSubmit={formik.handleSubmit}>
            <Heading className="font-bold" size={20} title="Skills" />

            <div>
              <FieldArray name="skills">
                {({ push, remove }) => (
                  <>
                    {formik.values.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="mt-5 relative p-4 rounded-lg border-2   border-[#e6e1e1]"
                      >
                        <div className="flex justify-between flex-wrap gap-4 align-baseline  items-baseline">
                          <div className="w-[48%]">
                            <NormalInputField
                              name={`skills[${index}].name`}
                              // label="Name"
                              placeholder="Enter Skill"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={skill.name}
                            />

                            {formik.touched.skills?.[index]?.name &&
                            formik.errors.skills?.[index]?.name ? (
                              <span className="text-[red] mt-[-5px] block">
                                {formik.errors.skills?.[index]?.name}
                              </span>
                            ) : (
                              ""
                            )}
                          </div>

                          <div className="w-[48%]">
                            <CustomRating
                              value={skill.rating}
                              onChange={(value) =>
                                formik.setFieldValue(
                                  `skills[${index}].rating`,
                                  value
                                )
                              }
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
                        text="Add Experience"
                        icon={FaPlus}
                        onClick={() =>
                          push({
                            name: "",
                            rating: "",
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
                <IconButton type="submit" text="Save and Exit" icon={IoSave} />
              </div>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default Skills;
