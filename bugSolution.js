```javascript
const query = { name: 'John Doe' };

// Correct use of $in operator with an array
db.collection('users').find({ name: { $in: ['John Doe'] } }).toArray((err, result) => {
  console.log(result);
});
```