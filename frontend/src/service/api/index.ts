import axios from "axios";
import { MSG } from "src/utils";

const BASE_URL_Dev: string = "http://127.0.0.1:5000";
const BASE_URL_PRO: string = "https://devto.onrender.com/api/v1"

export const GetAllPost = async function () {
  try {
  } catch (e) {
    throw e;
  }
};

export const CreateNewPost = async function (title: string, body: any, cover_image: File) {
  try {
    let formdata = new FormData()
    formdata.append("tenfile", cover_image)

    let resultImageUpload = await axios.post("https://instagram-backend-gia-thuan.vercel.app/api/upload/upload_single", {
      formdata
    }, {
      headers: { "Content-Type": "multipart/form-data", 'Access-Control-Allow-Origin': '*' },
    })
    return MSG("Done", resultImageUpload.data)
    // let result = await axios.post(BASE_URL_PRO+"/createArticle", {
    //   "title": "Test tile gia thuna 097",
    //   "body": "There has been some buzz recently in the frontend world around the term \"Signals\". In seemingly short",
    //   "cover_image": "https://res.cloudinary.com/practicaldev/image/fetch/s--hhnkUFvf--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/olad9yyw632rg959kewz.png",
    //   "userId": "63ef7d4a571fc2238ed33d83"
    // })
    // return MSG("Done", result.data, null)
  } catch (e) {
    throw e
  }
}





