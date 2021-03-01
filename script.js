// Use the below URL to visualise JSON Data in the browser 
//  https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

var imageContainer = $("#img_container");

//Hit the API.

function displayImages(data){
    //To create images dynamically in jQuery.
    //console.log("yes");
    $('<img >', {
        src: data.url,
        height : '100%',
        width : '100%'
    }).appendTo('#img_container');
}

$.ajax({
    url:"https://api.nasa.gov/planetary/apod",
    method: 'GET',
    success : displayImages,
    data : { // collects response in data, holds the url parameters
        api_key : 'DEMO_KEY',
       // date : '2021-01-01'
    }
});