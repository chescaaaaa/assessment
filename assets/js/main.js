function addItem(){
    
    // get text field
    const input = document.getElementById("inputElement");
    const inputValue = input.value;
    
    // clear text field
    input.value = "";
    
    console.log(inputValue);
    
    // create the list item
    const item = document.createElement('li');
    
    // add the text for the list item
    item.appendChild(document.createTextNode(inputValue));
    
    // get list
    const list = document.getElementById("myList");
    
    // add it to the list
    list.appendChild(item);
    
}