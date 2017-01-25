module.exports = function build(mongoose) {
    // set up custom options for the schema here
    const schemaOptions = {};

    // set the schema to autocreate createdAt and updatedAt timestamps
    // http://mongoosejs.com/docs/guide.html#timestamps
    schemaOptions.timestamps = true;

    const schema = new mongoose.Schema({
        code: String, // ipsec, openvpn, redshift, mssql, google-analytics-clickstream, google-analytics-aries
        template: mongoose.Schema.Types.Mixed,
    }, schemaOptions);

    return mongoose.model('Connection', schema, 'connections');
};