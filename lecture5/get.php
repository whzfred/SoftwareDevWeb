<html>
	<head>
		<title>Test</title>
	</head>
	<body>
	<?php 
		$view = ($_GET['view']); 
		
		if($view == "main")
			echo ("Database view");
		else 
			echo ("Other view");		
	?> 
	</body>
</html>