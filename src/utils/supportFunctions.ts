import { articlesImg } from '@/data/constants';

export const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * articlesImg.length);
  return articlesImg[randomIndex];
};

export const getAccessToken = (): string | null => {
  const tokenData = localStorage.getItem('tokenData');
  if (tokenData) {
    const { accessToken } = JSON.parse(tokenData);
    return accessToken;
  }
  return null;
};
