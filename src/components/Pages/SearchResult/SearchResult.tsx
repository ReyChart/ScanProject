import { FunctionComponent } from 'react';
import Layout from '../../Layout/Layout';
import ResultSlider from '@/components/UI/ResultSlider/ResultSlider';
import ResultDocuments from './ResultDocuments/ResultDocuments';

import styles from './SearchResult.module.scss';

const SearchResult: FunctionComponent = () => {
  return (
    <Layout>
      <div className="container">
        <section className={styles.resultWelcome}>
          <div className={styles.headingContainer}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>Ищем. Скоро будут результаты</h1>
              <p className={styles.text}>
                Поиск может занять некоторое время, просим сохранять терпение.
              </p>
            </div>
            <img
              src="./searchResultImg.svg"
              alt="The girl with the magnifying glass and the target"
              className={styles.img}
            />
          </div>
        </section>
        <ResultSlider />
        <ResultDocuments />
      </div>
    </Layout>
  );
};

export default SearchResult;
