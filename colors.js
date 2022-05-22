var Body = {
	setColor: function (target, color){
		target.style.color = color;
	},
	setBackgroundColor: function (target, color) {
		target.style.backgroundColor = color;
	}
				
}
var Links = {
	setColor: function(color){
		var aList = document.querySelectorAll('a');
		for(var i=0; i<aList.length; i++){
	 	   aList[i].style.color = color;
	 	}
	}
}

function nightDayHandler(self){
	var target = document.querySelector('body');
		if(self.value == 'night'){
			Body.setBackgroundColor(target,'black');
			Body.setColor(target, 'white');
			self.value = 'day';
			Links.setColor('powderblue');
		}
		else{
			Body.setBackgroundColor(target, 'white');
			Body.setColor(target, 'black');
			self.value = 'night';
			Links.setColor('blue');
		}
}
			
