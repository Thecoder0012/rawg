import useData from '../hooks/useData';
import useGenres, { Genre } from '../hooks/useGenres';

const GenreList = () => {

    const {data: genres, loading,error} = useData<Genre>("genres");
  return (
   <>
   {loading && <div>Loading...</div>}
   {genres.map((genre) => (
    <div key={genre.id}>{genre.name}</div>
   ))}
   </>
  )
}

export default GenreList