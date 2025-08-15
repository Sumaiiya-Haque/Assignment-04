1. totalFine(fare)
function totalFine(fare){
    if(typeof fare !== 'number' || fare <= 0){
        return 'Invalid';
    }
    const fine = fare + fare * (20 / 100) + 30;
    return fine;
}


✅ কাজ:

fare যদি সংখ্যা না হয় বা শূন্য/নেগেটিভ হয়, "Invalid" রিটার্ন করবে।

অন্যথায় মোট জরিমানা = মূল ভাড়া + ২০% ভাড়া + ৩০ যোগ করবে।

💡 পরামর্শ: 20 / 100 এর বদলে 0.2 ব্যবহার করলে পড়তে সহজ হবে।

2. onlyCharacter(str)
function onlyCharacter(str) {
    if(typeof str !== 'string'){
        return 'Invalid';
    }
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] !== " "){
            newStr = newStr + str[i];
        }
    }
    return newStr.toUpperCase();
}


✅ কাজ:

ইনপুট স্ট্রিং না হলে "Invalid"

সব স্পেস বাদ দেয়

বাকি ক্যারেক্টারগুলো বড় হাতের করে দেয়

💡 পরামর্শ: লুপের বদলে .split(" ").join("").toUpperCase() করলে কোড আরও ছোট হবে।

3. bestTeam(player1, player2)
function bestTeam(player1, player2) {
    if(typeof player1 !== 'object' || typeof player2 !== 'object' || Array.isArray(player1) || Array.isArray(player2)){
        return 'Invalid';
    }
    const sum1 = player1.foul + player1.cardY + player1.cardR;
    const sum2 = player2.foul + player2.cardY + player2.cardR;
    if(sum1 < sum2){
        return player1.name;
    }
    else if(sum1 === sum2){
        return "Tie";
    }
    else{
        return player2.name;
    }
}


✅ কাজ:

দুইজন প্লেয়ারের foul + cardY + cardR যোগফল তুলনা করে কম যাঁর, সে বিজয়ী।

সমান হলে "Tie"।

💡 পরামর্শ: এখানে player1, player2-এর সব প্রপার্টি আছে কিনা তা আগে চেক করা ভালো।

4. isSame(arr1, arr2)
function isSame(arr1, arr2) {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return "Invalid"
    }
    if(arr1.length !== arr2.length) return false;
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]) return false;
    }
    return true;
}


✅ কাজ:

দুই অ্যারে একই কিনা চেক করে।

strict equality (===) না ব্যবহার করে loose comparison (!=) ব্যবহার করলে "4" আর 4-কে সমান ধরা যেত।

5. resultReport(marks)
function resultReport(marks) {
    if(!Array.isArray(marks)){
        return "Invalid"
    }
    if(marks.length === 0){
        return {
            'finalScore':0,
            'pass':0,
            'fail':0
        }
    }
    let pass = [];
    let fail = [];
    for(let mark of marks){
        if(mark < 40){
            fail.push(mark)
        }
        if(mark >= 40){
            pass.push(mark)
        }
    }
    let finalScore = 0;
    if(marks.length){
        for(let mark of marks){
            finalScore = finalScore + mark;
        }
    }
    let finalAvg = finalScore / (marks.length)
    return {
        'finalScore':Math.floor(finalAvg),
        'pass':pass.length,
        'fail':fail.length
    }
}


✅ কাজ:

মার্কস অ্যারে না হলে "Invalid"

খালি হলে শূন্য ফলাফল

40 বা তার বেশি হলে পাস কাউন্ট, কম হলে ফেল কাউন্ট

গড় নম্বর floor করে finalScore

💡 পরামর্শ: pass এবং fail অ্যারে আলাদা রাখার দরকার নেই, শুধু কাউন্ট রাখলেই হবে।


