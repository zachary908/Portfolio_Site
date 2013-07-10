// GENERAL-PURPOSE FUNCTIONS
// ----------------------------------------

function debug(thing){
	alert("ID: " + thing.id + " NAME: " + thing.name + " VALUE: " + thing.value);
}

function checkEnter(event, funcName){
	var keycode = (event.keyCode) ? event.keyCode : event.which;
	if(keycode == '13')
	{
		window[funcName]();
	}
}

function checkEmail(emailAddr){	
	emailAddr = $.trim(emailAddr);
	var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

	if(emailRegEx.test(emailAddr)){
		return true;
	}
	else{
		return false;
	}
}

function checkPwd(pwdEntry){
	pwdEntry = $.trim(pwdEntry);
	if(pwdEntry.length >= 6 && pwdEntry.length <= 20){
		return true;
	}
	else{
		return false;
	}
}

function checkName(usernameEntry){
	usernameEntry = $.trim(usernameEntry);
	if(usernameEntry.length >= 3 && usernameEntry.length <= 20){
		return true;
	}
	else{
		return false;
	}
}

function checkChars(entry){
	entry = $.trim(entry);
	var charRegEx = /[@#%^&*()]/;
	
	if(charRegEx.test(entry)){
		return false;
	}
	else{
		return true;
	}
}

function showModal(elementId, defaultInput){
	var whichElement = document.getElementById(elementId);
	
	if(whichElement != null && whichElement != undefined){
		whichElement.style.display = 'block';
		whichElement.parentNode.className = 'modalWrap';
	}
	
	var cover = document.getElementById('fullCover');
	cover.style.visibility = 'visible';
	
	var wrap = document.getElementById('modalWrap');
	wrap.style.display = 'block';
	
	if(defaultInput != null && defaultInput != undefined){
		document.getElementById(defaultInput).focus();
	}
}

function showModal2(elementId, defaultInput){
	var whichElement = document.getElementById(elementId);
	
	if(whichElement != null && whichElement != undefined){
		whichElement.style.display = 'block';
		whichElement.parentNode.className = 'modalWrap';
	}
	
	var cover = document.getElementById('fullCover2');
	cover.style.visibility = 'visible';
	
	var wrap = document.getElementById('modalWrap2');
	wrap.style.display = 'block';
	
	if(defaultInput != null && defaultInput != undefined){
		document.getElementById(defaultInput).focus();
	}
}

function hideModal(elementId){
	var whichElement = document.getElementById(elementId);
	
	if(whichElement != null && whichElement != undefined){
		whichElement.style.display = 'none';
		whichElement.parentNode.className = 'modalWrap';
	}
	
	var wrap = document.getElementById('modalWrap');
	wrap.style.display = 'none';
	
	var cover = document.getElementById('fullCover');
	cover.style.visibility = 'hidden';
}

function hideModal2(elementId){
	var whichElement = document.getElementById(elementId);
	
	if(whichElement != null && whichElement != undefined){
		whichElement.style.display = 'none';
		whichElement.parentNode.className = 'modalWrap';
	}
	
	var wrap = document.getElementById('modalWrap2');
	wrap.style.display = 'none';
	
	var cover = document.getElementById('fullCover2');
	cover.style.visibility = 'hidden';
}

// CLEAR ALL INPUTS BEFORE CLOSING MODAL
function clrCloseModal(elementId){
	var whichElement = document.getElementById(elementId);

	if(whichElement != null && whichElement != undefined){
		$("#" + elementId + " input").val("");
		hideModal(elementId);
	}
}

// CLEAR ALL NON-RADIO INPUTS BEFORE CLOSING MODAL
function clrCloseModal2(elementId){
	var whichElement = document.getElementById(elementId);

	if(whichElement != null && whichElement != undefined){
		$("#" + elementId + " input[type != 'radio']").val("");
		hideModal2(elementId);
	}
}

function parseReq(newLocNameVal){
	var y = document.getElementsByName("location");
	var string1 = "";
	for(var j=0; j<y.length; j++){
		if(y[j].innerHTML == newLocNameVal){
			string1 = string1 + "<option selected>" + y[j].innerHTML + "</option>";
		}
		else{
			string1 = string1 + "<option>" + y[j].innerHTML + "</option>";
		}
	}
	document.getElementById("locationOptions").innerHTML = string1;
	showLocType();
}

function showLocType(){
	var x = document.getElementsByName("locType");
	var y = document.getElementsByName("location");
	var targetVal = $('#locationOptions').val();
	var targetIndex;
	for(var j=0; j<y.length; j++){
		if(targetVal == y[j].innerHTML){
			targetIndex = j;
			break;
		}
	}
	var testType = x[targetIndex].innerHTML
	if(testType == 0){
		$('#locTypeVal').html("Live");
	}
	else{
		$('#locTypeVal').html("Online");
	}
}

function getTime(hourOption, minOption, amPmOption){
	var today = new Date();
	var hour = today.getHours();
	var min = today.getMinutes();

	// PUT TIME OPTIONS INTO ARRAYS
	var hrs = document.getElementsByName(hourOption);
	var mins = document.getElementsByName(minOption);
	var amPms = document.getElementsByName(amPmOption);
	
	// ROUND CURRENT MINS TO NEAREST 5
	var roundMin = 5 * Math.round(min/5);
	
	// IF MIN ROUNDS UP TO 60, ADD 1 TO HOUR AND SET MIN TO 00
	if(min > 56 && min < 60){
		hour = hour + 1;
		roundMin = 0;
	}
	
	// IF CURRENT HR > 12, SUBTRACT 12 AND SET PM
	if(hour > 12){
		for(var k=0; k<amPms.length; k++){
			if(amPms[k].value == "pm"){
				amPms[k].selected = true;
				break;
			}
		}
		hour = hour - 12;
	}
	
	if(hour == 12){
		for(var k=0; k<amPms.length; k++){
			if(amPms[k].value == "pm"){
				amPms[k].selected = true;
				break;
			}
		}
	}
	
	// MATCH CURRENT HR TO STHROPTION
	for(var i=0; i<hrs.length; i++){
		if(hrs[i].value == hour){
			hrs[i].selected = true;
			break;
		}
	}
	
	for(var j=0; j<mins.length; j++){
		if(mins[j].value == roundMin){
			mins[j].selected = true;
			break;
		}
	}	
}

function register(){
	$('#regErrLbl').html("");
	if($.trim($('#regEmail').val()) != "" && $.trim($('#regUsername').val()) != "" && $.trim($('#regPasswd').val()) != "" && $.trim($('#regConfirmPasswd').val()) != ""){
		if(checkEmail($('#regEmail').val())){
			if(checkName($('#regUsername').val())){
				if(checkPwd($('#regPasswd').val())){
					if($('#regPasswd').val() == $('#regConfirmPasswd').val()){
						$.post('pokerMethods.php', {method: 'register', regEmail: $.trim($('#regEmail').val().toLowerCase()), 
						regUsername: $.trim($('#regUsername').val()), regPasswd: $.trim($('#regPasswd').val())}, function(message){
							if(message != ""){
								$('#regErrLbl').html(message);
							}
							else{
								alert("You are registered, " + $('#regUsername').val() + "!");
								hideModal('registerModal');
								window.location = 'pokerSummary.php';
							}
						});
					}
					else{
						$('#regErrLbl').html("Passwords do not match.");
					}
				}
				else{
					$('#regErrLbl').html("Password must be 6 - 20 characters.");
				}
			}
			else{
				$('#regErrLbl').html("Username must be 3 - 20 characters.");
			}
		}
		else{
			$('#regErrLbl').html("Email does not appear to be valid.");
		}
	}
	else{
		$('#regErrLbl').html("Please complete all fields.");
	}
}

function login(){
	$('#logErrLbl').html("");
	if($.trim($('#logUsername').val()) != "" && $.trim($('#logPasswd').val()) != ""){
		if(checkName($('#logUsername').val())){
			if(checkPwd($('#logPasswd').val())){
				$.post('pokerMethods.php', {method: 'login', logUsername: $.trim($('#logUsername').val()), logPasswd: $.trim($('#logPasswd').val())}, function(message){
					if(message != ""){
						$('#logErrLbl').html(message);
					}
					else{
						alert("Welcome, " + $('#logUsername').val() + "!");
						hideModal('loginModal');
						window.location = 'pokerSummary.php';
					}
				});
			}
			else{
				$('#logErrLbl').html("Password must be 6 - 20 characters.");
			}
		}
		else{
			$('#logErrLbl').html("Username must be 3 - 20 characters.");
		}
	}
	else{
	$('#logErrLbl').html("Please complete all fields.")
	}
}

function logout(){
	$.post('pokerMethods.php', {method : 'logout'}, function(message){
		window.location = '../poker.php';
	});
}

function getList(listType, destListElement, newOptionVal){
	if (window.XMLHttpRequest){
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	}
	else{
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	// xmlhttp.onreadystatechange = function(){
		// if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
			// document.getElementById(listElement).innerHTML = xmlhttp.responseText;
		// }
	// }
	
	// IF ASYNC SET TO TRUE, ONLY LAST LIST REQUEST WILL APPEAR
	xmlhttp.open("GET", "../pokerMethods.php?method=getListAJAX&listType=" + listType, false);
	xmlhttp.send();
	
	// PUT LIST OPTIONS INTO HOLDING ELEMENT- e.g.: "limitReturn" or "gameReturn"
	if(listType == "game"){
		document.getElementById('gameReturn').innerHTML = "";
		document.getElementById('gameReturn').innerHTML = xmlhttp.responseText;
	}
	else{
		document.getElementById('limitReturn').innerHTML = "";
		document.getElementById('limitReturn').innerHTML = xmlhttp.responseText;
	}
	
	var g;
	var l;
	if(listType == "game"){
		g = document.getElementsByName('gameOption');
		l = document.getElementById(destListElement);
		l.innerHTML = "";
	}
	else{
		g = document.getElementsByName('limitOption');
		l = document.getElementById(destListElement);
		l.innerHTML = "";
	}
	
	var string1 = "";
	for(var i=0; i<g.length; i++){
		if(g[i].innerHTML == newOptionVal){
			string1 = string1 + "<option selected>" + g[i].innerHTML + "</option>";
		}
		else{
			string1 = string1 + "<option>" + g[i].innerHTML + "</option>";
		}
	}

	l.innerHTML = string1;

	//document.getElementById(listElement).innerHTML = xmlhttp.responseText;
}

function addGameOption(){
	$("#addGameErrLbl").html("");
	var newGameVal = $("#addGame").val();
	
	if(newGameVal != ""){
		if(checkChars(newGameVal)){
			$.post('pokerMethods.php', {method: 'addGameOption', phpGameVal: newGameVal}, function(message){
				if(message != ""){
					$("#addGameErrLbl").html(message);
				}
				else{
					clrCloseModal2("addGameModal");
					getList("game", "gameReturn", newGameVal);
				}
			});
		}
		else{
			$("#addGameErrLbl").html("Entry cannot contain special characters.");
		}
	}
	else{
		$("#addGameErrLbl").html("Please enter the game type you wish to add.");
	}
}

function addLimitOption(){
	$("#addLimitErrLbl").html("");
	var newLimitVal = $("#addLimit").val();
	
	if(newLimitVal != ""){
		if(checkChars(newLimitVal)){
			$.post('pokerMethods.php', {method: 'addLimitOption', phpLimitVal: newLimitVal}, function(message){
				if(message != ""){
					$("#addLimitErrLbl").html(message);
				}
				else{
					clrCloseModal2("addLimitModal");
					getList("limit", "limitReturn", newLimitVal);
				}
			});
		}
		else{
			$("#addLimitErrLbl").html("Entry cannot contain special characters.");
		}
	}
	else{
		$("#addLimitErrLbl").html("Please enter the limits you wish to add.");
	}
}

function getLocList(newLocName){
	$('#addSessErrLbl').html("");
	if (window.XMLHttpRequest){
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	}
	else{
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	// xmlhttp.onreadystatechange = function(){
		// if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
			// document.getElementById(listElement).innerHTML = xmlhttp.responseText;
			// var x=document.getElementById('test');
			// x.innerHTML = xmlhttp.responseText
		// }
	//}
	
	// IF ASYNC SET TO TRUE, ONLY LAST LIST REQUEST WILL APPEAR
	xmlhttp.open("GET", "../pokerMethods.php?method=getLocListAJAX", false);
	xmlhttp.send();
	
	//BECAUSE THE REQUEST IS NOT BEING SENT ASYNCHRONOUSLY, THE FOLLOWING LINES CAN BE
	//EXECUTED IMMEDIATELY AFTER THE xmlhttp.send(). THEY DO NOT HAVE TO BE PUT IN A
	//xmlhttp.onreadystatechange FUNCTION
	var x = document.getElementById('locationReturn');
	x.innerHTML = xmlhttp.responseText;
	parseReq(newLocName);
}

function addLocOption(){
	$("#addLocErrLbl").html("");
	var locTypeVal = $('input[name="locTypeRadio"]:checked').val();
	var newLocNameVal = $('#addLocName').val();
	if(newLocNameVal != ""){
		if(checkChars(newLocNameVal)){
			$.post('pokerMethods.php', {method: 'addLocOption', phpLocNameVal: newLocNameVal, phpLocType: locTypeVal}, function(message){
				if(message != ""){
					$("#addLocErrLbl").html(message);
				}
				else{
					clrCloseModal2('addLocationModal');
					getLocList(newLocNameVal);
				}
			});
		}
		else{
			$("#addLocErrLbl").html("Entry cannot contain special characters.");
		}
	}
	else{
		$("#addLocErrLbl").html("Please fill in the location name.")
	}
}

function addSession(){
// GET ALL VALS FROM FORM AND VALIDATE

// BUY-IN
	var buyinValid = $('#buyin').val();
// CASH OUT
	var cashout = $('#cashout').val();
// PLACE
	var place = $('#place').val();
	
	if(isNaN(buyinValid)){
		$('#addSessErrLbl').html("Buy-in entry can contain only numbers.");
	}
	else{
		if(isNaN(cashout)){
			$('#addSessErrLbl').html("Cash out entry can contain only numbers.");
		}
		else{
			if(isNaN(place)){
				$('#addSessErrLbl').html("Place entry can contain only numbers.");
			}
			else{
				var buyin = buyinValid;
			
		// START DATE				
			// GET TIME VALUES
				var stHrStr12 = parseInt($('#stHour').val());
				var stMinStr = $('#stMin').val();
				var stSecStr = "00";
				var stAmPmStr = $('#stAmPm').val().toString();
				
				// CONVERT 12-HOUR TIME TO 24-HOUR
				if(stHrStr12 == 12){
					if(stAmPmStr == "pm"){
						stHrStr24 = stHrStr12;
					}
					else{
						stHrStr24 = 0;
					}
				}
				else{
					if(stAmPmStr == "pm"){
						stHrStr24 = stHrStr12 + 12;
					}
					else{
						stHrStr24 = stHrStr12;
					}
				}
				
				if(stHrStr24 < 10){
					stHrStr24 = "0" + stHrStr24;
				}
				
				// PARSE THE TIME RETURNED BY ADDSESSION FORM AS SQL TIME
				var sqlStTimeStr = stHrStr24 + ":" + stMinStr + ":" + stSecStr;
				
			// GET DATE VALUES
				// PARSE THE DATE RETURNED BY DATEPICKER AS SQL DATE()
				var stFullDate = $('#datepicker').val(); // DATEPICKER RETURNS "MM/DD/YYYY"
				var splitRegEx = /\//;
				var stArray = stFullDate.split(splitRegEx);
				var stMonth = stArray[0];
				var stDate = stArray[1];
				var stYear = stArray[2];

				var sqlStDate = stYear + "-" + stMonth + "-" + stDate; // SQL EXPECTS "YYYY-MM-DD"
				var sqlStDateStr = sqlStDate.toString();
				
			// CONSOLIDATE DATE AND TIME TO SQL DATETIME FORMAT
				var sqlStDatetimeStr = sqlStDateStr + " " + sqlStTimeStr
				
	// END DATE
			// GET TIME VALUES
				var endHrStr12 = parseInt($('#endHour').val());
				var endMinStr = $('#endMin').val();
				var endSecStr = "00";
				var endAmPmStr = $('#endAmPm').val().toString();
				
				// CONVERT 12-HOUR TIME TO 24-HOUR
				if(endHrStr12 == 12){
					if(endAmPmStr == "pm"){
						endHrStr24 = endHrStr12;
					}
					else{
						endHrStr24 = 0;
					}
				}
				else{
					if(endAmPmStr == "pm"){
						endHrStr24 = endHrStr12 + 12;
					}
					else{
						endHrStr24 = endHrStr12;
					}
				}
				
				if(endHrStr24 < 10){
					endHrStr24 = "0" + endHrStr24;
				}
				
				// PARSE THE TIME RETURNED BY ADDSESSION FORM AS SQL TIME
				var sqlEndTimeStr = endHrStr24 + ":" + endMinStr + ":" + endSecStr;
				
			// GET DATE VALUES
				// PARSE THE DATE RETURNED BY DATEPICKER AS SQL DATE()
				var endFullDate = $('#datepicker1').val(); // DATEPICKER RETURNS "MM/DD/YYYY"
				var splitRegEx = /\//;
				var endArray = endFullDate.split(splitRegEx);
				var endMonth = endArray[0];
				var endDate = endArray[1];
				var endYear = endArray[2];

				var sqlEndDate = endYear + "-" + endMonth + "-" + endDate; // SQL EXPECTS "YYYY-MM-DD"
				var sqlEndDateStr = sqlEndDate.toString();
				
			// CONSOLIDATE DATE AND TIME TO SQL DATETIME FORMAT
				var sqlEndDatetimeStr = sqlEndDateStr + " " + sqlEndTimeStr
				
			// LOCATION
				var location = $('#locationOptions').val();

			// LOCATION TYPE DOES NOT NEED TO BE ADDED TO SESSION TABLE- 
			// IT IS ASSOCIATED WITH THE LOCATION NAME IN THE LOCATION TABLE

			// GAME TYPE
				var gameType = $('#gameOptions').val();

			// RING/TOURNEY
				var ringTour = $('input[name="ringTourRadio"]:checked').val();

			// LIMITS
				var limits = $('#limitOptions').val();
				
				var t = new Date();
				$('#test1').html(t);
				$('#test2').html(sqlEndDatetimeStr);
				
				// POST DATA TO DB
				$.post('pokerMethods.php', {method: 'addSession', phpStartDate: sqlStDatetimeStr, phpEndDate: sqlEndDatetimeStr, phpLocation: location,
					phpGameType: gameType, phpRingTour: ringTour, phpLimits: limits, phpBuyin: buyin, phpCashout: cashout, phpPlace: place}, function(message){
						if(message != ""){
							$('#addSessErrLbl').html(message);
						}
						else{
							$('#status').val("Your session has been added!");
							document.getElementById('statusForm').submit();
						}
					
				});
				
			}
		}
	}
}

function getSessions(){
	$.post('pokerMethods.php', {method: 'getSessions'}, function (message){
		if(message == 1){
			$('#statusMsg').html("You have no recorded sessions. Add one now!");
		}
		else{
			$('#sessTableBody').html(message);
		}
	});
}

function editRow(x){
	// GET ROW ID
	$rowId = (x.parentNode.parentNode.id);

	// USE FORM TO POST ROW ID TO EDITSESSIONS PG
	$('#editRowId').val($rowId);
	$('#editSession').submit();
	
	// FILL IN VALS OF EDIT SESSION FORM (NEW FXN)
}

function editGetVals(){

	$.post('pokerMethods.php', {method: 'editGetVals'}, function(message){
		// RETURN DB VARS AS STRING, THEN PARSE INTO ARRAY
		$splitRegEx = /#/g;
		$splitMsgArray = message.split($splitRegEx);
		
		$startDate = $splitMsgArray[0];
		$('#datepickerEdit').val($startDate);
		
		$startTime = $splitMsgArray[1];
			$splitTimeRegEx = /:/g;
			$splitTimeArray = $startTime.split($splitTimeRegEx);
			$startHr = $splitTimeArray[0];
			$startMin = $splitTimeArray[1];
			alert($startHr);
			// USE FOR LOOP TO MATCH HR TO OPTION
			$editStHrOptArr = document.getElementsByName('editStHourOption');
			
		
		$endDate = $splitMsgArray[2];
		$('#datepickerEdit1').val($endDate);
		
		$endTime = $splitMsgArray[3];
		
	});
}	

	// INSTEAD OF GETTING NEW DATE, GET DATE OF SESSION BEING EDITED
	// var today = new Date();
	// var hour = today.getHours();
	// var min = today.getMinutes();
	

	// PUT TIME OPTIONS INTO ARRAYS
	// var hrs = document.getElementsByName(editHourOption);
	// var mins = document.getElementsByName(editMinOption);
	// var amPms = document.getElementsByName(editAmPmOption);
	
	// DON'T NEED ROUNDING FOR EDITGETTIME- TIME IS ALREADY ROUNDED IN DB
	// // ROUND CURRENT MINS TO NEAREST 5
	// var roundMin = 5 * Math.round(min/5);
	
	// // IF MIN ROUNDS UP TO 60, ADD 1 TO HOUR AND SET MIN TO 00
	// if(min > 56 && min < 60){
		// hour = hour + 1;
		// roundMin = 0;
	// }
	
	// IF CURRENT HR > 12, SUBTRACT 12 AND SET PM
	// if(hour > 12){
		// for(var k=0; k<amPms.length; k++){
			// if(amPms[k].value == "pm"){
				// amPms[k].selected = true;
				// break;
			// }
		// }
		// hour = hour - 12;
	// }
	
	// // MATCH CURRENT HR TO STHROPTION
	// for(var i=0; i<hrs.length; i++){
		// if(hrs[i].value == hour){
			// hrs[i].selected = true;
			// break;
		// }
	// }
	
	// for(var j=0; j<mins.length; j++){
		// if(mins[j].value == roundMin){
			// mins[j].selected = true;
			// break;
		// }
	// }	
// }
