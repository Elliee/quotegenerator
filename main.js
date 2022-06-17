let quotes =
[
  `"There's no crying in baseball!" - A League of Their Own (1992)`,
  `"That'll do donkey, that'll do.." - Shrek (2001)`,
  `"I'm not like a regular mom, I'm a cool mom!" - Mean Girls (2004)`,
  `"Keep the change, ya filthy animal." - Home Alone (1990)`,
  `"What is this? A school for ants!?" - Zoolander (2001)`,
  `"Help me, I'm poor." - Bridesmaides (2011)`,
  `"We have so much in common, we both love soup and snow peas, we love the outdoors, and talking and not talking." - Best in Show (2001)`,
  `"You got it, Joben." - I Love You Man (2009)`,
  `"Take off your vest, you look like Aladdin." - Superbad (2007)`,
  `"I've been called the songbird of my generation." - Step Brothers (2008)`,
  `"Yo hold my poodle! Hold my poodle!" - White Chicks (2004)`,
  `"You is kind. You is smart. You is important." - The Help (2011)`,
  `"I'm not bad. I'm just drawn that way." - Who Framed Roger Rabbit (1988)`,
  `"Hello. My name is Inigo Montoya. You killed my father. Prepare to die." - The Princess Bride (1987)`,
  `"Life moves pretty fast. If you don't stop and look around once in a while, you could miss it." - Ferris Bueller's Day Off (1986)`
]

let quotePara = document.getElementById("quote-para");
let movieImg = document.getElementById("movie-img");
function getQuote() {
  let randomNum = Math.floor(Math.random() * (quotes.length));
  quotePara.innerHTML = quotes[randomNum];


  if (quotePara.innerHTML.includes("Shrek")) {
    movieImg.innerHTML = "<img src='images/shrek.png'>";
  } else if (quotePara.innerHTML.includes("Superbad")) {
    movieImg.innerHTML = "<img src='images/superbad.jpg'>";
  } else if (quotePara.innerHTML.includes("Mean Girls")){
    movieImg.innerHTML = "<img src='images/meangirls.jpg'>";
  } else if (quotePara.innerHTML.includes("A League of Their Own")) {
    movieImg.innerHTML = "<img src='images/league.jpg'>";
  } else if (quotePara.innerHTML.includes("Home Alone")) {
    movieImg.innerHTML = "<img src='images/homealone.jpg'>";
  } else if (quotePara.innerHTML.includes("Zoolander")){
    movieImg.innerHTML = "<img src='images/zoolander.jpg'>";
  } else if (quotePara.innerHTML.includes("Bridesmaides")) {
    movieImg.innerHTML = "<img src='images/bridesmaides.jpg'>";
  } else if (quotePara.innerHTML.includes("Best in Show")) {
    movieImg.innerHTML = "<img src='images/bestinshow.jpg'>";
  } else if (quotePara.innerHTML.includes("I Love You Man")) {
    movieImg.innerHTML = "<img src='images/iloveyouman.jpg'>";
  } else if (quotePara.innerHTML.includes("Step Brothers")) {
    movieImg.innerHTML = "<img src='images/stepbrothers.jpg'>";
  } else if (quotePara.innerHTML.includes("White Chicks")) {
    movieImg.innerHTML = "<img src='images/whitechicks.jpg'>";
  } else if (quotePara.innerHTML.includes("The Help")) {
    movieImg.innerHTML = "<img src='images/thehelp.jpg'>";
  } else if (quotePara.innerHTML.includes("Who Framed Roger Rabbit")) {
    movieImg.innerHTML = "<img src='images/rogerrabbit.jpg'>";
  } else if (quotePara.innerHTML.includes("The Princess Bride")) {
    movieImg.innerHTML = "<img src='images/princess.jpg'>";
  } else if (quotePara.innerHTML.includes("Ferris Bueller's Day Off")) {
    movieImg.innerHTML = "<img src='images/ferris.jpg'>";
  }
}
