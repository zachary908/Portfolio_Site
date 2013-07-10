<?php
	include "controls/pokerHeader.php";
	$_SESSION['editRowId'] = $_POST['editRowId'];
?>

	<div class="modalHeaderWrap">
		<div class="modalHeader">
			Edit Session
		</div>
	</div>
	
	<!-------------------------------------->
	<div class="modalRow">	
		<div class="modalLabelWrap">
			<div class="modalLabel">Start Date:</div>
		</div>
		<input type="text" id="datepickerEdit" />
		<script>
			$("#datepickerEdit").datepicker();
			$("#datepickerEdit").datepicker("setDate", new Date());
		</script>
	</div>
	<!-------------------------------------->
	<div class="modalRow">	
		<div class="modalLabelWrap">
			<div class="modalLabel">Start Time:</div>
		</div>
		<!-- ROUNDED TO NEAREST 5 MIN -->
		<select id="editStHour">
			<option name="editStHourOption">1</option>
			<option name="editStHourOption">2</option>
			<option name="editStHourOption">3</option>
			<option name="editStHourOption">4</option>
			<option name="editStHourOption">5</option>
			<option name="editStHourOption">6</option>
			<option name="editStHourOption">7</option>
			<option name="editStHourOption">8</option>
			<option name="editStHourOption">9</option>
			<option name="editStHourOption">10</option>
			<option name="editStHourOption">11</option>
			<option name="editStHourOption">12</option>
		</select>
		<span>:</span>
		<select id="editStMin">
			<option name="editStMinOption">00</option>
			<option name="editStMinOption">05</option>
			<option name="editStMinOption">10</option>
			<option name="editStMinOption">15</option>
			<option name="editStMinOption">20</option>
			<option name="editStMinOption">25</option>
			<option name="editStMinOption">30</option>
			<option name="editStMinOption">35</option>
			<option name="editStMinOption">40</option>
			<option name="editStMinOption">45</option>
			<option name="editStMinOption">50</option>
			<option name="editStMinOption">55</option>
		</select>
		<select id="editStAmPm">
			<option name="editStAmPmOption">am</option>
			<option name="editStAmPmOption">pm</option>
		</select>
		<!-- FUNCTION THAT GETS CURRENT TIME AND SETS THE SELECTED START HRS/MIN/AMPM -->
		<!--
		<script>
			editGetTime('editStHourOption', 'editStMinOption', 'editStAmPmOption');
		</script>
		-->
	</div>
	<!-------------------------------------->
	<div class="modalRow">	
		<div class="modalLabelWrap">
			<div class="modalLabel">End Date:</div>
		</div>
		<input type="text" id="datepickerEdit1" />
		<script>
			$("#datepickerEdit1").datepicker();
			$("#datepickerEdit1").datepicker("setDate", new Date());
		</script>
	</div>
	<!-------------------------------------->
	<div class="modalRow">	
		<div class="modalLabelWrap">
			<div class="modalLabel">End Time:</div>
		</div>
		<select id="endHour">
			<option name="endHrOption">1</option>
			<option name="endHrOption">2</option>
			<option name="endHrOption">3</option>
			<option name="endHrOption">4</option>
			<option name="endHrOption">5</option>
			<option name="endHrOption">6</option>
			<option name="endHrOption">7</option>
			<option name="endHrOption">8</option>
			<option name="endHrOption">9</option>
			<option name="endHrOption">10</option>
			<option name="endHrOption">11</option>
			<option name="endHrOption">12</option>
		</select>
		<span>:</span>
		<select id="endMin">
			<option name="endMinOption">00</option>
			<option name="endMinOption">05</option>
			<option name="endMinOption">10</option>
			<option name="endMinOption">15</option>
			<option name="endMinOption">20</option>
			<option name="endMinOption">25</option>
			<option name="endMinOption">30</option>
			<option name="endMinOption">35</option>
			<option name="endMinOption">40</option>
			<option name="endMinOption">45</option>
			<option name="endMinOption">50</option>
			<option name="endMinOption">55</option>
		</select>
		<select id="endAmPm">
			<option name="endAmPmOption">am</option>
			<option name="endAmPmOption">pm</option>
		</select>
		<!--
		<script>
			getTime('endHrOption', 'endMinOption', 'endAmPmOption');
		</script>
		-->
	</div>
	<!-------------------------------------->
	<div class="modalRow">
		<div class="modalLabelWrap">
			<div class="modalLabel">Location:</div>
		</div>
		<!--
		<select id="locationOptions" style="width:150px" onchange="showLocType()"></select>
		
		<span onclick="showModal2('addLocationModal', 'addLocName')" style="cursor:pointer">Add Location</span>
		-->
	</div>
	<!-------------------------------------->
	<div class="modalRow">
		<div class="modalLabelWrap">
			<div class="modalLabel">Location Type:</div>
		</div>
		<!--
		<script>$(document).ready(function(){
			showLocType();
			});
		</script>
		
		<div id="locTypeVal"></div>
		-->
	</div>
	<!-------------------------------------->
	<div class="modalRow">
		<div class="modalLabelWrap">
			<div class="modalLabel">Game Type:</div>
		</div>
		<select id="editGameOptions" style="width:150px"></select>
		
		<!--
		<span onclick="showModal2('addGameModal', 'addGame')" style="cursor:pointer">Add Game Type</span>
		-->
	</div>
	<!-------------------------------------->
	<div class="modalRow">
		<div class="modalLabelWrap">
			<div class="modalLabel" style="visibility:hidden">Game Type:</div>
		</div>
		<div>
			<!--
			<form name="ringTourType">
				<input type="radio" name="ringTourRadio" id="ring" value=0 checked="checked">Ring
				<input type="radio" name="ringTourRadio" id="tourney" value=1>Tournament
			</form>
			-->
		</div>
	</div>
	<!-------------------------------------->
	<div class="modalRow">
		<div class="modalLabelWrap">
			<div class="modalLabel">Limits:</div>
		</div>
		<select id="editLimitOptions" style="width:150px"></select>
		
		<!--
		<span onclick="showModal2('addLimitModal', 'addLimit')" style="cursor:pointer">Add Limit</span>
		-->
	</div>
	<!-------------------------------------->
	<div class="modalRow">
		<div class="modalLabelWrap">
			<div class="modalLabel">Buy In:</div>
		</div>
		<span>$</span>
		<!--
		<input id="buyin" type="text" style="width:138px" onkeypress="checkEnter(event, 'addSession');" />
		-->
	</div>
	<!-------------------------------------->
	<div class="modalRow">
		<div class="modalLabelWrap">
			<div class="modalLabel">Cash Out:</div>
		</div>
		<span>$</span>
		<!--
		<input id="cashout" type="text" style="width:138px" onkeypress="checkEnter(event, 'addSession');" />
		-->
	</div>
	<!-------------------------------------->
	<div class="modalRow">
		<div class="modalLabelWrap">
			<div class="modalLabel">Place:</div>
		</div>
		<!--
		<input id="place" type="text" onkeypress="checkEnter(event, 'addSession');" />
		-->
	</div>
	<!-------------------------------------->
	<div id='editSessErrLbl'></div><br>
	<!--
	<button class="modalBtn" onclick="addSession()">Submit</button>	-->
	<button class="modalBtn" onclick="$('#status').val('Changes cancelled.'); $('#statusForm').submit()">Cancel</button>

	<!-------------------------------------->
	<script>
		editGetVals();
		getList("game", "editGameOptions");
		getList("limit", "editLimitOptions");
	</script>

<?php
	include "controls/pokerFooter.php";
?>