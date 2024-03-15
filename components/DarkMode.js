import NewsTemplate from "./NewsTemplate";
import Link from "next/link";

const DarkMode = () => {
  return (
    <div className="px-6 pt-12 pb-12 space-y-7 bg-gray-950">
      <div className="flex justify-between">
        <h1 className="text-4xl text-white font-semibold ">
          Entertainment News
        </h1>
        <span className="self-center text-black bg-gray-100 px-2 py-1 rounded-xl hover:text-white hover:bg-gray-400">
          <Link href="/entertainment">see all</Link>
        </span>
      </div>
      <div className="flex space-x-4">
        <NewsTemplate mode='dark' />
        <NewsTemplate mode='dark' />
        <NewsTemplate mode='dark' />
        <NewsTemplate mode='dark' />
      </div>
    </div>
  );
};

export default DarkMode;
