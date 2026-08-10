import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    formData.append(
      "access_key",
      "7f9627cc-da19-4c20-8d25-e6daecd56440"
    );

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        }
      );

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully! 🚀");
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Unable to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#090A18] text-white flex items-center px-6 py-10"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-10 items-center">

        {/* ================= LEFT ================= */}

        <div>

          <p className="uppercase tracking-[4px] text-pink-500 font-semibold text-sm">
            Get In Touch
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Contact{" "}
            <span className="text-pink-500">
              Me
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-lg leading-7">
            Let's build something amazing together. Feel free to
            contact me anytime.
          </p>

          {/* EMAIL */}

          <a
            href="mailto:vijaysinghdu8383@gmail.com"
            className="
              flex
              items-center
              gap-5
              mt-10
              p-5
              rounded-2xl
              bg-[#191728]
              border
              border-pink-500/30
              hover:border-pink-500
              hover:shadow-[0_0_25px_rgba(236,72,153,0.20)]
              transition
              duration-300
            "
          >
            <div className="w-14 h-14 rounded-xl bg-pink-500/10 flex items-center justify-center">
              <FaEnvelope className="text-pink-500 text-xl" />
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Email
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                vijaysinghdu8383@gmail.com
              </p>
            </div>
          </a>

          {/* PHONE */}

          <a
            href="tel:+918383828419"
            className="
              flex
              items-center
              gap-5
              mt-4
              p-5
              rounded-2xl
              bg-[#191728]
              border
              border-pink-500/30
              hover:border-pink-500
              hover:shadow-[0_0_25px_rgba(236,72,153,0.20)]
              transition
              duration-300
            "
          >
            <div className="w-14 h-14 rounded-xl bg-pink-500/10 flex items-center justify-center">
              <FaPhoneAlt className="text-pink-500 text-xl" />
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Phone
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                +91 83838 28419
              </p>
            </div>
          </a>

          {/* GITHUB */}

          <a
            href="https://github.com/vijaysinghvu8383-bit"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-5
              mt-4
              p-5
              rounded-2xl
              bg-[#191728]
              border
              border-pink-500/30
              hover:border-pink-500
              hover:shadow-[0_0_25px_rgba(236,72,153,0.20)]
              transition
              duration-300
            "
          >
            <div className="w-14 h-14 rounded-xl bg-pink-500/10 flex items-center justify-center">
              <FaGithub className="text-pink-500 text-xl" />
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                GitHub
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                github.com/vijaysinghvu8383-bit
              </p>
            </div>
          </a>

        </div>


        {/* ================= RIGHT ================= */}

        <div
          className="
            bg-[#151523]
            border
            border-pink-500/30
            rounded-2xl
            p-7
            shadow-[0_0_40px_rgba(236,72,153,0.10)]
          "
        >

          {/* FORM HEADER */}

          <div className="flex items-center gap-4 mb-7">

            <div className="w-14 h-14 rounded-xl bg-pink-500/10 flex items-center justify-center">
              <FaPaperPlane className="text-pink-500 text-xl" />
            </div>

            <div>

              <h3 className="text-2xl font-bold">
                Send Message
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                I'll reply as soon as possible.
              </p>

            </div>

          </div>


          {/* ================= FORM ================= */}

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* NAME */}

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="
                w-full
                h-14
                rounded-xl
                border
                border-pink-500/30
                bg-transparent
                px-5
                text-white
                placeholder-gray-500
                outline-none
                focus:border-pink-500
                transition
              "
            />


            {/* EMAIL */}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="
                w-full
                h-14
                rounded-xl
                border
                border-pink-500/30
                bg-transparent
                px-5
                text-white
                placeholder-gray-500
                outline-none
                focus:border-pink-500
                transition
              "
            />


            {/* SUBJECT */}

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="
                w-full
                h-14
                rounded-xl
                border
                border-pink-500/30
                bg-transparent
                px-5
                text-white
                placeholder-gray-500
                outline-none
                focus:border-pink-500
                transition
              "
            />


            {/* MESSAGE */}

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="
                w-full
                rounded-xl
                border
                border-pink-500/30
                bg-transparent
                px-5
                py-4
                text-white
                placeholder-gray-500
                outline-none
                resize-none
                focus:border-pink-500
                transition
              "
            />


            {/* SEND BUTTON */}

            <button
              type="submit"
              className="
                w-full
                h-14
                rounded-xl
                bg-gradient-to-r
                from-pink-600
                to-pink-500
                text-white
                font-semibold
                hover:scale-[1.02]
                hover:shadow-[0_0_30px_rgba(236,72,153,0.35)]
                transition
                duration-300
              "
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;