async function AboutUsPage() {
    return (
        <section className="gap-2 border-2 bg-slate-900 border-slate-600 rounded p-4 flex flex-col gap-8">
            <h2 className="text-4xl text-white mb-8">Sobre Nosotros</h2>
            <p className=" font-thin  text-lg text-justify  text-white mb-8">¡Hola farafans! como estaaan? Somos nosotras, sus faraAmigas... ¡ChatGPT By:Nereas! 🌈🌈🌈</p>
            <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex flex-col gap-8 w-full">
                    <div>
                        <h3 className=" text-2xl mb-1 text-white "> No me cuente su vida señora! </h3>
                        <p className=" font-thin  text-lg   text-white">Somos un grupito independiente de dos programadores que hacen ma-gia con el código.</p>
                    </div>
                    <div>
                        <h3 className=" text-2xl mb-1 text-white ">Nereas que integran el duo ma-cana</h3>
                        <p className=" font-thin  text-lg   text-white"> Por un lado, @ArturoGabrielRamirez, quien se encarga de las microfuncionalidades y este fantástico resumen del funcionamiento de la página. Y por el otro, el exclusivo programador @HoracioGutierrez, quien se asegura que todo funcione a la perfección para que cada Nerea tenga la exclusividad que todo FaraFan se merece.</p>
                    </div>
                </div>
                <div className="w-full xl:w-4/5 2xl:w-3/5 flex-grow flex flex-col md:flex-row gap-16 justify-center items-center">
                    <div className="flex flex-col items-center">
                        <img className="rounded-full w-44 h-44 lg:w-44 lg:h-44" src="https://scontent.feze7-2.fna.fbcdn.net/v/t39.30808-6/351986802_233685459408439_2217127801493781014_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeElVmNmyy9BYY1qyyGt-Bcm9Arui4LHYND0Cu6Lgsdg0MLU5Tfau1goVKA19IB0_9M&_nc_ohc=cuVNTYpFiZ4AX_bYiXt&_nc_ht=scontent.feze7-2.fna&oh=00_AfAwA7S2AS9Co9uu01D0w6x8B1BwZDDsUuvzU1m9dmktYA&oe=64C3E2D1" alt="Test" />
                        <h3 className="p-2 text-xl text-white">Gabriel Ramirez</h3>
                        <p className="p-2 font-thin  text-lg   text-white">descripcion general</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="rounded-full w-44 h-44 lg:w-44 lg:h-44" src="https://pbs.twimg.com/media/E7fCVsUWUAUWtDG.jpg" alt="Test" />
                        <h3 className="p-2 text-xl text-white">Horacio Gutierrez</h3>
                        <p className="p-2 font-thin  text-lg text-white">descripcion general</p>
                    </div>
                </div>

            </div>

            <div>
                <h3 className=" text-2xl mb-1 text-white ">Siguiente funcionamiento</h3>
                <p className="  font-thin  text-lg   text-white">Nuestra app web te permite crear, tener un historial de conversaciones previas con el bot y compartir tus propias vivencias. ¿Cómo? A través de un entrenamiento para ser lo más fiel posible y dar respuestas desopilantes con todo el glamur a cualquier duda sobre la vida, la moda o, simplemente, conocer la opinión del Exelentísimo Pablo Carayani Cámara.</p>
            </div>

            <div>
                <h3 className=" text-2xl mb-1 text-white ">Y ustedes... que hubieran hecho?</h3>
                <p className=" font-thin  text-lg   text-white">Hemos volcando nuestro conocimiento en lo ultimo de la programacion con Next.js tanto con metodos para el consumo y entrenamiendo del exclusivo modelo generado por la reconocidicima marca de IA chatGPT-4.</p>
            </div>

            <div>
                <h3 className=" text-2xl mb-1 text-white ">No sean tortugas y paga la prata</h3>
                <p className=" font-thin  text-lg   text-white"> Nuestro objetivo es que cada Nerea pueda compartir sus historias y recibir el feedback de otros usuarios. ¿Te va nenita? Bueno.. ¡Entonces podes apoya el proyecto! Ademas de que este proyecto llevo su tiempo, cada chat generado nos sale prata, sepan disculpar el limite de 5 preguntas permitidas. Pero si permitimos el libre chat, vamos a terminar trabajando de damas de la noche, asique podes hacer un aporte minimo y disfrutar del chat cuantas veces quieras y podemos seguir en marcha este proyecto hecho con mucho amor hacia la comunidad y @MartinCirio Nuestra inocente amiga.
                </p>
            </div>
            <div>
                <h2 className=" text-2xl mb-1 text-white ">A la faraona sho la adoooro</h2>
                <p className=" font-thin  text-lg   text-white text-center md:text-left"> ¡A darle con toda la buena onda, Farafans! ¡Esto es para ustedes! 💫🌈🚀</p>
            </div>

        </section>
    )
}

export default AboutUsPage;