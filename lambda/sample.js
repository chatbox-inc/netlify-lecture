exports.handler = async (event, context, callback) => {
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Max-Age': '2592000',
            'Access-Control-Allow-Credentials': 'true',
        },
        body: JSON.stringify({
            "message" : "hello world"
        })
    }

}