//CoinToss Code 

function CoinToss(){
  let toss = Math.random();
  if(toss > 0 && toss <= 1/5){
    document.getElementById('id-100').innerHTML = `User Bowl First`;
  }
  else if(toss > 1/5 && toss <= 1){ 
    document.getElementById('id-100').innerHTML = `User Bat First`;
  }
}







  //Creating the Storage Center

   let storage = JSON.parse(localStorage.getItem('record'));
   if(storage === null){
    storage = {
      myscore:0,myzero:0,myone:0,mytwo:0,mythree:0,myfour:0,myfive:0,mysix:0,opponentscore:0,opponentzero:0,opponentone:0,opponenttwo:0,opponentthree:0,opponentfour:0,opponentfive:0,opponentsix:0,opponentcount:0,count:0,myout:0,opponentout:0
    }
   }


   function Reset(){
    storage = {
      myscore:0,myzero:0,myone:0,mytwo:0,mythree:0,myfour:0,myfive:0,mysix:0,opponentscore:0,opponentzero:0,opponentone:0,opponenttwo:0,opponentthree:0,opponentfour:0,opponentfive:0,opponentsix:0,myout:0,opponentout:0};
    localStorage.removeItem('record');
          SystemLiveScore();
          SystemLiveStokes();
          Decision();
          UserLiveRun();
          UserLiveStokes();
          document.getElementById('id-100').innerHTML = `Press Toss`;
          document.getElementById('id-13').innerHTML = ``;
          document.getElementById('id-03').innerHTML = ``;
        }




  function SystemPicking(variable){
        let result = '';
        const Systems = SystemPick();

        if(variable === 'Zero'){

            if(Systems !== 'Zero'){
                  result = Systems;
              }
            else if(Systems === 'Zero'){
             document.getElementById('id-03').innerHTML = `Opponent Out`;
             storage.opponentout = 1;
             
          
       
             
             
            }
                }
        else if(variable === 'One'){

            if(Systems !== 'One' && Systems !== 'Zero'){
              result = Systems;
            }
            else if(Systems ==='Zero'){
              result = variable;

            }
            else if(Systems === 'One'){
              document.getElementById('id-03').innerHTML = `Opponent Out`;
              storage.opponentout = 1;
            
          
              
            }

        }

        else if(variable === 'Two'){

          if(Systems !== 'Two' && Systems !== 'Zero'){
            result = Systems;
          }
          else if(Systems ==='Zero'){
            result = variable;

          }
          else if(Systems === 'Two'){
            document.getElementById('id-03').innerHTML = `Opponent Out`;
            storage.opponentout = 1;
     

          }
        }
        else if(variable === 'Three'){

          if(Systems !== 'Three' && Systems !== 'Zero' ){
            result = Systems;
          }
          else if(Systems ==='Zero'){
            result = variable;

          }
          else if(Systems === 'Three'){
            document.getElementById('id-03').innerHTML = `Opponent Out`;
            storage.opponentout = 1;
          
       
            
          }
        }
        else if(variable === 'Four'){

          if(Systems !== 'Four' && Systems !== 'Zero'){
            result = Systems;
          }
          else if(Systems ==='Zero'){
            result = variable;

          }
          else if(Systems === 'Four'){
            document.getElementById('id-03').innerHTML = `Opponent Out`;
            storage.opponentout = 1;
           
       
           
          }
        }

        else if(variable === 'Five'){

          if(Systems !== 'Five' && Systems !== 'Zero'){
            result = Systems;
          }
          else if(Systems ==='Zero'){
            result = variable;

          }
          else if(Systems === 'Five'){
            document.getElementById('id-03').innerHTML = `Opponent Out`;
            storage.opponentout = 1;
        
          }
        }
        else if(variable === 'Six'){

            if(Systems !== 'Six' && Systems !== 'Zero'){
                result = Systems;
            }
            else if(Systems ==='Zero'){
              result = variable;

            }
            else if(Systems === 'Six'){
              document.getElementById('id-03').innerHTML = `Opponent Out`;
              storage.opponentout = 1;
            
             
            }
            
        }
        if(result === 'One'){
          storage.opponentscore  += 1; 
          storage.opponentone  += 1;
       }
       else if(result === 'Two'){
         storage.opponentscore += 2;
         storage.opponenttwo  += 1;
       }
       else if(result === 'Three'){
         storage.opponentscore += 3;
         storage.opponentthree  += 1;
       }
       else if(result === 'Four'){
         storage.opponentscore += 4;
         storage.opponentfour  += 1;
       }
       else if(result === 'Five'){
         storage.opponentscore += 5;
         storage.opponentfive  += 1;
       }
       else if(result === 'Six'){
         storage.opponentscore += 6;
         storage.opponentsix  += 1;
       }


       localStorage.setItem('record',JSON.stringify(storage));
       document.getElementById('id-01').innerHTML = `User ${variable} ${Systems} Opponent`;

       SystemLiveScore();
       SystemLiveStokes();
       Decision();
    
    }

       

   function SystemLiveScore(){
    document.getElementById('id-02').innerHTML = `Total Run ${storage.opponentscore}`;
  }
  
  function SystemLiveStokes(){
    document.getElementById('id-05').innerHTML = `Dot's:${storage.opponentzero} One's:${storage.opponentone}
    Two's:${storage.opponenttwo} \n Three's:${storage.opponentthree} Four's:${storage.opponentfour} Five's:${storage.opponentfive} Six's: ${storage.opponentsix} `; 
  }
  

// end of opponent choice 


  function UserPicking(variables){


   const Systems = SystemPick();

        let results = '';

        if(variables === 'Zero'){

          if(Systems !== 'Zero'){
            results = Systems;
          }
          else if(Systems === 'Zero'){
          document.getElementById('id-13').innerHTML = `User \u{1F622} Out`;
          storage.myout = 1;
        
          }
        }

        else if(variables === 'One'){
          
          if(Systems !== 'One' ){
            results = variables;
          }
          else if(Systems === 'One'){
          document.getElementById('id-13').innerHTML = `User \u{1F622} Out`;
          storage.myout = 1;
          }
        }

        else if(variables === 'Two'){
          
          if(Systems !== 'Two' ){
             results = variables;
          }
          else if(Systems === 'Two'){
          document.getElementById('id-13').innerHTML = `User \u{1F622} Out`;
          storage.myout = 1;
        
          }
        }
        else if(variables === 'Three'){
          
          if(Systems !== 'Three' ){
             results = variables;
          }
          else if(Systems === 'Three'){
          document.getElementById('id-13').innerHTML = `User \u{1F622} Out`;
          storage.myout = 1;
         
          }
        }
        else if(variables === 'Four'){
          
          if(Systems !== 'Four' ){
             results = variables;
          }
          else if(Systems === 'Four'){
          document.getElementById('id-13').innerHTML = `User \u{1F622} Out`;
          storage.myout = 1;
        
          }

        }

        else if(variables === 'Five'){
          
          if(Systems !== 'Five' ){
             results = variables;
          }
          else if(Systems === 'Five'){
          document.getElementById('id-13').innerHTML = `User \u{1F622} Out`;
          storage.myout = 1;
         
          }

        }
        else if(variables === 'Six'){
          
          if(Systems !== 'Six' ){
              results = variables;
          }
          else if(Systems === 'Six'){
          document.getElementById('id-13').innerHTML = `User \u{1F622} Out`;
          storage.myout = 1;
         
          }
        }

        if(results === 'One'){
          storage.myscore  += 1;
          storage.myone  += 1;
       }
       else if(results === 'Two'){
         storage.myscore += 2;
         storage.mytwo += 1;
       }
       else if(results === 'Three'){
         storage.myscore += 3;
         storage.mythree  += 1;
       }
       else if(results === 'Four'){
         storage.myscore += 4;
         storage.myfour  += 1;
       }
       else if(results === 'Five'){
         storage.myscore += 5;
         storage.myfive  += 1;
       }
       else if(results === 'Six'){
         storage.myscore += 6;
         storage.mysix  += 1;
       }
       localStorage.setItem('record',JSON.stringify(storage));
       
       document.getElementById('id-10').innerHTML = `User ${variables} ${Systems} System`;

       UserLiveRun();
       UserLiveStokes();
       Decision();
       
}

function UserLiveRun(){
  document.getElementById('id-11').innerHTML = `Total Run ${storage.myscore} `;
}

function UserLiveStokes(){
  document.getElementById('id-12').innerHTML = `Dot's:${storage.myzero} One's:${storage.myone}
   Two's:${storage.mytwo} Three's:${storage.mythree} Four's:${storage.myfour} Five's:${storage.myfive} Six's: ${storage.mysix}`;
}

 


 




  





  

  



function SystemPick(){
  let picking = '';

  const action = Math.random();

  if(action > 0 && action <= 1/7)
  {
    picking = 'Zero';
  }
  else if(action > 1/7 && action <= 2/7)
  {
    picking = 'One';
  }
  else if(action > 2/7 && action <= 3/7)
  {
    picking = 'Two';
  }
  else if(action > 3/7 && action <= 4/7)
  {
    picking = 'Three';

  }
  else if(action > 4/7 && action <= 5/7)
  {
    picking = 'Four';
  }
  else if(action > 5/7 && action <= 6/7)
  {
    picking = 'Five';
  }
  else if(action > 6/7 && action <= 1)
  {
    picking = 'Six';
  }

  return picking;
  
  
}

function Decision(){
  let diff = 0;
  let Systemout = storage.opponentout;
  let Userout = storage.myout;
  let System = storage.opponentscore;
  let User = storage.myscore;

  if(System !== 0 && User !==0){
    if(System !== 0 && User !==0 && Systemout === 1 && Userout === 1){
          if(System > User){
            diff = System - User;
            storage.count = diff;
          document.getElementById('id-45').innerHTML = ` Result: Opponent Won By ${storage.count} Run`;
          
          }
          else if(System < User){
          diff = User - System;
          storage.count = diff;
          document.getElementById('id-45').innerHTML = `Result: User Won \u{1F44d} By ${storage.count} Run`;
          
          }
          else if(System === User){
          document.getElementById('id-45').innerHTML = ` Result: Match Tie \u{1F648}`;
          
          }
    }
    else if(System !== 0 && User !==0 && Systemout === 1 && Userout === 0){
      if(System < User){
        diff = User - System;
        storage.count = diff;
        document.getElementById('id-45').innerHTML = `Result: User Won \u{1F44d} By ${storage.count} Run`;
        
        }
        else {
          document.getElementById('id-45').innerHTML =`User  Playing`;
        }
    }
    else if(System !== 0 && User !==0 && Systemout === 0 && Userout === 1){
      if(System > User){
        diff = System - User;
        storage.count = diff;
      document.getElementById('id-45').innerHTML = ` Result: Opponent Won By ${storage.count} Run`;
      
      }
      else{
        document.getElementById('id-45').innerHTML = `Opponent Playing`;
      }
    }

  }

else if(System ===0 && User !==0 && Systemout === 1){
  diff = User - System;
  storage.count = diff;
  document.getElementById('id-45').innerHTML = `Result: User Won \u{1F44d} By ${storage.count} Run`;
}

else if(System !== 0 && User === 0 && Userout === 1){
  diff = System - User;
  storage.count = diff;
  document.getElementById('id-45').innerHTML = ` Result: Opponent Won By ${storage.count} Run`;
}

else if(System === 0 && User ===0 && Systemout === 1 && Userout === 1){
  document.getElementById('id-45').innerHTML = ` Result: Match Tie \u{1F648}`;

}





  else if(System === 0 && User ===0){
    document.getElementById('id-45').innerHTML = `Start Play \u{1F600}`;

  }
  else if(System ===0 && User !==0){
    document.getElementById('id-45').innerHTML = ` Result: Generating \u{1F914}....`;
  }
  else if(System !== 0 && User === 0){
    document.getElementById('id-45').innerHTML = ` Result: Generating \u{1F914}....`;
  }
  


}












// System Stable Visible Purpose Function Call
SystemLiveScore();
SystemLiveStokes();

//User Stable Visible  Purpose Function Call

UserLiveRun();
UserLiveStokes();
Decision();
CoinToss();
