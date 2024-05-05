import { Link } from "react-router-dom"

function Register() {
    return (
        <div className="container-signup">
            <div className="modal">
				<div className="modal__block">
					<div className="modal__ttl">
						<h2>Регистрация</h2>
					</div>
					<form className="modal__form-login" id="formLogUp" action="#">
						<input className="modal__input first-name" type="text" name="first-name" id="first-name" placeholder="Имя"></input>
						<input className="modal__input login" type="text" name="login" id="loginReg" placeholder="Эл. почта"></input>
						<input className="modal__input password-first" type="password" name="password" id="passwordFirst" placeholder="Пароль"></input>
						<button className="modal__btn-signup-ent _hover01" id="SignUpEnter">
                            <Link to={'/'}>Зарегистрироваться</Link>
                        </button>
						<div className="modal__form-group">
							<p>Уже есть аккаунт?</p>  
                            <Link to={'/login'}>Войдите здесь</Link>
						</div>
					</form>
				</div>
			</div>
        </div>
    )
};

export default Register