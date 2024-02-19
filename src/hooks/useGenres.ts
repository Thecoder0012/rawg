import useData from "./useData";

export interface GenreResponse {
    results: Genre[];
  }

export interface Genre {
  id: number;
  name: string;
}

const useGenres = () => {
return useData<Genre>("genres")
};

export default useGenres;
