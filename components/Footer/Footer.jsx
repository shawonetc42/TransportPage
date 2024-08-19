// components/Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className=" font-sans tracking-wide bg-black px-8 py-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
        <div>
          <a className="flex items-center text-white">
            <img src="/logo.png" alt="logo" className="w-10" />
            <p className="text-gray-300 text-base font-bold uppercase">
              {" "}
              Transport
            </p>
          </a>

          <ul className="mt-10 flex space-x-5">
            <li>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="fill-gray-300 hover:fill-white w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="fill-gray-300 hover:fill-white w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="fill-gray-300 hover:fill-white w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="fill-gray-300 hover:fill-white w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.85-4.49-.37.64-.58 1.38-.58 2.18 0 1.5.76 2.81 1.91 3.58-.71-.02-1.37-.21-1.96-.52v.05c0 2.1 1.5 3.85 3.47 4.24-.36.1-.73.16-1.12.16-.27 0-.53-.03-.79-.07.54 1.69 2.1 2.93 3.96 2.97-1.45 1.14-3.26 1.82-5.23 1.82-.34 0-.67-.02-1-.06 1.85 1.19 4.05 1.89 6.4 1.89 7.68 0 11.9-6.37 11.9-11.89 0-.18 0-.36-.01-.54.82-.59 1.54-1.32 2.11-2.15z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-300 text-base font-bold uppercase mb-6">
            Products
          </h4>
          <ul className="text-gray-500">
            <li className="mb-3">
              <a href="" className="hover:text-white">
                Books
              </a>
            </li>
            <li className="mb-3">
              <a href="" className="hover:text-white">
                Prints
              </a>
            </li>
            <li className="mb-3">
              <a href="" className="hover:text-white">
                Fonts
              </a>
            </li>
            <li className="mb-3">
              <a href="" className="hover:text-white">
                Themes
              </a>
            </li>
            <li className="mb-3">
              <a href="" className="hover:text-white">
                Icons
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-300 text-base font-bold uppercase mb-6">
            Company
          </h4>
          <ul className="text-gray-500">
            <li className="mb-3">
              <a href="" className="hover:text-white">
                About Us
              </a>
            </li>
            <li className="mb-3">
              <a href="" className="hover:text-white">
                Blog
              </a>
            </li>
            <li className="mb-3">
              <a href="" className="hover:text-white">
                Contact
              </a>
            </li>
            <li className="mb-3">
              <a href="" className="hover:text-white">
                Affiliate
              </a>
            </li>
            <li className="mb-3">
              <a href="" className="hover:text-white">
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-300 text-base font-bold uppercase mb-6">
            Legal
          </h4>
          <ul className="text-gray-500">
            <li className="mb-3">
              <a href="" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li className="mb-3">
              <a href="" className="hover:text-white">
                Terms of Service
              </a>
            </li>
            <li className="mb-3">
              <a href="" className="hover:text-white">
                Refund Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
