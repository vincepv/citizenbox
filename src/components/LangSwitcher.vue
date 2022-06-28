<script>
import { loadLocaleMessages, setI18nLanguage, i18n } from '@/locales/i18n.js'
export default {
    data() {
        return{
            locale: 'en',
        }
    },
    methods: {
        switchLocale() {
            loadLocaleMessages(i18n, this.locale)
            setI18nLanguage(i18n, this.locale)
        }
    }
}
</script>

<template>
    <div>
        <select @change="switchLocale()" v-model="locale">
            <option value="en">English</option>
            <option value="fr">Français</option>
        </select>
    </div>
</template>

// https://translateci.com/vue-i18n-quickstart-guide