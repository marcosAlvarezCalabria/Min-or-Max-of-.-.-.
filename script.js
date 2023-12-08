function max(xx){
    let numberMax;
      for(let i= 0; i < xx.length; i++){
          let numberAtTheMoment = xx[i]
          console.log(numberAtTheMoment)
          if ( numberMax === undefined ){
              numberMax=numberAtTheMoment;
          }else if (numberMax<numberAtTheMoment){
              numberMax=numberAtTheMoment
          }
      }}
  