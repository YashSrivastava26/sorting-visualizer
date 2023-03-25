let TCcontainer = document.getElementById('TCcontainer');
let SCcontainer = document.getElementById('SCcontainer');

function printComplexity(sortingMethod) {
    if(sortingMethod == 'bubble_sort'){
        TCcontainer.innerHTML = 'Worst Case: O(n<sup>2</sup>) <br>Average Case: &Theta;(n<sup>2</sup>) <br> Best Case: &Omega;(n)'; 
        SCcontainer.innerHTML = 'O(1)';
    }
    else if(sortingMethod == 'insertion_sort'){
        TCcontainer.innerHTML = 'Worst Case: O(n<sup>2</sup>) <br>Average Case: &Theta;(n<sup>2</sup>) <br> Best Case: &Omega;(n)'; 
        SCcontainer.innerHTML = 'O(1)';
    }
    else if(sortingMethod == 'selection_sort'){
        TCcontainer.innerHTML = 'Worst Case: O(n<sup>2</sup>) <br>Average Case: &Theta;(n<sup>2</sup>) <br> Best Case: &Omega;(n)'; 
        SCcontainer.innerHTML = 'O(1)';
    }
    else if(sortingMethod == 'merge_sort'){
        TCcontainer.innerHTML = 'Worst Case: O(log(n)) <br>Average Case: &Theta;(log(n)) <br> Best Case: &Omega;(log(n))'; 
        SCcontainer.innerHTML = 'O(n)';
    }
    else if(sortingMethod == 'heap_sort'){
        TCcontainer.innerHTML = 'Worst Case: O(log(n)) <br>Average Case: &Theta;(nlog(n)) <br> Best Case: &Omega;(log(n))'; 
        SCcontainer.innerHTML = 'O(n)';
    }
    
}