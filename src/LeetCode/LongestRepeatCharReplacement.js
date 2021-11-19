var characterReplacement = function(s, k) {
  var maxlen = 0;
  var counter = {};
  var start = 0;
  for (var end = 0; end < s.length; end++) {
      if (!counter[s[end]]) {
          counter[s[end]] = 1;
      } else {
          counter[s[end]]++;
      }

      var maxRepeatChar = Math.max(...Object.values(counter));
      if ((end - start +1) - maxRepeatChar > k) {
          counter[s[start]]--;
          start++;
      }



      maxlen = Math.max(maxlen, end - start +1);
  }
  return maxlen;
};

//dont need to update maxRepeatChar because the maxlen will only get larger ONLY IF we find a maxRepeatChar greater than the greatest one we have already found