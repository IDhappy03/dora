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
  if(message.content == '!!봇') {
    return message.reply('먼저 저장을 하고 add clear command 친다음에 v 표시 누르고 요 링크에 들어간다음에https://dashboard.heroku.com/apps 맨 아래로 내려서 저장하고 봇 테스트 하기')
  }
  else if (message.content === `${prefix}사용자정보`) {
    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
  }
  if(message.content == '!!봇 기초') {
    return message.reply('https://discordjs.guide/additional-info/changes-in-v12.html#string-concatenation');
  }

  else if(message.content.startsWith('!주사위')) {
    let min = 1;
    let max = 6;
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
      '마법 사전',
      '마술 배꼽',
      '마음의 흙',
      '마음을 불러내는 기계',
      '마음 나와라 당목',
      '마음이 변하는 부채',
      '마음 향수와 추억 향수',
      '마이크로광선',
      '만능 고삐',
      '만능 설계 장치',
      '만능클리너',
      '만능 텐트',
      '만능 패스',
      '만능 함정',
      '만담 돌',
      '만약에 박스',
      '만화상자',
      '맘대로 포토 프린터',
      '말하는 가스',
      '맛보기 스푼',
      '맛있는 안경',
      '맛있는 양념',
      '맹점별',
      '먹는 우주복',
      '먼거리 거울',
      '명연기 배지',
      '명검 전광환',
      '메카 메이커',
      '매드 워치',
      '모든 계절 배지',
      '메모리 디스크',
      '모아모아새',
      '모조 스프레이',
      '모형화 카메라',
      '목소리 고체화 액',
      '목소리 사탕',
      '몬스터 볼',
      '몰래 카메라',
      '몸 점토와 원래대로 액',
      '몽유봉',
      '몽타주 양동이',
      '무공해 자동 햄버거 패티 기계',
      '무서운 것을 만드는 기계',
      '무선 조종 자동차와 무선 조종 잠수함',
      '무생물 최면 메가폰',
      '무적대포',
      '무적창/무적방패',
      '무게조절 미터',
      '무시벌레',
      '문패 교환기',
      '물가공 세트',
      '물 건물 건축기',
      '물을 피하는 로프',
      '물 정화기',
      '물 비디오',
      '뭉실뭉실',
      '뭐든지 10원에 가게와 간판종이',
      '뭐든지 공항',
      '뭐든지 보험',
      '뭐든지 불러내는 마이크',
      '뭐든지 아이스크림 막대',
      '뭐든지 조종기',
      '미니 구조대 차',
      '미니 구조대 옷',
      '미니 방송국',
      '미니 불도저',
      '미래 라디오',
      '미래 물건 카탈로그',
      '미래 비전',
      '미래 수표',
      '미래 우주선',
      '미리 안테나',
      '미리 약속기계',
      '미리 일기장',
      '미사일 달린 원자력 잠수함',
      '미식가 테이블보',
      '미워 못 해 정 / 미워라 정',
      '미움 받기',
      '미니도라 전용 로켓',
      '민들레 빗',
      '밀폐공간 탐사기',
      '바뀌는 거울',
      '바다 생물 배',
      '바닷물 원료',
      '바퀴벌레 모자',
      '바퀴벌레 커버',
      '반대로 마이크',
      '반대로 세계 거울',
      '반드시 맞는 손금세트',
      '반만 외출 구름',
      '반으로 검',
      '발광 시트',
      '발명기',
      '발자국 추적 스프레이',
      '발자국으로 변하는 스프레이',
      '밤 램프',
      '방패 망토',
      '방 경비 시스템',
      '방 교환 스위치',
      '배달 가방',
      '배달 전화',
      '배역바꾸기 비디오',
      '배꼽 가스(헤소린 스탠드)',
      '백년 캡슐',
      '백설공주의 사과',
      '밸런스 트레이너',
      '버드캡',
      '벌레노래 소리꽃',
      '벌 주는 총',
      '벼락치기',
      '벽경치 전환기',
      '벽을 통해 밖을 볼 수 있는 기계',
      '변신 드링크',
      '변신등',
      '변신링과 카드',
      '변신 목걸이',
      '변신 머리띠',
      '별 제조 망치와 채집 채',
      '별똥별 유도 우산',
      '보너스',
      '보자기 택시',
      '복사 거울',
      '복사로봇',
      '복수 전표',
      '복원 라이트',
      '변신 옷(가칭)',
      '부르는 초인종',
      '부분 진화 총',
      '부엉이 사진기',
      '부화달걀',
      '분신망치',
      '분재세트',
      '블랙홀 펜',
      '비밀엄수 개',
      '비밀통로 라이트',
      '비사나이 해사나이 측정기',
      '비장의 기술 슈트',
      '빅 라이트',
      '빨라지는 태엽',
      '뻐꾸기 알',
      '뿔뿔이 드라이버',
     ]
    let min = 0;
    let max = arr.length;
    let index = parseInt(Math.random() * (max - min) + min);
    return message.reply(`${arr[index]} 이라는 도구가 나왔어.`);
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