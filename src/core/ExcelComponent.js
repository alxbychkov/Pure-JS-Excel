import { DomListener } from '@core/DomListener'

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.store = options.store
        this.emitter = options.emitter
        this.subscribe = options.subscribe || []
        this.unsubscribers = []
        // this.storeSub = null
        this.prepare()
    }
    // Настраиваем наш компонент до init
    prepare() {}
    // Возвращает шаблон компонента
    toHTML() {
        return ''
    }
    // Уведомляем слушателей про события event
    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }
    // Подписываемся на события event
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubscribers.push(unsub)
    }
    $dispatch(action) {
        this.store.dispatch(action)
    }

    // Сюда приходят изменения по тем полям на которые мы подписались
    storeChanged() {}
    isWatching(key) {
        return this.subscribe.includes(key)
    }
    // $subscribe(fn) {
    //     this.storeSub = this.store.subscribe(fn)
    // }
    // Инициализируем компонент, добавляем DOM слушателей
    init() {
        this.initDOMListeners()
    }
    // Удаляем компонент, чистим слушателей
    destroy() {
        this.removeDOMListeners()
        this.unsubscribers.forEach(unsub=>unsub())
        // this.storeSub.unsubscrib()
    }
}
