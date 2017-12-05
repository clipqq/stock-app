const stockData = require('./stock.json');
const Pusher = require('pusher');

var pusher = new Pusher({
  appId: '438454',
  key: '5ecd3e80a871b281764f',
  secret: '2741180fe97343673d82',
  cluster: 'eu',
  encrypted: true
});

setInterval(() => {
  // const NDAQ = stockData[0]['Trades'][i];
  const GOOG = stockData[1]['Trades'][i];
  pusher.trigger('trade', 'stock', GOOG);
  
}, 2000);
