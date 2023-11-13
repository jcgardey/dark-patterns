import { useTranslation } from 'react-i18next';
import { questions } from './questions';
import { useForm } from 'react-hook-form';

const Question = ({ title, name, register }) => {
  const { t } = useTranslation();
  return (
    <div className="my-8 flex justify-between">
      <p>{t(title)}</p>
      <div className="flex w-1/2">
        {[1, 2, 3, 4, 5].map((value) => (
          <input
            key={value}
            className="w-1/5"
            type="radio"
            {...register(name, { required: true })}
            value={value}
          />
        ))}
      </div>
    </div>
  );
};

export const Questionnaire = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="m-2">
      <h2 className="text-center text-2xl font-medium">
        {t('Questionnaire.Title')}
      </h2>
      <p className="my-2 text-lg text-center">
        {t('Questionnaire.Description')}
      </p>
      <div className="my-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-end my-4">
            <div className="flex w-1/2 justify-between">
              <p className="w-1/5 text-center">{t('Questionnaire.Disagree')}</p>
              <p className="w-1/5 text-center">{t('Questionnaire.Agree')}</p>
            </div>
          </div>
          {questions.map((q) => (
            <Question
              key={q.title}
              title={q.title}
              name={q.name}
              register={register}
            />
          ))}
          <div className="my-4">
            <button
              className="bg-sky-600 hover:bg-sky-700 rounded text-white text-lg p-2 w-1/5 mx-auto"
              type="submit"
            >
              {t('Questionnaire.Finish')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
