$(document).ready(function(){
	$("#lxone").addClass('lone').delay(300).queue(function(){
		$("#lxtwo").addClass('ltwo').delay(400).queue(function(){
			$("#lxthree").addClass('lthree').delay(200).queue(function(){
				$("#lxfour").addClass('lfour').delay(500).queue(function(){
					$("#lxfive").addClass('lfive').queue(function(){
						$("#lxsix").addClass('lsex');
					});
				});
			});
		});
	});
});

