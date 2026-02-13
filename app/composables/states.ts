export const useBaseUrl = () =>
  useState<string>("baseUrl", () => "https://www.callumwatkins.com");
