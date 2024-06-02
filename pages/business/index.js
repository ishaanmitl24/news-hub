import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LightMode from "@/components/LightMode";
import CustomPagination from "@/components/Pagination";

const Business = (props) => {
  const { data, page: pag, totalPages } = props;
  const router = useRouter();
  const [page, setPage] = useState(pag);

  
  const pageHandler = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    router.push(`/business?page=${page}`);
  }, [page]);

  return (
    <div>
      <LightMode
        mode="light"
        category="Bussiness"
        link="business"
        head="Business"
        data={data}
      />

      <CustomPagination
        pageHandler={pageHandler}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Business;

export async function getServerSideProps({ query }) {
  const page = query.page ? +query.page : 1;

  const business = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=24f5f0e4a8a343f38256b7705dfdb01f&category=business&page=${page}`
  );
  const businessResult = await business.json();
  const businessFilteredData = businessResult.articles.filter(
    (data) => data.description != null
  );
  return {
    props: {
      data: businessFilteredData,
      page: page,
      totalPages: businessResult.totalResults,
    },
  };
}
