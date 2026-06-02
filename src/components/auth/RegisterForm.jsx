import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import {
  useForm,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema } from "../validation/registerSchema";

import { registerUser } from "../api/authApi";

import toast, {
  Toaster,
} from "react-hot-toast";

const Register = () => {

  const navigate =
    useNavigate();

  const [loading, setLoading] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver:
      zodResolver(
        registerSchema
      ),
  });

  const onSubmit = async (
    data
  ) => {

    try {

      setLoading(true);

      await registerUser({
        name: data.name,
        email: data.email,
        password:
          data.password,
      });

      toast.success(
        "Registration Successful"
      );

      setTimeout(() => {
        navigate("/");
      }, 1000);

    } catch (error) {

      toast.error(
        error.response?.data
          ?.message ||
          "Registration Failed"
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
                  Register
                </h3>

                <form
                  onSubmit={handleSubmit(
                    onSubmit
                  )}
                >

                  <div className="mb-3">

                    <label>
                      Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      {...register(
                        "name"
                      )}
                    />

                    <small className="text-danger">
                      {
                        errors.name
                          ?.message
                      }
                    </small>

                  </div>

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

                  <div className="mb-3">

                    <label>
                      Confirm Password
                    </label>

                    <input
                      type="password"
                      className="form-control"
                      {...register(
                        "confirmPassword"
                      )}
                    />

                    <small className="text-danger">
                      {
                        errors
                          .confirmPassword
                          ?.message
                      }
                    </small>

                  </div>

                  <button
                    className="btn btn-success w-100"
                    disabled={
                      loading
                    }
                  >
                    {loading
                      ? "Loading..."
                      : "Register"}
                  </button>

                </form>

                <div className="mt-3 text-center">

                  <Link to="/">
                    Already have an account?
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

export default Register;