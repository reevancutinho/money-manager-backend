const express = require('express');
const router = express.Router();
const { getTransactions,addTransactions,deleteTransactions } = require('../controllers/transactions');

// router
//   .route('/')
//   .get(getTransactions)
//   .post(addTransaction);

// router
//   .route('/:id')
//   .delete(deleteTransaction);

router.route('/').get(getTransactions).post(addTransactions);
//router.get('/',(req,res)=>res.send('Hello'))

router.route('/:id').delete(deleteTransactions)

module.exports = router;