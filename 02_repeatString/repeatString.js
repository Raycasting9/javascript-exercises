const repeatString = function(word,times) {

    if (times < 0){
        return 'ERROR';
    }

    let fullword = "";
    for(let i=0; i < times; i++){
        fullword += word;
    }

    return fullword;

};

// Do not edit below this line
module.exports = repeatString;
