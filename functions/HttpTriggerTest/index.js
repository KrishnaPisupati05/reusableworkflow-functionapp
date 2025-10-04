module.exports = async function(context, req) {
    const name = req.query.name || (req.body && req.body.name);
    context.res = {
        status: 200,
        body: name ? `Hello, ${name}!` : "Hello from HttpTriggerTest function!"
    };
};
