import React, { useState } from 'react';
import * as S from '../Header/Header.styled'
import { Container } from '../Header/Header.styled';
import { Link } from 'react-router-dom';

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
            <a href="" target="_self">
              <S.HeaderLogo src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <S.HeaderLogo src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <S.Nav>  
              <S.CreateTaskBtn id="btnMainNew">
                <Link to={'/newcard'}>Создать новую задачу</Link> 
              </S.CreateTaskBtn>     
              <S.UserLink href="#user-set-target" onClick={toggleModal}>Ivan Ivanov</S.UserLink>

              <S.PopUserSet id="user-set-target" $visible={modalVisible}>
                <S.PopUserName>Ivan Ivanov</S.PopUserName>
                  <S.PopUserMail>ivan.ivanov@gmail.com</S.PopUserMail>
                  <S.HoverButton type="button">
                    <Link to="/exit">Выйти</Link>
                  </S.HoverButton>
              </S.PopUserSet>
          </S.Nav>  			
        </S.Block>
        </Container>
    </S.Header>
  );
};

export default Header;
