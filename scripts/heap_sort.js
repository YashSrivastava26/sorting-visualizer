function heap_sort() {

    for (var i = Math.floor(arrSize / 2) - 1; i >= 0; i--)
        heapify(arrSize, i);

    for (var i = arrSize - 1; i > 0; i--) {
        var temp = arrHeight[0];
        arrHeight[0] = arrHeight[i];
        arrHeight[i] = temp;
        
        div_update(arr[0], arrHeight[0], "yellow");
        div_update(arr[i], arrHeight[i], "green");
        
        heapify(i, 0);
    }
    div_update(arr[0], arrHeight[0], "green");
}

function heapify(N, i) {
    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;

    if (l < N && arrHeight[l] > arrHeight[largest]){
        div_update(arr[largest], arrHeight[largest], "blue");
        largest = l;
        div_update(arr[largest], arrHeight[largest], "red");
    }

    if (r < N && arrHeight[r] > arrHeight[largest]){
        div_update(arr[largest], arrHeight[largest], "blue");
        largest = r;
        div_update(arr[largest], arrHeight[largest], "red");
    }

    if (largest != i) {
        var swap = arrHeight[i];
        arrHeight[i] = arrHeight[largest];
        arrHeight[largest] = swap;

        div_update(arr[i], arrHeight[i], "blue");
        div_update(arr[largest], arrHeight[largest], "blue");

        heapify(N, largest);
    }
}