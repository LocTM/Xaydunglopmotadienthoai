let dtDat = new Phone(50, '', [],[])
let dtNhat = new Phone(70, '', [],[])

function sentDatToNhat() {
//     b1: Gui tin nhan
    let text = document.getElementById("dat").value;
    dtDat.textMessage(text);
    dtDat.sendMessage(dtNhat);
//     show lai hop thu den
    document.getElementById("inboxNhat").innerText
        = dtNhat.showInbox();
//     show lai thu da gui
    document.getElementById("sentDat").innerText
        = dtDat.showSent();
}