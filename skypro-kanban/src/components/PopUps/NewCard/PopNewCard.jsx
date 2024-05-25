import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from '../../Calendar/Calendar';
import { PopNewCardClose, PopNewCardContainer, PopNewCardBlock, PopNewCardContent, PopNewCardTitle, PopNewCardWrap, PopNewCardForm, FormNewBlock, FormNewInput, FormNewArea, CalendarContainer, CalendarTitle, Categories, CategoryTitle, CategoriesThemes, CategoryTheme, FormNewCreateButton, PopNewCards, SubTtl } from './PopNewCard.styled';
import { useTasks } from '../../../hooks/useTasks';
import { postTodo } from '../../../api'; // Импортируем функцию для отправки данных на сервер
import { useUser } from '../../../hooks/useUser';

const PopNewCard = () => {
  const { setTasks } = useTasks();
  const navigate = useNavigate();
  const { user } = useUser();

  const [formData, setFormData] = useState({
    title: "",
    topic: "",
    description: "",
    date: "",
    status: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addCard = async () => {
    try {
      const newTask = {
        title: formData.title,
        topic: formData.topic,
        status: formData.status,
        description: formData.description,
        date: formData.date,
      };

      const response = await postTodo({user, newTask });
      if (response.ok) {
        const updatedTasks = await response.json();
        setTasks(updatedTasks.tasks); // Обновляем задачи на основе ответа сервера
        navigate('/');
      } else {
        const errorText = await response.text();
        console.error('Ошибка:', response.status, errorText);
      }
    } catch (error) {
      console.error( error);
    }
  };
  
  const handleCloseBtn = () => {
    navigate('/');
  };

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
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                </FormNewBlock>
                <FormNewBlock>
                  <SubTtl htmlFor="textArea">Описание задачи</SubTtl>
                  <FormNewArea
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </FormNewBlock>
              </PopNewCardForm>
              <CalendarContainer>
                <CalendarTitle>Даты</CalendarTitle>
                <Calendar 
                  date={formData.date}
                  onSelect={(date) => setFormData({ ...formData, date: date ? date : "" })}
                />
              </CalendarContainer>
            </PopNewCardWrap>
            <Categories>
              <CategoryTitle>Категория</CategoryTitle>
              <CategoriesThemes>
                <CategoryTheme 
                  className={`_orange ${formData.topic === 'Web Design' ? '_active-topic' : ''}`}
                  onClick={() => setFormData({ ...formData, topic: 'Web Design' })}
                >
                  <p className="_orange">Web Design</p>
                </CategoryTheme>
                <CategoryTheme 
                  className={`_green ${formData.topic === 'Research' ? '_active-topic' : ''}`}
                  onClick={() => setFormData({ ...formData, topic: 'Research' })}
                >
                  <p className="_green">Research</p>
                </CategoryTheme>
                <CategoryTheme 
                  className={`_purple ${formData.topic === 'Copywriting' ? '_active-topic' : ''}`}
                  onClick={() => setFormData({ ...formData, topic: 'Copywriting' })}
                >
                  <p className="_purple">Copywriting</p>
                </CategoryTheme>
              </CategoriesThemes>
            </Categories>
            <FormNewCreateButton id="btnCreate" onClick={addCard}>
              Создать задачу
            </FormNewCreateButton>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopNewCards>
  );
};

export default PopNewCard;