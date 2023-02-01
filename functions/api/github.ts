interface Env {
  KV: KVNamespace;
  GITHUB_TOKEN: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  if (!context.env.GITHUB_TOKEN) throw new Error("GITHUB_TOKEN missing");

  return await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "User-Agent": "CloudflareWorker",
      Authorization: `bearer ${context.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
          {
            user(login: "CallumWatkins") {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                }
              }
              repositories(ownerAffiliations: OWNER) {
                totalCount
              }
              gists {
                totalCount
              }
              createdAt
            }
          }`,
    }),
  });
};
