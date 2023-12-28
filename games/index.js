function visibleButton(){
	for (const iterator of $("#opt > button")) {
		(iterator.innerHTML.toLowerCase().indexOf($("#q").val().toLowerCase()) != -1) ? iterator.style.display='inline-block': iterator.style.display='none' ;
	}
    }
	
    function goTo(subPath){
	window.location.pathname = "Games/"+subPath
    }
	
	
	
    var previousValue = $("#q").val();
    $("#q").keyup(function(e) {
	    var currentValue = $(this).val();
	    if(currentValue != previousValue) {
		    previousValue = currentValue;
		    visibleButton()
	    }
    });

    $("#opt").submit((e)=>{
        e.preventDefault();
        goTo(e.originalEvent.submitter.attributes.value.value)
    })
             