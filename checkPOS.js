(function init() {

	$.get("subjectRemoveTemplate.html",  "", 
	function(subjectTemplate){
		$.template("subjectTemplate", subjectTemplate);	//for label of template	
		
		var listholder = getCookie("subjects");		//calls getCookie function, to find the list of indexes
		var subjects;
		
		subjects = JSON.parse(listholder);
		
		if(subjects == null) return

		for(var i=0; i<subjects.length; i++){			
			if(subjects[i].courseClassification == "MST"){
				$.tmpl("subjectTemplate", subjects[i]).appendTo(".table.MST");
			}
			else if(subjects[i].courseClassification == "SSP"){
				$.tmpl("subjectTemplate", subjects[i]).appendTo(".table.SSP");
			}
			
			else {
				$.tmpl("subjectTemplate", subjects[i]).appendTo(".table.AH");
			}
		}
	
	}, 
	"text");	

	updateHeading();
	
})();
	
	
	function getCookie(cookieName){	
		
			var cookieArray = document.cookie.split(';');		//splits the string of cookies
			
			for(j=0; j<cookieArray.length; j++) 				//for checking all split string of cookies
			{
				var pairkey = cookieArray[j].split('=');		//splits each cookie to key and value
				
				if(pairkey[0] == cookieName){					//checks if key is equal to cookieName
					return pairkey[1];								//returns the list of indexes
				}
			}		
			return null;													//if not found
		}
		
		function updateHeading(){
		
			var listholder = getCookie("subjects");		//calls getCookie function, to find the list of indexes
			var subjects;
		
			subjects = JSON.parse(listholder);
			
			var MSTcounter = 0;
			var SSPcounter = 0;
			var AHcounter = 0;
			var updateHeading;
			
			
			if(subjects == null){				
				updateHeading = $(".panel-heading.MST");			
				updateHeading.text("MST (CURRENT NUMBER OF MST SUBJECTS: " + MSTcounter + ")");					
				
				updateHeading = $(".panel-heading.SSP");			
				updateHeading.text("MST (CURRENT NUMBER OF SSP SUBJECTS: " + SSPcounter + ")");
				
				updateHeading = $(".panel-heading.AH");			
				updateHeading.text("MST (CURRENT NUMBER OF MST SUBJECTS: " + AHcounter + ")");
			
				return				
			}
			
			for(i = 0; i < subjects.length; i++){				
				if(subjects[i].courseClassification == "MST"){
					MSTcounter++;
				}

				else if(subjects[i].courseClassification == "SSP"){
					SSPcounter++;
				}				
				
				else	AHcounter++;				
			}
			
			updateHeading = $(".panel-heading.MST");			
			updateHeading.text("MST (CURRENT NUMBER OF MST SUBJECTS: " + MSTcounter + ")");					
			
			updateHeading = $(".panel-heading.SSP");			
			updateHeading.text("MST (CURRENT NUMBER OF SSP SUBJECTS: " + SSPcounter + ")");
			
			updateHeading = $(".panel-heading.AH");			
			updateHeading.text("MST (CURRENT NUMBER OF MST SUBJECTS: " + AHcounter + ")");
			
		}
	
