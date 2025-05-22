import { envConfig } from "../config";

export async function fetchData({
  query,
  options,
}: {
  query?: string;
  options?: any;
}) {
  const response = await fetch(`${envConfig.baseUrl}${query}`, {
    ...options,
  }).then((res) => res.json());
  return response;
}

export function purifyUrl({ urlString }: { urlString: string }) {
  return urlString?.replace(/%20/g, " ");
}

export const handleCopy = (
  text = "",
  setter: (value: any) => void = () => {}
) => {
  navigator.clipboard.writeText(text).then(
    () => {
      setter("copied");
      setTimeout(() => setter(null), 1000);
    },
    (err) => {}
  );
};
