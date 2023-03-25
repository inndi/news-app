import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

import Button from '../../../../components/Button/Button';
import InputText from '../../../../components/InputText/InputText';
import { useDidMount } from '../../../../hooks/hooks';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { articlesSelectors, fetchArticles } from '../../../../redux/slices/articlesSlice';

import './SearchForm.scss';

interface SearchFormValue {
  keyword: string;
}

//TODO: + FOR THE LAST STAGE cancel request if component was unmount
//  +handle images (listen load, failed statuses)

//  + Allow to save up to 100 articles (backend)
//  + Do not allow duplicates (backend)

const SearchForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SearchFormValue>({ mode: 'onChange' });
  const dispatch = useAppDispatch();
  const keyword: string = useAppSelector((state) => state.articles.keyword);

  useDidMount(() => {
    //REVIEW: + keep keyword value in search field
    setValue('keyword', keyword);
  });
  const promise: any = useRef();
  const onSubmit = (values: SearchFormValue): void => {
    promise.current?.abort();
    promise.current = dispatch(fetchArticles(values.keyword));
  };

  console.log('SearchForm Render');

  return (
    <form className="search-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1 className="search-form__title">What's going on in the world?</h1>
      <p className="search-form__info">
        Find the latest news on any topic and save them in your personal account.
      </p>
      <div className="search-form__field-container">
        <div className="search-form__error-container">
          <span className="search-form__field-error">{errors.keyword?.message}</span>
        </div>
        <InputText
          type="text"
          register={register}
          name="keyword"
          validation={{ required: '❗Please enter a keyword' }}
          placeholder="Text not entered"
        />
        <div className="search-form__button">
          <Button isPrimary={true} type="submit">
            Search
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
