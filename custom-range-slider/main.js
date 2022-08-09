const range = document.getElementById("range");

range.addEventListener("input", (event) => {
  const value = parseInt(event.target.value);
  const label = event.target.nextElementSibling;

  // move label
  const rangeWidth = getComputedStyle(event.target).getPropertyValue("width");
  const labelWidth = getComputedStyle(label).getPropertyValue("width");

  const numWidth = parseInt(rangeWidth.substring(0, rangeWidth.length - 2));
  const numLabelWidth = parseInt(
    labelWidth.substring(0, labelWidth.length - 2)
  );

  const max = event.target.max;
  const min = event.target.min;

  const scale = (num, inMin, inMax, outMin, outMax) =>
    ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  const left =
    value * (numWidth / max) -
    numLabelWidth / 2 +
    scale(value, min, max, 10, -10);
  label.style.left = `${left}px`;

  // end move label

  label.innerHTML = value;
});
