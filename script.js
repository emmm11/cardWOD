
// Global variables for each exercise
var exerciseOne;
var exerciseTwo;
var exerciseThree;
var exerciseFour;
// users four exercises array
var exercises = [];

var index = 0;
// workout deck
var workout = [];

// shuffle function
function shuffle(workout) {
    var j, x, i;
    for (i = workout.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = workout[i];
        workout[i] = workout[j];
        workout[j] = x;
    }
    return workout;
}

// start workout function
function startWorkout () {
    document.getElementById('mainBody').innerHTML = "";
    var nextButton = document.createElement('button');
    nextButton.className = 'nextButton';
    nextButton.innerHTML = 'Next';
    document.getElementById('workoutPlaceholder').appendChild(nextButton);
    nextButton.addEventListener("click", nextExercise);
}

function nextExercise () {
    index+=1;
    if (index > workout.length - 1) {
        index = 0;
    }
    document.getElementById('mainBody').innerHTML = workout[index];
}

// save exercises and display to user
function submitExercises () {
    exerciseOne = document.getElementById("exerciseOneBox").value;
    exerciseTwo = document.getElementById("exerciseTwoBox").value;
    exerciseThree = document.getElementById("exerciseThreeBox").value;
    exerciseFour = document.getElementById("exerciseFourBox").value;
    exercises = [exerciseOne, exerciseTwo, exerciseThree, exerciseFour]

    // check if a workout already exists, override if it does
    if (workout.length > 0) {
        workout = [];
    }
    // the exercise type loop
    for (exercise = 0; exercise < 4; exercise ++) {
        // the numbers for each exercise type loop
        for (num = 2; num < 15; num ++) {
            card = "" + num + " " + exercises[exercise] + "";
            workout.push(card);
        }
     }
     // evil repeat last loop
     for (wildCard = 0; wildCard <2; wildCard ++) {
        card = "Repeat Last!";
        workout.push(card);
    }
    // shuffle the cards to create unique workout
    // BUG - repeat last can't be first card!
    shuffle(workout);
    
    // save the workout into local storage
    localStorage.setItem("workoutStorage", workout);
    // Clear the screen to move to next part
    // Ceed to eventually not clear but instead move to another page
    // so the person can go back and change the options if they want
    document.getElementById("mainBody").innerHTML = "";

    // create ready buttton
    var readyButton = document.createElement('button');
    readyButton.innerHTML = 'Start Workout';
    readyButton.className = 'readyButton';
    readyButton.addEventListener("click", startWorkout);
    document.getElementById('mainBody').appendChild(readyButton);
}












