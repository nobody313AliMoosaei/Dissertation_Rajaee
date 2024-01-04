import useFetch from "./../hooks/useFetch";
import useFetchGeneral from "./../hooks/useFetch2";

export async function GetRefreshToken(token) {
  const apiCall = await useFetch().get("/OtherEmployees/IsValidUser", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return apiCall;
}

export async function GetSelfDissertationAutomatic(
  token,
  pageNumber,
  pageSize
) {
  console.log(pageNumber);
  const apiCall = await useFetch().get(
    `/OtherEmployees/GetSelfDissertationOfTeacherAutomatic?PageNumber=${pageNumber}&PageSize=${pageSize}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return apiCall;
}
export async function GetAllDissertations(token, pageNumber, pageSize) {
  console.log(pageNumber);
  const apiCall = await useFetch().post(
    `/OtherEmployees/GetAllDissertations?PageNumber=${pageNumber}&PageSize=${pageSize}`,
    {
      fullName: "",
      userName: "",
      title: "",
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return apiCall;
}

export async function GetUserById(id) {
  const apiCall = await useFetchGeneral().post(`/GetUserById?UserId=${id}`);
  return apiCall;
}
export async function GetAllDissertationOfUesr(id) {
  const apiCall = await useFetchGeneral().get(
    `/GetAllDissertationOfUesr?UserId=${id}`
  );
  return apiCall;
}

export async function GetAllComments(id, pagenumber, pageSize) {
  const apiCall = await useFetchGeneral().get(
    `/GetAllCommentsOfDissertationById?DissertationId=${id}&PageNumber=${pagenumber}&PageSize=${pageSize}`
  );
  return apiCall;
}
export async function SendComment(token, userId, dissertationId, title, dsr) {
  const apiCall = await useFetch().post(
    "/OtherEmployees/SendComment",
    {
      dissertationId: dissertationId,
      title: title,
      dsr: dsr,
      commentId: 0,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return apiCall;
}
export async function DownloadFile(FileAddress) {
  const apiCall = await useFetchGeneral().post(
    "/DownloadFile",
    {
      fileAddress: FileAddress.replace(/\\/g, "\\\\"),
    },
    {
      responseType: "arraybuffer",
    }
  );
  return apiCall;
}
export async function CahngeDissertationStatus(token, id, status) {
  const apiCall = await useFetch().post(
    `/OtherEmployees/ChangeDissertationStatus`,
    {
      dissertationId: id,
      statusId: status,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return apiCall;
}
