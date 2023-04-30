import axios from "axios";
import { MSG, ShowToastify } from "src/utils";

const BASE_URL_Dev: string = "http://127.0.0.1:5500";
const BASE_URL_PRO: string = "https://devto.onrender.com/api/v1"

export const InsertNewComment = async function (_idPost: string, body: any, _idParent: string) {
  try {
    let result = await axios.post(`${BASE_URL_PRO}/createComment`, {
      "_idPost": "63fcd0ef5c8f9f3ca1bd3396",
      "body": "It's great wonderfull.",
      "userId": "63ef7b21bfac48fc04433536",

      "_idParent": ""
    })

  } catch (e) {
    ShowToastify("ERROR")
  }
};

export const CreateNewPost = async function (title: string, body: any, cover_image: File) {
  try {
    let formdata = new FormData()
    formdata.append("tenfile", cover_image)

    let resultImageUpload = await axios.post("https://instagram-backend-gia-thuan.vercel.app/api/upload/upload_single", formdata, {
      headers: { "Content-Type": "multipart/form-data", 'Access-Control-Allow-Origin': '*' },
    })

    let userId = localStorage.getItem("user")
    // return MSG("Done", resultImageUpload.data)
    let result = await axios.post(BASE_URL_PRO + "/createArticle", {
      "body": body,
      "title": title,
      "cover_image": resultImageUpload.data.data,
      "userId": JSON.parse(userId as string)
    })
    return MSG("Done", result.data, null)
  } catch (e) {
    ShowToastify("ERROR")

  }
}



export const GetAllPost = async function () {
  try {
    let result = await axios.get(`${BASE_URL_PRO}/getAllArticles`)
    return result.data
  } catch (error) {
    ShowToastify("ERROR")
  }
}

