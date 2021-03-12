import { ResponseModel } from "../responseModel";
import { CarDetailDto } from "./carDetailDto";

export interface CarResponseModel extends ResponseModel{
    data:CarDetailDto[];
}