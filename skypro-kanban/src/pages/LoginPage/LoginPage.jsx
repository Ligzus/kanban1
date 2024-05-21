import { useState } from "react";
import { ContainerSignin, LoginInput, LoginInputPassword, Modal, ModalBlock, ModalBtnEnter, ModalBtnEnterLink, ModalFormGroup, ModalFormGroupText, ModalFormLogin, ModalTtl, Wrapper, ModalFormGroupLink } from "./Login.styled";
import { useNavigate } from 'react-router-dom';
import { login } from "../../api";

function LoginPage({ setIsAuth, setToken }) {
    let navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        login: '',
        password: '',
    });   
    
    const onInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    }
   
    const onLogin = async (event) => {
        event.preventDefault();

        const response = await login({
            login: formValues.login,
            password: formValues.password,
        });       

        if (response?.user) {
            setIsAuth(true);
            setToken(response.user.token);
            console.log(response.user);
            navigate('/');
        }         
    }
    
    return (        
        <Wrapper>
            <ContainerSignin>
                <Modal>
                    <ModalBlock>
                        <div className="modal__ttl">
                            <ModalTtl>Вход</ModalTtl>
                        </div>
                        <ModalFormLogin id="formLogIn" action="#" onSubmit={onLogin}>
                            <LoginInput 
                                type="text" 
                                name="login" 
                                id="formlogin" 
                                placeholder="Эл. почта"
                                value={formValues.login}
                                onChange={onInputChange}
                            />

                            <LoginInputPassword 
                                type="password" 
                                name="password" 
                                id="formpassword" 
                                placeholder="Пароль"
                                value={formValues.password}
                                onChange={onInputChange}
                            />                


                            <ModalBtnEnter id="btnEnter" type="submit">
                                <ModalBtnEnterLink>Войти</ModalBtnEnterLink>
                            </ModalBtnEnter>                      

                            <ModalFormGroup>
                                <ModalFormGroupText>Нужно зарегистрироваться?</ModalFormGroupText>
                                <ModalFormGroupLink onClick={() => navigate('/register')}>Регистрируйтесь здесь</ModalFormGroupLink>
                            </ModalFormGroup>

                        </ModalFormLogin>
                    </ModalBlock>
                </Modal>
            </ContainerSignin>
        </Wrapper>
    )
};

export default LoginPage;