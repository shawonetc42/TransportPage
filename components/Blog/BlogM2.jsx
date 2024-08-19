import Image from "next/image";

const TransportBlog = () => {
  return (
    <section id="blog" className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-6 py-10 mx-auto">
        <div className="lg:flex lg:-mx-6">
          <div className="lg:w-3/4 lg:px-6">
            <Image
              className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
              src="/blog.jpg" // Replace with your transportation-related image
              alt="Transportation"
              width={1470}
              height={784}
            />

            <div>
              <p className="mt-6 text-sm text-blue-500 uppercase">
                Explore Insights
              </p>

              <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                What You Need to Know About Modern Transportation
              </h1>

              <div className="flex items-center mt-6">
                <Image
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src="/Avatar/a1.jpg"
                  alt="John Doe" // Replace with relevant author image
                  width={40}
                  height={40}
                />

                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">
                    John Doe
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Transportation Expert
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
            <div>
              <h3 className="text-blue-500 capitalize">
                Transport Innovations
              </h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400"
              >
                How Electric Vehicles are Changing the Future of Transport
              </a>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-blue-500 capitalize">Sustainable Mobility</h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400"
              >
                Why Sustainable Transportation is the Key to a Greener Future
              </a>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-blue-500 capitalize">Future Trends</h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400"
              >
                Top 5 Trends Shaping the Future of Urban Transportation
              </a>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-blue-500 capitalize">Tech and Transport</h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400"
              >
                How Technology is Transforming Public Transportation Systems
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportBlog;
