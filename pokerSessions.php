<?php
	include 'controls/pokerHeader.php';
?>
	<form id="sessStatusForm" action="../pokerSetStatus.php" method="POST" style="position: absolute">
		<input id="status" name="status" type="hidden" value="" />
	</form>
	<form id="editSession" action="../pokerEditSession.php" method="POST" style="position: absolute">
		<input id="editRowId" name="editRowId" type="hidden" value="" />
	</form>
	<input type="button" onclick="parent.location='pokerSummary.php'" value="Summary" >
	<div id="sessData" style="position: absolute; visibility: hidden"></div>
	<div id="sessStatus">
		<?php
			if(isset($_SESSION['statusMsg'])){
				$status = $_SESSION['statusMsg'];
				echo $status;
			}
		?>
	</div><br>
	<div id="filter" onkeypress="checkEnter(event, 'applyFilter')">Select a category to filter...<br>
		<select id="category" onchange="fillOperator(); fillFilterVal()">
			<option value="start">Start Time</option>
			<option value="location">Location</option>
			<option value="gameType">Game Type</option>
			<option value="limit">Limit</option>
			<option value="duration">Duration</option>
			<option value="buyin">Buy-In</option>
			<option value="cashout">Cash Out</option>
			<option value="ringTour">Ring/Tournament</option>
			<option value="place">Place</option>
			<option value="rate">Rate</option>
			<option value="return">Return</option>
			<option value="live">Live/Online</option>
		</select>
		<select id="operator" onchange="fillFilterVal()"></select>
		<span id="filterVal"></span>
		<button type="button" onclick="applyFilter()">Apply Filter</button>
		<button type="button" onclick="fillTable(); fillOperator(); fillFilterVal()">Clear Filter</button>
		<div id="sessFilterErr"></div><br>
	</div>
	<table id="sessTbl">
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
		<tbody id="sessTableBody"></tbody>
	</table>
	<button type="button" onclick="parent.location='pokerAddSession.php'">Add Session</button>
	<script>
		$(document).ready(getSessions());
		$(document).ready(fillOperator());
		$(document).ready(fillFilterVal());
	</script>
<?php
	include 'controls/pokerFooter.php';
?>