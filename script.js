/* eslint-disable no-alert */

/**************
 *   SLICE 1
 **************/

// I have taken this extra Step just to see if I can make it fun :)
let arrayMsgs = ['Mmmmm....Delicious!! Keep them coming', 'I NEED COFFEE NOW!!', 'All I need is coffee, OKurrrr!!', 'I need coffee right MEOW!!!!', 'Coffee tastes like hopes and dreams', "JAIL is real if I don't get my Coffee!", "Caffeine Perks me UP!", "Other people talk to me in the morning you know", "---__---", "They say you only need one cup, aha...."], msg = document.getElementById("msg");
const random = () => Math.floor(Math.random() * arrayMsgs.length);



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
 
  /* - changes `unlocked` to `true` when the player's coffee count
   is equal to or larger than half the initial price of the producer*/
   for (let i = 0; i < producers.length; i++) {
     // this will get each object...
     let obj = producers[i];

     if (obj.price === coffeeCount || coffeeCount >= (obj.price / 2)) {
       obj.unlocked = true;

      //  console.log(`something was changed!!`);
    }
   }
     //------PSEUDO CODING!!------
      // console.log(coffeeCount);
      //  console.log(obj.price);
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
    //------PSEUDO CODING!!------
  // Split the id to then map thru the array
  // get each element in the array
  //get the first letter and upperCase it
  //then connect it back to the element and hey come and join the others
  //I need to return you

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
    //------PSEUDO CODING!!------
  // While there is a child on this parent, remove the child 
  //Sorry child, but you have to go hehe
  while(parent.firstChild) parent.removeChild(parent.firstChild)
}

function renderProducers(data) {
  const contain = document.getElementById('producer_container');
  
  const datas = data.producers;

  unlockProducers(datas, data.coffee)

  let result = getUnlockedProducers(data);

  if (contain.childNodes.length) deleteAllChildNodes(contain);
  for (let i = 0; i < result.length; i++) {
    let theDivChild = makeProducerDiv(result[i]);
    // console.log(theDivChild);
    contain.appendChild(theDivChild);
  }
    //------PSEUDO CODING!!------
    // console.log(data);
      // console.log(producingProd[0]);
        // console.log(producingProd);
      // const someProducerDiv = makeProducerDiv(producingProd[0])
  // console.log(someProducerDiv);
// console.log(result);
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

  let producer = data.producers
  for (let i = 0; i < producer.length; i++) {
    let elem = producer[i];

    if (elem.id === producerId) {
      return elem;
    }
  }

  //------PSEUDO CODING!!------
  // console.log(elem);
  // console.log(data);
  // console.log(producerId);
  // console.log(producer);
  // [ 0, 1, 2]
  // [{ id: 'producer_C', price: 500 }, { id: 'producer_B', price: 200 },{ id: 'producer_A', price: 50 }]
}

function canAffordProducer(data, producerId) {

  //get the producers list
  let producer = data.producers

  //check thru the list of producers
  for (let i = 0; i < producer.length; i++) {
    // Get each producer for verification
    let elem = producer[i];

    // Can this player afford to buy coffee from this producer?
    //Match the producerId with the one in data and check
    //If also this producerId can be bought with the coffee 
    //available on data
    // console.log(data.producers[i].price);
    return (elem.id === producerId && data.coffee >= data.producers[i].price)

    //------PSEUDO CODING!!------
    // console.log(elem);
      // console.log(data);
  // console.log(producerId);
  }
  
  console.log(data.producers[0]);
}


function updateCPSView(cps) {
  //Gets the element in HTML by Id;
  const cpsElem = document.getElementById('cps');

  // Changes the text on the element to the parameter passed in.
  cpsElem.innerText = cps;

  return cps;

  //------PSEUDO CODING!!------
  // console.log('Number of inner Text: ', Number(cpsElem.innerHTML));
  // console.log('Sum:... ', sum);
  // console.log('the selector: ...', cpsElem.innerHTML);
    // let sum = Number(cpsElem.innerHTML) + cps;
  // sum = String(sum)

}


function updatePrice(oldPrice) {
  //125% === 1.25 ||| 501 * 125 = 626.25
  //Math.floor will return an integer rounded down
  return Math.floor(oldPrice * 1.25);

  // console.log(oldPrice);
}

function attemptToBuyProducer(data, producerId) {
  // console.log(data.totalCPS);
  let bool = canAffordProducer(data, producerId);
  let producer = getProducerById(data, producerId);
    //get inside the data.producer
  
  if (bool) {
    // increments the quantity of the producer in question only if the player can afford it;
    producer.qty++; 

    //decrements the player's coffee by the *current* price of the producer, but only if the player can afford it;
    data.coffee = data.coffee - producer.price;

    //updates the price of the producer to 125% of the previous price;
    producer.price = updatePrice(producer.price);

    //updates the total CPS, but only if the player can afford the producer;
    data.totalCPS += producer.cps;
    updateCPSView(data.totalCPS);
  }
  //then return what the boolean was;
  return bool;

  //------PSEUDO CODING!!------
  // console.log('Producer Price: ', producer.price);
  // console.log(updateCPSView(data.totalCPS));
  // console.log('Producer CPS: ', producer.cps);
  // console.log(producer);
  // console.log(bool);

}

function buyButtonClick(event, data) {
  const targetButton = event.target;
  // debugger;
  // Checks if the button was click and nothing else;
  if (targetButton.tagName !== 'BUTTON') return;
  
  let id = targetButton.id.slice(4); //This is the ids: producer_A
  // let targetId = `buy_${id}`;
  let affordableOrNot = attemptToBuyProducer(data, id); //This is the Boolean: true

  if (affordableOrNot) {
    // console.log('Almost there');
    renderProducers(data);
    updateCoffeeView(data.coffee)

  } else {
    window.alert('Not enough coffee!');
  }
  // console.log(targetButton.id);


   //------PSEUDO CODING!!------
  // console.log('This is the data: ', data);
  // console.log('This is the event: ', event);
  // console.log('Target: ...', targetButton); // Target: ... { tagName: 'BUTTON', id: 'buy_producer_A' }
  // console.log('This is the id:....', id);
  // console.log('This is the Boolean: ', result);
  // window.alert('Not enough coffee!');
}

function tick(data) {
  // console.log(data);
  // initialize some fake data;
  data.coffee += data.totalCPS;

  //updates the DOM to reflect this new coffee count;
  updateCoffeeView(data.coffee);

  //updates the DOM to reflect any newly unlocked producers;
  // tick(data);
  renderProducers(data);

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
    msg.innerHTML = arrayMsgs[random()];
 
  });

  // Call the tick function passing in the data object once per second
  setInterval(() => {
    tick(data);
  }, 1000);
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
