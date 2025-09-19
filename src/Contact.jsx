import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("xoqbadde");

    if (state.succeeded) {
        return (
            <div className="container">
                <p>Thank you! Your message has been sent successfully. We’ll be in touch soon.</p>
            </div>
        )
    }

  return (
    <div>
      <section className="message">
        <div className="container">
          <h2 className="header">Contact us</h2>
        </div>

        <div className="row">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVtYWlsfGVufDB8fDB8fHww"
              alt="mail"
            />
          </div>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
                Email Address
            </label>
            <input
                id="email"
                type="email" 
                name="email"
                required
                placeholder="your email"
                className="box"
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />

            <label htmlFor="name">
                Name
            </label>
            <input
                id="name"
                type="text" 
                name="name"
                placeholder="your name"
                className="box"
            />
            <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
            />

            <label htmlFor="text">
                Your Message
            </label>
            <textarea
                id="message"
                name="message"
                placeholder="your comments"
                className="box"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button className="change" type="submit" disabled={state.submitting}>
                Submit
            </button>
            </form>
        </div>

        <div className="footer">
          <div className="box-container">
            <div className="box">
              <h3>Elena B web developer</h3>
              <p>All images, prices and information are for demo purposes only</p>
              <br />
              <div className="fb">
                <a href="https://www.linkedin.com/in/elena-b-tw/">
                  <i className="bx bxl-linkedin-square"></i>
                </a>
                <a href="#">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="https://github.com/elenabztw">
                  <i className="bx bxl-github"></i>
                </a>
              </div>
            </div>
          </div>
          <p className="credit">created by Elena B</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
