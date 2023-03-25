function bubble_sort() {
    c_delay = 0;
    for (let i = 0; i < arrSize - 1; i++) {
        let j;
        for (j = 0; j < arrSize - i - 1; j++) {
            div_update(arr[j], arrHeight[j], "yellow");//Color update

            if (arrHeight[j] > arrHeight[j + 1]) {
                div_update(arr[j], arrHeight[j], "red");
                div_update(arr[j + 1], arrHeight[j + 1], "red");

                let temp = arrHeight[j + 1];
                arrHeight[j + 1] = arrHeight[j];
                arrHeight[j] = temp;

                div_update(arr[j], arrHeight[j], "red");
                div_update(arr[j + 1], arrHeight[j + 1], "red");
            }
            div_update(arr[j], arrHeight[j], "blue");
        }
        div_update(arr[j], arrHeight[j], "green");
    }
    div_update(arr[0], arrHeight[0], "green");
}