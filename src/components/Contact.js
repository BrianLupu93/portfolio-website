import React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineError } from "react-icons/md";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const SERVICE_ID = "service_ID";
  const TEMPLATE_ID = "template_nk63syt";
  const PUBLIC_KEY = "O0MMg_4DhC5NWV6B9";

  const sendEmail = (SERVICE_ID, TEMPLATE_ID, variables, PUBLIC_KEY) => {
    emailjs.send(SERVICE_ID, TEMPLATE_ID, variables, PUBLIC_KEY).then(
      () => {
        toast.success("Message successfuly sent!");
      },
      (error) => {
        toast.error(`Something went wrong ${error}`);
      }
    );
  };

  const onSubmit = (data) => {
    sendEmail(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message,
        subject: data.subject,
      },
      PUBLIC_KEY
    );
    reset();
  };

  return (
    <div className="contact py-5" id="contact">
      <div className="text-center">
        <h1>get in touch</h1>
        <p>
          Please fill out the form and tell me how can I help you. I'll contact
          you as soon as posible.
        </p>
      </div>
      <div className="container ">
        <ToastContainer theme="dark" limit={5} />
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="input-fields text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "OOPS, you forget to add the name",
                    },
                    minLength: {
                      value: 5,

                      message: "The name seem to be too short",
                    },
                    maxLength: {
                      value: 20,
                      message:
                        "Pleae enter a name with fewer than 20 characters",
                    },
                  })}
                />
                <div className="line"></div>
                {errors.name && (
                  <span className="error-message">
                    <MdOutlineError className="error-icon" />
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="input-fields text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "OOPS, you forget to add the phone",
                    },
                    minLength: {
                      value: 7,
                      message: "The phone seems to be too short",
                    },
                    maxLength: {
                      value: 12,
                      message: "The phone seems to be too long",
                    },
                  })}
                />
                <div className="line"></div>
                {errors.phone && (
                  <span className="error-message">
                    <MdOutlineError className="error-icon" />
                    {errors.phone.message}
                  </span>
                )}
              </div>

              <div className="input-fields text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="E-mail"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "OOPS, you forget to add the email",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid Email",
                    },
                  })}
                />
                <div className="line"></div>
                {errors.email && (
                  <span className="error-message">
                    <MdOutlineError className="error-icon" />
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="input-fields text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  {...register("subject", {
                    required: {
                      value: true,
                      message: "OOPS, you forget to add the subject",
                    },
                    minLength: {
                      value: 3,
                      message: "The subject seems to be too short",
                    },
                    maxLength: {
                      value: 20,
                      message: "The subject seems to be too long",
                    },
                  })}
                />
                <div className="line"></div>
                {errors.subject && (
                  <span className="error-message">
                    <MdOutlineError className="error-icon" />
                    {errors.subject.message}
                  </span>
                )}
              </div>
            </div>

            <div className="col-md-6 col-xs-12">
              <div className=" area-fields text-center">
                <textarea
                  autocomplete="none"
                  onfocus="this.setAttribute('autocomplete', 'none')"
                  typeof="text"
                  className="form-control"
                  placeholder="Please describe shortly your project..."
                  {...register("message", {
                    required: {
                      value: true,
                      message: "OOPS, you forget to add the message",
                    },
                    minLength: {
                      value: 5,
                      message: "The message seems to be too short",
                    },
                    maxLength: {
                      value: 300,
                      message: "The message seems to be too long",
                    },
                  })}
                ></textarea>
                <div className="line"></div>
                {errors.message && (
                  <span className="error-message">
                    <MdOutlineError className="error-icon" />
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button className="btn-main-offer contact-btn" type="submit">
                SEND
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
