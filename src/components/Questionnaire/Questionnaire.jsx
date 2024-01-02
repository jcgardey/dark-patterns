import { useTranslation } from "react-i18next";
import { questions } from "./questions";
import { useForm } from "react-hook-form";
import ReactSlider from "react-slider";
import { useState } from "react";

const Question = ({ title, name, value, onChange }) => {
  const { t } = useTranslation();
  return (
    <div className="my-8 flex justify-between">
      <p>{t(title)}</p>
      <div className="flex w-1/2">
        <ReactSlider
          value={value}
          onChange={onChange}
          className="w-full"
          thumbClassName="h-7 w-7 rounded-2xl bg-sky-700"
          trackClassName="h-7 bg-gray-200"
          renderThumb={(props, state) => <div {...props}></div>}
        />
      </div>
    </div>
  );
};

export const Questionnaire = ({ onFinish }) => {
  const { t } = useTranslation();
  const [responses, setResponses] = useState(
    questions.reduce((acc, q) => {
      acc[q.name] = 50;
      return acc;
    }, {})
  );

  const [error, setError] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    const notChanged =
      Object.keys(responses).filter((key) => responses[key] !== 50).length == 0;
    setError(notChanged);
    if (!notChanged) {
      console.log("send data");
      onFinish(responses);
    }
  };

  return (
    <div className="m-2">
      <h2 className="text-center text-2xl font-medium">
        {t("Questionnaire.Title")}
      </h2>
      <p className="my-4 text-lg text-center">
        {t("Questionnaire.Description")}
      </p>
      {error && (
        <p className="text-lg text-center font-bold text-red-700">
          {t("Questionnaire.MandatoryResponses")}
        </p>
      )}
      <div className="my-8">
        <form onSubmit={onSubmit}>
          <div className="flex justify-end my-4">
            <div className="flex w-1/2 justify-between">
              <p className="w-1/4 text-center">{t("Questionnaire.Disagree")}</p>
              <p className="w-1/5 text-center">{t("Questionnaire.Agree")}</p>
            </div>
          </div>
          {questions.map((q) => (
            <Question
              key={q.title}
              title={q.title}
              name={q.name}
              value={responses[q.name]}
              onChange={(newValue) =>
                setResponses({ ...responses, [q.name]: newValue })
              }
            />
          ))}
          <div className="my-4">
            <button
              className="bg-sky-600 hover:bg-sky-700 rounded text-white text-lg p-2 w-1/5 mx-auto"
              type="submit"
            >
              {t("Questionnaire.Finish")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
