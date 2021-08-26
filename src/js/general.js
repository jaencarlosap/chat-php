$(document).ready(function () {
  function showMessage(messageHTML) {
    $('#chat-box').append(messageHTML);
  }

  const websocket = new WebSocket('ws://localhost:8090/php-socket.php');

  websocket.onopen = function (event) {
    showMessage(
      "<div class='chat-connection-ack'>Connection is established!</div>"
    );
  };

  websocket.onmessage = function (event) {
    let Data = JSON.parse(event.data);
    showMessage(
      "<div class='" + Data.message_type + "'>" + Data.message + '</div>'
    );
    $('#chat-message').val('');
  };

  websocket.onerror = function (event) {
    showMessage("<div class='error'>Problem due to some Error</div>");
  };

  websocket.onclose = function (event) {
    showMessage("<div class='chat-connection-ack'>Connection Closed</div>");
  };

  $('#frmChat').on('submit', function (event) {
    event.preventDefault();
    $('#chat-user').attr('type', 'hidden');

    websocket.send(
      JSON.stringify({
        chat_user: $('#chat-user').val(),
        chat_message: $('#chat-message').val(),
      })
    );
  });
});
