function page1() {
    document.getElementById("home").style.display = "block";
    document.getElementById("education").style.display = "none";
    document.getElementById("experience").style.display = "none";
    document.getElementById("project").style.display = "none";

}
function page2() {
    document.getElementById("education").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("experience").style.display = "none";
    document.getElementById("project").style.display = "none";
}
function page3() {
    document.getElementById("experience").style.display = "block";
    document.getElementById("education").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("project").style.display = "none";
}
function page4() {
    document.getElementById("project").style.display = "block";
    document.getElementById("education").style.display = "none";
    document.getElementById("experience").style.display = "none";
    document.getElementById("home").style.display = "none";
}
var date = new Date()
var time = date.getHours()
var str = "";
if (time < 12) {
    str = "Good Morning!!!";
} else if (time < 18) {
    str = "Good Afternoon!!!";
} else {
    str = "Good Evening!!!";
}
let month=date.getMonth()+1;
document.getElementById("greet").innerHTML = str;
document.getElementById("date").innerHTML = "Today is "+date.getDate()+"/"+month+"/"+date.getFullYear();
document.getElementById("time").innerHTML = "Current time is "+ date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

