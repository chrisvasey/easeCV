$(document).ready(function(){
	$("#lxone").addClass('lone').delay(200).queue(function(){
		$("#lxtwo").addClass('ltwo').delay(200).queue(function(){
			$("#lxthree").addClass('lthree').delay(100).queue(function(){
				$("#lxfour").addClass('lfour').delay(300).queue(function(){
					$("#lxfive").addClass('lfive').queue(function(){
						$("#lxsix").addClass('lsix');
					});
				});
			});
		});
	});
});

