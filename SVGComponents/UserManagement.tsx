import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export default ({ opacity = 1, fill, width, height, ...props }: SvgProps) => {
  return (
    <Svg
      fill={'#ffffff'}
      height={25}
      width={25}
      viewBox="0 -3 448 447"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M392 248.5c0 17.672-14.328 32-32 32s-32-14.328-32-32 14.328-32 32-32 32 14.328 32 32zm0 0M120 248.5c0 17.672-14.328 32-32 32s-32-14.328-32-32 14.328-32 32-32 32 14.328 32 32zm0 0M256 216.5c0 17.672-14.328 32-32 32s-32-14.328-32-32 14.328-32 32-32 32 14.328 32 32zm0 0M128.223 432.5a39.338 39.338 0 01-8.223-24v-80a71.972 71.972 0 014.145-23.754c-1.375-.094-2.739-.246-4.145-.246H56a55.35 55.35 0 00-31.473 9.71A56.061 56.061 0 000 360.5v32a40.068 40.068 0 0023.29 36.312A37.764 37.764 0 0032 431.7V344.5h16v88zm0 0M136.246 440.5c-.086-.063-.156-.145-.246-.207v.207zm0 0M305.434 302.203a56.666 56.666 0 00-17.938-20 20.263 20.263 0 00-2.336-1.496A55.914 55.914 0 00256 272.5h-64c-30.93 0-56 25.07-56 56v80c0 13.254 10.746 24 24 24h8v-112h16v112h80v-112h16v112h8c13.254 0 24-10.746 24-24v-80a55.876 55.876 0 00-6.566-26.297zm0 0M423.496 314.227A55.371 55.371 0 00392 304.5h-64c-1.398 0-2.762.152-4.137.246A72.082 72.082 0 01328 328.5v80a39.338 39.338 0 01-8.223 24H400v-88h16v87.2a36.85 36.85 0 008.574-2.848A40.057 40.057 0 00448 392.5v-32a56.057 56.057 0 00-24.504-46.273zm0 0" />
      <Path d="M224 104.5a95.81 95.81 0 00-87.16 136h45.656c-11.719-20.172-7.238-45.844 10.617-60.855 17.856-15.008 43.918-15.008 61.774 0 17.855 15.011 22.336 40.683 10.617 60.855h45.695a95.807 95.807 0 00-6.316-91.906A95.803 95.803 0 00224 104.5zm0 0" />
      <Path d="M416 168.5h-43.2l-1.554-6.008a147.798 147.798 0 00-16.316-39.09l-3.203-5.351 30.671-30.727a7.928 7.928 0 000-11.238l-33.972-33.984a8.113 8.113 0 00-11.203 0l-30.727 30.726-5.351-3.2a148.13 148.13 0 00-39.137-16.327L256 51.738V8.5a8 8 0 00-8-8h-48a8 8 0 00-8 8v43.2l-6.008 1.554a148.14 148.14 0 00-39.097 16.309l-5.352 3.203-30.719-30.664a8.111 8.111 0 00-11.238 0L65.602 76.074a7.948 7.948 0 00-2.34 5.625c0 2.114.843 4.137 2.34 5.625l30.726 30.727-3.2 5.351a147.808 147.808 0 00-16.32 39.09l-1.57 6.008H32a8 8 0 00-8 8v48a8 8 0 008 8h10.824a47.867 47.867 0 0128.766-29.102 47.854 47.854 0 0140.746 3.758c-.129-2.215-.336-4.41-.336-6.656 0-61.855 50.145-112 112-112s112 50.145 112 112c0 2.246-.207 4.441-.336 6.656a47.854 47.854 0 0140.746-3.758 47.867 47.867 0 0128.766 29.102H416a8 8 0 008-8v-48a8 8 0 00-8-8zm0 0" />
    </Svg>
  )
}