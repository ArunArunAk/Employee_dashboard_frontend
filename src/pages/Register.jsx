import { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import {
  useForm,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "../validation/loginSchema";

import { loginUser } from "../api/authApi";

import { AuthContext } from "../context/AuthContext";

import toast, {
  Toaster,
} from "react-hot-toast";

const Login = () => {

  const navigate =
    useNavigate();

  const { login } =
    useContext(AuthContext);

  const [loading, setLoading] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver:
      zodResolver(loginSchema),
  });

  const onSubmit = async (
    data
  ) => {
    try {

      setLoading(true);

      const res =
        await loginUser(data);

      login(
        res.data.token,
        res.data.user
      );

      toast.success(
        "Login Successful"
      );

      navigate("/dashboard");

    } catch (error) {

      toast.error(
        error.response?.data
          ?.message ||
          "Login Failed"
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <>
      <Toaster />

      <div className="container mt-5">

        <div className="row justify-content-center">

          <div className="col-md-5">

            <div className="card shadow">

              <div className="card-body">

                <h3 className="text-center mb-4">
                  Login
                </h3>

                <form
                  onSubmit={handleSubmit(
                    onSubmit
                  )}
                >

                  <div className="mb-3">

                    <label>
                      Email
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      {...register(
                        "email"
                      )}
                    />

                    <small className="text-danger">
                      {
                        errors.email
                          ?.message
                      }
                    </small>

                  </div>

                  <div className="mb-3">

                    <label>
                      Password
                    </label>

                    <input
                      type="password"
                      className="form-control"
                      {...register(
                        "password"
                      )}
                    />

                    <small className="text-danger">
                      {
                        errors
                          .password
                          ?.message
                      }
                    </small>

                  </div>

                  <button
                    className="btn btn-primary w-100"
                    disabled={
                      loading
                    }
                  >
                    {loading
                      ? "Loading..."
                      : "Login"}
                  </button>

                </form>

                <div className="mt-3 text-center">

                  <Link
                    to="/register"
                  >
                    Create Account
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default Login;