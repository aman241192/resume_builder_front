// import React, { useEffect, useState } from "react";
// import * as Yup from "yup";
// import axios from "axios";
// import DynamicFormik from "../../../helpers/DynamicFormik";
// import Heading from "../../../components/CustomTexts/Heading";
// import UploadImage from "../../../components/UploadImage/UploadImage";
// import NormalInputField from "../../../components/InputFields/NormalInputField";
// import IconButton from "../../../components/Buttons/IconButton";
// import { IoSave } from "react-icons/io5";
// import { useDispatch, useSelector } from "react-redux";
// import { personalAction } from "../../../Slice/Resume/thunk";
// import { nextPageAction } from "../../../Slice/ActiveTab/slice";
// import { personalInfoAction } from "../../../Slice/Resume/slice";

// const PersonalInfo = ({ data }) => {
//   const dispatch = useDispatch();

//   const { userId } = useSelector((state) => state?.login);

//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     if (data) {
//       formik.setValues(data?.personal);
//     }
//   }, [data]);

//   const initialValues = {
//     profile: "",
//     firstName: "",
//     lastName: "",
//     jobTitle: "",
//     address: "",
//     phone: "",
//     email: "",
//   };

//   const validationSchema = Yup.object().shape({
//     firstName: Yup.string().required("Required"),
//     lastName: Yup.string().required("Required"),
//     jobTitle: Yup.string().required("Required"),
//     address: Yup.string().required("Required"),
//     phone: Yup.string().required("Required"),
//     email: Yup.string().required("Required"),
//   });

//   const onSubmit = (values) => {
//     let data = {
//       // _id: userData,
//       user: userId,
//       ...values,
//     };
//     dispatch(personalAction(data))
//       .unwrap()
//       .then((resp) => {
//         if (resp.success) {
//           dispatch(nextPageAction());
//         }
//       });
//   };

//   const formik = DynamicFormik(initialValues, validationSchema, onSubmit);

//   console.log("formik.values", formik.values);

//   // useEffect(() => {
//   //   if (formik.values) {
//   //     debugger;
//   //     dispatch(personalInfoAction(formik.values));
//   //   }
//   // }, [formik.values]);

//   const handleImageChange = ({ fileList }) => {
//     setImages(fileList);
//   };

//   const handleSubmit = async () => {
//     try {
//       let imageUrl = "";

//       if (images.length > 0 && images[0]?.originFileObj) {
//         const formData = new FormData();
//         formData.append("profile", images[0].originFileObj);

//         const response = await axios.post("/api/upload", formData, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         });

//         imageUrl = response.data?.url || response.data?.secure_url || "";
//       }

//       formik.setFieldValue("profile", imageUrl);
//       formik.handleSubmit();
//     } catch (error) {
//       console.error("Image upload failed:", error);
//     }
//   };

//   return (
//     <>
//       <div>
//         <Heading className="font-bold" sise={20} title="Personal Information" />

//         {/* <div className="my-[20px] flex justify-center">
//           <UploadImage
//             fileList={images}
//             onChange={handleImageChange}
//             maxFiles={1}
//             action="/api/upload" // or cloudinary endpoint
//             listType="picture-circle"
//           />
//         </div> */}

//         <div className="flex justify-between flex-wrap gap-1">
//           <div className="mb-[10px] w-[48%]">
//             <NormalInputField
//               name="firstName"
//               type="text"
//               label="First Name"
//               placeholder="Enter First Name"
//               value={formik.values?.firstName}
//               required
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               errors={
//                 formik.touched.firstName &&
//                 formik.errors.firstName &&
//                 formik.errors
//               }
//             />
//           </div>

//           <div className="mb-[10px] w-[48%]">
//             <NormalInputField
//               name="lastName"
//               type="text"
//               label="Last Name"
//               placeholder="Enter Last Name"
//               required
//               onChange={formik.handleChange}
//               value={formik.values?.lastName}
//               onBlur={formik.handleBlur}
//               errors={
//                 formik.touched.lastName &&
//                 formik.errors.lastName &&
//                 formik.errors
//               }
//             />
//           </div>

//           <div className="mb-[10px] w-full">
//             <NormalInputField
//               name="jobTitle"
//               type="text"
//               label="Job Title"
//               placeholder="Enter Job Title"
//               required
//               value={formik.values?.jobTitle}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               errors={
//                 formik.touched.jobTitle &&
//                 formik.errors.jobTitle &&
//                 formik.errors
//               }
//             />
//           </div>

//           <div className="mb-[10px] w-full">
//             <NormalInputField
//               name="address"
//               type="text"
//               label="Address"
//               placeholder="Enter Address"
//               value={formik.values?.address}
//               required
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               errors={
//                 formik.touched.address && formik.errors.address && formik.errors
//               }
//             />
//           </div>

//           <div className="mb-[10px] w-[48%]">
//             <NormalInputField
//               name="phone"
//               type="text"
//               label="Phone"
//               placeholder="Enter Phone Number"
//               value={formik.values?.phone}
//               required
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               errors={
//                 formik.touched.phone && formik.errors.phone && formik.errors
//               }
//             />
//           </div>

//           <div className="mb-[10px] w-[48%]">
//             <NormalInputField
//               name="email"
//               type="email"
//               label="Email"
//               placeholder="Enter Email"
//               required
//               value={formik.values?.email}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               errors={
//                 formik.touched.email && formik.errors.email && formik.errors
//               }
//             />
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-end items-center gap-2 mt-[15px]">
//         <div className="max-w-[140px] w-full">
//           <IconButton
//             type="submit"
//             text="Save and Exit"
//             icon={IoSave}
//             onClick={handleSubmit}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default PersonalInfo;

import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import DynamicFormik from "../../../helpers/DynamicFormik";
import Heading from "../../../components/CustomTexts/Heading";
import NormalInputField from "../../../components/InputFields/NormalInputField";
import IconButton from "../../../components/Buttons/IconButton";
import { IoSave } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { personalAction } from "../../../Slice/Resume/thunk";
import { nextPageAction } from "../../../Slice/ActiveTab/slice";
import UploadImage from "../../../components/UploadImage/UploadImage";
import { personalInforFormAction } from "../../../Slice/Resume/slice";

const PersonalInfo = ({ data }) => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state?.login);

  const [images, setImages] = useState([]);

  const initialValues = {
    profile: "",
    firstName: "",
    lastName: "",
    jobTitle: "",
    address: "",
    phone: "",
    email: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    jobTitle: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    const payload = {
      user: userId,
      ...values,
    };

    //     let data = {
    //       // _id: userData,
    //       user: userId,
    //       ...values,
    //     };

    dispatch(personalAction(payload))
      .unwrap()
      .then((resp) => {
        if (resp.success) {
          dispatch(nextPageAction());
        }
      });
  };

  const formik = DynamicFormik(initialValues, validationSchema, onSubmit);

  useEffect(() => {
    if (data?.personal) {
      formik.setValues(data.personal);
    }
  }, [data]);

  useEffect(() => {
    if (formik.values) {
      dispatch(personalInforFormAction(formik.values));
    }
  }, [formik.values]);

  const handleImageChange = ({ fileList }) => {
    setImages(fileList);
  };

  const handleSubmit = async () => {
    try {
      let imageUrl = "";

      if (images.length > 0 && images[0]?.originFileObj) {
        const formData = new FormData();
        formData.append("profile", images[0].originFileObj);

        const response = await axios.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        imageUrl = response.data?.url || response.data?.secure_url || "";
      }

      formik.setFieldValue("profile", imageUrl);
      formik.handleSubmit();
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  return (
    <>
      <div>
        <Heading className="font-bold" sise={20} title="Personal Information" />

        <div className="my-[20px] flex justify-center">
          <UploadImage
            fileList={images}
            onChange={handleImageChange}
            maxFiles={1}
            action="/api/upload" // or cloudinary endpoint
            listType="picture-circle"
          />
        </div>
        <div className="flex justify-between flex-wrap gap-1">
          <div className="mb-[10px] w-[48%]">
            <NormalInputField
              name="firstName"
              type="text"
              label="First Name"
              placeholder="Enter First Name"
              value={formik.values.firstName}
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={formik.touched.firstName && formik.errors.firstName}
            />
          </div>

          <div className="mb-[10px] w-[48%]">
            <NormalInputField
              name="lastName"
              type="text"
              label="Last Name"
              placeholder="Enter Last Name"
              value={formik.values.lastName}
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={formik.touched.lastName && formik.errors.lastName}
            />
          </div>

          <div className="mb-[10px] w-full">
            <NormalInputField
              name="jobTitle"
              type="text"
              label="Job Title"
              placeholder="Enter Job Title"
              value={formik.values.jobTitle}
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={formik.touched.jobTitle && formik.errors.jobTitle}
            />
          </div>

          <div className="mb-[10px] w-full">
            <NormalInputField
              name="address"
              type="text"
              label="Address"
              placeholder="Enter Address"
              value={formik.values.address}
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={formik.touched.address && formik.errors.address}
            />
          </div>

          <div className="mb-[10px] w-[48%]">
            <NormalInputField
              name="phone"
              type="text"
              label="Phone"
              placeholder="Enter Phone Number"
              value={formik.values.phone}
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={formik.touched.phone && formik.errors.phone}
            />
          </div>

          <div className="mb-[10px] w-[48%]">
            <NormalInputField
              name="email"
              type="email"
              label="Email"
              placeholder="Enter Email"
              value={formik.values.email}
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={formik.touched.email && formik.errors.email}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center gap-2 mt-[15px]">
        <div className="max-w-[140px] w-full">
          <IconButton
            type="submit"
            text="Save and Exit"
            icon={IoSave}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
