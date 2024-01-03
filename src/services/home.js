import useFetchGeneral from "./../hooks/useFetch2";

export async function PostGetData() {
  //reg-getinfo
  const apiCall = await useFetchGeneral().get("GetReportSystemCount");
  return apiCall;
}
