function filter_list(l) {
    return l.filter(function(x) {
        if (typeof(x) === 'number')
        return true;
    });
}