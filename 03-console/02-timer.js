#!/usr/bin/node

function longtask(){
    var n=0;
      
    for(var i =0; i<1000;i++ ){
      for(var j = 0;j<1000;j++){
                    n = n + i*j;         
                        
      }
            
        
    }


}
console.time("test");
longtask();
console.timeEnd("test");
