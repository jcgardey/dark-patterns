import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Room = ({
  title,
  img,
  description,
  fullPrice,
  price,
  taxes,
  freeCancellation,
  nights,
  adults,
}) => {
  const { t } = useTranslation();

  const onClick = () => {
    localStorage.setItem('hotel-price', price);
    localStorage.setItem('hotel-taxes', taxes);
  };

  const darkEnabled = localStorage.getItem('dark') == 'true' ?? false;

  return (
    <div className="mb-10 border border-gray-400 rounded">
      <div className="flex justify-between">
        <div className="w-1/4">
          <img src={img} className="img-fluid rounded-start" alt="..." />
        </div>

        <div className="w-1/2 pt-5">
          <a
            className="underline font-medium text-xl text-teal-600"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div className="my-2">
            <p
              className="text-gray-800"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            {freeCancellation && (
              <p className="font-bold text-md my-1">
                {t('Roomio.Results.Cancellation')}
              </p>
            )}
            <p className="my-1 text-gray-500">
              {t('Roomio.Results.Night', { count: nights })},{' '}
              {t('Roomio.Search.Adult', { count: parseInt(adults) })}
            </p>
          </div>
        </div>

        <div className="w-1/5 py-4">
          <h5 className="text-xl my-1 line-through text-gray-500">
            $ {fullPrice}
          </h5>
          <h5 className="text-xl my-1 font-medium">
            $ {darkEnabled ? price : price + taxes}
          </h5>

          <p className="text-sm text-gray-500 my-2">
            {darkEnabled
              ? `+$ ${taxes} ${t('Roomio.Results.Taxes')}`
              : t('Roomio.Results.TaxesIncluded')}
          </p>
          <Link
            to="/roomio/summary"
            onClick={onClick}
            className="bg-teal-600 text-xl hover:bg-teal-700 p-2 px-10 my-2 inline-block rounded text-white"
          >
            {t('Roomio.Results.Book')}
          </Link>
        </div>
      </div>
    </div>
  );
};
