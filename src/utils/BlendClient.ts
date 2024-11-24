import axios from "axios";

// api key here for now
// const API_KEY = "org_f9d4eecb4c31e0cd2474703c410fa76c15dcb6f45bc89a1089f4c232faf6c158c09eb68e601e09b466bc69";
const API_KEY = "org_000378ca82bb0666e95f16ac46f7c4c9388da3984c59a5562bbb24a967fa2addcd5d157298d5267026da69";
const AMELIA_KEY = "org_09fad426b73a2f4318f888752973f63f32e727a7510dfcfea7f08b252b43ea3cab5ff8c62312b5db963069";
const ROHAN_KEY = "org_51f19acc2d0e2c2cb0d10d8e787bb24319852ea585655f9cbcc510fc7469218cc6c0bc1d84b62976b6ff69"

// a general api client for both Send Call and Analyze Call with AI
const blendClient = axios.create({
  baseURL: "https://api.bland.ai/v1/calls/",
  headers: {
    Authorization: AMELIA_KEY,
  },
});

export default blendClient;
