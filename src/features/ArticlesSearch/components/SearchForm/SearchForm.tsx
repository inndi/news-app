import { useForm } from 'react-hook-form';

import Button from '../../../../components/Button/Button';
import InputText from '../../../../components/InputText/InputText';
import { useDidMount } from '../../../../hooks/hooks';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { fetchArticles } from '../../../../redux/slices/articlesSlice';

import './SearchForm.scss';

interface SearchFormValue {
  keyword: string;
}

const SearchForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SearchFormValue>({ mode: 'onChange' });

  const keyword: string = useAppSelector((state) => state.articles.keyword);

  const dispatch = useAppDispatch();

  useDidMount(() => {
    setValue('keyword', keyword);
  });
  const onSubmit = (values: SearchFormValue): void => {
    dispatch(fetchArticles(values.keyword));
  };

  console.log('SearchForm Render');

  return (
    <form action="" className="search-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1 className="search-form__title">What's going on in the world?</h1>
      <p className="search-form__info">
        Find the latest news on any topic and save them in your personal account.
      </p>
      <div className="search-form__field-container">
        <div className="search-form__error-container">
          <span className="search-form__field-error">{errors.keyword?.message}</span>
        </div>
        <InputText
          type="search"
          register={register}
          name="keyword"
          validation={{ required: '❗Please enter a keyword' }}
          placeholder="Text not entered"
        />
        <div className="search-form__button">
          <Button isPrimary type="submit">
            Search
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
