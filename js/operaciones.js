function perimetroCuadrado(){
    let lado = document.getElementById('ladoCuadrado')
    
    let resultado = 0  
    resultado =lado.value * 4


    let textResult = document.createElement('input')
    let mensaje =document.createElement('p')
    mensaje.setAttribute('id', 'resultado1')
    textResult.setAttribute('id', 'txtResultado1')
    mensaje.classList.add('card-text')
    mensaje.classList.add('mt-3')
    mensaje.innerText= 'Perimetro:'


    textResult.classList.add('form-control')
    textResult.classList.add('mb-2')
    textResult.classList.add('mt-2')
    textResult.value= resultado

    if (!document.getElementById('txtResultado1') && !document.getElementById('resultado1')){
    document.getElementById('cuadrado').append(mensaje)
    document.getElementById('cuadrado').append(textResult)
    }else{
        document.getElementById('resultado1').innerText= 'Perimetro:'
        document.getElementById('txtResultado1').value = resultado
    }
}


function areaCuadrado(){
    let lado = document.getElementById('ladoCuadrado')
    
    let resultado = 0  
    resultado =lado.value * lado.value


    let textResult = document.createElement('input')
    let mensaje =document.createElement('p')
    mensaje.setAttribute('id', 'resultado1')
    textResult.setAttribute('id', 'txtResultado1')
    mensaje.classList.add('card-text')
    mensaje.classList.add('mt-3')
    mensaje.innerText= 'Area:'


    textResult.classList.add('form-control')
    textResult.classList.add('mb-2')
    textResult.classList.add('mt-2')
    textResult.value= resultado

    if (!document.getElementById('txtResultado1') && !document.getElementById('resultado1')){
    document.getElementById('cuadrado').append(mensaje)
    document.getElementById('cuadrado').append(textResult)
    }else{
        document.getElementById('resultado1').innerText= 'Area:'
        document.getElementById('txtResultado1').value = resultado
    }
}


function perimetroTriangulo(){
    let t1= document.getElementById('tri1').value
    let t2= document.getElementById('tri2').value
    let t3= document.getElementById('tri3').value

    let result = parseInt(t1) + parseInt(t2) + parseInt(t3)

    let textResult = document.createElement('input')
    let mensaje =document.createElement('p')
    mensaje.setAttribute('id', 'resultado2')
    textResult.setAttribute('id', 'txtResultado2')
    mensaje.classList.add('card-text')
    mensaje.classList.add('mt-3')
    mensaje.innerText= 'Perimetro:'


    textResult.classList.add('form-control')
    textResult.classList.add('mb-2')
    textResult.classList.add('mt-2')
    textResult.value= result

    if (!document.getElementById('txtResultado2') && !document.getElementById('resultado2')){
    document.getElementById('triangulo1').append(mensaje)
    document.getElementById('triangulo1').append(textResult)
    }else{
        document.getElementById('resultado2').innerText= 'Perimetro:'
        document.getElementById('txtResultado2').value = result
    }
}


function areaTriangulo(){
    let base= document.getElementById('base').value
    let altura= document.getElementById('altura').value

    let result = (parseInt(base) * parseInt(altura))/2

    let textResult = document.createElement('input')
    let mensaje =document.createElement('p')
    mensaje.setAttribute('id', 'resultado3')
    textResult.setAttribute('id', 'txtResultado3')
    mensaje.classList.add('card-text')
    mensaje.classList.add('mt-3')
    mensaje.innerText= 'Area:'


    textResult.classList.add('form-control')
    textResult.classList.add('mb-2')
    textResult.classList.add('mt-2')
    textResult.value= result

    if (!document.getElementById('txtResultado3') && !document.getElementById('resultado3')){
    document.getElementById('triangulo2').append(mensaje)
    document.getElementById('triangulo2').append(textResult)
    }else{
        document.getElementById('resultado2').innerText= 'Area:'
        document.getElementById('txtResultado2').value = result
    }
}

function areaCirculo(){
    let r = document.getElementById('radio').value
    let result = Math.fround(Math.PI * (parseInt(r)* parseInt(r)))

    let textResult = document.createElement('input')
    let mensaje =document.createElement('p')
    mensaje.setAttribute('id', 'resultado4')
    textResult.setAttribute('id', 'txtResultado4')
    mensaje.classList.add('card-text')
    mensaje.classList.add('mt-3')
    mensaje.innerText= 'Area:'


    textResult.classList.add('form-control')
    textResult.classList.add('mb-2')
    textResult.classList.add('mt-2')
    textResult.value= result

    if (!document.getElementById('txtResultado4') && !document.getElementById('resultado4')){
    document.getElementById('circulo').append(mensaje)
    document.getElementById('circulo').append(textResult)
    }else{
        document.getElementById('resultado4').innerText= 'Area:'
        document.getElementById('txtResultado4').value = result
    }
}


function perimetroCirculo(){
    let r = document.getElementById('radio').value
    let result = Math.fround(2*Math.PI * parseInt(r))

    let textResult = document.createElement('input')
    let mensaje =document.createElement('p')
    mensaje.setAttribute('id', 'resultado4')
    textResult.setAttribute('id', 'txtResultado4')
    mensaje.classList.add('card-text')
    mensaje.classList.add('mt-3')
    mensaje.innerText= 'Perimetro:'


    textResult.classList.add('form-control')
    textResult.classList.add('mb-2')
    textResult.classList.add('mt-2')
    textResult.value= result

    if (!document.getElementById('txtResultado4') && !document.getElementById('resultado4')){
    document.getElementById('circulo').append(mensaje)
    document.getElementById('circulo').append(textResult)
    }else{
        document.getElementById('resultado4').innerText= 'Perimetro:'
        document.getElementById('txtResultado4').value = result
    }
}

function diametro(){
    let r = document.getElementById('radio').value
    let result = 2* parseInt(r)

    let textResult = document.createElement('input')
    let mensaje =document.createElement('p')
    mensaje.setAttribute('id', 'resultado4')
    textResult.setAttribute('id', 'txtResultado4')
    mensaje.classList.add('card-text')
    mensaje.classList.add('mt-3')
    mensaje.innerText= 'Diametro:'


    textResult.classList.add('form-control')
    textResult.classList.add('mb-2')
    textResult.classList.add('mt-2')
    textResult.value= result

    if (!document.getElementById('txtResultado4') && !document.getElementById('resultado4')){
    document.getElementById('circulo').append(mensaje)
    document.getElementById('circulo').append(textResult)
    }else{
        document.getElementById('resultado4').innerText= 'Diametro:'
        document.getElementById('txtResultado4').value = result
    }

}