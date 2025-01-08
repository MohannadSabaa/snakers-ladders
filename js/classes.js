class Target {
  constructor(target, arabic, english) {
    this.target = document.querySelectorAll(target);
    this.arabic = arabic;
    this.english = english;
  }

  switchLanguage(language, index = 0, arabic, english) {
    if (language === "ar") this.target[index].textContent = arabic;
    if (language === "en") this.target[index].textContent = english;
  }
}

export { Target };
