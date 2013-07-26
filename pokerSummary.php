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
		<tr id="totEarn"></tr>
		<tr id="avgEarn"></tr>
		<tr id="totHrs"></tr>
		<tr id="avgHrs"></tr>
		<tr id="avgRate"></tr>
	</table>
	
	<table id="totalsLive">
		<thead>
			<tr>
				<th>totEarnLive</th>
			</tr>
		</thead>
		<tr id="totEarnLive"></tr>
		<tr id="avgEarnLive"></tr>
		<tr id="totHrsLive"></tr>
		<tr id="avgHrsLive"></tr>
		<tr id="avgRateLive"></tr>
	</table>
	
	<table id="totalsOnline">
		<thead>
			<tr>
				<th>totEarnOnline</th>
			</tr>
		</thead>
		<tr id="totEarnOnline"></tr>
		<tr id="avgEarnOnline"></tr>
		<tr id="totHrsOnline"></tr>
		<tr id="avgHrsOnline"></tr>
		<tr id="avgRateOnline"></tr>
	</table>
	
	<table id="totalsCash">
		<thead>
			<tr>
				<th>totEarnCash</th>
			</tr>
		</thead>
		<tr id="totEarnCash"></tr>
		<tr id="avgEarnCash"></tr>
		<tr id="totHrsCash"></tr>
		<tr id="avgHrsCash"></tr>
		<tr id="avgRateCash"></tr>
	</table>
	
	<table id="totalsTourney">
		<thead>
			<tr>
				<th>totEarnTour</th>
			</tr>
		</thead>
		<tr id="totEarnTour"></tr>
		<tr id="avgEarnTour"></tr>
		<tr id="totHrsTour"></tr>
		<tr id="avgHrsTour"></tr>
		<tr id="avgRateTour"></tr>
	</table>
	
	<script>
		$(document).ready(getSessionsAndSum());
	</script>

<?php
	include 'controls/pokerFooter.php';
?>