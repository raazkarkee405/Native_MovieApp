import {upcomingMovies, nowPlayingMovies, popularMovies} from './apicalls';
export const FetchMovies = async (type: string) => {
  try {
    let response =
      type === 'upcoming'
        ? await fetch(upcomingMovies)
        : type === 'nowPlaying'
        ? await fetch(nowPlayingMovies)
        : await fetch(popularMovies);
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(`Something went wrong in ${type} Movies List`, error);
  }
};
