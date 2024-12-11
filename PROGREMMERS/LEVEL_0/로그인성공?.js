function solution(id_pw, db) {
    let [id, pw] = id_pw;
    
    for(let [dbid ,dbpw] of db) {
        if(dbid == id){
            if(dbpw == pw) return 'login';
            else return 'wrong pw'
        }
    }
    
    return 'fail';
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120883