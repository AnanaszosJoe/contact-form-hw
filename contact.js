let msgDatas = []

function sendMsg(e) {
    e.preventDefault();
    //console.log('ment');
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let msg = document.getElementById('msg').value
    //console.log(name, email, msg);
    if(!name || !email || !msg) return;
    msgDatas.push({name, email, msg})
    console.log(msgDatas);
    document.getElementById('answer').innerHTML=`
    Kedves <b>${name}</b>!<br>
    Köszönjük, hogy írt nekünk!
    `
}