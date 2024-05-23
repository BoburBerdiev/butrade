import {initReactI18next} from "react-i18next";
import detector from 'i18next-browser-languagedetector'
import i18next from "i18next";
import uz from './uz.json'
import ru from './ru.json'


i18next.use(initReactI18next).use(detector).init({
        fallbackLng: 'ru',
        detector:{order:['cookie','localstorage'],caches:['cookie']},
        supportedLngs: ['ru', 'uz' ],
        interpolation: {
                escapeValue: false
        },
        resources: {
                ru,
                uz,
        }
})