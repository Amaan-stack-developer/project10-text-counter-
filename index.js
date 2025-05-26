let input = document.getElementById('input');
let upperbtn = document.getElementById('upperbtn');
let lowerbtn = document.getElementById('lowerbtn');
let clearbtn = document.getElementById('clearbtn');
let wordcount = document.getElementById('wordcount');
let copybtn = document.getElementById('copybtn');
let pastebtn = document.getElementById('pastebtn');
let charactercount = document.getElementById('charectercount');

const UpperCase = ()=>{
    input.value = input.value.toUpperCase();
}
const LowerCase = ()=>{
    input.value = input.value.toLowerCase();
}
const ClearBtn = ()=>{
    input.value = "";
    wordcount.innerText = "0";
    charactercount.innerText = "0"
}
const updateCount = ()=>{
    let text = input.value.trim();
    wordcount.innerText = text === '' ? 0 : text.split(" ").length;
    charactercount.innerText = text.length;
}
input.addEventListener('input', updateCount);
const CopyBtn = ()=>{
    input.select();
    input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input.value).then(()=>{
        alert("Text copied to clipboard!");
    }).catch(err =>{
        alert("Failed to copy text:" + err);
    });
};
 const PasteBtn = async ()=>{
    try {
        const text = await navigator.clipboard.readText();
        input.value = text;
        updateCount();
    } catch (err) {
        alert("Failed to paste text:" + err);
    }
 }