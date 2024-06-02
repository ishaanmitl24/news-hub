import LightMode from "@/components/LightMode";
import CustomPagination from "@/components/Pagination";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


const Science = (props) => {
  const { data, page: pag, totalPages } = props;
  const router = useRouter();
  const [page, setPage] = useState(parseInt(pag));

  const pageHandler = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    router.push(`/science?page=${page}`);
  }, [page]);

  return (
    <div>
      <LightMode
        mode="light"
        category="Science"
        link="science"
        head="Science"
        data={props.data}
      />
      <CustomPagination pageHandler={pageHandler} totalPages={totalPages} />
    </div>
  );
};

export default Science;

export async function getServerSideProps({ query }) {
  const page = parseInt(query.page) ? parseInt(query.page) : 1;
  const science = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=a4a821b942a84281a39142d5f43f8bd3&category=science&page=${page}`
  );
  const scienceResult = await science.json();
  const scienceFilteredData = scienceResult.articles.filter(
    (data) => data.description != null && data.urlToImage != null
  );

  return {
    props: {
      data: scienceFilteredData,
      page: page,
      totalPages: scienceResult.totalResults,
    }
  };
}
