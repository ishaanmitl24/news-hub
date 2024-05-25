import LightMode from "@/components/LightMode";
import CustomPagination from "@/components/Pagination";

const Sports = (props) => {
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

export async function getStaticProps() {
  const page = parseInt(query.page) ? parseInt(query.page) : 1;
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
    revalidate: 600,
  };
}
