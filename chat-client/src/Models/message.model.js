export default class Message {
    constructor (content, from, at, read) {
        this.content = content;
        this.from = from;
        this.timestamp = at;
        this.read = read
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
