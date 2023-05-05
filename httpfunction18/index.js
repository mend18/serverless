module.exports = async function (context, req) {
    context.log('Alguém invocou a função remotamente');
    const body = req.body;
    const responseMessage = body
    ? "Foram recebidos estes dados: " + JSON.stringify(body)
    : "Por favor, envie algo no body da mensagem HTTP";
    if (body)
    context.log('Dados recebidos yh meu wtf yhhhhhh: ' + JSON.stringify(body));
   
    context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage
    };
   }
   