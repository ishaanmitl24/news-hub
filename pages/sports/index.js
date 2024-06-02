import LightMode from "@/components/LightMode";
import CustomPagination from "@/components/Pagination";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Sports = (props) => {
  const { data, page: pag, totalPages } = props;
  const router = useRouter();
  const [page, setPage] = useState(pag);

  const pageHandler = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    router.push(`/sports?page=${page}`);
  }, [page]);

  return (
    <div>
      <LightMode
        mode="light"
        category="Sports"
        link="sports"
        head="Sports"
        data={props.data}
      />
      <CustomPagination pageHandler={pageHandler} totalPages={totalPages} />
    </div>
  );
};

export default Sports;

export async function getServerSideProps({ query }) {
  console.log(query);
  const page = query.page ? +query.page : 1;
  console.log(page);
  const sports = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=a4a821b942a84281a39142d5f43f8bd3&category=sports&page=${page}`
  );
  const sportsResult = await sports.json();
  const sportsFilteredData = sportsResult.articles.filter(
    (data) => data.description != null && data.urlToImage != null
  );
  return {
    props: {
      data: sportsFilteredData,
      page: page,
      totalPages: sportsResult.totalResults,
    },
  };
}
