import { ContainerSignin, LoginInput, LoginInputPassword, Modal, ModalBlock, ModalBtnEnter, ModalBtnEnterLink, ModalFormGroup, ModalFormGroupText, ModalFormLogin, ModalTtl, Wrapper, ModalFormGroupLink } from "./Login.styled";

function Login() {  
    
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
                                <ModalFormGroupLink>Регистрируйтесь здесь</ModalFormGroupLink>
                            </ModalFormGroup>

                        </ModalFormLogin>
                    </ModalBlock>
                </Modal>
            </ContainerSignin>
        </Wrapper>
    )
};

export default Login;
