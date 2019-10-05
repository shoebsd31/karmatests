var challenge3=(function(){

    function nbDig(n,d)
    {
      var digitString=d+'';
      var totalCount=0;
        for(var i=0;i<=n;i++)
        {
          var square=i*i;
          var squareString=square+'';
          var regexPatternToMatchDigit = new RegExp(digitString, 'gi');  
          var matchedString=squareString.match(regexPatternToMatchDigit);
          if(matchedString && matchedString.length>0)
              totalCount+=matchedString.length;
        }
        return totalCount;
    }
    return{
        nbDig:nbDig
    }

})();