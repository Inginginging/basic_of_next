import Seo from "../components/Seo";

export default function Home({ results }) {
  //server에서 미리 data를 받고 page에 랜더링하기 때문에 front에선 laoding을 보여줄 필요가 없음
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

//server에서 미리 data를 fetch 받아서 front의 page props로 넘겨주는 함수. 함수 이름은 무조건 getServerSideProps여야함.
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  //항상 객체를 return하고 props key를 가짐
  return {
    props: {
      results,
    },
  };
}
