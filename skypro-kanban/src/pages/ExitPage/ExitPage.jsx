import PopExit from "../../components/PopUps/PopExit"

function ExitPage({ setLogin }) {
    function logOut() {
        setLogin(false);
    };

    return <PopExit logOut={logOut}/>    
}

export default ExitPage;