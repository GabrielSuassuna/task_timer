const taskInput = document.getElementById("new-task");
const addButton = document.getElementById("add-task");
const incompleteTaskHolder = document.getElementById("incomplete-tasks");
const completedTasksHolder = document.getElementById("completed-tasks");
const items = {};
const tasks = {};
let itemsCount = 0;


//New task list item
const createNewTaskElement = function (taskString) {

    const listItem = document.createElement("li");
    const container = document.createElement("div");
    const label = document.createElement("label");
    const time = document.createElement("p");
    const editInput = document.createElement("input");
    const playButton = document.createElement("button");
    const playIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const playIconPath1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    const playIconPath2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    const editButton = document.createElement("button");
    const editIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const editIconPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    const deleteButton = document.createElement("button");
    const deleteIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const deleteIconPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    const finishButton = document.createElement("button");
    const finishIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const finishIconPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');

    label.innerText = taskString;
    label.className = "flex-auto ml-4";
    time.innerText = "00:00:00";

    listItem.id = itemsCount + 1;
    itemsCount += 1;
    listItem.className = "pl-3 pr-4 py-3 flex items-center justify-between text-sm";
    container.className = "flex-1 flex items-center";
    editInput.type = "text";
    editInput.className = "hidden border focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md mr-4 px-4";

    playIconPath1.setAttribute("stroke-linecap", "round");
    playIconPath1.setAttribute("stroke-linejoin", "round");
    playIconPath1.setAttribute("stroke-width", "2");
    playIconPath1.setAttribute("d", "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z");

    playIconPath2.setAttribute("stroke-linecap", "round");
    playIconPath2.setAttribute("stroke-linejoin", "round");
    playIconPath2.setAttribute("stroke-width", "2");
    playIconPath2.setAttribute("d", "M21 12a9 9 0 11-18 0 9 9 0 0118 0z");

    playIcon.setAttribute("class", "w-6 h-6")
    playIcon.setAttribute("fill", "none");
    playIcon.setAttribute("stroke", "currentColor");
    playIcon.viewBox = "0 0 24 24";
    playIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    playIcon.appendChild(playIconPath1);
    playIcon.appendChild(playIconPath2);

    editIconPath.setAttribute("stroke-linecap", "round");
    editIconPath.setAttribute("stroke-linejoin", "round");
    editIconPath.setAttribute("stroke-width", "2");
    editIconPath.setAttribute("d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z");

    editIcon.setAttribute("class", "w-6 h-6")
    editIcon.setAttribute("fill", "none");
    editIcon.setAttribute("stroke", "currentColor");
    editIcon.viewBox = "0 0 24 24";
    editIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    editIcon.appendChild(editIconPath);

    deleteIconPath.setAttribute("stroke-linecap", "round");
    deleteIconPath.setAttribute("stroke-linejoin", "round");
    deleteIconPath.setAttribute("stroke-width", "2");
    deleteIconPath.setAttribute("d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16");

    deleteIcon.setAttribute("class", "w-6 h-6")
    deleteIcon.setAttribute("fill", "none");
    deleteIcon.setAttribute("stroke", "currentColor");
    deleteIcon.viewBox = "0 0 24 24";
    deleteIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    deleteIcon.appendChild(deleteIconPath);

    finishIconPath.setAttribute("stroke-linecap", "round");
    finishIconPath.setAttribute("stroke-linejoin", "round");
    finishIconPath.setAttribute("stroke-width", "2");
    finishIconPath.setAttribute("d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z");

    finishIcon.setAttribute("class", "w-6 h-6")
    finishIcon.setAttribute("fill", "none");
    finishIcon.setAttribute("stroke", "currentColor");
    finishIcon.viewBox = "0 0 24 24";
    finishIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    finishIcon.appendChild(finishIconPath);

    playButton.id = "play-button";
    playButton.className = "ml-4 text-yellow-500 hover:text-yellow-400 focus:outline-none";
    playButton.appendChild(playIcon);

    editButton.id = "edit-button";
    editButton.className = "ml-4 text-blue-500 hover:text-blue-400 focus:outline-none";
    editButton.appendChild(editIcon);

    deleteButton.id = "delete-button";
    deleteButton.className = "ml-4 text-red-400 hover:text-red-300 focus:outline-none";
    deleteButton.appendChild(deleteIcon);

    finishButton.id = "finish-button";
    finishButton.className = "ml-4 text-green-600 hover:text-green-400 focus:outline-none";
    finishButton.appendChild(finishIcon);



    container.appendChild(label);
    container.appendChild(editInput);
    container.append(time);
    container.appendChild(playButton);
    container.appendChild(editButton);
    container.appendChild(deleteButton);
    container.appendChild(finishButton);

    listItem.appendChild(container);

    return listItem;
}

const getAvarageTime = function (taskString) {
    let sum = 0;
    tasks[taskString].forEach(element => {
        sum += element;
    });
    const avarage = sum / tasks[taskString].length;
    console.log(new Date(avarage * 1000).toISOString().substring(11, 19))
    return new Date(avarage * 1000).toISOString().substring(11, 19)
}

const createCompletedTaskElement = function (taskString) {
    const listItem = document.createElement("li");
    const container = document.createElement("div");
    const label = document.createElement("label");
    const time = document.createElement("p");
    const actions = document.createElement("div");
    const deleteButton = document.createElement("button");
    const deleteIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const deleteIconPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');

    label.innerText = taskString;
    label.className = "w-32 ml-4";
    time.innerText = getAvarageTime(taskString);
    time.className = "w-32 ml-4";

    listItem.id = taskString;
    listItem.className = "pl-3 pr-4 py-3 flex items-center  text-sm";
    container.className = "flex-1 flex items-center";
    actions.className = "flex-auto flex flex-row-reverse";

    deleteIconPath.setAttribute("stroke-linecap", "round");
    deleteIconPath.setAttribute("stroke-linejoin", "round");
    deleteIconPath.setAttribute("stroke-width", "2");
    deleteIconPath.setAttribute("d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16");

    deleteIcon.setAttribute("class", "w-6 h-6")
    deleteIcon.setAttribute("fill", "none");
    deleteIcon.setAttribute("stroke", "currentColor");
    deleteIcon.viewBox = "0 0 24 24";
    deleteIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    deleteIcon.appendChild(deleteIconPath);

    deleteButton.id = "delete-button";
    deleteButton.className = "ml-4 text-red-400 hover:text-red-300 focus:outline-none";
    deleteButton.appendChild(deleteIcon);

    container.appendChild(label);
    container.append(time);
    actions.appendChild(deleteButton);
    container.appendChild(actions);

    listItem.appendChild(container);

    return listItem;
}



const addTask = function () {
    if (taskInput.value != "") {
        console.log("Add Task...");

        const listItem = createNewTaskElement(taskInput.value);

        //Append listItem to incompleteTaskHolder
        incompleteTaskHolder.appendChild(listItem);
        bindTaskEvents(listItem);

        taskInput.value = "";
    }
}

//Edit an existing task.

const editTask = function () {
    console.log("Edit Task...");
    console.log("Change 'edit' to 'save'");


    const container = this.parentNode;

    const editInput = container.querySelector('input[type=text]');
    const label = container.querySelector("label");

    const containsClass = label.classList.contains("hidden");

    if (containsClass) {
        label.innerText = editInput.value;
    } else {
        editInput.value = label.innerText;
    }

    label.classList.toggle("hidden");
    editInput.classList.toggle("hidden");
}


const playTaskTimer = function () {
    console.log("Play Timer Task...");

    const container = this.parentNode;
    const listItem = container.parentNode;

    const time = container.querySelector("p");

    const hasTimer = items[listItem.id] != null;


    if (hasTimer) {
        console.log(listItem.id)
        clearInterval(items[listItem.id])
        delete items[listItem.id]
    } else {
        const timer = setInterval(() => {
            let seconds = time.innerText.split(':')[2];
            let minutes = time.innerText.split(':')[1];
            let hours = time.innerText.split(':')[0];

            if (Number(seconds) < 59) {
                seconds = Number(seconds);
                seconds += 1;
                seconds = seconds < 10 ? `0${seconds}` : seconds.toString();
            } else {
                seconds = '00';
                if (Number(minutes) < 59) {
                    minutes = Number(minutes);
                    minutes += 1;
                    minutes = minutes < 10 ? `0${minutes}` : minutes.toString();
                } else {
                    minutes = '00'
                    hours = Number(hours);
                    hours += 1;
                }
            }

            time.innerText = `${hours}:${minutes}:${seconds}`;

        }, 1000);
        items[listItem.id] = timer;
    }
}



//Delete task.
const deleteTask = function () {
    console.log("Delete Task...");

    const container = this.parentNode;
    const listItem = container.parentNode;
    const ul = listItem.parentNode;
    if (items[listItem.id]) {
        clearInterval(items[listItem.id])
        delete items[listItem.id]
    }
    ul.removeChild(listItem);

}

const deleteCompleteTask = function () {
    console.log("Delete Task...");

    const actions = this.parentNode;
    const container = actions.parentNode;
    const listItem = container.parentNode;
    const ul = listItem.parentNode;
    if (items[listItem.id]) {
        clearInterval(items[listItem.id])
        delete items[listItem.id]
    }
    ul.removeChild(listItem);

}


//Mark task completed
const finishTask = function () {
    console.log("Complete Task...");


    const container = this.parentNode;
    const label = container.querySelector("label");
    const time = container.querySelector("p");
    const playButton = container.querySelector("button#play-button");
    const editButton = container.querySelector("button#edit-button");
    const finishButton = container.querySelector("button#finish-button");
    label.classList.toggle("line-through");
    playButton.classList.toggle("hidden");
    editButton.classList.toggle("hidden");
    finishButton.classList.toggle("hidden");

    if (!tasks[label.innerText]) {
        let seconds = Number(time.innerText.split(':')[2]);
        let minutes = Number(time.innerText.split(':')[1]);
        let hours = Number(time.innerText.split(':')[0]);
        const totalTime = 3600 * hours + 60 * minutes + seconds
        tasks[label.innerText] = [totalTime];
        const listItem = createCompletedTaskElement(label.innerText);
        completedTasksHolder.appendChild(listItem);
        bindCompletedTaskEvents(listItem);
    } else {
        let seconds = Number(time.innerText.split(':')[2]);
        let minutes = Number(time.innerText.split(':')[1]);
        let hours = Number(time.innerText.split(':')[0]);
        const totalTime = 3600 * hours + 60 * minutes + seconds;
        tasks[label.innerText].push(totalTime);
        document.getElementById(label.innerText).children[0].querySelector("p").innerText = getAvarageTime(label.innerText)
    }
}

addButton.onclick = addTask;

const bindTaskEvents = function (taskListItem) {
    const playButton = taskListItem.children[0].querySelector("button#play-button");
    const editButton = taskListItem.children[0].querySelector("button#edit-button");
    const deleteButton = taskListItem.children[0].querySelector("button#delete-button");
    const finishButton = taskListItem.children[0].querySelector("button#finish-button");


    playButton.onclick = playTaskTimer;
    editButton.onclick = editTask;
    deleteButton.onclick = deleteTask;
    finishButton.onclick = finishTask;
}

const bindCompletedTaskEvents = function (taskListItem) {
    const deleteButton = taskListItem.children[0].querySelector('div').querySelector("button#delete-button");

    deleteButton.onclick = deleteCompleteTask;
}

for (let i = 0; i < incompleteTaskHolder.children.length; i++) {
    bindTaskEvents(incompleteTaskHolder.children[i]);
}

for (let i = 1; i < completedTasksHolder.children.length; i++) {
    bindCompletedTaskEvents(completedTasksHolder.children[i]);
}