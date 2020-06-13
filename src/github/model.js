export class GithubRepo {
  constructor({ name, stars }) {
    this.name = name;
    this.stars = stars;
  }

  get starsInfo() {
    return this.stars > 0 ? `${this.stars}` : "ll";
  }
  toString() {
    return `${this.name} ${this.starsInfo}`;
  }
}
