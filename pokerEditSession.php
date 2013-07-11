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
		<select id="editEndHour">
			<option name="editEndHrOption">1</option>
			<option name="editEndHrOption">2</option>
			<option name="editEndHrOption">3</option>
			<option name="editEndHrOption">4</option>
			<option name="editEndHrOption">5</option>
			<option name="editEndHrOption">6</option>
			<option name="editEndHrOption">7</option>
			<option name="editEndHrOption">8</option>
			<option name="editEndHrOption">9</option>
			<option name="editEndHrOption">10</option>
			<option name="editEndHrOption">11</option>
			<option name="editEndHrOption">12</option>
		</select>
		<span>:</span>
		<select id="editEndMin">
			<option name="editEndMinOption">00</option>
			<option name="editEndMinOption">05</option>
			<option name="editEndMinOption">10</option>
			<option name="editEndMinOption">15</option>
			<option name="editEndMinOption">20</option>
			<option name="editEndMinOption">25</option>
			<option name="editEndMinOption">30</option>
			<option name="editEndMinOption">35</option>
			<option name="editEndMinOption">40</option>
			<option name="editEndMinOption">45</option>
			<option name="editEndMinOption">50</option>
			<option name="editEndMinOption">55</option>
		</select>
		<select id="editEndAmPm">
			<option name="editEndAmPmOption">am</option>
			<option name="editEndAmPmOption">pm</option>
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
		<select id="editLocationOptions" style="width:150px" onchange="showLocType('editLocTypeVal')"></select>
		<!--
		<script>getLocList("editLocationOptions")</script>
		<span onclick="showModal2('addLocationModal', 'addLocName')" style="cursor:pointer">Add Location</span>
		-->
	</div>
	<!-------------------------------------->
	<div class="modalRow">
		<div class="modalLabelWrap">
			<div class="modalLabel">Location Type:</div>
		</div>
		<div id="editLocTypeVal"></div>
		<script>$(document).ready(function(){
			showLocType('editLocTypeVal');
			});
		</script>

	</div>
	<!-------------------------------------->
	<div class="modalRow">
		<div class="modalLabelWrap">
			<div class="modalLabel">Game Type:</div>
		</div>
		<select id="editGameOptions" style="width:150px"></select>
		<!--
		<script>getList("game", "editGameOptions");</script>
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
		<script>getList("limit", "editLimitOptions");</script>
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
	</script>

<?php
	include "controls/pokerFooter.php";
?>