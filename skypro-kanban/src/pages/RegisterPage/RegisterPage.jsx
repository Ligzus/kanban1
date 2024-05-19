import { ContainerSignin, LoginInput, LoginInputPassword, Modal, ModalBlock, ModalBtnEnter, ModalBtnEnterLink, ModalFormGroup, ModalFormGroupText, ModalFormGroupLink, ModalFormLogin, ModalTtl, Wrapper } from "../LoginPage/Login.styled";
import { useNavigate } from "react-router-dom";

function Register() {
    let navigate = useNavigate();

    function goToLogin() {
        navigate('/login');
    }

    return (
		<Wrapper>
            <ContainerSignin>
                <Modal>
                    <ModalBlock>
                        <div className="modal__ttl">
                            <ModalTtl>Регистрация</ModalTtl>
                        </div>
                        <ModalFormLogin id="formLogUp" action="#">

							<LoginInput type="text" name="first-name" id="first-name" placeholder="Имя"></LoginInput>
                            <LoginInput type="text" name="login" id="loginReg" placeholder="Эл. почта"></LoginInput>
                            <LoginInputPassword type="password" name="password" id="passwordFirst" placeholder="Пароль"></LoginInputPassword>                     

                            <ModalBtnEnter id="SignUpEnter">
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

export default Register