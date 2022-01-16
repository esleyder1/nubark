$(document).ready(function () {
  //spinner style
  loadSpinner();

  //create a new user
  let gridCount = 0;
  let numbers = [];
  var arrayNumersGrid = [];
  let sum = 0;

  $("#userButton").click(function () {

    if (gridCount == 0) {
      gridCount = $("#userNumber").val();
      if (gridCount > 13) {
        alert("Debe ser menor o igual a 13")
        return
      }
      $("#userButton").text("Agregar el número")
      $("#userNumber").val(1);
      gridNumbersCount = gridCount * 2;

      $("#userLabel").text(
        "Ahora ingresa " +
          Math.pow(gridCount, 2) +
          " números para llenar la matriz"
      );

      for (let i = 0; i < gridCount; i++) {
        let row = `
        <div class="grid-row">
    
        </div>`;
        $(".grid-container").append(row);
      }

      if($('#randomNumbers').is(':checked')){
        numbers = randomNumbers(Math.pow(gridCount, 2));
      }else{
        $('.center').hide()
      }


    } else {
      let num = $("#userNumber").val();
      numbers.push(num);
      if (numbers.length < Math.pow(gridCount, 2)) {
        gridNumbersCount++;
        $("#userLabel").text(
          "Números restantes " +
            (Math.pow(gridCount, 2) - numbers.length) +
            " números para llenar la matriz"
        );
      } else {
        $("#userButton").addClass("hidden");
        $("#userButtonReload").removeClass("hidden");
        $(".quantity").addClass("hidden");
        $("#userLabel").text("Suma de los números de la matriz");
      }
    }

    var result = numbers.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / gridCount);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }

      resultArray[chunkIndex].push(item);


 
      return resultArray;
    }, []);

    for (let i = 0; i < result.length; i++) {
      arrayNumersGrid[i] = result[i];

    }

    switch (Math.pow(gridCount, 2)) {
      case 4:
        $(".game-container").addClass("centerContainerSmallXS");
        break;
      case 9:
        $(".game-container").addClass("centerContainerSmall");
        break;
      case 16:
        $(".game-container").addClass("centerContainerMedium");
        break;
      case 25:
        $(".game-container").addClass("centerContainerMedium");
        break;
      case 36:
        $(".game-container").addClass("centerContainerMedium");
        break;
      case 49:
        $(".game-container").addClass("centerContainerBig");
        break;
      case 64:
        $(".game-container").addClass("centerContainerBig");
        break;
      case 81:
        $(".game-container").addClass("centerContainerBig");
        break;
      case 100:
        $(".game-container").addClass("centerContainerBiggest");
        break;
      default:
        $(".game-container").addClass("centerContainerLarge");
        break;
    }

    if (Math.pow(gridCount, 2) - numbers.length == 0) {
      let row = "";
      arrayNumersGrid.forEach(function (element) {
        $(".game-container").css('padding', '10px')
        $(".grid-container .grid-row").each(function (i) {
          console.log("elemento", element);
          row = `
          <div class="grid-cell">${element[i]}</div>`;
          $(this).append(row);
          

        });
        arrayNumersGrid.forEach(function(e){sum += parseInt(e);console.log(e)})
  
        $('#result').html(sum)
      });
    }

  });
  //reload the page
  $("#userButtonReload").click(function(){
    location.reload()
  })
});

function randomNumbers(cant) {
  $("#userButton").addClass("hidden");
  $("#userButtonReload").removeClass("hidden");
  $(".quantity").addClass("hidden");
  $('.center').hide()
  $("#userLabel").text("Suma de los números de la matriz");

  return Array(cant)
    .fill()
    .map(() => Math.round(Math.random() * 40));
}

function loadSpinner() {
  $(".quantity-button")
    .off("click")
    .on("click", function () {
      if ($(this).hasClass("quantity-add")) {
        if (parseInt($(this).parent().find("input").val()) <= 12) {
          var addValue = parseInt($(this).parent().find("input").val()) + 1;
          $(this).parent().find("input").val(addValue).trigger("change");
        }
      }
      if ($(this).hasClass("quantity-remove")) {
        if (parseInt($(this).parent().find("input").val()) != 2) {
          var removeValue = parseInt($(this).parent().find("input").val()) - 1;
          if (removeValue == 0) {
            removeValue = 1;
          }
          $(this).parent().find("input").val(removeValue).trigger("change");
        }
      }
    });

  $(".quantity input")
    .off("change")
    .on("change", function () {

    });
}
