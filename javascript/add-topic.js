// function addtopic() {
//
//     $.get('test.html')
//         .success(function(data) {
//             $('div.content').html(data);
//         });
//
//
//     var body = document.getElementsByTagName("body");
//     body = body[0];
//     var eventName = document.getElementById("placeholder").value;
//     // document.write(eventName+"oidfsdl")
//     var topic = document.getElementById("topic");
//     var innertopic = topic.children;
//     document.write(innertopic.length.toString());
//     if(eventName!="") {
//         // document.write(eventName);
//         innertopic.innerHTML = eventName;
//     }
//     else {
//         // document.write("Topic Name Added");
//         innertopic.innerHTML = "Topic Name Added";
//     }
//
//     document.write(topic.firstElementChild.innerHTML);
//     body.appendChild(topic);
// }