function save(){
    var text_to_save=document.getElementById('ch_1-sec_1a').value;
    localStorage.setItem("text", text_to_save); // save the item
    }