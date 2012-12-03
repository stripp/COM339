// JavaScript Document

$(document).bind("mobileinit",function() {
	//init code here
	$.mobile.page.prototype.options.addBackBtn = true;
	if (navigator.platform=="iPhone" || navigator.platform=="iPad" ||
		navigator.platform=="iPod" || navigator.platform=="iPhone Simulator") 
		{
			//check for chromeless mode
			if(!navigator.standalone) {
				showIOSInvitation();
			}
		}
		
	  function showIOSInvitation() {
			  setTimeout(function() {
				  //open instructions to add to homepage
					$.mobile.changePage($("#addApp"), {transition:"none", changeHash: false});
	  }, 100);
	  }		
});