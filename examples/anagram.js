var output=[],split_word=[],anagram=function(t){function r(t){for(var r,o,u=t.length;0!==u;)o=Math.floor(Math.random()*u),u-=1,r=t[u],t[u]=t[o],t[o]=r;return t}for(var o=0;o<t.length;o++)split_word.push(t[o]);for(var u=0;u<split_word.length;u++)output.push(Peanut.shuffle(split_word[u]));return r(output).join("")};