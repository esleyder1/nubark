$(document).ready(function(){
    $.notify("Cree registros aleatoriamente", "info")
    $.notify("El botón crear nuevo, está habilitado!", "warning")


    //create a new user
    $('#btnNewUser').click(function(){

        //random names
        let names = ['Daniel', 'Esteban', 'Magali', 'Elena', 'Harold', 'Elias', 'Estiven', 'Flor', 'Huber'];
        let campos = ['Google', 'Servagro', 'Netlify', 'Digital', 'Microsoft', 'Company', 'Computrabajo', 'Developer', 'Sistem'];
        let types = ['CC', 'T.I', 'C.E'];
        var randomName = names[Math.floor(Math.random() * names.length)];
        var randomCampo = campos[Math.floor(Math.random() * campos.length)];
        var randomType = types[Math.floor(Math.random() * types.length)];
   

        let row = `<tr>
        <td>${randomName}</td>
        <td>${randomCampo}</td>
        <td>${randomType}</td>
        <td class="status inactive">Inactivo</td>
        <td>
          <button class="button custom-btn btn-7 back">
            <i class="fa fa-pencil"></i>
          </button>
        </td>
      </tr>`
      //set row into the table
        $('#userTable tr:last').after(row)
    })
    //this button update the last user in the table
    $('#btnUpdateUser').click(function(){
        //get the last user    
        let lastTr = $('#userTable tbody tr:last')
        let statusTd = lastTr.find('.status')
        if(statusTd.hasClass('inactive')){
          lastTr.addClass('activeTr');
            statusTd.html('Activo').removeClass('inactive').addClass('active')
            
            $.notify("Se actualizó el último registro", "success")

            setTimeout(function () {
              lastTr.addClass('inactiveTr')
          }, 1000);
        }else{
            $.notify("El último registro ya está activo", "info")
        }
        


    })
})