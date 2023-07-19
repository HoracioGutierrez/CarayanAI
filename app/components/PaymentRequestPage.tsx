import PaymentButton from "./PaymentButton"

function PaymentRequestPage() {
    return (
        <>
            <h2 className="text-2xl">Ups! Te pasaste</h2>
            <p>La cuenta gratuita creada en CarayanAI por default viene solo con 5 preguntas para hacer. Ojala te hayas divertido con la app!</p>
            <p>Por cuestiones administrativas no puedo dejarla libre porque GPT sale no gratis, sino de mil amores les dejaria usar a CarayanAI siempre que quieran.</p>
            <p>De todas maneras si quisieran seguir usando la app por 100 preguntas mas* pueden simplemente hacer un minimo pago de mil pesitos que con la devaluacion de hoy, les estoy pidiendo un alfajor practicamente asi que nada, si queres pagar la prata seria aca : </p>
            <PaymentButton />
        </>
    )
}
export default PaymentRequestPage