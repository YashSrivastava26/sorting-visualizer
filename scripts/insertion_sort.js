function insertion_sort() {
    c_delay = 0;

    let i, key, j;
    for (i = 1; i < arrSize; i++) {
        key = arrHeight[i];
        j = i - 1;
        div_update(arr[j], arrHeight[j], "yellow");

        while (j >= 0 && arrHeight[j] > key) {
            div_update(arr[j], arrHeight[j], "red");
            div_update(arr[j + 1], arrHeight[j + 1], "red");

            arrHeight[j + 1] = arrHeight[j];
            arrHeight[j] = key;
            
            div_update(arr[j], arrHeight[j], "yellow");
            div_update(arr[j + 1], arrHeight[j + 1], "green");
            
            j--;
        }
        arrHeight[j + 1] = key;
        div_update(arr[j + 1], arrHeight[j + 1], "green");
    }
}