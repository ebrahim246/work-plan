// Take the text from the input boxes
// save text to local storage
// add time frame
// colour input boxes based on the time frame
var timeNow= parseInt(moment().format("hh","hA"))
var timeArray= $(".boxText").map(function(){
    return this
    })
    var newArray= timeArray.prev().map(function(){
        return this.innerHTML
    })
    
    newArray= [...newArray]
    console.log(newArray)
console.log(timeArray)
console.log(timeNow)
$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var boxText= $(this).siblings(".boxText").val()
        var time= $(this).parent().attr("id")
        console.log("this works")
        console.log(boxText)
        console.log(time)
        localStorage.setItem(time, boxText)
    })
    newArray.forEach(function(element){
        var input= element.next()
        console.log(input)
        var time = $(element);
    console.log(element)
    var text= parseInt(element)
    console.log(text)
    
    })


$("#9 .boxText").val(localStorage.getItem("9"))
$("#10 .boxText").val(localstorage.getItem("10"))
$("#11 .boxText").val(localstorage.getItem("11"))
$("#12 .boxText").val(localstorage.getItem("12"))
$("#13 .boxText").val(localstorage.getItem("13"))
$("#14 .boxText").val(localstorage.getItem("14"))
$("#15 .boxText").val(localstorage.getItem("15"))
$("#16 .boxText").val(localstorage.getItem("16"))
$("#17 .boxText").val(localstorage.getItem("17"))
    })


  
