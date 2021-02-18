<html>
	<body>
		<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
			Login name: <input type="text" name="user">
			<input type="submit">
		</form>

<?php
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		$user = $_POST['user'];
		if (empty($user)) 
		{
			echo("User name empty");
		} 
		else 
		{
			echo ("username is: " . $user);
		}
	}
?>
	</body>
</html>