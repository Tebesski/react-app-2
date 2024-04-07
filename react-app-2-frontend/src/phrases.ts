export default function phrases() {
   const phraseList = [
      "gluten-free",
      "zero-sugar, maximum taste",
      "now with Alice Cooper",
      "extra crispy",
      "100% organic",
      "vegan friendly",
      "low carb",
      "DIY",
      "vivec approves",
      "made by ROBCO",
      "non-GMO",
      "cold-pressed",
      "i <3 NY",
      "made in china",
      "just add water",
      "please hire me",
      "shiny!",
      "the winds howling...",
      "you're breathtaking",
      "winter is coming",
      "the cake is a lie",
      "do a barrel roll",
      "all your base are belong to us",
      "hadouken!",
      "have i ever told you the definition of insanity?",
      "hello world",
      "leave the gun, take the cannoli",
      "five minutes, turkish",
      "i should go",
      "i'm sorry, dave",
      "may the force be with you",
      "say hello to my little friend",
      "wake the f@ck up, samurai",
   ]

   const randomIndex = Math.floor(Math.random() * phraseList.length)

   return phraseList[randomIndex]
}
