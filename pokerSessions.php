<?php
	include 'controls/pokerHeader.php';
?>
	<form id="editSession" action="../pokerEditSession.php" method="POST" style="position: absolute">
		<input id="editRowId" name="editRowId" type="hidden" value="" />
	</form>
	<div id="data" style="position: absolute; visibility: hidden"></div>
	<div id="statusMsg">
		<?php
			if(isset($_SESSION["statusMsg"])){
				$statusMsg = $_SESSION["statusMsg"];
				echo $statusMsg;
			}
		?>
	</div><br>
	<div id="filter">Select a category to filter...<br>
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
		</select>
		<select id="operator" onchange="fillFilterVal()"></select>
		<span id="filterVal"></span>
		<button type="button" onclick="applyFilter()">Apply Filter</button>
		<button type="button" onclick="fillTable(); fillOperator(); fillFilterVal()">Clear Filter</button>
	</div>
	<table id="sessions">
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
		<tbody id="sessTableBody"></tbody>
	</table>
	<button type="button" onclick="parent.location='pokerAddSession.php'">Add Session</button>
	<script>
		$(document).ready(newGetSessions());
		$(document).ready(fillOperator());
		$(document).ready(fillFilterVal());
	</script>
<?php
	include 'controls/pokerFooter.php';
?>