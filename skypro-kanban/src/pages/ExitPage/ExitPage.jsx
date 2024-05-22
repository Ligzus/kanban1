import PopExit from "../../components/PopUps/PopExit/PopExit"

function ExitPage({ setToken }) {
    function logOut() {
        setToken(null);
    };

    return <PopExit logOut={logOut}/>    
}

export default ExitPage;