import axios from "axios";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import useSWRImmutable from "swr/immutable";

const fetcher = async (url: string) => {
  const res = await axios({
    method: "get",
    url: url,
    withCredentials: true,
  })
    .then((response) => response.data)
    .catch((err) => {
      console.error("err", err);
      throw err;
    });
  console.log("kikidata", res);
  return res;
};

const useAuth = () => {
  // 이거 url 없네
  const url = `${import.meta.env.VITE_API_HOST}/users/info`;
  const { data, error } = useSWRImmutable(url, fetcher);

  console.log("useAuth error", error);
  //   mutate(...data, false);

  console.log("useAuth user", data);
  // mutate 사용해서 logout 구현하기 파라미터 어떻게 구현할지 생각해보기
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useAuth;