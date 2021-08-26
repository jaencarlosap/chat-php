<?php popen("php -a php-socket.php", "r") ?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Chat Php</title>

	<link rel="stylesheet" href="./css/general.css">
	<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
	<script src="./js/general.js"></script>
</head>

<body>
	<form name="frmChat" id="frmChat">
		<div id="chat-box"></div>
		<input type="text" name="chat-user" id="chat-user" placeholder="Name" class="chat-input" required />
		<input type="text" name="chat-message" id="chat-message" placeholder="Message" class="chat-input chat-message" required />
		<input type="submit" id="btnSend" name="send-chat-message" value="Send">
	</form>
</body>

</html>