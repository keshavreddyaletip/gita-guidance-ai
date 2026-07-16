import axios from "axios";

const API = "http://127.0.0.1:8000";

export async function getAIGuidance(data) {

  const res = await axios.post(

    `${API}/ai/guidance`,

    data

  );

  return res.data;

}