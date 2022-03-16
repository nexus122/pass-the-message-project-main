// Tu código aquí
let Estado = {
    form:document.querySelector("#message-form"),
    phrase: document.querySelector("#message"),
    resp: document.querySelector(".message-content"),
    alert: document.querySelector(".alert"),
    escribirLaFrase(){        
        if(this.phrase.value.trim() == "" || this.phrase.value.trim() == undefined || this.phrase.value.trim() == null){
            console.log("El mensaje esta vacio");            
            this.alert.style.display = 'block';
            setTimeout(function(){
                Estado.alert.style.display = 'none';
            },1000);
            return;    
        }
        this.resp.innerHTML = this.phrase.value
    }
}

Estado.form.addEventListener('submit', function(e){
    e.preventDefault();
    e.stopPropagation();
    console.log("Hemos hecho clic en el botón de submit!")
    Estado.escribirLaFrase();    
})
