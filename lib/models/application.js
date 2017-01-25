module.exports = function build(mongoose) {
    // set up custom options for the schema here
    const schemaOptions = {};

    // set the schema to autocreate createdAt and updatedAt timestamps
    // http://mongoosejs.com/docs/guide.html#timestamps
    schemaOptions.timestamps = true;

    const schema = new mongoose.Schema({
        name: String,
        platform: String,
    }, schemaOptions);

    return mongoose.model('Application', schema, 'applications');
};