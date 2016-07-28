var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Maker Model
 * ==========
 */
var Maker = new keystone.List('Maker');

Maker.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
Maker.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Relationships
 */
Maker.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */
Maker.defaultColumns = 'name, email, isAdmin';
Maker.register();
