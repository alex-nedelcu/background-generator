(function (window, document, undefined) {
	/**
	 * Selectors
	 */
	 var outputText = document.querySelector("#output-text");
	 var startColour = document.querySelector("#start-color");
	 var endColour = document.querySelector("#end-color");
	 var body = document.querySelector("body");
	 var randomButton = document.querySelector("#random-color");

	 /**
	  * Methods
	  */
	  function updateBackground(event) {
	  	  body.style.background = 
	  	  "linear-gradient(to right, " 
	  	  + startColour.value 
	  	  + ", " 
	  	  + endColour.value 
	  	  + ")";

	  	  randomButton.style.background = "linear-gradient(to right, " 
	  	  + startColour.value 
	  	  + ", " 
	  	  + endColour.value 
	  	  + ")";

	  	  outputText.innerText = 
	  	  "body {\n"
	  	  + "\tbackground: linear-gradient(to right, "
	  	  + startColour.value
	  	  + ", "
	  	  + endColour.value 
	  	  + ");\n"
	  	  + "}";
	  }

	  function generateRandomBackground(event) {
	  		startColour.value = "#" + Math.floor(Math.random()*16777215).toString(16);;
	  		endColour.value = "#" + Math.floor(Math.random()*16777215).toString(16);;
	  		updateBackground();
	  }

	  /**
	   * Event-handlers
	   */
	   startColour.addEventListener("input", updateBackground);
	   endColour.addEventListener("input", updateBackground);
	   randomButton.addEventListener("click", generateRandomBackground);

})(window, document)