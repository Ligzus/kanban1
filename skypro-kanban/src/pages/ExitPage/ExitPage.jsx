import PopExit from "../../components/PopUps/PopExit/PopExit"

function ExitPage({ setIsAuth, setToken }) {
    function logOut() {
        setIsAuth(false);
        setToken(null);
    };

    return <PopExit logOut={logOut}/>    
}

export default ExitPage;