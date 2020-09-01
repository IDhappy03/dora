const Discord = require('discord.js');
const client = new Discord.Client();
const token =process.env.token;
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log('켰다.');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "게스트"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == 'ping') {
    return message.reply('pong');
  }
  if(message.content == '4반') {
    return message.reply('https://cdn.discordapp.com/attachments/709920547341074523/750139530895425666/4_.png')
  }
  
  else if(message.content.startsWith('!주사위')) {
    let min = 1;
    let max = 1000;
    let dice_num = parseInt(Math.random() * (max - min) + min);
    return message.reply(`${dice_num} (이/가) 나왔습니다.`);
  } else if(message.content.startsWith('!비밀도구')) {
    let arr = [
      '가거라 개',
      '가공인물 계란',
      '가드로봇',
      '가시달린 침낭',
      '가공수면 펌프, 가공해저 체험안경, 가공해저 생존가능가스',
      '가뿐사뿐 낚싯대',
      '가상게임 보드',
      '가시복 배지',
      '간질간질 장갑',
      '간질이 벼룩',
      '감기 옮기는 전화',
      '강력부채 바람 신',
      '강력 시멘트',
      '강한 돌',
      '개그 레이더',
      '개미와 베짱이 배지',
      '개 버리는 경단',
      '거대입체 텔레비전',
      '거울 문',
      '거미줄 실패',
      '거짓말 기계',
      '거짓말 거울',
      '거짓말 800',
      '거꾸로 촉',
      '건망증 꽃',
      '걸리버 터널',
      '걸 프렌드 카탈로그',
      '결정하기',
      '경음파 발진식 쥐/바퀴벌레/진드기/흰개미 퇴치기', 
      '경쟁스테이크', 
      '경찰견 코', 
      '계급 배지', 
      '계속 스프레이', 
      '고르곤의 머리', 
      '고마워 링', 
      '고생 된장', 
      '고양이 용품들', 
      '고통 타이머', 
      '고 홈 오르골', 
      '고층 아파트화 엘리베이터', 
      '곤충 비행기 탑승장치', 
      '곤충을 부르는 보드', 
      '관광 비전', 
      '공간절단 가위', 
      '공기블록 제조기', 
      '공기포', 
      '공기총/공기 피스톨', 
      '공약 파스', 
      '공중 신발', 
      '공포 상자', 
      '공포증 도장', 
      '과장 카메라', 
      '과장 코트', 
      '과자 목초', 
      '관통 방석', 
      '광선총(열선총)', 
      '광고나팔', 
      '광고 사탕', 
      '괴담 램프', 
      '괴물모자', 
      '구름 굳히기 가스', 
      '구름 파이프', 
      '귀신 세트', 
      '귀신은 밖으로 콩', 
      '국제 보호 동물 스프레이', 
      '굴절 샤워', 
      '굽신굽신 메뚜기', 
      '그 거짓말 진짜', 
      '그렇게 되는 조개 세트', 
      '그림자를 자르는 가위', 
      '그림자를 붙이는 풀', 
      '극진하게', 
      '금지어 마커', 
      '금지 표지판', 
      '기분따라 따끈따끈 스티커', 
      '기억 디스크', 
      '기운나는 폭탄', 
      '길들이기 / 복숭아 동자표 경단', 
      '길 안내 보살', 
      '깜짝상자 스틱', 
      '꼬마 태풍의 눈(태순이)', 
      '꽃을 피우는 재', 
      '꿈꾸는 사람', 
      '꿈을 잇는 사다리', 
      '끈질긴 카메라', 
      '끌어당기는 거울', 
      '끔찍한 집', 
      '나만을 따르는 가스',
      '나무늘보 옷과 매달리는 나무',
      '나뭇꾼의 연못',
      '나이 연못 로프',
      '나중에 사탕',
      '나중에 진짜가 되는 스피커',
      '낙엽 번지',
      '날씨 결정표',
      '날씬해지는 터널',
      '남자여자',
      '낭비시간 저축 풍선',
      '낮처럼 등',
      '너구리',
      '넘어지게 해결사',
      '내 맘대로 모자',
      '내 말대로 밧줄',
      '뇌물초',
      '누구나 댄서',
      '눈 높은 카메라',
      '늑대인간 크림',
      '늘어나는 은행',
      '늘어나는 손',
      '늘었다 줄었다 두루마리',
      '능률 쑥쑥 사탕',
      '다른 사람이 안 보이는 안약',
      '다목적 부적',
      '다이어돈',
      '단단해지는 라이트',
      '단서 찾기 렌즈',
      '단어금지 마커',
      '단어로 순간이동',
      '달인 로봇',
      '닮은 애완동물 먹이',
      '담력시험 안경',
      '대나무 헬리콥터',
      '대답하면 빨려들어가는 페트병',
      '대체 포스트잇',
      '더빙 실 전화기',
      '데빌카드',
      '도깨비 타이머',
      '도루 게임 세트',
      '도와주는 배',
      '도와줘 경단',
      '독재자 스위치',
      '돈을 싫어하게 되는 사탕',
      '돌멩이 모자',
      '돌봐주는 로프',
      '돌아 돌아 돌아 링',
      '동면동굴(캡슐)',
      '돌풍배트',
      '동물 변신 비스킷',
      '동물 변신 은혜갚는 약',
      '동물놀이 모자',
      '동물 세트',
      '동물 손가락 캡',
      '동물이 되는 가루',
      '돗자리 낚시터',
      '두더지 장갑',
      '달팽이 하우스',
      '두배로',
      '둥실둥실 튜브',
      '드라마틱 가스',
      '드림 플레이어',
      '드림 총',
      '듣는 귀',
      '들어가는 거울',
      '대나무말',
      '러브러브 우산',
      '러브 아이스 박스',
      '렌탈 호출기',
      '럭키 총',
      '룸 카탈로그',
      '로보 양',
      '로봇 수호령',
      '로빈슨 크루소 세트',
      '로켓 빨대',
      '리포터 로봇',
      '마리혼 군',
     ]
    let min = 0;
    let max = arr.length;
    let index = parseInt(Math.random() * (max - min) + min);
    return message.reply(`${arr[index]} 라는 도구가 나왔어.`);
  }
});

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}

client.login(token);742635886998454293