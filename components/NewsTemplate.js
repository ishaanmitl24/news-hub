import { useRouter } from "next/router";
import { Box } from "@mui/material";
import Link from "next/link";

const NewsTemplate = (props) => {
  const router = useRouter();
  return (
    <Link
      href={`/${props.link}/${props.item.title}`}
      key={props.key}
      className={`flex flex-col ease-in-out duration-500  hover:scale-[1.04] cursor-pointer ${
        router.pathname !== "/" ? "w-[24%]" : "w-1/4"
      }`}
    >
      <div>
        {props.item.urlToImage === null && (
          <Box
            className="bg-gray-900"
            sx={{
              width: "100%",
              height: "150px",
              borderRadius: "8px",
              color: "white",
              fontSize: "18px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
            }}
          >
            No preview available
          </Box>
        )}
        {props.item.urlToImage !== null && (
          <img
            className="rounded-md h-[150px] w-full"
            src={props.item.urlToImage}
            alt={props.item.title}
          />
        )}
      </div>
      <div className="space-y-2">
        <div
          className={`line-clamp-2 text-lg  font-semibold ${
            props.mode === "dark" ? "text-gray-300" : "text-gray-900"
          }`}
        >
          {props.item.title}
        </div>
        <div
          className={`line-clamp-2 text-sm  ${
            props.mode === "dark" ? "text-gray-500" : "text-[#3d3d3d]"
          }`}
        >
          {props.item.description}
        </div>
        <div
          className={`flex space-x-3 ${
            props.mode === "dark" ? "text-gray-500" : "text-[#3d3d3d]"
          }`}
        >
          <span className="text-sm">{props.category}</span>
          <span className="border-l border-gray-950 h-3 self-center"></span>
          <span className="text-sm">3min+ read</span>
        </div>
      </div>
    </Link>
  );
};

export default NewsTemplate;
