const element = document.getElementById("select-user-dropdown");
let showDropdownValues = false;

export function didTapDropdown() {
    showDropdownValues = !showDropdownValues;
    if(showDropdownValues) element.classList.remove("closed");
    if(!showDropdownValues) element.classList.add("closed");
}