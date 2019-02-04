const express = require('express');
const router = express.Router();
const newsProvider = require('../mongo/newsprovider');
const auth = require('./auth');

router.post('/', auth.optional, newsProvider.add);
router.get('/', auth.optional, newsProvider.getAll);
router.get('/:id', auth.optional, newsProvider.getById);
router.put('/:id', auth.required, newsProvider.update);
router.delete('/:id', auth.required, newsProvider.remove);

module.exports = router;
