import React from 'react';
import Calendar from '../../Calendar/Calendar';
import { Link } from 'react-router-dom';
import {
  PopBrowseWrapper,
  PopBrowseContainer,
  PopBrowseBlock,
  PopBrowseContent,
  PopBrowseTopBlock,
  PopBrowseTitle,
  CategoriesThemeTop,
  Status,
  StatusText,
  StatusThemes,
  StatusTheme,
  StatusThemeText,
  PopBrowseWrap,
  FormBrowse,
  FormBrowseBlock,
  TextArea,
  CalendarWrapper,
  CalendarTitle,
  ThemeDownCategories,
  CategoriesText,
  CategoriesTheme,
  PopBrowseBtnBrowse,
  BtnBrowseEdit,
  BtnBrowseDelete,
  BtnBrowseClose,
  Descrbtion,
  BtnGroup
} from './PopBrowse.styled';
import { useTasks } from '../../../hooks/useTasks';

const PopBrowse = ({ id }) => {

  const { tasks } = useTasks();

  return (
    <PopBrowseWrapper id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTitle>{id}</PopBrowseTitle>
              <CategoriesThemeTop>
                <p>Web Design</p>
              </CategoriesThemeTop>
            </PopBrowseTopBlock>
            <Status>
              <StatusText className="subttl">Статус</StatusText>
              <StatusThemes>
                <StatusTheme className="_hide">
                  <StatusThemeText>Без статуса</StatusThemeText>
                </StatusTheme>
                <StatusTheme className="_gray">
                  <StatusThemeText>Нужно сделать</StatusThemeText>
                </StatusTheme>
                <StatusTheme className="_hide">
                  <StatusThemeText>В работе</StatusThemeText>
                </StatusTheme>
                <StatusTheme className="_hide">
                  <StatusThemeText>Тестирование</StatusThemeText>
                </StatusTheme>
                <StatusTheme className="_hide">
                  <StatusThemeText>Готово</StatusThemeText>
                </StatusTheme>
              </StatusThemes>
            </Status>
            <PopBrowseWrap>
              <FormBrowse id="formBrowseCard" action="#">
                <FormBrowseBlock>
                    <Descrbtion htmlFor="textArea01">Описание задачи</Descrbtion>
                  <TextArea name="text" id="textArea01" readOnly placeholder="Введите описание задачи..."></TextArea>
                </FormBrowseBlock>
              </FormBrowse>
              <CalendarWrapper>
                <CalendarTitle>Даты</CalendarTitle>

                {/* Компонент Календарь */}
                <Calendar /> 

              </CalendarWrapper>
            </PopBrowseWrap>
            <ThemeDownCategories>
              <CategoriesText>Категории</CategoriesText>
              <CategoriesTheme>Категория 1</CategoriesTheme>
              <CategoriesTheme>Категория 2</CategoriesTheme>
            </ThemeDownCategories>
            <PopBrowseBtnBrowse>
                <BtnGroup>
                    <BtnBrowseEdit className="_btn-bor _hover03">Редактировать</BtnBrowseEdit>
                    <BtnBrowseDelete className="_btn-bg _hover01">Удалить</BtnBrowseDelete>
                </BtnGroup>
              <BtnBrowseClose className="_btn-bor _hover03">
                <Link to="/">Закрыть</Link>
              </BtnBrowseClose>
            </PopBrowseBtnBrowse>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowseWrapper>
  );
};

export default PopBrowse;