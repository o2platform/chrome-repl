$(function()
{
    var container = $('.console')
    var controller = container.console({
      promptLabel: 'REPL> ',
      commandValidate:function(line){
        if (line == "") return false;
        else return true;
      },
      commandHandle:function(line)
        {
            try
            {
                var result = eval(line)
                return [{msg: result, className:"jquery-console-message-value"}]
            }
            catch(error)
            {
                return [{msg: error, className:"jquery-console-message-error"}]
            }
            /*[{msg:"=> [12,42]",
                   className:"jquery-console-message-value"},
                  {msg:":: [a]",
                   className:"jquery-console-message-type"}]*/
        },
      autofocus:true,
      animateScroll:true,
      promptHistory:true,
      _charInsertTrigger:function(keycode,line){
         // Let you type until you press a-z
         // Never allow zero.
       //  return !line.match(/[a-z]+/) && keycode != '0'.charCodeAt(0);
      }
    });
});