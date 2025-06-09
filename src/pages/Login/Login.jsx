import React from "react";
import DynamicFormik from "../../helpers/DynamicFormik";
import NormalInputField from "../../components/InputFields/NormalInputField";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import Heading from "../../components/CustomTexts/Heading";
import AsanaLogo from "../../assets/images/AsanaLogo.jpg";
import * as Yup from "yup";
import { pathConstant } from "../../pathConstant";
import { loginAction } from "../../Slice/Login/thunk";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = () => {
    formik.handleSubmit();
  };

  const onSubmit = (values) => {
    dispatch(loginAction(values))
      .unwrap()
      .then((resp) => {
        if (resp.success) {
          navigate(pathConstant.home);
        }
      });
  };

  const formik = DynamicFormik(initialValues, validationSchema, onSubmit);

  return (
    <div>
      <div className="mt-4 max-w-[80px] ml-auto mr-4">
        <PrimaryButton
          type="primary"
          onClick={() => navigate(pathConstant.register)}
          text="Register"
        />
      </div>
      <div className="m-auto max-w-[512px] w-full mt-4">
        <div className="max-w-[150px] w-full m-auto">
          <img src={AsanaLogo} alt="" />
        </div>

        <div className="text-center">
          <div className="mt-[40px] mb-[20px]">
            <Heading title="Sign in to Harvest" size={30} />
          </div>

          <div className="bg-[#FFF8F1] p-4 rounded-lg loginBox">
            <div className="mb-[10px]">
              <NormalInputField
                name="email"
                style={{ padding: "10px" }}
                type="text"
                placeholder="Enter Email"
                required={true}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errors={
                  formik.touched.email && formik.errors.email && formik.errors
                }
              />
            </div>

            <div className="mb-[10px]">
              <NormalInputField
                name="password"
                style={{ padding: "10px" }}
                type="password"
                placeholder="Password"
                required={true}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errors={
                  formik.touched.password &&
                  formik.errors.password &&
                  formik.errors
                }
              />
              <div className="mt-4">
                <PrimaryButton
                  type="primary"
                  onClick={handleSubmit}
                  text="Login"
                />
              </div>
            </div>
          </div>

          <div className="mt-[15px]">
            <span className="links">Forgot password?</span>
            <span className="links">Terms of service</span>
            <span className="links">Privacy policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
