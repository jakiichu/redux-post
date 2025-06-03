import {createAxiosInstance} from "@/shared/api/config";
import {API_BACKEND} from "@/shared/constant/env";

const BACKEND_HTTPS_SERVICES = createAxiosInstance(API_BACKEND);

export {
    BACKEND_HTTPS_SERVICES,
}