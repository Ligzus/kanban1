import { useState } from "react";
import { ContainerSignin, LoginInput, LoginInputPassword, Modal, ModalBlock, ModalBtnEnter, ModalBtnEnterLink, ModalFormGroup, ModalFormGroupText, ModalFormGroupLink, ModalFormLogin, ModalTtl, Wrapper } from "../LoginPage/Login.styled";
import { useNavigate } from "react-router-dom";
import { register } from "../../api";

function RegisterPage({ setToken }) {
    let navigate = useNavigate();
    function goToLogin() {
        navigate('/login');
    }

    const [formValues, setFormValues] = useState({
        firstName: '',
        login: '',
        password: '',
    });   
    
    const onInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    }
   
    const onRegister = async (event) => {
        event.preventDefault();

        try {
            const response = await register({
                name: formValues.firstName,
                login: formValues.login,
                password: formValues.password,
            });       
    
            const data = await response.json();
            setToken(data.user.token);
            navigate('/');
            
            if (response.status === 400) {
                throw new Error('Пользователь уже существует');                                             
            } else {
                throw new Error('Ошибка при входе');
            }
            
        } catch (error) {
            if (error.message === 'Пользователь уже существует') {
                alert('Кажется у вас уже есть аккаунт, войдите в него');   
                navigate('/login');     
            } else {
                console.log(error.message);
            }
        }
               
    }

    return (
		<Wrapper>
            <ContainerSignin>
                <Modal>
                    <ModalBlock>
                        <div className="modal__ttl">
                            <ModalTtl>Регистрация</ModalTtl>
                        </div>
                        <ModalFormLogin id="formLogUp" action="#" onSubmit={onRegister}>

							<LoginInput 
                                type="text" 
                                name="firstName" 
                                id="first-name" 
                                placeholder="Имя"  
                                value={formValues.firstName}
                                onChange={onInputChange}                          
                            />

                            <LoginInput 
                                type="email" 
                                name="login" 
                                id="loginReg" 
                                placeholder="Эл. почта"
                                value={formValues.login}
                                onChange={onInputChange}
                            />

                            <LoginInputPassword 
                                type="password" 
                                name="password" 
                                id="passwordFirst" 
                                placeholder="Пароль"
                                value={formValues.password}
                                onChange={onInputChange}
                            />                   

                            <ModalBtnEnter id="SignUpEnter" type="submit">
                                <ModalBtnEnterLink>Зарегистрироваться</ModalBtnEnterLink>
                            </ModalBtnEnter>                      

                            <ModalFormGroup>
                                <ModalFormGroupText>Уже есть аккаунт?</ModalFormGroupText>
                                <ModalFormGroupLink onClick={goToLogin}>Войдите здесь</ModalFormGroupLink>
                            </ModalFormGroup>

                        </ModalFormLogin>
                    </ModalBlock>
                </Modal>
            </ContainerSignin>
        </Wrapper>
    )
};

export default RegisterPage;