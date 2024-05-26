import LightMode from "@/components/LightMode";
import { useRouter } from "next/navigation";
import CustomPagination from "@/components/Pagination";
import { useState,useEffect } from "react";
import ProtectedRoute from "@/components/protected-component";

const Entertainement = (props) => {
  const { data, page: pag, totalPages } = props;
  const router = useRouter();
  const [page, setPage] = useState(parseInt(pag));

  const pageHandler = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    router.push(`/entertainment?page=${page}`);
  }, [page]);

  return (
    <div>
      <LightMode
        mode="light"
        category="Entertainment"
        link="entertainment"
        head="Entertainment"
        data={props.data}
      />
      <CustomPagination pageHandler={pageHandler} totalPages={totalPages} />
    </div>
  );
};


export default Entertainement;

export async function getServerSideProps({ query }) {
  const page = parseInt(query.page) ? parseInt(query.page) : 1;
  const entertainment = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=24f5f0e4a8a343f38256b7705dfdb01f&category=entertainment&page=${page}`
  );
  const entertainmentResult = await entertainment.json();
  const entertainmentFilteredData = entertainmentResult.articles.filter(
    (data) => data.description != null && data.urlToImage != null
  );
  return {
    props: {
      data: entertainmentFilteredData,
      page: page,
      totalPages: entertainmentResult.totalResults,
    },
  
  };
}
