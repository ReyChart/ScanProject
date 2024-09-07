import { FunctionComponent, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Loader from '@/components/UI/Loader/Loader';
import DocumentCard from './DocumentCard/DocumentCard';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { resetData, fetchDocumentsIds, fetchArticles } from '@/redux/dataSlice';

import styles from './ResultDocuments.module.scss';

const ResultDocuments: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const { overviewIsLoading, idsAreLoading, articlesAreLoading } = useAppSelector(
    (state) => state.data
  );
  const iDsList = useAppSelector((state) => state.data.ids);
  const articles = useAppSelector((state) => state.data.articles);
  const { data } = location.state;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isButtonDisplayed, setIsButtonDisplayed] = useState<boolean>(true);

  const handleLoadMore = () => {
    if (articlesAreLoading) return;

    const updatedIndex = currentIndex + 10;
    const updatedList = iDsList.slice(currentIndex, updatedIndex);

    if (updatedList.length === 0) {
      setIsButtonDisplayed(false);
      return;
    }

    dispatch(fetchArticles({ ids: updatedList }));
    setCurrentIndex(updatedIndex);

    if (updatedList.length < 10) setIsButtonDisplayed(false);
  };

  useEffect(() => {
    dispatch(resetData());
    dispatch(fetchDocumentsIds(data))
      .unwrap()
      .catch((error) => {
        console.error('Ошибка получения данных: ', error);
      });
  }, [dispatch, data]);

  useEffect(() => {
    if (!idsAreLoading && !overviewIsLoading && iDsList.length > 0) {
      if (iDsList.length <= 10) {
        dispatch(fetchArticles({ ids: iDsList }));
        setIsButtonDisplayed(false);
      }
      if (iDsList.length > 10) {
        dispatch(fetchArticles({ ids: iDsList.slice(0, 10) }));
        setCurrentIndex(10);
      }
    }
  }, [dispatch, iDsList, idsAreLoading, overviewIsLoading]);

  return (
    <section className={styles.resultDocuments}>
      <h2 className={styles.heading}>Список документов</h2>
      <div className={styles.documentsWrapper}>
        {articles.map((article, index) => (
          <DocumentCard key={index} data={article} />
        ))}
      </div>
      {articlesAreLoading && <Loader isBig={true} />}
      {isButtonDisplayed && !articlesAreLoading && (
        <button className={styles.btnLoadMore} onClick={handleLoadMore}>
          Показать больше
        </button>
      )}
    </section>
  );
};

export default ResultDocuments;
