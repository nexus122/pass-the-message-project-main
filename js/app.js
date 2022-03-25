// Tu código aquí
let Estado = {
    form:$("#message-form"),
    phrase: $("#message"),
    resp: $(".message-content"),
    alert: $(".alert"),
    escribirLaFrase(){
        if(this.phrase.val().trim() == "" || this.phrase.val().trim() == undefined || this.phrase.val().trim() == null){
            console.log("El mensaje esta vacio");

            //this.alert.style.display = 'block';
            this.alert.show();

            setTimeout(function(){
                Estado.alert.hide();
            },1000);

            return;
        }

        //this.resp.innerHTML = this.phrase.value
        this.resp.text(this.phrase.val());

    }
}

$(Estado.form).submit(function(e){
    e.preventDefault();    
    console.log("Se ha recivido el valor");
    Estado.escribirLaFrase();
});

/*
Estado.form.addEventListener('submit', function(e){
    e.preventDefault();    
    console.log("Hemos hecho clic en el botón de submit!")
    Estado.escribirLaFrase();    
})
*/
