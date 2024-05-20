import PopExit from "../../components/PopUps/PopExit/PopExit"

function ExitPage({ setIsAuth }) {
    function logOut() {
        setIsAuth(false);
    };

    return <PopExit logOut={logOut}/>    
}

export default ExitPage;