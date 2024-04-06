export function getParams(param){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get(param);
    return product;
  }

  export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false ){
    console.log(list);
    const htmlStrings = list.map(templateFn);
    if (clear){
      parentElement.innerHTML = "";
    }
  
    parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
  }