import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { entities } from "./entities/entity";
import { API_URL } from "./api";

type EntityKeys = keyof typeof entities;

interface Query {
  entity: EntityKeys;
  params?: object;
  dependency?: any[] | any;
  type?: string;
}
export function useQueryData({ entity, params, dependency, type }: Query) {

  const functionFetch = async () => {
    const endpoint = type ? entities[entity] + "/" + type : entities[entity];

    const response = await API_URL.get(endpoint, {
      params,
    });
    return response.data;
  };

  const { data, isLoading, error, isError, isFetching, refetch } = useQuery(
    dependency ? [entity, dependency] : entity,
    functionFetch,
    {
      staleTime: 0,
      retry: (_failureCount, error: AxiosError) => {
        if (_failureCount >= 3 && error.response?.status === 500) {
        }
        return error.response?.status === 500;
      },
    }
  );
  

  return {
    refetch,
    isFetching,
    isLoading,
    error,
    data,
    isError,
  };
}
