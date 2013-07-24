<?php
	include 'controls/pokerHeader.php';
?>


	Welcome, <?php echo $_SESSION['user']['name'] ?><br>
	<div>This page will show summary results.</div><br>
	<form id="sumStatusForm" action="../pokerSetStatus.php" method="POST" style="position: absolute">
		<input id="sumStatus" name="sumStatus" type="hidden" value="" />
	</form>
	<div id="sumStatus">
		<?php
			if(isset($_SESSION['statusMsg'])){
				$status = $_SESSION['statusMsg'];
				echo $status;
			}
		?>
	</div><br>
	<div id="sumData" style="position: absolute; visibility: hidden"></div>
	<button onclick="parent.location='pokerSessions.php'" type="button">Go to Sessions Page</button>
	<table id="sumSessions">
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
		<tfoot>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td><b>Hours Played:</b></td>
				<td><b>Buy-In:</b></td>
				<td><b>Cash-Out:</b></td>
				<td></td>
				<td><b>$/hour:</b></td>
				<td><b>ROI:</b></td>
			</tr>
		</tfoot>
		<tbody id="sumTableBody"></tbody>
	</table>


<?php
	include 'controls/pokerFooter.php';
?>