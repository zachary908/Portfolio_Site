// GENERAL-PURPOSE FUNCTIONS
// ----------------------------------------

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

// CLEAR ALL NON-RADIO INPUTS BEFORE CLOSING MODAL
function clrCloseModal(elementId){
	var whichElement = document.getElementById(elementId);

	if(whichElement != null && whichElement != undefined){
		$("#" + elementId + " input[type != 'radio']").val("");
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

function showLocType(){
	var x = document.getElementsByName("locType");
	var y = document.getElementsByName("location");
	var targetVal = $("#" + locListDest).val();

	var targetIndex = 0;
	for(var j=0; j<y.length; j++){
		if(targetVal == y[j].innerHTML){
			targetIndex = j;
		}
	}
	var testType = x[targetIndex].innerHTML;
	if(testType == 0){
		$("#"+ locTypeDest).html("Live");
	}
	else{
		$("#"+ locTypeDest).html("Online");
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

function getList(listType, newOptionVal){
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
		l = document.getElementById(gameListDest);
		l.innerHTML = "";
	}
	else{
		g = document.getElementsByName('limitOption');
		l = document.getElementById(limitListDest);
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
					getList("game", newGameVal);
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
					getList("limit", newLimitVal);
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

function getLocList(newOptionVal){
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

	var y = document.getElementsByName("location");
	var string1 = "";
	for(var j=0; j<y.length; j++){
		if(y[j].innerHTML == newOptionVal){
			string1 = string1 + "<option selected>" + y[j].innerHTML + "</option>";
		}
		else{
			string1 = string1 + "<option>" + y[j].innerHTML + "</option>";
		}
	}
	document.getElementById(locListDest).innerHTML = string1;
	
	showLocType();
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
		if(buyinValid < 0){
			$('#addSessErrLbl').html("Buy-in entry must be a positive number.");
		}
		else{
			if(isNaN(cashout)){
				$('#addSessErrLbl').html("Cash out entry can contain only numbers.");
			}
			else{
				if(cashout < 0){
					$('#addSessErrLbl').html("Cash out entry must be a positive number.");
				}
				else{
					if(isNaN(place)){
						$('#addSessErrLbl').html("Place entry can contain only numbers.");
					}
					else{
						if(place < 0){
							$('#addSessErrLbl').html("Place entry must be a positive integer.");
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
		}
	}
}

function editSession(){
// GET ALL VALS FROM FORM AND VALIDATE

// BUY-IN
	var buyinValid = $('#editBuyin').val();
// CASH OUT
	var cashout = $('#editCashout').val();
// PLACE
	var place = $('#editPlace').val();
	
	if(isNaN(buyinValid)){
		$('#editSessErrLbl').html("Buy-in entry can contain only numbers.");
	}
	else{
		if(buyinValid < 0){
			$('#editSessErrLbl').html("Buy-in entry must be a positive number.");
		}
		else{
			if(isNaN(cashout)){
				$('#editSessErrLbl').html("Cash out entry can contain only numbers.");
			}
			else{
				if(cashout < 0){
					$('#editSessErrLbl').html("Cash out entry must be a positive number.");
				}
				else{
					if(isNaN(place)){
						$('#editSessErrLbl').html("Place entry can contain only numbers.");
					}
					else{
						if(place < 0){
							$('#editSessErrLbl').html("Place entry must be a positive integer.");
						}
						else{
							var buyin = buyinValid;
						
					// START DATE				
						// GET TIME VALUES
							var stHrStr12 = parseInt($('#editStHour').val());
							var stMinStr = $('#editStMin').val();
							var stSecStr = "00";
							var stAmPmStr = $('#editStAmPm').val().toString();
							
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
							var stFullDate = $('#datepickerEdit').val(); // DATEPICKER RETURNS "MM/DD/YYYY"
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
							var endHrStr12 = parseInt($('#editEndHour').val());
							var endMinStr = $('#editEndMin').val();
							var endSecStr = "00";
							var endAmPmStr = $('#editEndAmPm').val().toString();
							
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
							var endFullDate = $('#datepickerEdit1').val(); // DATEPICKER RETURNS "MM/DD/YYYY"
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
							var location = $('#editLocationOptions').val();

						// LOCATION TYPE DOES NOT NEED TO BE ADDED TO SESSION TABLE- 
						// IT IS ASSOCIATED WITH THE LOCATION NAME IN THE LOCATION TABLE

						// GAME TYPE
							var gameType = $('#editGameOptions').val();

						// RING/TOURNEY
							var ringTour = $('input[name="editRingTourRadio"]:checked').val();

						// LIMITS
							var limits = $('#editLimitOptions').val();
							
							// POST DATA TO DB
							$.post('pokerMethods.php', {method: 'editSession', phpStartDate: sqlStDatetimeStr, phpEndDate: sqlEndDatetimeStr, phpLocation: location,
								phpGameType: gameType, phpRingTour: ringTour, phpLimits: limits, phpBuyin: buyin, phpCashout: cashout, phpPlace: place}, function(message){
									if(message != ""){
										$('#editSessErrLbl').html(message);
									}
									else{
										$('#status').val("Your changes have been recorded.");
										document.getElementById('statusForm').submit();
									}
								
							});
						
						}
					}
				}
			}
		}
	}
}

function editRow(x){
	// GET ROW ID
	var rowId = (x.parentNode.parentNode.id);

	// USE FORM TO POST ROW ID TO EDITSESSIONS PG
	$('#editRowId').val(rowId);
	$('#editSession').submit();
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

function newGetSessions(){
	$.post('pokerMethods.php', {method: 'newGetSessions'}, function (message){
		if(message == 1){
			$('#statusMsg').html("You have no recorded sessions. Add one now!");
		}
		else{
			$('#data').html(message);
		}
		fillTable();
	});
}

function fillTable(){
	// ALL THE FOLLOWING MUST BE IN SEPARATE FXN, 
	// OTHERWISE, CALL WILL BE MADE TO DB EVERY TIME FILTER IS APPLIED
	var dataStr = document.getElementById('data').innerHTML;
	var splitRegEx = /%/g;
	var rowArr = dataStr.split(splitRegEx);
	
	// PUT EACH ROW INTO ARRAY AS OBJECT
	// ALL DATA FOR EA. SESSION IS COLLECTED
	var trArr = new Array();
	for(var i=0; i<rowArr.length-1; i++){
		var tr = new Object();
		var attrArr = rowArr[i].split(/#/g);
		tr.id = "tr" + i;
		tr.sessId = attrArr[0];
		tr.startDate = attrArr[1];
		tr.location = attrArr[2];
		tr.gameType = attrArr[3];
		tr.limit = attrArr[4];
		tr.duration = attrArr[5];
		tr.buyin = attrArr[6];
		tr.cashout = attrArr[7];
		tr.ringtour = attrArr[8];
		tr.place = attrArr[9];
		tr.rate = attrArr[10];
		tr.ret = attrArr[11];
		trArr[i] = tr;
	}
	
	// PARSE DESIRED DATA INTO HTML
	// APPLY FILTER BEFORE 'FOR' LOOP
	var dataString = "";
	var x = 1;
	for(var i=0; i<trArr.length; i++){
		dataString = dataString + "<tr id=\"" + trArr[i].sessId + "\">" +
			"<td>" + x + ".</td>" +		// COL 0
			"<td>" + trArr[i].startDate + "</td>" +	// COL 1
			"<td>" + trArr[i].location + "</td>" +	// COL 2
			"<td>" + trArr[i].gameType + "</td>" +	// COL 3
			"<td>" + trArr[i].limit + "</td>" +		// COL 4
			"<td>" + trArr[i].duration + "</td>" +	// COL 5
			"<td>" + trArr[i].buyin + "</td>" +		// COL 6
			"<td>" + trArr[i].cashout + "</td>" +	// COL 7
			"<td>" + trArr[i].ringtour + "</td>" +	// COL 8
			"<td>" + trArr[i].place + "</td>" +		// COL 9
			"<td>" + trArr[i].rate + "</td>" +		// COL 10
			"<td>" + trArr[i].ret + "</td>" +		// COL 11
			"<td><button onclick='editRow(this)'>Edit</button></td>" + // COL 12
			"</tr>";
			x = x + 1;
	}
	
	// FILL TABLE WITH RESULTS
	document.getElementById("sessTableBody").innerHTML = dataString;

}

function showTourneys(){
	// CHOOSE COL ON WHICH TO FILTER
	// show drop-down on sessions pg with filter category options
	// if(filterCol == location){
		// colIndex = 2;	
	// }
	
	// show drop-down on session pg with comparison operator options
	// display comparison options appropriate to filter column	
	// if(compare == 'equalTo'){
	
	// }
	// else if(compare == 'notEqualTo'){
	
	// }
	// else if(compare == 'moreThan'){
	
	// }
	// else if(compare == 'lessThan'){
	
	// }
	// else if(compare == 'between'){
	
	// }
	
	// FIND ALL ROWS WITH RINGTOUR = 0
	var tbl = document.getElementById('sessions').tBodies[0];
	var rowColl = tbl.rows;
	var filterArr = new Array();
	var j = 0;
	for(var i=0; i<rowColl.length; i++){
		var cellColl = rowColl[i].cells
		if(cellColl[8] != undefined && cellColl[8].textContent == "0"){
			filterArr[j] = rowColl[i].id;
			j = j + 1;
		}
	}

	for(var x=0; x<filterArr.length; x++){
		for(var y=0; y<rowColl.length; y++){
			if(rowColl[y].id == filterArr[x]){
				document.getElementById('sessions').tBodies[0].deleteRow(y);
			}
		}
	}
	
	// RE-NUMBER ROWS
	for(var y=0; y<rowColl.length; y++){
		var z = y + 1;
		rowColl[y].cells[0].textContent = z + "."
	}
	
	// // var table = document.getElementById("mytab1");
	// // for (var i = 0, row; row = table.rows[i]; i++) {
    // //	iterate through rows
    // //	rows would be accessed using the "row" variable assigned in the for loop
    // // 		for (var j = 0, col; col = row.cells[j]; j++) {
    // // 		iterate through columns
    // // 		columns would be accessed using the "col" variable assigned in the for loop
	// // 	}  
	// // }
}

function editGetVals(){
	$.post('pokerMethods.php', {method: 'editGetVals'}, function(message){
		// RETURN DB VARS AS STRING, THEN PARSE INTO ARRAY
		var splitRegEx = /#/g;
		var splitMsgArray = message.split(splitRegEx);
		
		// START DATE
		var editStDate = splitMsgArray[0];
		$('#datepickerEdit').val(editStDate);
		
		// START TIME
		var editStTime = splitMsgArray[1];
			var splitTimeRegEx = /:/g;
			var splitEditStTimeArray = editStTime.split(splitTimeRegEx);
			var editStHr24 = splitEditStTimeArray[0];
			var editStMin24 = splitEditStTimeArray[1];
			var editStAmPm = "am"

			if(editStHr24 > 12){
				editStHr12 = editStHr24 - 12;
				editStAmPm = "pm";
			}
			else{
				editStHr12 = editStHr24;
			}
			
			var editStHrOptions = document.getElementsByName('editStHourOption');
			
			for(var i=0; i<editStHrOptions.length; i++){
				if(editStHrOptions[i].value == editStHr12){
					editStHrOptions[i].selected = true;
				}
			}
			
			var editStMinOptions = document.getElementsByName('editStMinOption');
			
			for(var i=0; i<editStMinOptions.length; i++){
				if(editStMinOptions[i].value == editStMin24){
					editStMinOptions[i].selected = true;
				}
			}
			
			var editStAmPmOptions = document.getElementsByName('editStAmPmOption');
			
			for(var i=0; i<editStAmPmOptions.length; i++){
				if(editStAmPmOptions[i].value == editStAmPm){
					editStAmPmOptions[i].selected = true;
				}
			}
		
		// END DATE
		var editEndDate = splitMsgArray[2];
		$('#datepickerEdit1').val(editEndDate);
		
		// END TIME
		var editEndTime = splitMsgArray[3];
			var splitEditEndTimeArray = editEndTime.split(splitTimeRegEx);
			var editEndHr24 = splitEditEndTimeArray[0];
			var editEndMin24 = splitEditEndTimeArray[1];
			var editEndAMPM = "am"
			
			if(editEndHr24 > 12){
				editEndHr12 = editEndHr24 - 12;
				editEndAMPM = "pm";
			}
			else{
				editEndHr12 = editEndHr24;
			}
			
			var editEndHrOptions = document.getElementsByName('editEndHrOption');
			for(var i=0; i<editEndHrOptions.length; i++){
				if(editEndHrOptions[i].value == editEndHr12){
					editEndHrOptions[i].selected = true;
				}
			}
			
			var editEndMinOptions = document.getElementsByName('editEndMinOption');
			for(var i=0; i<editEndMinOptions.length; i++){
				if(editEndMinOptions[i].value == editEndMin24){
					editEndMinOptions[i].selected = true;
				}
			}
			
			var editEndAmPmOptions = document.getElementsByName('editEndAmPmOption');
			for(var i=0; i<editEndAmPmOptions.length; i++){
				if(editEndAmPmOptions[i].value == editEndAMPM){
					editEndAmPmOptions[i].selected = true;
				}
			}
		
		// LOCATION
		var editLocation = splitMsgArray[4];
		getLocList(editLocation);
		
		//LOCATION TYPE
		showLocType();
			
		// GAME TYPE
		var editGameType = splitMsgArray[5];
		getList('game', editGameType);
		
		// RING/TOUR
		var editRingTourType = splitMsgArray[6];
		var editRingTourTypeOptions = document.getElementsByName('editRingTourRadio');
		for(var i=0; i<editRingTourTypeOptions.length; i++){
			if(editRingTourTypeOptions[i].value == editRingTourType){
				editRingTourTypeOptions[i].checked = true;
			}
		}
		
		// LIMITS
		var editLimit = splitMsgArray[7];
		getList('limit', editLimit);
		
		// BUY-IN
		var editBuyin = splitMsgArray[8];
		$('#editBuyin').val(editBuyin);
		
		// CASH OUT
		var editCashOut = splitMsgArray[9];
		$('#editCashout').val(editCashOut);
		
		// PLACE
		var editPlace = splitMsgArray[10];
		$('#editPlace').val(editPlace);
		
	});
}


