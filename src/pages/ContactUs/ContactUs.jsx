import Lottie from "lottie-react";
import contactImg from "../../assets/contact.json"

const ContactUs = () => {
    return (
        <div className="mb-10">
      <h2 className="text-center font-bold text-3xl mt-10">Contact Us</h2>
      <div className="grid md:grid-cols-2">
        <div className="">
          <Lottie className="" animationData={contactImg} loop={true} />
        </div>
        <div className="mt-20">
          <form className="grid gap-5 text-center">
            <div>
              <input
                type="text"
                name="form_name"
                required
                placeholder="Enter Your Name"
                className="input input-bordered w-full max-w-md"
              />
            </div>
            <div>
              <input
                type="text"
                name="form_email"
                required
                placeholder="Enter Your Email"
                className="input input-bordered w-full max-w-md"
              />
            </div>
            <div>
              <textarea
                required
                name="message"
                placeholder="Enter Your Message"
                className="textarea textarea-bordered textarea-lg w-full max-w-md"
              ></textarea>
            </div>
            <div>
              <input className="btn btn-outline" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default ContactUs;