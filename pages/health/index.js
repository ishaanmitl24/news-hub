import LightMode from "@/components/LightMode";
import CustomPagination from "@/components/Pagination";

const Health = (props) => {
  const { data, page: pag, totalPages } = props;
  const router = useRouter();
  const [page, setPage] = useState(parseInt(pag));

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
        category="Health"
        link="health"
        head="Health"
        data={props.data}
      />
      <CustomPagination pageHandler={pageHandler} totalPages={totalPages} />
    </div>
  );
};

export default Health;

export async function getServerSideProps({ query }) {
  const page = parseInt(query.page) ? parseInt(query.page) : 1;
  const health = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=a4a821b942a84281a39142d5f43f8bd3&category=health&page=${page}`
  );
  const healthResult = await health.json();
  const healthFilteredData = healthResult.articles.filter(
    (data) => data.description != null && data.urlToImage != null
  );
  return {
    props: {
      data: healthFilteredData,
      page: page,
      totalPages: healthResult.totalResults,
    },
    revalidate: 600,
  };
}
