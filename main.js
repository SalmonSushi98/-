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

  function screenChange(modal, element1, element2) {
    modal.style.zIndex = '1';
    modal.style.opacity = '1';
    modal.style.transition = '1.5s';
    setTimeout(function(e) {
      modal.style.zIndex = '-1';
      modal.style.opacity = '0';
      element1.style.display = 'none';
      element2.style.display = 'block';
    }, 1500)
  }

  startBtn.addEventListener('click', function(e) {
    if (localStorage.getItem("name") !== null) {
      screenChange(whiteModal, introWindow, gameWindow);
      document.getElementById("userName").innerText = localStorage.getItem("name");
    } else {
      screenChange(whiteModal, introWindow, startWindow);
    }
  })

  function myDia (element) {
    element.style.color = 'blue';
    element.style.fontWeight = 'bold';
  }

  function dia (element) {
    element.style.color = 'black';
    element.style.fontWeight = 'normal';
  }

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
    myDia(startDia);
    startDia.innerHTML = "'뭐야.. 웬 고양이..?'";
  } else if (startDia.innerHTML == "'뭐야.. 웬 고양이..?'") {
    dia(startDia);
    startDia.innerHTML = "어이 네놈<br>처음 보는 얼굴인데<br>이름이 뭐냐?";
  } else if (startDia.innerHTML == "어이 네놈<br>처음 보는 얼굴인데<br>이름이 뭐냐?") {
    myDia(startDia);
    startDia.innerHTML = "'내 이름...?'";
    document.getElementById('name').style.display = 'block';
  } else if (startDia.innerHTML == "'내 이름...?'") {
    var name = document.getElementsByName('myName')[0].value;
    if (name == "") {
      alert('이름을 입력해주세요!');
    } else {
      dia(startDia);
      startDia.innerHTML = name + "..?<br>인간스러운 이름이군";
      document.getElementById('name').style.display = 'none';
      window.localStorage.setItem("name", name);
    }
  } else if (startDia.innerHTML == localStorage.getItem("name") + "..?<br>인간스러운 이름이군") {
    myDia(startDia);
    startDia.innerHTML = "'난 인간인데..'<br>'이상한 고양이...'";
  } else if (startDia.innerHTML == "'난 인간인데..'<br>'이상한 고양이...'") {
    startDia.innerHTML = "'잠깐.. 내가 어떻게<br>고양이가 하는 말을<br>알아듣는거지?'"
  } else if (startDia.innerHTML == "'잠깐.. 내가 어떻게<br>고양이가 하는 말을<br>알아듣는거지?'") {
    startDia.innerHTML = "이봐 넌 대체 뭐야?";
  } else if (startDia.innerHTML == "이봐 넌 대체 뭐야?") {
    dia(startDia);
    startDia.innerHTML = "나 말인가?<br>나는 검은 발톱이다.";
  } else if (startDia.innerHTML == "나 말인가?<br>나는 검은 발톱이다.") {
    myDia(startDia);
    startDia.innerHTML = ".......";
  } else if (startDia.innerHTML == ".......") {
    startDia.innerHTML = "아니 그...<br>검은 발톱씨?";
  } else if (startDia.innerHTML == "아니 그...<br>검은 발톱씨?") {
    startDia.innerHTML = "우리가 어떻게<br>대화할 수 있는지<br>모르겠지만";
  } else if (startDia.innerHTML == "우리가 어떻게<br>대화할 수 있는지<br>모르겠지만") {
    startDia.innerHTML = "여긴 도대체 어디야?";
  } else if (startDia.innerHTML == "여긴 도대체 어디야?") {
    dia(startDia);
    startDia.innerHTML = "이곳은 중앙광장이다.";
  } else if (startDia.innerHTML == "이곳은 중앙광장이다.") {
    myDia(startDia);
    startDia.innerHTML = "'중앙광장은 또<br>어디에 있는 곳이야..'";
  } else if (startDia.innerHTML == "'중앙광장은 또<br>어디에 있는 곳이야..'") {
    startDia.innerHTML = "'잠깐.. 설마 여기<br>고려대학교 중앙광장??'";
  } else if (startDia.innerHTML == "'잠깐.. 설마 여기<br>고려대학교 중앙광장??'") {
    dia(startDia);
    startDia.innerHTML = "이봐 조심해!<br>인간들이 다가온다.";
  } else if (startDia.innerHTML == "이봐 조심해!<br>인간들이 다가온다.") {
    startMain.style.backgroundImage = 'url(images/people001.png)';
    startDia.innerHTML = "어머, 못보던 고양이네?<br>너는 어디서 왔니?";
  } else if (startDia.innerHTML == "어머, 못보던 고양이네?<br>너는 어디서 왔니?") {
    myDia(startDia);
    startDia.innerHTML = "......?<br>아니 누구세요..?<br>사람한테 고양이라니..";
  } else if (startDia.innerHTML == "......?<br>아니 누구세요..?<br>사람한테 고양이라니..") {
    dia(startDia);
    startDia.innerHTML = "야 애 되게 귀엽다~<br>안 피하고 야옹거리네~";
  } else if (startDia.innerHTML == "야 애 되게 귀엽다~<br>안 피하고 야옹거리네~") {
    myDia(startDia);
    startDia.innerHTML = "...저기요<br>자꾸 그러니깐<br>좀 기분이...;;";
  } else if (startDia.innerHTML == "...저기요<br>자꾸 그러니깐<br>좀 기분이...;;") {
    startMain.style.backgroundImage = 'url(images/cat001.png)';
    dia(startDia);
    startDia.innerHTML = "어이 너<br>아까부터 무슨 소리냐?"; 
  } else if (startDia.innerHTML == "어이 너<br>아까부터 무슨 소리냐?") {
    startDia.innerHTML = "자기 스스로 인간이라니..<br>상태가 안좋아보이는군.";
  } else if (startDia.innerHTML == "자기 스스로 인간이라니..<br>상태가 안좋아보이는군.") {
    myDia(startDia);
    startDia.innerHTML = "무슨 소리야?<br>난 인간이라고!!";
  } else if (startDia.innerHTML == "무슨 소리야?<br>난 인간이라고!!") {
    dia(startDia);
    startDia.innerHTML = ".......<br>더위를 좀 먹었나보군.";
  } else if (startDia.innerHTML == ".......<br>더위를 좀 먹었나보군.") {
    startDia.innerHTML = "그늘 아래서 좀 쉬라구.";
  } else if (startDia.innerHTML == "그늘 아래서 좀 쉬라구.") {
    startMain.style.backgroundImage = '';
    myDia(startDia);
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
    screenChange(whiteModal, startWindow, gameWindow);
    document.getElementById("userName").innerText = localStorage.getItem("name");
  }
  })

  const storyDia = document.getElementById('storyDialogue');
  const opt1 = document.getElementsByClassName('sOpt')[0];
  const opt2 = document.getElementsByClassName('sOpt')[1];
  const opt3 = document.getElementsByClassName('sOpt')[2];
  const storyBtn = document.getElementById('storyNext');
  const optBox1 = document.getElementById('optBox1');
  const optBox2 = document.getElementById('optBox2');
  const place = document.getElementById('place').innerHTML;
  const HP = document.getElementById('HP').innerHTML;
  const condition = document.getElementById('condition').innerHTML;

  function box1Close(element1, element2) {
    element1.style.display = 'none';
    element2.style.display = 'block';
  }

  function box2Close(element1, element2) {
    element1.style.display = 'flex';
    element2.style.display = 'none';
  }

  opt1.addEventListener('click', function(e) {
    if (place == "중앙광장") {
      if (storyDia.innerHTML == "무엇을 할까?") {
        myDia(storyDia);
        storyDia.innerHTML = "'가만히 있으면 아무 것도 알 수 없어..'";
        box1Close(optBox1, optBox2);
      }
    }
  })

  opt2.addEventListener('click', function(e) {
    if (place == "중앙광장") {
      if (storyDia.innerHTML == "무엇을 할까?") {
        myDia(storyDia);
        storyDia.innerHTML = "'일단 주변을 좀 탐색해보자.'";
        box1Close(optBox1, optBox2);
      }
    }
  })

  storyBtn.addEventListener('click', function(e) {
    if (place == "중앙광장") {
      if (storyDia.innerHTML == "'가만히 있으면 아무 것도 알 수 없어..'") {
        dia(storyDia);
        storyDia.innerHTML = "무엇을 할까?";
        box2Close(optBox1, optBox2);
      } else if (storyDia.innerHTML == "'일단 주변을 좀 탐색해보자.'") {
        storyDia.innerHTML = "'어? 노트가 하나 떨어져있네...<br>낯이 좀 익은데..'";
      } else if (storyDia.innerHTML == "'어? 노트가 하나 떨어져있네...<br>낯이 좀 익은데..'") {
        storyDia.innerHTML = "'잠깐, 이거 내 글씨체잖아?'";
      } else if (storyDia.innerHTML == "'잠깐, 이거 내 글씨체잖아?'") {
        storyDia.innerHTML = "'맞아, 기억난다. 이건 내 노트야.'";
      } else if (storyDia.innerHTML == "'맞아, 기억난다. 이건 내 노트야.'") {
        storyDia.innerHTML = "'뭐라고 적혀있는지 한번 읽어볼까..'";
      } else if (storyDia.innerHTML == "'뭐라고 적혀있는지 한번 읽어볼까..'") {
        storyDia.style.color = "green";
        storyDia.style.fontWeight = "normal";
        storyDia.innerHTML = "XX월 XX일<br>반지와 학생증을 잃어버렸다. 어디에서 떨어트린 것인지...";
      } else if (storyDia.innerHTML == "XX월 XX일<br>반지와 학생증을 잃어버렸다. 어디에서 떨어트린 것인지...") {
        storyDia.innerHTML = "XX월 XX일<br>자취방 열쇠가 안보인다... 집에 어떻게 들어가지..";
      } else if (storyDia.innerHTML == "XX월 XX일<br>자취방 열쇠가 안보인다... 집에 어떻게 들어가지..") {
        storyDia.innerHTML = "XX월 XX일<br>기침하면서 안경을 떨어트렸는데 어디로 간 건지 모르겠다..";
      } else if (storyDia.innerHTML == "XX월 XX일<br>기침하면서 안경을 떨어트렸는데 어디로 간 건지 모르겠다..") {
        storyDia.innerHTML = "XX월 XX일<br>큰일이다. 아주 중요한 물건을 잃어버렸다.. 중앙광장지하에서 잃어버린 거 같은데 어디있지..";
      } else if (storyDia.innerHTML == "XX월 XX일<br>큰일이다. 아주 중요한 물건을 잃어버렸다.. 중앙광장지하에서 잃어버린 거 같은데 어디있지..") {
        myDia(storyDia);
        storyDia.innerHTML = "'맞아 이 노트는 내가 잃어버린 물건을 적어두는 노트였어'";
      }
    }
  })

  const homeBtn = document.getElementsByClassName('gameOpt')[3];
  homeBtn.addEventListener('click', function(e) {
    screenChange(whiteModal, gameWindow, introWindow);
  })
};