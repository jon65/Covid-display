"use strict";

/* 
    The addItemToList function is responsible for adding the parameter "item" 
    to the array (list) provided in the parameter "list".
 */
function addItemToList(item, list) {
    // check that the item is an object
    if (typeof item !== 'object') {
        return false;
    }
    // check that the list is an array
    if (!Array.isArray(list)) {
        return false;
    }
    // check that the item object has correct properties
    if (!item.hasOwnProperty('content') || !item.hasOwnProperty('date')) {
        return false;
    }
    // all checks are valid, now add the item to the list
    list.push(item);
    return true; // return success
}

/*
    The generateListHTML takes one parameter "list" and returns 
    a HTML string of the list contents
 */
function generateListHTML(list) {
    // define and initialise output variable
    let output = "";
    // check if the list is empty
    if (list.length === 0) {
        return "<p>This list is empty</p>";
    }
    // generate the html for the list using a for loop
    for (let i = 0; i < list.length; i++) {
        // create a variable (shortcut) hold current item
        let item = list[i];
        // append output
        output += `<p>${item.content} at ${item.date}</p>`;
    }
    // return the output if all OK
    return output;
}
// TODO: Write a function "storeData" with two parameters, "data" and "key" 
//       This function is responsible for storing data into localStorage.
/*
    Pseudo-code for storeData
    1. Check if data is an object. If it is an object, 
       convert it into a string using JSON.stringify
    2. use localStorage.setItem(key, value) on the data above */
function storeData(data, key) {
    if (typeof (data) === 'object') {
        data =   
    }
}



// TODO: Write a function "retrieveData" with one parameter, "key" 
//       This function is responsible for retrieving data from localStorage.
/*
    Pseudo-code for retrieveData
    1. use localStorage.getItem(key) to retrieve the data
    2. use try-catch-finally to convert it back using JSON.parse
    3. in finally, return the data
 */


// function addToList()
// This function is triggered by the button click on the reminder page
// It adds a reminder item to the global list, reminderList
function addToList() {
    // reference variables
    let dateRef = document.getElementById("dateInput");
    let contentRef = document.getElementById("reminderInput");

    // working variables
    let listContent = "";

    // TODO: Create a variable "item", initialise it as an
    //       object with content and date property using 
    //       the following values
    //       contentRef.value
    //       new Date(dateRef.value).toDateString()


    // TODO: call function addItemToList


    // TODO: call function generateListHTML


    // TODO: store data in local storage


    // update the page with new count and list
    countRef.innerText = reminderList.length;
    listRef.innerHTML = listContent;

}
// function for the live clock on the page
function liveClock() {
    // Create a variable to hold the current date/time
    let date = new Date();

    // Get a reference to the element on the HTML page
    let clockRef = document.getElementById("clock");

    // Set the current time on the page
    clockRef.innerText = date.toLocaleTimeString()
}

// variable definitions
let reminderList = []; // empty array to hold list of reminders
const STORAGE_KEY = "asdmfjgbq8374tbnjdsfgh"; // create a key to use for local storage
let listRef = document.getElementById("reminderList"); // reference for the reminderList div
let countRef = document.getElementById("reminderCount"); // reference for the count field
let intervalHandle = ""; // Global variable to hold interval variable

// const to define the clock update speed in ms
const UPDATE_TIME_MS = 500;
// start the clock
intervalHandle = setInterval(liveClock, UPDATE_TIME_MS)

// TODO: on page load (here), 
// 1. check if local storage is available
// 2. get data from local storage 
// 3. check if local storage data is empty (if empty, start with blank array)
// 4. generate list and display
// 5. update reminder count


