import { GithubRepo } from "./model";

const RESPONSE_URL = "https://api.github.com/users/Marcin890/repos";
const FORBIDDEN_REPOS = ["bieszczady"];

// const convert = ({ name, stargazers_count: stars }) => {
//   new GithubRepo({
//     name,
//     stars,
//   });
// };
const convert = ({ name, stargazers_count: stars }) => {
  return {
    name,
    stars,
  };
};

export default async function getRepos() {
  try {
    const response = await fetch(RESPONSE_URL);
    if (response.ok) {
      return (await response.json())
        .filter((r) => !FORBIDDEN_REPOS.includes(r.name))
        .map((e) => convert(e));
    }
    throw Error("Response");
  } catch (err) {
    console.log(err);
    return [];
  }
}
