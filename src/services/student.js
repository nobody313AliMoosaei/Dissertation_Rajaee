import useFetch from "./../hooks/useFetch";

const endPoint = "Teachers_Data/GetAllTeacher";

export async function GetAllTeacher() {
  const apiCall = await useFetch().get(endPoint);
  return apiCall;
}

export async function UploadDissertation({ formData, data, token }) {
  // const formData = new FormData();
  // console.log(Dissertation_File);

  // formData.append("Dissertation_File", Dissertation_File);
  // formData.append("Pro_File", Pro_File);
  formData.append("KeyWords_Persian", data.KeyWords_Persian);
  formData.append("KeyWords_English", data.KeyWords_English);
  formData.append("Title_Persian", data.Title_Persian);
  formData.append("Title_English", data.Title_English);
  formData.append("Term_Number", data.Term_Number);
  formData.append("Teacher_1", data.Teacher_1);
  formData.append("LastName", data.LastName);
  formData.append("FirstName", data.FirstName);
  formData.append("College", data.College);
  formData.append("Abstract", data.Abstract);
  if (data.Teacher_2) {
    formData.append("Teacher_2", data.Teacher_2);
  }
  if (data.Teacher_3) {
    formData.append("Teacher_3", data.Teacher_3);
  }
  const apiCall = await useFetch().post("Pre_Registration/AllData", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return apiCall;
}
