import { useEffect, useState } from "react";
import blendClient from "./BlandClient";
import { ROHAN_PHONE_NUM } from "../data/phoneNums";
import { defaultCallPrompt } from "../data/prompts";
import { RequestResult } from "../components/ResultCard";

interface SendCallResponse {
  status: string;
  call_id: string;
  batch_id: string;
  message: string;
  error: string;
}

interface CallDetailResponse {
  summary: string;
  concatenated_transcript: string;
}

async function useCall(
  callPrompt: string,
  state: RequestResult[],
  updateFunction: (result: RequestResult) => void,
  phoneNum?: number
) {
  // body of the send call request; see https://docs.bland.ai/api-v1/post/calls
  const sendCallBody = {
    phone_number: phoneNum ? phoneNum : ROHAN_PHONE_NUM,
    from: null,
    task: `${defaultCallPrompt}${callPrompt}`,
    module: "turbo",
    language: "en",
    voice: "Alexa",
  };

  // append an empty loading card
  updateFunction({
    prescription: "loading",
    quantity: 100,
    isLoading: true,
    result: "",
    units: "",
  })

  // makes the phone call
  blendClient
    .post<SendCallResponse>("/", sendCallBody)
    .then((res) => {
      console.log(res);
      let callId = res.data.call_id;

      setTimeout(() => {
        // get result of phone call
        blendClient
          .get<CallDetailResponse>(`/${callId}`)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, 150000);
    })
    .catch((err) => {
      console.log(err);
    });
}

export default useCall;
