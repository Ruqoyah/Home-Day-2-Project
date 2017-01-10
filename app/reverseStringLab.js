'use strict'

module.exports = {

	reverseString: function (string) {
		var reverse = string.split("").reverse().join("");
        if (reverse === string){
            return true;
  		}
  			
  		else {
  			return reverse;
  		}

	}
}

 
 