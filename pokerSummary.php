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

	<!-- THIS HIDDEN TABLE HOLDS FILTERED DATA -->
	<table id="summary" class="sumTotTbl inactive">
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
		
	<div>
		<button onclick="parent.location='pokerSessions.php'" type="button">Go to Sessions Page</button>
		
		<select id="tblSelect" onchange="showSumTbl()">
			<option selected="true">Overall</option>
			<option>Live</option>
			<option>Online</option>
			<option>Cash</option>
			<option>Tournament</option>
		</select>
	</div>
	
	<div class="sumTblGraphWrap floatingFix">
		<div class="sumTblWrap">
			<table class="sumTotTbl active" id="totals" name="sumTotTbl">
				<tbody>
					<tr>
						<th>Overall Totals</th>
					</tr>
					<tr>
						<td><b>Total Earnings</b></td>
					</tr>
					<tr>
						<td id="totEarn"></td>
					</tr>
					<tr>
						<td><b>Tot. Hours Played</b></td>
					</tr>
					<tr>
						<td id="totHrs"></td>	
					</tr>
				</tbody>
			</table>
			
			<table class="sumTotTbl inactive" id="totalsLive" name="sumTotTbl">
				<tbody>
					<tr>
						<th>Live Totals</th>
					</tr>
					<tr>
						<td><b>Total Live Earnings</b></td>
					</tr>
					<tr>
						<td id="totEarnLive"></td>
					</tr>
					<tr>
						<td><b>Tot. Hrs. Played Live</b></td>
					</tr>
					<tr>
						<td id="totHrsLive"></td>
					</tr>
				</tbody>
			</table>
			
			<table class="sumTotTbl inactive" id="totalsOnline" name="sumTotTbl">
				<tbody>
					<tr>
						<th>Online Totals</th>
					</tr>
					<tr>
						<td><b>Total Online Earnings</b></td>
					</tr>
					<tr>
						<td id="totEarnOnline"></td>
					</tr>
					<tr>
						<td><b>Tot. Hrs. Played Online</b></td>
					</tr>
					<tr>
						<td id="totHrsOnline"></td>
					</tr>
				</tbody>
			</table>
			
			<table class="sumTotTbl inactive" id="totalsCash" name="sumTotTbl">
				<tbody>
					<tr>
						<th>Cash Totals</th>
					</tr>
					<tr>
						<td><b>Total Cash Game Earnings</b></td>
					</tr>
					<tr>
						<td id="totEarnCash"></td>
					</tr>
					<tr>
						<td><b>Tot. Hrs. Played in Cash Games</b></td>
					</tr>
					<tr>
						<td id="totHrsCash"></td>
					</tr>
				</tbody>
			</table>
			
			<table class="sumTotTbl inactive" id="totalsTourney" name="sumTotTbl">
				<tbody>
					<tr>
						<th>Tournament Totals</th>
					</tr>
					<tr>
						<td><b>Total Tournament Earnings</b></td>
					</tr>
					<tr>
						<td id="totEarnTour"></td>
					</tr>
					<tr>
						<td><b>Tot. Hrs. Played in Tournaments</b></td>
					</tr>
					<tr>
						<td id="totHrsTour"></td>
					</tr>
				</tbody>
			</table>
		</div> <!-- END sumTblWrap -->
		
		<div id="sumGraphWrap" style="float: left">
			<canvas id="cvs1"  width="500" height="250"></canvas>
		</div><!-- END sumGraphWrap -->
	</div><!-- END sumTblGraphWrap -->
	
	<div class="sumTblGraphWrap floatingFix">
		<div class="sumTblWrap">
			<table class="sumAvgTbl active" id="avgs" name="sumAvgTbl">
				<tbody>
					<tr>
						<th>Overall Averages</th>
					</tr>
					<tr>
						<td><b>Avg. Earnings Per Session</b></td>
					</tr>
					<tr>
						<td id="avgEarn"></td>
					</tr>
					<tr>
						<td><b>Avg. Hours Per Session</b></td>
					</tr>
					<tr>
						<td id="avgHrs"></td>
					</tr>
					<tr>
						<td><b>Avg. Rate Per Session</b></td>
					</tr>
					<tr>
						<td id="avgRate"></td>
					</tr>
				</tbody>
			</table>
			
			<table class="sumAvgTbl inactive" id="avgsLive" name="sumAvgTbl">
				<tbody>
					<tr>
						<th>Live Averages</th>
					</tr>
					<tr>
						<td><b>Avg. Earnings Per Live Session</b></td>
					</tr>
					<tr>
						<td id="avgEarnLive"></td>
					</tr>
					<tr>
						<td><b>Avg. Hrs. Played Per Live Session</b></td>
					</tr>
					<tr>
						<td id="avgHrsLive"></td>
					</tr>
					<tr>
						<td><b>Avg. Rate Per Live Session</b></td>
					</tr>
					<tr>
						<td id="avgRateLive"></td>
					</tr>
				</tbody>
			</table>
			
			<table class="sumAvgTbl inactive" id="avgsOnline" name="sumAvgTbl">
				<tbody>
					<tr>
						<th>Online Averages</th>
					</tr>
					<tr>
						<td><b>Avg. Earnings Per Online Session</b></td>
					</tr>
					<tr>
						<td id="avgEarnOnline"></td>
					</tr>
					<tr>
						<td><b>Avg. Hrs. Played Per Online Session</b></td>
					</tr>
					<tr>
						<td id="avgHrsOnline"></td>
					</tr>
					<tr>
						<td><b>Avg. Rate Per Online Session</b></td>
					</tr>
					<tr>
						<td id="avgRateOnline"></td>
					</tr>
				</tbody>
			</table>
			
			<table class="sumAvgTbl inactive" id="avgsCash" name="sumAvgTbl">
				<tbody>
					<tr>
						<th>Cash Averages</th>
					</tr>
					<tr>
						<td><b>Avg. Earnings Per Cash Game Session</b></td>
					</tr>
					<tr>
						<td id="avgEarnCash"></td>
					</tr>
					<tr>
						<td><b>Avg. Hrs. Played Per Cash Game Session</b></td>
					</tr>
					<tr>
						<td id="avgHrsCash"></td>
					</tr>
					<tr>
						<td><b>Avg. Rate Per Cash Game Session</b></td>
					</tr>
					<tr>
						<td id="avgRateCash"></td>
					</tr>
				</tbody>
			</table>
			
			<table class="sumAvgTbl inactive" id="avgsTourney" name="sumAvgTbl">
				<tbody>
					<tr>
						<th>Tournament Averages</th>
					</tr>
					<tr>
						<td><b>Avg. Earnings Per Tournament</b></td>
					</tr>
					<tr>
						<td id="avgEarnTour"></td>
					</tr>
					<tr>
						<td><b>Avg. Hrs. Played Per Tournament</b></td>
					</tr>
					<tr>
						<td id="avgHrsTour"></td>
					</tr>
					<tr>
						<td><b>Avg. Rate Per Tournament</b></td>
					</tr>
					<tr>
						<td id="avgRateTour"></td>
					</tr>
				</tbody>
			</table>
		</div><!-- END sumAvgTblWrap -->
		
		<div id="sumGraphWrap">
			<canvas id="cvs2"  width="500" height="250"></canvas>
		</div><!-- END sumGraphWrap -->
	</div><!-- END sumTblGraphWrap -->
	
	<script>
		$(document).ready(getSessionsAndSum());
	</script>

<?php
	include 'controls/pokerFooter.php';
?>