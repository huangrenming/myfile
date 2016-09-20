  var toggle = function() {
    var args = arguments,argId = 0;

    var toggler = function() {
      if(argId < args.length){
        args[argId].apply( this , arguments );
        argId++;
        if(argId == args.length){
          argId = 0;
        }
      }
    };
    return toggler;
  };
