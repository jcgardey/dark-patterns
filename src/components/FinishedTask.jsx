import { useState } from 'react';
import { Confirmation } from './Confirmation';
import { Modal } from './Modal';
import { Questionnaire } from './Questionnaire/Questionnaire';

export const FinishedTask = ({ show }) => {
  const [showQuestionnaire, setShowQuestionnaire] = useState(true);
  if (!show) {
    return null;
  }
  return (
    <Modal title="Tarea finalizada">
      {showQuestionnaire ? (
        <Questionnaire onFinish={() => setShowQuestionnaire(false)} />
      ) : (
        <Confirmation />
      )}
    </Modal>
  );
};
