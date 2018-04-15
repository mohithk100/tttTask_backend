const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const router = express.Router();


function getfrequency(text, n) {
  const cleanText = text.replace(/[^a-zA-Z]/g, ' ').split(' ');
  const words = cleanText.filter(Boolean).sort();
  const obj = {};
  let prev = words[0];
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== prev) {
      obj[prev] = count;
      count = 1;
      prev = words[i];
    } else {
      count++;
    }
  }
  const sortedFreq = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
  const obj2 = {};
  const arr = [];
  if (n > sortedFreq.length) {
    obj2.success = false;
    obj2.msg = 'N exceeded unique words in the text';
  } else {
    for (let i = 0; i < n; i++) {
      const obj3 = {};
      obj3.word = sortedFreq[i];
      obj3.value = obj[sortedFreq[i]];
      arr.push(obj3);
    }
    obj2.success = true;
    obj2.frequency = arr;
  }
  return obj2;
}


router.post('/api/getfrequency/', bodyParser.json(), async (req, res) => {
  const data = await axios.get('http://terriblytinytales.com/test.txt')
  .catch(error => console.log(error));
  const frequency = getfrequency(data.data, req.body.N);
  res.status(200).send(frequency);
});

module.exports = router;
