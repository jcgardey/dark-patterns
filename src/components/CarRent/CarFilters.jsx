import { useTranslation } from 'react-i18next';

const FilterGroup = ({
  title,
  name,
  availableFilters,
  selectedFilters,
  toggleFilter,
}) => {
  return (
    <div className="m-4">
      <p className="text-left text-xl font-bold">{title}</p>
      <div className="my-2">
        {availableFilters.map((filter, i) => (
          <p className="flex" key={i}>
            <input
              type="checkbox"
              checked={selectedFilters.includes(filter.value)}
              value={filter.value}
              onChange={(e) => toggleFilter(name, e.target.value)}
            />
            <label className="w-2/4 mx-2 text-left text-xl font-normal">
              {filter.label}
            </label>
          </p>
        ))}
      </div>
    </div>
  );
};

export const CarFilters = ({ filters, setFilters }) => {
  const { t } = useTranslation();

  const availableFilters = {
    type: [
      { value: 'sedan', label: 'Sedan' },
      { value: 'suv', label: 'SUV' },
      { value: 'coupe', label: 'Coupe' },
      { value: 'convertible', label: 'Convertible' },
      { value: 'pickup', label: 'Pickup' },
    ],
    seats: [
      { value: 2, label: '2+' },
      { value: 4, label: '4+' },
    ],
  };

  const toggleFilter = (filterName, value) => {
    const newFilters = filters[filterName].includes(value)
      ? filters[filterName].filter((val) => val !== value)
      : [...filters[filterName], value];

    setFilters({ ...filters, [filterName]: newFilters });
  };

  return (
    <div className="w-full border border-color-white rounded p-2">
      <h3 className="text-center text-2xl text-white font-medium">
        {t('Rental.Vehicle.Filters.Title')}
        <FilterGroup
          title={t('Rental.Vehicle.Filters.Type')}
          name="type"
          availableFilters={availableFilters.type}
          selectedFilters={filters.type}
          toggleFilter={toggleFilter}
        />
      </h3>
    </div>
  );
};
