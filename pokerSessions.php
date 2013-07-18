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
			<option value=1>Start Time</option>
			<option value=2>Location</option>
			<option value=3>Game Type</option>
			<option value=4>Limit</option>
			<option value=5>Duration</option>
			<option value=6>Buy-In</option>
			<option value=7>Cash Out</option>
			<option value=8>Ring/Tournament</option>
			<option value=9>Place</option>
			<option value=10>Rate</option>
			<option value=11>Return</option>
		</select>
		<select id="operator" onchange="fillFilterVal()"></select>
		<span id="filterVal"></span>
		<button type="button" onclick="applyFilter()">Apply Filter</button>
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
	<button type="button" onclick="showTourneys()">Show tourneys</button>
	<button type="button" onclick="fillTable()">Clear Filter</button>
	<script>
		$(document).ready(newGetSessions());
		$(document).ready(fillOperator());
		$(document).ready(fillFilterVal());
	</script>
<?php
	include 'controls/pokerFooter.php';
?>