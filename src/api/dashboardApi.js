import api from "./axios";

export const getAnalytics =
  () => {
    return api.get(
      "/dashboard/analytics"
    );
  };