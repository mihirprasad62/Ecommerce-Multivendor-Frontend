import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/Api";

export const sellerLogin = createAsyncThunk<any, any>(
    "/seller/login",
    async (loginRequest, { rejectWithValue }) => {
        try {

            const response = await api.post("/sellers/login", loginRequest);

            console.log("seller login response ", response.data);
            localStorage.setItem("jwt", response.data.jwt);
            return response.data;

        } catch (error: any) {

            console.log("seller login error ", error);

            return rejectWithValue(
                error.response?.data || "Seller login failed"
            );
        }
    }
);


export const logout = createAsyncThunk<any,any>(
    "/auth/logout",
    async (navigate, { rejectWithValue }) => {
        try {

            localStorage.clear()
            console.log("logout success")
            navigate("/")

        } catch (error: any) {

            console.log("seller login error ", error);

            return rejectWithValue(
                error.response?.data || "Seller login failed"
            );
        }
    }
);