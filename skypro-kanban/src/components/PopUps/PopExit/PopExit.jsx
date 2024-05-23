import React from 'react';
import { Link } from 'react-router-dom';
import {
  PopExitWrapper,
  PopExitContainer,
  PopExitBlock,
  PopExitTitle,
  PopExitForm,
  PopExitFormGroup,
  PopExitButtonYes,
  PopExitButtonNo
} from './PopExit.styled';

const PopExit = ({ logOut }) => {

  function handleSubmit() {
    logOut();
  }

  return (
    <PopExitWrapper id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTitle>
          <PopExitForm id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitButtonYes>
                <a onClick={handleSubmit}>Да, выйти</a>
              </PopExitButtonYes>
              <PopExitButtonNo>
                <Link to={'/'}>Нет, остаться</Link>
              </PopExitButtonNo>
            </PopExitFormGroup>
          </PopExitForm>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitWrapper>
  );
};

export default PopExit;