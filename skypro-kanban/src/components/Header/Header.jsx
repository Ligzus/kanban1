import React, { useState, useEffect, useRef } from 'react';
import * as S from './Header.styled';
import { Link } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { user } = useUser();
  const modalRef = useRef(null);

  const toggleModal = () => {
    setModalVisible(prevModalVisible => !prevModalVisible);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModalVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.Header>
      <S.Container>
        <S.Block>
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <S.HeaderLogo src="/images/logo.svg" alt="logo" />
            </a>
          </div>
          <S.Nav>
            <S.CreateTaskBtn id="btnMainNew">
              <S.CreateTaskBtnLink to={'/newcard'}>Создать новую задачу</S.CreateTaskBtnLink>
            </S.CreateTaskBtn>

            <S.UserLink href="#user-set-target" className="header__user _hover02" onClick={toggleModal}>{user.name}</S.UserLink>

            <S.UserPopup ref={modalRef} id="user-set-target" className={modalVisible ? 'visible' : ''}>
              <S.UserName>{user.name}</S.UserName>
              <S.UserEmail>{user.login}</S.UserEmail>

              <S.LogoutButton type="button" className="_hover03">
                <S.LogoutButtonLink to={'/exit'}>Выйти</S.LogoutButtonLink>
              </S.LogoutButton>
            </S.UserPopup>
          </S.Nav>
        </S.Block>
      </S.Container>
    </S.Header>
  );
};

export default Header;