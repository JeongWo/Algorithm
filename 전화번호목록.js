function solution(phone_book) {
    let hashMap = {}
    
    for(let phoneNumber of phone_book) {
        hashMap[phoneNumber] = 1
    }
    
    for(let phoneNumber of phone_book) {
        let temp = ""
        let phoneNumberWithoutSpace = phoneNumber.replace(/\s/g, "")
        
        for(let number of phoneNumberWithoutSpace) {
            temp += number
            
            if(hashMap[temp] && temp != phoneNumberWithoutSpace) {
                return false
            }
        }
    }
    
    return true
}