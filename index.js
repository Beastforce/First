var count = 0;
var countEl = document.getElementById("count-el");
var saveEl = document.getElementById("saveEl");




function increment() {
    count += 1;
    countEl.textContent = count;
};

function save() {
    var contain = count + " -"
    count = 0;
    countEl.textContent = count;
    saveEl.textContent += " " + contain;
    console.log(count);
}
