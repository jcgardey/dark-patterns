import { useTranslation } from 'react-i18next';
import { Modal } from '../Modal';

export const ProtectionModal = ({ onClose, onNext }) => {
  const { t } = useTranslation();
  console.log(t);

  return (
    <Modal title={t('Rental.Protection.NoProtection.Title')} onClose={onClose}>
      <p>{t('Rental.Protection.NoProtection.Description')}</p>
      <div className="flex w-1/2 mx-auto my-4 justify-evenly">
        <button className="bg-blue-900 text-white p-2 mx-3" onClick={onClose}>
          {t('Rental.Protection.NoProtection.Add')}
        </button>
        <button
          className="border-2 text-blue-900 border-blue-900 p-2"
          onClick={onNext}
        >
          {t('Rental.Protection.NoProtection.Skip')}
        </button>
      </div>
    </Modal>
  );
};
