/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   paper-spinner-lite.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />
/// <reference path="../paper-styles/color.d.ts" />
/// <reference path="paper-spinner-behavior.d.ts" />
/// <reference path="paper-spinner-styles.d.ts" />

/**
 * Material design: [Progress & activity](https://www.google.com/design/spec/components/progress-activity.html)
 *
 * Element providing a single color material design circular spinner.
 *
 *     <paper-spinner-lite active></paper-spinner-lite>
 *
 * The default spinner is blue. It can be customized to be a different color.
 *
 * ### Accessibility
 *
 * Alt attribute should be set to provide adequate context for accessibility. If not provided,
 * it defaults to 'loading'.
 * Empty alt can be provided to mark the element as decorative if alternative content is provided
 * in another form (e.g. a text block following the spinner).
 *
 *     <paper-spinner-lite alt="Loading contacts list" active></paper-spinner-lite>
 *
 * ### Styling
 *
 * The following custom properties and mixins are available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--paper-spinner-color` | Color of the spinner | `--google-blue-500`
 * `--paper-spinner-stroke-width` | The width of the spinner stroke | 3px
 */
interface PaperSpinnerLiteElement extends Polymer.Element, Polymer.PaperSpinnerBehavior {
}

interface HTMLElementTagNameMap {
  "paper-spinner-lite": PaperSpinnerLiteElement;
}
