const factEl = document.getElementById('fact');
const personEl = document.getElementById('person');
const newFactBtn = document.getElementById('new-fact');



// Generate random quote
const randomFact = [ {fact:
    'The human nose can detect over 1 trillion different scents, making it one of the most advanced and sensitive scent detection systems in the animal kingdom.'
},
{ fact: 'The name "Volkswagen" means "people`s car" in German. The Volkswagen Beetle was originally designed to be a low-cost and practical vehicle that could be owned by ordinary German citizens..'

},
{
    fact: 'The shortest war in history lasted only 38 minutes, between Britain and Zanzibar on 27 August 1896.'
},
{
    fact: 'The moon is approximately 238,855 miles away from Earth.'
},
{
    fact: 'Ants use chemical pheromones to communicate with each other during a migration, helping to coordinate the movement of individuals and the transfer of food and other resources.'
},
{
    fact: 'The lifespan of an ant varies depending on the species and the role of the individual within the colony. Worker ants, which make up the majority of the colony, typically live for a few months to a couple of years.Queen ants, which are responsible for laying eggs and maintaining the colony, can live for several years, sometimes even up to a decade or moreMale ants, which are involved in mating with the queen, typically have a shorter lifespan, living only a few weeks or months.'
},

{
    fact: 'Eggs can be used in cosmetics and personal care products, such as shampoos, face masks, and skin creams, due to their moisturizing and emulsifying properties..'
},
{
    fact: 'In addition to protecting the tips of the fingers and toes, nails also play a role in our sense of touch and can provide clues about our overall health. For example, changes in the appearance or texture of the nails can be a sign of certain health conditions, such as anemia, thyroid disease, and fungal infections.'
},
{
    fact: 'The most effective way to prevent many types of cancer is to make healthy lifestyle choices, such as eating a balanced diet, exercising regularly, avoiding tobacco use, and limiting alcohol consumption.'
},
{
    fact: 'Great Barrier Reef, located off the coast of Australia, is the world`s largest coral reef system and is home to thousands of different species of plants and animals? It is so large that it can even be seen from space!'
},
{
    fact: 'The number 786 is considered a sacred number in Islam and is often used as a symbol of good fortune. In Arabic numerals, the individual digits of 786 can be rearranged to form the word "Bismillah" (In the name of God), which is often written as a preface to Islamic texts.'
},
{
    fact: 'Hummingbirds are the only birds that can fly backwards? They accomplish this feat by being able to rotate their wings in a full circle, allowing them to fly forwards, backwards, and even hover in place.'
},
{
    fact: 'To make a crowd scene appear more realistic, filmmakers use a mix of CGI and extras, and may also use camera tricks and editing to create the illusion of a larger crowd. Additionally, special software and tools are often used to choreograph crowd movements, such as walking patterns, and to create a sense of chaos and unpredictability.'
},
{
    fact: 'The world`s largest pyramid is not in Egypt, but in Mexico. The Great Pyramid of Cholula is a massive ancient structure covering an area of over an acre.'
},
 {
    fact: 'The fear of long words is called Hippopotomonstrosesquippedaliophobia.'
 },
 {
    fact: 'Bananas are berries, while strawberries are not berries.'
 },
 {
    fact: 'A group of flamingos is called a flamboyance.'
 }


];




// Event Listener
newFactBtn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * randomFact.length)
    factEl.innerText = randomFact[random].fact;

});