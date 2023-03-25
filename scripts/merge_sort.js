function merge(l, m, r) {
    var n1 = m - l + 1;
    var n2 = r - m;

    var L = [];
    var R = [];

    for (var i = 0; i < n1; i++) {
        L[i] = arrHeight[l + i];
        div_update(arr[l + i], arrHeight[l + i], "red");
    }
    for (var j = 0; j < n2; j++) {
        R[j] = arrHeight[m + 1 + j];
        div_update(arr[m + 1 + j], arrHeight[m + 1 + j], "red");
    }

    var i = 0, j = 0, k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arrHeight[k] = L[i];
            div_update(arr[k], arrHeight[k], "green");
            i++;
        }
        else {
            arrHeight[k] = R[j];
            div_update(arr[k], arrHeight[k], "green");
            j++;
        }
        k++;
    }
    
    while (i < n1) {
        arrHeight[k] = L[i];
        div_update(arr[k], arrHeight[k], "green");
        i++;
        k++;
    }
    
    while (j < n2) {
        arrHeight[k] = R[j];
        div_update(arr[k], arrHeight[k], "green");
        j++;
        k++;
    }
}

function merge_sort(l, r) {
    c_delay = 0;
    if (l < r) {

        let m = l + Math.floor((r - l) / 2);

        merge_sort(l, m);
        merge_sort(m + 1, r);

        merge(l, m, r);
    }
}