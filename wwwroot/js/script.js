var currentQuestionIndex = 0;
var totalQuestions = 0;
var questionData = [];
var currentQuestionId;


function loadSections() {
    var areaDropdown = document.getElementById("areaDropdown");
    var sectionDropdown = document.getElementById("sectionDropdown");
    var subsectionDropdown = document.getElementById("subsectionDropdown");
    currentQuestionIndex = 0;

    sectionDropdown.innerHTML = "<option value=''>Select Section</option>";
    subsectionDropdown.innerHTML = "<option value=''>Select Subsection</option>";

    var selectedArea = areaDropdown.value;

   
    $.ajax({
        type: "POST",
        url: "/Home/GetSections",
        data: { areaName: selectedArea },
        success: function (data) {
            if (data) {
                data.forEach(function (section) {
                    var option = document.createElement("option");
                    option.value = section.name;
                    option.text = section.name;
                    sectionDropdown.add(option);
                });
               
                setTimeout(function () {
                    updateDropDownAfterLoad(sectionDropdown);
                    loadSubsections();
                }, 0); 
            }
        }
    });
}

function loadSubsections() {
    var areaDropdown = document.getElementById("areaDropdown");
    var sectionDropdown = document.getElementById("sectionDropdown");
    var subsectionDropdown = document.getElementById("subsectionDropdown");
    currentQuestionIndex = 0;

    subsectionDropdown.innerHTML = "<option value=''>Select Subsection</option>";

    var selectedArea = areaDropdown.value;
    var selectedSection = sectionDropdown.value;

   
    $.ajax({
        type: "POST",
        url: "/Home/GetSubsections",
        data: { areaName: selectedArea, sectionName: selectedSection },
        success: function (data) {
            if (data) {
                data.forEach(function (subsection) {
                    var option = document.createElement("option");
                    option.value = subsection.name;
                    option.text = subsection.name;
                    subsectionDropdown.add(option);
                });
               
                setTimeout(function () {
                    updateDropDownAfterLoad(subsectionDropdown);
                    loadQuestions();
                }, 0); 
            }

        }
    });

}

function loadQuestions() {
    var areaDropdown = document.getElementById("areaDropdown");
    var sectionDropdown = document.getElementById("sectionDropdown");
    var subsectionDropdown = document.getElementById("subsectionDropdown");

    var selectedArea = areaDropdown.value;
    var selectedSection = sectionDropdown.value;
    var selectedSubsection = subsectionDropdown.value;
   
    $.ajax({
        type: "POST",
        url: "/Home/GetQuestions",
        data: { areaName: selectedArea, sectionName: selectedSection, subsectionName: selectedSubsection },
        success: function (data) {
           
            if (data && data.length > 0) {
                totalQuestions = data.length;

                
                var currentQuestion = data[currentQuestionIndex];
                var questionObj = {
                    questionId: currentQuestion.id, 
                    questionText: currentQuestion.text,
                    answer: ""
                };
                currentQuestionId = currentQuestion.id;

                
                var existingQuestion = questionData.find(q => q.questionId === questionObj.questionId);
                if (!existingQuestion) {
                    questionData.push(questionObj);
                }

                
                var answerTextBox = document.getElementById("answerTextBox");
                answerTextBox.value = existingQuestion ? existingQuestion.answer : "";

                displayQuestion(data[currentQuestionIndex]);
            } else {
               
                displayQuestion(null);
            }
        }
    });

}

function displayQuestion(question) {
    var questionLabel = document.getElementById("questionLabel");
    var questionNumberLabel = document.getElementById("questionNumberLabel");

    if (question) {
        questionLabel.innerText = question.text;
        questionNumberLabel.innerText = "Question " + (currentQuestionIndex + 1) + " of " + totalQuestions;
        var answerTextBox = document.getElementById("answerTextBox");
        answerTextBox.style.display = question ? "block" : "none";
    } else {
        questionLabel.innerText = "No questions available";
        questionNumberLabel.innerText = "";
    }
}

function previousQuestion() {
    var currentQuestion = questionData.find(q => q.questionId === currentQuestionId);
    if (currentQuestion) {
        currentQuestion.answer = answerTextBox.value;
    }

    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestions();
    }
}


function nextQuestion() {
    var currentQuestion = questionData.find(q => q.questionId === currentQuestionId);
    if (currentQuestion) {
        currentQuestion.answer = answerTextBox.value;
    }


    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        loadQuestions();
    } else {
        var areaDropdown = document.getElementById("areaDropdown");
        var sectionDropdown = document.getElementById("sectionDropdown");
        var subsectionDropdown = document.getElementById("subsectionDropdown");

        
        if (subsectionDropdown.selectedIndex < subsectionDropdown.options.length - 1) {
            subsectionDropdown.selectedIndex++;
            loadQuestions();
        } else {
           
            if (sectionDropdown.selectedIndex < sectionDropdown.options.length - 1) {
                sectionDropdown.selectedIndex++;

               
                loadSubsections();

              
                loadQuestions();
            } else {
                
                if (areaDropdown.selectedIndex < areaDropdown.options.length - 1) {
                    areaDropdown.selectedIndex++;

                    
                    loadSections();
                    
                    loadQuestions();
                }
                else {
                   
                    displayAllQuestionsFinishedLabel();
                }
            }
        }
    }
    
}

function updateDropDownAfterLoad(dropdown) {
    if (dropdown.options.length > 1) {
        dropdown.value = dropdown.options[1].value;
    }
}

function displayAllQuestionsFinishedLabel() {
    var questionLabel = document.getElementById("questionLabel");
    var questionNumberLabel = document.getElementById("questionNumberLabel");
    var nextButton = document.getElementById("nextButton");
    var prevButton = document.getElementById("prevButton");
    var reloadButton = document.getElementById("reloadButton");

    questionLabel.innerText = "All questions finished!";
    questionNumberLabel.innerText = "";
    nextButton.style.display = "none";
    prevButton.style.display = "none";
    reloadButton.style.display = "block";

}



function reloadQuestionnaire() {
    
    currentQuestionIndex = 0;

    var areaDropdown = document.getElementById("areaDropdown");
    var sectionDropdown = document.getElementById("sectionDropdown");
    var subsectionDropdown = document.getElementById("subsectionDropdown");

    
    areaDropdown.selectedIndex = 0;
    sectionDropdown.selectedIndex = 0;
    subsectionDropdown.selectedIndex = 0;

   
    sectionDropdown.innerHTML = "<option value=''>Select Section</option>";
    subsectionDropdown.innerHTML = "<option value=''>Select Subsection</option>";

   
    updateDropDownAfterLoad(areaDropdown);
    loadSections();
   
    flipNavigationButtons();
    document.getElementById("reloadButton").style.display = "none";
}

function flipNavigationButtons() {
    if (document.getElementById("prevButton").style.display == "block") {
        document.getElementById("nextButton").style.display = "none";
        document.getElementById("prevButton").style.display = "none";
    }
    else {
        document.getElementById("prevButton").style.display = "block";
        document.getElementById("nextButton").style.display = "block";
    }
    
}
function sendAnswersToController() {
   
    $.ajax({
        type: "POST",
        url: "/Home/SaveAnswers",
        contentType: "application/json",
        data: JSON.stringify(questionData),
        success: function (response) {
            
        }
    });
}