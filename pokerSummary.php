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
		<tbody id="totBody">
			<tr>
				<td id="totEarn"></td>
			</tr>
		</tbody>
	</table>
	<button onclick="$(document).ready(calc('return', 'sum', 'sumTableBody', 'totBody'));">calc tot</button>
	
	<table id="totalsLive">
		<thead>
			<tr>
				<th>totEarnLive</th>
			</tr>
		</thead>
		<tbody id="totBodyLive">
			<!-- <td id="totEarnLive"></td> -->
		</tbody>
	</table>
	<button onclick="applyFilter('live', 'IS', 'Live'); $(document).ready(calc('return', 'sum', 'sumTableBody', 'totBodyLive')); fillTable();">calc tot live</button>
	
	<table id="totalsOnline">
		<thead>
			<tr>
				<th>totEarnOnline</th>
			</tr>
		</thead>
		<tbody id="totBodyOnline">
			<!-- <td id="totEarnOnline"></td> -->
		</tbody>
	</table>
	<button onclick="applyFilter('live', 'IS', 'Online'); $(document).ready(calc('return', 'sum', 'sumTableBody', 'totBodyOnline')); fillTable();">calc tot online</button>
	
	<table id="totalsCash">
		<thead>
			<tr>
				<th>totEarnCash</th>
			</tr>
		</thead>
		<tbody id="totBodyCash">
			<!-- <td id="totEarnCash"></td> -->
		</tbody>
	</table>
	<button onclick="applyFilter('ringTour', 'IS', 'Ring'); $(document).ready(calc('return', 'sum', 'sumTableBody', 'totBodyCash')); fillTable();">calc tot cash</button>
	
	<table id="totalsTourney">
		<thead>
			<tr>
				<th>totEarnTour</th>
			</tr>
		</thead>
		<tbody id="totBodyTour">
			<!-- <td id="totEarnTour"></td> -->
		</tbody>
	</table>
	<button onclick="applyFilter('ringTour', 'IS', 'Tournament'); $(document).ready(calc('return', 'sum', 'sumTableBody', 'totBodyTour')); fillTable();">calc tot tour</button>
	
	<script>
		$(document).ready(getSessions());
	</script>
	<script>
		//$(document).ready(calc('return', 'sum', 'sumTableBody', 'totBody'));
	</script>

<?php
	include 'controls/pokerFooter.php';
?>