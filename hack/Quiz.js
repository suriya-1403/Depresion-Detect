function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.nxt = function() {
    
    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}

Quiz.prototype.isLast = function(){
    return this.questionIndex === 24;
}

Quiz.prototype.in = function(){
    return this.questionIndex ;
}

Quiz.prototype.edu=function()
{
    if((this.questionIndex===1)||(this.questionIndex<6))
    {
        return true;
    }
    else
    {
        return false;
    };
}

Quiz.prototype.tea=function()
{
    if((this.questionIndex>5)&&(this.questionIndex<11))
    {
        return true;
    }
    else
    {
        return false;
    }
}

Quiz.prototype.sch=function()
{
    if((this.questionIndex>10)&&(this.questionIndex<16))
    {
        return true;
    }
    else
    {
        return false;
    }
}

Quiz.prototype.home=function()
{
    if((this.questionIndex>15)&&(this.questionIndex<21))
    {
        return true;
    }
    else
    {
        return false;
    }
}

Quiz.prototype.fri=function()
{
    if((this.questionIndex>20)&&(this.questionIndex<26))
    {
        return true;
    }
    else
    {
        return false;
    }
}