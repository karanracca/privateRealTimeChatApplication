
module.exports.getOnlineUsers = (io) => {
    let onlineUsers = [];
    for (let key in io.sockets.sockets) {
        onlineUsers.push(io.sockets.sockets[key].user);
    }
    return onlineUsers;
}

module.exports.findOnlineUser = (io, userToFind) => {
    for (let key in io.sockets.sockets) {
        if (io.sockets.sockets[key].user._id === userToFind._id) {
            return io.sockets.sockets[key]
        }
    }
    return null;
}