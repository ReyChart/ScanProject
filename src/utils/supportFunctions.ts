import { articlesImg } from '@/data/constants';

export const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * articlesImg.length);
  return articlesImg[randomIndex];
};
