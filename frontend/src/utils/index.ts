import { FontAwesomeIcon as ICON } from "@fortawesome/react-fontawesome";
import * as IconSolid from "@fortawesome/free-solid-svg-icons";
import * as IconRegular from "@fortawesome/free-regular-svg-icons";
import * as IconBrands from "@fortawesome/free-brands-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
export { ICON, IconBrands, IconRegular, IconSolid };
export const MSG = function (msg: string, data: any = null, other: any = null) {
    return {
        msg,
        data, other
    }
}


export const ShowToastify = function (type: "ERROR" | "SUCESS", msg?: string) {
    switch (type) {
        case "SUCESS": {
            toast(msg ? msg : 'Sucessfully')
            break
        }
        case "ERROR": {
            toast(msg ? msg : 'Oops , Something went error , Please try again or refresh the page')
            break
        }
    }

}