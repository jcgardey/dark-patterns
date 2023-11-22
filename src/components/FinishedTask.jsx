import { useState } from 'react';
import { Confirmation } from './Confirmation';
import { Modal } from './Modal';
import { Questionnaire } from './Questionnaire/Questionnaire';

import { useTranslation } from 'react-i18next';

export const FinishedTask = ({ show }) => {
  
  const { t } = useTranslation();
  
  const [showQuestionnaire, setShowQuestionnaire] = useState(true);
  const closeTab = () =>{window.close()};
  
  if (!show) {
    return null;
  }
  return (
    <Modal title={t('Common.TaskFinished')}>
      {showQuestionnaire ? (
        <Questionnaire onFinish={() => setShowQuestionnaire(false)} />
      ) : (
        <Confirmation />
      )}
    </Modal>
  );
};
