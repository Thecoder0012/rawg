import useGenres from '../hooks/useGenres';

const GenreList = () => {

    const {genres, loading} = useGenres();
  return (
   <>
   {loading && <div>Loading...</div>}
   {genres.map((genre) => (
    <p>{genre.name}</p>
   ))}
   </>
  )
}

export default GenreList