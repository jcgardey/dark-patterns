import { useState } from 'react';
import { Confirmation } from './Confirmation';
import { Modal } from './Modal';
import { Questionnaire } from './Questionnaire/Questionnaire';

import { useTranslation } from 'react-i18next';
import { createSample } from '../services/samples';
import dayjs from 'dayjs';

export const FinishedTask = ({ show, website, data = {} }) => {
  const { t } = useTranslation();

  const [showQuestionnaire, setShowQuestionnaire] = useState(true);
  const closeTab = () => {
    window.close();
  };

  const onFinish = (questionnaire) => {
    setShowQuestionnaire(false);
    const isDark = !!localStorage.getItem('dark');
    const website = JSON.parse(localStorage.getItem('website'));
    const end = dayjs().format();
    createSample({
      id: website.id,
      isDark,
      start: website.start,
      end,
      questionnaire,
      data,
    });
    localStorage.removeItem('website');
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
