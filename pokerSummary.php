<?php
	include 'controls/pokerHeader.php';
?>

	<div id="sumData" style="position: absolute; visibility: hidden"></div>
	<div id="sumStatus">
		<?php
			if(isset($_SESSION["statusMsg"])){
				$statusMsg = $_SESSION["statusMsg"];
				echo $statusMsg;
			}
		?>
	</div><br>
	Welcome, <?php echo $_SESSION['user']['name'] ?><br>
	<div>This page will show summary results.</div><br>

	<button onclick="parent.location='pokerSessions.php'" type="button">Go to Sessions Page</button>
	
	<table id="summary" style="display:none">
		<thead>
			<tr>
				<th></th>
				<th>Start Time</th>
				<th>Location</th>
				<th>Game Type</th>
				<th>Limits</th>
				<th>Duration</th>
				<th>Buy In</th>
				<th>Cash Out</th>
				<th>R/T</th>
				<th>Place</th>
				<th>Rate</th>
				<th>Return</th>
				<th>Live/Online</th>
				<th>Notes</th>
			</tr>
		</thead>
		<tbody id="sumTableBody"></tbody>
	</table>
	
	<table id="totals">
		<thead>
			<tr>
				<th>totEarn</th>
			</tr>
		</thead>
		<tbody id="totEarn"></tbody>
		<tbody id="avgEarn"></tbody>
	</table>
	
	<table id="totalsLive">
		<thead>
			<tr>
				<th>totEarnLive</th>
			</tr>
		</thead>
		<tbody id="totEarnLive"></tbody>
		<tbody id="avgEarnLive"></tbody>
		<tbody id="totHrsLive"></tbody>
	</table>
	
	<table id="totalsOnline">
		<thead>
			<tr>
				<th>totEarnOnline</th>
			</tr>
		</thead>
		<tbody id="totEarnOnline"></tbody>
		<tbody id="avgEarnOnline"></tbody>
		<tbody id="totHrsOnline"></tbody>
	</table>
	
	<table id="totalsCash">
		<thead>
			<tr>
				<th>totEarnCash</th>
			</tr>
		</thead>
		<tbody id="totEarnCash"></tbody>
		<tbody id="avgEarnCash"></tbody>
		<tbody id="totHrsCash"></tbody>
	</table>
	
	<table id="totalsTourney">
		<thead>
			<tr>
				<th>totEarnTour</th>
			</tr>
		</thead>
		<tbody id="totEarnTour"></tbody>
		<tbody id="avgEarnTour"></tbody>
		<tbody id="totHrsTour"></tbody>
	</table>
	
	<script>
		$(document).ready(getSessionsAndSum());
	</script>

<?php
	include 'controls/pokerFooter.php';
?>