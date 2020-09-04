const Discord = require('discord.js');
const client = new Discord.Client();
const token =process.env.token;

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '문의는 삐삐야#1950' }, status: 'online' })

  let state_list = [
    '문의는 삐삐야#1950',
    '!!명령어'
  ]
  let state_list_index = 1;
  let change_delay = 20000; // 이건 초입니당. 1000이 1초입니당SSSS.

  function changeState() {
    setTimeout(() => {
      console.log( '상태 변경 -> ', state_list[state_list_index] );
      client.user.setPresence({ game: { name: state_list[state_list_index] }, status: 'online' })
      state_list_index += 1;
      if(state_list_index >= state_list.length) {
        state_list_index = 0;
      }
      changeState()
    }, change_delay);
  }

  changeState();
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == '!!ping') {
    message.channel.send('pong');
  }
  if(message.content == '!!봇') {
    message.channel.send('https://dashboard.heroku.com/apps')
  }
  if(message.content == '!!도움') {
    message.channel.send('https://discordjs.guide/additional-info/changes-in-v12.html#string-concatenation')
  }
  if(message.content == '!!출첵') {
    message.channel.send('될줄알았니?')
  }
  if(message.content == '!!그리기') {
    message.channel.send('https://www.youtube.com/watch?v=2SojPurh_rM')
  }
  if(message.content == '!!ㅔㅑㅜㅎ') {
    return message.reply('vhd')
  }

  else if(message.content == '!!4반') {
    let helpImg = '';
    let commandList = [
      {name: '4반 시간표', desc: '4반의 시간표를 알려준다'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('4반 시간표', helpImg)
      .setColor('#186de6')
      .setFooter(``)
      .setImage('https://cdn.discordapp.com/attachments/709920547341074523/750139530895425666/4_.png')
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('시간표', commandStr);

    message.channel.send(embed)
  }

  else if(message.content == '!!초대코드') {
    let helpImg = '';
    let commandList = [
      {name: '초대코드', desc: 'https://discord.com/api/oauth2/authorize?client_id=742635886998454293&permissions=8&scope=bot' },
      

    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('도라에몽 초대코드', helpImg)
      .setColor('#CEFFC7')
      .setFooter(`❤️`)
      .setImage('https://cdn.discordapp.com/attachments/747789641826172948/750699703758225448/744af0d16a6eddc1.jpg')
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('초대코드: ', commandStr);

    message.channel.send(embed)
  }
  
 else if(message.content == '!!명령어') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: '!!ping', desc: 'pong'},
      {name: '!!명령어', desc: '사용가능한 명령어가 나온다'},
      {name: '!!비밀도구', desc: '도라에몽의 비밀도구가 랜덤으로 나온다'},
      {name: '!!주사위', desc: '1~6사이의 숫자가 랜덤으로 나온다.'},
      {name: '!!도움', desc: '초보자 가이드가 나온다.'},
      {name: '!!초대코드', desc: '도라에몽을 초대할 수 있는 코드가 나온다'},
      {name: '!!qlalfehrn', desc: '도라에몽의 비밀도구가 랜덤으로 나온다.'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('도라에몽 명령어', helpImg)
      .setColor('#186de6')
      .setFooter(`도라에몽 BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('명령어: ', commandStr);

    message.channel.send(embed)
  }
  
  else if(message.content.startsWith('!!주사위')) {
    let min = 1;
    let max = 6;
    let dice_num = parseInt(Math.random() * (max - min) + min);
    return message.reply(`${dice_num} (이/가) 나왔습니다.`);
  } else if(message.content.startsWith('!!비밀도구')) {
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
      '나무꾼의 연못',
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
      '사각판 엘리베이터',
      '사실부직포',
      '사물을 감추는 카메라',
      '사이좋게 껌',
      '사임 당근',
      '사파리 탐험차',
      '사랑을 키워주는 집',
      '산타 주머니',
      '산타의 굴뚝',
      '삼륜 비행기',
      '상자정원 시리즈',
      '상대방 스토퍼',
      '상황설명기',
      '상 받아라',
      '생물 복제기',
      '생물사육 디오라마북',
      '선물보자기',
      '선거견',
      '설계지',
      '셜록 홈즈 세트',
      '설계기',
      '설명서 제조기',
      '성장 로프',
      '세균 배양기',
      '세금 새',
      '세계기록(rock)',
      '세뱃돈 구슬',
      '세포축소기',
      '소금쟁이 과자',
      '소문 꽃씨',
      '소문 부채',
      '소문의 뿌리',
      '소원별',
      '소원실현기',
      '손오공 분신 샴푸',
      '소재 전등',
      '솜사탕식 구름 제조기',
      '쇼트 커터',
      '수압포',
      '수중 라이트',
      '순간고정 카메라',
      '순간이동 드라이어',
      '슈퍼 장갑',
      '슈퍼 캐치볼',
      '슈퍼맨 망토',
      '슈퍼 흐르는 국수',
      '스릴 부메랑',
      '스릴 티켓',
      '스몰 라이트',
      '스몰 스프레이',
      '스캔돈',
      '스케줄 시계',
      '스톱워치',
      '스파이 세트',
      '스파이 위성',
      '스트레이트 홀',
      '스페이스 애벌레',
      '승리를 부르는 장갑',
      '시간 저금통',
      '시나리오 라이터',
      '시키는 대로 모자',
      '시한 바보탄',
      '시문',
      '식물개조 농축액',
      '신기루 촛대',
      '신놀이 세트',
      '신선로봇',
      '신출귀몰 닌자세트',
      '실내 여행기',
      '실물 그림책',
      '실물 미니어처 백과사전',
      '실물 스프레이',
      '싫은 일 퓨즈',
      '심해 크림',
      '심해 헤드램프',
      '십계 석판',
      '싸움 장갑(반대글러브)',
      '싹둑식도',
      '쌍둥이 로봇',
      '쌍둥이 풍선',
      '씻어주는 구름',
      '아기 말 번역기',
      '아부 립스틱 / 악담 립스틱',
      '아탈 건',
      '아파트 놀이 나무',
      '악마 소환서',
      '악마의 저주',
      '악마의 패스포트',
      '악운 다이아몬드',
      '알딸딸 캡',
      '알뜰알밤',
      '알라빈의 램프',
      '안내천사',
      '안전지대 불',
      '안전 모닥불',
      '안전 불꽃놀이세트',
      '암기빵',
      '앙케이터',
      '애니멀 파워 벨트',
      '애니메이커',
      '애완 그림물감',
      '애완동물 크림',
      '애완동물 펜',
      '어드벤차(茶)',
      '어디로든 문',
      '어디로든 창문',
      '어디든지 수도꼭지',
      '어디든지 누구든지 롤러스케이트',
      '어디든지 구멍',
      '어떻게든 벌',
      '억지로 액',
      '얼음 세공 인두',
      '얼짱 복사 로봇',
      '엄마놀이 세트',
      '엄마 네트',
      '업그레이드 라이트',
      '엉덩이 모양 경단',
      '에이스 모자/마법의 글러브/황금 배트',
      '역전 조랑말',
      '연도 측정기',
      '연발형 불운 광선총',
      '열혈만두',
      '엿보기 구멍판',
      '영광의 카펫',
      '영역 엑기스',
      '영화감독 로봇',
      '영혼 막대기',
      '영혼 투입 총',
      '오공 링',
      '오싹오싹 향',
      '온천 자쿠지',
      '올빼미 맨',
      '옷 갈아입기 카메라(패션 카메라)',
      '온천에그',
      '완력 티켓',
      '요괴 크림 세트',
      '요술 장갑',
      '요술 엉덩이',
      '요정이 없는 마법램프',
      '용기백배 부채',
      '용돈벌이 침팬지',
      '우겨라 물약',
      '우산 없이',
      '우정 캡슐',
      '우주 구명 보트',
      '우주 완전 대백과 단말기',
      '울트라 링',
      '울트라 스톱워치(잠깐워치)',
      '원격조종 입과 눈',
      '원한두건',
      '원하는 꿈을 꾸게 하는 총',
      '월광등',
      '위치 고정 스프레이',
      '위로 로봇',
      '워워 봉',
      '위성 리프트',
      '유령 빨대',
      '유행성 바이러스',
      '육지용 보트 / 육지용 워터보트 / 육지용 잠수함',
      '은하철도 티켓',
      '은혜 갚는 학모자',
      '은혜 갚는 약',
      '은혜 사탕',
      '음악 고구마',
      '의사 선생님 가방',
      '의심귀신',
      '이동 분필',
      '이상하고 이상한 우산 시리즈',
      '이어주는 실',
      '이야기 배지',
      '인간 제조기',
      '인간 절단기',
      '인간 책표지',
      '인간 리모컨',
      '인내 주머니',
      '인스턴트 복사기',
      '인스턴트 사진 제조기',
      '인스턴트 수호령',
      '인체 부품 교체 기계',
      '인형오븐 인형코팅과 속을 채우는 내용물',
      '일곱색깔 목소리 사탕',
      '일품 조미료',
      '입체 퍼즐 망치',
      '잊은 물건 돌려주는 기계',
      '잊어 버려 꽃',
      '잃어버리는 물건을 다시 돌아오게 하는 스프레이',
      '자동으로 때려주는 가스',
      '자동 톱날',
      '자동 망치',
      '자백모자',
      '잘한다 파워 메가폰',
      '장난감 군대 / 장난감 병정',
      '장난감 만들기 카메라',
      '자신감 흔들기',
      '재미있는 세뱃돈 세트',
      '재질 변환기',
      '잭의 콩',
      '잭의 암탉 / 잭의 하프',
      '저주 카메라',
      '저절로 따라하기',
      '전격 트레이드',
      '절교 전화카드',
      '절대안전 구명뗏목',
      '절친 전화카드',
      '적응총',
      '전극 순간 이동 장치',
      '전차 바지',
      '전함 제조기',
      '점보총',
      '점핑 잠수함',
      '정령을 부르는 팔찌',
      '정의의 로프',
      '정리정돈 스프레이',
      '정리 페인트',
      '젖은 천',
      '제 눈에 안경씰',
      '제 마음대로 달력',
      '조립형 타이타닉 로봇',
      '종이접기 집',
      '좋은 점을 고를 수 있는 보드',
      '주머니 회오리',
      '주는 타이',
      '주전자 녹음기',
      '준비 땅 권총',
      '중독 알약',
      '중력 페인트',
      '즉석 스위트 홈(사랑을 키우는 집)',
      '즉석 엘리베이터',
      '지구파괴폭탄',
      '지킬과 하이드씨',
      '지평선 테이프',
      '지하 탐험 차',
      '직업테스트 완장',
      '진짜로 만드는 코끼리',
      '진수성찬 테이블보',
      '진심 거울 / 진심 모니터',
      '진실 사탕',
      '진화퇴화 방사선총',
      '진주 제조 아쿠아 케이스',
      '징 마이크',
      '집중력 증강 비눗방울 헬멧',
      '집 분위기 조절기',
      '집에서 하는 서바이벌 게임',
      '짬뽕 벨트',
      '쩍쩍이 그물',
      '찰싹끈적이',
      '참두꺼비 대왕',
      '챔피언 글러브',
      '찾았다람쥐',
      '척척 알약',
      '천구의',
      '천릿길도 한 걸음 빗자루',
      '천지창조 세트',
      '천사 나팔',
      '철근육 크림',
      '체인지 로프',
      '초능력 모자',
      '초능력 연습 장치',
      '초대알약',
      '초호화 손전등(디럭스 라이트)',
      '총알 크림',
      '최면 안경',
      '추억 향수',
      '추적 미사일',
      '충신 창고',
      '충격총',
      '취소 스탬프',
      '취미 일요농사 세트',
      '치타로션',
      '친구가 되어주는 줄',
      '청부업자 Z(넘어지게 해결사 Z)',
      '카멜레온 모자',
      '카멜레온 차',
      '캐릭터 상품 제조기',
      '캠핑 캡슐',
      '커플 테스트 배지',
      '컴퓨터 안경',
      '컴퓨터 연필',
      '컴온 캣',
      '컵 귀신',
      '컵 여행 세트',
      '코끼리표 립스틱',
      '퀵 앤 슬로우',
      '쿨쿨 허브',
      '큐피드의 날개',
      '큐피트의 화살',
      '키키',
      '타이타닉 로보',
      '타임 권총',
      '타임 리모컨',
      '타임 룸',
      '타임 릴',
      '타임머신',
      '타임 보자기',
      '타임 벨트',
      '타임 TV',
      '탐험모자',
      '타잔 팬티',
      '탈피등',
      '터치가 안 되는 가스',
      '터치 장갑',
      '털어놓는 가스',
      '텔레비전 끈끈이',
      '통과하는 후프',
      '통역 곤약',
      '통째로 커지고 작아지는 컵',
      '투명 막대기',
      '투명 망토',
      '투명손(투명 핸드)',
      '튀어오르는 함정',
      '특이한 저금통 시리즈',
      '미래의 저금통',
      '블록 저금통',
      '최면술 저금통',
      '감시견 저금통',
      '사람 저금통',
      '게 저금통',
      '티끌 모아 모아',
      '티끌 모아 태산 은행',
      '파장파장 글러브',
      '파이터 슈트',
      '파초부채',
      '판다다',
      '판타 글래스',
      '피노키오 꽃',
      '팝콘 햇',
      '팬클럽 결성 본부와 팬클럽 배지',
      '펀칭 피스톨',
      '페이퍼 레이더',
      '펫 호루라기',
      '편안한 등산모',
      '편애 배지',
      '평화 안테나(平和アンテナ)',
      '폴라로이드 인스턴트 미니어처 제조 사진기',
      '풍운 도라에몽 성',
      '프리사이즈 인형 사진기',
      '폭소 후추',
      '하고 싶은 대로 하는 달력',
      '하늘의 채찍',
      '하늘을 나는 작은 융단',
      '하늘정원',
      '하우스 로봇',
      '하인 스티커',
      '하늘을 나는 보자기',
      '하숙나무',
      '한 것처럼',
      '한 마음 초콜릿',
      '합체 풀',
      '해신 포세이돈 세트',
      '해피',
      '핵잠수함형 태엽식 잠지함',
      '핸디캡',
      '행복의 산책로',
      '행복의 상징 파랑새와 그물',
      '행복을 부르는 카드(구)',
      '행복 트럼프',
      '행복 보험기',
      '행운불행인형',
      '헬스 하우스',
      '혓바닥 세트',
      '형제 스티커',
      '화려해지는 라이트',
      '화해하는 종',
      '회오리 나팔',
      '호랑이 꼬리 세트',
      '혼령 배지',
      '혼자만 코트',
      '홈 미로',
      '휴대용 가족',
      '휴대용 국회',
      '휴대용 피라미드',
      'VIP 크림',
      'XYZ 선 카메라',
      '2차원 카메라',
      '3배 시간 스티커',
      '3분의 1배 시간 스티커',
      '4차원 주머니',
      '4차원 조립식 블럭',
      '4차원 쓰레기통',
      '6음 플라워',
      '7번 넘어지는 무당벌레',
      '12분의 1배 시간 스티커',
      '4차원 예비 주머니',
      '어디로든 가스',
      '인스턴트 펄',
      '깜짝라이트',
      'B급음식이 나오는 식탁보',
]
    let min = 0;
    let max = arr.length;
    let index = parseInt(Math.random() * (max - min) + min);
    message.channel.send(`${arr[index]} (이)라는 도구가 나왔어.`)
  }


  else if(message.content.startsWith('!!주사위')) {
    let min = 1;
    let max = 6;
    let dice_num = parseInt(Math.random() * (max - min) + min);
    return message.reply(`${dice_num} (이/가) 나왔습니다.`);
  } else if(message.content.startsWith('!!qlalfehrn')) {
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
      '나무꾼의 연못',
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
      '사각판 엘리베이터',
      '사실부직포',
      '사물을 감추는 카메라',
      '사이좋게 껌',
      '사임 당근',
      '사파리 탐험차',
      '사랑을 키워주는 집',
      '산타 주머니',
      '산타의 굴뚝',
      '삼륜 비행기',
      '상자정원 시리즈',
      '상대방 스토퍼',
      '상황설명기',
      '상 받아라',
      '생물 복제기',
      '생물사육 디오라마북',
      '선물보자기',
      '선거견',
      '설계지',
      '셜록 홈즈 세트',
      '설계기',
      '설명서 제조기',
      '성장 로프',
      '세균 배양기',
      '세금 새',
      '세계기록(rock)',
      '세뱃돈 구슬',
      '세포축소기',
      '소금쟁이 과자',
      '소문 꽃씨',
      '소문 부채',
      '소문의 뿌리',
      '소원별',
      '소원실현기',
      '손오공 분신 샴푸',
      '소재 전등',
      '솜사탕식 구름 제조기',
      '쇼트 커터',
      '수압포',
      '수중 라이트',
      '순간고정 카메라',
      '순간이동 드라이어',
      '슈퍼 장갑',
      '슈퍼 캐치볼',
      '슈퍼맨 망토',
      '슈퍼 흐르는 국수',
      '스릴 부메랑',
      '스릴 티켓',
      '스몰 라이트',
      '스몰 스프레이',
      '스캔돈',
      '스케줄 시계',
      '스톱워치',
      '스파이 세트',
      '스파이 위성',
      '스트레이트 홀',
      '스페이스 애벌레',
      '승리를 부르는 장갑',
      '시간 저금통',
      '시나리오 라이터',
      '시키는 대로 모자',
      '시한 바보탄',
      '시문',
      '식물개조 농축액',
      '신기루 촛대',
      '신놀이 세트',
      '신선로봇',
      '신출귀몰 닌자세트',
      '실내 여행기',
      '실물 그림책',
      '실물 미니어처 백과사전',
      '실물 스프레이',
      '싫은 일 퓨즈',
      '심해 크림',
      '심해 헤드램프',
      '십계 석판',
      '싸움 장갑(반대글러브)',
      '싹둑식도',
      '쌍둥이 로봇',
      '쌍둥이 풍선',
      '씻어주는 구름',
      '아기 말 번역기',
      '아부 립스틱 / 악담 립스틱',
      '아탈 건',
      '아파트 놀이 나무',
      '악마 소환서',
      '악마의 저주',
      '악마의 패스포트',
      '악운 다이아몬드',
      '알딸딸 캡',
      '알뜰알밤',
      '알라빈의 램프',
      '안내천사',
      '안전지대 불',
      '안전 모닥불',
      '안전 불꽃놀이세트',
      '암기빵',
      '앙케이터',
      '애니멀 파워 벨트',
      '애니메이커',
      '애완 그림물감',
      '애완동물 크림',
      '애완동물 펜',
      '어드벤차(茶)',
      '어디로든 문',
      '어디로든 창문',
      '어디든지 수도꼭지',
      '어디든지 누구든지 롤러스케이트',
      '어디든지 구멍',
      '어떻게든 벌',
      '억지로 액',
      '얼음 세공 인두',
      '얼짱 복사 로봇',
      '엄마놀이 세트',
      '엄마 네트',
      '업그레이드 라이트',
      '엉덩이 모양 경단',
      '에이스 모자/마법의 글러브/황금 배트',
      '역전 조랑말',
      '연도 측정기',
      '연발형 불운 광선총',
      '열혈만두',
      '엿보기 구멍판',
      '영광의 카펫',
      '영역 엑기스',
      '영화감독 로봇',
      '영혼 막대기',
      '영혼 투입 총',
      '오공 링',
      '오싹오싹 향',
      '온천 자쿠지',
      '올빼미 맨',
      '옷 갈아입기 카메라(패션 카메라)',
      '온천에그',
      '완력 티켓',
      '요괴 크림 세트',
      '요술 장갑',
      '요술 엉덩이',
      '요정이 없는 마법램프',
      '용기백배 부채',
      '용돈벌이 침팬지',
      '우겨라 물약',
      '우산 없이',
      '우정 캡슐',
      '우주 구명 보트',
      '우주 완전 대백과 단말기',
      '울트라 링',
      '울트라 스톱워치(잠깐워치)',
      '원격조종 입과 눈',
      '원한두건',
      '원하는 꿈을 꾸게 하는 총',
      '월광등',
      '위치 고정 스프레이',
      '위로 로봇',
      '워워 봉',
      '위성 리프트',
      '유령 빨대',
      '유행성 바이러스',
      '육지용 보트 / 육지용 워터보트 / 육지용 잠수함',
      '은하철도 티켓',
      '은혜 갚는 학모자',
      '은혜 갚는 약',
      '은혜 사탕',
      '음악 고구마',
      '의사 선생님 가방',
      '의심귀신',
      '이동 분필',
      '이상하고 이상한 우산 시리즈',
      '이어주는 실',
      '이야기 배지',
      '인간 제조기',
      '인간 절단기',
      '인간 책표지',
      '인간 리모컨',
      '인내 주머니',
      '인스턴트 복사기',
      '인스턴트 사진 제조기',
      '인스턴트 수호령',
      '인체 부품 교체 기계',
      '인형오븐 인형코팅과 속을 채우는 내용물',
      '일곱색깔 목소리 사탕',
      '일품 조미료',
      '입체 퍼즐 망치',
      '잊은 물건 돌려주는 기계',
      '잊어 버려 꽃',
      '잃어버리는 물건을 다시 돌아오게 하는 스프레이',
      '자동으로 때려주는 가스',
      '자동 톱날',
      '자동 망치',
      '자백모자',
      '잘한다 파워 메가폰',
      '장난감 군대 / 장난감 병정',
      '장난감 만들기 카메라',
      '자신감 흔들기',
      '재미있는 세뱃돈 세트',
      '재질 변환기',
      '잭의 콩',
      '잭의 암탉 / 잭의 하프',
      '저주 카메라',
      '저절로 따라하기',
      '전격 트레이드',
      '절교 전화카드',
      '절대안전 구명뗏목',
      '절친 전화카드',
      '적응총',
      '전극 순간 이동 장치',
      '전차 바지',
      '전함 제조기',
      '점보총',
      '점핑 잠수함',
      '정령을 부르는 팔찌',
      '정의의 로프',
      '정리정돈 스프레이',
      '정리 페인트',
      '젖은 천',
      '제 눈에 안경씰',
      '제 마음대로 달력',
      '조립형 타이타닉 로봇',
      '종이접기 집',
      '좋은 점을 고를 수 있는 보드',
      '주머니 회오리',
      '주는 타이',
      '주전자 녹음기',
      '준비 땅 권총',
      '중독 알약',
      '중력 페인트',
      '즉석 스위트 홈(사랑을 키우는 집)',
      '즉석 엘리베이터',
      '지구파괴폭탄',
      '지킬과 하이드씨',
      '지평선 테이프',
      '지하 탐험 차',
      '직업테스트 완장',
      '진짜로 만드는 코끼리',
      '진수성찬 테이블보',
      '진심 거울 / 진심 모니터',
      '진실 사탕',
      '진화퇴화 방사선총',
      '진주 제조 아쿠아 케이스',
      '징 마이크',
      '집중력 증강 비눗방울 헬멧',
      '집 분위기 조절기',
      '집에서 하는 서바이벌 게임',
      '짬뽕 벨트',
      '쩍쩍이 그물',
      '찰싹끈적이',
      '참두꺼비 대왕',
      '챔피언 글러브',
      '찾았다람쥐',
      '척척 알약',
      '천구의',
      '천릿길도 한 걸음 빗자루',
      '천지창조 세트',
      '천사 나팔',
      '철근육 크림',
      '체인지 로프',
      '초능력 모자',
      '초능력 연습 장치',
      '초대알약',
      '초호화 손전등(디럭스 라이트)',
      '총알 크림',
      '최면 안경',
      '추억 향수',
      '추적 미사일',
      '충신 창고',
      '충격총',
      '취소 스탬프',
      '취미 일요농사 세트',
      '치타로션',
      '친구가 되어주는 줄',
      '청부업자 Z(넘어지게 해결사 Z)',
      '카멜레온 모자',
      '카멜레온 차',
      '캐릭터 상품 제조기',
      '캠핑 캡슐',
      '커플 테스트 배지',
      '컴퓨터 안경',
      '컴퓨터 연필',
      '컴온 캣',
      '컵 귀신',
      '컵 여행 세트',
      '코끼리표 립스틱',
      '퀵 앤 슬로우',
      '쿨쿨 허브',
      '큐피드의 날개',
      '큐피트의 화살',
      '키키',
      '타이타닉 로보',
      '타임 권총',
      '타임 리모컨',
      '타임 룸',
      '타임 릴',
      '타임머신',
      '타임 보자기',
      '타임 벨트',
      '타임 TV',
      '탐험모자',
      '타잔 팬티',
      '탈피등',
      '터치가 안 되는 가스',
      '터치 장갑',
      '털어놓는 가스',
      '텔레비전 끈끈이',
      '통과하는 후프',
      '통역 곤약',
      '통째로 커지고 작아지는 컵',
      '투명 막대기',
      '투명 망토',
      '투명손(투명 핸드)',
      '튀어오르는 함정',
      '특이한 저금통 시리즈',
      '미래의 저금통',
      '블록 저금통',
      '최면술 저금통',
      '감시견 저금통',
      '사람 저금통',
      '게 저금통',
      '티끌 모아 모아',
      '티끌 모아 태산 은행',
      '파장파장 글러브',
      '파이터 슈트',
      '파초부채',
      '판다다',
      '판타 글래스',
      '피노키오 꽃',
      '팝콘 햇',
      '팬클럽 결성 본부와 팬클럽 배지',
      '펀칭 피스톨',
      '페이퍼 레이더',
      '펫 호루라기',
      '편안한 등산모',
      '편애 배지',
      '평화 안테나(平和アンテナ)',
      '폴라로이드 인스턴트 미니어처 제조 사진기',
      '풍운 도라에몽 성',
      '프리사이즈 인형 사진기',
      '폭소 후추',
      '하고 싶은 대로 하는 달력',
      '하늘의 채찍',
      '하늘을 나는 작은 융단',
      '하늘정원',
      '하우스 로봇',
      '하인 스티커',
      '하늘을 나는 보자기',
      '하숙나무',
      '한 것처럼',
      '한 마음 초콜릿',
      '합체 풀',
      '해신 포세이돈 세트',
      '해피',
      '핵잠수함형 태엽식 잠지함',
      '핸디캡',
      '행복의 산책로',
      '행복의 상징 파랑새와 그물',
      '행복을 부르는 카드(구)',
      '행복 트럼프',
      '행복 보험기',
      '행운불행인형',
      '헬스 하우스',
      '혓바닥 세트',
      '형제 스티커',
      '화려해지는 라이트',
      '화해하는 종',
      '회오리 나팔',
      '호랑이 꼬리 세트',
      '혼령 배지',
      '혼자만 코트',
      '홈 미로',
      '휴대용 가족',
      '휴대용 국회',
      '휴대용 피라미드',
      'VIP 크림',
      'XYZ 선 카메라',
      '2차원 카메라',
      '3배 시간 스티커',
      '3분의 1배 시간 스티커',
      '4차원 주머니',
      '4차원 조립식 블럭',
      '4차원 쓰레기통',
      '6음 플라워',
      '7번 넘어지는 무당벌레',
      '12분의 1배 시간 스티커',
      '4차원 예비 주머니',
      '어디로든 가스',
      '인스턴트 펄',
      '깜짝라이트',
      'B급음식이 나오는 식탁보',
]
    let min = 0;
    let max = arr.length;
    let index = parseInt(Math.random() * (max - min) + min);
    message.channel.send(`${arr[index]} (이)라는 도구가 나왔어.`)
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