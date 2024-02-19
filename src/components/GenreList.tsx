import useData from '../hooks/useData';
import useGenres from '../hooks/useGenres';

const GenreList = () => {
  const { data, loading } = useGenres();
  return (
   <>
   {loading && <div>Loading...</div>}
   {data.map((genre) => (
    <div key={genre.id}>{genre.name}</div>
   ))}
   </>
  )
}

export default GenreList