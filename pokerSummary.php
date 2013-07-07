<?php
	include 'controls/pokerHeader.php';
?>


	Welcome, <?php echo $_SESSION['user']['name'] ?><br>
	<div>This page will show summary results.</div><br>
	
	<button onclick="parent.location='pokerSessions.php'" type="button">Go to Sessions Page</button>



<?php
	include 'controls/pokerFooter.php';
?>