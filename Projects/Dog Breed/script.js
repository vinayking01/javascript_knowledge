var details  = document.getElementById("fetch");
details.addEventListener('click', FetchDogImage);

var img1 = document.getElementById("img1");


function FetchDogImage()
{
    
    // This object is used to interact with servers. It can retrieve data from a URL without having to do a full page refresh.
    var xhrRequest = new XMLHttpRequest();

    
    // this method initializes a new request, specifying the HTTP method (GET), the URL to send the request to, and whether the request should be asynchronous (true in this case).
    xhrRequest.open('Get','https://dog.ceo/api/breeds/image/random',true); // third paramter for asynchronous

    // This function is called when the request completes successfully. Inside this function, you can handle the response from the server. This is because the onload function is where you handle the response from the server after it has been successfully loaded. you won't be able to hjandle the reponse if you haven;t used the onload function
    xhrRequest.onload = function()
    {
        // it will print the repsonse it get from the server. the repsonse we are getting in json formate which is in string key value pairs.
        console.log(xhrRequest.response);

        var responseJSON = JSON.parse(xhrRequest.response); // convert into the json into javascript object for better understand and reference. and opposite function is stringify to convert object to json
        console.log(responseJSON);
        var imageUrl  = responseJSON.message;
        // console.log(imageUrl);
        img1.src = imageUrl;

    };

    xhrRequest.onerror = function () // this is to handle errors 
    {
        console.log(" Request failed ")
    }
    
    xhrRequest.send(); // finally in this steps request is sent.
}

// BONUS TIP  - JSON

/*
Definition -  JSON stands for JavaScript Object Notation. It is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. JSON is often used to transmit data between a server and a web application

(A) - JSON.stringfy - it is the function which converts the object into into JSON.


*/

var p = {
    name: "Amit",
    age : 22,
}

var object_as_string  = JSON.stringify(p);
console.log(object_as_string);

//(B) JSON.parse  - it turns a string of JSON text back into the object.

var old_object = JSON.parse(object_as_string);
console.log(old_object);