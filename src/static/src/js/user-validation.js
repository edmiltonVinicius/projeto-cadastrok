    function validationInput(id,q){
        const elem = document.getElementById(id).value
        
        if(elem.length < Number(q)){
            document.getElementById(id).style.borderColor="red"
            
        }else {
            document.getElementById(id).style.borderColor="green"
            document.getElementById(id).style.background="url('../static/build/img/certo.png') 95% 50% no-repeat"
        }
    }
