module.exports = async function (context, req) {
    try {
        context.log('HTTP trigger function `HttpTriggerTest` invoked.');

        // Read query or body
        const name = req.query.name || (req.body && req.body.name);

        // Response
        context.res = {
            status: 200,
            body: name ? `Hello, ${name}!` : "Hello from HttpTriggerTest function!"
        };

        context.log('HTTP trigger function completed successfully.');
    } catch (err) {
        context.log.error('Function failed:', err);

        // Return HTTP 500 on error
        context.res = {
            status: 500,
            body: `Function error: ${err.message}`
        };
    }
};
