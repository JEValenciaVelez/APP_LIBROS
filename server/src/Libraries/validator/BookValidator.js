const { body } = require("express-validator");

const validatePostBook = [
	body('title')
		.trim()
		.isString()
		.withMessage('Title must be a string')
        .isLength({min: 2, max:200})
		.notEmpty()
		.withMessage('Title cannot be empty'),
	body('author')
		.trim()
		.isString()
		.notEmpty()
		.withMessage('Author field cannot be empty')
		.isLength({ min: 3, max: 30 })
		.withMessage('Author length must be between 3 and 30 characters'),
	body('genres')
		.trim()
		.isString()
		.notEmpty()
		.withMessage('Genres field cannot be empty')
		.isLength({ min: 3, max: 100 })
		.withMessage('Genres length must be between 3 and 100 characters'),
	body('date')
		.trim()
		.notEmpty()
		.withMessage('Date cannot be empty'),
	body('image')
		.isURL()
		.withMessage('If you provided a picture of the Book, it must be a valid Image.'),
];

const validatePutBook = [
	body('title')
		.trim()
		.isString()
		.withMessage('Title must be a string')
		.notEmpty()
		.withMessage('Title cannot be empty'),
	body('author')
		.trim()
		.isString()
		.notEmpty()
		.withMessage('Author field cannot be empty')
		.isLength({ min: 3, max: 30 })
		.withMessage('Author length must be between 3 and 30 characters'),
	body('genres')
		.trim()
		.isString()
		.notEmpty()
		.withMessage('Genres field cannot be empty')
		.isLength({ min: 3, max: 100 })
		.withMessage('Genres length must be between 3 and 100 characters'),
	body('date')
		.trim()
		.notEmpty()
		.withMessage('Date cannot be empty'),
	body('image')
		.isURL()
		.withMessage('If you provided a picture of the Book, it must be a valid Image.'),
];

module.exports = {
	validatePostBook,
	validatePutBook,
};
