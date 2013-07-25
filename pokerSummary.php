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
	<button onclick="calc('return', 'sum', 'sumTableBody', 'totBody');">calc tot</button>
	
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
	<button onclick="applyFilter('live', 'IS', 'Live'); calc('return', 'sum', 'sumTableBody', 'totBodyLive'); fillTable();">calc tot live</button>
	
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
	<button onclick="applyFilter('live', 'IS', 'Online'); calc('return', 'sum', 'sumTableBody', 'totBodyOnline'); fillTable();">calc tot online</button>
	
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
	<button onclick="applyFilter('ringTour', 'IS', 'Ring'); calc('return', 'sum', 'sumTableBody', 'totBodyCash'); fillTable();">calc tot cash</button>
	
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
	<button onclick="applyFilter('ringTour', 'IS', 'Tournament'); calc('return', 'sum', 'sumTableBody', 'totBodyTour'); fillTable();">calc tot tour</button>
	
	<script>
		getSessions('return', 'sum', 'sumTableBody', 'totBody', function calc(cat, oper, srcBody, retBody){
			var colNum = 0;
			switch(cat){
				case "start":
					colNum = 1;
					break;
				case "location":
					colNum = 2;
					break;
				case "gametype":
					colNum = 3;
					break;
				case "limit":
					colNum = 4;
					break;
				case "duration":
					colNum = 5;
					break;
				case "buyin":
					colNum = 6;
					break;
				case "cashout":
					colNum = 7;
					break;
				case "ringTour":
					colNum = 8;
					break;
				case "place":
					colNum = 9;
					break;
				case "rate":
					colNum = 10;
					break;
				case "return":
					colNum = 11;
					break;
				case "live":
					colNum = 12;
					break;
			}
			
			var srcRows;
			srcRows = document.getElementById(srcBody).rows;
			//retRows = document.getElementById(retBody).rows
			var srcCells = new Array();
			var result = 0;
			if(oper = 'sum'){
				for(var i=0; i<srcRows.length; i++){
					srcCells = srcRows[i].cells;
					result = result + parseFloat(srcCells[colNum].textContent);
				}
			}
			
			var dataString = "<tr><td>" + result + "</td></tr>";
			
			document.getElementById(retBody).innerHTML = dataString;

		});
	</script>

<?php
	include 'controls/pokerFooter.php';
?>