var topicHTML, subtopicHTML, subsubtopicHTML, text=null, addsubtopic, addsubsubtopic, CHANGETOPIC;
var parser = new DOMParser();

topicHTML =  '<div>'+
    '    <div id="topic" class="largebox">'+
    '        <font class="topic-heading">Topic Name Added</font>'+
    ''+
    '        <div align="right" style="display: inline; float: right" onclick="addAddsubtopic(this.parentElement.parentElement)">'+
    '            <img src="symbols/addtopic.png" class="add" onmouseenter="changecolor(this, \'hover\')" onmouseleave="changecolor(this, \'addtopic\')">'+
    '        </div>'+
    ''+
    '        <div align="right" style="display: inline; float: right">'+
    '            <div class="dropdown">'+
    '                <img src="symbols/settingstopic.png" class="settings" onmouseenter="changecolor(this, \'settingshover\')" onmouseleave="changecolor(this, \'settingstopic\')">'+
    '                <div class="dropdown-content">'+
    '                    <p onclick="change(this.parentElement.parentElement.parentElement.parentElement, \'Change Topic\')">Edit</p>'+
    '                    <p onclick="del(this.parentElement.parentElement.parentElement.parentElement.parentElement)">Delete</p>'+
    '                </div>'+
    '            </div>'+
    '        </div>'+
    '    </div>'+
    '    <div class="child">'+
    ''+
    '    </div>'+
    '</div>';



subtopicHTML =  '<div>'+
    '    <div class="largebox" id="subtopic">'+
    '        <font class="subtopic-heading">Subtopic</font>'+
    ''+
    '        <div align="right" style="display: inline; float: right" onclick="addAddsubsubtopic(this.parentElement.parentElement)">'+
    '            <img src="symbols/addsubtopic.png" class="add" onmouseenter="changecolor(this, \'hover\')" onmouseleave="changecolor(this, \'addsubtopic\')">'+
    '        </div>'+
    ''+
    '        <div align="right" style="display: inline; float: right">'+
    '            <div class="dropdown">'+
    '                <img src="symbols/settingssubtopic.png" class="settings" onmouseenter="changecolor(this, \'settingshover\')" onmouseleave="changecolor(this, \'settingssubtopic\')">'+
    '                <div class="dropdown-content">'+
    '                    <p onclick="change(this.parentElement.parentElement.parentElement.parentElement, \'Change Sub-Topic\')">Edit</p>'+
    '                    <p onclick="del(this.parentElement.parentElement.parentElement.parentElement.parentElement)">Delete</p>'+
    '                </div>'+
    '            </div>'+
    '        </div>'+
    '    </div>'+
    ''+
    '    <div class="child">'+
    ''+
    '    </div>'+
    '</div>';



subsubtopicHTML =  '<div class="largebox" id="subsubtopic">'+
    '    <font class="subsubtopic-heading">*</font>'+
    ''+
    '    <div align="right" style="display: inline; float: right">'+
    '        <div class="dropdown demo">'+
    '            <img src="symbols/settingsubsubtopic.png" class="settings" onmouseenter="changecolor(this, \'settingshover\')" onmouseleave="changecolor(this, \'settingsubsubtopic\')">'+
    '            <div class="dropdown-content">'+
    '                <p onclick="change(this.parentElement.parentElement.parentElement.parentElement, \'Change Sub-Sub-Topic\')">Edit</p>'+
    '                <p onclick="del(this.parentElement.parentElement.parentElement.parentElement.parentElement)">Delete</p>'+
    '            </div>'+
    '        </div>'+
    '    </div>'+
    '</div>';



CHANGETOPIC = '<div class="largebox" id="add-topic" style="float: right">'+
    '    <input type="text" name="topic-name" placeholder="*" class="placeholder-subtopic" id="placeholder">'+
    '    <div align="right" style="display: inline; float: right" onclick="ADDTOPIC(this)">'+
    '        <img src="symbols/tick.png" class="tick-topic" onmouseenter="changecolor(this, \'tickhover\')" onmouseleave="changecolor(this, \'tick\')">'+
    '    </div>'+
    '</div>';

addsubtopic = '<div class="largebox" id="add-subtopic" style="float: right">'+
    '    <input type="text" name="topic-name" placeholder="*" class="placeholder-subtopic" id="placeholder">'+
    '    <div align="right" style="display: inline; float: right" onclick="Addsubtopic(this)">'+
    '        <img src="symbols/tick.png" class="tick-subtopic" onmouseenter="changecolor(this, \'tickhover\')" onmouseleave="changecolor(this, \'tick\')">'+
    '    </div>'+
    '</div>';

addsubsubtopic = '<div class="largebox" id="add-subsubtopic" style="float: right">'+
    '    <input type="text" name="topic-name" placeholder="*" class="placeholder-subsubtopic" id="placeholder">'+
    '    <div align="right" style="display: inline; float: right" onclick="Addsubsubtopic(this)">'+
    '        <img src="symbols/tick.png" class="tick-subsubtopic" onmouseenter="changecolor(this, \'tickhover\')" onmouseleave="changecolor(this, \'tick\')">'+
    '    </div>'+
    '</div>';

var editplaceholder =  '<div style="display: inline-block" >'+
    '    <input type="text" name="topic-name" placeholder="*" class="placeholder-custom" id="placeholder">'+
    '    <img src="symbols/tick.png" class="image" onmouseenter="changecolor(this, \'tickhover\')" onmouseleave="changecolor(this, \'tick\')"  onclick="setvalue(this.parentNode.children[0].value, this.parentNode)"  >'+
    '</div>';

var fonttag = '<font class="#">*</font>';






//
// function set(file)
// {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function ()
//     {
//         if(rawFile.readyState === 4)
//         {
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 var allText = rawFile.responseText;
//                 text = allText;
//             }
//         }
//     };
//     rawFile.send(null);
// }
//
// set('templates/topic.html');
// topicHTML = text;
// set('templates/subtopic.html');
// subtopicHTML = text;
// set('templates/subsubtopic.html');
// subsubtopicHTML = text;
// set('templates/addsubtopic.html');
// addsubtopic = text;
// set('templates/addsubsubtopic.html');
// addsubsubtopic = text;
// set('templates/changetopic.html');
// CHANGETOPIC = text;



//replace : sub.firstChild
function addtopic() {
    var allText = topicHTML;
    var b = document.getElementsByTagName('body');
    b = b[0];
    var eventName = document.getElementById("placeholder").value;
    if(eventName!=""){
        allText = allText.replace("Topic Name Added", eventName);
        b.innerHTML = b.innerHTML + allText;
    }
    else{
        b.innerHTML = b.innerHTML + allText;
    }
}

function ADDTOPIC(param) {
    var box = param.parentElement;
    var placeholder = box.firstElementChild.value;
    var val = box.firstElementChild.placeholder;
    var replaced = "";
    if(placeholder!=""){
        replaced= topicHTML.replace("Topic Name Added", placeholder);
    }
    else{
        replaced = topicHTML;
    }
    var sub = parser.parseFromString(replaced, "text/html");
    box.parentNode.replaceChild(sub.firstChild.children[1].firstChild, box);
}

function change(param, string) {
    var font=param.children[0];
    console.log(font.innerHTML);
    var n = editplaceholder.replace("*", string);
    var sub = parser.parseFromString(n, 'text/html');
    font.parentNode.replaceChild(sub.firstChild.children[1].firstChild , font);
}

function addAddsubtopic(param) {
    var child = param.children[1];
    var count = child.children.length+1;
    var t = "Add Sub-Topic "+count;
    var n = addsubtopic.replace("*", t);
    var sub = parser.parseFromString(n, "text/html");
    // console.log(sub.firstChild.children[1].innerHTML);
    child.appendChild(sub.firstChild.children[1].firstChild);
    // child.innerHTML = child.innerHTML+addsubtopic;
}

function Addsubtopic(param) {
    var box = param.parentElement;
    var placeholder = box.firstElementChild.value;
    var val = box.firstElementChild.placeholder;
    var replaced = "";
    if(placeholder!=""){
        replaced= subtopicHTML.replace("Subtopic", placeholder);
    }
    else{
        replaced = subtopicHTML.replace("Subtopic", val.replace("Add ",""));
    }
    var sub = parser.parseFromString(replaced, "text/html");
    // console.log(sub.firstChild.children[1].innerHTML);
    box.parentNode.replaceChild(sub.firstChild.children[1].firstChild, box);
}

// function changesubtopic(param) {
//     // var n = addsubtopic.replace("*", "Change Sub-Topic");
//     // var sub = parser.parseFromString(n, 'text/html');
//     // param.parentNode.replaceChild(sub.firstChild.children[1].firstChild , param);
//     var font=param.children[0];
//     console.log(font.innerHTML);
//     var n = editplaceholder.replace("*", "Change Sub-Topic");
//     var sub = parser.parseFromString(n, 'text/html');
//     font.parentNode.replaceChild(sub.firstChild.children[1].firstChild , font);
// }

function addAddsubsubtopic(param) {
    var child = param.children[1];
    var count = child.children.length+1;
    var t= "Add Sub-Sub-Topic "+count;
    var n = addsubsubtopic.replace("*", t);
    var sub = parser.parseFromString(n, 'text/html');
    child.appendChild(sub.firstChild.children[1].firstChild);
}

function Addsubsubtopic(param){
    var box = param.parentElement;
    var placeholder = box.firstElementChild.value;
    var val = box.firstElementChild.placeholder;
    var replaced = "";
    if(placeholder!=""){
        replaced = subsubtopicHTML.replace("*", placeholder);
    }
    else{
        replaced = subsubtopicHTML.replace("*", val.replace("Add ", ""));
    }
    var sub = parser.parseFromString(replaced, 'text/html');
    box.parentNode.replaceChild(sub.firstChild.children[1].firstChild, box);
}

// function changesubsubtopic(param) {
//     // var n = addsubsubtopic.replace("*", "Change Sub-Sub-Topic");
//     // var sub = parser.parseFromString(n, 'text/html');
//     // param.parentNode.replaceChild(sub.firstChild.children[1].firstChild , param);
//     var font=param.children[0];
//     console.log(font.innerHTML);
//     var n = editplaceholder.replace("*", "Change Sub-Sub-Topic");
//     var sub = parser.parseFromString(n, 'text/html');
//     font.parentNode.replaceChild(sub.firstChild.children[1].firstChild , font);
// }

function del(param){
    fade(param)
    // var parent = param.parentNode;
    // parent.removeChild(param);
}

function changecolor(param, symbol) {
    param.setAttribute("src", "symbols/"+symbol+".png");
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 20);
}

function setvalue(string, param) {
    var paramid = param.parentNode.id;
    // console.log(paramid);
    var classname = "";
    if(paramid=="topic")
        classname="topic-heading";
    else if (paramid=="subtopic")
        classname="subtopic-heading";
    else
        classname="subsubtopic-heading";

    // console.log(classname);

    // console.log(string);
    var replaced = fonttag.replace("*", string);
    replaced = replaced.replace("#", classname);
    // console.log(replaced);
    var  sub = parser.parseFromString(replaced, 'text/html');
    param.parentNode.replaceChild(sub.firstChild.children[1].firstChild , param);
}