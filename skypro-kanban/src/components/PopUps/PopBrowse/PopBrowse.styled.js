import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PopBrowseWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CategoriesThemeTop = styled.div`
  background-color: #FFE4C2;
  color: #FF6D00;
  border-radius: 4px;
  padding: 8px 20px;
  opacity: 1;
`;

export const Status = styled.div`
  margin-bottom: 11px;
`;

export const StatusText = styled.p`
  margin-bottom: 14px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94A6BE;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;

  &.hide {
    display: none;
  }

  &.gray {
    background: #94A6BE;
    color: #FFFFFF;
  }
`;

export const StatusThemeText = styled.p`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  color: #ffff;
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const FormBrowse = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Descrbtion = styled.label`
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;  
`;

export const TextArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #EAEEF6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }
`;

export const CalendarWrapper = styled.div`
  width: 182px;
  margin-bottom: 20px;
`;

export const CalendarTitle = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const ThemeDownCategories = styled.div`
  display: none;
  margin-bottom: 20px;
`;

export const CategoriesText = styled.p`
  margin-bottom: 14px;
`;

export const CategoriesTheme = styled.div`
  background-color: #FFE4C2;
  color: #FF6D00;
  border-radius: 4px;
  padding: 8px 20px;
  opacity: 1;
`;

export const PopBrowseBtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }

  .btn-group {
    button {
      margin-right: 8px;
    }
  }
`;

export const BtnGroup = styled.div`
    margin-right: 8px;
`;

export const Button = styled.button`
  border-radius: 4px;
  outline: none;

  &._btn-bor {
    border: 0.7px solid #565EEF;
    background: transparent;
    color: #565EEF;

    a {
      color: #565EEF;
    }
  }

  &._btn-bg {
    background: #565EEF;
    border: none;
    color: #FFFFFF;

    a {
      color: #FFFFFF;
    }
  }

  &._hover01:hover {
    background-color: #33399b;
  }

  &._hover03:hover {
    background-color: #33399b;
    color: #FFFFFF;

    a {
      color: #FFFFFF;
    }
  }
`;

export const BtnBrowseEdit = styled(Button)`
  &._btn-bor {
    margin-right: 8px;
  }
`;

export const BtnBrowseDelete = styled(Button)``;

export const BtnBrowseClose = styled(Button)`
  a {
    text-decoration: none;
  }
`;

export const BtnEditGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }

  .btn-group {
    button {
      margin-right: 8px;
    }
  }
`;

export const BtnEditEdit = styled(Button)`
  &._btn-bg {
    margin-right: 8px;
  }
`;

export const BtnEditDelete = styled(Button)``;

export const BtnEditClose = styled(Button)``;