import axios from "axios";
const url = `http://localhost:5000/api`;

const getLangId = async () => {
  return await axios
    .get(`${url}/judge/getAllLanguages`)
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.log(e));
};

const submitCode = async (code, langId, stdin) => {
  return await axios
    .post(`${url}/judge/submitCode`, {
      code:code,
      langId:langId,
      stdin:stdin,
    })
    .then((res) => res.data)
    .catch((e) => console.error(e));
};

export { getLangId, submitCode };
