console.log('before set')
$(document).ready(function() 
    {
      console.log('inside $(document)')
      var addExecuteButtons = function() 
        {
        var styles = 'position: fixed; z-index: 9999; bottom: 20px; left: 20px;';
            $('body').append("<input type=text id='code' value='console.log(12)'/>")
            $('body').append('<input type=button id=execute value="execute!"/>');
            $('body').append('<pre id=result>')
        };
      $(document).on('click', '#execute', function() 
        {                             
            code  = $('#code').val()             
            var options = {
                                action : 'execute',
                                data: { code: code}
                          }
            chrome.extension.sendMessage(options)
        });
      addExecuteButtons();
      a= 23
      //chrome.extension.sendMessage();
      //$('a').html('xss')
    });
    
console.log('after set')