import React from "react";
import CardHeader from "../../components/CardHeader/CardHeader";

const Contact = () => {
  return (
    <>
      <CardHeader headingName="Contact" />
      <div className="columns">
        <div className="column"></div>
        <div className="column is-two-thirds">
          <div className="ContactForm m-6">
            <form id="contact-form" noValidate>
              {/* Row 1 of form */}
              <div class="field">
                <div class="field-body">
                  <div class="field">
                    <label class="label">Name</label>
                    <p class="control is-expanded has-icons-left">
                      <input class="input" type="text" placeholder="Name" />
                      <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                      </span>
                    </p>
                  </div>
                  <div class="field">
                    <label class="label">Email</label>
                    <p class="control is-expanded has-icons-left has-icons-right">
                      <input
                        class="input is-success"
                        type="email"
                        placeholder="Email"
                        value="alex@smith.com"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                      </span>
                      <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* Row 2 of form */}
              <div class="field">
                <div class="field-body">
                  <div class="field">
                    <label class="label">Subject</label>
                    <div class="control">
                      <input
                        class="input is-danger"
                        type="text"
                        placeholder="e.g. Partnership opportunity"
                      />
                    </div>
                    <p class="help is-danger">This field is required</p>
                  </div>
                </div>
              </div>
              {/* Row 3 of form */}
              <div class="field">
                <div class="field-body">
                  <div class="field">
                    <label class="label">Question</label>
                    <div class="control">
                      <textarea
                        class="textarea"
                        placeholder="Explain how I can help you"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field has-text-centered">
                <div class="field-label"></div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <button class="button is-primary">Send message</button>
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
