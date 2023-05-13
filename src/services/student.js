import useFetch from "./../hooks/useFetch";

const endPoint = "Teachers_Data/GetAllTeacher";

export async function GetAllTeacher() {
  const apiCall = await useFetch().get(endPoint);
  return apiCall;
}
