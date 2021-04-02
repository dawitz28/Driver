'use strict';

const io = require('socket.io-client');

const host = 'http://localhost:3000';

const socket = io.connect(host);
const caps = io.connect(`${host}/caps`);

socket.on('pickup', payload => {
    setTimeout(() => {
        console.log('itemId', payload.payload.itemId, 'pickup');
        payload.event='in-transit'
    socket.emit('in-transit', payload);
    },1000)
});

socket.on('pickup', payload => {
    setTimeout(() => {
  console.log('itemId', payload.payload.itemId, 'delivered');
  payload.event='delivered'
socket.emit('delivered', payload,);
},3000)
});


/// driver doesn't talk to vendor at all
