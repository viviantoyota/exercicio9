const reprograma = require("../model/reprogramaModel.json")

const criarPost = (require, response) =>{
    const postId = reprogramaModel.map(reprograma => reprograma.id);
   
    const novoId = reprogramaId.length > 0 ? Math.max.apply(Math, novoId) + 1 : 1;

    const { titulo, conteudo, dataCriacao, etiqueta } = requisicao.body
}

const novoPost ={
    
    id: obterNovoValor(reprogramaModel),
    dataCriacao: novaData(reprogramaModel),
    titulo: titulo,
    conteudo: descricao,
    etiqueta: prazo
     
}
{
    reprogramaModel.push(novoPost);

    resposta.status(201).json(criarPost);
}

const deletarPost = (requisicao, resposta) =>{
    const { id } = requisicao.params;
  
    let postFiltrados = reprogramaModel.filter(reprograma => {
      return tarefa.id == id;
    })[0];
  
    const index = reprogramaModel.indexOf(postFiltrados);
    
    reprogramaModel.splice(index, 1)
  
    resposta.json(reprogramaModel)
   }
  
  module.exports ={
    criarPost,
    novoPost,
    deletarPost
}
  