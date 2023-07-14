import LoginButton from "./LoginButton"

function WelcomeNoLogged() {
    return (
        <>
            <div className="flex flex-col gap-4 max-w-md mx-auto -translate-y-[50%] top-[50%] left-[50%] absolute -translate-x-[50%]">
                <h1 className="text-4xl text-center mb-12 font-thin">Bienvenido a
                    <br/>
                    <span className="font-bold text-6xl tracking-wider"> CarayanIA </span>
                </h1>
                <p className="text-[22px] text-gray-400 font-light text-justify">Un chatbot entrenado para hablar como el reconocidisimo artista Pablo Carayani Camara.</p>
                <p className="text-[22px] text-gray-400 font-light text-justify">Para poder usarlo, debes iniciar sesión con tu cuenta de Google.</p>
                <LoginButton className="mb-auto border-white border py-2 px-4 rounded text-3xl font-bold" />
            </div>
        </>
    )
}

export default WelcomeNoLogged