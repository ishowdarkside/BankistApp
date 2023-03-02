class sliderView {
  #parentElement = document.querySelector(
    ".section__register__commercial__testimonial__wrapper"
  );
  #bulletParentElement = document.querySelector(
    ".section__register__commercial__testimonial__slider-pagination"
  );
  #testimonials = this.#parentElement.querySelectorAll(
    ".section__register__commercial__testimonial"
  );
  constructor() {
    this.#insertBullets();
    this.#transformTestimonials();
    this.#handleBullets();
  }

  #insertBullets() {
    this.#testimonials.forEach((t, i) => {
      const bullet = `<div class="bullet" data-number="${i}">`;
      this.#bulletParentElement.insertAdjacentHTML("beforeend", bullet);
      document.querySelector(".bullet").classList.add("bullet--active");
    });
  }

  #transformTestimonials() {
    this.#testimonials.forEach((t, i) => {
      t.style.transform = `translateX(${100 * i}%)`;
    });
  }

  #handleBullets() {
    this.#bulletParentElement.addEventListener(
      "click",
      function (e) {
        const slide = e.target.dataset.number;
        if (!slide) return;
        this.#testimonials.forEach((t, i) => {
          t.style.transform = `translateX(${100 * (i - slide)}%)`;
        });

        this.#handleActive();
        e.target.classList.add("bullet--active");
      }.bind(this)
    );
  }

  #handleActive() {
    this.#bulletParentElement.querySelectorAll(".bullet").forEach((el) => {
      el.classList.remove("bullet--active");
    });
  }
}

export default new sliderView();
