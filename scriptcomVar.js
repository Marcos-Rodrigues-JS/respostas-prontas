function comVariavel(){
  var footer = document.getElementById("footer");
  footer.parentNode.removeChild(footer);
    
        let pergunta = document.getElementById("txt");
        pergunta.innerHTML = "Qual o nome do seu template?<br>";
        
        //campo nome do template
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("required", "");
        input.id = "templateID";
        input.setAttribute("placeholder", "Digite aqui o nome do seu template");
        pergunta.appendChild(input);

        
    
        let descricao1 = document.createElement("label");
        descricao1.innerHTML = "Tipo de conteúdo:";        
        descricao1.style.width = "120px";
        descricao1.style.fontSize = "22px";
        descricao1.style.textAlign = "left";
        descricao1.style.marginRight = "86px";
        
        
        pergunta.appendChild(descricao1);

    
        
        // Adicione um select
        let select = document.createElement("select");
        select.id = "tipoTemplate";
        select.style.width = "200px";
        
        // Adicione as opções ao select
        let opcao1 = document.createElement("option");
        opcao1.value = "text";
        opcao1.innerHTML = "Texto";
        select.appendChild(opcao1);
        
        let opcao2 = document.createElement("option");
        opcao2.value = "image";
        opcao2.innerHTML = "Imagem";
        select.appendChild(opcao2);

        let opcao3 = document.createElement("option");
        opcao3.value = "document";
        opcao3.innerHTML = "Documento";
        select.appendChild(opcao3);

        let opcao4 = document.createElement("option");
        opcao4.value = "video";
        opcao4.innerHTML = "Vídeo";
        select.appendChild(opcao4);
        
        // Adicione outras opções, se necessário
        
        pergunta.appendChild(select);   
        
          
        // Adicione uma descrição do lado esquerdo
        let descricao2 = document.createElement("label");
        descricao2.innerHTML = "Conteúdo da variável:";    ;
        descricao2.style.width = "120px";
        descricao2.style.fontSize = "18px"
        descricao2.style.textAlign = "right";
        descricao2.style.left = "-1px";
        descricao2.style.marginRight = "85px";
        pergunta.appendChild(descricao2);
        
        // Adicione um novo campo
        let input3 = document.createElement("input");
input3.setAttribute("type", "text");
input3.id = "descricaoTemplate";
input3.setAttribute("placeholder", "Digite aqui");
input3.style.width = "200px";
input3.setAttribute("list", "sugestoes");
pergunta.appendChild(input3);

let listaSugestoes = document.createElement("datalist");
listaSugestoes.id = "sugestoes";
pergunta.appendChild(listaSugestoes);

let opcaoSugestao1 = document.createElement("option");
opcaoSugestao1.value = "{{contact.name}}";
listaSugestoes.appendChild(opcaoSugestao1);

let opcaoSugestao2 = document.createElement("option");
opcaoSugestao2.value = "{{agent.fullName}}";
listaSugestoes.appendChild(opcaoSugestao2);
//----------------

///-- saga botões----
// esse é o botão de mais var
let btn = document.createElement("button");
btn.innerHTML = "Mais variáveis ➕";
btn.classList.add("btn", "btn-mais-variaveis");
let divDD = document.getElementById("dd");
btn.onclick = criaVriavel;
divDD.appendChild(btn);

let btnPronto = document.createElement("button");
btnPronto.innerHTML = "Pronto 👍";
btnPronto.classList.add("btn", "btn-prontoComVar");
btnPronto.onclick = prontoComVar;
divDD.appendChild(btnPronto);




  //------------
  }
  
  
  let inputs = []; 
  let valores = [];
 
  
  function criaVriavel(){
    let pergunta = document.getElementById("txt");

    


    // Criar div para alinhar os elementos
    let divAlinhamento = document.createElement("div");
    divAlinhamento.style.display = "flex";
    divAlinhamento.style.paddingBottom = "-30px";
    divAlinhamento.style.paddingTop = "30px";
    divAlinhamento.style.marginTop = "-40px";
    divAlinhamento.style.marginBottom = "-25px";
    divAlinhamento.style.flexDirection = "row";
    pergunta.appendChild(divAlinhamento);

    // Criar descrição
    let descricao = document.createElement("p");
    descricao.innerHTML = "Conteúdo da variável:";
    descricao.style.width = "400px";
    descricao.style.fontSize = "18px";
    descricao.style.textAlign = "left";

    descricao.style.marginRight = "50px";
    divAlinhamento.appendChild(descricao);

    // Criar campo de entrada
    let input = document.createElement("input");
    input.type = "text";
    
    input.placeholder = "Digite aqui";
    input.style.width = "200px";
    input.style.marginLeft = "10px";
    input.setAttribute("list", "sugestoes");
    divAlinhamento.appendChild(input);

    let listaSugestoes = document.createElement("datalist");
    listaSugestoes.id = "sugestoes";
    pergunta.appendChild(listaSugestoes);
    
    let opcaoSugestao1 = document.createElement("option");
    opcaoSugestao1.value = "{{contact.name}}";
    listaSugestoes.appendChild(opcaoSugestao1);
    
    let opcaoSugestao2 = document.createElement("option");
    opcaoSugestao2.value = "{{agent.fullName}}";
    listaSugestoes.appendChild(opcaoSugestao2);


   

      // Criar botão de remoção
    let botaoRemocao = document.createElement("button");
    botaoRemocao.innerHTML = "Remover";
    botaoRemocao.style.marginTop = "10px";
    
botaoRemocao.innerHTML = "x";
botaoRemocao.style.width = "30px";
botaoRemocao.style.height = "20px";
botaoRemocao.style.backgroundColor = "red";
botaoRemocao.style.color = "white";
botaoRemocao.style.borderRadius = "15px";
botaoRemocao.style.alignSelf = "flex-end";
botaoRemocao.style.position = "relative";
botaoRemocao.style.top = "-35px";
botaoRemocao.style.right = "-250px";
divAlinhamento.appendChild(botaoRemocao);
    botaoRemocao.onclick = function() {
        pergunta.removeChild(listaSugestoes);
        divAlinhamento.removeChild(descricao);
        divAlinhamento.removeChild(input);
        pergunta.removeChild(botaoRemocao);
    };
    pergunta.appendChild(botaoRemocao);
     
    inputs.push(input);
    valores = obterValores();
  }
  function obterValores() {
    let valores = [];
    let inputTemplate = document.getElementById("descricaoTemplate");
    let valorDoTemplate = inputTemplate.value;
    valores.push(valorDoTemplate);   
    inputs.forEach(input => {
      valores.push(input.value);  
      
    });
    return valores;
  }
  
  


  function construirJSON() {
   
    let select = document.getElementById("tipoTemplate");
    let selectedOption = select.value;

    let valores = obterValores();
    let json = [];
    valores.forEach((valor, index) => {
      let objeto = {
        "text": valor,
        "type": index == 0 ? selectedOption : "text"      
      };
      json.push(objeto);
    });
    return json;
  }
  
  function prontoComVar() {    
   

    let btn = document.querySelector(".btn-mais-variaveis");
    let btnPronto = document.querySelector(".btn-prontoComVar"); 
    
    
    

//----------- VALIDAÇÃO DO INPUT--------------//
    let valorDoTemplate = document.getElementById("templateID").value;
    const hasUpper = /[A-Z]/.test(valorDoTemplate);
    if (valorDoTemplate == "") {
      window.alert("[ERRO] - POR FAVOR PREENCHER O CAMPO TEMPLATE ❌");
    }else if (hasUpper == true) {
        alert('[ERRO] - NÃO COLOQUE LETRAS MAIÚSCULAS NO NOME DO TEMPLATE ❌')
      }else if (valorDoTemplate.includes(" ")) {
        alert('[ERRO] - NÃO COLOQUE ESPAÇO NO NOME DO TEMPLATE ❌')
      } else {
      if (btn) {
        btn.remove();
      }
      
      if (btnPronto) {
        btnPronto.remove();
      }
      let json = construirJSON();
      var resultado = json; 
      var completo = {

        "type": "template",
        
        "template": {
        
        "language": {
        
        "policy": "deterministic",
        
        "code": "pt_BR"
        
        },
        
        "name": valorDoTemplate,
        
        "components": [
        
        {
        
        "type": "body",
        
        "parameters": resultado
        
        }
        
        ]
        
        }
        
        }
      var res = document.querySelector("div#txt")  

      var resp = document.getElementById("txt");
        resp.innerHTML = "Segue resultado 🤓<p> basta copiar e <b>colar no seu conteúdo dinâmico</b>"
    
      let inputResultado = document.createElement("textarea");
      inputResultado.id = "resultado"; 
      inputResultado.value = JSON.stringify(completo, null, 2)
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
//------------------------------COLOCANDO BOTÃO INTEGRAÇÃO-------------//
  let btnn = document.createElement("button");
  btnn.innerHTML = "Integrar ao meu blip 🔥";
  btnn.id = "idbtt"
  btnn.classList.add("btn", "btn-integrarBotão");
  let divDD = document.getElementById("dd");
  btnn.onclick = integrarBotao;
  divDD.appendChild(btnn);

  function integrarBotao(){
  
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
  
  //------------------------------INTEGRAÇÃO-------------//
  function integrar(){
  alert(JSON.stringify(completo, null, 2))
  
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
        "name": valorDoTemplate,
        "document": JSON.stringify(completo, null, 2),
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
              "name": valorDoTemplate,
              "document": JSON.stringify(completo, null, 2),
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
  
  
  
  }
  //--------------------- FIM INTEGRAÇÃO--------------//
 
}
function copiarResultado() {
    var resultado = document.getElementById("resultado");
    let btnCopiar = document.getElementById("btnCopiar");
    resultado.select();
    btnCopiar.innerHTML = "Copiado ✅";
    btnCopiar.classList.add("btn-copiado");
    document.execCommand("copy");
}

function refazer() {
  window.location.href = 'index.html';

}}