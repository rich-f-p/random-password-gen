# random-password-gen   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
The following is a random password generato with the ability to ask the user for a set criteria. This consist of allowing the user to choose password length of 8-128 characters, with the choice of uppercase, lowercase, numbers, and symbols. With that, at least one of every chosen character type will be present in the random password.

### Technology
Down below will be necessary tech needed in order to run the files:

* windows 10 or equivalent operating system
* IDE capable of running HTML, CSS, and Javascript
* Web browser
* (recommended: Git Bash, VS Code, Chrome browser)

### Installation
Steps to download and run application:
* Fork the repository and clone through terminal
* Open file in IDE 
* Open the file in Web browser to view
At this point in time changes can be made if desired. For example, new characters to the special character array. 

### Walkthrough the application
Once installations are complete the file is ready to be opened in the browser. When that is done start by clicking the generate password button. This will then lead to a prompt asking for the length of the password. When given a input it will move on to ask questions for desired criteria for the password. For yes click "ok" and for no click "cancel".Finally the password will be generated and viewable with in the text container. 

A few notes when using the application, if number is not within in the lower and upper limit it will not generate a password. Instead it will alert the user to try again, and if none of the criteria are chosen then an alert will also ask the user to try again. At least one specific criteria must be choosen in order for the program to run. 

### Link
https://rich-f-p.github.io/random-password-gen/

The following is what the application looks like:
<img src="./assets/images/Animation.gif" alt="project-image"/>

#### Code
* HTML
* CSS
* Javascript
* Github

```
function randomchar(a){
  var i = Math.floor(Math.random()*a.length);
  return a[i];
}
```
```
pass = pass.sort(function(a, b){return 0.5 - Math.random()});
```
The above code played a key role in randomizing the final password. Function randomchar would extract parts from the array that would be included in the password. Pass.sort was able to provide a random sort to get rid of a reccuring pattern within the password.  

#### Author
Richard Ferry
* Github: https://github.com/rich-f-p
### License
* [License: MIT](https://opensource.org/licenses/MIT) : click to learn more
