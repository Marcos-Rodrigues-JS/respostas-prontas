function semVariavel(){
  var footer = document.getElementById("footer");
  footer.parentNode.removeChild(footer);
  
    var res = document.querySelector("div#txt")  
    let pergunta = document.getElementById("txt");
  pergunta.innerHTML = "Qual o nome do seu template?<br>";

  let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.id = "templateID"
    input.setAttribute("placeholder", "Digite aqui");
    pergunta.appendChild(input);

  let inputB = document.createElement('button')
    inputB.innerHTML = "Pronto"
    inputB.classList.add("btn", "btn-pronto");
    inputB.onclick = Pronto
    res.appendChild(inputB)
    
  
    let resp = document.getElementById('dd');
    let img = document.createElement('img');
    img.setAttribute('id', 'foto');
    img.setAttribute('src','blips.png');
    resp.appendChild(img);
    

    
}

function Pronto(){
  

    var numero = document.getElementById("templateID")
var numeroEscolhido = numero.value
const hasUpper = /[A-Z]/.test(numeroEscolhido);


if(numeroEscolhido.length == 0){
  window.alert('[ERRO] - POR FAVOR DIGITE O NOME DO SEU TEMPLATE ❌')
} else if (hasUpper == true) {
  alert('[ERRO] - NÃO COLOQUE LETRAS MAIÚSCULAS ❌')
} else if (numeroEscolhido.includes(" ")) {
  alert('[ERRO] - NÃO COLOQUE ESPAÇO ❌')} else {

  let btn = document.createElement("button");
  btn.innerHTML = "Integrar ao meu blip 🔥";
  btn.id = "idbtt"
  btn.classList.add("btn", "btn-integrarBotão");
  let divDD = document.getElementById("dd");
  btn.onclick = integrarBotão;
  divDD.appendChild(btn);

  const resultado = {
    "type": "template",
    "template": {
      "language": {
        "policy": "deterministic",
        "code": "pt_BR"
      },
      "name": `${numeroEscolhido}`,
      "components": []
    }
  }



  function removeImage() {
    let image = document.getElementById("foto");
    image.parentNode.removeChild(image);
  } removeImage()
  var res = document.querySelector("div#txt")  

  var resp = document.getElementById("txt");
    resp.innerHTML = "Segue resultado 🤓<p> basta copiar e <b>colar no seu conteúdo dinâmico</b>"

    let inputResultado = document.createElement("textarea");
  inputResultado.id = "resultado"; 
  inputResultado.value = JSON.stringify(resultado, null, 2)
  inputResultado.setAttribute("readonly", "true");
  inputResultado.style.width = "500px";
  inputResultado.style.height = "200px";
  res.appendChild(inputResultado);

  let btnCopiar = document.createElement("button");
  btnCopiar.innerHTML = "Copiar ✂️";
  btnCopiar.classList.add("btn", "btn-copiar");
  btnCopiar.id = "btnCopiar";
  btnCopiar.onclick = copiarResultado;
  res.appendChild(btnCopiar);
  
  let btnRefazer = document.createElement("button");
  btnRefazer.innerHTML = "Refazer 🔙";
  btnRefazer.classList.add("btn", "btn-refazer");
  btnRefazer.id = "btnRefazer";
  btnRefazer.onclick = refazer;
  res.appendChild(btnRefazer);
  
  
 
}
function copiarResultado() {
    var resultadoFim = document.getElementById("resultado");
    let btnCopiar = document.getElementById("btnCopiar");
    resultadoFim.select();
    btnCopiar.innerHTML = "Copiado ✅";
    btnCopiar.classList.add("btn-copiado");
    document.execCommand("copy");
}

function refazer() {
  window.location.href = 'index.html'; 
}

//-----------------Colocando o campo de input e botões-------------//
function integrarBotão(){
  
var input = document.createElement("input");
input.type = "text";
input.id = "inputId";
input.setAttribute("placeholder", "Cole aqui o TOKEN do seu bot de ATENDIMENTO HUMANO");
input.className = "inputClass";
document.getElementById("dd").appendChild(input);

let btn = document.getElementById("idbtt");
let divDD = document.getElementById("dd");
divDD.removeChild(btn);

let btnn = document.createElement("button");
  btnn.innerHTML = "Cadastrar resposta no Blip ✅";
  btnn.id = "idbtt"
  btnn.classList.add("btn", "btn-integrar");
  let divDDD = document.getElementById("dd");
  btnn.onclick = integrar;
  divDDD.appendChild(btnn);
}

//-----------------PARTE DA INTEGRAÇÃO-------------------------//
function integrar(){
  
  
  const url = "https://http.msging.net/commands"
  const headerss = {
   'Content-Type': 'application/json',
   'Authorization': inputId.value
 }
 const body = {
  "id": "123",
  "to": "postmaster@desk.msging.net",
  "method": "get",
  "uri": "/replies/b56c9e64-e3bb-4164-a2c7-Feito-Por-MarcosRodriguesViaAPI"}

const bodyPOST = {
  "id": "${{guid}}",
  "to": "postmaster@desk.msging.net",
  "method": "set",
  "uri": "/replies/b56c9e64-e3bb-4164-a2c7-Feito-Por-MarcosRodriguesViaAPI",
  "type": "application/vnd.lime.collection+json",
  "resource":{
      "itemType": "application/vnd.iris.desk.custom-reply+json",
      "items": [
          {
      "id": "b56c9e64-e3bb-4164-a2c7-Feito-Por-MarcosRodriguesViaAPI",
      "category": "Mensagens Ativas",
      "name": numeroEscolhido,
      "document": resultado.value,
      "type": "application/json",
      "isDynamicContent": true
    }
      ]
  }
}

 
 
 function GetRespostas(){
   axios.post(url,body, {headers: headerss})
   .then(response => {
     const data = response.data
     console.log(data)
  
     if( data.status == "failure"){

      axios.post(url,bodyPOST, {headers: headerss})
      .then(response => {
        const data = response.data
        console.log(data)
        document.getElementById("dd").innerHTML = "Resposta cadastrada com sucesso ✅";
        console.log('deu certo')
      .catch(error =>{
        console.log('errrou!')
        error
      })})

     }else {
      
      var array = data.resource.items
      const bodyPOSTnew = {
        "id": "${{guid}}",
        "to": "postmaster@desk.msging.net",
        "method": "set",
        "uri": "/replies/b56c9e64-e3bb-4164-a2c7-Feito-Por-MarcosRodriguesViaAPI",
        "type": "application/vnd.lime.collection+json",
        "resource":{
            "itemType": "application/vnd.iris.desk.custom-reply+json",
            "items": [
                {
            "id": "b56c9e64-e3bb-4164-a2c7-Feito-Por-MarcosRodriguesViaAPI",
            "category": "Mensagens Ativas",
            "name": numeroEscolhido,
            "document": resultado.value,
            "type": "application/json",
            "isDynamicContent": true
          }
            ].concat(array)
        }
      }
      axios.post(url,bodyPOSTnew, {headers: headerss})
      .then(response => {
        const data = response.data
        console.log(data)
        document.getElementById("dd").innerHTML = "Resposta cadastrada com sucesso ✅";
        console.log('deu certo')
      .catch(error =>{
        console.log('errrou!')
        document.getElementById("dd").innerHTML = "Houve algum erro, revise as informações ❌";

        console.log(error)
      })})
     }



   })
   .catch(error =>{
    console.log(error)
    
    document.getElementById("dd").innerHTML = "Houve algum erro, revise as informações ❌";
   })
 }
 GetRespostas()
//----- REMOVENDO BOTÕES E CAMPO INPUT E COLOCANDO MENSAGEM SE DEU CERTO  ------//

let btn = document.getElementById("idbtt");
let divDD = document.getElementById("dd");
divDD.removeChild(btn);

let input = document.getElementById("inputId")
divDD.removeChild(input);



}}







