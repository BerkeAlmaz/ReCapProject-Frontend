import { ResponseModel } from "../responseModel";
import { CustomerDetailDto } from "./customerDetailDto";

export interface CustomerResponseModel extends ResponseModel{
    data:CustomerDetailDto[];
}