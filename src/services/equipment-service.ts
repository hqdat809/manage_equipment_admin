import { IGetEquipmentRequest } from "../interfaces/equipment-interface";
import { ApiClient } from "./api-clients";

export const createEquipment = async (payload: any) => {
  const response = await ApiClient.post(`/equipment/create`, payload);

  return response.data;
};

export const updateEquipment = async (payload: any) => {
  const response = await ApiClient.post(
    `/equipment/update/${payload.id}`,
    payload,
  );

  return response.data;
};

export const getEquipment = async (payload?: IGetEquipmentRequest) => {
  if (payload) {
    const response = await ApiClient.get(
      `/equipment/equipments-by-owner-id?ownerId=${payload.ownerId}`
    );
    return response.data;
  } else {
    const response = await ApiClient.get(`/equipment/equipments`);
    return response.data;
  }
};

export const deleteEquipment = async (payload: number[]) => {
  const response = await ApiClient.delete(`/equipment/delete`, {
    data: { ids: payload },
  });

  return response.data;
};

export const historyTransferEquipment = async (payload: number) => {
  const response = await ApiClient.get(
    `/equipment/get-transfered-user?equipmentId=${payload}`
  );
  return response.data;
};
