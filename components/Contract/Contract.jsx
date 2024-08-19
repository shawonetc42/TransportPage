// components/ContactForm.js
import React from "react";

const ContactForm = () => {
  return (
    <div
      id="contact"
      className=" mx-auto px-3 font-[sans-serif] w-full bg-gray-100 mt-2"
    >
      <div className="grid sm:grid-cols-2  items-start gap-16 p-4 container max-w-screen-xl  mx-auto px-3  font-[sans-serif]">
        <div>
          <h1 className="text-gray-800 text-3xl font-extrabold">
            Let&apos;s Talk
          </h1>

          <p className="text-sm text-gray-500 mt-4">
            Have some big idea or brand to develop and need help? Then reach
            out—we&apos;d love to hear about your project and provide help.
          </p>

          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold">Email</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 479.058 479.058"
                  >
                    <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                  </svg>
                </div>
                <a
                  href="mailto:info@example.com"
                  className="text-[#007bff] text-sm ml-4"
                >
                  <small className="block">Mail</small>
                  <strong>info@example.com</strong>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold">Socials</h2>
            <ul className="flex mt-4 space-x-4">
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="https://facebook.com" aria-label="Facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z" />
                  </svg>
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="https://twitter.com" aria-label="Twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 511 512"
                  >
                    <path d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.29 0 113.835 51.542 113.835 115.031v279.922c0 8.285-6.719 15-15 15z" />
                  </svg>
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 1.5C0 .671.671 0 1.5 0h21c.829 0 1.5.671 1.5 1.5v21c0 .829-.671 1.5-1.5 1.5h-21c-.829 0-1.5-.671-1.5-1.5v-21zm9.702 17.177v-9.867H7.58v9.867h2.122zm-1.063-11.2c-.682 0-1.235.553-1.235 1.235s.553 1.234 1.235 1.234c.682 0 1.235-.553 1.235-1.234s-.553-1.235-1.235-1.235zm6.86 11.2v-5.006c0-2.798-1.594-4.118-3.732-4.118-1.764 0-2.582.986-3.022 1.678v-.013h-.028v-1.377h-2.12v5.588h2.12v-2.787c0-1.486.555-2.506 1.731-2.506 1.049 0 1.668.738 1.668 2.014v3.279h2.12zm-7.307-10.008v-2.9h1.568v2.9h-1.568zm-5.455-1.208v4.337h1.593v-2.68c0-2.02-1.026-3.146-2.794-3.146-1.546 0-2.653.962-3.182 1.586v-1.618H.002v5.406h1.592v-2.798c0-1.242.597-2.01 1.741-2.01 1.124 0 1.799.72 1.799 1.932z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <form className="w-full flex flex-col">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-800 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007bff]"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-800 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007bff]"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-800 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007bff]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#007bff] text-white py-2 px-4 rounded-md hover:bg-[#0056b3] focus:outline-none focus:ring-2 focus:ring-[#0056b3]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
