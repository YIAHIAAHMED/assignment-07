const SignIn = () => {
  return (
    <div className="min-h-[650px] flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">

        <div className="text-center mb-8">

          <h1 className="text-3xl font-semibold text-[#1F2937]">
            Welcome back
          </h1>

          <p className="text-[#64748B] mt-2">
            Sign in to manage your relationships.
          </p>

        </div>

        <form className="space-y-5">

          <div>

            <label className="text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-2 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#244D3F]"
            />

          </div>

          <div>

            <label className="text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-2 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#244D3F]"
            />

          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#244D3F] text-white font-medium hover:bg-[#1d3f34] transition"
          >
            Sign In
          </button>

        </form>

      </div>

    </div>
  );
};

export default SignIn;