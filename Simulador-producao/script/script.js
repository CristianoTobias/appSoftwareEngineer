var canvas = document.getElementById('tutorial');
const pulper201 = () => {
    ctx.strokeStyle = 'red';
    ctx.strokeRect(200,50,100,100);
    ctx.fillStyle = 'blue';
    ctx.fillRect(200, 50, 100, 100);
  }
if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    // codigo de desenho aqui
    var ctx = canvas.getContext("2d");

        pulper201()
  } else {
    // codigo para quando o canvas nao for suportado aqui
    alert("not supported")
  }


  