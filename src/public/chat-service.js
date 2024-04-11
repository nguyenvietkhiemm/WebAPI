const socket = io();

const name = prompt("Tên: ")
const DOMChatForm = document.querySelector('#chat-form');
const DOMChatMess = document.querySelector('#chat-mess');

DOMChatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const message = DOMChatMess.value;
  socket.emit('on-chat', { message, name });
  DOMChatMess.value = '';
});

const DOMMessenger = document.querySelector('#messenger');
socket.on('user-chat', (data) => {
  const chatItem = document.createElement('li');
  chatItem.textContent =  `${data.name}: ${data.message}`;
  DOMMessenger.appendChild(chatItem);
})