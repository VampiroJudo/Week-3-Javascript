"use strict"
var read = require('read');

class Quiz {
	constructor (list){			
		this.list = list; // contains the array
		this.currentQ = 0; // defines the position in array
		
	}
	getAnswer(){
	var	options = {
    		prompt: this.list[this.currentQ].questions

		}
			read(options, this.checkAnswer.bind(this))

	}

	 //goes through the questions and determines if the answers are correct and were to proceed after. 
	checkAnswer (err, answer){
		if (this.list[this.currentQ].answers === answer){
			this.list[this.currentQ].questions += 1; 
		} else {
			console.log("Incorrect Answer");
		}
	}

}




module.exports = Quiz;


