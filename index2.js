const brain = require("brain.js");
const data = require("./data.json");

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
    input: item.text,
    output: item.category
}))

network.train(trainingData, {
    iterations: 1000 //determines how long it will take
})

const output = network.run('Great speakers')

console.log(`category:${output}`)