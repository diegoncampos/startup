var app = angular.module('app', []);

app.controller('Ctrl', function($scope) {

    $scope.item = localStorage.getItem('data');

    $scope.save = function(){

        localStorage.setItem('data', $scope.item);
        alert("Saved: " + localStorage.getItem('data'));

    };

    $scope.clear = function(){

        var r = confirm("Clear Data?");

        if (r === true) {
            // localStorage.removeItem('data');
            // $scope.item = "";
            localStorage.clear();
            $scope.item = "";
        }

    };

    //Websockets

    var wsUri = "ws://echo.websocket.org/"; 
    var output;  
    function init() { 
        output = document.getElementById("output"); 
        testWebSocket(); } 

        function testWebSocket() { 
            websocket = new WebSocket(wsUri); 
            websocket.onopen = function(evt) { onOpen(evt) }; 
            websocket.onclose = function(evt) { onClose(evt) }; 
            websocket.onmessage = function(evt) { onMessage(evt) }; 
            websocket.onerror = function(evt) { onError(evt) }; }  
            function onOpen(evt) { writeToScreen("CONNECTED"); doSend("WebSocket rocks"); }  
            function onClose(evt) { writeToScreen("DISCONNECTED"); }  
            function onMessage(evt) { writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>'); 
            websocket.close(); }  
            function onError(evt) { writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data); }  
            function doSend(message) { writeToScreen("SENT: " + message);  websocket.send(message); }  
            function writeToScreen(message) { var pre = document.createElement("p"); 
            pre.style.wordWrap = "break-word"; 
            pre.innerHTML = message; 
            output.appendChild(pre); }  
            window.addEventListener("load", init, false);

    //drag and drop

    function handleFileSelect(evt) {
        evt.stopPropagation();
        evt.preventDefault();

          var files = evt.dataTransfer.files; // FileList object.

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
          f.size, ' bytes, last modified: ',
          f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
          '</li>');
  }
  document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
}

function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}

  // Setup the dnd listeners.
  var dropZone = document.getElementById('drop_zone');
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', handleFileSelect, false);


});