//Leitura de todo o meu documento HTML
$(document).ready(function(){ //Executou a leitura do nosso documento e o preparou para executar uma função
  
  //Monitorar todos os clicks em nosso elemento link "a" do HTML
  $('a').click(function(e){
    e.preventDefault()

    let pagina = $(this).attr('href')

    $('.modal-title').empty() 
    $('.modal-body').empty() 

    switch(pagina){
      case 'projeto-reservetec': 
        $('.modal-title').append('Reservetec') 
        $('.modal-body').append('<p>Esse é o Reservetec!</p>') 
        break
      case 'projeto-fadeline':
        $('.modal-title').append('Fadeline') 
        $('.modal-body').append('<p>Esse é o Projeto Fadeline!') 
        break
      case 'projeto-integrante-php':
        $('.modal-title').append('Integrante PHP') 
        $('.modal-body').append('<p>Aqui está um projeto de PHP!</p>') 
        break
      default: alert('Página não encontrada')
    }

    $('#modal-info').modal('show')

  })
})