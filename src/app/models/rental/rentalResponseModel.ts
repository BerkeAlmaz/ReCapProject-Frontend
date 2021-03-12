import { ResponseModel } from "../responseModel";
import { RentalDetailDto } from "./rentalDetailDto";

export interface RentalResponseModel extends ResponseModel{
    data:RentalDetailDto[];
}