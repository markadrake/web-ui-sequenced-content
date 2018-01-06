# Dual Layer Slider

## Visual Example
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/bktcZFpFFp4/0.jpg)](https://www.youtube.com/watch?v=bktcZFpFFp4)

## Description

I first spotted this UI design in practice on the [Google reCAPTCHA website](https://www.google.com/recaptcha/intro/). Given the nature of UI / UX design and how rapidly websites will refresh I've captured the design and uploaded it to [YouTube](http://www.youtube.com/watch?v=bktcZFpFFp4).

## Follow Up Improvements

- I prefer to use `<img>` tags over backgrounds when possible, but especially when the image really adds to the content around it. Think about an ecommerce store showing product information, or helpful instructions, etc. It's nice to have this cataloged by search engines, and we can now give the image some `alt` text. Wins all around!

  - [`Object-Fit` has pretty good support in current generation browsers](https://caniuse.com/#feat=object-fit). There are polyfills and fallbacks available for older browsers that should help you to move away from this background-based solution.

- Consider using the `<picture>` element, or the `srcset` & `sizes` attributes to (1) take advantage of new file formats that have better compression, and (2) excercise control over how small or large the requested image is, and lastly (3) apply some art direction in response to the viewport. [Read more about responsive images on MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

- Explore accessibility - the best route here is to apply the appropriate `aria` attributes.

- Add gesture support.