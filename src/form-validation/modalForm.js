import * as yup from "yup";

export const popupFormValidation = yup.object({
    title: yup.string().required('vai doya kore kisu lekho').min(5),
    description: yup.string().required().min(5),
    assignTo: yup.string().required(),
    priority: yup.string().required(),
}).required();