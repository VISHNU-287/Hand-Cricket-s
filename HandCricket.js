<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HandCricket</title>
  <link rel="stylesheet" href="HandCricket.css">
  <link rel="icon" type="image/x-icon" href="HandcricketImages/cricket.jpg">
</head>

<body>

<marquee class="nes">HandCricket  (Limit upto 6)</marquee>
  <div class="first-container">
  <div>
    <button class="chead1" onclick="CoinToss()" title="Coin Toss"><img src="HandCricketImages/CoinToss.jpeg" class="restart"></button>
    <div class="tossing">CoinToss</div>
  </div>
  <div>
    <button class="chead1" onclick="Reset()" title="Score Reset"><img src="HandCricketImages/Restart.png" class="restart"></button>
    <div class="restarting">Restart</div> 
   </div>
</div>


<div class="main-2">
  <!-- batting--> 
  <div class="batting-1">
    <div class="batting">
 <div>
  <button onclick="UserPicking('Zero')" class="cbat" title="dock"><img src="HandCricketImages/bat0.jpeg" class="dot"></button>
  <div class="description_bat">Bat Miss</div>
 </div>
     
 <div>
  <button onclick="UserPicking('One')" class="cbat" title="one run"><img src="HandCricketImages/bat1.jpg" class="dot"></button>
  <div class="description_bat">One Run</div>
 </div>
     
   <div>
    <button onclick="UserPicking('Two')" class="cbat" title="two run"><img src="HandCricketImages/bat2.jpg" class="dot"></button>
    <div class="description_bat">Two Run</div>
   </div>
     
   <div>
    <button onclick="UserPicking('Three')" class="cbat" title="three run"><img src="HandCricketImages/bat3.jpg" class="dot"></button>
    <div class="description_bat">Three Run</div>
   </div>
    
   <div>
    <button onclick="UserPicking('Four')" class="cbat" title="four run"><img src="HandCricketImages/bat4.jpg" class="dot"></button>
    <div class="description_bat">Four Run</div>
   </div>
     
   <div>
    <button onclick="UserPicking('Five')" class="cbat" title="five run"><img src="HandCricketImages/bat5.jpg" class="dot"></button>
    <div class="description_bat">Five Run</div>
   </div>
     
   <div>
    <button onclick="UserPicking('Six')" class="cbat" title="six run"><img src="HandCricketImages/bat6.jpg" class="dot"></button>
    <div class="description_bat">Six Run</div>
   </div>
     
 
     
    </div>
    <div class="batsword">Batting Line</div>
    </div>
   
   <!--Bowling-->
  <div class="bowling-1 b-1">
    <div class="bowling">
  <div>
    <button onclick="SystemPicking('Zero')" class="cbat" title="dock"><img src="HandCricketImages/ball0.jpeg" class="dot"></button>
    <div class="description_ball">Ball Miss</div>
  </div>
      
      
      <div>
        <button onclick="SystemPicking('One')" class="cbat" title="one ball"><img src="HandCricketImages/ball1.jpg" class="dot"></button>
        <div class="description_ball">One Ball</div>
      </div>
      
      
      <div>
        <button onclick="SystemPicking('Two')" class="cbat" title="two ball"><img src="HandCricketImages/ball2.jpg" class="dot"></button>
        <div class="description_ball">Two Ball</div>
      </div>
     
      
      <div>
        <button onclick="SystemPicking('Three')" class="cbat" title="three ball"><img src="HandCricketImages/ball3.jpg" class="dot"></button>
        <div class="description_ball">Three Ball</div>
      </div>
      
      
      <div>
        <button onclick="SystemPicking('Four')" class="cbat" title="four ball"><img src="HandCricketImages/ball4.jpg" class="dot"></button>
        <div class="description_ball">Four Ball</div>
      </div>
      
      
      <div>
        <button onclick="SystemPicking('Five')" class="cbat"  title="five ball"><img src="HandCricketImages/ball5.jpg" class="dot"></button>
        <div class="description_ball">Five Ball</div>
      </div>
     
      
      <div>
        <button onclick="SystemPicking('Six')" class="cbat" title="six ball" ><img src="HandCricketImages/ball6.jpg" class="dot"></button>
        <div class="description_ball">Six Ball</div>
      </div>
      
    </div>
    <div class="bowlingword">Bowling Line</div>
    </div>


</div>

  
<div class="sub-head">
  <p id="id-100" class="c-100">Toss To Play!!</p>
  <p id="id-45" class="c-11"></p>

  <p id="id-13" class="c-4"></p>
  <p id="id-03" class="c-9"></p>
  
</div>
  
<div class="main-container">
  
  <div class="container-2">
    <p class="c-1">User Score Detail</p>
  <p id="id-10" class="c-2"></p>
  <p id="id-11" class="c-2"></p>
  <p id="id-12" class="c-3"></p>
  <p id="id-14" class="c-5"></p>
  
  </div>
  <div class="container-1">
    <p class="c-6">System Score Detail</p>
    <p id="id-01" class="c-7"></p>
    <p id="id-02" class="c-7"></p>
    <p id="id-05" class=c-8></p>
    <p id="id-04" class="c-10"></p>
   
    </div>
</div>
</body>

<script src="HandCricket.js"></script>
</html>
