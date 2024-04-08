// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
 localStorage.setItem(key, JSON.stringify(data));
}

export function getParams(param){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get(param);
    return product;
  }

  export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false ){
    const htmlStrings = list.map(templateFn);
    if (clear){
      parentElement.innerHTML = "";
    }
  
    parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
  }