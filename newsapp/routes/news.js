const express = require('express');
const router = express.Router();
const newsProvider = require('../mongo/provider');

router.post('/', newsProvider.add);
router.get('/', newsProvider.getAll);
router.get('/:id', newsProvider.getById);
router.put('/:id', newsProvider.update);
router.delete('/:id', newsProvider.remove);

module.exports = router;
