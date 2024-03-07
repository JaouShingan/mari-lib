import './style.scss'
import Form from './form'
import Search from './search'
import Select from './select'

export default {
  install (app, options) {
    app.component('MForm', Form)
    app.component('MSearch', Search)
    app.component('MSelect', Select)
  }
}

export { Form, Search, Select }
