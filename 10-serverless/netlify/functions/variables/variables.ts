import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext,
) => {
  const myImportanVariable = process.env.MY_IMPORTANT_VARIABLE;

  if (!myImportanVariable) {
    throw 'Missing MY_IMPORTANT_VARIABLE';
  }

  console.log('Hola Mundo desde los logs');

  return {
    statusCode: 200,
    body: JSON.stringify({
      myImportanVariable,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

export { handler };
