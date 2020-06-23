import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./forms-page.styles.scss";

export const FormsPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be valid email!")
        .required("Email is required!"),
      password: Yup.string()
        .min(8, "Password must be at least 8 symbols!")
        .required("Password is required!"),
    }),
  });

  return (
    <div className="forms-page">
      <form onSubmit={formik.handleSubmit} noValidate>
        <label htmlFor="email">Email Address</label>{" "}
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <br /> <br />
        <label htmlFor="password">Password</label>{" "}
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
