import { env } from "$env/dynamic/private";
/**
 * @type {import('./$types').Actions}
 */
export const actions = {
  default: async ({ fetch }) => {
    fetch(env.EXTERNAL_API_URL, {
      method: "post",
      body: JSON.stringify({ data: "test" }),
    });
    return {};
  },
};
