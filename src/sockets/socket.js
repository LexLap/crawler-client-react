const io = require('socket.io-client')

export let socket = io.connect('http://localhost:3030')

socket.on('connected', socket.emit('client-join'), console.log('Socket connected with management server'))

export const createNewTask = (data) =>{
    socket.emit('new-task', data)
}
