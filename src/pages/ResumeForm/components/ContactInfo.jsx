import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import DynamicFormik from "../../../helpers/DynamicFormik";
import Heading from "../../../components/CustomTexts/Heading";
import UploadImage from "../../../components/UploadImage/UploadImage";
import NormalInputField from "../../../components/InputFields/NormalInputField";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import NormalTextArea from "../../../components/InputFields/NormalTextArea";

import { IoSave } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import IconButton from "../../../components/Buttons/IconButton";

const ContactInfo = () => {
  const initialValues = {
    address: "",
    email: "",
    phone: "",
    linkedIn: "",
    gitLink: "",
    website: "",
  };

  const validationSchema = Yup.object().shape({
    address: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
  });

  const handleSubmit = () => {
    formik.handleSubmit();
  };

  const onSubmit = (values) => {
    console.log("values", values);
  };

  const formik = DynamicFormik(initialValues, validationSchema, onSubmit);

  const handleChange = (key) => {
    switch (key) {
      case "next":
        handleSubmit();
        // setActiveTab((prev) => prev + 1);
        break;
      case "back":
        // setActiveTab((prev) => prev - 1);
        break;
      case "save":
        console.log("save");
        handleSubmit();

        break;
    }
  };

  return (
    <>
      <div>
        <Heading className="font-bold" sise={20} title={"Contact Info"} />

        <div className="mt-[20px] flex justify-between align-baseline items-baseline flex-wrap gap-1">
          <div className="mb-[10px] w-[48%]">
            <NormalInputField
              name="address"
              type="type"
              label={"Address"}
              placeholder="Enter Address"
              required={true}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={
                formik.touched.address && formik.errors.address && formik.errors
              }
            />
          </div>
          <div className="mb-[10px] w-[48%]">
            <NormalInputField
              name="email"
              label={"Email"}
              type="type"
              placeholder="Enter Email"
              required={true}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={
                formik.touched.email && formik.errors.email && formik.errors
              }
            />
          </div>
          <div className="mb-[10px] w-[48%]">
            <NormalInputField
              name="phone"
              label={"Phone"}
              type="type"
              placeholder="Enter phone"
              required={true}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={
                formik.touched.phone && formik.errors.phone && formik.errors
              }
            />
          </div>

          <div className="mb-[10px] w-[48%]">
            <NormalInputField
              name="linkedIn"
              label="linkedIn"
              type="text"
              placeholder="Enter linkedIn"
              required={true}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <div className="mb-[10px] w-[48%]">
            <NormalInputField
              name="website"
              label="Website"
              type="text"
              placeholder="Enterwebsite"
              required={true}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <div className="mb-[10px] w-[48%]">
            <NormalInputField
              name="gitLink"
              label="Git Link"
              type="text"
              placeholder="Enter Git Link"
              required={true}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <div className="mb-[10px] w-[48%]">
            <NormalInputField
              name="website"
              label="Website"
              type="text"
              placeholder="Enterwebsite"
              required={true}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center gap-2 mt-[15px]">
        <div className="max-w-[80px] w-full">
          <IconButton
            text="Back"
            icon={FaArrowLeft}
            onClick={() => handleChange("back")}
            // disabled={activeTab < 1}
          />
        </div>

        <div className="max-w-[140px] w-full">
          <IconButton
            type="submit"
            text="Save and Exit"
            icon={IoSave}
            onClick={() => handleChange("save")}
          />
        </div>

        <div className="max-w-[80px] w-full">
          <IconButton
            type="submit"
            text="Next"
            icon={FaArrowRight}
            onClick={() => handleChange("next")}
            iconPosition={true}
            // disabled={activeTab == tabs.length - 1}
          />
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
