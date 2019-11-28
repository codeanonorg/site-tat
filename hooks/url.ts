import { AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import Axios from "../axios";

export function useHTTP<T>(url: string, config?: AxiosRequestConfig) {
  const [data, setData] = useState<AxiosResponse<T> | null>(null);
  useEffect(() => {
    Axios.get(url, config).then(setData);
  }, []);
  return data;
}
