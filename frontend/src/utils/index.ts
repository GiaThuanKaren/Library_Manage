import { FontAwesomeIcon as ICON } from "@fortawesome/react-fontawesome";
import * as IconSolid from "@fortawesome/free-solid-svg-icons";
import * as IconRegular from "@fortawesome/free-regular-svg-icons";
import * as IconBrands from "@fortawesome/free-brands-svg-icons";
export { ICON, IconBrands, IconRegular, IconSolid };

export const MSG = function (msg: string, data: any=null, other: any=null) {
    return {
        msg,
        data, other
    }
}