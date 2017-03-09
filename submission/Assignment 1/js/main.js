

var taskArray = [];


var deleteTask = function(e){
	
	var taskNumber = e.target.parentElement.id;
	
	
    taskArray.splice(taskNumber, 1);
 
    updateTasks();
	
};

var listItem = document.createElement("li");
	

var editTask = function(e){
	console.log("Edit task");
	
	var taskNumber = e.target.parentElement.id;

	var editInput = listItem.querySelector("input[type=text]");
	var label = listItem.querySelector("label")

	var containsClass = taskNumber.classList.contains("editmode");
	 if (containsClass)
{
	label.taskArray = editInput.value;
}	else {
	editInput.value = label.taskArray;
}

 
   
    updateTasks();
	
};

var updateTasks = function(){


	$('#taskList').empty();

	
	$(taskArray).each(function(i){
		
		console.log('task ' + i + ': ' + this);
		
		
		

 		var deleteButton = $('<button / >');
		$(deleteButton).attr('id', 'deleteButton').text('X').on('click', function(e){
			deleteTask(e);

		});
		var editButton = $('<button / >');
		$(editButton).attr('id', 'editButton').text('Edit').on('click', function(e){
			editTask(e);

		});


		var newTask = $('<div/>');
  		$(newTask).attr('id', i).addClass('task').html('<p>' + this + '</p>');
		$(newTask).append(deleteButton);
		$(newTask).append(editButton);
		
		
		$('#taskList').append(newTask);
		
	});

};

var saveTask = function(){
	
	
  	
	var newTask =  $('#newTask').val();

    
    taskArray.push(newTask);
 	
    $('#newTask').val('');
 
 	
	updateTasks();
	
    
    console.log(taskArray);	

	
};


var init = function(){
	console.log('Fun stuff');
	
	
	$('#addButton').on('click', function(e){
		e.preventDefault();
		saveTask();
	});

	$('#editButton').on('click', function(e){
		e.preventDefault();
		editTask();
	});

	
};

$( document ).ready(function() {

    init();
    
});