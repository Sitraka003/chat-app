import { object, string } from "yup";

export const loginSchema = object().shape({
    email: string().email("Invalid email address").required("Email is required"),
    password: string().required("Password is required"),
});

export const signupSchema = object().shape({
    name: string().required("Name is required"),
    email: string().email("Invalide email address").required("Email is required"),
    bio: string(),
    password: string().required("Password is required"),
    confirmpassword: string().required("Confirm your password")
})