import default_icon from '../assets/default_icon.svg';

export default class User {
    constructor (user) {
        this._id = user._id;
        this.fullname = user.fullname;
        this.nickname = user.nickname;
        this.email = user.email;
        this.avatar = user.avatar || default_icon;
        this.messageList = [];
    }

    getMessageList() {
        return this.messageList;
    }

    addNewMessage(msg) {
        this.messageList.push(msg);
    }
}