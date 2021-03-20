import { EmailJSResponseStatus } from "emailjs-com";
import React from "react";
import { useForm } from "react-hook-form";
import CardHeader from "../../components/CardHeader/CardHeader";

const Contact = () => {
  const { register, errors, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CardHeader headingName="Contact" />
      <div className="columns">
        <div className="column"></div>
        <div className="column is-two-thirds">
          <div className="ContactForm m-6">
            <form
              id="contact-form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="field">
                <div className="field-body">
                  <div className="field">
                    <label className="label">Name</label>
                    <p className="control is-expanded has-icons-left">
                      <input
                        className="input"
                        type="text"
                        name="name"
                        ref={register({
                          required: {
                            value: true,
                            message: "Please enter your name.",
                          },
                          maxLength: {
                            value: 30,
                            message: "Please use 30 characters or less",
                          },
                        })}
                        placeholder="Name"
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                      </span>
                    </p>
                    {errors.name && (
                      <span className="help is-danger errorMessage">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className="field">
                    <label className="label">Email</label>
                    <p className="control is-expanded has-icons-left has-icons-right">
                      <input
                        className="input"
                        type="email"
                        name="email"
                        ref={register({
                          required: true,
                          pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        })}
                        placeholder="Email"
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                      <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                      </span>
                    </p>
                    {errors.email && (
                      <span className="help is-danger errorMessage">
                        Please enter a valid email address
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="field">
                <div className="field-body">
                  <div className="field">
                    <label className="label">Subject</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        name="subject"
                        ref={register({
                          required: {
                            value: true,
                            message: "Please enter a subject",
                          },
                          maxLength: {
                            value: 75,
                            message: "Subject cannot exceed 75 characters",
                          },
                        })}
                        placeholder="Subject"
                      />
                    </div>
                    {errors.subject && (
                      <span className="help is-danger errorMessage">
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="field">
                <div className="field-body">
                  <div className="field">
                    <label className="label">Question</label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        name="message"
                        ref={register({
                          required: true,
                        })}
                        placeholder="Inquiry"
                      ></textarea>
                    </div>
                    {errors.message && (
                      <span className="help is-danger errorMessage">
                        Please enter a message
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="field has-text-centered">
                <div className="field-label"></div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <button className="button is-primary" type="submit">
                        Send message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="column"></div>
      </div>
      );
    </>
  );
};

export default Contact;
