import LightMode from "@/components/LightMode";
import CustomPagination from "@/components/Pagination";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Technology = (props) => {
  const { data, page: pag, totalPages } = props;
  const router = useRouter();
  const [page, setPage] = useState(parseInt(pag));

  const pageHandler = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    router.push(`/technology?page=${page}`);
  }, [page]);

  return (
    <div>
      <LightMode
        mode="light"
        category="Technology"
        link="technology"
        head="Technology"
        data={props.data}
      />
      <CustomPagination pageHandler={pageHandler} totalPages={totalPages} />
    </div>
  );
};

export default Technology;

export async function getServerSideProps({ query }) {
  const page = parseInt(query.page) ? parseInt(query.page) : 1;
  const technology = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=a4a821b942a84281a39142d5f43f8bd3&category=technology&page=${page}`
  );
  const technologyResult = await technology.json();
  const technologyFilteredData = technologyResult.articles.filter(
    (data) => data.description !== null && data.urlToImage !== null
  );
  return {
    props: {
      data: technologyFilteredData,
      page: page,
      totalPages: technologyResult.totalResults,
    }
  };
}
