import getRepos from "./service";

export default async function () {
  const arr = await getRepos();
  arr.forEach((r) => console.log(r));
}
