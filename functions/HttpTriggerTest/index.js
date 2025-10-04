module.exports = async function (context, req) {
    context.log('HTTP trigger function processed a request.');
    const name = req.query.name || (req.body && req.body.name) || 'World';
    context.res = {
        body: `Hello, ${name}! Function is running.`
    };
};