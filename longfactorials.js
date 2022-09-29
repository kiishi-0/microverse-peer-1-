function extraLongFactorials(n) {
    // Write your code here
    let ans = 1;
    for(let i = n; i > 1; i--){
        ans *= i;
    }
    ans = BigInt(ans)
    return ans;
}

console.log(extraLongFactorials(25))