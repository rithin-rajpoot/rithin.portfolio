import React from "react";

const NewsLetter = () => {
  return (
    <section className="max-w-7xl mx-auto bg-white/70 dark:bg-gray-800/30 backdrop-blur-xs rounded-2xl mb-12 shadow-xl border border-gray-200/30 dark:border-gray-700/30 animate-slide-up">
      <div className="p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Subscribe to My NewsLetter
              </h2>
              <p className="text-gray-600 dark:text-gray-300 md:w-2/3">
                Get the latest updates on my projects, blog posts, and tech
                insights delivered straight to your inbox
              </p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border rounded-lg dark:text-white border-gray-300 dark:border-gray-600 bg-white text-gray-500 dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors hover:via-purple-700 hover:to-blue-900 duration-300 shadow-xl backdrop-blur-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
