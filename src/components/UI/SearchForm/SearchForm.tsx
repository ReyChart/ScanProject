import { FunctionComponent } from 'react';
import { PatternFormat } from 'react-number-format';
import DatePicker from 'react-datepicker';
import { validateInn } from '@/utils/validateFunctions';

import styles from './SearchForm.module.scss';

const SearchForm: FunctionComponent = () => {
  return (
    <form className={styles.form}>
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <label htmlFor="inn" className={styles.label}>
            ИНН компании <span>*</span>
          </label>
          <PatternFormat
            className={styles.input}
            format="## ### ### ##"
            type="text"
            name="inn"
            id="inn"
            placeholder="10 цифр"
            required
          />
          <span className={styles.errorMsg}></span>
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="tonality" className={styles.label}>
            Тональность
          </label>
          <select className={`${styles.input} ${styles.select}`} name="tonality" id="tonality">
            <option value="any">Любая</option>
            <option value="negative">Негативная</option>
            <option value="positive">Положительная</option>
          </select>
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="documents" className={styles.label}>
            Количество документов в выдаче <span>*</span>
          </label>
          <input
            className={styles.input}
            type="text"
            name="documents"
            id="documents"
            placeholder="от 1 до 100"
          />
          <span className={styles.errorMsg}></span>
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="date" className={styles.label}>
            Диапозон поиска <span>*</span>
          </label>
          <div className={styles.datePickerWrapper}>
            <DatePicker
              className={styles.datePicker}
              name="startDate"
              dateFormat="yyyy-MM-dd"
              placeholderText="Дата начала"
            />
            <DatePicker
              className={styles.datePicker}
              name="endDate"
              dateFormat="yyyy-MM-dd"
              placeholderText="Дата конца"
            />
          </div>
          <span className={styles.errorMsg}></span>
        </div>
      </div>
      <div className={styles.checkboxContainer}>
        <ul className={styles.checkboxList}>
          <li className={styles.checkboxItem}>
            <input className={styles.checkbox} type="checkbox" name="fullness" id="fullness" />
            <label htmlFor="fullness" className={styles.label}>
              Признак максимальной полноты
            </label>
          </li>
          <li className={styles.checkboxItem}>
            <input className={styles.checkbox} type="checkbox" name="context" id="context" />
            <label htmlFor="context" className={styles.label}>
              Упоминания в бизнес-контексте
            </label>
          </li>
          <li className={styles.checkboxItem}>
            <input className={styles.checkbox} type="checkbox" name="role" id="role" />
            <label htmlFor="role" className={styles.label}>
              Главная роль в публикации
            </label>
          </li>
          <li className={styles.checkboxItem}>
            <input
              className={styles.checkbox}
              type="checkbox"
              name="riskFactors"
              id="riskFactors"
            />
            <label htmlFor="riskFactors" className={styles.label}>
              Публикации только с риск-факторами
            </label>
          </li>
          <li className={styles.checkboxItem}>
            <input className={styles.checkbox} type="checkbox" name="techNews" id="techNews" />
            <label htmlFor="techNews" className={styles.label}>
              Включать технические новости рынков
            </label>
          </li>
          <li className={styles.checkboxItem}>
            <input className={styles.checkbox} type="checkbox" name="announces" id="announces" />
            <label htmlFor="announces" className={styles.label}>
              Включать анонсы и календари
            </label>
          </li>
          <li className={styles.checkboxItem}>
            <input
              className={styles.checkbox}
              type="checkbox"
              name="summaryNews"
              id="summaryNews"
            />
            <label htmlFor="summaryNews" className={styles.label}>
              Включать сводки новостей
            </label>
          </li>
        </ul>
        <div className={styles.btnWrapper}>
          <button className={styles.submitBtn} type="submit">
            Поиск
          </button>
          <span className={styles.requiredFields}>* Обязательные к заполнению поля</span>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
