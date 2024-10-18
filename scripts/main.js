const tabs = document.querySelector(".tabs_list");
const tabButton = document.querySelectorAll(".navigation_menu_item");
const contents = document.querySelectorAll(".navigation_block_content_item");

if (tabs) {
  tabs.onclick = (e) => {
    let target = e.target;
    while (target && !target.classList.contains("navigation_menu_item")) {
      target = target.parentNode;
    }
    if (target && target.dataset.id) {
      const id = target.dataset.id;
      tabButton.forEach((btn) => {
        btn.classList.remove("navigation_menu_item_active");
      });
      target.classList.add("navigation_menu_item_active");

      contents.forEach((content) => {
        content.classList.remove("navigation_menu_item_active");
      });
      const element = document.getElementById(id);
      element.classList.add("navigation_menu_item_active");
    }
  };
}