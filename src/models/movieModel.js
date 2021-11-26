import { RANDOM_IMAGE_LG } from "lib/global";

export const defaultMovie = {
  image: RANDOM_IMAGE_LG,
  title: "Very Very Funny film",
  description:
    "this is a Very Funny film this is a Very Funny film this is a Very Funny film this is a Very Funny film this is a Very Funny film this is a Very Funny film this is a Very Funny film this is a Very Funny film this is a Very Funny film this is a Very Funny film this is a Very Funny film this is a Very Funny film ",
};
export const defaultMovies = Array.from({ length: 100 }, () => defaultMovie);

export const getMovies = ({ onFinish = () => {} }) => {
  setTimeout(() => {
    onFinish(defaultMovies);
  }, 3000);
};
