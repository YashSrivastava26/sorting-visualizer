function selection_sort() {
    c_delay = 0;

    let i, j, min_idx;
    for (i = 0; i < arrSize - 1; i++) {
        min_idx = i;

        div_update(arr[i], arrHeight[i], "red");
        div_update(arr[min_idx], arrHeight[min_idx], "red");
        for (j = i + 1; j < arrSize; j++) {
            div_update(arr[j], arrHeight[j], "yellow");
            
            if (arrHeight[j] < arrHeight[min_idx]) {
                if(min_idx != i){
                    div_update(arr[min_idx], arrHeight[min_idx], "blue");
                }
                min_idx = j;
                div_update(arr[min_idx], arrHeight[min_idx], "red");
            }
            else{
                div_update(arr[j], arrHeight[j], "blue");
            }
        }
        
        let temp = arrHeight[i];
        arrHeight[i] = arrHeight[min_idx];
        arrHeight[min_idx] = temp;

        div_update(arr[min_idx], arrHeight[min_idx], "blue");
        div_update(arr[i], arrHeight[i], "green");
    }
    div_update(arr[i], arrHeight[i], "green");
}