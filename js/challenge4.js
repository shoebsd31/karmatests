var challenge4=(function(){
    function isValid(str){
        if(str.length>0 && (str[0]==='_' || str[0]==='$' || str.match(/^[A-Z]/i)))
        {
          //string contains space or hifen
          if(/\s/.test(str) || (/\-/).test(str))
          {
            return false
          }
          return true;
        }
        return false;
      }
      
      
    return{
        isValid:isValid
    }

})();