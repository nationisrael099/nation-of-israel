/**
 *   Title: Project Management Portal
 *   Author: Keith Hall
 *   Date: 12/25/2021
 *   Description: This is the global .js file that manages localStorage and themes for the project management portal
 */
// This sets the default theme to light if no selection is made.
function setDefaultTheme() {
  const theme = localStorage.getItem("mode") || "light-theme"; // Calls local storage function result and assigns to a variable.
  const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
  const iconText = localStorage.getItem("iconText") || "Light Mode";

  document.body.classList.value = theme; // Calls document.body.classList.value and assign it to storage results variable.
  document.getElementById("icon-mode").classList.add(iconMode);
  document.getElementById("icon-text").innerHTML = iconText;
}
// This sets the user's selected theme.
function setSelectedTheme() {
  document.body.classList.value = localStorage.getItem( key: "mode" ) || "light-theme";
}