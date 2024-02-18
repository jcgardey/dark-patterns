import { useState } from 'react';
import { Confirmation } from './Confirmation';
import { Modal } from './Modal';
import { Questionnaire } from './Questionnaire/Questionnaire';

import { useTranslation } from 'react-i18next';
import { createSample } from '../services/samples';

export const FinishedTask = ({ show, website, data = {} }) => {
  const { t } = useTranslation();

  const [showQuestionnaire, setShowQuestionnaire] = useState(true);
  const closeTab = () => {
    window.close();
  };

  const onFinish = (questionnaire) => {
    setShowQuestionnaire(false);
    const isDark = !!localStorage.getItem('dark');
    const website = localStorage.getItem('website_id');
    createSample(website, isDark, questionnaire, data);
    localStorage.removeItem('website_id');
  };

  if (!show) {
    return null;
  }
  return (
    <Modal title={t('Common.TaskFinished')}>
      {showQuestionnaire ? (
        <Questionnaire onFinish={onFinish} />
      ) : (
        <Confirmation />
      )}
    </Modal>
  );
};
