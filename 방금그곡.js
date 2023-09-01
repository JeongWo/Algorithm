function solution(m, musicinfos) {
    var answer = [];

    m = m
    .replace(/(C#)/g,"c")
    .replace(/(D#)/g,"d")
    .replace(/(F#)/g,"f")
    .replace(/(G#)/g,"g")
    .replace(/(A#)/g,"a");

    for(let i = 0 ; i < musicinfos.length;i++){
        musicinfos[i] = musicinfos[i].split(",")

        let time1 = musicinfos[i][0].split(":")
        let time2 = musicinfos[i][1].split(":")
        let difftime = (time2[0] - time1[0]) * 60 + (time2[1] - time1[1])

        musicinfos[i][3] = musicinfos[i][3].replace(/(C#)/g,"c")
        .replace(/(D#)/g,"d")
        .replace(/(F#)/g,"f")
        .replace(/(G#)/g,"g")
        .replace(/(A#)/g,"a");

        if ( musicinfos[i][3].length > difftime){
             musicinfos[i][3] =  musicinfos[i][3].substring(0,difftime)
        } else{
            let str = ""
            for( let z = 0 ; z <difftime;z++){
                str += musicinfos[i][3][z%musicinfos[i][3].length]
            }
            musicinfos[i][3] = str
        }

        if (musicinfos[i][3].includes(m)){
            answer.push([musicinfos[i][2],difftime])
        }

    }

    answer.sort((a,b)=>b[1]-a[1])
    if (answer.length === 0 ) return "(None)"

    return answer[0][0];
}