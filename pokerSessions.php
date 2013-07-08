<?php
	include 'controls/pokerHeader.php';
?>
	
	<div id="statusMsg">
		<?php
			if(isset($_SESSION["statusMsg"])){
				$statusMsg = $_SESSION["statusMsg"];
				echo $statusMsg;
			}
		?>
	</div><br>
	<table>
		<thead>
			<tr>
				<th></th>
				<th colspan="2">Start Time</th>
				<th>Location</th>
				<th>Game Type</th>
				<th>Limits</th>
				<th>Duration</th>
				<th>Buy In</th>
				<th>Cash Out</th>
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
		<tbody id="sessTableBody">
			<script>
				getSessions();
			</script>
		</tbody>
	</table>
	
	<button type="button" onclick="parent.location='pokerAddSession.php'">Add Session</button>
	<br>a table of sessions will be shown here.<br>
	
<?php
	include 'controls/pokerFooter.php';
?>