module.exports.validate = function validate(schema, values) {
    const res = []
    for (const key in values) {
        if(!schema[key](values[key])) {
            res.push(key)
        }
    }
    return res
}