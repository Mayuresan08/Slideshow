
        let imageSrc=['https://source.unsplash.com/wgq4eit198Q/900x350','https://source.unsplash.com/WLUHO9A_xik/900x350','https://source.unsplash.com/4yta6mU66dE/900x350','https://source.unsplash.com/900x350?water','https://source.unsplash.com/900x350?nature']
        let i=0;
        let imageTurn
        turn=()=>
           { 
            console.log(i)
            if(i < imageSrc.length)
            {  
            
            document.getElementById('image').src=imageSrc[i];
            i++;
            }
            else{
                i=0;
            }
           }
         imageTurn=setInterval(turn,2000);
         function pauseTurn() {
           clearInterval(imageTurn);
         }
         function resumeTurn()
         {
            imageTurn=setInterval(turn,2000);
         }
         function previousTurn(){
            
             clearInterval(imageTurn);
             if(i > 0)
             {   
                i=i-1;
                 document.getElementById('image').src=imageSrc[i] 
             }
             else{
               i=4
                 document.getElementById('image').src=imageSrc[i]
             }
    
              imageTurn=setInterval(turn,2000);
         }
         function nextTurn(){
            console.log(i)
             clearInterval(imageTurn);
             if(i >= 4  )
             {   
                 i=0;
                 document.getElementById('image').src=imageSrc[i] 
             }
             else{
                 i=i+1;
                 document.getElementById('image').src=imageSrc[i]
             }
             console.log(i)
              imageTurn=setInterval(turn,2000);
         }

         function slide()
         {
             x=document.getElementById('image');
             x.className="fade"
         }
       