// Первый шаг входа в админку: перенаправляет пользователя на страницу
// авторизации GitHub. Требует переменные окружения GITHUB_CLIENT_ID
// и GITHUB_CLIENT_SECRET, заданные в настройках проекта Cloudflare Pages.
export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  if (!env.GITHUB_CLIENT_ID) {
    return new Response(
      'GITHUB_CLIENT_ID не настроен. Добавьте переменные окружения в настройках проекта Cloudflare Pages (Settings → Environment variables) и пересоберите сайт.',
      { status: 500 }
    );
  }

  const redirectUri = `${url.origin}/api/callback`;
  const state = crypto.randomUUID();

  const authorizeUrl = new URL('https://github.com/login/oauth/authorize');
  authorizeUrl.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
  authorizeUrl.searchParams.set('redirect_uri', redirectUri);
  authorizeUrl.searchParams.set('scope', 'repo,user');
  authorizeUrl.searchParams.set('state', state);

  return new Response(null, {
    status: 302,
    headers: {
      Location: authorizeUrl.toString(),
      'Set-Cookie': `oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,
    },
  });
}
