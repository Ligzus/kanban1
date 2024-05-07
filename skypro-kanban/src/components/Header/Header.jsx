import React, { useState } from 'react';
import * as S from '../Header/Header.styled'
import { Container } from '../Header/Header.styled';
import { Link } from 'react-router-dom';
import ExitPage from '../../pages/ExitPage/ExitPage';

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(prevModalVisible => !prevModalVisible);
  };

  return ( 
    <S.Header>
      <Container>
        <S.Block>
          <div className="header__logo _show _light">
            <a href="" target="_self"><img src="images/logo.png" alt="logo" /></a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self"><img src="images/logo_dark.png" alt="logo" /></a>
          </div>
          <S.Nav>  
              <S.CreateTaskBtn id="btnMainNew">
                <Link to={'/newcard'}>Создать новую задачу</Link> 
              </S.CreateTaskBtn>     
            <a href="#user-set-target" className="header__user _hover02" onClick={toggleModal}>Ivan Ivanov</a>
            <div className="header__pop-user-set pop-user-set" id="user-set-target" style={{ display: modalVisible ? 'block' : 'none' }}>
              <p className="pop-user-set__name">Ivan Ivanov</p>
              <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
              <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </div>
              <button type="button" className="_hover03">
                <Link to={'/exit'}>Выйти</Link>
              </button>
            </div>
          </S.Nav>  			
        </S.Block>
        </Container>
    </S.Header>
  );
};

export default Header;
