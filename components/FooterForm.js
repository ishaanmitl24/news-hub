const FooterForm = () => {
  return (
    <form className="flex flex-col space-y-3">
      <div className="text-white text-xl">
        <h1>Subscribe for our newsletter</h1>
      </div>
      <div className="flex space-x-3">
        <div className="border pl-4 pr-2 py-2 rounded-3xl border-gray-300">
          <input
            type="email"
            className="bg-transparent text-sm min-w-[200px] text-white outline-none border-none"
            placeholder="Enter you email here..."
          />
        </div>
        <div className="self-center">
          <button className="bg-white px-3 hover:bg-gray-400 hover:text-white py-1.5 font-semibold text-sm rounded-lg">
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default FooterForm;
