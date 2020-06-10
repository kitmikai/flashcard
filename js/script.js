var concepts = ["JavaScript", "Operators", "Variables", "Variable naming conventions", "Functions", "Strings", "Methods", "Arguments", "Parameters", "Return", "Chaining methods", "Booleans", "Undefined", "NaN", "Escape", "Alert", "Comments", "jQuery", "Attributes"];

var definitions = ["A web scripting language", "mathematical operators, logical operators", "A temporary store for data in computer memory", "Begin with lower case only, camelCase", "Break tasks into small pieces", "Anything in quotes, string methods","Operations that do not return anything", "What the function works with", "What you pass to a function","A keyword","object.method().anothermethod()", "True or False", "Undefined","A datatype returned when result is not a number", "escape characters for newline, tab", "A pop up window", "Ignored by the JavaScript Engine", "A JavaScript library", "Features within HTML tags"];

// Create card object
function Card(question, answer){
	this.question = question;
  this.answer = answer;
}

// getQuestion
Card.prototype.getQuestion = function(){
	return `${this.question}`;
}

// getAnswer
Card.prototype.getAnswer = function(){
	return `${this.answer}`;
}

// loop through the arrays

for(let counter=0; counter < concepts.length; counter++){
	var cardQuestion = concepts[counter];
    var cardAnswer = definitions[counter];

  // Create card name
    var cardName = "card" + counter;
  
  // Instantiate object
    cardName = new Card(cardQuestion, cardAnswer);

    // Create flashcard in the DIV
    document.querySelector(".card-groups").innerHTML += "<div class=\"card\"> <div class=\"front\"> "  + cardName.getQuestion() + "</div> <div class=\"back\">" + cardName.getAnswer() + "</div></div>" ;
  
}
