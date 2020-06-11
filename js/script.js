var concepts = ["JavaScript", "Operators", "Variables", "Variable naming conventions", "Functions", "Strings", "Methods", "Arguments", "Parameters", "Return", "Chaining methods", "Booleans", "Undefined", "NaN", "Escape", "Alert", "Comments", "jQuery", "Attributes", "Iterations"];

var definitions = ["A web scripting language known as Ecma Script used to make responsive web pages", "Math operators: + - % / *,<br> Logical operators: &&, ||, >=, <=", "A temporary store for data in computer memory", "Must begin with lower case characters,<br>camelCase,<br>cannot be a keyword", " A JavaScript procedure—a set of statements that performs a task or calculates a value", "A series of characters enclosed in quotes","Operations that do not return anything", "What the function works with", "What you pass to a function"," Stops the execution of a function. If specified, a given value is returned to the function caller","object.method().anothermethod()", "True or False", "Undefined","A datatype returned when result is not a number", "escape characters for newline, tab", "A pop up window", "Line of code that is ignored by using // at the start of a statement", "A JavaScript library that can do cool stuff to make web pages responsive", "Additional characteristics or properties of the element such as width and height of an image", "For Loop, and<br> Loop While"];

// Create card object
function Card(question, answer){
	this.question = question;
  this.answer = answer;
}

// getQuestion prototype
Card.prototype.getQuestion = function(){
	return `${this.question}`;
}

// getAnswer prototype
Card.prototype.getAnswer = function(){
	return `${this.answer}`;
}

// loop through the arrays

for(let counter=0; counter < concepts.length; counter++){
  var cardQuestion = concepts[counter];
  var cardAnswer = definitions[counter];

  // Create unique card name
  var cardName = "card" + counter;
  
  // Instantiate card object with question and answer
  cardName = new Card(cardQuestion, cardAnswer);

  // Create flashcard in the DIV
  // Modify to implement JQuery
  document.querySelector(".card-groups").innerHTML += "<div class=\"card\"> <div class=\"front\"> "  + cardName.getQuestion() + "</div> <div class=\"back\">" + cardName.getAnswer() + "</div></div>" ;
  
}
