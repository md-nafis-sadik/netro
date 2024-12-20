const envConfig = {
  authSecret: process.env.AUTH_SECRET,
  nextAuthUrl: process.env.NEXT_AUTH_URL,
  githubId: process.env.AUTH_GITHUB_ID,
  githubSecret: process.env.AUTH_GITHUB_SECRET,
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  googleId: process.env.AUTH_GOOGLE_ID,
  googleSecret: process.env.AUTH_GOOGLE_SECRET,
};

export { envConfig };
