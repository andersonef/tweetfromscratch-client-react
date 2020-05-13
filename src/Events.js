const Events = {
    eventList: {},

    on(event, callback) {
        if (!this.eventList[event]) {
            this.eventList[event] = []
        }
        this.eventList[event].push(callback)
    },

    trigger(event, ...args) {
        if (!this.eventList[event]) {
            return
        }
        this.eventList[event].forEach((callback) => {
            callback.call(null, args)
        })
    }
}

export default Events