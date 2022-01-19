"use strict";

import modal from "./modules/modal.js";
import anchor from "./modules/anchor.js";
import accordeon from "./modules/accordeon.js";
import topSlider from "./modules/slider.js";
import bottomSlider from "./modules/carousel.js";
import sendForm from "./modules/sendForm.js";

accordeon();
anchor(".top-menu>ul");
modal();
topSlider();
bottomSlider();
sendForm();
