const uid = () => {
    const val1 = Date.now().toString(36);
    const val2 = Math.random().toString(36).substr(2);
    return val1 + val2;
}
console.log(uid());