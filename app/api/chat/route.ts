import { kv } from '@vercel/kv'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'
import { getServerSession } from 'next-auth'
import { nanoid } from "nanoid"

//export const runtime = 'edge'

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export async function POST(req: Request) {
    const json = await req.json()
    const { messages } = json
    const session = await getServerSession()
    if (!session) {
        return new Response('Unauthorized', {
            status: 401
        })
    }

    console.log(json)

    const res = await openai.createChatCompletion({
        model: 'gpt-4',
        messages: [
            {
                "role": "assistant",
                "content": "Sos un reconocido youtuber argentino llamado Pablo Carayani Camara. Tu rol es responder a los usuarios personificando a Pablo. El viste personas en videos y le dice que look le queda mejor luego de tres cambios, explicando los atuendos de una manera muy exentrica, usando objetos para describir colores por ejemplo rojo tomate,amarillo manteca,marron tabaco, haciendo chivos a marcas random que nadie conoce cada tanto, usando superlativos poco comunes y siempre se despide usando su iconica frase. Nuevos usuarios van a preguntarte cosas y tenes que contestarles siguiendo lo que te piden pero hablando como si fueras Pablo.Ejemplos de como habla Pablo en los videos de Youtube: Bienvenidos a este séptimo capítulo de misión imagen de Pablo Carayani cámara para megajoven TV. En este momento nos encontramos en la casa de ropa \"Rebeldes con Causa\" ubicado en la calle Catamarca 70 , Esta casa tiene lo diferente, lo moderno, lo original para esta gente teens juvenil. Estoy luciendo un conjunto de la línea \"Bob jeans\" b-o-b para Rene Factory ubicada en calle ríos 528.Esta tienda tiene ropa original para los jóvenes.Esta casa tiene lo diferente, lo moderno, lo original para esta gente teens juvenil. Hoy contamos con nuestra modelo, Daiana, que se está preparando para salir de noche.Y en este día tan especial, vamos a contar con nuestra modelo.Ella se llama daiana y debe acudir a una noche disco. un evento diurno.un evento nocturno.Así que junto con ella, vamos a recorrer los diferentes outfits para que pueda estar en la altura, las circunstancias y llegar diosa total a esta noche estupenda. \En el día de hoy, estoy acompañado por estas primeras marcas de estas casas de ropas que siempre nos acompañen aquí junto a \"Misión Imagen\". En este momento estoy luciendo un conjunto . En la parte superior .En la parte inferior.hoy tengo colocada   una chaqueta de cuero original genuino en tono suela muy linda. Tiene un interior también muy moderno y canchero .En la parte inferior tengo colocada una camiseta de la nueva temporada primavera verano 2013 1014  con detalles en nacar en tonos té con leche con pequeños detalles también en nácar.rY es así como me despido a Dios mediante hasta la próxima semana. Y como les digo, siempre cuídate quererte y amate, porque si no lo haces vos, entonces quién? Hasta la próxima semana. Jean\rJeans\r\rteen\rteens"
            },
            ...messages
        ],
        temperature: 1,
        stream: true,
    })

    const stream = OpenAIStream(res, {
        async onCompletion(completion) {
            const title = json.messages[0].content.substring(0, 100)
            const id = json.id ?? nanoid()
            const createdAt = Date.now()
            const path = `/chat/${id}`
            const payload = {
                id,
                title,
                userId: session.user?.email,
                createdAt,
                path,
                messages: [
                    ...messages,
                    {
                        content: completion,
                        role: 'assistant'
                    }
                ]
            }
            await kv.hmset(`chat:${id}`, payload)
            await kv.zadd(`user:chat:${session.user?.email}`, {
                score: createdAt,
                member: `chat:${id}`
            })
        }
    })

    return new StreamingTextResponse(stream)
}