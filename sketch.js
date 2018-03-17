
const corredor1=[]
const corredor2=[]

let i=0

let ruta1=1
let ruta2=1
let pos_x1= 310
let pos_y1= 460    //POSICION INICIAL DEL PRIMER AUTO

let pos_x2= 310 
let pos_y2= 480  // POSICION INICIAL DEL SEGUNDO AUTO


let cont = 0 // contador para validar la vista que tomara el auto
let cont2 = 0

var velocidad1 = Math.round(Math.random()*10+5);
var velocidad2 = Math.round(Math.random()*10+5);

let vueltasCorredor1=0
let vueltasCorredor2=0
let pasoCorredor1 = new Boolean(false);
let pasoCorredor2 = new Boolean(false)
let ganador1 = new Boolean(false);
let ganador2 = new Boolean(false);



function preload(){
		pista = loadImage(`img/fondo.png`)
		
		for (let i = 0 ; i< 8; i++) {
			corredor1[i] = loadImage(`img/auto1/pos${i + 1}.png`)	
			corredor2[i] = loadImage(`img/auto2/pos${i + 1}.png`)	
		}

}

function setup()
{
	createCanvas(windowWidth, windowHeight);
	frameRate(30)

}

function draw()
{

	background('#64DD17')



	image(pista,0,0,width,height) // FONDO DE (LA PISTA)

		if(ruta1==1){      /// RECORRIDO VALIDADO DEL AUTO 1

			if(pasoCorredor1==true && pos_x1===310){  //// VALIDACION PARA QUIEN PASA POR LA META Y AUMENTAR EL CONTADOR DE LAS VUELTAS
					vueltasCorredor1++
					if(vueltasCorredor1===3){
						ganador1=true
						 noLoop();
					}
	 		}

			image(corredor1[cont],pos_x1+=velocidad1,pos_y1)
	 		if (pos_x1>=1160){
				ruta1 = 2
				cont++;
	 		}		
		}

	 	if (ruta1==2){
			image(corredor1[cont],pos_x1+=velocidad1,pos_y1-=velocidad1)
	 		if (pos_y1<=400){
				ruta1 = 3
				cont++;
	 		}	
	 	}
	 	if (ruta1==3){
			image(corredor1[cont],pos_x1,pos_y1-=velocidad1)
	 		if (pos_y1<=165){
				ruta1 = 4
				cont++;
	 		}	
	 	}
	 	if (ruta1==4){
			image(corredor1[cont],pos_x1-=velocidad1,pos_y1-=velocidad1)
	 		if (pos_x1<=1160){
				ruta1 = 5
				cont++;
	 		}	
	 	}
	 	if (ruta1==5){
			image(corredor1[cont],pos_x1-=velocidad1,pos_y1)
	 		if (pos_x1<=110){
				ruta1 = 6
				cont++;
	 		}	
	 	}
	 	if (ruta1==6){
			image(corredor1[cont],pos_x1-=velocidad1,pos_y1+=velocidad1)
	 		if (pos_y1>=100){
				ruta1 = 7
				cont++;
	 		}	
	 	}
	 	if (ruta1==7){
			image(corredor1[cont],pos_x1,pos_y1+=velocidad1)
	 		if (pos_y1>=450){
				ruta1 = 8
				cont++;
	 		}	
	 	}
	 	if (ruta1==8){
			image(corredor1[cont],pos_x1+=velocidad1,pos_y1)

	 		if (pos_x1>=135){
				ruta1 = 1
				cont=0;
				pasoCorredor1=true
	 		}
	 	}



	 	if(ruta2==1){      /// RECORRIDO VALIDADO DEL AUTO 2
	 		if(pasoCorredor2==true && pos_x2===310){  //// VALIDACION PARA QUIEN PASA POR LA META Y AUMENTAR EL CONTADOR DE LAS VUELTAS
					vueltasCorredor2++
					if(vueltasCorredor2===3){
						ganador2=true
						 noLoop();
					}
	 		}
			image(corredor2[cont2],pos_x2+=velocidad2,pos_y2)
	 		if (pos_x2>=1180){
				ruta2 = 2
				cont2++;
	 		}		
		}
	 	if (ruta2==2){
			image(corredor2[cont2],pos_x2+=velocidad2,pos_y2-=velocidad2)
	 		if (pos_y2<=420){
				ruta2 = 3
				cont2++;
	 		}	
	 	}
	 	if (ruta2==3){
			image(corredor2[cont2],pos_x2,pos_y2-=velocidad2)
	 		if (pos_y2<=140){
				ruta2 = 4
				cont2++;
	 		}	
	 	}
	 	if (ruta2==4){
			image(corredor2[cont2],pos_x2-=velocidad2,pos_y2-=velocidad2)
	 		if (pos_x2<=1200){
				ruta2 = 5
				cont2++;
	 		}	
	 	}
	 	if (ruta2==5){
			image(corredor2[cont2],pos_x2-=velocidad2,pos_y2)
	 		if (pos_x2<=130){
				ruta2 = 6
				cont2++;
	 		}	
	 	}
	 	if (ruta2==6){
			image(corredor2[cont2],pos_x2-=velocidad2,pos_y2+=velocidad2)
	 		if (pos_y2>=120){
				ruta2 = 7
				cont2++;
	 		}	
	 	}
	 	if (ruta2==7){
			image(corredor2[cont2],pos_x2,pos_y2+=velocidad2)
	 		if (pos_y2>=465){
				ruta2 = 8
				cont2++;
	 		}	
	 	}
	 	if (ruta2==8){
			image(corredor2[cont2],pos_x2+=velocidad2,pos_y2)

	 		if (pos_x2>=145){
				ruta2 = 1
				cont2=0;
				pasoCorredor2=true
	 		}	
	 	}



 	fill('#fff')
    textSize(30)
	text('Carro Cafe :', width * 0.25,50);
	text(vueltasCorredor1, width * 0.39,50);



	fill('#fff')
    textSize(30)
	text('Carro Morado :', width * 0.56,50);
	text(vueltasCorredor2, width * 0.73,50);

	if(ganador1===true){   /// VALIDACION DE LANZAR EL MENSAJE DE QUIEN GANA

	 	fill('#fff')
	    textSize(40)
		text('CORREDOR CAFE GANO', (width/2)-50,height/2);

	}else{
		if (ganador2===true) {
			fill('#fff')
	    	textSize(40)
			text('CORREDOR MORADO GANO', (width/2)-50,height/2);
		}
	}


}