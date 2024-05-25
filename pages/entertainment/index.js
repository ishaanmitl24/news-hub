import LightMode from "@/components/LightMode";
import CustomPagination from "@/components/Pagination";

const Entertainement = (props) => {
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
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=a4a821b942a84281a39142d5f43f8bd3&category=entertainment&page=${page}`
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
    revalidate: 600,
  };
}
