/* eslint-disable no-alert */

/**************
 *   SLICE 1
 **************/

function updateCoffeeView(coffeeQty) {
  // document.querySelector("#coffee_counter").innerHTML = coffeeQty;
  let counter = document.querySelector("#coffee_counter");
  counter.innerText = coffeeQty
  // updates the coffee counter to display the current coffee count
}

function clickCoffee(data) {
  // increments the coffee count by one
  data.coffee = data.coffee + 1;
  updateCoffeeView(data.coffee);
  renderProducers(data)
  // updates the coffee counter element with the incremented value
}

/**************
 *   SLICE 2
 **************/

function unlockProducers(producers, coffeeCount) {
  // console.log(coffeeCount);
  /* - changes `unlocked` to `true` when the player's coffee count
   is equal to or larger than half the initial price of the producer*/
   for (let i = 0; i < producers.length; i++) {
     let obj = producers[i];
    //  console.log(obj.price);
     if (obj.price === coffeeCount || (coffeeCount * 2) >= obj.price) {
       obj.unlocked = true;
      //  console.log(`something was changed!!`);
    }
   }
  // - does not set `unlocked` to `false` once a producer has been unlocked, even if the coffee count drops again
  // your code here
  // console.log(producers);
  return producers;
}

function getUnlockedProducers(data) {
 /* - returns an array of producer objects

  - does not mutate the data */
  const results = data.producers;
  // - filters out producer objects that are not unlocked
  return results.filter(obj => obj.unlocked === true);
}



function makeDisplayNameFromId(id) {
  return id.split('_').map(elem => {
    return elem.slice(0,1).toUpperCase() + elem.slice(1);
  }).join(' ');
}

// You shouldn't need to edit this function-- its tests should pass once you've written makeDisplayNameFromId
function makeProducerDiv(producer) {
  const containerDiv = document.createElement('div');
  containerDiv.className = 'producer';
  const displayName = makeDisplayNameFromId(producer.id);
  const currentCost = producer.price;
  const html = `
  <div class="producer-column">
    <div class="producer-title">${displayName}</div>
    <button type="button" id="buy_${producer.id}">Buy</button>
  </div>
  <div class="producer-column">
    <div>Quantity: ${producer.qty}</div>
    <div>Coffee/second: ${producer.cps}</div>
    <div>Cost: ${currentCost} coffee</div>
  </div>
  `;
  containerDiv.innerHTML = html;
  return containerDiv;
}

function deleteAllChildNodes(parent) {
  while(parent.firstChild) parent.removeChild(parent.firstChild)
}

function renderProducers(data) {
  const contain = document.getElementById('producer_container');
  // console.log(data);
  const datas = data.producers;

  // console.log(producingProd[0]);
  producingProd = unlockProducers(datas, data.coffee)
  // console.log(producingProd);

  let result = getUnlockedProducers(data);
  // const someProducerDiv = makeProducerDiv(producingProd[0])
  // console.log(someProducerDiv);
// console.log(result);

  if (contain.childNodes.length) deleteAllChildNodes(contain);
  for (let i = 0; i < result.length; i++) {
    let theDivChild = makeProducerDiv(result[i]);
    // console.log(theDivChild);
    contain.appendChild(theDivChild);
  }
  /*
    - appends some producer div elements to the producer container
    - unlocks any locked producers that need to be unlocked
    - only appends unlocked producers
    - deletes the producer container's children before appending new producers
    - is not in some way hardcoded to pass the tests
  */
}

/**************
 *   SLICE 3
 **************/

function getProducerById(data, producerId) {
  // your code here
}

function canAffordProducer(data, producerId) {
  // your code here
}

function updateCPSView(cps) {
  // your code here
}

function updatePrice(oldPrice) {
  // your code here
}

function attemptToBuyProducer(data, producerId) {
  // your code here
}

function buyButtonClick(event, data) {
  // your code here
}

function tick(data) {
  // your code here
}

/*************************
 *  Start your engines!
 *************************/

// You don't need to edit any of the code below
// But it is worth reading so you know what it does!

// So far we've just defined some functions; we haven't actually
// called any of them. Now it's time to get things moving.

// We'll begin with a check to see if we're in a web browser; if we're just running this code in node for purposes of testing, we don't want to 'start the engines'.

// How does this check work? Node gives us access to a global variable /// called `process`, but this variable is undefined in the browser. So,
// we can see if we're in node by checking to see if `process` exists.
if (typeof process === 'undefined') {
  // Get starting data from the window object
  // (This comes from data.js)
  // const data = window.data;
  // console.log(data);
  // // console.dir(Object.entries(data));
  // let test = data.producers
  // console.log(test.filter(obj => obj.unlocked === false));
  // .filter(obj => obj['price'] === 10)
 
  // console.log(test.filter(obj => obj[1]['unlocked'] === false));


  // Add an event listener to the giant coffee emoji
  const bigCoffee = document.getElementById('big_coffee');
  bigCoffee.addEventListener('click', () => clickCoffee(data));

  // Add an event listener to the container that holds all of the producers
  // Pass in the browser event and our data object to the event listener
  const producerContainer = document.getElementById('producer_container');
  producerContainer.addEventListener('click', event => {
    buyButtonClick(event, data);
  });

  // Call the tick function passing in the data object once per second
  setInterval(() => tick(data), 1000);
}
// Meanwhile, if we aren't in a browser and are instead in node
// we'll need to exports the code written here so we can import and
// Don't worry if it's not clear exactly what's going on here;
// We just need this to run the tests in Mocha.
else if (process) {
  module.exports = {
    updateCoffeeView,
    clickCoffee,
    unlockProducers,
    getUnlockedProducers,
    makeDisplayNameFromId,
    makeProducerDiv,
    deleteAllChildNodes,
    renderProducers,
    updateCPSView,
    getProducerById,
    canAffordProducer,
    updatePrice,
    attemptToBuyProducer,
    buyButtonClick,
    tick
  };
}
