const assignmentInput = document.querySelector("#Assignment-input");
const dateInput = document.querySelector("#Date-input");
const addButton = document.querySelector("#add-assignment-btn");
const assignmentList = document.querySelector("#assignment-list");
const formMessage = document.querySelector("#form-message");




// listens for a click event then does rest of code
addButton.addEventListener("click", () => {
    const assignmentName = assignmentInput.value.trim();
        //.value gets whats in input
        //.trim() removes whitespace from both ends of the string
    const dueDate = dateInput.value;

    //edge case: if either input is empty, display message and return
    if (assignmentName === "" || dueDate === "") { 
        //makes content of formMessage element equal to the string
        formMessage.textContent = "Please enter an assignment name and due date.";
        return;
    }

    // li (list item) html element, child of ul
    const listItem = document.createElement("li");
    // Add a class to the list item for styling 
    listItem.classList.add("assignment-card");

    // Create the assignment text
    const assignmentText = document.createElement("span");
    assignmentText.textContent = `${assignmentName} - Due: ${dueDate}`;

    // Create the Remove button
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "Remove";

    // Remove this assignment when clicked
    removeButton.addEventListener("click", () => {
        listItem.remove();
        formMessage.textContent = `${assignmentName} removed.`;
    });

    // Put the text and button inside the card
    listItem.appendChild(assignmentText);
    listItem.appendChild(removeButton);

    // Put the card inside the assignment list
    assignmentList.appendChild(listItem);
    formMessage.textContent = "Assignment added successfully!";

    //reset input after adding assignment
    assignmentInput.value = "";
    dateInput.value = "";
});