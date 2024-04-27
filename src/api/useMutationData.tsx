import { useMutation, useQueryClient } from "react-query";
import { entities } from "./entities/entity";
import { API_URL } from "./api";
// Define el tipo de los argumentos que tomarán las funciones onSuccess y onError
type SuccessFunction = (res: any) => void;
type ErrorFunction = (err: any) => void;
 
interface Mutation {
  entity: keyof typeof entities;
  onSuccess?: SuccessFunction;
  onError?: ErrorFunction;
  type?: string;
  params?: string; // Modificar el tipo de params a string
}

export function useMutationData({ entity, onSuccess, onError, type, params }: Mutation) {
  const queryClient = useQueryClient();
  const selectedApiUrl = API_URL

  const updateData = async (payload: any) => {
    let endpoint = type ? `${entities[entity]}/${type}` : entities[entity];
    if (params) {
      endpoint += `?${params}`; // Agregar el parámetro al endpoint si params tiene un valor
    }
    const response = await selectedApiUrl.put(endpoint, payload);
    return response.data;
  };

  const createData = async (payload?: any) => {
    let endpoint = type ? `${entities[entity]}/${type}` : entities[entity];
    if (params) {
      endpoint += `?${params}`; // Agregar el parámetro al endpoint si params tiene un valor
    }
    const response = await selectedApiUrl.post(endpoint, payload);
    return response.data;
  };

  const deleteData = async () => {
    let endpoint = type ? `${entities[entity]}/${type}` : entities[entity];
    if (params) {
      endpoint += `?${params}`; // Agregar el parámetro al endpoint si params tiene un valor
    }
    const response = await selectedApiUrl.delete(endpoint);
    return response.data;
  }
 
  const mutationUpdate = useMutation(updateData, {
    onSuccess: (res) => {
      onSuccess && onSuccess(res);
      queryClient.invalidateQueries(entity);
    },
    onError: (err) => {
      onError && onError(err);
    },
  });
  const mutationCreate = useMutation(createData, {
    onSuccess: (res) => {
      onSuccess && onSuccess(res);
      queryClient.invalidateQueries(entity);
    },
    onError: (err) => {
      onError && onError(err);
    },
  });
  const mutationDelete = useMutation(deleteData, {
    onSuccess: (res) => {
      onSuccess && onSuccess(res);
      queryClient.invalidateQueries(entity);
    },
    onError: (err) => {
      onError && onError(err);
    },
  });
 
  return {
    update: mutationUpdate.mutateAsync,
    delete: mutationDelete.mutateAsync,
    create: mutationCreate.mutateAsync,
    isLoading: mutationUpdate.isLoading || mutationCreate.isLoading || mutationDelete.isLoading,
  };
}
 