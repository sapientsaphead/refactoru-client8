$(document).ready(function() {
	
//HTML Rendering

	var nextday = 0;

	var getNextDay = function() {
		var now = new Date();
		now.setDate(now.getDate()+nextday);
		nextday ++;
		var x = now;
		var y = x.toString();
		return y.slice(0,15);
	}	
	
	var createDateList = function() {
		var list = $('<ul class="myAgendaList list-unstyled">');
		$('.infinite-agenda').append(list);
	};

	// <button type="button" class="editbtn btn btn-default">Edit</button>
	//'</a><button type="button" class="addItem btn btn-default">+</button>
	var createDate = function() { 
		var listItem = $('<li class= "day"></li>');
		var divItem = $('<div class="upper"></div>');
		var aItem = $('<a href="#" class="date addItem">'+getNextDay()+'</a><button type="button" class="addItem plus-btn btn btndefault">+</button>');
		var divAddItem = $('<div class="divAddItem"></div>');
		var divNewItem = $('<div class="divNewItem"></div>');

		// insert above elements to DOM
		$('.list-unstyled').append(listItem);
		listItem.append(divItem, divAddItem, divNewItem);
		divItem.append(aItem);

		// adds data=i attribute to each list item
    	$('li').each(function (i) {
    		$(this).attr('data', i);			
		});
	};

	var createAddItemBox = function(i) {
		var addItem = $('<input class="agendaTime" type="time">' +
						'<input class="agendaTitle" type="text" placeholder="Add New Appointment">' +
						'<button type="submit" class="submitItem">✓</button>' +
						'<button type="reset" class="cancelItem">X</button>');

		$('li[data='+i+']').find('.divAddItem').append(addItem);
	}

	var createNewItem = function(i, counter) {
		var newItem = $('<div class="newAppt"></div>');
		var divTime = $('<div class="time" data-time=' + counter +'></div>');
		var divTitle = $('<div class="title" data-title=' + counter + '></div>');

		$('li[data='+i+']').find('.divNewItem').append(newItem);
		newItem.append(divTime,divTitle);
	}

	var createWeek = function() {
		for (var i=0; i<7; i++) {
			createDate();
		}
	}


//EVENTS
	// Infinite scrolling
	$(window).scroll(function() {
		if ($(window).scrollTop() + $(window).height() > $(document).height() * .85) {
			createWeek();
		}
	});

	// Click on date or + button to see in-line text editing
	$(document).on('click','.addItem',function(){
		var i = parseInt($(this).parent().parent().attr('data'));
		createAddItemBox(i);
	});	 	


	// Grab data from input box and add it to divNewItem as list item
	var counter = 0;
	$(document).on('click', '.submitItem',function(e){
		e.preventDefault();
		counter++
		var day = $('li[data='+i +']');

		var i = ($(this).parent().parent().attr('data'));
		createNewItem(i, counter);

		var time = day.find('.agendaTime').val();
		var title = day.find('.agendaTitle').val();

		day.find('div[data-time='+ counter +']').append(time);
		day.find('div[data-title='+ counter +']').append(title);

		// empty addItem div
		day.find('.divAddItem').empty();
	});

	$(document).on('click', '.cancelItem',function(){
		var i = ($(this).parent().parent().attr('data'));
		// empty addItem div
		$('li[data='+i +']').find('.divAddItem').empty();
	});




//MAIN

	createDateList();
	createWeek();
	
	

}); //this closes document ready

///On FakeSubmit:
//append new Static Text
//Add new Edit Text

//newitem 
//itemcontainer
//edittext statictext
//fakesubmit

