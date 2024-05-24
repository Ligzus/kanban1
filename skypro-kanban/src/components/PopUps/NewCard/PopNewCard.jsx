import React from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from '../../Calendar/Calendar';
import { PopNewCardClose, PopNewCardContainer, PopNewCardBlock, PopNewCardContent, PopNewCardTitle, PopNewCardWrap, PopNewCardForm, FormNewBlock, FormNewInput, FormNewArea, CalendarContainer, CalendarTitle, Categories, CategoryTitle, CategoriesThemes, CategoryTheme, FormNewCreateButton, PopNewCards, SubTtl } from './PopNewCard.styled';

const PopNewCard = ({ addCard, cards, setCards }) => {
  const navigate = useNavigate();

  function handleCloseBtn() {
    navigate('/');
  }

  return (
      <PopNewCards>
      <PopNewCardContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
            <PopNewCardTitle>Создание задачи</PopNewCardTitle>
            <PopNewCardClose onClick={handleCloseBtn}>&#10006;</PopNewCardClose>
            <PopNewCardWrap>
              <PopNewCardForm id="formNewCard" action="#">
                <FormNewBlock>
                  <SubTtl htmlFor="formTitle">Название задачи</SubTtl>
                  <FormNewInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </FormNewBlock>
                <FormNewBlock>
                  <SubTtl htmlFor="textArea">Описание задачи</SubTtl>
                  <FormNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  />
                </FormNewBlock>
              </PopNewCardForm>
              <CalendarContainer>
                
                <CalendarTitle>Даты</CalendarTitle>
                <Calendar />
              </CalendarContainer>
            </PopNewCardWrap>
            <Categories>

              <CategoryTitle >Категория</CategoryTitle>
              <CategoriesThemes>
                <CategoryTheme className="_orange _active-topic">
                  <p className="_orange">Web Design</p>
                </CategoryTheme>
                <CategoryTheme className="_green">
                  <p className="_green">Research</p>
                </CategoryTheme>
                <CategoryTheme className="_purple">
                  <p className="_purple">Copywriting</p>
                </CategoryTheme>
              </CategoriesThemes>
            </Categories>
            <FormNewCreateButton id="btnCreate" onClick={() => addCard({ cards, setCards })}>Создать задачу</FormNewCreateButton>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopNewCards>
  );
};

export default PopNewCard;