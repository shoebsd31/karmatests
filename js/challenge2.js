var challenge2=(function(){

    function accum(str)
    {
        var result='';
        var strArray=str.split('');
        for(var i=0;i<str.length;i++)
        {
            result=result.concat(strArray[i].toUpperCase()+getCharBus(strArray[i],i));
          
        }
        return result.substring(0, result.length - 1);
    }
    function getCharBus(character,count)
    {
      character=character.toLowerCase();
      if(count==0)
        return "-";
        var str='';
      for(var i=0;i<count;i++)
      {
        str+=character;
      }
      return str+"-";
    }
    return{
        accum:accum
    }

})();