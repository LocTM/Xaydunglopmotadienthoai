class Phone {
    constructor(battery, draft, inbox, sent) {
        this.battery = battery;
        this.draft = draft;
        this.inbox = inbox;
        this.sent = sent;
    }
    charge(){
        this.battery = 100;
    }
    //Gắn chuỗi cho thư nháp
    textMessage(text){
        this.draft = text;
    }
    showSent(){
        return this.sent;
    }
    showInbox(){
        return this.inbox;
    }
    // dien thoai hien tai la this.
    // dien thoai dc nhan tin nhan la phone
    sendMessage(phone){
        // Chuyển thư nháp vào sent
        this.sent.push(this.draft);
        // Chuyển thư nháp vào inbox
        phone.inbox.push(this.draft)
        //Xóa thư nháp
        this.draft="";
    }

}