export default class Message {
    constructor (content, from, at) {
        this.content = content;
        this.from = from;
        this.timestamp = at;
    }

    getContent() {
        return this.content;
    }

    getFrom() {
        return this.from;
    }

    getTimestamp () {
        return this.timestamp;
    }
}
