import { Button, Form } from 'antd';

import { useState } from 'react';
import { ConfirmModal } from './components/ConfirmModal';
import { DetailsStep } from './components/DetailsStep';
import { SubjectStep } from './components/SubjectStep';
import { ThesisStep } from './components/ThesisStep';

export const AddPaper = () => {
  const [step, setStep] = useState<number>(0);

  const handleBack = () => setStep(step - 1);

  const handleContinue = () => setStep(step + 1);

  return (
    <div>
      <div
        style={{
          marginBottom: '25px',
          width: '100%',
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Button
          type='text'
          style={{ visibility: step === 0 ? 'hidden' : 'visible' }}
          onClick={handleBack}
        >
          {'< Back'}
        </Button>

        {step === 2 && <ConfirmModal />}
        {step !== 2 && (
          <Button
            style={{ visibility: step === 3 ? 'hidden' : 'visible' }}
            onClick={handleContinue}
          >
            {'Continue'}
          </Button>
        )}
      </div>
      <Form onChange={console.log}>
        {step === 0 && <SubjectStep />}
        {step === 1 && <ThesisStep />}
        {step === 2 && <DetailsStep />}
      </Form>
    </div>
  );
};
