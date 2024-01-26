str.trim() method is used to remove the white spaces from both the ends of the given string.

Syntax:

str.trim()

Return value: This method returns a new string, without any of the leading or the trailing white spaces.

You can use the following code to strip whitespaces from String in JavaScript:

<!DOCTYPE html> 
<html> 
<head> 
    <title> 
        How to remove spaces from 
        a string using JavaScript? 
    </title> 
</head> 
<body> 
    <h1 style="color: green"> 
        Online Interview Questions 
    </h1> 
    <b> 
        How to remove spaces from 
        a string using JavaScript? 
    </b> 
    <p> 
        Original string is:  
        Online Interviews Questions 
    </p> 
    <p> 
        New String is:  
        <span class="output"></span> 
    </p> 
    <button onclick="removeSpaces()"> 
        Remove Spaces 
    </button> 
    <script type="text/javascript"> 
        function removeSpaces() { 
            originalText =  
                "Online Interviews Questions";
            newText =  
                originalText.replace(/ /g, ""); 
            document.querySelector('.output').textContent = newText; 
        } 
    </script> 
</body> 
</html>