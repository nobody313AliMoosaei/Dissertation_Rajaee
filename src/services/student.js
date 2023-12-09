import useFetch from "./../hooks/useFetch";
import useFetchGeneral from "./../hooks/useFetch2";

const endPoint = "/GetAllTeacher";

export async function GetAllTeacher() {
  const apiCall = await useFetchGeneral().get(endPoint);
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

export async function DownloadDissertation(token, addressFile) {
  const apiCall = await useFetch().post("/Dissertation/Download", addressFile, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
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
  formData.append("LastName", data.LastName);
  formData.append("FirstName", data.FirstName);
  formData.append("CollegeRef", data.College);
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
  formData.append("LastName", data.LastName);
  formData.append("FirstName", data.FirstName);
  formData.append("CollegeRef", data.CollegeRef);
  formData.append("Abstract", data.Abstract);
  if (data.Teacher_2) {
    formData.append("Teacher_2", data.Teacher_2);
  }
  if (data.Teacher_3) {
    formData.append("Teacher_3", data.Teacher_3);
  }
  const apiCall = await useFetch().put(
    `Dissertation?Dis_Id=${dis_Id}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return apiCall;
}
