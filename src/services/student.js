import useFetch from "./../hooks/useFetch";
import useFetchGeneral from "./../hooks/useFetch2";

export async function GetRefreshToken(token) {
  const apiCall = await useFetch().get("Dissertation/IsValidUser", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return apiCall;
}

export async function GetAllTeacher() {
  const apiCall = await useFetchGeneral().get("/GetAllTeacher");
  return apiCall;
}

export async function GetAllCollage() {
  const apiCall = await useFetchGeneral().get("/GetAllColleges");
  return apiCall;
}

export async function GetStatusDisertation(token) {
  const apiCall = await useFetch().get("/Dissertation", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return apiCall;
}
export async function GetAllStatusDisertation() {
  const apiCall = await useFetchGeneral().get("/GetAllStatusDissertation");
  return apiCall;
}

export async function GetDissertation(token) {
  const apiCall = await useFetch().get("/Dissertation", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return apiCall;
}

export async function DownloadDissertation(addressFile) {
  const apiCall = await useFetchGeneral().post("/DownloadFile", {
    fileAddress: addressFile,
  });
  return apiCall;
}

export async function UploadDissertation({ formData, data, token }) {
  // formData.append("KeyWords_Persian", data.KeyWords_Persian);
  // formData.append("KeyWords_English", data.KeyWords_English);
  formData.append("Title_Persian", data.Title_Persian);
  formData.append("Title_English", data.Title_English);
  formData.append("Term_Number", data.Term_Number);
  formData.append("Teacher_1", data.Teacher_1);
  formData.append("LastName", data.lastName);
  formData.append("FirstName", data.firsName);
  formData.append("CollegeRef", data.collegeRef);
  formData.append("Abstract", data.Abstract);
  if (data.Teacher_2) {
    formData.append("Teacher_2", data.Teacher_2);
  }
  if (data.Teacher_3) {
    formData.append("Teacher_3", data.Teacher_3);
  }
  const apiCall = await useFetch().post("Dissertation", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return apiCall;
}

export async function UploadUpdateDissertation({
  formData,
  data,
  token,
  dis_Id,
}) {
  data.KeyWords_Persian.map((item) => formData.append("KeyWords", item));
  data.KeyWords_English.map((item) => formData.append("KeyWords", item));
  formData.append("Title_Persian", data.Title_Persian);
  formData.append("Title_English", data.Title_English);
  formData.append("Term_Number", data.Term_Number);
  formData.append("Teacher_1", data.Teacher_1);
  formData.append("LastName", data.lastName);
  formData.append("FirstName", data.firsName);
  formData.append("CollegeRef", data.collegeRef);
  formData.append("Abstract", data.Abstract);
  if (data.Teacher_2) {
    formData.append("Teacher_2", data.Teacher_2);
  }
  if (data.Teacher_3) {
    formData.append("Teacher_3", data.Teacher_3);
  }
  const apiCall = await useFetch().post(
    `Dissertation/UpdateDissertation?Dis_Id=${dis_Id}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
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
    "/Dissertation/SendComment",
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

export async function GetUserById(id) {
  const apiCall = await useFetchGeneral().post(`/GetUserById?UserId=${id}`);
  return apiCall;
}

export async function GetUserAutomatic(token) {
  const apiCall = await useFetchGeneral().get("/GetUserAutomatic", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return apiCall;
}
export async function UpdateUser(token, data) {
  console.log(data);
  const apiCall = await useFetch().post(
    `/Dissertation/UpdateUser`,
    {
      firstName: data.firsName,
      lastName: data.lastName,
      nationalCode: data.nationalCode,
      userName: data.userName,
      emailAddress: data.email,
      collegeRef: 0,
      teacher_1: 0,
      teacher_2: 0,
      teacher_3: 0,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return apiCall;
}
