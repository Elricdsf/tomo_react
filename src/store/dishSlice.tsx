import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { dishGetUrl, dishesGetUrl } from "../api-dev";
import { handleAxiosError } from "../util";

interface dish {
  id: string;
  name: string;
  imgURL: string;
  price: string;
  rate?: string;
  ingredient: string;
  description: string;
  galleryURL?: string[];
}

interface dishDetailState {
  dish: dish;
  loading: boolean;
  error: string | null;
}
interface dishesState {
  udon:dish[];
  sauce: dish[];
  bowl: dish[];
  soba: dish[];
  dragonRoll: dish[];
  nigiri: dish[];
  handRoll: dish[];
  box: dish[];
  ss: dish[];
  bento: dish[];
  sushi: dish[];
  dishes: dish[];
  loading: boolean;
  error: string | null;
}

const initialDishDetailState: dishDetailState = {
  dish: {
    id: "",
    name: "",
    imgURL: "",
    price: "",
    rate: "",
    ingredient: "",
    description: "",
    galleryURL: [],
  },
  loading: true,
  error: null,
};

const initialDishesState: dishesState = {
  udon:[],
  sauce: [],
  bowl: [],
  soba: [],
  dragonRoll: [],
  nigiri: [],
  handRoll: [],
  box: [],
  ss: [],
  bento: [],
  sushi: [],
  dishes: [],
  loading: true,
  error: null,
};

const dishesSlice = createSlice({
  name: "dishes",
  initialState: initialDishesState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get all dishes
      .addCase(fetchDishes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDishes.fulfilled, (state, action) => {
        console.log("Payload received:", action.payload);
        state.loading = false;
        state.error = null;
        const { category } = action.meta.arg;
        if (!category) {
          state.dishes = action.payload.map((item: any) => ({
            id: item._id,
            name: item.name,
            imgURL: item.imgURL,
            price: item.price,
            rate: item.rate,
            ingredient: item.ingredient,
            description: item.description,
            galleryURL: item.galleryURL,
          }));
        }
        if (category == "udon") {
          state.udon = action.payload.map((item: any) => ({
            id: item._id,
            name: item.name,
            imgURL: item.imgURL,
            price: item.price,
            rate: item.rate,
            ingredient: item.ingredient,
            description: item.description,
            galleryURL: item.galleryURL,
          }));
        }
        if (category == "sauce") {
          state.sauce = action.payload.map((item: any) => ({
            id: item._id,
            name: item.name,
            imgURL: item.imgURL,
            price: item.price,
            rate: item.rate,
            ingredient: item.ingredient,
            description: item.description,
            galleryURL: item.galleryURL,
          }));
        }
        if (category == "soba") {
          state.soba = action.payload.map((item: any) => ({
            id: item._id,
            name: item.name,
            imgURL: item.imgURL,
            price: item.price,
            rate: item.rate,
            ingredient: item.ingredient,
            description: item.description,
            galleryURL: item.galleryURL,
          }));
        }
        if (category == "bowl") {
          state.bowl = action.payload.map((item: any) => ({
            id: item._id,
            name: item.name,
            imgURL: item.imgURL,
            price: item.price,
            rate: item.rate,
            ingredient: item.ingredient,
            description: item.description,
            galleryURL: item.galleryURL,
          }));
        }
        if (category == "dragonRoll") {
          state.dragonRoll = action.payload.map((item: any) => ({
            id: item._id,
            name: item.name,
            imgURL: item.imgURL,
            price: item.price,
            rate: item.rate,
            ingredient: item.ingredient,
            description: item.description,
            galleryURL: item.galleryURL,
          }));
        }
        if (category == "nigiri") {
          state.nigiri = action.payload.map((item: any) => ({
            id: item._id,
            name: item.name,
            imgURL: item.imgURL,
            price: item.price,
            rate: item.rate,
            ingredient: item.ingredient,
            description: item.description,
            galleryURL: item.galleryURL,
          }));
        }
        if (category == "handRoll") {
          state.handRoll = action.payload.map((item: any) => ({
            id: item._id,
            name: item.name,
            imgURL: item.imgURL,
            price: item.price,
            rate: item.rate,
            ingredient: item.ingredient,
            description: item.description,
            galleryURL: item.galleryURL,
          }));
        }
        if (category == "box") {
          state.box = action.payload.map((item: any) => ({
            id: item._id,
            name: item.name,
            imgURL: item.imgURL,
            price: item.price,
            rate: item.rate,
            ingredient: item.ingredient,
            description: item.description,
            galleryURL: item.galleryURL,
          }));
        }
        if (category == "ss") {
          state.ss = action.payload.map((item: any) => ({
            id: item._id,
            name: item.name,
            imgURL: item.imgURL,
            price: item.price,
            rate: item.rate,
            ingredient: item.ingredient,
            description: item.description,
            galleryURL: item.galleryURL,
          }));
        }
        if (category == "sushi") {
          state.sushi = action.payload.map((item: any) => ({
            id: item._id,
            name: item.name,
            imgURL: item.imgURL,
            price: item.price,
            rate: item.rate,
            ingredient: item.ingredient,
            description: item.description,
            galleryURL: item.galleryURL,
          }));
        }
      })
      .addCase(fetchDishes.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as string) || "error occrued when fetching...";
      });
  },
});

const dishDetailSlice = createSlice({
  name: "dishDetail",
  initialState: initialDishDetailState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.dish = action.payload;
      })
      .addCase(loadDetail.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as string) || "error occrued when fetching...";
      });
  },
});

// Thunk
// fetch all dishes by category
export const fetchDishes = createAsyncThunk(
  "dishes/getDishes",
  async (
    params: {
      category?:
        | "sushi"
        | "dragonRoll"
        | "nigiri"
        | "handRoll"
        | "box"
        | "ss"
        | "bowl"
        | "soba"
        | "sauce"
        | "udon";
    } = {},
    { rejectWithValue }
  ) => {
    try {
      const url = params?.category
        ? dishesGetUrl(params.category)
        : dishesGetUrl();
      console.log("fetchdishes url:" + url);
      const response = await axios.get(url);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(handleAxiosError(error, "get dishes failed"));
    }
  }
);
// load dish detail by id
export const loadDetail = createAsyncThunk(
  "dishes/loadDetail",
  async (id: string, { rejectWithValue }) => {
    try {
      const detail = await axios.get(dishGetUrl(id));
      console.log(detail.data);

      return detail.data;
    } catch (error: any) {
      return rejectWithValue(
        handleAxiosError(error, "load dish detail failed")
      );
    }
  }
);

export const dishDetailReducer = dishDetailSlice.reducer;
export const dishesReducer = dishesSlice.reducer;
