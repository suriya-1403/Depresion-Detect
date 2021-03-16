function Question(text, choices) {
    this.text = text;
    this.choices = choices;
}

Question.prototype.selectedanswer = function(){
    return this.answer;
}
