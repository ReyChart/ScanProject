import { FunctionComponent } from 'react';
import DocumentCard from './DocumentCard/DocumentCard';

import styles from './ResultDocuments.module.scss';

const ResultDocuments: FunctionComponent = () => {
  return (
    <section className={styles.resultDocuments}>
      <h2 className={styles.heading}>Список документов</h2>
      <div className={styles.documentsWrapper}>
        <DocumentCard />
        <DocumentCard />
        <DocumentCard />
        <DocumentCard />
      </div>
      <button className={styles.btnLoadMore}>Показать больше</button>
    </section>
  );
};

export default ResultDocuments;
