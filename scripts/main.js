let arr_size_slider = document.getElementById('arrSize');
let generate_btn = document.getElementById('btnGenerate');
let sort_btn = document.getElementById('btnSort');
let algo_selection = document.getElementById('algo_selection');


let arrHeight = [];
let arr = [];
let arrMargin;
var arrSize = arr_size_slider.value;
let arrContainerId = document.getElementById('arrContainer');
arrContainerId.style = "flex-direction: row";

generate_btn.addEventListener("click", generateArr);
arr_size_slider.addEventListener("input", updateArr);


function generateArr(){
    arrContainerId.innerHTML = "";
    for (let i = 0; i < arrSize; i++) {
        arrHeight[i] = Math.floor(10 + Math.random() * 90);
        arr[i] = document.createElement("div");
        arrContainerId.append(arr[i]);
        arrMargin = 0.1;
        arr[i].style =  "margin:"+ arrMargin + "%; background-color: blue; width:" + (100/arrSize-(2*arrMargin)) + "%; height:" + (arrHeight[i]) + "%;";
    }
}

function updateArr(){
    arrSize = arr_size_slider.value;
    generateArr();
}

window.onload = updateArr();



function chooseSort(){
    let selectedSort = algo_selection.value;
    return selectedSort;
}

sort_btn.addEventListener('click', run_algo);
function run_algo(){
    let selectedSort = chooseSort();
    printComplexity(selectedSort);
    switch (selectedSort) {
        case 'bubble_sort':     bubble_sort();
                                break;
                                
        case 'insertion_sort':  insertion_sort();
                                break;

        case 'selection_sort':  selection_sort();
                                break;

        case 'merge_sort':      merge_sort(0, arrSize - 1);
                                break;

        case 'heap_sort':       heap_sort();
                                break;
    }
}
// sort_btn.addEventListener('click', chooseSort);