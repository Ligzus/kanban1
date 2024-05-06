import { ContainerSignin, LoginInput, LoginInputPassword, Modal, ModalBlock, ModalBtnEnter, ModalBtnEnterLink, ModalFormGroup, ModalFormGroupText, ModalFormLogin, ModalTtl, Wrapper, ModalFormGroupLink } from "./Login.styled";
import { useNavigate } from 'react-router-dom';

function Login() {

    let navigate = useNavigate();

    function goToReg() {
        navigate('/register');
    }
    
    return (        
        <Wrapper>
            <ContainerSignin>
                <Modal>
                    <ModalBlock>
                        <div className="modal__ttl">
                            <ModalTtl>Вход</ModalTtl>
                        </div>
                        <ModalFormLogin id="formLogIn" action="#">

                            <LoginInput type="text" name="login" id="formlogin" placeholder="Эл. почта"></LoginInput>
                            <LoginInputPassword type="password" name="password" id="formpassword" placeholder="Пароль"></LoginInputPassword>                     

                            <ModalBtnEnter id="btnEnter">
                                <ModalBtnEnterLink>Войти</ModalBtnEnterLink>
                            </ModalBtnEnter>                      

                            <ModalFormGroup>
                                <ModalFormGroupText>Нужно зарегистрироваться?</ModalFormGroupText>
                                <ModalFormGroupLink onClick={goToReg}>Регистрируйтесь здесь</ModalFormGroupLink>
                            </ModalFormGroup>

                        </ModalFormLogin>
                    </ModalBlock>
                </Modal>
            </ContainerSignin>
        </Wrapper>
    )
};

export default Login;
