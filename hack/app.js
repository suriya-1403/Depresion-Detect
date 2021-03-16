function populate() {
    if(quiz.isEnded()) {
        console.log(sum);
        console.log(edu_sum);
        console.log(tea_sum);
        console.log(sch_sum);
        console.log(home_sum);
        console.log(fri_sum);
        localStorage.setItem("edu_sum",edu_sum);
        localStorage.setItem("tea_sum",tea_sum);
        localStorage.setItem("sch_sum",sch_sum);
        localStorage.setItem("home_sum",home_sum);
        localStorage.setItem("fri_sum",fri_sum);
    }
    else {
        // show question
        // console.log(quiz.in());
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i],i);
        }

        showProgress();
        if(quiz.isLast())
        {
            var vis = document.getElementById("submitbutton");
            vis.style.visibility="visible";
        }
    }
};

function guess(id, guess, q) {
    // var db = openDatabase("answers","1.0","answer",65535);
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.nxt();
        // var s = document.getElementById(id).value;
        sum+=q+1;
        if (quiz.edu())
        {
            edu_sum+=q+1;
        }
        else if(quiz.tea())
        {
            tea_sum+=q+1;
        }
        else if(quiz.sch())
        {
            sch_sum+=q+1;
        }
        else if(quiz.home())
        {
            home_sum+=q+1;
        }
        else if(quiz.fri())
        {
            fri_sum+=q+1;
        }
        // var no = quiz.getQuestionIndex().text;
        // var ans = Question.selectedanswer();
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

// create questions
var questions = [
    new Question("How difficult or easy is it to use the distance learning technology ?", ["very easy", "somewhat easy", "no change", "difficult"]),
    new Question("Are you getting all the help you need with your schoolwork right now?", ["always","mostly","sometimes","never"]),
    new Question("How much effort are you putting into your classes right now?", ["100%","75%","50%","no efforts"]),
    new Question("what do you think about the inportance of teacher's encouragement in a student's learning process?", ["very important","sometimes","doesn't matter","irrelevant"]),
    new Question("How much do understand what is being taught at the classroom?", ["everything","mostly","somewhat","nothing",]),
    new Question("Please share your agreement with this statement: “My teachers asks each one of us whether we have understood what she taught and helps us in case we have doubts.”", ["strongly agree","agree","doesn't matter","strongly disagree"]),
    new Question("Does your teacher appreciate the times when you work hard towards scoring well in a test or performing well in extracurricular activities?", ["always","mostly","sometimes","never"]),
    new Question("Does your teacher guide you in setting personal targets and developing strategies to achieve that target", ["alwyas","mostly","rarely","never"]),
    new Question("After each test, does your teacher help you in understanding ways to improve your grades?", ["always","mostly","sometimes","never"]),
    new Question("How satisfied are you with the amount of time you spend speaking with your teachers?", ["all the time","most of time","sometimes","never"]),
    new Question("What do you think about your school's study environment?", ["very good","good","manageable","bad"]),
    new Question("The institution provides multiple opportunities to learn and grow.", ["always","mostly","sometimes","never"]),
    new Question("The institution makes effort to engage students in the monitoring, review and continuous quality improvement of the teaching learning process", ["always","mostly","sometimes","never"]),
    new Question("How sure are you that you can do well in school right now?", ["100%","75%","50%","no sure"]),
    new Question("What do you not like about school right now?", ["online teaching methods","burden of more assignments","more screentime","All"]),
    new Question("How difficult it is for you to do work at home?", ["very easy", "somewhat easy", "manageable", "difficult"]),
    new Question("How much would you like to improve the workspace in your home?", ["nothing","somewhat","mostly","everything"]),
    new Question("how easily can you concentrate on your work at home?", ["very easy", "somewhat easy", "manageable", "difficult"]),
    new Question("When you have online schoolwork, how often do you have the technology you need?", ["always","mostly","sometimes","never"]),
    new Question("How difficult or easy is it to stay focused on your schoolwork right now?", ["very easy", "somewhat easy", "manageable", "difficult"]),
    new Question("How often does your peer group help you in studying?", ["always","mostly","sometimes","never"]),
    new Question("How helpful do you describe your friends to be?", ["very helpful","mostly helpful","somewhat helpful","never helpful"]),
    new Question("How much comfortable do you feel around your friends?", ["very comfortable","mostly comfortable","rarely comfortable","never comfortable"]),
    new Question("How connected do you feel to other students at your school?", ["very connected","somewhat connected","very less connected","not at all connected"]),
    new Question("If you are participating in distance learning, how often are you talking with your friends from school?", ["all the time","most of time","sometimes","never"]),

];
var sum = 0;
var edu_sum=0;
var tea_sum=0;
var sch_sum=0;
var home_sum=0;
var fri_sum=0;

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();




