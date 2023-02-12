/*In form.js file:
●	write a function that collects all the data from the form
●	write a function that validates all collected data
●	write a function that updates the given list so it adds the new item at the end of the list
●	write a function that updates the part of the page with the statistics*/

function updateExamList(exam) {
 
    var newListItem = document.createElement("li");
    newListItem.innerHTML = exam.getExamInfo();

    if(exam.hasPassed()) {
        document.getElementById("passed").appendChild(newListItem);
    } else {
        document.getElementById("failed").appendChild(newListItem);
    }

  }

  function updateStatistics() {
    totalExams = passedExams.length + failedExams.length;
    passRate = (passedExams.length / totalExams) * 100;

    var total = document.getElementById("total");
    total.innerHTML = totalExams;

    var average = document.getElementById("average");
    average.innerHTML = passRate;

    var numPass = document.getElementById("numPass");
    numPass.innerHTML = numPassed;

    var numFai = document.getElementById("numFai");
    numFai.innerHTML = numFailed;
  }
