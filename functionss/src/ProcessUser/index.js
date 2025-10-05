module.exports = async function (context, req) {
    context.log('📩 Received request for ProcessUserRequest.');
  
    const user = req.body?.user || req.query?.user;
  
    if (!user) {
      context.res = {
        status: 400,
        body: "⚠️ Please provide a 'user' in query or body."
      };
      return;
    }
  
    context.res = {
      status: 200,
      body: {
        message: `✅ Request processed successfully for ${user}`,
        timestamp: new Date().toISOString()
      }
    };
  };
  