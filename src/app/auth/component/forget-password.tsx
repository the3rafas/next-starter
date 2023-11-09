export default function ForgetPasswordComponent() {
  return (
    <div className="w-1/3 h-64 bg-slate-50 rounded-md flex items-center justify-center flex-col py-4 ">
      <div className=" w-3/4 py-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div className=" w-3/4 ">
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-cyan-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Send otp
        </button>
      </div>
    </div>
  );
}
