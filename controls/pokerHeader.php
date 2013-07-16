<html>
<head>
	<title>My Poker Page</title>
	<script src="../js/jquery-1.9.1.js"></script>
	<script src="../js/jquery-ui-1.10.3.custom.js"></script>
	<script src="../scripts/pokerjs.js"></script>
	<!--<script src="../scripts/jquery-1.8.3.js"></script>-->
	<link rel="stylesheet" type="text/css" href="../styles/pokerStyle.css" />
	<link rel="stylesheet" href="../css/ui-lightness/jquery-ui-1.10.3.custom.css" />
	
</head>

<body>
<?php
	if(basename($_SERVER['PHP_SELF']) == "pokerAddSession.php"){
		echo '<script>
			locListDest = "locationOptions";
			locTypeDest = "locTypeVal";
			gameListDest = "gameOptions";
			limitListDest = "limitOptions";
			</script>';
	}
	else if(basename($_SERVER['PHP_SELF']) == "pokerEditSession.php"){
		echo '<script>
			locListDest = "editLocationOptions";
			locTypeDest = "editLocTypeVal";
			gameListDest = "editGameOptions";
			limitListDest = "editLimitOptions";
			</script>';
	}
?>
	<div id="fullCover2"></div>
	<form id="statusForm" action="../pokerSetStatus.php" method="POST" style="position: absolute">
		<input id="status" name="status" type="hidden" value="" />
	</form>

	<div id="locationReturn" style="visibility:hidden; position:absolute"></div>
	<div id="gameReturn" style="visibility:hidden; position:absolute"></div>
	<div id="limitReturn" style="visibility:hidden; position:absolute"></div>
	<div class="modalWrap" id="modalWrap2">
	
		<!-- ADDLOCATION MODAL -->
		<div class="modalGlobal" id="addLocationModal">
			<div class="modalHeaderWrap">
				<div class="modalHeader">Add Location</div>
			</div>
			<div class="modalRow">
				<div class="modalLabelWrap">
					<div class="modalLabel">New Location Name:</div>
				</div>
				<input id="addLocName" type="text" onkeypress="checkEnter(event, 'addLocOption');">
			</div>
			<div class="modalRow">
				<form name="locationType">
					<input type="radio" name="locTypeRadio" id="live" value=0 checked="checked">Live
					<input type="radio" name="locTypeRadio" id="online" value=1>Online
				</form>
			</div>
			<div id="addLocErrLbl"></div><br>
			<div class="modalBtnWrap">
				<button class="modalBtn" onclick="addLocOption();">Submit</button>
				<button class="modalBtn" onclick="clrCloseModal2('addLocationModal')">Cancel</button>
			</div>
		</div>
		
		<!-- ADDGAME MODAL -->
		<div class="modalGlobal" id="addGameModal">
			<div class="modalHeaderWrap">
				<div class="modalHeader">Add Game Type</div>
			</div>
			<div class="modalRow">
				<div class="modalLabelWrap">
					<div class="modalLabel">New Game Type:</div>
				</div>
				<input id="addGame" type="text" onkeypress="checkEnter(event, 'addGameOption');">
			</div>
			<div id="addGameErrLbl"></div><br>
			<div class="modalBtnWrap">
				<button class="modalBtn" onclick="addGameOption()">Submit</button>
				<button class="modalBtn" onclick="clrCloseModal2('addGameModal')">Cancel</button>
			</div>
		</div>
		
		<!-- ADDLIMIT MODAL -->
		<div class="modalGlobal" id="addLimitModal">
			<div class="modalHeaderWrap">
				<div class="modalHeader">Add Limit</div>
			</div>
			<div class="modalRow">
				<div class="modalLabelWrap">
					<div class="modalLabel">New Limit:</div>
				</div>
				<input id="addLimit" type="text" onkeypress="checkEnter(event, 'addLimitOption');">
			</div>
			<div id="addLimitErrLbl"></div><br>
			<div class="modalBtnWrap">
				<button class="modalBtn" onclick="addLimitOption()">Submit</button>
				<button class="modalBtn" onclick="clrCloseModal2('addLimitModal')">Cancel</button>
			</div>
		</div>
		
	</div><!-- END modalWrap -->
	
	<button onclick="logout()">Log out</button><br>
	End of pokerHeader<br>