// Второй шаг входа: GitHub возвращает сюда код авторизации, мы обмениваем
// его на access token и передаём в окно Decap CMS через postMessage —
// именно так, как ожидает протокол Decap для GitHub-бэкенда.
export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return new Response('Отсутствует код авторизации от GitHub.', { status: 400 });
  }

  if (!env.GITHUB_CLIENT_ID || !env.GITHUB_CLIENT_SECRET) {
    return new Response(
      'GITHUB_CLIENT_ID или GITHUB_CLIENT_SECRET не настроены в переменных окружения проекта.',
      { status: 500 }
    );
  }

  const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${url.origin}/api/callback`,
    }),
  });

  const tokenData = await tokenResponse.json();

  if (tokenData.error || !tokenData.access_token) {
    return new Response(
      `Ошибка авторизации GitHub: ${tokenData.error_description || tokenData.error || 'неизвестная ошибка'}`,
      { status: 400 }
    );
  }

  const payload = JSON.stringify({ token: tokenData.access_token, provider: 'github' });

  const html = `<!doctype html>
<html>
  <body>
    <script>
      (function () {
        function receiveMessage(message) {
          window.opener.postMessage(
            'authorization:github:success:' + ${JSON.stringify(payload)},
            '*'
          );
          window.removeEventListener('message', receiveMessage, false);
        }
        window.addEventListener('message', receiveMessage, false);
        window.opener.postMessage('authorizing:github', '*');
      })();
    </script>
    <p>Авторизация прошла успешно. Можно закрыть это окно.</p>
  </body>
</html>`;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
