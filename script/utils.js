// Get Inner Text value
export const getinnerTextvalue = (id) => {
    const text = document.getElementById(id);
    const textValue = text.innerText;
    return textValue;
}