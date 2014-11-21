'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({text: 'REPL'});
//chrome.browserAction.setIcon({path:'images/monkey.jpg'})

console.log('\'Allo \'Allo! Event Page for Browser Action');

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("inside chrome.extension.onMessage.addListener")
  //if(request) {
//    var storageService = new markticleStorageService();
//    if(request.action === 'add') {
//      storageService.add(request.data);
//    }
  //}
  var code = request.data.code
  //code = '12+12'
  exec(code)
  

  //console.log(eval(code))
  //a = request
  //sender = sender
  //reload()
  
});

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  console.log("inside chrome.extension.onRequest.addListener")
});

var a       = eval(12+12);
var sender = null
console.log('after reload...')


//chrome.browserAction.setBadgeText({text:'REPL'})

var reload = function() { 
    console.log('reloading')
    chrome.runtime.reload()}

var exec = function(code) { 
    console.log('invoking: '  + code)
    var result = eval(code);
    console.log('result: ' + result)
    return result }
//chrome.tabs.create({url:'options.html'})