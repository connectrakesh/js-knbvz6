import "@ebay/skin/button";
import "@ebay/skin/button";
{
  "dependencies": [
      "@ebay/skin"
  ]
}
{
  "dependencies": [
      "@ebay/skin/less",
      "@ebay/skin/global",
      "@ebay/skin/button",
      "@ebay/skin/icon"
  ]
}
const AdaptivePlugin = require("arc-webpack");
...
...
    plugins: [
        new AdaptivePlugin({ flags: { "ds-4": true } })
    ]
    
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
<fieldset>
    <legend>Choose an Option</legend>
    <span class="field">
        <span class="checkbox field__control">
            <input class="checkbox__control" id="group-checkbox-1" type="checkbox" value="1" name="checkbox-group" checked />
            <span class="checkbox__icon" hidden>
                <svg class="checkbox__unchecked" focusable="false" height="18" width="18">
                    <use xlink:href="#icon-checkbox-unchecked"></use>
                </svg>
                <svg class="checkbox__checked" focusable="false" height="18" width="18">
                    <use xlink:href="#icon-checkbox-checked"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-checkbox-1">Option 1</label>
    </span>
    <span class="field">
        <span class="checkbox field__control">
            <input class="checkbox__control" id="group-checkbox-2" type="checkbox" value="2" name="checkbox-group" />
            <span class="checkbox__icon" hidden>
                <svg class="checkbox__unchecked" focusable="false" height="18" width="18">
                    <use xlink:href="#icon-checkbox-unchecked"></use>
                </svg>
                <svg class="checkbox__checked" focusable="false" height="18" width="18">
                    <use xlink:href="#icon-checkbox-checked"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-checkbox-2">Option 2</label>
    </span>
    <span class="field">
        <span class="checkbox field__control">
            <input class="checkbox__control" id="group-checkbox-3" type="checkbox" value="3" name="checkbox-group" />
            <span class="checkbox__icon" hidden>
                <svg class="checkbox__unchecked" focusable="false" height="18" width="18">
                    <use xlink:href="#icon-checkbox-unchecked"></use>
                </svg>
                <svg class="checkbox__checked" focusable="false" height="18" width="18">
                    <use xlink:href="#icon-checkbox-checked"></use>
                </svg>
            </span>
        </span>
        <label class="field__label field__label--end" for="group-checkbox-3">Option 3</label>
    </span>
</fieldset>
