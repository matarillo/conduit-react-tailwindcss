const AuthPage = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <h1 className="text-4xl font-bold text-center mb-2">
            Sign up
          </h1>
          <p className="text-center mb-8">
            <a href="#" className="text-green-600 hover:text-green-700 hover:underline">
              Have an account?
            </a>
          </p>

          {/* Error Messages (Commented out) */}
          {/* <ul className="bg-red-50 text-red-600 rounded-lg px-4 py-3 mb-6">
            <li>That email is already taken</li>
          </ul> */}

          {/* Form */}
          <form>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-green-500 text-white rounded-lg text-lg hover:bg-green-600 transition-colors"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;