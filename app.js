console.log ("Hello World");


let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];


for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
      for (var k = 0; k < noun.length; k++) {
        var dominio = pronoun[i]+ adj[j]+ noun[k];
        console.log (dominio + ".com");
      }
    }
  }
