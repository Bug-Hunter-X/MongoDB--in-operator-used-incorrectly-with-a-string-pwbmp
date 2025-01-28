```javascript
const query = { name: 'John Doe' };

// Incorrect use of $in operator with a string
db.collection('users').find({ name: { $in: 'John Doe' } }).toArray((err, result) => {
  console.log(result);
});
```