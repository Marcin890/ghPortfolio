import initMd from "markdown-element";
import "./sass/index.scss";
import main from "./github/index";
import { getBlogPost } from "./github/service";

getBlogPost("2.md").then((blogpost) => {
  const md = document.createElement("mark-down");
  md.textContent = blogpost;
  document.body.appendChild(md);
});
main();
