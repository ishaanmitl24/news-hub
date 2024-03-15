import NewsTemplate from "./NewsTemplate";
import Link from "next/link";
import { useRouter } from "next/router";

const LightMode = (props) => {
  const router = useRouter();
  return (
    <div className={`px-6 pt-9 pb-6 mb-4 space-y-7 ${props.mode==='dark'?'bg-gray-950':''}`}>
      <div className="flex justify-between">
        <h1 className={`text-4xl ${props.mode==='dark'?'text-white':'text-gray-950'} font-semibold`}>{props.head}</h1>

        {router.pathname==='/' && <span className="self-center text-white bg-gray-950 px-2 py-1 rounded-xl hover:bg-gray-800">
          <Link href={`/${props.link}`}>see all</Link>
        </span>}
      </div>
      <div className={`flex gap-2 ${router.pathname !== '/' ? 'flex-wrap justify-between space-y-2':''}`}>
        {props.data.map((item) => (
          <NewsTemplate link={props.link} key={Math.random().toLocaleString()} mode={props.mode} category={props.category} item={item}/>
        ))}
      </div>
    </div>
  );
};

export default LightMode;
