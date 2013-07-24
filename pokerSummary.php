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
	
	<table id="summary">
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
				<th style="display:none">R/T</th>
				<th>Place</th>
				<th>Rate</th>
				<th>Return</th>
				<th style="display:none">Live/Online</th>
				<th>Notes</th>
			</tr>
		</thead>
		<tfoot>
			<tr>
				<td>Hours Played:</td>
				<td>$/hour:</td>
				<td>Buy-In:</td>
				<td>Cash-Out:</td>
				<td>ROI:</td>
			</tr>
		</tfoot>
		<tbody id="sumTableBody"></tbody>
	</table>

	<script>
		$(document).ready(getSessions());
	</script>

<?php
	include 'controls/pokerFooter.php';
?>