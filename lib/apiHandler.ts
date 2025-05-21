import { envConfig } from "@/services";

export const fetchWithDelay = async (endpoint: string, delay = 100) => {
  // headers();

  const withDelay = (promise: unknown, ms: number | undefined) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(promise);
      }, ms);
    });
  };

  const response = await withDelay(
    fetch(`${envConfig.baseUrl}${endpoint}`, {
      cache: "no-store",
    }).then((res) => res.json()),
    delay
  );

  return response;
};
