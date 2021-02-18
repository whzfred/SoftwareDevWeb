<?php
	$servername = "localhost";
	$username = "user";
	$password = "pass";

	$DatabaseConnection = new mysqli($servername, $username, $password);

	if ($DatabaseConnection->connect_error) {
		die("Connection failed: " . $DatabaseConnection->connect_error);
	}
	echo "Connected successfully";
?>