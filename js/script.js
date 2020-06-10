var concepts = ["JavaScript", "Operators", "Variables", "Variable naming conventions", "Functions", "Strings", "Methods", "Arguments", "Parameters", "Return", "Chaining methods", "Booleans", "Undefined", "NaN", "Escape", "Alert", "Comments", "jQuery", "Attributes"];

var definitions = ["A web scripting language", "mathematical operators, logical operators", "A temporary store for data in computer memory", "Begin with lower case only, camelCase", "Break tasks into small pieces", "Anything in quotes, string methods","Operations that do not return anything", "What the function works with", "What you pass to a function","A keyword","object.method().anothermethod()", "True or False", "Undefined","A datatype returned when result is not a number", "escape characters for newline, tab", "A pop up window", "Ignored by the JavaScript Engine", "A JavaScript library", "Features within HTML tags"];

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
for(let counter=0; counter <= concepts.length; counter++){
	var cardQuestion = concepts[counter];
    var cardAnswer = definitions[counter];
  
  //console.log(cardQuestion,cardAnswer);
  
  // Create card name
    var cardName = "card" + counter;
  
  //console.log(cardname);
  
  // Instantiate object
    cardName = new Card(cardQuestion, cardAnswer);

    cardObject = document.querySelector(".card-groups").innerHTML = "<div class=\"card\">" + cardName.getQuestion + "</div>" ;
    //cardObject.innerHTML
  
	//console.log(cardName.getQuestion(), cardName.getAnswer());
  //document.write = "<div class=\"card\">" + cardName.getQuestion() + "</div>";
	//console.log(card1.getAnswer());
  
}
