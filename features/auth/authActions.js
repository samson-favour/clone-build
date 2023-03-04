import axios from "axios";
import {  createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = "https://ogle-api.onrender.com/api/v1";

export const registerUser =
  createAsyncThunk(
    "auth/register",
    async (
      { username, email, password, confirmPassword, role },
      { rejectWithValue }
    ) => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        await axios.post(
          `${backendURL}/auth/register`,
          { username, email, password, confirmPassword, role },
          config
        );
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } else {
          return rejectWithValue(error.message);
        }
      }
    }
  );

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${backendURL}/auth/login`,
        { email, password },
        config
      );
      localStorage.setItem("userToken", data.token);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


