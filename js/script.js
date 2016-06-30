var taskCount = 0;
var taskText = document.getElementById("newTask");
var taskHolder = document.getElementById("tasks");

//makes a new task and returns the task
var makeTask = function(taskString) {
    //console.log("Make task...\n");
    //create item
    var listItem = document.createElement("li");
    
    //components of task //add edit features?
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    var deleteButton = document.createElement("button");
    
    //modify element properties
    listItem.className = "incomplete";
    checkBox.type = "checkbox";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    label.innerText = taskString;
    
    //append components to item
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);
    
    return listItem;
};

var addTask = function() {
    if(taskText.value.length) //If the user input has length
    {
        //console.log("Add task...\n");
        //make new task
        var listItem = makeTask(taskText.value);
        //add task to list
        //taskHolder.appendChild(listItem); //No longer appends when adding. Appending is done by gDisplay
        gDisplay(listItem);
        bindEvents(listItem);
        count("+1");
        //console.log("EmptyInput...\n");
        taskText.value = null;
    }
    else
    {
        console.log("Recived null user input...\nNo task added.");
    }
};

var deleteTask = function() {
    //.log("Delete task...\n");
    var li = this.parentNode;
    var ul = li.parentNode;
    
    if(li.className == "incomplete")
    {
        count("-1");
    }
    
    ul.removeChild(li);
    
    //this.parentNode.removeChild(this); //removes delete button from list item.
};

//Toggles the class of each checkbox item.
var checkBoxEvents = function() {
    //console.log("checkBoxEvents...\n");

    if(this.parentNode.className === "incomplete") //Check the list item's class.
    {
        //console.log("Task complete...");
        this.parentNode.className = "complete";
        count("-1");
    }
    else
    {
        //console.log("Task incomplete...\n");
        this.parentNode.className = "incomplete";
        count("+1");
    }
};


var bindEvents = function(taskListItem) {
    //console.log("Bind list item events.\n");
    var checkBox = taskListItem.childNodes[0];
    var deleteButton = taskListItem.childNodes[2];
    
    checkBox.removeEventListener;
    deleteButton.addEventListener("click", deleteTask, false);
    checkBox.addEventListener("change", checkBoxEvents, false);
};

var count = function(e) { // e is a string "event" passed to it. Similar to the Scratch broadcast block.
    var taskCountHolder = document.getElementById("taskCounter");
    var optionHolder = document.getElementById("optionHolder");

    if(taskCount < 0)
    {
        taskCount = 0;
    }

    if(e == "update") //updates task count display
    {
        display();
    }
    //increase or decrease counter then calls itsself and updates
    else if(e == "+1" || e == "+" || e == "++")
    {
        taskCount++;
        count("update");
    }
    else if(e == "-1" || e == "-" || e == "--")
    {
        taskCount--;
        count("update");
    }
    //catch case
    else
    {
        console.log("Unknown updateCount event.\n");
    }
    
    function display()
    {
        //console.log("taskCount:" + taskCount);
        if(taskCount <= 0)
        {
            taskCountHolder.innerText = "";
            optionHolder.className = "hidden";
        }
        else
        {
            taskCountHolder.innerText = taskCount + " items left";
            optionHolder.className = "";
        }
    }
};

var buttonEvents = function() { //button event handler
    var addButton = document.getElementById("addButton");

    addButton.addEventListener("click", addTask, false);
};

var gDisplay = function(btn) { //btn (button) gDisplay (globalDisplay)
    taskHolder.appendChild(btn); //btn will be a listItem.
};
buttonEvents();