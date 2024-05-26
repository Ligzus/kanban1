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
  const task = tasks.find(task => task._id === id);

  if (!task) {
    return <p>Задача не найдена</p>;
  }

  return (
    <PopBrowseWrapper id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTitle>{task.title}</PopBrowseTitle>
              <CategoriesThemeTop
               className={`
                ${task.topic === 'Research' ? '_green' : ''}
                ${task.topic === 'Web Design' ? '_orange' : ''}
                ${task.topic === 'Copywriting' ? '_purple' : ''}
                ${task.topic === 'Без категории' ? '_gray' : ''}
              `}
              >
                <p>{task.topic}</p>
              </CategoriesThemeTop>
            </PopBrowseTopBlock>
            <Status>
              <StatusText className="subttl">Статус</StatusText>
              <StatusThemes>
                <StatusTheme className={task.status === "Без статуса" ? "_gray" : "_hide"}>
                  <StatusThemeText>Без статуса</StatusThemeText>
                </StatusTheme>
                <StatusTheme className={task.status === "Нужно сделать" ? "_gray" : "_hide"}>
                  <StatusThemeText>Нужно сделать</StatusThemeText>
                </StatusTheme>
                <StatusTheme className={task.status === "В работе" ? "_gray" : "_hide"}>
                  <StatusThemeText>В работе</StatusThemeText>
                </StatusTheme>
                <StatusTheme className={task.status === "Тестирование" ? "_gray" : "_hide"}>
                  <StatusThemeText>Тестирование</StatusThemeText>
                </StatusTheme>
                <StatusTheme className={task.status === "Готово" ? "_gray" : "_hide"}>
                  <StatusThemeText>Готово</StatusThemeText>
                </StatusTheme>
              </StatusThemes>
            </Status>
            <PopBrowseWrap>
              <FormBrowse id="formBrowseCard" action="#">
                <FormBrowseBlock>
                  <Descrbtion htmlFor="textArea01">Описание задачи</Descrbtion>
                  <TextArea
                    name="text"
                    id="textArea01"
                    readOnly
                    value={task.description}
                  ></TextArea>
                </FormBrowseBlock>
              </FormBrowse>
              <CalendarWrapper>
                <CalendarTitle>Даты</CalendarTitle>
                <Calendar date={task.date} setSelected={() => {}} readOnly />
              </CalendarWrapper>
            </PopBrowseWrap>
            <ThemeDownCategories>
              <CategoriesText>Категории</CategoriesText>
              <CategoriesTheme 
                  className={`_orange ${task.topic === 'Web Design' ? '_active-topic' : ''}`}
                >
                  <p className="_orange">Web Design</p>
                </CategoriesTheme>
                <CategoriesTheme 
                  className={`_green ${task.topic === 'Research' ? '_active-topic' : ''}`}
                >
                  <p className="_green">Research</p>
                </CategoriesTheme>
                <CategoriesTheme 
                  className={`_purple ${task.topic === 'Copywriting' ? '_active-topic' : ''}`}
                >
                  <p className="_purple">Copywriting</p>
                </CategoriesTheme>
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