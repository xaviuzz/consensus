import cors from "cors"
import express from "express"
import i18next from 'i18next'
import Backend from 'i18next-fs-backend'
import i18nextMiddleware from 'i18next-http-middleware'
import changer from "./infrastructure/languageChanger"
import LoginRouter from "./routes/login"

i18next
    .use(Backend)
    .init({
        debug: false,
        initImmediate: false,
        backend: {
            loadPath: __dirname + '/locales/{{lng}}/{{ns}}.json'
        },
        fallbackLng: 'es',
        preload: ['es', 'ca'],
    })


const app = express()
app.use(i18nextMiddleware.handle(i18next))
app.use(cors())
app.use(express.json({ limit: "50mb" }))
app.use(changer)
app.use(LoginRouter)

export default app