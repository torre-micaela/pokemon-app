import axios, { AxiosRequestConfig } from "axios";

const callApi = async ({
  baseURL,
  url,
  method = "get",
  params,
  data,
  ...res
}: AxiosRequestConfig) => {
  const apiBase = baseURL 

  try {
    const response = await axios({
      url,
      baseURL: apiBase,
      method,
      data,
      params,
      timeout: 10000,
      ...res,
    });

    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      return;
    }
    throw error;
  }
};

export default callApi;
