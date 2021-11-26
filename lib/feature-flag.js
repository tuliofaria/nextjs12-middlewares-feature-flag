// (process.env.UPSTASH_REST_API, process.env.UPSTASH_SECRET);

export const isFlagActivated = async (flagName) => {
  const response = await fetch(
    `${process.env.UPSTASH_REST_API}/get/flags-${flagName}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.UPSTASH_SECRET}`,
      },
    }
  );
  const data = await response.json();
  return data && data.result === "true";
};
