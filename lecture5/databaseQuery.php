<?php		
	function connectToDatabase()
	{
		$servername = "localhost";
		$username = "user";
		$password = "pass";
		$database = "database";
		$connect = new mysqli($servername, $username, $password, $database);

		if ($connect->connect_error) {
			die("Connection failed: " . $DatabaseConnection->connect_error);
		}	
		return $connect;		
	}

	$databaseConnection = connectToDatabase();
	
	$sql = "SELECT temperature From measurement;";
	$result = $databaseConnection->query($sql);
	
	while ($row = $result->fetch_row()) 
	{
        echo($row[0] . "<br>");
	}	
	
	$result->close();
?>