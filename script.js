let STRING = {
  storage_name: "item",
};

let addBtn = document.querySelector(".add_icon");
addBtn.addEventListener("click", () => {
  const name = prompt("Enter the name ");
  if (!name) {
    return;
  }
  const link = prompt("Enter the URL ");
  if (!link || !name) {
    return;
  }
  const info = {
    id: Date.now(),
    name,
    link,
    icon: name.split("")[0].toUpperCase(),
  };
  saveToStorate(info, STRING.storage_name);
  deleteFromStorage(id, STRING.storage_name);
});

// save to localstorage
function saveToStorate(info, identifier) {
  if (localStorage.getItem(identifier) == null) {
    localStorage.setItem(identifier, JSON.stringify([]));
  }
  let oldData = JSON.parse(localStorage.getItem(identifier));
  oldData.push(info);
  localStorage.setItem(identifier, JSON.stringify(oldData));
}

//delete from LocalStorage
function deleteFromStorage(id, identifier) {
  if (localStorage.getItem(identifier) == null) {
    return;
  }
  let data = JSON.parse(localStorage.getItem(identifier));
  let afterDelation = data.filter((item) => {
    return item.id !== id;
  });
  localStorage.setItem(identifier, JSON.stringify(afterDelation));
}
