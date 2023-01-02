const solution = (denum1, num1, denum2, num2) => {
    let [ denum, num ] = [denum1 * num2 + denum2 * num1, num2 * num1]

    while(true) {
        let isContinue = false

        const min = denum < num ? denum : num

        for (let i=2; i<=min; i++) {
            if (denum % i === 0 && num % i === 0) {
                denum = denum / i
                num = num / i
                isContinue = true
                break
            }
        }

        if (!isContinue) {
            break
        }
    }

    return [ denum, num ]
}