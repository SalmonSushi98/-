window.onload = function() {
  const startBtn = document.getElementsByClassName('introMenu')[0];
  const helpBtn = document.getElementsByClassName('introMenu')[1];
  const introWindow = document.getElementById('introWindow');
  const startWindow = document.getElementById('startWindow');
  const gameWindow = document.getElementById('gameWindow');
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementsByClassName('close')[0];
  const whiteModal = document.getElementById('whiteModal');

  helpBtn.addEventListener('click', function(e) {
    modal.style.zIndex = '1';
  })

  closeBtn.addEventListener('click', function(e) {
    modal.style.zIndex = '-1';
  })

  startBtn.addEventListener('click', function(e) {
    whiteModal.style.zIndex = '1';
    whiteModal.style.opacity = '1';
    whiteModal.style.transition = '1.5s';
    if (localStorage.getItem("name") !== null) {
      setTimeout(function(e) {
        whiteModal.style.zIndex = '-1';
        whiteModal.style.opacity = '0';
        introWindow.style.display = 'none';
        gameWindow.style.display = 'block';
        document.getElementById("userName").innerText = localStorage.getItem("name");
      }, 1500)
    } else {
    setTimeout(function(e) {
        whiteModal.style.zIndex = '-1';
        whiteModal.style.opacity = '0';
        introWindow.style.display = 'none';
        startWindow.style.display = 'block';
      }, 1500)
    }
  })

  const startMain = document.getElementById('startMain');
  const startDia = document.getElementById('startDialogue');
  const nextBtn = document.getElementById('next');

  nextBtn.addEventListener('click', function(e) {
  if (startDia.innerHTML == "............<br>.......") {
    startDia.innerHTML = ".......나..<br>....어..나..";
  } else if (startDia.innerHTML == ".......나..<br>....어..나..") {
    startMain.style.backgroundImage = 'url(images/cat001.png)';
    startDia.innerHTML = "일어나!!";
  } else if (startDia.innerHTML == "일어나!!") {
    startDia.style.color = 'blue';
    startDia.style.fontWeight = 'bold';
    startDia.innerHTML = "'뭐야.. 웬 고양이..?'";
  } else if (startDia.innerHTML == "'뭐야.. 웬 고양이..?'") {
    startDia.style.color = 'black';
    startDia.style.fontWeight = 'normal';
    startDia.innerHTML = "어이 네놈<br>처음 보는 얼굴인데<br>이름이 뭐냐?";
  } else if (startDia.innerHTML == "어이 네놈<br>처음 보는 얼굴인데<br>이름이 뭐냐?") {
    startDia.style.color = 'blue';
    startDia.style.fontWeight = 'bold';
    startDia.innerHTML = "'내 이름...?'";
    document.getElementById('name').style.display = 'block';
  } else if (startDia.innerHTML == "'내 이름...?'") {
    var name = document.getElementsByName('myName')[0].value;
    if (name == "") {
      alert('이름을 입력해주세요!');
    } else {
      startDia.style.color = 'black';
      startDia.style.fontWeight = 'normal';
      startDia.innerHTML = name + "..?<br>인간스러운 이름이군";
      document.getElementById('name').style.display = 'none';
      window.localStorage.setItem("name", name);
    }
  } else if (startDia.innerHTML == localStorage.getItem("name") + "..?<br>인간스러운 이름이군") {
    startDia.style.color = 'blue';
    startDia.style.fontWeight = 'bold';
    startDia.innerHTML = "'난 인간인데..'<br>'이상한 고양이...'";
  } else if (startDia.innerHTML == "'난 인간인데..'<br>'이상한 고양이...'") {
    startDia.innerHTML = "'잠깐.. 내가 어떻게<br>고양이가 하는 말을<br>알아듣는거지?'"
  } else if (startDia.innerHTML == "'잠깐.. 내가 어떻게<br>고양이가 하는 말을<br>알아듣는거지?'") {
    startDia.innerHTML = "이봐 넌 대체 뭐야?";
  } else if (startDia.innerHTML == "이봐 넌 대체 뭐야?") {
    startDia.style.color = 'black';
    startDia.style.fontWeight = 'normal';
    startDia.innerHTML = "나 말인가?<br>나는 검은 발톱이다.";
  } else if (startDia.innerHTML == "나 말인가?<br>나는 검은 발톱이다.") {
    startDia.style.color = 'blue';
    startDia.style.fontWeight = 'bold';
    startDia.innerHTML = ".......";
  } else if (startDia.innerHTML == ".......") {
    startDia.innerHTML = "아니 그...<br>검은 발톱씨?";
  } else if (startDia.innerHTML == "아니 그...<br>검은 발톱씨?") {
    startDia.innerHTML = "우리가 어떻게<br>대화할 수 있는지<br>모르겠지만";
  } else if (startDia.innerHTML == "우리가 어떻게<br>대화할 수 있는지<br>모르겠지만") {
    startDia.innerHTML = "여긴 도대체 어디야?";
  } else if (startDia.innerHTML == "여긴 도대체 어디야?") {
    startDia.style.color = 'black';
    startDia.style.fontWeight = 'normal';
    startDia.innerHTML = "이곳은 중앙광장이다.";
  } else if (startDia.innerHTML == "이곳은 중앙광장이다.") {
    startDia.style.color = 'blue';
    startDia.style.fontWeight = 'bold';
    startDia.innerHTML = "'중앙광장은 또<br>어디에 있는 곳이야..'";
  } else if (startDia.innerHTML == "'중앙광장은 또<br>어디에 있는 곳이야..'") {
    startDia.innerHTML = "'잠깐.. 설마 여기<br>고려대학교 중앙광장??'";
  } else if (startDia.innerHTML == "'잠깐.. 설마 여기<br>고려대학교 중앙광장??'") {
    startDia.style.color = 'black';
    startDia.style.fontWeight = 'normal';
    startDia.innerHTML = "이봐 조심해!<br>인간들이 다가온다.";
  } else if (startDia.innerHTML == "이봐 조심해!<br>인간들이 다가온다.") {
    startMain.style.backgroundImage = 'url(images/people001.png)';
    startDia.innerHTML = "어머, 못보던 고양이네?<br>너는 어디서 왔니?";
  } else if (startDia.innerHTML == "어머, 못보던 고양이네?<br>너는 어디서 왔니?") {
    startDia.style.color = 'blue';
    startDia.style.fontWeight = 'bold';
    startDia.innerHTML = "......?<br>아니 누구세요..?<br>사람한테 고양이라니..";
  } else if (startDia.innerHTML == "......?<br>아니 누구세요..?<br>사람한테 고양이라니..") {
    startDia.style.color = 'black';
    startDia.style.fontWeight = 'normal';
    startDia.innerHTML = "야 애 되게 귀엽다~<br>안 피하고 야옹거리네~";
  } else if (startDia.innerHTML == "야 애 되게 귀엽다~<br>안 피하고 야옹거리네~") {
    startDia.style.color = 'blue';
    startDia.style.fontWeight = 'bold';
    startDia.innerHTML = "...저기요<br>자꾸 그러니깐<br>좀 기분이...;;";
  } else if (startDia.innerHTML == "...저기요<br>자꾸 그러니깐<br>좀 기분이...;;") {
    startMain.style.backgroundImage = 'url(images/cat001.png)';
    startDia.style.color = 'black';
    startDia.style.fontWeight = 'normal';
    startDia.innerHTML = "어이 너<br>아까부터 무슨 소리냐?"; 
  } else if (startDia.innerHTML == "어이 너<br>아까부터 무슨 소리냐?") {
    startDia.innerHTML = "자기 스스로 인간이라니..<br>상태가 안좋아보이는군.";
  } else if (startDia.innerHTML == "자기 스스로 인간이라니..<br>상태가 안좋아보이는군.") {
    startDia.style.color = 'blue';
    startDia.style.fontWeight = 'bold';
    startDia.innerHTML = "무슨 소리야?<br>난 인간이라고!!";
  } else if (startDia.innerHTML == "무슨 소리야?<br>난 인간이라고!!") {
    startDia.style.color = 'black';
    startDia.style.fontWeight = 'normal';
    startDia.innerHTML = ".......<br>더위를 좀 먹었나보군.";
  } else if (startDia.innerHTML == ".......<br>더위를 좀 먹었나보군.") {
    startDia.innerHTML = "그늘 아래서 좀 쉬라구.";
  } else if (startDia.innerHTML == "그늘 아래서 좀 쉬라구.") {
    startMain.style.backgroundImage = '';
    startDia.style.color = 'blue';
    startDia.style.fontWeight = 'bold';
    startDia.innerHTML = "'...이상한 녀석이야.'";
  } else if (startDia.innerHTML == "'...이상한 녀석이야.'") {
    startDia.innerHTML = "'일단 자리를 좀<br>옮겨야 겠어.'";
  } else if (startDia.innerHTML == "'일단 자리를 좀<br>옮겨야 겠어.'") {
    startDia.innerHTML = "'어..어...? 뭐야?'";
  } else if (startDia.innerHTML == "'어..어...? 뭐야?'") {
    startMain.style.backgroundImage = 'url(images/cat002.png)';
    startDia.innerHTML = "'이게 내 모습이라고?!'";
  } else if (startDia.innerHTML == "'이게 내 모습이라고?!'") {
    startDia.innerHTML = "'내가...<br>내가 진짜<br>고양이가 됐잖아...??'";
  } else if (startDia.innerHTML = "'내가...<br>내가 진짜<br>고양이가 됐잖아...??'") {
    whiteModal.style.zIndex = '1';
    whiteModal.style.opacity = '1';
    whiteModal.style.transition = '1.5s';
    setTimeout(function(e) {
      whiteModal.style.zIndex = '-1';
      whiteModal.style.opacity = '0';
      startWindow.style.display = 'none';
      gameWindow.style.display = 'block';
      document.getElementById("userName").innerText = localStorage.getItem("name");
    }, 1500)
  }
  })

  const homeBtn = document.getElementsByClassName('gameOption')[3];
  homeBtn.addEventListener('click', function(e) {
    whiteModal.style.zIndex = '1';
    whiteModal.style.opacity = '1';
    whiteModal.style.transition = '1.5s';
    setTimeout(function(e) {
      whiteModal.style.zIndex = '-1';
      whiteModal.style.opacity = '0';
      gameWindow.style.display = 'none';
      introWindow.style.display = 'block';
    }, 1500)
  })
};