# Dual Layer Slider

## Prototype

[View the prototype on GitHub Pages](https://markadrake.github.io/web-ui-sequenced-content/src/dual-layer-slider/dual-layer-slider.html).

## Visual Example
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/bktcZFpFFp4/0.jpg)](https://www.youtube.com/watch?v=bktcZFpFFp4)

## Description

I first spotted this UI design in practice on the [Google reCAPTCHA website](https://www.google.com/recaptcha/intro/). Given the nature of UI / UX design and how rapidly websites will refresh I've captured the design and uploaded it to [YouTube](http://www.youtube.com/watch?v=bktcZFpFFp4).

Why I like this particular design:

1. When viewing this component I found myself primarily focused on the content. The content, any call to actions, and all the UI controls are presented to me in a nice tight box. I don't wonder about the page looking for anything. My focus is where it belongs.

2. Simultaneously - we have the opportunity to present media in the background to grab our user's attention, drive some sort of emotion, even aid the user's understanding.

3. Moving the background image and the text at the same time had some visual appeal to me and just looked like this would be a fun exercise!

## Have Fun!

### Changes I Made

- I don't like to have target areas, that is an area that has a listener for a user event, less than 44px. This magic number originated from Apple's HUIG and has sort of stuck with me. One way I ensure the target area follows this guideline, even if the image itself is smaller, is by adding padding.

- Google appears to be relying on JavaScript for applying width & height, transitioning between scenes, etc. Here are some minor differences:

  - We rely on CSS for the animation behind our `transition` . It's triggerred by JavaScript, but CSS should provide better performance here. I'm not sure why they are animating the `left` position?

  - We use a trick with `inline-block` and `white-space` rules to lineup our scenes. We don't use JavaScript to calculate and set the width and height. More importantly, we don't have to run this calculation between window resizes or get intermediary moments of FoUC.

Just a quick note about my typography styling:

- By default I apply a reset to `<h1>` through `<h6>` tags and instead control how they display by applying the appropriate CSS class. This benefits content authors as they only need to worry about the semantics and document outline, and aesthetics can stay the same.

### Changes You Might Make

Here are some final thoughts from me about the **Dual Layer Slider**:

- I prefer to use `<img>` tags over backgrounds when possible, but especially when the image really adds to the content around it. Think about an e-commerce store showing product information, or helpful instructions, etc. It's nice to have this cataloged by search engines, and we can now give the image some `alt` text. Wins all around!

  - [`Object-Fit` has pretty good support in current generation browsers](https://caniuse.com/#feat=object-fit). There are polyfills and fallbacks available for older browsers that should help you to move away from this background-based solution.

  - Consider using the `<picture>` element, or the `srcset` & `sizes` attributes to (1) take advantage of new file formats that have better compression, and (2) exercise control over how small or large the requested image is, and lastly (3) apply some art direction in response to the viewport. [Read more about responsive images on MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

- Explore accessibility of this UI element more in depth. Apply the appropriate `aria` attributes.

- Consider changing the unit of measurement for `media queries`, `width`, `height`, `font-size`, `padding`, and everything else from `px` to `rem`!

- Add gesture support. Touch devices are everywhere - not only mobile phones. [Detect touch capabilities with something like Modernizr](https://modernizr.com/), and [use a gesture library like ZingTouch](http://zingchart.github.io/zingtouch/).

- Integrate with a SPA framework! Our JavaScript class should be easily translatable to whichever framework your project uses. [Consider VueJS](https://vuejs.org/)!