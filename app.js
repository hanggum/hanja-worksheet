// 한자 데이터베이스 (급수별) - 한국어문회 한자능력검정시험 배정한자
const hanjaDatabase = {
    '8급': [
        // 공식 배정한자 50자 (용례 추가됨)
        { char: '敎', examples: ['교육(敎育)', '교실(敎室)'], reading: '가르칠 교', meaning: '가르치다', strokes: 11 },
        { char: '校', examples: ['학교(學校)', '등교(登校)'], reading: '학교 교', meaning: '학교', strokes: 10 },
        { char: '九', examples: ['구월(九月)', '구사일생(九死一生)'], reading: '아홉 구', meaning: '아홉', strokes: 2 },
        { char: '國', examples: ['국가(國家)', '국기(國旗)'], reading: '나라 국', meaning: '나라', strokes: 11 },
        { char: '軍', examples: ['군인(軍人)', '장군(將軍)'], reading: '군사 군', meaning: '군사', strokes: 9 },
        { char: '金', examples: ['금속(金屬)', '성금(誠金)'], reading: '쇠 금', meaning: '쇠/성', strokes: 8 },
        { char: '南', examples: ['남북(南北)', '강남(江南)'], reading: '남녘 남', meaning: '남쪽', strokes: 9 },
        { char: '男', examples: ['남자(男子)', '장남(長男)'], reading: '사내 남', meaning: '사내', strokes: 7 },
        { char: '女', examples: ['여자(女子)', '소녀(少女)'], reading: '계집 녀', meaning: '여자', strokes: 3 },
        { char: '年', examples: ['학년(學年)', '금년(今年)'], reading: '해 년', meaning: '해', strokes: 6 },
        { char: '大', examples: ['대문(大門)', '대왕(大王)'], reading: '큰 대', meaning: '크다', strokes: 3 },
        { char: '東', examples: ['동해(東海)', '동문(東門)'], reading: '동녘 동', meaning: '동쪽', strokes: 8 },
        { char: '六', examples: ['유월(六月)', '육촌(六寸)'], reading: '여섯 육', meaning: '여섯', strokes: 4 },
        { char: '萬', examples: ['만세(萬歲)', '만물(萬物)'], reading: '일만 만', meaning: '만', strokes: 13 },
        { char: '母', examples: ['부모(父母)', '모국어(母國語)'], reading: '어미 모', meaning: '어머니', strokes: 5 },
        { char: '木', examples: ['식목(植木)', '목수(木手)'], reading: '나무 목', meaning: '나무', strokes: 4 },
        { char: '門', examples: ['대문(大門)', '창문(窓門)'], reading: '문 문', meaning: '문', strokes: 8 },
        { char: '民', examples: ['국민(國民)', '시민(市民)'], reading: '백성 민', meaning: '백성', strokes: 5 },
        { char: '白', examples: ['백색(白色)', '결백(潔白)'], reading: '흰 백', meaning: '희다', strokes: 5 },
        { char: '百', examples: ['백성(百姓)', '백화점(百貨店)'], reading: '일백 백', meaning: '백', strokes: 6 },
        { char: '父', examples: ['부모(父母)', '부친(父親)'], reading: '아비 부', meaning: '아버지', strokes: 4 },
        { char: '北', examples: ['북한(北韓)', '패배(敗北)'], reading: '북녘 북', meaning: '북쪽', strokes: 5 },
        { char: '四', examples: ['사월(四月)', '사방(四方)'], reading: '넉 사', meaning: '넷', strokes: 5 },
        { char: '山', examples: ['등산(登山)', '화산(火山)'], reading: '뫼 산', meaning: '산', strokes: 3 },
        { char: '三', examples: ['삼월(三月)', '삼각(三角)'], reading: '석 삼', meaning: '셋', strokes: 3 },
        { char: '生', examples: ['생일(生日)', '학생(學生)'], reading: '날 생', meaning: '살다', strokes: 5 },
        { char: '西', examples: ['서양(西洋)', '동서(東西)'], reading: '서녘 서', meaning: '서쪽', strokes: 6 },
        { char: '先', examples: ['선생(先生)', '우선(優先)'], reading: '먼저 선', meaning: '먼저', strokes: 6 },
        { char: '小', examples: ['소인(小人)', '축소(縮小)'], reading: '작을 소', meaning: '작다', strokes: 3 },
        { char: '水', examples: ['수도(水道)', '홍수(洪水)'], reading: '물 수', meaning: '물', strokes: 4 },
        { char: '室', examples: ['교실(敎室)', '실내(室內)'], reading: '집 실', meaning: '집/방', strokes: 9 },
        { char: '十', examples: ['시월(十月)', '십계명(十誡命)'], reading: '열 십', meaning: '열', strokes: 2 },
        { char: '五', examples: ['오월(五月)', '오감(五感)'], reading: '다섯 오', meaning: '다섯', strokes: 4 },
        { char: '王', examples: ['왕자(王子)', '국왕(國王)'], reading: '임금 왕', meaning: '임금', strokes: 4 },
        { char: '外', examples: ['외출(外出)', '외국(外國)'], reading: '바깥 외', meaning: '바깥', strokes: 5 },
        { char: '月', examples: ['월요일(月曜日)', '세월(歲月)'], reading: '달 월', meaning: '달', strokes: 4 },
        { char: '二', examples: ['이월(二月)', '이중(二重)'], reading: '두 이', meaning: '둘', strokes: 2 },
        { char: '人', examples: ['인구(人口)', '주인(主人)'], reading: '사람 인', meaning: '사람', strokes: 2 },
        { char: '一', examples: ['일등(一等)', '통일(統一)'], reading: '한 일', meaning: '하나', strokes: 1 },
        { char: '日', examples: ['일기(日記)', '휴일(休日)'], reading: '날 일', meaning: '해', strokes: 4 },
        { char: '長', examples: ['장점(長點)', '회장(會長)'], reading: '긴 장', meaning: '길다', strokes: 8 },
        { char: '弟', examples: ['형제(兄弟)', '제자(弟子)'], reading: '아우 제', meaning: '아우', strokes: 7 },
        { char: '中', examples: ['중심(中心)', '공중(空中)'], reading: '가운데 중', meaning: '가운데', strokes: 4 },
        { char: '靑', examples: ['청년(靑年)', '청춘(靑春)'], reading: '푸를 청', meaning: '푸르다', strokes: 8 },
        { char: '寸', examples: ['삼촌(三寸)', '사촌(四寸)'], reading: '마디 촌', meaning: '마디', strokes: 3 },
        { char: '七', examples: ['칠월(七月)', '칠석(七夕)'], reading: '일곱 칠', meaning: '일곱', strokes: 2 },
        { char: '土', examples: ['토지(土地)', '국토(國土)'], reading: '흙 토', meaning: '흙', strokes: 3 },
        { char: '八', examples: ['팔월(八月)', '팔도(八道)'], reading: '여덟 팔', meaning: '여덟', strokes: 2 },
        { char: '學', examples: ['학교(學校)', '학생(學生)'], reading: '배울 학', meaning: '배우다', strokes: 16 },
        { char: '韓', examples: ['한국(韓國)', '한복(韓服)'], reading: '나라 한', meaning: '한국', strokes: 17 },
        { char: '兄', examples: ['형제(兄弟)', '사형(舍兄)'], reading: '맏 형', meaning: '형', strokes: 5 },
        { char: '火', examples: ['화재(火災)', '소화(消火)'], reading: '불 화', meaning: '불', strokes: 4 },
        { char: '上', examples: ['상하(上下)', '세상(世上)'], reading: '윗 상', meaning: '위', strokes: 3 },
        { char: '下', examples: ['하천(下川)', '지하(地下)'], reading: '아래 하', meaning: '아래', strokes: 3 },
        { char: '千', examples: ['천리(千里)', '천년(千年)'], reading: '일천 천', meaning: '천', strokes: 3 }
    ],
    '7급': [
        // 7급 전체 배정한자 100자 (8급 포함하여 총 150자 학습)
        { char: '歌', examples: ['가수(歌手)', '국가(國歌)'], reading: '노래 가', meaning: '노래', strokes: 14 },
        { char: '家', examples: ['가족(家族)', '국가(國家)'], reading: '집 가', meaning: '집', strokes: 10 },
        { char: '間', examples: ['시간(時間)', '중간(中間)'], reading: '사이 간', meaning: '사이', strokes: 12 },
        { char: '江', examples: ['한강(漢江)', '강변(江邊)'], reading: '강 강', meaning: '강', strokes: 6 },
        { char: '車', examples: ['기차(汽車)', '자동차(自動車)'], reading: '수레 차', meaning: '수레', strokes: 7 },
        { char: '工', examples: ['공장(工場)', '공사(工事)'], reading: '장인 공', meaning: '장인', strokes: 3 },
        { char: '空', examples: ['공기(空氣)', '공간(空間)'], reading: '빌 공', meaning: '비다', strokes: 8 },
        { char: '口', examples: ['입구(入口)', '출구(出口)'], reading: '입 구', meaning: '입', strokes: 3 },
        { char: '記', examples: ['일기(日記)', '기자(記者)'], reading: '기록할 기', meaning: '기록하다', strokes: 10 },
        { char: '氣', examples: ['공기(空氣)', '기분(氣分)'], reading: '기운 기', meaning: '기운', strokes: 10 },
        { char: '旗', examples: ['국기(國旗)', '태극기(太極旗)'], reading: '기 기', meaning: '깃발', strokes: 14 },
        { char: '內', examples: ['실내(室內)', '안내(案內)'], reading: '안 내', meaning: '안', strokes: 4 },
        { char: '農', examples: ['농사(農事)', '농민(農民)'], reading: '농사 농', meaning: '농사', strokes: 13 },
        { char: '答', examples: ['대답(對答)', '정답(正答)'], reading: '대답 답', meaning: '대답', strokes: 12 },
        { char: '道', examples: ['도로(道路)', '인도(人道)'], reading: '길 도', meaning: '길', strokes: 13 },
        { char: '冬', examples: ['겨울(冬)', '동계(冬季)'], reading: '겨울 동', meaning: '겨울', strokes: 5 },
        { char: '同', examples: ['동창(同窓)', '합동(合同)'], reading: '한가지 동', meaning: '같다', strokes: 6 },
        { char: '洞', examples: ['동네(洞네)', '명동(明洞)'], reading: '골 동', meaning: '골짜기', strokes: 9 },
        { char: '動', examples: ['운동(運動)', '동물(動物)'], reading: '움직일 동', meaning: '움직이다', strokes: 11 },
        { char: '登', examples: ['등산(登山)', '등록(登錄)'], reading: '오를 등', meaning: '오르다', strokes: 12 },
        { char: '來', examples: ['미래(未來)', '내일(來日)'], reading: '올 래', meaning: '오다', strokes: 8 },
        { char: '力', examples: ['능력(能力)', '협력(協力)'], reading: '힘 력', meaning: '힘', strokes: 2 },
        { char: '老', examples: ['노인(老人)', '경로(敬老)'], reading: '늙을 로', meaning: '늙다', strokes: 6 },
        { char: '里', examples: ['이정표(里程標)', '천리(千里)'], reading: '마을 리', meaning: '마을', strokes: 7 },
        { char: '林', examples: ['산림(山林)', '밀림(密林)'], reading: '수풀 림', meaning: '수풀', strokes: 8 },
        { char: '立', examples: ['독립(獨立)', '입장(立場)'], reading: '설 립', meaning: '서다', strokes: 5 },
        { char: '每', examples: ['매일(每日)', '매주(每週)'], reading: '매양 매', meaning: '매번', strokes: 7 },
        { char: '面', examples: ['얼굴(面)', '화면(畫面)'], reading: '낯 면', meaning: '얼굴', strokes: 9 },
        { char: '名', examples: ['이름(名)', '명함(名銜)'], reading: '이름 명', meaning: '이름', strokes: 6 },
        { char: '命', examples: ['생명(生命)', '운명(運命)'], reading: '목숨 명', meaning: '목숨', strokes: 8 },
        { char: '文', examples: ['문장(文章)', '문화(文化)'], reading: '글월 문', meaning: '글', strokes: 4 },
        { char: '問', examples: ['질문(質問)', '문제(問題)'], reading: '물을 문', meaning: '묻다', strokes: 11 },
        { char: '物', examples: ['물건(物件)', '동물(動物)'], reading: '만물 물', meaning: '물건', strokes: 8 },
        { char: '方', examples: ['방향(方向)', '방법(方法)'], reading: '모 방', meaning: '방향', strokes: 4 },
        { char: '夫', examples: ['부부(夫婦)', '농부(農夫)'], reading: '지아비 부', meaning: '남편', strokes: 4 },
        { char: '不', examples: ['부정(不正)', '불안(不安)'], reading: '아닐 부', meaning: '아니다', strokes: 4 },
        { char: '事', examples: ['사건(事件)', '사실(事實)'], reading: '일 사', meaning: '일', strokes: 8 },
        { char: '算', examples: ['계산(計算)', '산수(算數)'], reading: '셈할 산', meaning: '계산', strokes: 14 },
        { char: '色', examples: ['색깔(色)', '안색(顔色)'], reading: '빛 색', meaning: '색', strokes: 6 },
        { char: '夕', examples: ['추석(秋夕)', '석양(夕陽)'], reading: '저녁 석', meaning: '저녁', strokes: 3 },
        { char: '姓', examples: ['성묘(省墓)', '성명(姓名)'], reading: '성 성', meaning: '성씨', strokes: 8 },
        { char: '世', examples: ['세계(世界)', '세대(世代)'], reading: '인간 세', meaning: '세상', strokes: 5 },
        { char: '少', examples: ['소년(少年)', '소녀(少女)'], reading: '젊을 소', meaning: '적다', strokes: 4 },
        { char: '所', examples: ['장소(場所)', '주소(住所)'], reading: '바 소', meaning: '곳', strokes: 8 },
        { char: '手', examples: ['악수(握手)', '박수(拍手)'], reading: '손 수', meaning: '손', strokes: 4 },
        { char: '數', examples: ['숫자(數字)', '수학(數學)'], reading: '셀 수', meaning: '수', strokes: 15 },
        { char: '市', examples: ['시장(市場)', '도시(都市)'], reading: '저자 시', meaning: '시장', strokes: 5 },
        { char: '時', examples: ['시간(時間)', '시계(時計)'], reading: '때 시', meaning: '때', strokes: 10 },
        { char: '食', examples: ['식사(食事)', '음식(飮食)'], reading: '밥 식', meaning: '먹다', strokes: 9 },
        { char: '植', examples: ['식물(植物)', '식목일(植木日)'], reading: '심을 식', meaning: '심다', strokes: 12 },
        { char: '心', examples: ['심장(心臟)', '진심(眞心)'], reading: '마음 심', meaning: '마음', strokes: 4 },
        { char: '安', examples: ['안전(安全)', '불안(不安)'], reading: '편안 안', meaning: '편안하다', strokes: 6 },
        { char: '語', examples: ['국어(國語)', '영어(英語)'], reading: '말씀 어', meaning: '말', strokes: 14 },
        { char: '然', examples: ['자연(自然)', '당연(當然)'], reading: '그러할 연', meaning: '그렇다', strokes: 12 },
        { char: '午', examples: ['오전(午前)', '오후(午後)'], reading: '낮 오', meaning: '낮', strokes: 4 },
        { char: '右', examples: ['우측(右側)', '좌우(左右)'], reading: '오른 우', meaning: '오른쪽', strokes: 5 },
        { char: '有', examples: ['소유(所有)', '유무(有無)'], reading: '있을 유', meaning: '있다', strokes: 6 },
        { char: '育', examples: ['교육(敎育)', '체육(體育)'], reading: '기를 육', meaning: '기르다', strokes: 8 },
        { char: '邑', examples: ['읍내(邑內)'], reading: '고을 읍', meaning: '고을', strokes: 7 },
        { char: '入', examples: ['입구(入口)', '입학(入學)'], reading: '들 입', meaning: '들다', strokes: 2 },
        { char: '子', examples: ['자녀(子女)', '제자(弟子)'], reading: '아들 자', meaning: '아들', strokes: 3 },
        { char: '字', examples: ['글자(字)', '한자(漢字)'], reading: '글자 자', meaning: '글자', strokes: 6 },
        { char: '自', examples: ['자신(自身)', '자유(自由)'], reading: '스스로 자', meaning: '스스로', strokes: 6 },
        { char: '場', examples: ['운동장(運動場)', '장소(場所)'], reading: '마당 장', meaning: '마당', strokes: 12 },
        { char: '全', examples: ['전체(全體)', '안전(安全)'], reading: '온전 전', meaning: '온전하다', strokes: 6 },
        { char: '前', examples: ['앞(前)', '오전(午前)'], reading: '앞 전', meaning: '앞', strokes: 9 },
        { char: '電', examples: ['전화(電話)', '전기(電氣)'], reading: '번개 전', meaning: '전기', strokes: 13 },
        { char: '正', examples: ['정직(正直)', '정답(正答)'], reading: '바를 정', meaning: '바르다', strokes: 5 },
        { char: '祖', examples: ['조상(祖上)', '조부모(祖父母)'], reading: '조상 조', meaning: '조상', strokes: 10 },
        { char: '足', examples: ['손발(手足)', '부족(不足)'], reading: '발 족', meaning: '발', strokes: 7 },
        { char: '左', examples: ['좌측(左側)', '좌우(左右)'], reading: '왼 좌', meaning: '왼쪽', strokes: 5 },
        { char: '主', examples: ['주인(主人)', '주인공(主人公)'], reading: '주인 주', meaning: '주인', strokes: 5 },
        { char: '住', examples: ['주소(住所)', '의식주(衣食住)'], reading: '살 주', meaning: '살다', strokes: 7 },
        { char: '重', examples: ['중요(重要)', '체중(體重)'], reading: '무거울 중', meaning: '무겁다', strokes: 9 },
        { char: '地', examples: ['지구(地球)', '지도(地圖)'], reading: '땅 지', meaning: '땅', strokes: 6 },
        { char: '紙', examples: ['휴지(休紙)', '편지지(便紙)'], reading: '종이 지', meaning: '종이', strokes: 10 },
        { char: '直', examples: ['직접(直接)', '직선(直線)'], reading: '곧을 직', meaning: '곧다', strokes: 8 },
        { char: '川', examples: ['하천(河川)', '인천(仁川)'], reading: '내 천', meaning: '내', strokes: 3 },
        { char: '天', examples: ['하늘(天)', '천국(天國)'], reading: '하늘 천', meaning: '하늘', strokes: 4 },
        { char: '草', examples: ['초원(草原)', '잡초(雜草)'], reading: '풀 초', meaning: '풀', strokes: 10 },
        { char: '村', examples: ['농촌(農村)', '어촌(漁村)'], reading: '마을 촌', meaning: '마을', strokes: 7 },
        { char: '秋', examples: ['가을(秋)', '추석(秋夕)'], reading: '가을 추', meaning: '가을', strokes: 9 },
        { char: '春', examples: ['봄(春)', '청춘(靑春)'], reading: '봄 춘', meaning: '봄', strokes: 9 },
        { char: '出', examples: ['출발(出發)', '외출(外出)'], reading: '날 출', meaning: '나가다', strokes: 5 },
        { char: '便', examples: ['편리(便利)', '편지(便紙)'], reading: '편할 편', meaning: '편하다', strokes: 9 },
        { char: '平', examples: ['평화(平和)', '평일(平日)'], reading: '평평할 평', meaning: '평평하다', strokes: 5 },
        { char: '夏', examples: ['여름(夏)', '하계(夏季)'], reading: '여름 하', meaning: '여름', strokes: 10 },
        { char: '漢', examples: ['한자(漢字)', '한강(漢江)'], reading: '한나라 한', meaning: '한나라', strokes: 14 },
        { char: '海', examples: ['바다(海)', '해수욕장(海水浴場)'], reading: '바다 해', meaning: '바다', strokes: 10 },
        { char: '花', examples: ['꽃(花)', '화분(花盆)'], reading: '꽃 화', meaning: '꽃', strokes: 8 },
        { char: '話', examples: ['대화(對話)', '전화(電話)'], reading: '말씀 화', meaning: '말하다', strokes: 13 },
        { char: '活', examples: ['생활(生活)', '활동(活動)'], reading: '살 활', meaning: '살다', strokes: 10 },
        { char: '孝', examples: ['효도(孝道)', '효자(孝子)'], reading: '효도 효', meaning: '효도', strokes: 7 },
        { char: '後', examples: ['뒤(後)', '오후(午後)'], reading: '뒤 후', meaning: '뒤', strokes: 9 },
        { char: '休', examples: ['휴식(休息)', '휴일(休日)'], reading: '쉴 휴', meaning: '쉬다', strokes: 6 }
    ],
    '6급': [
        // 6급 신규 배정한자 75자 (용례 추가됨)
        { char: '各', examples: ['각자(各自)', '각국(各國)'], reading: '각각 각', meaning: '각각', strokes: 6 },
        { char: '角', examples: ['삼각형(三角形)', '각도(角度)'], reading: '뿔 각', meaning: '뿔/모서리', strokes: 7 },
        { char: '界', examples: ['세계(世界)', '경계(境界)'], reading: '지경 계', meaning: '경계', strokes: 9 },
        { char: '計', examples: ['계산(計算)', '계획(計劃)'], reading: '셀 계', meaning: '계산', strokes: 9 },
        { char: '高', examples: ['고속(高速)', '고등(高等)'], reading: '높을 고', meaning: '높다', strokes: 10 },
        { char: '公', examples: ['공공(公共)', '공원(公園)'], reading: '공평할 공', meaning: '공평', strokes: 4 },
        { char: '共', examples: ['공동(共同)', '공통(共通)'], reading: '함께 공', meaning: '함께', strokes: 6 },
        { char: '功', examples: ['성공(成功)', '공로(功勞)'], reading: '공 공', meaning: '공로', strokes: 5 },
        { char: '果', examples: ['결과(結果)', '과실(果實)'], reading: '열매 과', meaning: '열매', strokes: 8 },
        { char: '科', examples: ['과학(科學)', '과목(科目)'], reading: '과목 과', meaning: '과목', strokes: 9 },
        { char: '光', examples: ['영광(榮光)', '광선(光線)'], reading: '빛 광', meaning: '빛', strokes: 6 },
        { char: '球', examples: ['지구(地球)', '야구(野球)'], reading: '공 구', meaning: '공', strokes: 11 },
        { char: '今', examples: ['금년(今年)', '지금(只今)'], reading: '이제 금', meaning: '지금', strokes: 4 },
        { char: '急', examples: ['급행(急行)', '긴급(緊急)'], reading: '급할 급', meaning: '급하다', strokes: 9 },
        { char: '短', examples: ['단점(短點)', '단축(短縮)'], reading: '짧을 단', meaning: '짧다', strokes: 12 },
        { char: '堂', examples: ['식당(食堂)', '강당(講堂)'], reading: '집 당', meaning: '집/당', strokes: 11 },
        { char: '代', examples: ['대표(代表)', '시대(時代)'], reading: '대신할 대', meaning: '대신', strokes: 5 },
        { char: '對', examples: ['반대(反對)', '절대(絶對)'], reading: '대할 대', meaning: '대하다', strokes: 14 },
        { char: '圖', examples: ['지도(地圖)', '도서관(圖書館)'], reading: '그림 도', meaning: '그림', strokes: 14 },
        { char: '讀', examples: ['독서(讀書)', '독자(讀者)'], reading: '읽을 독', meaning: '읽다', strokes: 22 },
        { char: '童', examples: ['아동(兒童)', '동화(童話)'], reading: '아이 동', meaning: '아이', strokes: 12 },
        { char: '等', examples: ['등급(等級)', '평등(平等)'], reading: '무리 등', meaning: '등급', strokes: 12 },
        { char: '樂', examples: ['음악(音樂)', '기악(器樂)'], reading: '즐길 락', meaning: '즐기다', strokes: 15 },
        { char: '利', examples: ['이익(利益)', '편리(便利)'], reading: '이로울 리', meaning: '이롭다', strokes: 7 },
        { char: '理', examples: ['이해(理解)', '이유(理由)'], reading: '다스릴 리', meaning: '이치', strokes: 11 },
        { char: '明', examples: ['설명(說明)', '투명(透明)'], reading: '밝을 명', meaning: '밝다', strokes: 8 },
        { char: '聞', examples: ['신문(新聞)', '소문(所聞)'], reading: '들을 문', meaning: '듣다', strokes: 14 },
        { char: '半', examples: ['절반(折半)', '반도(半島)'], reading: '반 반', meaning: '반', strokes: 5 },
        { char: '反', examples: ['반대(反對)', '위반(違反)'], reading: '돌이킬 반', meaning: '반대', strokes: 4 },
        { char: '班', examples: ['반장(班長)', '오전반(午前班)'], reading: '나눌 반', meaning: '반/조', strokes: 10 },
        { char: '發', examples: ['출발(出發)', '발전(發展)'], reading: '필 발', meaning: '발하다', strokes: 12 },
        { char: '放', examples: ['방학(放學)', '방송(放送)'], reading: '놓을 방', meaning: '놓다', strokes: 8 },
        { char: '部', examples: ['부분(部分)', '본부(本部)'], reading: '떼 부', meaning: '부분', strokes: 11 },
        { char: '分', examples: ['분리(分離)', '구분(區分)'], reading: '나눌 분', meaning: '나누다', strokes: 4 },
        { char: '社', examples: ['사회(社會)', '회사(會社)'], reading: '모일 사', meaning: '모임', strokes: 8 },
        { char: '書', examples: ['도서(圖書)', '서점(書店)'], reading: '글 서', meaning: '글', strokes: 10 },
        { char: '線', examples: ['직선(直線)', '노선(路線)'], reading: '줄 선', meaning: '선', strokes: 15 },
        { char: '雪', examples: ['설경(雪景)', '폭설(暴雪)'], reading: '눈 설', meaning: '눈', strokes: 11 },
        { char: '成', examples: ['성공(成功)', '성장(成長)'], reading: '이룰 성', meaning: '이루다', strokes: 7 },
        { char: '省', examples: ['반성(反省)', '생략(省略)'], reading: '살필 성', meaning: '살피다', strokes: 9 },
        { char: '消', examples: ['소화(消化)', '소방(消防)'], reading: '사라질 소', meaning: '사라지다', strokes: 10 },
        { char: '術', examples: ['미술(美術)', '기술(技術)'], reading: '재주 술', meaning: '기술', strokes: 11 },
        { char: '始', examples: ['시작(始作)', '시조(始祖)'], reading: '비로소 시', meaning: '시작', strokes: 8 },
        { char: '信', examples: ['신호(信號)', '신용(信用)'], reading: '믿을 신', meaning: '믿다', strokes: 9 },
        { char: '新', examples: ['신문(新聞)', '신규(新規)'], reading: '새 신', meaning: '새롭다', strokes: 13 },
        { char: '神', examples: ['정신(精神)', '귀신(鬼神)'], reading: '귀신 신', meaning: '신', strokes: 10 },
        { char: '身', examples: ['신체(身體)', '자신(自身)'], reading: '몸 신', meaning: '몸', strokes: 7 },
        { char: '弱', examples: ['약자(弱者)', '허약(虛弱)'], reading: '약할 약', meaning: '약하다', strokes: 10 },
        { char: '藥', examples: ['약국(藥局)', '농약(農藥)'], reading: '약 약', meaning: '약', strokes: 19 },
        { char: '業', examples: ['직업(職業)', '수업(授業)'], reading: '업 업', meaning: '업', strokes: 13 },
        { char: '勇', examples: ['용기(勇氣)', '용감(勇敢)'], reading: '날랠 용', meaning: '용감', strokes: 9 },
        { char: '用', examples: ['사용(使用)', '용도(用途)'], reading: '쓸 용', meaning: '쓰다', strokes: 5 },
        { char: '運', examples: ['운동(運動)', '운전(運轉)'], reading: '옮길 운', meaning: '옮기다', strokes: 12 },
        { char: '音', examples: ['음악(音樂)', '발음(發音)'], reading: '소리 음', meaning: '소리', strokes: 9 },
        { char: '飮', examples: ['음료(飮料)', '음식(飮食)'], reading: '마실 음', meaning: '마시다', strokes: 12 },
        { char: '意', examples: ['의견(意見)', '의미(意味)'], reading: '뜻 의', meaning: '뜻', strokes: 13 },
        { char: '作', examples: ['작가(作家)', '작품(作品)'], reading: '지을 작', meaning: '만들다', strokes: 7 },
        { char: '昨', examples: ['작년(昨年)', '작일(昨日)'], reading: '어제 작', meaning: '어제', strokes: 9 },
        { char: '才', examples: ['재능(才能)', '천재(天才)'], reading: '재주 재', meaning: '재주', strokes: 3 },
        { char: '戰', examples: ['전쟁(戰爭)', '작전(作戰)'], reading: '싸울 전', meaning: '싸움', strokes: 16 },
        { char: '庭', examples: ['정원(庭園)', '가정(家庭)'], reading: '뜰 정', meaning: '뜰', strokes: 10 },
        { char: '第', examples: ['제일(第一)', '제이(第二)'], reading: '차례 제', meaning: '차례', strokes: 11 },
        { char: '題', examples: ['숙제(宿題)', '문제(問題)'], reading: '제목 제', meaning: '제목', strokes: 18 },
        { char: '注', examples: ['주의(注意)', '주목(注目)'], reading: '부을 주', meaning: '붓다', strokes: 8 },
        { char: '集', examples: ['집합(集合)', '수집(收集)'], reading: '모을 집', meaning: '모으다', strokes: 12 },
        { char: '窓', examples: ['창문(窓門)', '동창(同窓)'], reading: '창 창', meaning: '창문', strokes: 11 },
        { char: '淸', examples: ['청소(淸掃)', '청결(淸潔)'], reading: '맑을 청', meaning: '맑다', strokes: 11 },
        { char: '體', examples: ['신체(身體)', '체육(體育)'], reading: '몸 체', meaning: '몸', strokes: 23 },
        { char: '表', examples: ['표정(表情)', '발표(發表)'], reading: '겉 표', meaning: '겉', strokes: 8 },
        { char: '風', examples: ['풍경(風景)', '태풍(颱風)'], reading: '바람 풍', meaning: '바람', strokes: 9 },
        { char: '幸', examples: ['행복(幸福)', '불행(不幸)'], reading: '다행 행', meaning: '다행', strokes: 8 },
        { char: '現', examples: ['현재(現在)', '현실(現實)'], reading: '나타날 현', meaning: '나타나다', strokes: 11 },
        { char: '形', examples: ['인형(人形)', '형태(形態)'], reading: '모양 형', meaning: '모양', strokes: 7 },
        { char: '和', examples: ['평화(平和)', '조화(調和)'], reading: '화할 화', meaning: '화목', strokes: 8 },
        { char: '會', examples: ['회의(會議)', '국회(國會)'], reading: '모일 회', meaning: '모이다', strokes: 13 }
    ],
    '5급': [
        // 5급 신규 배정한자 75자 (용례 추가됨)
        { char: '加', examples: ['증가(增加)', '가입(加入)'], reading: '더할 가', meaning: '더하다', strokes: 5 },
        { char: '可', examples: ['가능(可能)', '허가(許可)'], reading: '옳을 가', meaning: '옳다', strokes: 5 },
        { char: '改', examples: ['개혁(改革)', '개정(改正)'], reading: '고칠 개', meaning: '고치다', strokes: 7 },
        { char: '去', examples: ['과거(過去)', '제거(除去)'], reading: '갈 거', meaning: '가다', strokes: 5 },
        { char: '擧', examples: ['선거(選擧)', '거수(擧手)'], reading: '들 거', meaning: '들다', strokes: 18 },
        { char: '件', examples: ['사건(事件)', '물건(物件)'], reading: '물건 건', meaning: '물건', strokes: 6 },
        { char: '健', examples: ['건강(健康)', '건전(健全)'], reading: '굳셀 건', meaning: '건강하다', strokes: 11 },
        { char: '建', examples: ['건설(建設)', '건국(建國)'], reading: '세울 건', meaning: '세우다', strokes: 9 },
        { char: '景', examples: ['경치(景致)', '풍경(風景)'], reading: '볕 경', meaning: '경치', strokes: 12 },
        { char: '競', examples: ['경쟁(競爭)', '경주(競走)'], reading: '다툴 경', meaning: '경쟁', strokes: 20 },
        { char: '輕', examples: ['경량(輕量)', '경시(輕視)'], reading: '가벼울 경', meaning: '가볍다', strokes: 14 },
        { char: '固', examples: ['고체(固體)', '고정(固定)'], reading: '굳을 고', meaning: '굳다', strokes: 8 },
        { char: '考', examples: ['사고(思考)', '참고(參考)'], reading: '생각할 고', meaning: '생각하다', strokes: 6 },
        { char: '曲', examples: ['곡선(曲線)', '작곡(作曲)'], reading: '굽을 곡', meaning: '굽다', strokes: 6 },
        { char: '橋', examples: ['육교(陸橋)', '대교(大橋)'], reading: '다리 교', meaning: '다리', strokes: 16 },
        { char: '救', examples: ['구조(救助)', '구급(救急)'], reading: '구원할 구', meaning: '구하다', strokes: 11 },
        { char: '貴', examples: ['귀족(貴族)', '귀빈(貴賓)'], reading: '귀할 귀', meaning: '귀하다', strokes: 12 },
        { char: '規', examples: ['규칙(規則)', '규범(規範)'], reading: '법 규', meaning: '규칙', strokes: 11 },
        { char: '給', examples: ['공급(供給)', '월급(月給)'], reading: '줄 급', meaning: '주다', strokes: 12 },
        { char: '技', examples: ['기술(技術)', '특기(特技)'], reading: '재주 기', meaning: '기술', strokes: 8 },
        { char: '期', examples: ['기간(期間)', '기대(期待)'], reading: '기약할 기', meaning: '기간', strokes: 12 },
        { char: '汽', examples: ['기차(汽車)', '기선(汽船)'], reading: '물끓는김 기', meaning: '김', strokes: 7 },
        { char: '吉', examples: ['길일(吉日)', '불길(不吉)'], reading: '길할 길', meaning: '길하다', strokes: 6 },
        { char: '壇', examples: ['강단(講壇)', '제단(祭壇)'], reading: '단 단', meaning: '단', strokes: 16 },
        { char: '談', examples: ['회담(會談)', '상담(相談)'], reading: '말씀 담', meaning: '말하다', strokes: 15 },
        { char: '島', examples: ['독도(獨島)', '무인도(無人島)'], reading: '섬 도', meaning: '섬', strokes: 10 },
        { char: '都', examples: ['수도(首都)', '도시(都市)'], reading: '도읍 도', meaning: '도시', strokes: 12 },
        { char: '落', examples: ['탈락(脫落)', '낙엽(落葉)'], reading: '떨어질 락', meaning: '떨어지다', strokes: 13 },
        { char: '冷', examples: ['냉방(冷房)', '냉정(冷靜)'], reading: '찰 랭', meaning: '차다', strokes: 7 },
        { char: '量', examples: ['분량(分量)', '수량(數量)'], reading: '헤아릴 량', meaning: '양', strokes: 12 },
        { char: '令', examples: ['명령(命令)', '법령(法令)'], reading: '하여금 령', meaning: '명령', strokes: 5 },
        { char: '領', examples: ['대통령(大統領)', '영토(領土)'], reading: '거느릴 령', meaning: '거느리다', strokes: 14 },
        { char: '料', examples: ['요리(料理)', '재료(材料)'], reading: '헤아릴 료', meaning: '재료', strokes: 10 },
        { char: '馬', examples: ['승마(乘馬)', '마차(馬車)'], reading: '말 마', meaning: '말', strokes: 10 },
        { char: '末', examples: ['연말(年末)', '주말(週末)'], reading: '끝 말', meaning: '끝', strokes: 5 },
        { char: '亡', examples: ['사망(死亡)', '망명(亡命)'], reading: '망할 망', meaning: '망하다', strokes: 3 },
        { char: '買', examples: ['구매(購買)', '매수(買收)'], reading: '살 매', meaning: '사다', strokes: 12 },
        { char: '賣', examples: ['판매(販賣)', '매매(賣買)'], reading: '팔 매', meaning: '팔다', strokes: 15 },
        { char: '無', examples: ['무시(無視)', '무리(無理)'], reading: '없을 무', meaning: '없다', strokes: 12 },
        { char: '倍', examples: ['배수(倍數)', '두배(二倍)'], reading: '곱 배', meaning: '배', strokes: 10 },
        { char: '比', examples: ['비교(比較)', '비례(比例)'], reading: '견줄 비', meaning: '비교', strokes: 4 },
        { char: '費', examples: ['식비(食費)', '회비(會費)'], reading: '쓸 비', meaning: '비용', strokes: 12 },
        { char: '鼻', examples: ['이비인후과(耳鼻咽喉科)', '비염(鼻炎)'], reading: '코 비', meaning: '코', strokes: 14 },
        { char: '氷', examples: ['빙수(氷水)', '결빙(結氷)'], reading: '얼음 빙', meaning: '얼음', strokes: 5 },
        { char: '寫', examples: ['사진(寫眞)', '복사(複寫)'], reading: '베낄 사', meaning: '베끼다', strokes: 15 },
        { char: '思', examples: ['사고(思考)', '의사(意思)'], reading: '생각 사', meaning: '생각', strokes: 9 },
        { char: '査', examples: ['검사(檢査)', '조사(調査)'], reading: '조사할 사', meaning: '조사', strokes: 9 },
        { char: '賞', examples: ['상장(賞狀)', '감상(鑑賞)'], reading: '상줄 상', meaning: '상', strokes: 15 },
        { char: '序', examples: ['순서(順序)', '질서(秩序)'], reading: '차례 서', meaning: '차례', strokes: 7 },
        { char: '善', examples: ['선행(善行)', '최선(最善)'], reading: '착할 선', meaning: '착하다', strokes: 12 },
        { char: '船', examples: ['선장(船長)', '여객선(旅客船)'], reading: '배 선', meaning: '배', strokes: 11 },
        { char: '選', examples: ['선거(選擧)', '선수(選手)'], reading: '가릴 선', meaning: '선택', strokes: 15 },
        { char: '示', examples: ['표시(表示)', '시범(示範)'], reading: '보일 시', meaning: '보이다', strokes: 5 },
        { char: '案', examples: ['안내(案內)', '제안(提案)'], reading: '책상 안', meaning: '안건', strokes: 10 },
        { char: '漁', examples: ['어부(漁夫)', '어촌(漁村)'], reading: '고기잡을 어', meaning: '어업', strokes: 14 },
        { char: '魚', examples: ['어류(魚類)', '금붕어(金鮒魚)'], reading: '물고기 어', meaning: '물고기', strokes: 11 },
        { char: '億', examples: ['억만장자(億萬長者)', '일억(一億)'], reading: '억 억', meaning: '억', strokes: 15 },
        { char: '熱', examples: ['열기(熱氣)', '열정(熱情)'], reading: '더울 열', meaning: '열', strokes: 15 },
        { char: '葉', examples: ['낙엽(落葉)', '엽서(葉書)'], reading: '잎 엽', meaning: '잎', strokes: 13 },
        { char: '屋', examples: ['가옥(家屋)', '옥상(屋上)'], reading: '집 옥', meaning: '집', strokes: 9 },
        { char: '完', examples: ['완성(完成)', '완료(完了)'], reading: '완전할 완', meaning: '완전', strokes: 7 },
        { char: '浴', examples: ['목욕(沐浴)', '해수욕(海水浴)'], reading: '목욕할 욕', meaning: '목욕', strokes: 10 },
        { char: '牛', examples: ['우유(牛乳)', '한우(韓牛)'], reading: '소 우', meaning: '소', strokes: 4 },
        { char: '雄', examples: ['영웅(英雄)', '웅변(雄辯)'], reading: '수컷 웅', meaning: '수컷', strokes: 12 },
        { char: '原', examples: ['원인(原因)', '원리(原理)'], reading: '언덕 원', meaning: '원래', strokes: 10 },
        { char: '院', examples: ['병원(病院)', '학원(學院)'], reading: '집 원', meaning: '원', strokes: 10 },
        { char: '願', examples: ['소원(所願)', '원서(願書)'], reading: '원할 원', meaning: '원하다', strokes: 19 },
        { char: '位', examples: ['위치(位置)', '순위(順位)'], reading: '자리 위', meaning: '자리', strokes: 7 },
        { char: '耳', examples: ['이비인후과(耳鼻咽喉科)', '이목(耳目)'], reading: '귀 이', meaning: '귀', strokes: 6 },
        { char: '因', examples: ['원인(原因)', '요인(要因)'], reading: '인할 인', meaning: '인하다', strokes: 6 },
        { char: '再', examples: ['재발(再發)', '재생(再生)'], reading: '두 재', meaning: '다시', strokes: 6 },
        { char: '災', examples: ['화재(火災)', '재해(災害)'], reading: '재앙 재', meaning: '재앙', strokes: 7 },
        { char: '爭', examples: ['전쟁(戰爭)', '경쟁(競爭)'], reading: '다툴 쟁', meaning: '다투다', strokes: 8 },
        { char: '停', examples: ['정지(停止)', '정전(停電)'], reading: '머무를 정', meaning: '머무르다', strokes: 11 },
        { char: '操', examples: ['체조(體操)', '조종(操縱)'], reading: '잡을 조', meaning: '잡다', strokes: 16 },
        { char: '終', examples: ['종료(終了)', '종점(終點)'], reading: '마칠 종', meaning: '마치다', strokes: 11 },
        { char: '罪', examples: ['범죄(犯罪)', '유죄(有罪)'], reading: '허물 죄', meaning: '죄', strokes: 13 },
        { char: '止', examples: ['중지(中止)', '금지(禁止)'], reading: '그칠 지', meaning: '그치다', strokes: 4 },
        { char: '唱', examples: ['합창(合唱)', '독창(獨唱)'], reading: '부를 창', meaning: '부르다', strokes: 11 },
        { char: '鐵', examples: ['지하철(地下鐵)', '철도(鐵道)'], reading: '쇠 철', meaning: '쇠', strokes: 21 },
        { char: '初', examples: ['초기(初期)', '초보(初步)'], reading: '처음 초', meaning: '처음', strokes: 7 },
        { char: '最', examples: ['최고(最高)', '최선(最善)'], reading: '가장 최', meaning: '가장', strokes: 12 },
        { char: '祝', examples: ['축하(祝賀)', '축복(祝福)'], reading: '빌 축', meaning: '빌다', strokes: 10 },
        { char: '致', examples: ['일치(一致)', '납치(拉致)'], reading: '이를 치', meaning: '이르다', strokes: 10 },
        { char: '則', examples: ['규칙(規則)', '원칙(原則)'], reading: '법칙 칙', meaning: '법칙', strokes: 9 },
        { char: '他', examples: ['타인(他人)', '기타(其他)'], reading: '다를 타', meaning: '다르다', strokes: 5 },
        { char: '打', examples: ['타자(打者)', '구타(毆打)'], reading: '칠 타', meaning: '치다', strokes: 6 },
        { char: '卓', examples: ['탁구(卓球)', '식탁(食卓)'], reading: '높을 탁', meaning: '높다', strokes: 8 },
        { char: '炭', examples: ['석탄(石炭)', '연탄(煉炭)'], reading: '숯 탄', meaning: '숯', strokes: 9 },
        { char: '板', examples: ['칠판(漆板)', '간판(看板)'], reading: '널 판', meaning: '널빤지', strokes: 8 },
        { char: '敗', examples: ['실패(失敗)', '패배(敗北)'], reading: '패할 패', meaning: '패하다', strokes: 11 },
        { char: '河', examples: ['하천(河川)', '운하(運河)'], reading: '물 하', meaning: '강', strokes: 8 },
        { char: '寒', examples: ['한파(寒波)', '오한(惡寒)'], reading: '찰 한', meaning: '차다', strokes: 12 },
        { char: '許', examples: ['허가(許可)', '허락(許諾)'], reading: '허락할 허', meaning: '허락', strokes: 11 },
        { char: '湖', examples: ['호수(湖水)', '백조의 호수(白鳥-湖水)'], reading: '호수 호', meaning: '호수', strokes: 12 },
        { char: '患', examples: ['환자(患者)', '질환(疾患)'], reading: '근심 환', meaning: '근심', strokes: 11 },
        { char: '黃', examples: ['황금(黃金)', '황사(黃砂)'], reading: '누를 황', meaning: '누렇다', strokes: 12 },
        { char: '黑', examples: ['흑백(黑白)', '흑인(黑人)'], reading: '검을 흑', meaning: '검다', strokes: 12 }
    ],
    '준4급': [
        // 준4급 배정한자 (한국어문회 기준 신규 배정)
        // ㄱ
        { char: '假', examples: ['가면(假面)', '가정(假定)'], reading: '거짓 가', meaning: '거짓', strokes: 11 },
        { char: '街', examples: ['거리(街)', '가로수(街路樹)'], reading: '거리 가', meaning: '거리', strokes: 12 },
        { char: '減', examples: ['감소(減少)', '감면(減免)'], reading: '덜 감', meaning: '줄이다', strokes: 13 },
        { char: '監', examples: ['감독(監督)', '감시(監視)'], reading: '볼 감', meaning: '보다', strokes: 15 },
        { char: '講', examples: ['강의(講義)', '강연(講演)'], reading: '익힐 강', meaning: '외우다', strokes: 17 },
        { char: '康', examples: ['건강(健康)', '평강(平康)'], reading: '편안 강', meaning: '편안하다', strokes: 11 },
        { char: '個', examples: ['개인(個人)', '개별(個別)'], reading: '낱 개', meaning: '낱', strokes: 10 },
        { char: '檢', examples: ['검사(檢査)', '검토(檢討)'], reading: '검사할 검', meaning: '검사하다', strokes: 17 },
        { char: '潔', examples: ['청결(淸潔)', '결백(潔白)'], reading: '깨끗할 결', meaning: '깨끗하다', strokes: 16 },
        { char: '缺', examples: ['결석(缺席)', '결점(缺點)'], reading: '이지러질 결', meaning: '이지러지다', strokes: 10 },
        { char: '境', examples: ['환경(環境)', '국경(國境)'], reading: '지경 경', meaning: '지경', strokes: 14 },
        { char: '經', examples: ['경제(經濟)', '경험(經驗)'], reading: '지날 경', meaning: '지나다', strokes: 13 },
        { char: '警', examples: ['경찰(警察)', '경고(警告)'], reading: '경계할 경', meaning: '경계하다', strokes: 20 },
        { char: '慶', examples: ['경사(慶事)', '축경(祝慶)'], reading: '경사 경', meaning: '경사', strokes: 15 },
        { char: '係', examples: ['관계(關係)', '연계(連係)'], reading: '맬 계', meaning: '매다', strokes: 9 },
        { char: '故', examples: ['고향(故鄕)', '사고(事故)'], reading: '연고 고', meaning: '연고', strokes: 9 },
        { char: '官', examples: ['관리(官吏)', '장관(長官)'], reading: '벼슬 관', meaning: '벼슬', strokes: 8 },
        { char: '求', examples: ['요구(要求)', '구인(求人)'], reading: '구할 구', meaning: '구하다', strokes: 7 },
        { char: '句', examples: ['문구(文句)', '어구(語句)'], reading: '글귀 구', meaning: '글귀', strokes: 5 },
        { char: '究', examples: ['연구(硏究)', '탐구(探究)'], reading: '연구할 구', meaning: '연구하다', strokes: 7 },
        { char: '宮', examples: ['궁궐(宮闕)', '왕궁(王宮)'], reading: '집 궁', meaning: '집', strokes: 10 },
        { char: '權', examples: ['권리(權利)', '권력(權力)'], reading: '권세 권', meaning: '권세', strokes: 22 },
        { char: '極', examples: ['북극(北極)', '적극(積極)'], reading: '다할 극', meaning: '다하다', strokes: 13 },
        { char: '禁', examples: ['금지(禁止)', '금연(禁煙)'], reading: '금할 금', meaning: '금하다', strokes: 13 },
        { char: '器', examples: ['그릇(器)', '악기(樂器)'], reading: '그릇 기', meaning: '그릇', strokes: 16 },
        { char: '起', examples: ['기상(起床)', '기원(起源)'], reading: '일어날 기', meaning: '일어나다', strokes: 10 },
        // ㄴ
        { char: '暖', examples: ['난방(暖房)', '온난(溫暖)'], reading: '따뜻할 난', meaning: '따뜻하다', strokes: 13 },
        { char: '難', examples: ['곤란(困難)', '재난(災難)'], reading: '어려울 난', meaning: '어렵다', strokes: 19 },
        { char: '怒', examples: ['분노(憤怒)', '희로애락(喜怒哀樂)'], reading: '성낼 노', meaning: '성내다', strokes: 9 },
        { char: '努', examples: ['노력(努力)'], reading: '힘쓸 노', meaning: '힘쓰다', strokes: 7 },
        // ㄷ
        { char: '斷', examples: ['결단(決斷)', '차단(遮斷)'], reading: '끊을 단', meaning: '끊다', strokes: 18 },
        { char: '單', examples: ['단순(單純)', '간단(簡單)'], reading: '홑 단', meaning: '홑', strokes: 12 },
        { char: '檀', examples: ['단군(檀君)', '박달나무(檀)'], reading: '박달나무 단', meaning: '박달나무', strokes: 17 },
        { char: '端', examples: ['첨단(尖端)', '단정(端正)'], reading: '끝 단', meaning: '끝', strokes: 14 },
        { char: '達', examples: ['달성(達成)', '배달(配達)'], reading: '통달할 달', meaning: '통달하다', strokes: 13 },
        { char: '擔', examples: ['담당(擔當)', '부담(負擔)'], reading: '멜 담', meaning: '메다', strokes: 16 },
        { char: '黨', examples: ['정당(政黨)', '여당(與黨)'], reading: '무리 당', meaning: '무리', strokes: 20 },
        { char: '帶', examples: ['휴대(携帶)', '지대(地帶)'], reading: '띠 대', meaning: '띠', strokes: 11 },
        { char: '隊', examples: ['군대(軍隊)', '부대(部隊)'], reading: '무리 대', meaning: '무리', strokes: 12 },
        { char: '導', examples: ['지도(指導)', '유도(誘導)'], reading: '이끌 도', meaning: '이끌다', strokes: 16 },
        { char: '毒', examples: ['독약(毒藥)', '중독(中毒)'], reading: '독 독', meaning: '독', strokes: 9 },
        { char: '督', examples: ['감독(監督)', '총독(總督)'], reading: '감독할 독', meaning: '감독하다', strokes: 13 },
        { char: '銅', examples: ['청동(靑銅)', '동메달(銅medal)'], reading: '구리 동', meaning: '구리', strokes: 14 },
        { char: '斗', examples: ['북두칠성(北斗七星)'], reading: '말 두', meaning: '말', strokes: 4 },
        { char: '豆', examples: ['두유(豆乳)', '대두(大豆)'], reading: '콩 두', meaning: '콩', strokes: 7 },
        { char: '得', examples: ['득실(得失)', '설득(說得)'], reading: '얻을 득', meaning: '얻다', strokes: 11 },
        { char: '燈', examples: ['전등(電燈)', '가로등(街路燈)'], reading: '등 등', meaning: '등잔', strokes: 16 },
        // ㄹ
        { char: '羅', examples: ['나열(羅列)', '신라(新羅)'], reading: '벌릴 라', meaning: '벌리다', strokes: 19 },
        { char: '兩', examples: ['양측(兩側)', '양면(兩面)'], reading: '두 량', meaning: '둘', strokes: 8 },
        { char: '麗', examples: ['화려(華麗)', '수려(秀麗)'], reading: '고울 려', meaning: '곱다', strokes: 19 },
        { char: '連', examples: ['연결(連結)', '연속(連續)'], reading: '잇닿을 련', meaning: '잇닿다', strokes: 11 },
        { char: '列', examples: ['나열(羅列)', '행렬(行列)'], reading: '벌릴 렬', meaning: '벌리다', strokes: 6 },
        { char: '錄', examples: ['기록(記錄)', '등록(登錄)'], reading: '기록할 록', meaning: '기록하다', strokes: 16 },
        { char: '論', examples: ['의논(議論)', '토론(討論)'], reading: '논할 론', meaning: '논하다', strokes: 15 },
        { char: '留', examples: ['유학(留學)', '체류(滯留)'], reading: '머무를 류', meaning: '머무르다', strokes: 10 },
        { char: '律', examples: ['법률(法律)', '규율(規律)'], reading: '법 률', meaning: '법', strokes: 9 },
        // ㅁ
        { char: '滿', examples: ['만족(滿足)', '미만(未滿)'], reading: '찰 만', meaning: '차다', strokes: 14 },
        { char: '脈', examples: ['맥박(脈搏)', '산맥(山脈)'], reading: '줄기 맥', meaning: '줄기', strokes: 10 },
        { char: '毛', examples: ['모발(毛髮)', '양모(羊毛)'], reading: '털 모', meaning: '털', strokes: 4 },
        { char: '牧', examples: ['목장(牧場)', '목사(牧師)'], reading: '칠 목', meaning: '치다', strokes: 8 },
        { char: '務', examples: ['의무(義務)', '업무(業務)'], reading: '힘쓸 무', meaning: '힘쓰다', strokes: 11 },
        { char: '武', examples: ['무기(武器)', '무력(武力)'], reading: '호반 무', meaning: '호반', strokes: 8 },
        { char: '未', examples: ['미래(未來)', '미식(美食)'], reading: '아닐 미', meaning: '아니다', strokes: 5 },
        { char: '味', examples: ['취미(趣味)', '의미(意味)'], reading: '맛 미', meaning: '맛', strokes: 8 },
        { char: '密', examples: ['비밀(秘密)', '밀접(密接)'], reading: '빽빽할 밀', meaning: '빽빽하다', strokes: 11 },
        // ㅂ
        { char: '博', examples: ['박사(博士)', '박물관(博物館)'], reading: '넓을 박', meaning: '넓다', strokes: 12 },
        { char: '防', examples: ['예방(豫防)', '국방(國防)'], reading: '막을 방', meaning: '막다', strokes: 7 },
        { char: '房', examples: ['난방(暖房)', '주방(廚房)'], reading: '방 방', meaning: '방', strokes: 8 },
        { char: '訪', examples: ['방문(訪問)', '탐방(探訪)'], reading: '찾을 방', meaning: '찾다', strokes: 11 },
        { char: '拜', examples: ['예배(禮拜)', '세배(歲拜)'], reading: '절 배', meaning: '절', strokes: 9 },
        { char: '背', examples: ['배경(背景)', '배반(背叛)'], reading: '등 배', meaning: '등', strokes: 9 },
        { char: '配', examples: ['분배(分配)', '배달(配達)'], reading: '나눌 배', meaning: '나누다', strokes: 10 },
        { char: '罰', examples: ['처벌(處罰)', '벌금(罰金)'], reading: '벌할 벌', meaning: '벌하다', strokes: 14 },
        { char: '伐', examples: ['토벌(討伐)', '벌목(伐木)'], reading: '칠 벌', meaning: '치다', strokes: 6 },
        { char: '壁', examples: ['벽돌(壁돌)', '장벽(障壁)'], reading: '벽 벽', meaning: '벽', strokes: 16 },
        { char: '邊', examples: ['주변(周邊)', '해변(海邊)'], reading: '가 변', meaning: '가', strokes: 19 },
        { char: '保', examples: ['보호(保護)', '보장(保障)'], reading: '지킬 보', meaning: '지키다', strokes: 9 },
        { char: '步', examples: ['도보(徒步)', '산보(散步)'], reading: '걸음 보', meaning: '걸음', strokes: 7 },
        { char: '報', examples: ['보고(報告)', '정보(情報)'], reading: '알릴 보', meaning: '알리다', strokes: 12 },
        { char: '寶', examples: ['보물(寶物)', '국보(國寶)'], reading: '보배 보', meaning: '보배', strokes: 20 },
        { char: '復', examples: ['회복(回復)', '부활(復活)'], reading: '회복할 복', meaning: '회복하다', strokes: 12 },
        { char: '府', examples: ['정부(政府)'], reading: '마을 부', meaning: '마을', strokes: 8 },
        { char: '富', examples: ['부자(富者)', '풍부(豐富)'], reading: '부자 부', meaning: '부자', strokes: 12 },
        { char: '副', examples: ['부사장(副社長)', '부통령(副統領)'], reading: '버금 부', meaning: '버금', strokes: 11 },
        { char: '婦', examples: ['주부(主婦)', '부인(婦人)'], reading: '며느리 부', meaning: '며느리', strokes: 11 },
        { char: '佛', examples: ['불교(佛敎)', '석가모니불(釋迦牟尼佛)'], reading: '부처 불', meaning: '부처', strokes: 7 },
        { char: '飛', examples: ['비행기(飛行機)', '비상(飛翔)'], reading: '날 비', meaning: '날다', strokes: 9 },
        { char: '備', examples: ['준비(準備)', '대비(對備)'], reading: '갖출 비', meaning: '갖추다', strokes: 12 },
        { char: '非', examples: ['비상(非常)', '시비(是非)'], reading: '아닐 비', meaning: '아니다', strokes: 8 },
        { char: '悲', examples: ['비관(悲觀)', '자비(慈悲)'], reading: '슬플 비', meaning: '슬프다', strokes: 12 },
        { char: '貧', examples: ['빈곤(貧困)', '빈혈(貧血)'], reading: '가난할 빈', meaning: '가난하다', strokes: 11 },
        // ㅅ
        { char: '寺', examples: ['절(寺)', '불국사(佛國寺)'], reading: '절 사', meaning: '절', strokes: 6 },
        { char: '師', examples: ['교사(敎師)', '의사(醫師)'], reading: '스승 사', meaning: '스승', strokes: 10 },
        { char: '謝', examples: ['감사(感謝)', '사과(謝과)'], reading: '사례할 사', meaning: '사례하다', strokes: 17 },
        { char: '舍', examples: ['기숙사(寄宿舍)', '축사(畜舍)'], reading: '집 사', meaning: '집', strokes: 8 },
        { char: '殺', examples: ['살인(殺人)', '자살(自殺)'], reading: '죽일 살', meaning: '죽이다', strokes: 10 },
        { char: '常', examples: ['항상(恒常)', '정상(正常)'], reading: '항상 상', meaning: '항상', strokes: 11 },
        { char: '床', examples: ['침상(寢床)', '온상(溫床)'], reading: '평상 상', meaning: '평상', strokes: 7 },
        { char: '想', examples: ['상상(想像)', '예상(豫想)'], reading: '생각 상', meaning: '생각', strokes: 13 },
        { char: '狀', examples: ['상태(狀態)', '상황(狀況)'], reading: '형상 상', meaning: '형상', strokes: 8 },
        { char: '設', examples: ['건설(建設)', '설계(設計)'], reading: '베풀 설', meaning: '베풀다', strokes: 11 },
        { char: '誠', examples: ['정성(精誠)', '성실(誠實)'], reading: '정성 성', meaning: '정성', strokes: 13 },
        { char: '聲', examples: ['음성(音聲)', '명성(名聲)'], reading: '소리 성', meaning: '소리', strokes: 17 },
        { char: '盛', examples: ['성대(盛大)', '전성기(全盛期)'], reading: '성할 성', meaning: '성하다', strokes: 11 },
        { char: '聖', examples: ['성경(聖經)', '신성(神聖)'], reading: '성인 성', meaning: '성인', strokes: 13 },
        { char: '城', examples: ['성곽(城郭)', '산성(山城)'], reading: '재 성', meaning: '재', strokes: 9 },
        { char: '星', examples: ['별(星)', '위성(衛星)'], reading: '별 성', meaning: '별', strokes: 9 },
        { char: '勢', examples: ['세력(勢力)', '형세(形勢)'], reading: '기세 세', meaning: '기세', strokes: 13 },
        { char: '稅', examples: ['세금(稅金)', '면세(免稅)'], reading: '세금 세', meaning: '세금', strokes: 12 },
        { char: '細', examples: ['세부(細部)', '자세(仔細)'], reading: '가늘 세', meaning: '가늘다', strokes: 11 },
        { char: '笑', examples: ['미소(微笑)', '폭소(爆笑)'], reading: '웃음 소', meaning: '웃음', strokes: 10 },
        { char: '掃', examples: ['청소(淸掃)'], reading: '쓸 소', meaning: '쓸다', strokes: 11 },
        { char: '素', examples: ['입소(元素)', '소질(素質)'], reading: '본디 소', meaning: '본디', strokes: 10 },
        { char: '續', examples: ['계속(繼續)', '연속(連續)'], reading: '이을 속', meaning: '잇다', strokes: 21 },
        { char: '俗', examples: ['민속(民俗)', '풍속(風俗)'], reading: '풍속 속', meaning: '풍속', strokes: 9 },
        { char: '送', examples: ['방송(放送)', '송금(送金)'], reading: '보낼 송', meaning: '보내다', strokes: 10 },
        { char: '修', examples: ['수리(修理)', '수정(修正)'], reading: '닦을 수', meaning: '닦다', strokes: 10 },
        { char: '受', examples: ['수신(受信)', '접수(接受)'], reading: '받을 수', meaning: '받다', strokes: 8 },
        { char: '守', examples: ['수비(守備)', '보수(保守)'], reading: '지킬 수', meaning: '지키다', strokes: 6 },
        { char: '授', examples: ['수업(授業)', '교수(敎授)'], reading: '줄 수', meaning: '주다', strokes: 11 },
        { char: '收', examples: ['수집(收集)', '수입(收入)'], reading: '거둘 수', meaning: '거두다', strokes: 6 },
        { char: '純', examples: ['단순(單純)', '순수(純粹)'], reading: '순수할 순', meaning: '순수하다', strokes: 10 },
        { char: '承', examples: ['계승(繼承)', '승낙(承諾)'], reading: '이을 승', meaning: '잇다', strokes: 8 },
        { char: '詩', examples: ['시인(詩人)', '동시(童詩)'], reading: '시 시', meaning: '시', strokes: 13 },
        { char: '試', examples: ['시험(試驗)', '시도(試圖)'], reading: '시험 시', meaning: '시험', strokes: 13 },
        { char: '視', examples: ['시력(視力)', '시선(視線)'], reading: '볼 시', meaning: '보다', strokes: 11 },
        { char: '施', examples: ['시설(施設)', '실시(實施)'], reading: '베풀 시', meaning: '베풀다', strokes: 9 },
        { char: '是', examples: ['시비(是非)'], reading: '옳을 시', meaning: '옳다', strokes: 9 },
        { char: '息', examples: ['휴식(休息)', '소식(消息)'], reading: '숨 쉴 식', meaning: '숨쉬다', strokes: 10 },
        { char: '申', examples: ['신고(申告)', '신청(申請)'], reading: '납 신', meaning: '납', strokes: 5 },
        { char: '深', examples: ['심각(深刻)', '심야(深夜)'], reading: '깊을 심', meaning: '깊다', strokes: 11 },
        // ㅇ
        { char: '眼', examples: ['안경(眼鏡)', '안과(眼科)'], reading: '눈 안', meaning: '눈', strokes: 11 },
        { char: '暗', examples: ['암기(暗記)', '암흑(暗黑)'], reading: '어두울 암', meaning: '어둡다', strokes: 13 },
        { char: '壓', examples: ['압력(壓力)', '탄압(彈壓)'], reading: '누를 압', meaning: '누르다', strokes: 17 },
        { char: '液', examples: ['액체(液體)', '혈액(血液)'], reading: '진 액', meaning: '진', strokes: 11 },
        { char: '羊', examples: ['양(羊)', '양모(羊毛)'], reading: '양 양', meaning: '양', strokes: 6 },
        { char: '餘', examples: ['여유(餘裕)', '나머지(餘)'], reading: '남을 여', meaning: '남다', strokes: 16 },
        { char: '如', examples: ['여전(如前)', '만약(萬如)'], reading: '같을 여', meaning: '같다', strokes: 6 },
        { char: '逆', examples: ['역전(逆轉)', '반역(叛逆)'], reading: '거스를 역', meaning: '거스르다', strokes: 10 },
        { char: '煙', examples: ['금연(禁煙)', '연기(煙氣)'], reading: '연기 연', meaning: '연기', strokes: 13 },
        { char: '硏', examples: ['연구(硏究)'], reading: '갈 연', meaning: '갈다', strokes: 9 },
        { char: '演', examples: ['연기(演技)', '공연(公演)'], reading: '펼 연', meaning: '펴다', strokes: 14 },
        { char: '榮', examples: ['영광(榮光)', '번영(繁榮)'], reading: '영화 영', meaning: '영화', strokes: 14 },
        { char: '藝', examples: ['예술(藝術)', '연예(演藝)'], reading: '재주 예', meaning: '재주', strokes: 19 },
        { char: '誤', examples: ['오해(誤解)', '오류(誤謬)'], reading: '그르칠 오', meaning: '그르치다', strokes: 14 },
        { char: '玉', examples: ['구슬(玉)', '옥석(玉石)'], reading: '구슬 옥', meaning: '구슬', strokes: 5 },
        { char: '往', examples: ['왕복(往復)', '우왕좌왕(右往左往)'], reading: '갈 왕', meaning: '가다', strokes: 8 },
        { char: '謠', examples: ['동요(童謠)', '가요(歌謠)'], reading: '노래 요', meaning: '노래', strokes: 17 },
        { char: '容', examples: ['내용(內容)', '용기(容器)'], reading: '얼굴 용', meaning: '얼굴', strokes: 10 },
        { char: '圓', examples: ['원형(圓形)', '타원(橢圓)'], reading: '둥글 원', meaning: '둥글다', strokes: 13 },
        { char: '員', examples: ['직원(職員)', '회원(會員)'], reading: '인원 원', meaning: '인원', strokes: 10 },
        { char: '衛', examples: ['호위(護衛)', '위생(衛生)'], reading: '호위할 위', meaning: '호위하다', strokes: 16 },
        { char: '爲', examples: ['행위(行爲)', '위하여(爲)'], reading: '할 위', meaning: '하다', strokes: 12 },
        { char: '肉', examples: ['육체(肉體)', '정육점(精肉店)'], reading: '고기 육', meaning: '고기', strokes: 6 },
        { char: '恩', examples: ['은혜(恩惠)', '보은(報恩)'], reading: '은혜 은', meaning: '은혜', strokes: 10 },
        { char: '陰', examples: ['음지(陰地)', '음력(陰曆)'], reading: '그늘 음', meaning: '그늘', strokes: 11 },
        { char: '應', examples: ['응답(應答)', '반응(反應)'], reading: '응할 응', meaning: '응하다', strokes: 17 },
        { char: '議', examples: ['회의(會議)', '의논(議論)'], reading: '의논할 의', meaning: '의논하다', strokes: 20 },
        { char: '義', examples: ['정의(正義)', '의무(義務)'], reading: '옳을 의', meaning: '옳다', strokes: 13 },
        { char: '移', examples: ['이동(移動)', '이민(移民)'], reading: '옮길 이', meaning: '옮기다', strokes: 11 },
        { char: '益', examples: ['이익(利益)', '수익(收益)'], reading: '더할 익', meaning: '더하다', strokes: 10 },
        { char: '印', examples: ['인쇄(印刷)', '도장(印)'], reading: '도장 인', meaning: '도장', strokes: 6 },
        { char: '引', examples: ['인용(引用)', '견인(牽引)'], reading: '끌 인', meaning: '끌다', strokes: 4 },
        { char: '認', examples: ['인정(認定)', '확인(確認)'], reading: '알 인', meaning: '알다', strokes: 14 },
        // ㅈ
        { char: '將', examples: ['장래(將來)', '장군(將軍)'], reading: '장차 장', meaning: '장차', strokes: 11 },
        { char: '障', examples: ['장애(障礙)', '고장(故障)'], reading: '막을 장', meaning: '막다', strokes: 14 },
        { char: '低', examples: ['저하(低下)', '최저(最低)'], reading: '낮을 저', meaning: '낮다', strokes: 7 },
        { char: '敵', examples: ['적군(敵軍)', '천적(天敵)'], reading: '원수 적', meaning: '원수', strokes: 15 },
        { char: '田', examples: ['논밭(田畓)', '유전(油田)'], reading: '밭 전', meaning: '밭', strokes: 5 },
        { char: '絶', examples: ['절대(絶對)', '기절(氣絶)'], reading: '끊을 절', meaning: '끊다', strokes: 12 },
        { char: '接', examples: ['접근(接近)', '직접(直接)'], reading: '이을 접', meaning: '잇다', strokes: 11 },
        { char: '政', examples: ['정치(政治)', '정부(政府)'], reading: '정사 정', meaning: '정사', strokes: 9 },
        { char: '程', examples: ['과정(過程)', '일정(日程)'], reading: '길 정', meaning: '길', strokes: 12 },
        { char: '精', examples: ['정신(精神)', '정밀(精密)'], reading: '정할 정', meaning: '정하다', strokes: 14 },
        { char: '濟', examples: ['경제(經濟)', '구제(救濟)'], reading: '건널 제', meaning: '건너다', strokes: 17 },
        { char: '提', examples: ['제공(提供)', '제안(提案)'], reading: '끌 제', meaning: '끌다', strokes: 12 },
        { char: '制', examples: ['제도(制度)', '통제(統制)'], reading: '절제할 제', meaning: '절제하다', strokes: 8 },
        { char: '製', examples: ['제작(製作)', '제품(製品)'], reading: '지을 제', meaning: '짓다', strokes: 14 },
        { char: '除', examples: ['제외(除外)', '삭제(削除)'], reading: '덜 제', meaning: '덜다', strokes: 10 },
        { char: '際', examples: ['국제(國際)', '실제(實際)'], reading: '즈음 제', meaning: '즈음', strokes: 14 },
        { char: '祭', examples: ['축제(祝祭)', '제사(祭祀)'], reading: '제사 제', meaning: '제사', strokes: 11 },
        { char: '鳥', examples: ['새(鳥)', '백조(白鳥)'], reading: '새 조', meaning: '새', strokes: 11 },
        { char: '助', examples: ['조력(助力)', '구조(救助)'], reading: '도울 조', meaning: '돕다', strokes: 7 },
        { char: '早', examples: ['조기(早期)', '조퇴(早退)'], reading: '일찍 조', meaning: '일찍', strokes: 6 },
        { char: '造', examples: ['창조(創造)', '제조(製造)'], reading: '지을 조', meaning: '짓다', strokes: 11 },
        { char: '尊', examples: ['존경(尊敬)', '존중(尊重)'], reading: '높을 존', meaning: '높다', strokes: 12 },
        { char: '宗', examples: ['종교(宗敎)', '시조(始祖)'], reading: '마루 종', meaning: '마루', strokes: 8 },
        { char: '走', examples: ['도주(逃走)', '경주(競走)'], reading: '달릴 주', meaning: '달리다', strokes: 7 },
        { char: '竹', examples: ['죽림(竹林)', '대나무(竹)'], reading: '대 죽', meaning: '대나무', strokes: 6 },
        { char: '準', examples: ['준비(準備)', '기준(基準)'], reading: '준할 준', meaning: '준하다', strokes: 13 },
        { char: '衆', examples: ['대중(大衆)', '관중(觀衆)'], reading: '무리 중', meaning: '무리', strokes: 12 },
        { char: '增', examples: ['증가(增加)', '증축(增築)'], reading: '더할 증', meaning: '더하다', strokes: 15 },
        { char: '志', examples: ['의지(意志)', '지원(志願)'], reading: '뜻 지', meaning: '뜻', strokes: 7 },
        { char: '指', examples: ['지도(指導)', '지적(指摘)'], reading: '가리킬 지', meaning: '가리키다', strokes: 9 },
        { char: '支', examples: ['지원(支援)', '지출(支出)'], reading: '지탱할 지', meaning: '지탱하다', strokes: 4 },
        { char: '至', examples: ['동지(冬至)', '하지(夏至)'], reading: '이를 지', meaning: '이르다', strokes: 6 },
        { char: '職', examples: ['직어(職業)', '취직(就職)'], reading: '벼슬 직', meaning: '벼슬', strokes: 18 },
        { char: '進', examples: ['전진(前進)', '진행(進行)'], reading: '나아갈 진', meaning: '나아가다', strokes: 12 },
        { char: '眞', examples: ['진실(眞實)', '사진(寫眞)'], reading: '참 진', meaning: '참', strokes: 10 },
        // ㅊ
        { char: '次', examples: ['차례(次例)', '목차(目次)'], reading: '버금 차', meaning: '버금', strokes: 6 },
        { char: '察', examples: ['관찰(觀察)', '경찰(警察)'], reading: '살필 찰', meaning: '살피다', strokes: 14 },
        { char: '創', examples: ['창조(創造)', '창작(創作)'], reading: '비롯할 창', meaning: '비롯하다', strokes: 12 },
        { char: '處', examples: ['처리(處理)', '처벌(處罰)'], reading: '곳 처', meaning: '곳', strokes: 11 },
        { char: '請', examples: ['요청(要請)', '청구(請求)'], reading: '청할 청', meaning: '청하다', strokes: 15 },
        { char: '總', examples: ['총리(總理)', '총계(總計)'], reading: '거느릴 총', meaning: '거느리다', strokes: 17 },
        { char: '銃', examples: ['권총(拳銃)', '총격(銃擊)'], reading: '총 총', meaning: '총', strokes: 14 },
        { char: '築', examples: ['건축(建築)', '신축(新築)'], reading: '쌓을 축', meaning: '쌓다', strokes: 16 },
        { char: '蓄', examples: ['저축(貯蓄)', '비축(備蓄)'], reading: '쌓을 축', meaning: '쌓다', strokes: 14 },
        { char: '忠', examples: ['충성(忠誠)', '충실(忠實)'], reading: '충성 충', meaning: '충성', strokes: 8 },
        { char: '蟲', examples: ['곤충(昆蟲)', '해충(害蟲)'], reading: '벌레 충', meaning: '벌레', strokes: 18 },
        { char: '取', examples: ['취득(取得)', '섭취(攝取)'], reading: '취할 취', meaning: '취하다', strokes: 8 },
        { char: '測', examples: ['측정(測定)', '예측(豫測)'], reading: '헤아릴 측', meaning: '헤아리다', strokes: 12 },
        { char: '治', examples: ['정치(政治)', '치료(治療)'], reading: '다스릴 치', meaning: '다스리다', strokes: 8 },
        { char: '置', examples: ['위치(位置)', '설치(設置)'], reading: '둘 치', meaning: '두다', strokes: 13 },
        { char: '齒', examples: ['치과(齒科)', '충치(蟲齒)'], reading: '이 치', meaning: '이', strokes: 15 },
        { char: '侵', examples: ['침입(侵入)', '침략(侵略)'], reading: '침노할 침', meaning: '침노하다', strokes: 9 },
        // ㅋ, ㅌ
        { char: '快', examples: ['쾌청(快晴)', '유쾌(愉快)'], reading: '쾌할 쾌', meaning: '쾌하다', strokes: 7 },
        { char: '態', examples: ['태도(態度)', '상태(狀態)'], reading: '모양 태', meaning: '모양', strokes: 14 },
        { char: '統', examples: ['통일(統一)', '대통령(大統領)'], reading: '거느릴 통', meaning: '거느리다', strokes: 12 },
        { char: '退', examples: ['퇴근(退勤)', '후퇴(後退)'], reading: '물러날 퇴', meaning: '물러나다', strokes: 10 },
        // ㅍ
        { char: '波', examples: ['파도(波濤)', '전파(電波)'], reading: '물결 파', meaning: '물결', strokes: 8 },
        { char: '破', examples: ['파괴(破壞)', '파산(破産)'], reading: '깨뜨릴 파', meaning: '깨뜨리다', strokes: 10 },
        { char: '砲', examples: ['대포(大砲)', '발포(發砲)'], reading: '대포 포', meaning: '대포', strokes: 10 },
        { char: '包', examples: ['포장(包裝)', '포함(包含)'], reading: '쌀 포', meaning: '싸다', strokes: 5 },
        { char: '布', examples: ['배포(配布)', '공포(公布)'], reading: '베 포', meaning: '베', strokes: 5 },
        { char: '暴', examples: ['폭력(暴力)', '폭우(暴雨)'], reading: '사나울 폭', meaning: '사납다', strokes: 15 },
        { char: '票', examples: ['투표(投票)', '차표(車票)'], reading: '표 표', meaning: '표', strokes: 11 },
        { char: '豊', examples: ['풍년(豊年)', '풍부(豐富)'], reading: '풍년 풍', meaning: '풍년', strokes: 13 },
        // ㅎ
        { char: '限', examples: ['한계(限界)', '제한(制限)'], reading: '한할 한', meaning: '한하다', strokes: 9 },
        { char: '航', examples: ['항공(航空)', '항해(航海)'], reading: '배 항', meaning: '배', strokes: 10 },
        { char: '港', examples: ['항구(港口)', '공항(空港)'], reading: '항구 항', meaning: '항구', strokes: 12 },
        { char: '解', examples: ['해결(解決)', '해석(解釋)'], reading: '풀 해', meaning: '풀다', strokes: 13 },
        { char: '鄕', examples: ['고향(故鄕)', '귀향(歸鄕)'], reading: '시골 향', meaning: '시골', strokes: 13 },
        { char: '香', examples: ['향기(香氣)', '향수(香水)'], reading: '향기 향', meaning: '향기', strokes: 9 },
        { char: '虛', examples: ['허공(虛空)', '허무(虛無)'], reading: '빌 허', meaning: '비다', strokes: 12 },
        { char: '驗', examples: ['시험(考試)', '체험(體驗)'], reading: '시험 험', meaning: '시험', strokes: 23 },
        { char: '賢', examples: ['현명(賢明)', '성현(聖賢)'], reading: '어질 현', meaning: '어질다', strokes: 15 },
        { char: '血', examples: ['출혈(出血)', '혈액(血液)'], reading: '피 혈', meaning: '피', strokes: 6 },
        { char: '協', examples: ['협력(協力)', '협동(協同)'], reading: '화할 협', meaning: '화하다', strokes: 8 },
        { char: '惠', examples: ['은혜(恩惠)', '혜택(惠澤)'], reading: '은혜 혜', meaning: '은혜', strokes: 12 },
        { char: '好', examples: ['선호(選好)', '우호(友好)'], reading: '좋을 호', meaning: '좋다', strokes: 6 },
        { char: '戶', examples: ['가호(家戶)'], reading: '지게 호', meaning: '지게', strokes: 4 },
        { char: '護', examples: ['보호(保護)', '간호(看護)'], reading: '보호할 호', meaning: '보호하다', strokes: 20 },
        { char: '呼', examples: ['호흡(呼吸)', '호칭(呼稱)'], reading: '부를 호', meaning: '부르다', strokes: 8 },
        { char: '貨', examples: ['화물(貨物)', '재화(財貨)'], reading: '재물 화', meaning: '재물', strokes: 11 },
        { char: '確', examples: ['확실(確實)', '정확(正確)'], reading: '굳을 확', meaning: '굳다', strokes: 15 },
        { char: '回', examples: ['회전(回轉)', '회복(回復)'], reading: '돌 회', meaning: '돌다', strokes: 6 },
        { char: '吸', examples: ['흡수(吸收)', '호흡(呼吸)'], reading: '마실 흡', meaning: '마시다', strokes: 6 },
        { char: '興', examples: ['흥분(興奮)', '부흥(復興)'], reading: '흥할 흥', meaning: '흥하다', strokes: 16 },
        { char: '希', examples: ['희망(希望)'], reading: '바랄 희', meaning: '바라다', strokes: 7 }
    ],
    '4급': [
        // 4급 배정한자 250자 (한국어문회 기준)
        // ㄱ
        { char: '暇', examples: ['여가(餘暇)', '휴가(休暇)', '한가(閑暇)', '여가선용(餘暇善用)', '휴가철(休暇季節)'], reading: '틈 가', meaning: '여가', strokes: 13 },
        { char: '刻', examples: ['조각(彫刻)', '시각(時刻)', '정각(正刻)', '각인(刻印)', '심각(深刻)'], reading: '새길 각', meaning: '새기다', strokes: 8 },
        { char: '覺', examples: ['감각(感覺)', '각성(覺醒)', '지각(知覺)', '자각(自覺)', '발각(發覺)'], reading: '깨달을 각', meaning: '깨닫다', strokes: 20 },
        { char: '簡', examples: ['간단(簡單)', '간략(簡略)', '간소(簡素)', '간편(簡便)', '서간(書簡)'], reading: '간략할 간', meaning: '간단', strokes: 18 },
        { char: '看', examples: ['간호(看護)', '간판(看板)', '간병(看病)', '간주(看做)', '주마간산(走馬看山)'], reading: '볼 간', meaning: '보다', strokes: 9 },
        { char: '干', examples: ['간섭(干涉)', '약간(若干)', '간여(干與)', '간조(干潮)', '간척(干拓)'], reading: '방패 간', meaning: '간섭', strokes: 3 },
        { char: '甘', examples: ['감미료(甘味料)', '고진감래(苦盡甘來)', '감수(甘受)', '감언이설(甘言利說)', '감초(甘草)'], reading: '달 감', meaning: '달다', strokes: 5 },
        { char: '敢', examples: ['감행(敢行)', '용감(勇敢)', '과감(果敢)', '감히(敢-)', '용감무쌍(勇敢無雙)'], reading: '감히 감', meaning: '감히', strokes: 12 },
        { char: '甲', examples: ['갑부(甲富)', '환갑(還甲)', '회갑(回甲)', '갑반(甲班)', '갑판(甲板)'], reading: '갑옷 갑', meaning: '갑', strokes: 5 },
        { char: '降', examples: ['강수량(降水量)', '하강(下降)', '강우(降雨)', '승강(昇降)', '투항(投降)'], reading: '내릴 강', meaning: '내리다', strokes: 10 },
        { char: '拒', examples: ['거부(拒否)', '거절(拒絶)', '항거(抗拒)', '거역(拒逆)', '거절(拒絶)'], reading: '막을 거', meaning: '거절', strokes: 8 },
        { char: '居', examples: ['거주(居住)', '동거(同居)', '별거(別居)', '독거(獨居)', '거실(居室)'], reading: '살 거', meaning: '거주', strokes: 8 },
        { char: '據', examples: ['근거(根據)', '증거(證據)', '의거(依據)', '점거(占據)', '논거(論據)'], reading: '근거 거', meaning: '근거', strokes: 16 },
        { char: '巨', examples: ['거대(巨大)', '거인(巨人)', '거부(巨富)', '거액(巨額)', '거물(巨物)'], reading: '클 거', meaning: '거대', strokes: 5 },
        { char: '傑', examples: ['걸작(傑作)', '호걸(豪傑)', '걸출(傑出)', '영걸(英傑)', '인걸(人傑)'], reading: '뛰어날 걸', meaning: '걸출', strokes: 13 },
        { char: '儉', examples: ['검소(儉素)', '절검(節儉)', '근검(勤儉)', '검약(儉約)', '공검(恭儉)'], reading: '검소할 검', meaning: '검소', strokes: 15 },
        { char: '擊', examples: ['공격(攻擊)', '타격(打擊)', '사격(射擊)', '충격(衝擊)', '격파(擊破)'], reading: '칠 격', meaning: '격투', strokes: 17 },
        { char: '激', examples: ['격렬(激烈)', '과격(過激)', '격동(激動)', '격분(激忿)', '감격(感激)'], reading: '격할 격', meaning: '격렬', strokes: 16 },
        { char: '堅', examples: ['견고(堅固)', '견실(堅實)', '견지(堅持)', '중견(中堅)', '견디다'], reading: '굳을 견', meaning: '견고', strokes: 11 },
        { char: '犬', examples: ['견마지로(犬馬之勞)', '맹견(猛犬)', '애완견(愛玩犬)', '충견(忠犬)', '군견(軍犬)'], reading: '개 견', meaning: '개', strokes: 4 },
        { char: '驚', examples: ['경악(驚愕)', '경이(驚異)', '경탄(驚歎)', '놀라다', '경천동지(驚天動地)'], reading: '놀랄 경', meaning: '놀라다', strokes: 23 },
        { char: '更', examples: ['갱생(更生)', '변경(變更)', '경정(更正)', '갱신(更新)', '삼경(三更)'], reading: '고칠 경', meaning: '경신', strokes: 7 },
        { char: '傾', examples: ['경사(傾斜)', '경향(傾向)', '경청(傾聽)', '경도(傾倒)', '우경(右傾)'], reading: '기울 경', meaning: '기울다', strokes: 13 },
        { char: '鏡', examples: ['안경(眼鏡)', '현미경(顯微鏡)', '망원경(望遠鏡)', '거울', '명경지수(明鏡止水)'], reading: '거울 경', meaning: '거울', strokes: 19 },
        { char: '階', examples: ['계단(階段)', '계급(階級)', '계층(階層)', '층계(層階)', '단계(段階)'], reading: '섬돌 계', meaning: '계단', strokes: 12 },
        { char: '鷄', examples: ['계란(鷄卵)', '양계(養鷄)', '삼계탕(參鷄湯)', '계육(鷄肉)', '투계(鬪鷄)'], reading: '닭 계', meaning: '닭', strokes: 21 },
        { char: '季', examples: ['계절(季節)', '사계(四季)', '동계(冬季)', '하계(夏季)', '우계(雨季)'], reading: '계절 계', meaning: '계절', strokes: 8 },
        { char: '系', examples: ['계통(系統)', '직계(直系)', '방계(傍系)', '인문계(人文系)', '태양계(太陽系)'], reading: '이어맬 계', meaning: '계통', strokes: 7 },
        { char: '繼', examples: ['계속(繼續)', '후계(後繼)', '계승(繼承)', '중계(中繼)', '이어가다'], reading: '이을 계', meaning: '계승', strokes: 20 },
        { char: '戒', examples: ['경계(警戒)', '훈계(訓戒)', '징계(懲戒)', '계율(戒律)', '계엄(戒嚴)'], reading: '경계할 계', meaning: '경계', strokes: 7 },
        { char: '孤', examples: ['고독(孤獨)', '고립(孤立)', '고아(孤兒)', '고립무원(孤立無援)', '외롭다'], reading: '외로울 고', meaning: '고독', strokes: 9 },
        { char: '庫', examples: ['창고(倉庫)', '금고(金庫)', '차고(車庫)', '재고(在庫)', '문고(文庫)'], reading: '곳집 고', meaning: '창고', strokes: 10 },
        { char: '穀', examples: ['곡식(穀食)', '잡곡(雜穀)', '미곡(米穀)', '양곡(糧穀)', '오곡(五穀)'], reading: '곡식 곡', meaning: '곡식', strokes: 14 },
        { char: '困', examples: ['곤란(困難)', '빈곤(貧困)', '곤궁(困窮)', '피곤(疲困)', '곤혹(困惑)'], reading: '곤할 곤', meaning: '곤란', strokes: 7 },
        { char: '骨', examples: ['골절(骨折)', '해골(骸骨)', '백골(白骨)', '골격(骨格)', '쇄골(鎖骨)'], reading: '뼈 골', meaning: '뼈', strokes: 10 },
        { char: '孔', examples: ['공자(孔子)', '기공(氣孔)', '모공(毛孔)', '동공(瞳孔)', '천공(穿孔)'], reading: '구멍 공', meaning: '구멍', strokes: 4 },
        { char: '攻', examples: ['공격(攻擊)', '전공(專攻)', '침공(侵攻)', '공세(攻勢)', '공방(攻防)'], reading: '칠 공', meaning: '공격', strokes: 7 },
        { char: '管', examples: ['관리(管理)', '수도관(水道管)', '보관(保管)', '관악기(管樂器)', '혈관(血管)'], reading: '대롱 관', meaning: '관리', strokes: 14 },
        { char: '鑛', examples: ['광물(鑛物)', '광산(鑛山)', '광석(鑛石)', '광부(鑛夫)', '철광(鐵鑛)'], reading: '쇳돌 광', meaning: '광물', strokes: 23 },
        { char: '構', examples: ['구조(構造)', '구성(構成)', '기구(機構)', '구상(構想)', '구축(構築)'], reading: '얽을 구', meaning: '구조', strokes: 14 },
        { char: '君', examples: ['군주(君主)', '제군(諸君)', '군계일학(群鷄一鶴)', '군자(君子)', '폭군(暴君)'], reading: '임금 군', meaning: '군주', strokes: 7 },
        { char: '群', examples: ['군중(群衆)', '군집(群集)', '군상(群像)', '군거(群居)', '군무(群舞)'], reading: '무리 군', meaning: '무리', strokes: 13 },
        { char: '屈', examples: ['굴복(屈服)', '비굴(卑屈)', '굴절(屈折)', '굴욕(屈辱)', '불굴(不屈)'], reading: '굽힐 굴', meaning: '굴복', strokes: 8 },
        { char: '窮', examples: ['궁핍(窮乏)', '빈궁(貧窮)', '궁구(窮究)', '무궁(無窮)', '곤궁(困窮)'], reading: '궁할 궁', meaning: '궁핍', strokes: 15 },
        { char: '券', examples: ['여권(旅券)', '증권(證券)', '상품권(商品券)', '입장권(入場券)', '투표권(投票券)'], reading: '문서 권', meaning: '권리', strokes: 8 },
        { char: '勸', examples: ['권유(勸誘)', '권장(勸奬)', '권고(勸告)', '권선징악(勸善懲惡)', '권하다'], reading: '권할 권', meaning: '권유', strokes: 20 },
        { char: '卷', examples: ['압권(壓卷)', '상권(上卷)', '하권(下卷)', '권두(卷頭)', '석권(席卷)'], reading: '책 권', meaning: '권', strokes: 8 },
        { char: '歸', examples: ['귀국(歸國)', '복귀(復歸)', '귀가(歸家)', '귀환(歸還)', '귀성(歸省)'], reading: '돌아갈 귀', meaning: '귀환', strokes: 18 },
        { char: '均', examples: ['균형(均衡)', '평균(平均)', '균등(均等)', '균일(均一)', '불균형(不均衡)'], reading: '고를 균', meaning: '균등', strokes: 7 },
        { char: '劇', examples: ['극장(劇場)', '비극(悲劇)', '연극(演劇)', '극단(劇團)', '사극(史劇)'], reading: '심할 극', meaning: '극심', strokes: 15 },
        { char: '勤', examples: ['근면(勤勉)', '출근(出勤)', '결근(缺勤)', '야근(夜勤)', '개근(皆勤)'], reading: '부지런할 근', meaning: '근면', strokes: 13 },
        { char: '筋', examples: ['근육(筋肉)', '철근(鐵筋)', '이두박근(二頭博筋)', '근력(筋力)', '심근(心筋)'], reading: '힘줄 근', meaning: '근육', strokes: 12 },
        { char: '機', examples: ['기계(機械)', '기회(機會)', '기능(機能)', '동기(動機)', '위기(危機)'], reading: '틀 기', meaning: '기계', strokes: 16 },
        { char: '寄', examples: ['기부(寄附)', '기생(寄生)', '기고(寄稿)', '기탁(寄託)', '기증(寄贈)'], reading: '부칠 기', meaning: '기탁', strokes: 11 },
        { char: '奇', examples: ['기적(奇蹟)', '기이(奇異)', '기묘(奇妙)', '신기(神奇)', '호기심(好奇心)'], reading: '기특할 기', meaning: '기이', strokes: 8 },
        { char: '紀', examples: ['기강(紀綱)', '세기(世紀)', '기행(紀行)', '서기(西紀)', '기원(紀元)'], reading: '벼리 기', meaning: '기록', strokes: 9 },
        // ㄴ
        { char: '納', examples: ['납부(納付)', '수납(收納)', '납세(納稅)', '납득(納得)', '납입(納入)'], reading: '들일 납', meaning: '납입', strokes: 10 },
        // ㄷ
        { char: '段', examples: ['단계(段階)', '수단(手段)', '계단(階段)', '단락(段落)', '특단(特段)'], reading: '층계 단', meaning: '단계', strokes: 9 },
        { char: '徒', examples: ['도보(徒步)', '신도(信徒)', '도제(徒弟)', '학도(學徒)', '폭도(暴徒)'], reading: '무리 도', meaning: '도보', strokes: 10 },
        { char: '盜', examples: ['도난(盜難)', '강도(强盜)', '도적(盜賊)', '절도(竊盜)', '도굴(盜掘)'], reading: '도둑 도', meaning: '도둑', strokes: 12 },
        { char: '逃', examples: ['도망(逃亡)', '도주(逃走)', '도피(逃避)', '야반도주(夜半逃走)', '도주(逃走)'], reading: '도망할 도', meaning: '도망', strokes: 10 },
        // ㄹ
        { char: '亂', examples: ['혼란(混亂)', '반란(叛亂)', '난동(亂動)', '요란(搖亂)', '전란(戰亂)'], reading: '어지러울 란', meaning: '혼란', strokes: 13 },
        { char: '卵', examples: ['산란(産卵)', '계란(鷄卵)', '조란(鳥卵)', '알', '누란지위(累卵之危)'], reading: '알 란', meaning: '알', strokes: 7 },
        { char: '覽', examples: ['관람(觀覽)', '열람(閱覽)', '박람회(博覽會)', '유람(遊覽)', '회람(回覽)'], reading: '볼 람', meaning: '관람', strokes: 21 },
        { char: '略', examples: ['생략(省略)', '약력(略歷)', '침략(侵略)', '전략(戰略)', '개략(槪略)'], reading: '간략할 략', meaning: '약략', strokes: 11 },
        { char: '糧', examples: ['식량(食糧)', '양식(糧食)', '군량(軍糧)', '식량난(食糧難)', '식량(食糧)'], reading: '양식 량', meaning: '식량', strokes: 18 },
        { char: '慮', examples: ['염려(念慮)', '고려(考慮)', '배려(配慮)', '사려(思慮)', '우려(憂慮)'], reading: '생각할 려', meaning: '고려', strokes: 15 },
        { char: '烈', examples: ['열렬(熱烈)', '치열(熾烈)', '맹렬(猛烈)', '강렬(强烈)', '선열(先烈)'], reading: '매울 렬', meaning: '열렬', strokes: 10 },
        { char: '龍', examples: ['공룡(恐龍)', '용왕(龍王)', '용두사미(龍頭蛇尾)', '등용문(登龍門)', '용'], reading: '용 룡', meaning: '용', strokes: 16 },
        { char: '柳', examples: ['버드나무(柳)', '화류(花柳)', '수양버들(垂楊-)', '유엽(柳葉)', '양류(楊柳)'], reading: '버들 류', meaning: '버들', strokes: 9 },
        { char: '輪', examples: ['바퀴(輪)', '연륜(年輪)', '차륜(車輪)', '윤회(輪廻)', '삼륜(三輪)'], reading: '바퀴 륜', meaning: '차륜', strokes: 15 },
        { char: '離', examples: ['이별(離別)', '격리(隔離)', '이혼(離婚)', '거리(距離)', '분리(分離)'], reading: '떠날 리', meaning: '분리', strokes: 19 },
        // ㅁ
        { char: '妹', examples: ['자매(姊妹)', '남매(男妹)', '매부(妹夫)', '누이', '사매(師妹)'], reading: '누이 매', meaning: '누이', strokes: 8 },
        { char: '勉', examples: ['면학(勉學)', '근면(勤勉)', '면려(勉勵)', '권면(勸勉)', '힘쓰다'], reading: '힘쓸 면', meaning: '면학', strokes: 9 },
        { char: '鳴', examples: ['비명(悲鳴)', '공명(共鳴)', '자명종(自鳴鍾)', '뇌명(雷鳴)', '명동(鳴動)'], reading: '울 명', meaning: '울다', strokes: 14 },
        { char: '模', examples: ['모범(模範)', '모형(模型)', '모방(模倣)', '규모(規模)', '모양(模樣)'], reading: '본뜰 모', meaning: '모범', strokes: 14 },
        { char: '墓', examples: ['묘지(墓地)', '성묘(省墓)', '묘소(墓所)', '묘비(墓碑)', '분묘(墳墓)'], reading: '무덤 묘', meaning: '묘지', strokes: 14 },
        { char: '妙', examples: ['기묘(奇妙)', '묘미(妙味)', '묘수(妙手)', '절묘(絶妙)', '신묘(神妙)'], reading: '묘할 묘', meaning: '묘미', strokes: 7 },
        { char: '舞', examples: ['무용(舞踊)', '무대(舞台)', '무도(舞蹈)', '난무(亂舞)', '춤'], reading: '춤출 무', meaning: '춤', strokes: 14 },
        // ㅂ
        { char: '拍', examples: ['박수(拍手)', '박차(拍車)', '박자(拍子)', '맥박(脈拍)', '박수갈채(拍手喝采)'], reading: '칠 박', meaning: '박수', strokes: 9 },
        { char: '髮', examples: ['이발(理髮)', '두발(頭髮)', '삭발(削髮)', '단발(短髮)', '모발(毛髮)'], reading: '머리털 발', meaning: '머리카락', strokes: 15 },
        { char: '妨', examples: ['방해(妨害)', '무방(無妨)', '방해물(妨害物)', '방해(妨害)', '방해공작(妨害工作)'], reading: '방해할 방', meaning: '방해', strokes: 7 },
        { char: '犯', examples: ['범죄(犯罪)', '범인(犯人)', '범법(범법)', '침범(侵犯)', '범행(犯行)'], reading: '범할 범', meaning: '범죄', strokes: 5 },
        { char: '範', examples: ['모범(模範)', '범위(範圍)', '사범(師範)', '규범(規範)', '시범(示範)'], reading: '법 범', meaning: '모범', strokes: 15 },
        { char: '辯', examples: ['변론(辯論)', '웅변(雄辯)', '변호(辯護)', '궤변(詭辯)', '달변(達辯)'], reading: '말씀 변', meaning: '변론', strokes: 21 },
        { char: '普', examples: ['보편(普遍)', '보통(普通)', '보급(普及)', '보편타당(普遍妥當)', '널리'], reading: '넓을 보', meaning: '보편', strokes: 12 },
        { char: '伏', examples: ['항복(降伏)', '잠복(潛伏)', '매복(埋伏)', '굴복(屈伏)', '복병(伏兵)'], reading: '엎드릴 복', meaning: '복종', strokes: 6 },
        { char: '複', examples: ['복잡(複雜)', '복습(複習)', '중복(重複)', '복수(複數)', '복제(複製)'], reading: '겹칠 복', meaning: '복잡', strokes: 14 },
        { char: '否', examples: ['부정(否定)', '가부(可否)', '부결(否決)', '거부(拒否)', '안부(安否)'], reading: '아닐 부', meaning: '부정', strokes: 7 },
        { char: '負', examples: ['부담(負擔)', '승부(勝負)', '자부(自負)', '부채(負債)', '부하(負荷)'], reading: '질 부', meaning: '부담', strokes: 9 },
        { char: '粉', examples: ['분말(粉末)', '전분(澱粉)', '분식(粉食)', '화분(花粉)', '철분(鐵粉)'], reading: '가루 분', meaning: '분말', strokes: 10 },
        { char: '憤', examples: ['분노(憤怒)', '울분(鬱憤)', '의분(義憤)', '분개(憤慨)', '격분(激憤)'], reading: '분할 분', meaning: '분노', strokes: 15 },
        { char: '批', examples: ['비판(批判)', '비평(批評)', '비준(批准)', '비난(批難)', '비평가(批評家)'], reading: '칠 비', meaning: '비판', strokes: 7 },
        { char: '祕', examples: ['비밀(祕密)', '비서(祕書)', '비법(祕法)', '신비(神秘)', '극비(極祕)'], reading: '숨길 비', meaning: '비밀', strokes: 10 },
        { char: '碑', examples: ['비석(碑石)', '묘비(墓碑)', '기념비(記念碑)', '비문(碑文)', '건립비(建立碑)'], reading: '비석 비', meaning: '비석', strokes: 14 },
        // ㅅ
        { char: '辭', examples: ['사퇴(辭退)', '사전(辭典)', '고사(固辭)', '사직(辭職)', '수사(修辭)'], reading: '말씀 사', meaning: '사퇴', strokes: 19 },
        { char: '私', examples: ['사적(私的)', '사생활(私生活)', '사유(私有)', '사심(私心)', '공사(公私)'], reading: '사사 사', meaning: '사적', strokes: 7 },
        { char: '絲', examples: ['명주실(絲)', '방사(紡絲)', '제사(製絲)', '철사(鐵絲)', '생사(生絲)'], reading: '실 사', meaning: '실', strokes: 12 },
        { char: '射', examples: ['사격(射擊)', '발사(發射)', '주사(注射)', '반사(反射)', '투사(投射)'], reading: '쏠 사', meaning: '사격', strokes: 10 },
        { char: '散', examples: ['산만(散漫)', '해산(解散)', '산책(散策)', '분산(分散)', '발산(發散)'], reading: '흩을 산', meaning: '산포', strokes: 12 },
        { char: '傷', examples: ['부상(負傷)', '상처(傷處)', '손상(損傷)', '상해(傷害)', '중상(重傷)'], reading: '다칠 상', meaning: '부상', strokes: 13 },
        { char: '象', examples: ['상징(象徵)', '상아(象牙)', '현상(現象)', '기상(氣象)', '대상(對象)'], reading: '코끼리 상', meaning: '형상', strokes: 12 },
        { char: '宣', examples: ['선포(宣布)', '선언(宣言)', '선전(宣傳)', '선서(宣誓)', '선교(宣敎)'], reading: '베풀 선', meaning: '선포', strokes: 9 },
        { char: '舌', examples: ['독설(毒舌)', '설전(舌戰)', '구설수(口舌數)', '요설(饒舌)', '장광설(長廣舌)'], reading: '혀 설', meaning: '혀', strokes: 6 },
        { char: '屬', examples: ['소속(所屬)', '부속(附屬)', '존속(存屬)', '귀속(歸屬)', '직속(直屬)'], reading: '무리 속', meaning: '소속', strokes: 21 },
        { char: '損', examples: ['손실(損失)', '손해(損害)', '훼손(毁損)', '파손(破損)', '손익(損益)'], reading: '덜 손', meaning: '손실', strokes: 13 },
        { char: '頌', examples: ['송축(頌祝)', '찬송(讚頌)', '송덕(頌德)', '송가(頌歌)', '찬송가(讚頌歌)'], reading: '기릴 송', meaning: '송축', strokes: 13 },
        { char: '松', examples: ['소나무(松)', '송진(松津)', '송죽(松竹)', '송편(松餠)', '노송(老松)'], reading: '소나무 송', meaning: '소나무', strokes: 8 },
        { char: '秀', examples: ['수려(秀麗)', '우수(優秀)', '준수(俊秀)', '수재(秀才)', '최우수(最優秀)'], reading: '빼어날 수', meaning: '수려', strokes: 7 },
        { char: '叔', examples: ['숙부(叔父)', '숙모(叔母)', '백숙(伯叔)', '당숙(堂叔)', '사숙(私叔)'], reading: '아재비 숙', meaning: '숙부', strokes: 8 },
        { char: '肅', examples: ['엄숙(嚴肅)', '정숙(靜肅)', '숙청(肅淸)', '숙연(肅然)', '자숙(自肅)'], reading: '엄숙할 숙', meaning: '엄숙', strokes: 13 },
        { char: '崇', examples: ['숭배(崇拜)', '숭고(崇高)', '숭상(崇尙)', '존숭(尊崇)', '숭모(崇慕)'], reading: '높을 숭', meaning: '숭고', strokes: 11 },
        // ㅆ
        { char: '氏', examples: ['씨족(氏族)', '성씨(姓氏)', '김씨(金氏)', '이씨(李氏)', '박씨(朴氏)'], reading: '성씨 씨', meaning: '씨족', strokes: 4 },
        // ㅇ
        { char: '額', examples: ['액수(額數)', '금액(金額)', '총액(總額)', '차액(差額)', '액면(額面)'], reading: '이마 액', meaning: '액수', strokes: 18 },
        { char: '樣', examples: ['모양(模樣)', '다양(多樣)', '문양(紋樣)', '각양각색(各樣各色)', '태양(態樣)'], reading: '모양 양', meaning: '모양', strokes: 14 },
        { char: '嚴', examples: ['엄격(嚴格)', '엄수(嚴守)', '위엄(威嚴)', '엄중(嚴重)', '존엄(尊嚴)'], reading: '엄할 엄', meaning: '엄격', strokes: 20 },
        { char: '與', examples: ['참여(參與)', '여야(與野)', '관여(關與)', '급여(給與)', '기여(寄與)'], reading: '더불 여', meaning: '참여', strokes: 14 },
        { char: '域', examples: ['역내(域內)', '지역(地域)', '구역(區域)', '영역(領域)', '수역(水域)'], reading: '지경 역', meaning: '영역', strokes: 11 },
        { char: '易', examples: ['용이(容易)', '교역(交易)', '무역(貿易)', '난이도(難易度)', '평이(平易)'], reading: '바꿀 역', meaning: '쉽다', strokes: 8 },
        { char: '燃', examples: ['연소(燃燒)', '연료(燃料)', '내연(內燃)', '재연(再燃)', '가연성(可燃性)'], reading: '불탈 연', meaning: '연소', strokes: 16 },
        { char: '鉛', examples: ['흑연(黑鉛)', '아연(亞鉛)', '납(鉛)', '연필(鉛筆)', '무연(無鉛)'], reading: '납 연', meaning: '납', strokes: 13 },
        { char: '緣', examples: ['인연(因緣)', '혈연(血緣)', '사연(事緣)', '연고(緣故)', '결연(結緣)'], reading: '인연 연', meaning: '인연', strokes: 15 },
        { char: '延', examples: ['연장(延長)', '지연(遲延)', '연기(延期)', '연체(延滯)', '순연(順延)'], reading: '늘일 연', meaning: '연장', strokes: 8 },
        { char: '迎', examples: ['환영(歡迎)', '영접(迎接)', '영합(迎合)', '송구영신(送舊迎新)', '내방(來訪)'], reading: '맞을 영', meaning: '환영', strokes: 8 },
        { char: '映', examples: ['상영(上映)', '반영(反映)', '영상(映像)', '영화(映畫)', '투영(投影)'], reading: '비칠 영', meaning: '반영', strokes: 9 },
        { char: '營', examples: ['경영(經營)', '영업(營業)', '운영(運營)', '병영(兵營)', '진영(陣營)'], reading: '경영할 영', meaning: '경영', strokes: 17 },
        { char: '豫', examples: ['예습(豫習)', '예방(豫防)', '예상(豫想)', '예측(豫測)', '유예(猶豫)'], reading: '미리 예', meaning: '예상', strokes: 16 },
        { char: '優', examples: ['우수(優秀)', '우승(優勝)', '우대(優待)', '우월(優越)', '배우(俳優)'], reading: '넉넉할 우', meaning: '우수', strokes: 17 },
        { char: '遇', examples: ['대우(待遇)', '조우(遭遇)', '예우(禮遇)', '처우(處遇)', '불우(不遇)'], reading: '만날 우', meaning: '조우', strokes: 13 },
        { char: '郵', examples: ['우편(郵便)', '우표(郵票)', '우체국(郵遞局)', '우송(郵送)', '우정(郵政)'], reading: '우편 우', meaning: '우편', strokes: 11 },
        { char: '怨', examples: ['원망(怨望)', '원한(怨恨)', '원성(怨聲)', '민원(民怨)', '숙원(宿怨)'], reading: '원망할 원', meaning: '원한', strokes: 9 },
        { char: '援', examples: ['지원(支援)', '원조(援助)', '응원(應援)', '후원(後援)', '구원(救援)'], reading: '도울 원', meaning: '지원', strokes: 13 },
        { char: '源', examples: ['근원(根源)', '자원(資源)', '수원(水源)', '기원(起源)', '원천(源泉)'], reading: '근원 원', meaning: '근원', strokes: 14 },
        { char: '圍', examples: ['포위(包圍)', '주위(周圍)', '범위(範圍)', '분위기(雰圍氣)', '에워싸다'], reading: '에워쌀 위', meaning: '포위', strokes: 12 },
        { char: '委', examples: ['위임(委任)', '위원(委員)', '위탁(委託)', '위촉(委囑)', '위원회(委員會)'], reading: '맡길 위', meaning: '위임', strokes: 8 },
        { char: '威', examples: ['위엄(威嚴)', '권위(權威)', '위력(威力)', '시위(示威)', '위협(威脅)'], reading: '위엄 위', meaning: '위엄', strokes: 9 },
        { char: '慰', examples: ['위로(慰勞)', '위안(慰安)', '자위(自慰)', '위문(慰問)', '안위(安慰)'], reading: '위로할 위', meaning: '위로', strokes: 15 },
        { char: '危', examples: ['위험(危險)', '위기(危機)', '위태(危殆)', '위급(危急)', '안위(安危)'], reading: '위태할 위', meaning: '위험', strokes: 6 },
        { char: '遊', examples: ['유희(遊戱)', '유세(遊說)', '유람(遊覽)', '부유(浮遊)', '서유기(西遊記)'], reading: '놀 유', meaning: '유희', strokes: 13 },
        { char: '乳', examples: ['우유(牛乳)', '모유(母乳)', '유제품(乳製品)', '수유(授乳)', '연유(煉乳)'], reading: '젖 유', meaning: '젖', strokes: 8 },
        { char: '儒', examples: ['유교(儒敎)', '유학(儒學)', '유생(儒生)', '유가(儒家)', '유림(儒林)'], reading: '선비 유', meaning: '유교', strokes: 16 },
        { char: '遺', examples: ['유산(遺産)', '유언(遺言)', '유물(遺物)', '유가족(遺家族)', '유적(遺跡)'], reading: '남길 유', meaning: '유산', strokes: 19 },
        { char: '隱', examples: ['은닉(隱匿)', '은둔(隱遁)', '은폐(隱蔽)', '은거(隱居)', '은밀(隱密)'], reading: '숨을 은', meaning: '은폐', strokes: 17 },
        { char: '依', examples: ['의존(依存)', '의뢰(依賴)', '의지(依支)', '귀의(歸依)', '의거(依據)'], reading: '의지할 의', meaning: '의존', strokes: 8 },
        { char: '儀', examples: ['예의(禮儀)', '의식(儀式)', '축의금(祝儀金)', '장의(葬儀)', '의전(儀典)'], reading: '법 의', meaning: '예의', strokes: 15 },
        { char: '疑', examples: ['의심(疑心)', '의혹(疑惑)', '질의(質疑)', '혐의(嫌疑)', '반신반의(半信半疑)'], reading: '의심할 의', meaning: '의심', strokes: 14 },
        { char: '異', examples: ['차이(差異)', '이견(異見)', '이상(異常)', '상이(相異)', '이질(異質)'], reading: '다를 이', meaning: '차이', strokes: 11 },
        { char: '仁', examples: ['인자(仁慈)', '인의(仁義)', '인술(仁術)', '어진 마음', '살신성인(殺身成仁)'], reading: '어질 인', meaning: '인자', strokes: 4 },
        // ㅈ
        { char: '資', examples: ['자본(資本)', '자원(資源)', '자금(資金)', '투자(投資)', '자격(資格)'], reading: '재물 자', meaning: '자본', strokes: 13 },
        { char: '姿', examples: ['자세(姿勢)', '용자(容姿)', '자태(姿態)', '위용(威容)', '맵시'], reading: '모습 자', meaning: '자세', strokes: 9 },
        { char: '姉', examples: ['자매(姊妹)', '자형(姊兄)', '누님', '맏누이', '모자(母姊)'], reading: '형 자', meaning: '자매', strokes: 8 },
        { char: '殘', examples: ['잔액(殘額)', '잔혹(殘酷)', '잔여(殘餘)', '잔재(殘在)', '패잔병(敗殘兵)'], reading: '남을 잔', meaning: '잔여', strokes: 12 },
        { char: '雜', examples: ['잡지(雜誌)', '복잡(複雜)', '잡화(雜貨)', '혼잡(混雜)', '잡담(雜談)'], reading: '섞일 잡', meaning: '잡다', strokes: 18 },
        { char: '獎', examples: ['장려(奬勵)', '장학금(奬學金)', '권장(勸奬)', '포상(褒奬)', '장학생(奬學生)'], reading: '권할 장', meaning: '장려', strokes: 14 },
        { char: '裝', examples: ['장식(裝飾)', '포장(包裝)', '복장(服裝)', '위장(僞裝)', '장비(裝備)'], reading: '꾸밀 장', meaning: '장식', strokes: 13 },
        { char: '腸', examples: ['위장(胃腸)', '대장(大腸)', '소장(小腸)', '관장(灌腸)', '단장(斷腸)'], reading: '창자 장', meaning: '창자', strokes: 13 },
        { char: '張', examples: ['확장(擴張)', '주장(主張)', '과장(誇張)', '긴장(緊張)', '신장(伸張)'], reading: '베풀 장', meaning: '긴장', strokes: 11 },
        { char: '壯', examples: ['웅장(雄壯)', '장정(壯丁)', '장엄(莊嚴)', '건장(健壯)', '비장(悲壯)'], reading: '씩씩할 장', meaning: '장대', strokes: 7 },
        { char: '帳', examples: ['통장(通帳)', '휘장(揮帳)', '장부(帳簿)', '가계부(家計簿)', '일기장(日記帳)'], reading: '장막 장', meaning: '장막', strokes: 11 },
        { char: '底', examples: ['해저(海底)', '철저(徹底)', '기저(基底)', '저변(底邊)', '바닥'], reading: '밑 저', meaning: '저변', strokes: 8 },
        { char: '積', examples: ['누적(累積)', '면적(面積)', '적립(積立)', '실적(實績)', '축적(蓄積)'], reading: '쌓을 적', meaning: '누적', strokes: 16 },
        { char: '籍', examples: ['국적(國籍)', '서적(書籍)', '호적(戶籍)', '제적(除籍)', '학적(學籍)'], reading: '책 적', meaning: '국적', strokes: 20 },
        { char: '適', examples: ['적당(適當)', '적절(適切)', '적합(適合)', '적용(適用)', '적성(適性)'], reading: '맞을 적', meaning: '적합', strokes: 15 },
        { char: '績', examples: ['실적(實績)', '성적(成績)', '업적(業績)', '공적(功績)', '치적(治績)'], reading: '공 적', meaning: '업적', strokes: 17 },
        { char: '賊', examples: ['도적(盜賊)', '해적(海賊)', '역적(逆賊)', '오적(五賊)', '적반하장(賊反荷杖)'], reading: '도둑 적', meaning: '도적', strokes: 13 },
        { char: '專', examples: ['전문(專門)', '전공(專攻)', '전념(專念)', '전용(專用)', '전횡(專橫)'], reading: '오로지 전', meaning: '전문', strokes: 11 },
        { char: '轉', examples: ['운전(運轉)', '회전(回轉)', '반전(反轉)', '전환(轉換)', '역전(逆轉)'], reading: '구를 전', meaning: '전환', strokes: 18 },
        { char: '錢', examples: ['금전(金錢)', '동전(銅錢)', '환전(換錢)', '엽전(葉錢)', '전주(錢主)'], reading: '돈 전', meaning: '금전', strokes: 16 },
        { char: '折', examples: ['골절(骨折)', '좌절(挫折)', '절충(折衷)', '곡절(曲折)', '요절(夭折)'], reading: '꺾을 절', meaning: '굴절', strokes: 7 },
        { char: '點', examples: ['점수(點數)', '요점(要點)', '학점(學點)', '장점(長點)', '관점(觀點)'], reading: '점 점', meaning: '점', strokes: 17 },
        { char: '占', examples: ['독점(獨占)', '점령(占領)', '점거(占據)', '선점(先占)', '과점(寡占)'], reading: '점칠 점', meaning: '점거', strokes: 5 },
        { char: '靜', examples: ['정숙(靜肅)', '냉정(冷靜)', '정적(靜寂)', '안정(安靜)', '평정(平靜)'], reading: '고요할 정', meaning: '평정', strokes: 16 },
        { char: '丁', examples: ['장정(壯丁)', '정중(丁重)', '백정(白丁)', '정녕(丁寧)', '가정(家丁)'], reading: '고무래 정', meaning: '장정', strokes: 2 },
        { char: '整', examples: ['정리(整理)', '조정(調整)', '정돈(整頓)', '정비(整備)', '정렬(整列)'], reading: '가지런할 정', meaning: '정돈', strokes: 16 },
        { char: '帝', examples: ['황제(皇帝)', '제국(帝國)', '제왕(帝王)', '여제(女帝)', '천제(天帝)'], reading: '임금 제', meaning: '황제', strokes: 9 },
        { char: '條', examples: ['조건(條件)', '조항(條項)', '조약(條約)', '조목(條目)', '신조(信條)'], reading: '가지 조', meaning: '조건', strokes: 11 },
        { char: '潮', examples: ['조류(潮流)', '풍조(風潮)', '만조(滿潮)', '해조(海潮)', '조수(潮水)'], reading: '조수 조', meaning: '조류', strokes: 16 },
        { char: '組', examples: ['조직(組織)', '조립(組立)', '조합(組合)', '노조(勞組)', '조편성(組編成)'], reading: '짤 조', meaning: '조직', strokes: 11 },
        { char: '存', examples: ['존재(存在)', '생존(生存)', '보존(保存)', '존속(存續)', '의존(依存)'], reading: '있을 존', meaning: '존재', strokes: 6 },
        { char: '鍾', examples: ['종(鍾)', '자명종(自鳴鍾)', '종소리', '범종(梵鍾)', '일종(一鍾)'], reading: '쇠북 종', meaning: '종', strokes: 17 },
        { char: '從', examples: ['복종(服從)', '종사(從事)', '순종(順從)', '추종(追從)', '주종(主從)'], reading: '좇을 종', meaning: '종사', strokes: 11 },
        { char: '座', examples: ['좌석(座席)', '계좌(計座)', '좌표(座標)', '왕좌(王座)', '강좌(講座)'], reading: '자리 좌', meaning: '좌석', strokes: 10 },
        { char: '酒', examples: ['음주(飮酒)', '주류(酒類)', '주정(酒酊)', '애주가(愛酒家)', '맥주(麥酒)'], reading: '술 주', meaning: '술', strokes: 10 },
        { char: '朱', examples: ['주홍(朱紅)', '주색(朱色)', '주적(朱赤)', '주황(朱黃)', '주문(朱文)'], reading: '붉을 주', meaning: '주홍', strokes: 6 },
        { char: '周', examples: ['주위(周圍)', '일주(一周)', '주변(周邊)', '주도면밀(周到綿密)', '원주(圓周)'], reading: '두루 주', meaning: '주위', strokes: 8 },
        { char: '證', examples: ['증명(證明)', '보증(保證)'], reading: '증거 증', meaning: '증명', strokes: 19 },
        { char: '持', examples: ['유지(維持)', '지지(支持)'], reading: '가질 지', meaning: '유지', strokes: 10 },
        { char: '智', examples: ['지혜(智慧)', '지능(知能)'], reading: '지혜 지', meaning: '지혜', strokes: 12 },
        { char: '誌', examples: ['잡지(雜誌)', '일지(日誌)'], reading: '기록할 지', meaning: '잡지', strokes: 14 },
        { char: '織', examples: ['조직(組織)', '직물(織物)'], reading: '짤 직', meaning: '조직', strokes: 18 },
        { char: '珍', examples: ['진귀(珍貴)', '진미(珍味)'], reading: '보배 진', meaning: '진귀', strokes: 10 },
        { char: '盡', examples: ['매진(邁進)', '소진(消盡)'], reading: '다할 진', meaning: '진력', strokes: 14 },
        { char: '陣', examples: ['진영(陣營)', '진법(陣法)'], reading: '진칠 진', meaning: '진영', strokes: 10 },
        // ㅊ
        { char: '差', examples: ['차이(差異)', '오차(誤差)'], reading: '다를 차', meaning: '차이', strokes: 10 },
        { char: '讚', examples: ['찬양(讚揚)', '칭찬(稱讚)'], reading: '기릴 찬', meaning: '찬양', strokes: 19 },
        { char: '採', examples: ['채집(採集)', '채굴(採掘)'], reading: '캘 채', meaning: '채집', strokes: 11 },
        { char: '冊', examples: ['책방(冊房)'], reading: '책 책', meaning: '책', strokes: 5 },
        { char: '泉', examples: ['온천(溫泉)', '원천(源泉)'], reading: '샘 천', meaning: '온천', strokes: 9 },
        { char: '聽', examples: ['청취(聽取)', '경청(傾聽)'], reading: '들을 청', meaning: '청취', strokes: 22 },
        { char: '廳', examples: ['관청(官廳)', '시청(市廳)'], reading: '관청 청', meaning: '관청', strokes: 25 },
        { char: '招', examples: ['초청(招請)', '초대(招待)'], reading: '부를 초', meaning: '초청', strokes: 8 },
        { char: '推', examples: ['추진(推進)', '추천(推薦)'], reading: '밀 추', meaning: '추진', strokes: 11 },
        { char: '縮', examples: ['축소(縮小)', '단축(短縮)'], reading: '줄일 축', meaning: '축소', strokes: 17 },
        { char: '就', examples: ['취업(就業)', '성취(成就)'], reading: '나아갈 취', meaning: '취업', strokes: 12 },
        { char: '趣', examples: ['취미(趣味)', '취지(趣旨)'], reading: '뜻 취', meaning: '취미', strokes: 15 },
        { char: '層', examples: ['계층(階層)', '지층(地層)'], reading: '층 층', meaning: '계층', strokes: 15 },
        { char: '寢', examples: ['침실(寢室)', '취침(就寢)'], reading: '잘 침', meaning: '침실', strokes: 14 },
        { char: '針', examples: ['침술(針術)'], reading: '바늘 침', meaning: '바늘', strokes: 10 },
        { char: '稱', examples: ['칭호(稱號)', '명칭(名稱)'], reading: '일컬을 칭', meaning: '칭호', strokes: 14 },
        // ㅌ
        { char: '歎', examples: ['탄식(歎息)', '감탄(感歎)'], reading: '탄식할 탄', meaning: '탄식', strokes: 15 },
        { char: '彈', examples: ['탄환(彈丸)', '폭탄(爆彈)'], reading: '탄알 탄', meaning: '탄환', strokes: 15 },
        { char: '脫', examples: ['탈출(脫出)', '이탈(離脫)'], reading: '벗을 탈', meaning: '탈출', strokes: 11 },
        { char: '探', examples: ['탐색(探索)', '탐구(探究)'], reading: '찾을 탐', meaning: '탐색', strokes: 11 },
        { char: '擇', examples: ['선택(選擇)', '채택(採擇)'], reading: '가릴 택', meaning: '선택', strokes: 17 },
        { char: '討', examples: ['토벌(討伐)', '토론(討論)'], reading: '칠 토', meaning: '토벌', strokes: 10 },
        { char: '痛', examples: ['통증(痛症)', '고통(苦痛)'], reading: '아플 통', meaning: '통증', strokes: 12 },
        { char: '投', examples: ['투자(投資)', '투표(投票)'], reading: '던질 투', meaning: '투자', strokes: 7 },
        { char: '鬪', examples: ['투쟁(鬪爭)', '전투(戰鬪)'], reading: '싸울 투', meaning: '투쟁', strokes: 20 },
        // ㅍ
        { char: '派', examples: ['파견(派遣)', '당파(黨派)'], reading: '갈래 파', meaning: '파견', strokes: 10 },
        { char: '判', examples: ['판단(判斷)', '판결(判決)'], reading: '판단할 판', meaning: '판단', strokes: 7 },
        { char: '篇', examples: ['장편(長篇)'], reading: '책 편', meaning: '편', strokes: 15 },
        { char: '評', examples: ['평가(評價)', '호평(好評)'], reading: '평할 평', meaning: '평가', strokes: 12 },
        { char: '閉', examples: ['폐쇄(閉鎖)', '개폐(開閉)'], reading: '닫을 폐', meaning: '폐쇄', strokes: 11 },
        { char: '胞', examples: ['동포(同胞)', '세포(細胞)'], reading: '태 포', meaning: '동포', strokes: 9 },
        { char: '爆', examples: ['폭발(爆發)', '폭격(爆擊)'], reading: '터질 폭', meaning: '폭발', strokes: 19 },
        { char: '標', examples: ['표시(標示)', '목표(目標)'], reading: '표할 표', meaning: '표시', strokes: 15 },
        { char: '疲', examples: ['피로(疲勞)', '피곤(疲困)'], reading: '지칠 피', meaning: '피로', strokes: 10 },
        { char: '避', examples: ['회피(回避)', '도피(逃避)'], reading: '피할 피', meaning: '회피', strokes: 17 },
        // ㅎ
        { char: '閑', examples: ['한가(閑暇)', '한적(閑寂)'], reading: '한가할 한', meaning: '한가', strokes: 12 },
        { char: '恨', examples: ['원한(怨恨)', '한탄(恨歎)'], reading: '한 한', meaning: '원한', strokes: 9 },
        { char: '抗', examples: ['항거(抗拒)', '저항(抵抗)'], reading: '막을 항', meaning: '항거', strokes: 7 },
        { char: '核', examples: ['핵심(核心)', '핵무기(核武器)', '핵가족(核家族)', '핵폭탄(核爆彈)', '중핵(中核)'], reading: '씨 핵', meaning: '핵심', strokes: 10 },
        { char: '憲', examples: ['헌법(憲法)', '개헌(改憲)', '제헌(制憲)', '위헌(違憲)', '헌정(憲政)'], reading: '법 헌', meaning: '헌법', strokes: 16 },
        { char: '險', examples: ['위험(危險)', '모험(冒險)', '험악(險惡)', '험난(險難)', '보험(保險)'], reading: '험할 험', meaning: '위험', strokes: 16 },
        { char: '革', examples: ['혁신(革新)', '개혁(改革)', '혁명(革命)', '변혁(變革)', '피혁(皮革)'], reading: '가죽 혁', meaning: '혁신', strokes: 9 },
        { char: '顯', examples: ['현저(顯著)', '현미경(顯微鏡)', '현시(顯示)', '노골(露骨)', '현현(顯現)'], reading: '나타날 현', meaning: '현저', strokes: 23 },
        { char: '刑', examples: ['형벌(刑罰)', '사형(死刑)', '형사(刑事)', '형무소(刑務所)', '구형(求刑)'], reading: '형벌 형', meaning: '형벌', strokes: 6 },
        { char: '或', examples: ['혹시(或是)', '혹은(或은)', '간혹(間或)', '혹자(或者)', '미혹(迷惑)'], reading: '혹 혹', meaning: '혹시', strokes: 8 },
        { char: '婚', examples: ['결혼(結婚)', '이혼(離婚)', '기혼(旣婚)', '미혼(未婚)', '혼례(婚禮)'], reading: '혼인할 혼', meaning: '결혼', strokes: 11 },
        { char: '混', examples: ['혼합(混合)', '혼돈(混沌)', '혼란(混亂)', '혼동(混同)', '혼잡(混雜)'], reading: '섞을 혼', meaning: '혼합', strokes: 11 },
        { char: '紅', examples: ['홍색(紅色)', '홍조(紅潮)', '홍차(紅茶)', '홍안(紅顔)', '주홍(朱紅)'], reading: '붉을 홍', meaning: '홍색', strokes: 9 },
        { char: '華', examples: ['화려(華麗)', '중화(中華)', '번화(繁華)', '영화(榮華)', '호화(豪華)'], reading: '빛날 화', meaning: '화려', strokes: 12 },
        { char: '歡', examples: ['환희(歡喜)', '환영(歡迎)', '환호(歡呼)', '환송(歡送)', '환담(歡談)'], reading: '기쁠 환', meaning: '환희', strokes: 22 },
        { char: '環', examples: ['환경(環境)', '순환(循環)', '화환(花環)', '일환(一環)', '악순환(惡循環)'], reading: '고리 환', meaning: '환경', strokes: 17 },
        { char: '況', examples: ['상황(狀況)', '현황(現況)', '호황(好況)', '불황(不況)', '실황(實況)'], reading: '형편 황', meaning: '상황', strokes: 8 },
        { char: '灰', examples: ['회색(灰色)', '석회(石灰)', '화산재', '소석회(消石灰)', '재'], reading: '재 회', meaning: '회색', strokes: 6 },
        { char: '厚', examples: ['후덕(厚德)', '후대(厚待)', '중후(重厚)', '후하다', '비후(肥厚)'], reading: '두터울 후', meaning: '후덕', strokes: 9 },
        { char: '候', examples: ['후보(候補)', '기후(氣候)', '징후(徵候)', '기후(氣候)', '입후보(立候補)'], reading: '기다릴 후', meaning: '후보', strokes: 10 },
        { char: '揮', examples: ['지휘(指揮)', '발휘(發揮)', '휘장(揮帳)', '지휘자(指揮者)', '휘발(揮發)'], reading: '두를 휘', meaning: '휘두르다', strokes: 12 },
        { char: '喜', examples: ['기쁨(喜)', '희극(喜劇)', '희비(喜悲)', '환희(歡喜)', '희소식(喜消息)'], reading: '기쁠 희', meaning: '기쁨', strokes: 12 },
        { char: '愛', examples: ['사랑(愛)', '애정(愛情)', '애국(愛國)', '애호(愛好)', '친애(親愛)'], reading: '사랑 애', meaning: '사랑', strokes: 13 },
        { char: '惡', examples: ['악마(惡魔)', '혐오(嫌惡)', '악당(惡黨)', '악화(惡化)', '추악(醜惡)'], reading: '악할 악', meaning: '악하다', strokes: 12 },
        { char: '暗', examples: ['암흑(暗黑)', '암기(暗記)', '명암(明暗)', '암산(暗算)', '암시(暗示)'], reading: '어두울 암', meaning: '어둡다', strokes: 13 },
        { char: '壓', examples: ['압력(壓力)', '탄압(彈壓)', '압박(壓迫)', '기압(氣壓)', '억압(抑壓)'], reading: '누를 압', meaning: '누르다', strokes: 17 },
        { char: '野', examples: ['야생(野生)', '분야(分野)', '야구(野球)', '시야(視野)', '야외(野外)'], reading: '들 야', meaning: '들', strokes: 11 },
        { char: '陽', examples: ['태양(太陽)', '양지(陽地)', '석양(夕陽)', '양달', '양성(陽性)'], reading: '볕 양', meaning: '햇볕', strokes: 12 },
        { char: '養', examples: ['양육(養育)', '부양(扶養)', '소양(素養)', '배양(培養)', '요양(療養)'], reading: '기를 양', meaning: '기르다', strokes: 15 },
        { char: '言', examples: ['언어(言語)', '무언(無言)', '발언(發言)', '선언(宣言)', '조언(助言)'], reading: '말씀 언', meaning: '말', strokes: 7 },
        { char: '嚴', examples: ['엄격(嚴格)', '위엄(威嚴)', '엄중(嚴重)', '엄수(嚴守)', '존엄(尊嚴)'], reading: '엄할 엄', meaning: '엄하다', strokes: 20 },
        { char: '英', examples: ['영웅(英雄)', '영재(英才)', '영국(英國)', '영어(英語)', '영명(英明)'], reading: '꽃부리 영', meaning: '영어', strokes: 9 },
        { char: '永', examples: ['영원(永遠)', '영구(永久)', '영생(永生)', '영면(永眠)', '영겁(永劫)'], reading: '길 영', meaning: '영원', strokes: 5 },
        { char: '映', examples: ['영상(映像)', '상영(上映)', '반영(反映)', '방영(放映)', '영화(映畫)'], reading: '비칠 영', meaning: '비치다', strokes: 9 },
        { char: '營', examples: ['운영(運營)', '병영(兵營)', '경영(經營)', '진영(陣營)', '영업(營業)'], reading: '경영할 영', meaning: '경영', strokes: 17 },
        { char: '迎', examples: ['환영(歡迎)', '송구영신(送舊迎新)', '영접(迎接)', '영합(迎合)', '내방(來訪)'], reading: '맞을 영', meaning: '맞이하다', strokes: 8 },
        { char: '榮', examples: ['영광(榮光)', '번영(繁榮)', '영예(榮譽)', '영달(榮達)', '부귀영화(富貴榮華)'], reading: '영화 영', meaning: '영광', strokes: 14 },
        { char: '豫', examples: ['예고(予告)', '유예(猶豫)', '예측(豫測)', '예방(豫防)', '예산(豫算)'], reading: '미리 예', meaning: '미리', strokes: 16 },
        { char: '藝', examples: ['예술(藝術)', '연예(演藝)', '기예(技藝)', '문예(文藝)', '공예(工藝)'], reading: '재주 예', meaning: '예술', strokes: 19 },
        { char: '溫', examples: ['온기(溫氣)', '온정(溫情)', '온도(溫度)', '기온(氣溫)', '보온(保溫)'], reading: '따뜻할 온', meaning: '따뜻하다', strokes: 13 },
        { char: '容', examples: ['용모(容貌)', '내용(內容)', '수용(受容)', '용서(容恕)', '허용(許容)'], reading: '얼굴 용', meaning: '모양', strokes: 10 },
        { char: '友', examples: ['우정(友情)', '교우(交友)', '우호(友好)', '학우(學友)', '붕우(朋友)'], reading: '벗 우', meaning: '친구', strokes: 4 },
        { char: '雨', examples: ['우천(雨天)', '강우(降雨)', '호우(豪雨)', '뇌우(雷雨)', '우기(雨期)'], reading: '비 우', meaning: '비', strokes: 8 },
        { char: '雲', examples: ['운무(雲霧)', '성운(星雲)', '먹구름', '운집(雲集)', '청운(靑雲)'], reading: '구름 운', meaning: '구름', strokes: 12 },
        { char: '園', examples: ['공원(公園)', '정원(庭園)', '낙원(樂園)', '화원(花園)', '동물원(動物園)'], reading: '동산 원', meaning: '동산', strokes: 13 },
        { char: '遠', examples: ['원거리(遠距離)', '영원(永遠)', '소원(疏遠)', '요원(遙遠)', '원정(遠征)'], reading: '멀 원', meaning: '멀다', strokes: 14 },
        { char: '危', examples: ['위기(危機)', '위해(危害)', '위험(危險)', '위급(危急)', '위태(危殆)'], reading: '위태할 위', meaning: '위험', strokes: 6 },
        { char: '衛', examples: ['위생(衛生)', '호위(護衛)', '방위(防衛)', '수비(守備)', '위병(衛兵)'], reading: '지킬 위', meaning: '지키다', strokes: 16 },
        { char: '委', examples: ['위탁(委託)', '위원(委員)', '위임(委任)', '위촉(委囑)', '소위(所謂)'], reading: '맡길 위', meaning: '맡기다', strokes: 8 },
        { char: '偉', examples: ['위대(偉大)', '위인(偉人)', '위업(偉業)', '위용(偉容)', '기위(奇偉)'], reading: '클 위', meaning: '위대하다', strokes: 12 },
        { char: '由', examples: ['이유(理由)', '자유(自由)', '경유(經由)', '유래(由來)', '사유(事由)'], reading: '말미암을 유', meaning: '이유', strokes: 5 },
        { char: '遊', examples: ['놀이(遊)', '유원지(遊園地)', '유희(遊戱)', '부유(浮遊)', '유세(遊說)'], reading: '놀 유', meaning: '놀다', strokes: 13 },
        { char: '油', examples: ['석유(石油)', '주유(注油)', '유전(油田)', '식용유(食用油)', '유화(油畫)'], reading: '기름 유', meaning: '기름', strokes: 8 },
        { char: '乳', examples: ['유제품(乳製品)', '수유(授乳)', '우유(牛乳)', '모유(母乳)', '연유(煉乳)'], reading: '젖 유', meaning: '젖', strokes: 8 },
        { char: '陸', examples: ['육지(陸地)', '상륙(上陸)', '대륙(大陸)', '이륙(離陸)', '육군(陸軍)'], reading: '뭍 륙', meaning: '육지', strokes: 11 },
        { char: '銀', examples: ['은행(銀行)', '수은(水銀)', '은메달(銀-)', '은하수(銀河水)', '은(銀)'], reading: '은 은', meaning: '은', strokes: 14 },
        { char: '陰', examples: ['음지(陰地)', '음양(陰陽)', '음성(陰性)', '광음(光陰)', '녹음(綠陰)'], reading: '그늘 음', meaning: '그늘', strokes: 11 },
        { char: '泣', examples: ['통곡(痛哭)', '읍소(泣訴)', '감읍(感泣)', '호읍(號泣)', '울다'], reading: '울 읍', meaning: '울다', strokes: 8 },
        { char: '醫', examples: ['의사(醫師)', '의학(醫學)', '의원(醫院)', '의료(醫療)', '수의사(獸醫師)'], reading: '의원 의', meaning: '의사', strokes: 18 },
        { char: '衣', examples: ['의복(衣服)', '탈의(脫衣)', '의식주(衣食住)', '백의(白衣)', '수의(壽衣)'], reading: '옷 의', meaning: '옷', strokes: 6 },
        { char: '議', examples: ['의논(議論)', '회의(會議)', '의회(議會)', '결의(決議)', '논의(論議)'], reading: '의논할 의', meaning: '의논', strokes: 20 },
        { char: '依', examples: ['귀의(歸依)', '의거(依據)', '의존(依存)', '의지(依支)', '의뢰(依賴)'], reading: '의지할 의', meaning: '의지하다', strokes: 8 },
        { char: '異', examples: ['이색(異色)', '이상(異常)', '이견(異見)', '상이(相異)', '이변(異變)'], reading: '다를 이', meaning: '다르다', strokes: 11 },
        { char: '移', examples: ['이동(移動)', '이사(移徙)', '이민(移民)', '이전(移轉)', '추이(推移)'], reading: '옮길 이', meaning: '옮기다', strokes: 11 },
        { char: '益', examples: ['이익(利益)', '공익(公益)', '유익(有益)', '수익(收益)', '익조(益鳥)'], reading: '더할 익', meaning: '이익', strokes: 10 },
        { char: '印', examples: ['인쇄(印刷)', '도장(印章)', '인상(印象)', '날인(捺印)', '봉인(封印)'], reading: '도장 인', meaning: '도장', strokes: 6 },
        { char: '引', examples: ['인력(引力)', '견인(牽引)', '인용(引用)', '유인(誘引)', '인상(引上)'], reading: '끌 인', meaning: '끌다', strokes: 4 },
        { char: '認', examples: ['인정(認定)', '확인(確認)', '인식(認識)', '승인(承認)', '공인(公認)'], reading: '알 인', meaning: '인정', strokes: 14 },
        { char: '仁', examples: ['인자(仁慈)', '인의(仁義)', '인덕(仁德)', '인술(仁術)', '어질다'], reading: '어질 인', meaning: '어질다', strokes: 4 },
        { char: '任', examples: ['임무(任務)', '책임(責任)', '임명(任命)', '담임(擔任)', '위임(委任)'], reading: '맡길 임', meaning: '맡기다', strokes: 6 },
        { char: '臨', examples: ['임시(臨時)', '군림(君臨)', '임박(臨迫)', '임종(臨終)', '임검(臨檢)'], reading: '임할 림', meaning: '임하다', strokes: 17 },
        { char: '慈', examples: ['자비(慈悲)', '자애(慈愛)', '자선(慈善)', '인자(仁慈)', '자모(慈母)'], reading: '사랑 자', meaning: '사랑', strokes: 14 },
        { char: '紫', examples: ['자색(紫色)', '자외선(紫外線)', '자주색', '자청(紫靑)', '자단(紫檀)'], reading: '자주빛 자', meaning: '자주색', strokes: 12 },
        { char: '者', examples: ['학자(學者)', '환자(患者)', '기자(記者)', '독자(讀者)', '저자(著者)'], reading: '놈 자', meaning: '사람', strokes: 9 },
        { char: '資', examples: ['자금(資金)', '물자(物資)', '자원(資源)', '자본(資本)', '자질(資質)'], reading: '재물 자', meaning: '자산', strokes: 13 },
        { char: '章', examples: ['문장(文章)', '훈장(勳章)', '헌장(憲章)', '인장(印章)', '장구(章句)'], reading: '글 장', meaning: '글', strokes: 11 },
        { char: '張', examples: ['신장(伸張)', '과장(誇張)', '확장(擴張)', '주장(主張)', '긴장(緊張)'], reading: '베풀 장', meaning: '펴다', strokes: 11 },
        { char: '壯', examples: ['장담(壯談)', '장엄(莊嚴)', '웅장(雄壯)', '장정(壯丁)', '건장(健壯)'], reading: '씩씩할 장', meaning: '씩씩하다', strokes: 7 },
        { char: '將', examples: ['장군(將軍)', '장래(將來)', '장차(將次)', '장교(將校)', '대장(大將)'], reading: '장수 장', meaning: '장수', strokes: 11 },
        { char: '財', examples: ['재산(財産)', '재정(財政)', '재물(財物)', '문화재(文化財)', '재벌(財閥)'], reading: '재물 재', meaning: '재물', strokes: 10 },
        { char: '在', examples: ['존재(存在)', '현재(現在)', '부재(不在)', '소재(所在)', '재학(在學)'], reading: '있을 재', meaning: '있다', strokes: 6 },
        { char: '材', examples: ['재료(材料)', '목재(木材)', '소재(素材)', '인재(人材)', '기자재(機資材)'], reading: '재목 재', meaning: '재료', strokes: 7 },
        { char: '低', examples: ['저지(低地)', '저하(低下)', '최저(最低)', '저속(低速)', '저급(低級)'], reading: '낮을 저', meaning: '낮다', strokes: 7 },
        { char: '貯', examples: ['저금(貯金)', '저장(貯藏)', '저축(貯蓄)', '저수지(貯水池)', '저류(貯留)'], reading: '쌓을 저', meaning: '저축', strokes: 12 },
        { char: '著', examples: ['저자(著者)', '현저(顯著)', '저서(著書)', '저술(著述)', '저명(著名)'], reading: '나타날 저', meaning: '나타나다', strokes: 12 },
        { char: '赤', examples: ['적색(赤色)', '적십자(赤十字)', '적신호(赤信號)', '적자(赤字)', '적도(赤道)'], reading: '붉을 적', meaning: '붉다', strokes: 7 },
        { char: '的', examples: ['목적(目的)', '적중(的中)', '표적(標的)', '인위적(人爲的)', '지적(知的)'], reading: '과녁 적', meaning: '과녁', strokes: 8 },
        { char: '積', examples: ['적립(積立)', '체적(體積)', '누적(累積)', '축적(蓄積)', '적설(積雪)'], reading: '쌓을 적', meaning: '쌓다', strokes: 16 },
        { char: '敵', examples: ['적군(敵軍)', '천적(天敵)', '적대(敵對)', '적수(敵手)', '무적(無敵)'], reading: '원수 적', meaning: '적', strokes: 15 },
        { char: '傳', examples: ['전달(傳達)', '전통(傳統)', '전설(傳說)', '전기(傳記)', '전염(傳染)'], reading: '전할 전', meaning: '전하다', strokes: 13 },
        { char: '田', examples: ['전원(田園)', '유전(油田)', '논밭(田畓)', '전답(田畓)', '수전(水田)'], reading: '밭 전', meaning: '밭', strokes: 5 },
        { char: '典', examples: ['고전(古典)', '사전(辭典)', '의전(儀典)', '자전(字典)', '전형(典型)'], reading: '법 전', meaning: '법전', strokes: 8 },
        { char: '戰', examples: ['전쟁(戰爭)', '작전(作戰)', '전투(戰鬪)', '참전(參戰)', '휴전(休戰)'], reading: '싸울 전', meaning: '싸움', strokes: 16 },
        { char: '轉', examples: ['전직(轉職)', '역전(逆轉)', '회전(回轉)', '전환(轉換)', '이전(移轉)'], reading: '구를 전', meaning: '구르다', strokes: 18 },
        { char: '點', examples: ['점심(點心)', '학점(學點)', '점수(點數)', '강점(强點)', '관점(觀點)'], reading: '점 점', meaning: '점', strokes: 17 },
        { char: '店', examples: ['상점(商店)', '서점(書店)', '지점(支店)', '폐점(閉店)', '점원(店員)'], reading: '가게 점', meaning: '가게', strokes: 8 },
        { char: '接', examples: ['접촉(接觸)', '면접(面接)', '접근(接近)', '간접(間接)', '영접(迎接)'], reading: '사귈 접', meaning: '접하다', strokes: 11 },
        { char: '正', examples: ['정직(正直)', '정의(正義)', '정답(正答)', '부정(不正)', '정확(正確)'], reading: '바를 정', meaning: '바르다', strokes: 5 },
        { char: '定', examples: ['결정(決定)', '예정(豫定)', '안정(安定)', '고정(固定)', '정원(定員)'], reading: '정할 정', meaning: '정하다', strokes: 8 },
        { char: '政', examples: ['정치(政治)', '정부(政府)', '행정(行政)', '정당(政黨)', '정권(政權)'], reading: '정사 정', meaning: '정치', strokes: 9 },
        { char: '情', examples: ['감정(感情)', '정보(情報)', '정서(情緖)', '사정(事情)', '우정(友情)'], reading: '뜻 정', meaning: '정', strokes: 11 },
        { char: '靜', examples: ['정물(靜物)', '정적(靜寂)', '냉정(冷靜)', '안정(安靜)', '정숙(靜肅)'], reading: '고요할 정', meaning: '고요하다', strokes: 16 },
        { char: '精', examples: ['정신(精神)', '정성(精誠)', '정밀(精密)', '정예(精銳)', '요정(妖精)'], reading: '정할 정', meaning: '정밀', strokes: 14 },

    ],
    '3급': [
        // 3급 신규 배정한자 100자
        { char: '卻', examples: ['망각(忘卻)', '퇴각(退卻)', '냉각(冷却)', '소각(燒卻)', '기각(棄卻)'], reading: '물리칠 각', meaning: '물리치다', strokes: 7 },
        { char: '渴', examples: ['갈증(渴症)', '갈망(渴望)', '갈구(渴求)', '목마르다', '고갈(枯渴)'], reading: '목마를 갈', meaning: '목마르다', strokes: 12 },
        { char: '慨', examples: ['개탄(慨歎)', '분개(憤慨)', '감개(感慨)', '비분강개(悲憤慷慨)', '슬퍼하다'], reading: '슬퍼할 개', meaning: '슬퍼하다', strokes: 14 },
        { char: '皆', examples: ['개근(皆勤)', '평등(皆平等)-no', '모두', '다', '개개(皆皆)-no'], reading: '다 개', meaning: '모두', strokes: 9 },
        { char: '乞', examples: ['걸인(乞人)', '걸식(乞食)', '구걸(求乞)', '거지', '비는 사람'], reading: '빌 걸', meaning: '빌다', strokes: 3 },
        { char: '牽', examples: ['견인(牽引)', '견제(牽制)', '견강부회(牽强附會)', '이끌다', '끌다'], reading: '이끌 견', meaning: '이끌다', strokes: 11 },
        { char: '絹', examples: ['비단(絹)', '견직물(絹織物)', '명주', '견업(絹業)', '견포(絹布)'], reading: '비단 견', meaning: '비단', strokes: 13 },
        { char: '肩', examples: ['견장(肩章)', '비견(比肩)', '어깨', '견갑골(肩胛骨)', '견치(肩峙)'], reading: '어깨 견', meaning: '어깨', strokes: 8 },
        { char: '遣', examples: ['파견(派遣)', '소견(消遣)-no', '보내다', '선발', '지참금'], reading: '보낼 견', meaning: '보내다', strokes: 14 },
        { char: '卿', examples: ['경(卿)', '경대부(卿大夫)', '구경(九卿)', '공경(公卿)', '벼슬'], reading: '벼슬 경', meaning: '벼슬', strokes: 10 },
        { char: '竟', examples: ['필경(畢竟)', '경계(竟界)-no', '마침내', '끝내', '결국'], reading: '마침내 경', meaning: '마침내', strokes: 11 },
        { char: '繫', examples: ['연계(連繫)', '직계(直繫)', '계류(繫留)', '매다', '잇다'], reading: '맬 계', meaning: '매다', strokes: 19 },
        { char: '枯', examples: ['고갈(枯渴)', '고목(枯木)', '영고성쇠(榮枯盛衰)', '마르다', '시들다'], reading: '마를 고', meaning: '마르다', strokes: 9 },
        { char: '顧', examples: ['회고(回顧)', '고문(顧問)', '고객(顧客)', '삼고초려(三顧草廬)', '돌아보다'], reading: '돌아볼 고', meaning: '돌아보다', strokes: 21 },
        { char: '坤', examples: ['건곤(乾坤)', '곤위(坤位)', '땅', '어머니', '왕비'], reading: '땅 곤', meaning: '땅', strokes: 8 },
        { char: '郭', examples: ['성곽(城郭)', '외곽(外郭)', '윤곽(輪郭)', '곽(郭)', '둘레'], reading: '성곽 곽', meaning: '성곽', strokes: 11 },
        { char: '掛', examples: ['괘종(掛鐘)', '괘도(掛圖)', '괘념(掛念)', '걸다', '달다'], reading: '걸 괘', meaning: '걸다', strokes: 11 },
        { char: '塊', examples: ['금괴(金塊)', '빙괴(氷塊)', '덩어리', '흙덩이', '괴상(塊狀)'], reading: '흙덩이 괴', meaning: '덩이', strokes: 13 },
        { char: '愧', examples: ['참괴(慙愧)', '무괴(無愧)', '부끄럽다', '수치', '부끄러움'], reading: '부끄러울 괴', meaning: '부끄럽다', strokes: 13 },
        { char: '矯', examples: ['교정(矯正)', '교도소(矯導所)', '교각살우(矯角殺牛)', '바로잡다', '고치다'], reading: '바로잡을 교', meaning: '바로잡다', strokes: 17 },
        { char: '郊', examples: ['교외(郊外)', '근교(近郊)', '들', '야외', '성 밖'], reading: '들 교', meaning: '교외', strokes: 9 },
        { char: '俱', examples: ['불구대천(不俱戴天)', '구비(俱備)', '함께', '같이', '모두'], reading: '함께 구', meaning: '함께', strokes: 10 },
        { char: '懼', examples: ['공구(恐懼)', '송구(悚懼)', '두렵다', '무서워하다', '걱정하다'], reading: '두려워할 구', meaning: '두렵다', strokes: 22 },
        { char: '狗', examples: ['양두구육(羊頭狗肉)', '주구(走狗)', '이전투구(泥田鬪狗)', '개', '강아지'], reading: '개 구', meaning: '개', strokes: 8 },
        { char: '苟', examples: ['구차(苟且)', '미봉(彌縫)-no', '진실로', '만약', '다행히'], reading: '진실로 구', meaning: '진실로', strokes: 9 },
        { char: '驅', examples: ['구축(驅逐)', '구동(驅動)', '선구자(先驅者)', '몰다', '달리다'], reading: '몰 구', meaning: '몰다', strokes: 21 },
        { char: '龜', examples: ['귀감(龜鑑)', '귀갑(龜甲)', '거북', '거북이', '구열(龜裂)'], reading: '거북 구', meaning: '거북', strokes: 16 },
        { char: '軌', examples: ['궤도(軌道)', '궤적(軌跡)', '협궤(狹軌)', '바퀴자국', '법도'], reading: '바퀴자국 궤', meaning: '궤도', strokes: 9 },
        { char: '叫', examples: ['규탄(叫彈)', '절규(絶叫)', '부르짖다', '외치다', '소리치다'], reading: '부르짖을 규', meaning: '부르짖다', strokes: 6 },
        { char: '糾', examples: ['분규(紛糾)', '규합(糾合)', '규명(糾明)', '규탄(糾彈)', '얽히다'], reading: '얽힐 규', meaning: '규합', strokes: 9 },
        { char: '僅', examples: ['근근(僅僅)', '근소(僅少)', '겨우', '조금', '가까스로'], reading: '겨우 근', meaning: '겨우', strokes: 13 },
        { char: '斤', examples: ['근(斤)', '근량(斤量)', '도끼', '무게', '천근만근(千斤萬斤)'], reading: '근 근', meaning: '근', strokes: 4 },
        { char: '謹', examples: ['근조(謹弔)', '근신(謹愼)', '근하신년(謹賀新年)', '삼가다', '조심하다'], reading: '삼갈 근', meaning: '삼가다', strokes: 18 },
        { char: '肯', examples: ['긍정(肯定)', '수긍(首肯)', '즐기다', '옳다', '승낙하다'], reading: '즐길 긍', meaning: '즐기다', strokes: 8 },
        { char: '幾', examples: ['기하학(幾何學)', '기미(幾微)', '무기(無幾)', '몇', '거의'], reading: '몇 기', meaning: '몇', strokes: 12 },
        { char: '忌', examples: ['금기(禁忌)', '기피(忌避)', '기일(忌日)', '꺼리다', '미워하다'], reading: '꺼릴 기', meaning: '꺼리다', strokes: 7 },
        { char: '旣', examples: ['기존(旣存)', '기성(旣成)', '기수(旣遂)', '이미', '벌써'], reading: '이미 기', meaning: '이미', strokes: 11 },
        { char: '棄', examples: ['포기(抛棄)', '기권(棄權)', '유기(遺棄)', '파기(破棄)', '버리다'], reading: '버릴 기', meaning: '버리다', strokes: 12 },
        { char: '欺', examples: ['사기(詐欺)', '기만(欺瞞)', '자기기인(自欺欺人)', '속이다', '업신여기다'], reading: '속일 기', meaning: '속이다', strokes: 12 },
        { char: '豈', examples: ['기(豈)', '어찌', '어떻게', '설마', '행복'], reading: '어찌 기', meaning: '어찌', strokes: 10 },
        { char: '飢', examples: ['기아(飢餓)', '기근(飢饉)', '굶주리다', '배고프다', '흉년'], reading: '주릴 기', meaning: '굶주리다', strokes: 10 },
        { char: '那', examples: ['나(那)', '찰나(刹那)', '어찌', '어느', '무엇'], reading: '어찌 나', meaning: '어찌', strokes: 7 },
        { char: '乃', examples: ['내(乃)', '즉(乃)', '이에', '곧', '단지'], reading: '이에 내', meaning: '이에', strokes: 2 },
        { char: '奈', examples: ['나락(奈落)', '무의내(無意奈)', '어찌', '어떻게', '능금나무'], reading: '어찌 내', meaning: '어찌', strokes: 8 },
        { char: '惱', examples: ['고뇌(苦惱)', '번뇌(煩惱)', '오뇌(懊惱)', '괴로워하다', '성내다'], reading: '번뇌할 뇌', meaning: '번뇌', strokes: 12 },
        { char: '塗', examples: ['도료(塗料)', '도장(塗裝)', '도배(塗褙)', '칠하다', '바르다'], reading: '칠할 도', meaning: '칠하다', strokes: 13 },
        { char: '挑', examples: ['도전(挑戰)', '도발(挑發)', '돋우다', '꾀다', '들추다'], reading: '돋을 도', meaning: '돋다', strokes: 10 },
        { char: '稻', examples: ['수도(水稻)', '도작(稻作)', '벼', '나락', '쌀'], reading: '벼 도', meaning: '벼', strokes: 15 },
        { char: '跳', examples: ['도약(跳躍)', '도망(跳亡)', '반도(反跳)', '뛰다', '튀다'], reading: '뛸 도', meaning: '뛰다', strokes: 13 },
        { char: '篤', examples: ['독실(篤實)', '독학(篤學)', '위독(危篤)', '도탑다', '두텁다'], reading: '도타울 독', meaning: '도탑다', strokes: 16 },
        { char: '敦', examples: ['돈독(敦篤)', '돈목(敦睦)', '도탑다', '두텁다', '힘쓰다'], reading: '도타울 돈', meaning: '도탑다', strokes: 12 },
        { char: '豚', examples: ['양돈(養豚)', '돈육(豚肉)', '돼지', '돈사(豚舍)', '작은 돼지'], reading: '돼지 돈', meaning: '돼지', strokes: 11 },
        { char: '屯', examples: ['주둔(駐屯)', '둔전(屯田)', '진치다', '쌓이다', '언덕'], reading: '진칠 둔', meaning: '진치다', strokes: 4 },
        { char: '鈍', examples: ['둔감(鈍感)', '우둔(愚鈍)', '둔탁(鈍濁)', '둔하다', '무디다'], reading: '둔할 둔', meaning: '둔하다', strokes: 12 },
        { char: '騰', examples: ['급등(急騰)', '폭등(暴騰)', '비등(沸騰)', '오르다', '도약'], reading: '오를 등', meaning: '오르다', strokes: 20 },
        { char: '濫', examples: ['남용(濫用)', '남발(濫發)', '범람(氾濫)', '넘치다', '퍼지다'], reading: '넘칠 람', meaning: '넘치다', strokes: 18 },
        { char: '諒', examples: ['양해(諒解)', '살펴알다', '믿다', '참', '진실'], reading: '살펴알 량', meaning: '양해', strokes: 15 },
        { char: '憐', examples: ['가련(可憐)', '동련(同憐)', '불쌍히여기다', '어여삐여기다', '사랑하다'], reading: '불쌍히여길 련', meaning: '불쌍히여기다', strokes: 16 },
        { char: '劣', examples: ['열등(劣等)', '열악(劣惡)', '우열(優劣)', '졸렬(拙劣)', '못하다'], reading: '못할 렬', meaning: '못하다', strokes: 6 },
        { char: '廉', examples: ['청렴(淸廉)', '염치(廉恥)', '저렴(低廉)', '검소하다', '살피다'], reading: '청렴할 렴', meaning: '청렴', strokes: 13 },
        { char: '獵', examples: ['수렵(狩獵)', '밀렵(密獵)', '엽총(獵銃)', '사냥', '찾다'], reading: '사냥할 렵', meaning: '사냥', strokes: 18 },
        { char: '零', examples: ['영하(零下)', '영세(零細)', '떨어지다', '비오다', '조락하다'], reading: '떨어질 령', meaning: '영', strokes: 13 },
        { char: '隷', examples: ['노예(奴隷)', '복종(服從)-rel', '종', '붙다', '따르다'], reading: '종 례', meaning: '종', strokes: 16 },
        { char: '鹿', examples: ['사슴(鹿)', '녹용(鹿茸)', '녹피(鹿皮)', '지록위마(指鹿爲馬)', '나그네'], reading: '사슴 록', meaning: '사슴', strokes: 11 },
        { char: '了', examples: ['완료(完了)', '종료(終了)', '수료(修了)', '마치다', '깨닫다'], reading: '마칠 료', meaning: '마치다', strokes: 2 },
        { char: '僚', examples: ['동료(同僚)', '관료(官僚)', '막료(幕僚)', '벗', '짝'], reading: '동료 료', meaning: '동료', strokes: 14 },
        { char: '屢', examples: ['누차(屢次)', '창어누(創於屢)', '여러번', '자주', '번거로이'], reading: '여러 루', meaning: '여러번', strokes: 14 },
        { char: '淚', examples: ['눈물(淚)', '누선(淚腺)', '최루탄(催淚彈)', '낙루(落淚)', '울다'], reading: '눈물 루', meaning: '눈물', strokes: 11 },
        { char: '梨', examples: ['이화(梨花)', '배나무', '배', '성(姓)', '목이(木梨)'], reading: '배 리', meaning: '배', strokes: 11 },
        { char: '隣', examples: ['이웃(隣)', '인근(隣近)', '인접(隣接)', '이웃나라', '마을'], reading: '이웃 린', meaning: '이웃', strokes: 16 },
        { char: '慢', examples: ['오만(傲慢)', '거만(倨慢)', '태만(怠慢)', '거만하다', '게으르다'], reading: '거만할 만', meaning: '거만', strokes: 14 },
        { char: '漫', examples: ['만화(漫畫)', '산만(散漫)', '낭만(浪漫)', '흩어지다', '질펀하다'], reading: '흩어질 만', meaning: '만화', strokes: 14 },
        { char: '忘', examples: ['망각(忘却)', '망년회(忘年會)', '건망증(健忘症)', '잊다', '상실하다'], reading: '잊을 망', meaning: '잊다', strokes: 7 },
        { char: '忙', examples: ['공사다망(公私多忙)', '망중한(忙中閑)', '바쁘다', '분주하다', '조급하다'], reading: '바쁠 망', meaning: '바쁘다', strokes: 6 },
        { char: '罔', examples: ['망극(罔極)', '망연(罔然)', '그물', '없다', '속이다'], reading: '없을 망', meaning: '없다', strokes: 8 },
        { char: '茫', examples: ['망망대해(茫茫大海)', '망연(茫然)', '요원(遼遠)-rel', '아득하다', '넓다'], reading: '아득할 망', meaning: '아득하다', strokes: 10 },
        { char: '埋', examples: ['매장(埋葬)', '매몰(埋沒)', '파묻다', '묻다', '메우다'], reading: '묻을 매', meaning: '묻다', strokes: 10 },
        { char: '冥', examples: ['명복(冥福)', '명상(冥想)', '어둡다', '그윽하다', '저승'], reading: '어두울 명', meaning: '어둡다', strokes: 10 },
        { char: '侮', examples: ['모욕(侮辱)', '수모(受侮)', '조롱(嘲弄)-rel', '업신여기다', '깔보다'], reading: '업신여길 모', meaning: '업신여기다', strokes: 9 },
        { char: '冒', examples: ['모험(冒險)', '무릅쓰다', '감히', '덮어쓰다', '범하다'], reading: '무릅쓸 모', meaning: '무릅쓰다', strokes: 9 },
        { char: '募', examples: ['모집(募集)', '공모(公募)', '응모(應募)', '모으다', '뽑다'], reading: '모을 모', meaning: '모집', strokes: 13 },
        { char: '暮', examples: ['조삼모사(朝三暮四)', '세모(歲暮)', '저물다', '저녁', '늦다'], reading: '저물 모', meaning: '저물다', strokes: 15 },
        { char: '某', examples: ['모씨(某氏)', '모처(某處)', '아무', '어떤', '매(梅)'], reading: '아무 모', meaning: '아무', strokes: 9 },
        { char: '卯', examples: ['묘시(卯時)', '토끼', '방위', '넷째지지', '무성하다'], reading: '토끼 묘', meaning: '토끼', strokes: 5 },
        { char: '廟', examples: ['종묘(宗廟)', '사당(祠堂)', '문묘(文廟)', '신주(神主)', '혼'], reading: '사당 묘', meaning: '사당', strokes: 15 },
        { char: '苗', examples: ['종묘(種苗)', '청묘(靑苗)', '모', '모종', '백성'], reading: '모 묘', meaning: '모', strokes: 9 },
        { char: '戊', examples: ['무술(戊戌)', '무진(戊辰)', '무오(戊午)', '천간', '무성하다'], reading: '천간 무', meaning: '천간', strokes: 5 },
        { char: '霧', examples: ['안개(霧)', '운무(雲霧)', '오리무중(五里霧中)', '흐리다', '부옇다'], reading: '안개 무', meaning: '안개', strokes: 19 },
        { char: '眉', examples: ['미간(眉間)', '백미(白眉)', '눈썹', '가장자리', '노인'], reading: '눈썹 미', meaning: '눈썹', strokes: 9 },
        { char: '迷', examples: ['미로(迷路)', '미궁(迷宮)', '미몽(迷夢)', '혼미(昏迷)', '헤매다'], reading: '미혹할 미', meaning: '미혹', strokes: 10 },
        { char: '憫', examples: ['연민(憐憫)', '민망(憫惘)', '불쌍히여기다', '근심하다', '슬퍼하다'], reading: '민망할 민', meaning: '민망', strokes: 15 },
        { char: '敏', examples: ['민첩(敏捷)', '예민(銳敏)', '기민(機敏)', '재빠르다', '총명하다'], reading: '민첩할 민', meaning: '민첩', strokes: 11 },
        { char: '蜜', examples: ['꿀(蜜)', '밀월(蜜月)', '밀랍(蜜蠟)', '달콤하다', '은혜'], reading: '꿀 밀', meaning: '꿀', strokes: 14 },
        { char: '泊', examples: ['숙박(宿泊)', '정박(碇泊)', '담박(淡泊)', '머무르다', '배를대다'], reading: '머무를 박', meaning: '머무르다', strokes: 8 },
        { char: '薄', examples: ['박약(薄弱)', '경박(輕薄)', '박대(薄待)', '엷다', '싱겁다'], reading: '엷을 박', meaning: '엷다', strokes: 17 },
        { char: '拍', examples: ['박수(拍手)', '장단', '치다', '두드리다', '박자(拍子)'], reading: '칠 박', meaning: '치다', strokes: 9 },
        { char: '迫', examples: ['핍박(逼迫)', '절박(切迫)', '강박(强迫)', '박두(迫頭)', '급박(急迫)'], reading: '핍박할 박', meaning: '핍박', strokes: 9 },
        { char: '剝', examples: ['박탈(剝奪)', '박제(剝製)', '박피(剝皮)', '해부(解剖)', '벗기다'], reading: '벗길 박', meaning: '벗기다', strokes: 10 },
        { char: '般', examples: ['일반(一般)', '제반(諸般)', '전반(全般)', '반야(般若)', '가지'], reading: '가지 반', meaning: '가지', strokes: 10 },
        { char: '盤', examples: ['기반(基盤)', '나침반(羅針盤)', '원반(圓盤)', '반석(盤石)', '쟁반'], reading: '소반 반', meaning: '소반', strokes: 15 },
        // 3급 추가 100자
        { char: '伴', examples: ['수반(隨伴)', '반려(伴侶)', '동반(同伴)', '짝', '친구'], reading: '짝 반', meaning: '짝', strokes: 7 },
        { char: '叛', examples: ['반란(叛亂)', '배반(背叛)', '반역(叛逆)', '배신', '도망하다'], reading: '배반할 반', meaning: '배반', strokes: 9 },
        { char: '畔', examples: ['강반(江畔)', '논두렁', '밭두둑', '물가', '가장자리'], reading: '밭두둑 반', meaning: '두둑', strokes: 10 },
        { char: '倣', examples: ['모방(模倣)', '의방(依倣)', '본뜨다', '배우다', '흉내내다'], reading: '본뜰 방', meaning: '본뜨다', strokes: 10 },
        { char: '傍', examples: ['방관(傍觀)', '방청(傍聽)', '근방(近傍)', '곁', '옆'], reading: '곁 방', meaning: '곁', strokes: 12 },
        { char: '妨', examples: ['방해(妨害)', '무방(無妨)', '방애(妨碍)-no', '거리끼다', '해치다'], reading: '방해할 방', meaning: '방해', strokes: 7 },
        { char: '房', examples: ['문방구(文房具)', '난방(煖房)', '독방(獨房)', '사랑방', '방'], reading: '방 방', meaning: '방', strokes: 8 },
        { char: '紡', examples: ['방직(紡織)', '방적(紡績)', '혼방(混紡)', '길쌈', '잣다'], reading: '길쌈할 방', meaning: '방직', strokes: 10 },
        { char: '訪', examples: ['방문(訪問)', '내방(來訪)', '탐방(探訪)', '찾다', '묻다'], reading: '찾을 방', meaning: '방문', strokes: 11 },
        { char: '倍', examples: ['배수(倍數)', '갑절', '두배', '배증(倍增)', '곱절'], reading: '곱 배', meaning: '배', strokes: 10 },
        { char: '培', examples: ['배양(培養)', '재배(栽培)', '배지(培地)', '북돋우다', '가꾸다'], reading: '북돋을 배', meaning: '배양', strokes: 11 },
        { char: '排', examples: ['배척(排斥)', '배설(排泄)', '배수(排水)', '배구(排球)', '밀치다'], reading: '밀칠 배', meaning: '배척', strokes: 11 },
        { char: '杯', examples: ['건배(乾杯)', '고배(苦杯)', '술잔', '잔', '일배(一杯)'], reading: '잔 배', meaning: '잔', strokes: 8 },
        { char: '輩', examples: ['선배(先輩)', '후배(後輩)', '무뢰배(無賴輩)', '무리', '동료'], reading: '무리 배', meaning: '무리', strokes: 15 },
        { char: '配', examples: ['배치(配置)', '분배(分配)', '배달(配達)', '배우자(配偶者)', '나누다'], reading: '짝지을 배', meaning: '배치', strokes: 10 },
        { char: '伯', examples: ['백부(伯父)', '백작(伯爵)', '화공(畵工)-rel', '맏이', '우두머리'], reading: '맏 백', meaning: '맏', strokes: 7 },
        { char: '帆', examples: ['범선(帆船)', '순풍만범(順風滿帆)', '돛', '돛단배', '항해'], reading: '돛 범', meaning: '돛', strokes: 6 },
        { char: '凡', examples: ['평범(平凡)', '비범(非凡)', '범인(凡人)', '모든', '무릇'], reading: '모든 범', meaning: '범', strokes: 3 },
        { char: '壁', examples: ['절벽(絶壁)', '완벽(完璧)', '장벽(障壁)', '벽지(壁紙)', '벽화'], reading: '벽 벽', meaning: '벽', strokes: 16 },
        { char: '碧', examples: ['청벽(靑碧)', '벽안(碧眼)', '벽계(碧溪)', '푸르다', '에메랄드'], reading: '푸를 벽', meaning: '푸르다', strokes: 14 },
        { char: '辨', examples: ['변별(辨別)', '분변(分辨)', '변상(辨償)', '가리다', '따지다'], reading: '분별할 변', meaning: '분별', strokes: 16 },
        { char: '邊', examples: ['주변(周邊)', '해변(海邊)', '변경(邊境)', '가장자리', '끝'], reading: '가 변', meaning: '변두리', strokes: 19 },
        { char: '丙', examples: ['갑을병(甲乙丙)', '병자호란(丙子胡亂)', '셋째', '남녘', '불'], reading: '남녘 병', meaning: '병', strokes: 5 },
        { char: '柄', examples: ['권병(權柄)', '지병(持柄)-no', '자루', '권력', '근본'], reading: '자루 병', meaning: '자루', strokes: 9 },
        { char: '甫', examples: ['보(甫)', '두보(杜甫)', '상보(相甫)', '클', '비로소'], reading: '클 보', meaning: '보', strokes: 7 },
        { char: '補', examples: ['보충(補充)', '보상(補償)', '보조(補助)', '후보(候補)', '깁다'], reading: '기울 보', meaning: '보충', strokes: 13 },
        { char: '輔', examples: ['보좌(輔佐)', '순치(脣齒)의 보', '도움', '덧방나무', '돕다'], reading: '도울 보', meaning: '보조', strokes: 14 },
        { char: '封', examples: ['봉투(封套)', '밀봉(密封)', '봉건(封建)', '봉인(封印)', '봉하다'], reading: '봉할 봉', meaning: '봉하다', strokes: 9 },
        { char: '峯', examples: ['최고봉(最高峯)', '연봉(連峯)', '봉우리', '산봉우리', '정상'], reading: '봉우리 봉', meaning: '봉우리', strokes: 10 },
        { char: '蜂', examples: ['양봉(養蜂)', '여왕벌', '봉기(蜂起)', '벌', '벌집'], reading: '벌 봉', meaning: '벌', strokes: 13 },
        { char: '縫', examples: ['봉합(縫合)', '재봉(裁縫)', '천의무봉(天衣無縫)', '꿰매다', '바느질'], reading: '꿰맬 봉', meaning: '꿰매다', strokes: 16 },
        { char: '俸', examples: ['봉급(俸給)', '연봉(年俸)', '감봉(減俸)', '녹봉', '월급'], reading: '녹 봉', meaning: '봉급', strokes: 10 },
        { char: '鳳', examples: ['봉황(鳳凰)', '봉선화(鳳仙花)', '봉소(鳳巢)', '상상의 새', '수컷 봉황'], reading: '봉새 봉', meaning: '봉황', strokes: 14 },
        { char: '扶', examples: ['부양(扶養)', '상부상조(相扶相助)', '부조(扶助)', '돕다', '붙들다'], reading: '도울 부', meaning: '돕다', strokes: 7 },
        { char: '敷', examples: ['부설(敷設)', '피부(皮膚)-rel', '펴다', '깔다', '나누다'], reading: '펼 부', meaning: '펴다', strokes: 15 },
        { char: '斧', examples: ['부월(斧鉞)', '도끼', '작은 도끼', '찍다', '베다'], reading: '도끼 부', meaning: '도끼', strokes: 8 },
        { char: '簿', examples: ['장부(帳簿)', '명부(名簿)', '회계부', '문서', '기록'], reading: '문서 부', meaning: '장부', strokes: 19 },
        { char: '膚', examples: ['피부(皮膚)', '체부(體膚)', '완부(完膚)', '살갗', '껍질'], reading: '살갗 부', meaning: '피부', strokes: 15 },
        { char: '腐', examples: ['부패(腐敗)', '부식(腐蝕)', '두부(豆腐)', '썩다', '낡다'], reading: '썩을 부', meaning: '부패', strokes: 14 },
        { char: '赴', examples: ['부임(赴任)', '부회(赴會)', '나아가다', '다다르다', '알리다'], reading: '달려갈 부', meaning: '부임', strokes: 9 },
        { char: '訃', examples: ['부고(訃告)', '부음(訃音)', '통지', '알리다', '죽음'], reading: '부고 부', meaning: '부고', strokes: 9 },
        { char: '附', examples: ['부착(附着)', '첨부(添附)', '기부(寄附)', '붙다', '따르다'], reading: '붙을 부', meaning: '부착', strokes: 8 },
        { char: '憤', examples: ['분노(憤怒)', '울분(鬱憤)', '의분(義憤)', '분하다', '성내다'], reading: '분할 분', meaning: '분노', strokes: 15 },
        { char: '噴', examples: ['분수(噴水)', '분출(噴出)', '분화(噴火)', '뿜다', '토하다'], reading: '뿜을 분', meaning: '분출', strokes: 15 },
        { char: '墳', examples: ['고분(古墳)', '분묘(墳墓)', '봉분(封墳)', '무덤', '언덕'], reading: '무덤 분', meaning: '무덤', strokes: 15 },
        { char: '奮', examples: ['흥분(興奮)', '분발(奮發)', '고군분투(孤軍奮鬪)', '떨치다', '힘쓰다'], reading: '떨칠 분', meaning: '분발', strokes: 16 },
        { char: '粉', examples: ['분말(粉末)', '화분(花粉)', '분식(粉食)', '가루', '빻다'], reading: '가루 분', meaning: '가루', strokes: 10 },
        { char: '紛', examples: ['분쟁(紛爭)', '분실(紛失)', '여론이 분분(紛紛)', '어지럽다', '뒤섞이다'], reading: '어지러울 분', meaning: '분쟁', strokes: 10 },
        { char: '芬', examples: ['분기(芬氣)', '향기', '꽃내음', '어지럽다', '많다'], reading: '향기 분', meaning: '향기', strokes: 7 },
        { char: '拂', examples: ['지불(支拂)', '불식(拂拭)', '떨치다', '씻다', '거스르다'], reading: '떨칠 불', meaning: '불', strokes: 8 },
        { char: '佛', examples: ['불교(佛敎)', '불상(佛像)', '석가모니불', '부처', '깨달은 자'], reading: '부처 불', meaning: '부처', strokes: 7 },
        { char: '崩', examples: ['붕괴(崩壞)', '붕어(崩御)', '무너지다', '죽다', '떨어지다'], reading: '무너질 붕', meaning: '붕괴', strokes: 11 },
        { char: '朋', examples: ['붕우(朋友)', '붕당(朋黨)', '벗', '친구', '따르다'], reading: '벗 붕', meaning: '벗', strokes: 8 },
        { char: '鵬', examples: ['붕새(鵬)', '붕정만리(鵬程萬里)', '큰 새', '상상의 새', '거대하다'], reading: '붕새 붕', meaning: '붕새', strokes: 19 },
        { char: '砒', examples: ['비소(砒素)', '비상(砒霜)', '독약', '돌 이름', '비석'], reading: '비소 비', meaning: '비소', strokes: 9 },
        { char: '碑', examples: ['비석(碑石)', '기념비(紀念碑)', '묘비(墓碑)', '비문', '세우다'], reading: '비석 비', meaning: '비석', strokes: 13 },
        { char: '秘', examples: ['비밀(秘密)', '비법(秘法)', '신비(神秘)', '숨기다', '감추다'], reading: '숨길 비', meaning: '비밀', strokes: 10 },
        { char: '緋', examples: ['비단(緋緞)-no', '홍비(紅緋)', '붉은 비단', '붉다', '옷'], reading: '붉을 비', meaning: '진홍', strokes: 14 },
        { char: '肥', examples: ['비만(肥滿)', '비료(肥料)', '비옥(肥沃)', '살찌다', '기름지다'], reading: '살찔 비', meaning: '비만', strokes: 8 },
        { char: '裨', examples: ['비호(裨護)', '보비(補裨)', '도움', '보태다', '깁다'], reading: '도울 비', meaning: '보탬', strokes: 13 },
        { char: '非', examples: ['비상(非常)', '시비(是非)', '비난(非難)', '아니다', '그르다'], reading: '아닐 비', meaning: '비', strokes: 8 },
        { char: '飛', examples: ['비행(飛行)', '비상(飛翔)', '비약(飛躍)', '날다', '빠르다'], reading: '날 비', meaning: '날다', strokes: 9 },
        { char: '頻', examples: ['빈번(頻繁)', '빈발(頻發)', '빈도(頻度)', '자주', '찡그리다'], reading: '자주 빈', meaning: '빈번', strokes: 17 },
        { char: '瀕', examples: ['빈사(瀕死)', '임박하다', '가깝다', '물가', '다다르다'], reading: '물가 빈', meaning: '빈사', strokes: 19 },
        { char: '貧', examples: ['빈곤(貧困)', '빈부(貧富)', '청빈(淸貧)', '가난하다', '모자라다'], reading: '가난할 빈', meaning: '빈곤', strokes: 11 },
        { char: '賓', examples: ['빈객(賓客)', '귀빈(貴賓)', '주빈(主賓)', '손님', '대접하다'], reading: '손님 빈', meaning: '빈객', strokes: 14 },
        { char: '氷', examples: ['빙하(氷河)', '빙수(氷水)', '해빙(解氷)', '얼음', '차갑다'], reading: '얼음 빙', meaning: '빙', strokes: 5 },
        { char: '憑', examples: ['빙자(憑藉)', '증빙(證憑)', '기대다', '의지하다', '건너다'], reading: '기댈 빙', meaning: '빙자', strokes: 16 },
        { char: '騙', examples: ['기만(欺騙)', '사기', '속이다', '올라타다', '뛰어오르다'], reading: '속일 편', meaning: '사기', strokes: 19 },
        { char: '思', examples: ['사고(思考)', '사상(思想)', '의사(意思)', '생각하다', '그리워하다'], reading: '생각할 사', meaning: '사고', strokes: 9 },
        { char: '似', examples: ['유사(類似)', '사이비(似而非)', '흡사(恰似)', '닮다', '같다'], reading: '닮을 사', meaning: '유사', strokes: 7 },
        { char: '伺', examples: ['동정(動靜)을 살피다', '엿보다', '찾아뵙다', '여쭙다', '안부'], reading: '엿볼 사', meaning: '엿보다', strokes: 7 },
        { char: '使', examples: ['사용(使用)', '사명(使命)', '대사(大使)', '시키다', '부리다'], reading: '하여금 사', meaning: '사용', strokes: 8 },
        { char: '寺', examples: ['사찰(寺刹)', '불국사(佛國寺)', '절', '관청', '내시'], reading: '절 사', meaning: '사찰', strokes: 6 },
        { char: '嗣', examples: ['후사(後嗣)', '상속(相續)', '대잇다', '자손', '이어받다'], reading: '이을 사', meaning: '후사', strokes: 13 },
        { char: '師', examples: ['교사(敎師)', '의사(醫師)', '사제(師弟)', '스승', '군대'], reading: '스승 사', meaning: '스승', strokes: 10 },
        { char: '巳', examples: ['을사(乙巳)', '사시(巳時)', '뱀', '여섯째지지', '일어서다'], reading: '뱀 사', meaning: '사', strokes: 3 },
        { char: '斜', examples: ['사선(斜線)', '경사(傾斜)', '사면(斜面)', '비스듬하다', '기울다'], reading: '비낄 사', meaning: '비스듬', strokes: 11 },
        { char: '祀', examples: ['제사(祭祀)', '기제사', '제사를 지내다', '해', '년'], reading: '제사 사', meaning: '제사', strokes: 8 },
        { char: '蛇', examples: ['사족(蛇足)', '용두사미(龍頭蛇尾)', '장사(長蛇)', '뱀', '별 이름'], reading: '뱀 사', meaning: '뱀', strokes: 11 },
        { char: '詐', examples: ['사기(詐欺)', '사칭(詐稱)', '거짓', '속이다', '꾸미다'], reading: '속일 사', meaning: '사기', strokes: 12 },
        { char: '邪', examples: ['사악(邪惡)', '요사(妖邪)', '간사하다', '기울다', '마음이 바르지 않다'], reading: '간사할 사', meaning: '사악', strokes: 7 },
        { char: '舍', examples: ['기숙사(寄宿舍)', '관사(官舍)', '축사(畜舍)', '집', '머무르다'], reading: '집 사', meaning: '사', strokes: 8 },
        { char: '赦', examples: ['사면(赦免)', '특사(特赦)', '용서하다', '놓아주다', '탕감하다'], reading: '용서할 사', meaning: '사면', strokes: 11 },
        { char: '飼', examples: ['사육(飼育)', '사료(飼料)', '기르다', '먹이다', '치다'], reading: '기를 사', meaning: '사육', strokes: 13 },
        { char: '削', examples: ['삭제(削除)', '삭감(削減)', '첨삭(添削)', '깎다', '덜다'], reading: '깎을 삭', meaning: '삭제', strokes: 9 },
        { char: '朔', examples: ['초하루', '삭망(朔望)', '삭풍(朔風)', '북쪽', '시작'], reading: '초하루 삭', meaning: '삭', strokes: 10 },
        { char: '索', examples: ['수색(搜索)', '색인(索引)', '모색(摸索)', '찾다', '노끈'], reading: '찾을 삭', meaning: '색인', strokes: 10 },
        { char: '傘', examples: ['우산(雨傘)', '양산(陽傘)', '낙하산(落下傘)', '가리개', '산'], reading: '우산 산', meaning: '우산', strokes: 12 },
        { char: '酸', examples: ['산소(酸素)', '산성(酸性)', '신맛', '시다', '슬프다'], reading: '실 산', meaning: '산', strokes: 14 },
        { char: '霜', examples: ['설상가상(雪上加霜)', '서리', '세월', '엄하다', '냉혹하다'], reading: '서리 상', meaning: '서리', strokes: 17 },
        { char: '喪', examples: ['상실(喪失)', '상가(喪家)', '초상(初喪)', '잃다', '죽다'], reading: '잃을 상', meaning: '상실', strokes: 12 },
        { char: '嘗', examples: ['와신상담(臥薪嘗膽)', '맛보다', '일찍이', '경험하다', '시험하다'], reading: '맛볼 상', meaning: '상', strokes: 14 },
        { char: '尙', examples: ['숭상(崇尙)', '고상(高尙)', '시기상조(時機尙早)', '오히려', '숭배하다'], reading: '오히려 상', meaning: '상', strokes: 8 },
        // 3급 나머지 117자
        { char: '庶', examples: ['서민(庶民)', '서자(庶子)', '직계(直系)가 아닌', '여러', '거의'], reading: '여럿 서', meaning: '서민', strokes: 11 },
        { char: '恕', examples: ['용서(容恕)', '추서(推恕)', '용서하다', '동정하다', '어질다'], reading: '용서할 서', meaning: '용서', strokes: 10 },
        { char: '曙', examples: ['서광(曙光)', '새벽', '동트다', '밝다', '시작'], reading: '새벽 서', meaning: '새벽', strokes: 18 },
        { char: '棲', examples: ['서식(棲息)', '동거(同棲)', '깃들다', '살다', '보금자리'], reading: '깃들 서', meaning: '서식', strokes: 12 },
        { char: '緖', examples: ['정서(情緖)', '단서(端緖)', '실마리', '시초', '잇다'], reading: '실마리 서', meaning: '실마리', strokes: 14 },
        { char: '署', examples: ['서명(署名)', '경찰서(警察署)', '관청', '마을', '두다'], reading: '관청 서', meaning: '관청', strokes: 13 },
        { char: '誓', examples: ['맹세(盟誓)', '서약(誓約)', '선서(宣誓)', '맹세하다', '경계하다'], reading: '맹세할 서', meaning: '맹세', strokes: 14 },
        { char: '逝', examples: ['서거(逝去)', '가다', '죽다', '떠나다', '세월'], reading: '갈 서', meaning: '서거', strokes: 11 },
        { char: '鋤', examples: ['호미', '김매다', '없애다', '보습', '농기구'], reading: '호미 서', meaning: '호미', strokes: 15 },
        { char: '昔', examples: ['옛날', '금석지감(今昔之感)', '석일(昔日)', '밤', '저녁'], reading: '옛 석', meaning: '옛날', strokes: 8 },
        { char: '析', examples: ['분석(分析)', '해석(解析)', '쪼개다', '나누다', '판별하다'], reading: '쪼갤 석', meaning: '분석', strokes: 8 },
        { char: '汐', examples: ['조수(潮水)', '밀물', '저녁 조수', '물', '바다'], reading: '조수 석', meaning: '조수', strokes: 6 },
        { char: '惜', examples: ['애석(哀惜)', '아끼다', '아깝다', '가엾다', '탐하다'], reading: '아낄 석', meaning: '아끼다', strokes: 11 },
        { char: '碩', examples: ['석사(碩士)', '석학(碩學)', '크다', '충실하다', '머리가 크다'], reading: '클 석', meaning: '석사', strokes: 14 },
        { char: '仙', examples: ['신선(神仙)', '선녀(仙女)', '선경(仙境)', '신선', '날다'], reading: '신선 선', meaning: '신선', strokes: 5 },
        { char: '先', examples: ['선생(先生)', '우선(優先)', '선조(先祖)', '먼저', '앞'], reading: '먼저 선', meaning: '먼저', strokes: 6 },
        { char: '宣', examples: ['선언(宣言)', '선전(宣傳)', '선포(宣布)', '베풀다', '펴다'], reading: '베풀 선', meaning: '선언', strokes: 9 },
        { char: '旋', examples: ['선율(旋律)', '개선(凱旋)', '알선(斡旋)', '돌다', '구르다'], reading: '돌 선', meaning: '선회', strokes: 11 },
        { char: '扇', examples: ['부채', '선풍기(扇風機)', '방구부채', '부치다', '문짝'], reading: '부채 선', meaning: '부채', strokes: 10 },
        { char: '繕', examples: ['수선(修繕)', '영선(營繕)', '기는다', '고치다', '꾸미다'], reading: '기울 선', meaning: '수선', strokes: 18 },
        { char: '羨', examples: ['선망(羨望)', '부러워하다', '남다', '넘치다', '무덤 길'], reading: '부러워할 선', meaning: '부러움', strokes: 13 },
        { char: '腺', examples: ['갑상선(甲狀腺)', '임파선(淋巴腺)', '샘', '분비선', '선'], reading: '샘 선', meaning: '선', strokes: 13 },
        { char: '鮮', examples: ['신선(新鮮)', '생선(生鮮)', '선명(鮮明)', '조선(朝鮮)', '선혈(鮮血)'], reading: '고울 선', meaning: '신선', strokes: 17 },
        { char: '渉', examples: ['섭외(涉外)', '간섭(干涉)', '교섭(交涉)', '섭렵(涉獵)', '내정간섭(內政干涉)'], reading: '건널 섭', meaning: '섭외', strokes: 11 },
        { char: '攝', examples: ['섭취(攝取)', '포섭(包攝)', '섭정(攝政)', '섭리(攝理)', '섭생(攝生)'], reading: '잡을 섭', meaning: '섭취', strokes: 21 },
        { char: '穗', examples: ['출수(出穗)', '맥수(麥穗)', '화수(花穗)', '현수(懸穗)', '이삭'], reading: '이삭 수', meaning: '이삭', strokes: 17 },
        { char: '遂', examples: ['수행(遂行)', '완수(完遂)', '미수(未遂)', '기수(旣遂)', '득수(得遂)'], reading: '드디어 수', meaning: '수행', strokes: 13 },
        { char: '隧', examples: ['터널(隧道)', '수도(隧道)', '비수(鼻隧)', '지하터널', '동굴'], reading: '굴 수', meaning: '터널', strokes: 16 },
        { char: '需', examples: ['수요(需要)', '군수(軍需)', '필수(必需)', '내수(內需)', '수급(需給)'], reading: '구할 수', meaning: '수요', strokes: 14 },
        { char: '須', examples: ['필수(必須)', '수미(須彌)', '모름지기(須)', '잠시(須臾)', '수요(須要)'], reading: '모름지기 수', meaning: '필수', strokes: 12 },
        { char: '髓', examples: ['골수(骨髓)', '척수(脊髓)', '뇌수(腦髓)', '신수(腎髓)', '진수(眞髓)'], reading: '골 수', meaning: '골수', strokes: 21 },
        { char: '塾', examples: ['의숙(義塾)', '사숙(私塾)', '가숙(家塾)', '서당(書堂)', '글방'], reading: '서당 숙', meaning: '학원', strokes: 14 },
        { char: '淑', examples: ['숙녀(淑女)', '정숙(貞淑)', '요조숙녀(窈窕淑女)', '숙덕(淑德)', '현숙(賢淑)'], reading: '맑을 숙', meaning: '숙녀', strokes: 11 },
        { char: '宿', examples: ['숙박(宿泊)', '기숙사(寄宿舍)', '숙제(宿題)', '노숙(露宿)', '숙원(宿願)'], reading: '잘 숙', meaning: '숙박', strokes: 11 },
        { char: '熟', examples: ['성숙(成熟)', '숙달(熟達)', '미숙(未熟)', '숙련(熟練)', '익숙(熟)'], reading: '익을 숙', meaning: '익다', strokes: 15 },
        { char: '巡', examples: ['순찰(巡察)', '순회(巡回)', '순경(巡警)', '순례(巡禮)', '순시(巡視)'], reading: '돌 순', meaning: '순찰', strokes: 7 },
        { char: '循', examples: ['순환(循環)', '악순환(惡循環)', '인순(因循)', '순리(循理)', '순행(循行)'], reading: '따를 순', meaning: '순환', strokes: 12 },
        { char: '旬', examples: ['상순(上旬)', '중순(中旬)', '하순(下旬)', '순보(旬報)', '일순(一旬)'], reading: '열흘 순', meaning: '순', strokes: 6 },
        { char: '楯', examples: ['모순(矛盾)', '방패(楯)', '후순(後楯)', '순비(楯鼻)', '순지(楯指)'], reading: '방패 순', meaning: '방패', strokes: 13 },
        { char: '殉', examples: ['순직(殉職)', '순국(殉國)', '순교(殉敎)', '순애(殉愛)', '순사(殉死)'], reading: '따라죽을 순', meaning: '순직', strokes: 10 },
        { char: '淳', examples: ['순박(淳朴)', '순후(淳厚)', '순풍(淳風)', '순화(淳化)', '청순(淸淳)'], reading: '순박할 순', meaning: '순박', strokes: 11 },
        { char: '瞬', examples: ['순간(瞬間)', '일순(一瞬)', '순식간(瞬息間)', '순발력(瞬發力)', '전광석화(電光石火)'], reading: '눈깜짝일 순', meaning: '순간', strokes: 18 },
        { char: '脣', examples: ['입술(脣)', '구순(口脣)', '순치(脣齒)', '순망치한(脣亡齒寒)', '하순(下脣)'], reading: '입술 순', meaning: '입술', strokes: 11 },
        { char: '舜', examples: ['순임금(舜)', '요순(堯舜)', '요순시대(堯舜時代)', '우순풍조(雨順風調)-no', '순(舜)'], reading: '순임금 순', meaning: '순', strokes: 12 },
        { char: '蓴', examples: ['순채(蓴菜)', '순갱(蓴羹)', '순로(蓴鱸)', '순채국', '수련과'], reading: '순채 순', meaning: '순채', strokes: 14 },
        { char: '醇', examples: ['순수(醇粹)', '순박(醇朴)', '진순(眞醇)', '방순(芳醇)', '알코올'], reading: '순수할 순', meaning: '순수', strokes: 15 },
        { char: '順', examples: ['순서(順序)', '순리(順理)', '순종(順從)', '순조(順調)', '효순(孝順)'], reading: '순할 순', meaning: '순서', strokes: 12 },
        { char: '戌', examples: ['무술(戊戌)', '갑술(甲戌)', '병술(丙戌)', '술시(戌時)', '경술국치(庚戌國恥)'], reading: '개 술', meaning: '술', strokes: 6 },
        { char: '崇', examples: ['숭배(崇拜)', '숭고(崇高)', '숭상(崇尙)', '존숭(尊崇)', '숭모(崇慕)'], reading: '높을 숭', meaning: '숭고', strokes: 11 },
        { char: '承', examples: ['계승(繼承)', '승낙(承諾)', '승인(承認)', '전승(傳承)', '기승전결(起承轉結)'], reading: '이을 승', meaning: '승계', strokes: 8 },
        { char: '昇', examples: ['상승(上昇)', '승강(昇降)', '승급(昇級)', '승천(昇天)', '승화(昇華)'], reading: '오를 승', meaning: '상승', strokes: 8 },
        { char: '勝', examples: ['승리(勝利)', '우승(優勝)', '승부(勝負)', '필승(必勝)', '신승(辛勝)'], reading: '이길 승', meaning: '승리', strokes: 12 },
        { char: '繩', examples: ['포승(捕繩)', '줄넘기(繩)', '승묵(繩墨)', '자승자박(自繩自縛)', '결승(結繩)'], reading: '노끈 승', meaning: '줄', strokes: 19 },
        { char: '蒸', examples: ['증기(蒸氣)', '증발(蒸發)', '증류(蒸溜)', '훈증(薰蒸)', '찜질'], reading: '찔 승', meaning: '증기', strokes: 16 },
        { char: '侍', examples: ['시중(侍中)', '시녀(侍女)', '시위(侍衛)', '시종(侍從)', '상시(常侍)'], reading: '모실 시', meaning: '시중', strokes: 8 },
        { char: '匙', examples: ['시저(匙箸)', '홍시(紅匙)-no', '술가락(匙)', '은수저', '시립(匙笠)-no'], reading: '숟가락 시', meaning: '숟가락', strokes: 11 },
        { char: '嗜', examples: ['기호(嗜好)', '기호품(嗜好品)', '성시(性嗜)', '탐시(貪嗜)', '즐기다'], reading: '즐길 시', meaning: '기호', strokes: 13 },
        { char: '屍', examples: ['시체(屍體)', '강시(僵屍)', '검시(檢屍)', '행시주육(行屍走肉)', '시신(屍身)'], reading: '주검 시', meaning: '시체', strokes: 9 },
        { char: '市', examples: ['시장(市場)', '도시(都市)', '시민(市民)', '시내(市內)', '시정(市政)'], reading: '저자 시', meaning: '시장', strokes: 5 },
        { char: '弑', examples: ['시해(弑害)', '부시(父弑)', '군시(君弑)', '역모', '죽이다'], reading: '시해할 시', meaning: '시해', strokes: 12 },
        { char: '施', examples: ['시행(施行)', '실시(實施)', '시공(施工)', '시설(施設)', '보시(布施)'], reading: '베풀 시', meaning: '시행', strokes: 9 },
        { char: '是', examples: ['시비(是非)', '혹시(或是)', '국시(國是)', '시인(是認)', '역시(亦是)'], reading: '이 시', meaning: '시', strokes: 9 },
        { char: '柴', examples: ['시탄(柴炭)', '시비(柴扉)', '성시(盛柴)-no', '땔나무', '가시나무'], reading: '섶 시', meaning: '땔나무', strokes: 10 },
        { char: '矢', examples: ['소시(小矢)', '궁시(弓矢)', '시석(矢石)', '효시(嚆矢)', '일시(一矢)'], reading: '화살 시', meaning: '화살', strokes: 5 },
        { char: '視', examples: ['시선(視線)', '시력(視力)', '시야(視野)', '감시(監視)', '무시(無視)'], reading: '볼 시', meaning: '시각', strokes: 12 },
        { char: '試', examples: ['시험(試驗)', '시도(試圖)', '입시(入시)', '고시(考試)', '시련(試鍊)'], reading: '시험할 시', meaning: '시험', strokes: 13 },
        { char: '詩', examples: ['시인(詩人)', '시집(詩集)', '동시(童詩)', '한시(漢詩)', '서사시(敍事詩)'], reading: '시 시', meaning: '시', strokes: 13 },
        { char: '諡', examples: ['시호(諡號)', '증시(贈諡)', '추시(追諡)', '이름', '칭호'], reading: '시호 시', meaning: '시호', strokes: 16 },
        { char: '豕', examples: ['시(豕)', '저돌적(猪突的)-rel', '돼지', '봉시구우(封豕長蛇)', '가축'], reading: '돼지 시', meaning: '돼지', strokes: 7 },
        { char: '識', examples: ['지식(知識)', '상식(常識)', '의식(意識)', '인식(認識)', '식견(識見)'], reading: '알 식', meaning: '지식', strokes: 19 },
        { char: '飾', examples: ['장식(裝飾)', '수식(修飾)', '가식(假飾)', '분식(粉飾)', '치장(治粧)'], reading: '꾸밀 식', meaning: '장식', strokes: 13 },
        { char: '伸', examples: ['신장(伸張)', '신축(伸縮)', '굴신(屈伸)', '추신(追伸)', '펴다'], reading: '펼 신', meaning: '신장', strokes: 7 },
        { char: '侵', examples: ['침입(侵入)', '침략(侵略)', '침해(侵害)', '불가침(不可侵)', '침공(侵攻)'], reading: '침노할 침', meaning: '침입', strokes: 9 },
        { char: '娠', examples: ['임신(妊娠)', '수신(受娠)', '회신(懷娠)', '해산', '태아'], reading: '아이밸 신', meaning: '임신', strokes: 10 },
        { char: '愼', examples: ['신중(愼重)', '근신(謹愼)', '계신(戒愼)', '삼가다', '조심'], reading: '삼갈 신', meaning: '신중', strokes: 14 },
        { char: '新', examples: ['신문(新聞)', '혁신(革新)', '최신(最新)', '갱신(更新)', '신선(新鮮)'], reading: '새로울 신', meaning: '새롭다', strokes: 13 },
        { char: '晨', examples: ['혼정신성(昏定晨省)', '신성(晨省)', '새벽', '아침', '신명(晨明)'], reading: '새벽 신', meaning: '새벽', strokes: 11 },
        { char: '燼', examples: ['여진(餘燼)', '화진(火燼)', '재', '깜부기불', '타다 남은 것'], reading: '다 탈 신', meaning: '재', strokes: 18 },
        { char: '申', examples: ['신청(申請)', '신고(申告)', '상신(上申)', '신신당부(申申當付)', '거듭'], reading: '펼 신', meaning: '신', strokes: 5 },
        { char: '紳', examples: ['신사(紳士)', '토호열신(土豪劣紳)', '큰띠', '관원', '벼슬아치'], reading: '큰띠 신', meaning: '신사', strokes: 11 },
        { char: '腎', examples: ['신장(腎臟)', '신염(腎炎)', '부신(副腎)', '콩팥', '장기'], reading: '콩팥 신', meaning: '신장', strokes: 13 },
        { char: '臣', examples: ['신하(臣下)', '공신(功臣)', '충신(忠臣)', '가신(家臣)', '군신(君臣)'], reading: '신하 신', meaning: '신하', strokes: 7 },
        { char: '莘', examples: ['세신(細莘)', '족두리풀', '많다', '긴 모양', '지명'], reading: '많을 신', meaning: '많다', strokes: 10 },
        { char: '薪', examples: ['와신상담(臥薪嘗膽)', '장작', '땔나무', '급여', '월급'], reading: '섶 신', meaning: '땔나무', strokes: 17 },
        { char: '辛', examples: ['신고(辛苦)', '신랄(辛辣)', '신미(辛味)', '천신만고(千辛萬苦)', '맵다'], reading: '매울 신', meaning: '맵다', strokes: 7 },
        { char: '辰', examples: ['생신(生辰)', '일진(日辰)', '성진(星辰)', '북극성(北辰)', '때'], reading: '별 신', meaning: '진', strokes: 7 },
        { char: '迅', examples: ['신속(迅速)', '혁신(革迅)-no', '빠르다', '신뢰(迅雷)', '질주'], reading: '빠를 신', meaning: '신속', strokes: 6 },
        { char: '失', examples: ['실수(失手)', '실망(失望)', '분실(紛失)', '손실(損失)', '상실(喪失)'], reading: '잃을 실', meaning: '상실', strokes: 5 },
        { char: '室', examples: ['교실(敎室)', '침실(寢室)', '실내(室內)', '왕실(王室)', '거실(居室)'], reading: '집 실', meaning: '방', strokes: 9 },
        { char: '實', examples: ['사실(事實)', '실제(實際)', '실천(實踐)', '결실(結實)', '성실(誠實)'], reading: '열매 실', meaning: '실제', strokes: 14 },
        { char: '審', examples: ['심사(審査)', '심판(審判)', '심의(審議)', '재심(再審)', '불심검문(不審檢問)'], reading: '살필 심', meaning: '심사', strokes: 15 },
        { char: '尋', examples: ['심방(尋訪)', '심문(尋問)', '탐심(探尋)', '찾다', '묻다'], reading: '찾을 심', meaning: '심문', strokes: 12 },
        { char: '沈', examples: ['침묵(沈默)', '침몰(沈沒)', '침착(沈着)', '격침(擊沈)', '침전(沈澱)'], reading: '잠길 심', meaning: '침몰', strokes: 8 },
        { char: '深', examples: ['심해(深海)', '심각(深刻)', '관심(關心)-no', '심오(深奧)', '수심(水深)'], reading: '깊을 심', meaning: '깊다', strokes: 12 },
        { char: '甚', examples: ['심각(甚刻)-no', '극심(極甚)', '다행(多幸)-no', '심하다', '매우'], reading: '심할 심', meaning: '심하다', strokes: 9 },
        { char: '芯', examples: ['심지(芯地)', '등심(燈芯)', '중심(中心)-no', '골풀', '속'], reading: '심지 심', meaning: '심지', strokes: 7 },
        { char: '諶', examples: ['참(諶)', '진실', '믿다', '성(姓)', '이름'], reading: '참 심', meaning: '참', strokes: 16 },
        { char: '什', examples: ['집기(什器)', '십장(什長)', '가재도구', '열', '시경'], reading: '열 십', meaning: '열', strokes: 4 },
        { char: '雙', examples: ['쌍방(雙方)', '쌍둥이', '무쌍(無雙)', '일쌍(一雙)', '짝'], reading: '쌍 쌍', meaning: '쌍', strokes: 18 },
        { char: '氏', examples: ['씨족(氏族)', '성씨(姓氏)', '김씨(金氏)', '이씨(李氏)', '박씨(朴氏)'], reading: '성씨 씨', meaning: '씨', strokes: 4 },
        { char: '兒', examples: ['아동(兒童)', '유아(幼兒)', '남아(男兒)', '고아(孤兒)', '소아과(小兒科)'], reading: '아이 아', meaning: '아이', strokes: 8 },
        { char: '牙', examples: ['상아(象牙)', '아성(牙城)', '치아(齒牙)', '발아(發牙)', '어금니'], reading: '어금니 아', meaning: '이', strokes: 4 },
        { char: '芽', examples: ['발아(發芽)', '맹아(萌芽)', '유아(幼芽)', '싹', '시초'], reading: '싹 아', meaning: '싹', strokes: 8 },
        { char: '莪', examples: ['아호(莪蒿)', '쑥', '전아(前莪)', '풀 이름', '식물'], reading: '쑥 아', meaning: '쑥', strokes: 10 },
        { char: '蛾', examples: ['나방(蛾)', '독나방(毒蛾)', '누에나방', '아미(蛾眉)', '벌레'], reading: '나방 아', meaning: '나방', strokes: 13 },
        { char: '衙', examples: ['관아(官衙)', '아전(衙前)', '관청', '마을', '관저'], reading: '관청 아', meaning: '관청', strokes: 13 },
        { char: '訝', examples: ['의아(疑訝)', '괴아(怪訝)', '의심', '맞이하다', '놀라다'], reading: '의아할 아', meaning: '의아', strokes: 11 },
        { char: '雅', examples: ['우아(優雅)', '아악(雅樂)', '아호(雅號)', '청아(淸雅)', '단아(端雅)'], reading: '우아할 아', meaning: '우아', strokes: 12 },
        { char: '餓', examples: ['기아(飢餓)', '아사(餓死)', '아귀(餓鬼)', '굶주림', '배고픔'], reading: '주릴 아', meaning: '굶주림', strokes: 15 },
        { char: '鴉', examples: ['까마귀(鴉)', '반포지효(反哺之孝)-rel', '갈가마귀', '아편(鴉片)', '검다'], reading: '까마귀 아', meaning: '까마귀', strokes: 15 },
        // 3급 추가 (자~희)
        { char: '恣', examples: ['방자(放恣)', '자행(恣行)', '자유자재(自由恣在)', '멋대로', '마음대로'], reading: '방자할 자', meaning: '방자하다', strokes: 10 },
        { char: '玆', examples: ['금자(今玆)', '내자(來玆)', '재자(在玆)', '이에', '이'], reading: '이 자', meaning: '이/이에', strokes: 9 },
        { char: '爵', examples: ['작위(爵位)', '백작(伯爵)', '공작(公爵)', '벼슬', '술잔'], reading: '벼슬 작', meaning: '벼슬', strokes: 17 },
        { char: '酌', examples: ['참작(參酌)', '수작(酬酌)', '독작(獨酌)', '자작(自酌)', '짐작(斟酌)'], reading: '술부을 작', meaning: '따르다', strokes: 10 },
        { char: '墻', examples: ['담장(墻)', '월장(越墻)', '소무(蕭墻)-no', '담', '벽'], reading: '담 장', meaning: '담', strokes: 16 },
        { char: '哉', examples: ['쾌재(快哉)', '오호통재(嗚呼痛哉)', '어조사', '감탄사', '~라'], reading: '어조사 재', meaning: '어조사', strokes: 9 },
        { char: '宰', examples: ['재상(宰相)', '주재(主宰)', '재신(宰臣)', '도살(屠宰)', '다스리다'], reading: '재상 재', meaning: '재상', strokes: 10 },
        { char: '滴', examples: ['점적(點滴)', '수적(水滴)', '천적(穿滴)', '물방울', '방울'], reading: '물방울 적', meaning: '물방울', strokes: 14 },
        { char: '竊', examples: ['절도(竊盜)', '절취(竊取)', '표절(剽竊)', '절시(竊視)', '훔치다'], reading: '훔칠 절', meaning: '훔치다', strokes: 22 },
        { char: '蝶', examples: ['호접(胡蝶)', '화접(花蝶)', '나비', '나비넥타이', '접영(蝶泳)'], reading: '나비 접', meaning: '나비', strokes: 15 },
        { char: '訂', examples: ['정정(訂正)', '개정(改訂)', '교정(校訂)', '보정(補訂)', '바로잡다'], reading: '바로잡을 정', meaning: '바로잡다', strokes: 9 },
        { char: '堤', examples: ['제방(堤防)', '축제(築堤)', '방조제(防潮堤)', '둑', '제언(堤堰)'], reading: '둑 제', meaning: '둑', strokes: 12 },
        { char: '弔', examples: ['조문(弔問)', '조의(弔意)', '조기(弔旗)', '조객(弔客)', '근조(謹弔)'], reading: '조상할 조', meaning: '조상하다', strokes: 4 },
        { char: '燥', examples: ['건조(乾燥)', '조열(燥熱)', '조급(燥急)', '마르다', '타다'], reading: '마를 조', meaning: '마르다', strokes: 17 },
        { char: '拙', examples: ['졸작(拙作)', '졸속(拙速)', '졸렬(拙劣)', '서투르다', '어리석다'], reading: '졸할 졸', meaning: '졸하다', strokes: 8 },
        { char: '佐', examples: ['보좌(補佐)', '참좌(參佐)', '좌관(佐官)', '돕다', '도움'], reading: '도울 좌', meaning: '돕다', strokes: 7 },
        { char: '舟', examples: ['방주(方舟)', '주선(舟船)', '오월동주(吳越同舟)', '배', '조각배'], reading: '배 주', meaning: '배', strokes: 6 },
        { char: '俊', examples: ['준걸(俊傑)', '준수(俊秀)', '영준(英俊)', '재주', '뛰어나다'], reading: '준걸 준', meaning: '준걸', strokes: 9 },
        { char: '遵', examples: ['준수(遵守)', '준법(遵法)', '준행(遵行)', '좇다', '따르다'], reading: '좇을 준', meaning: '좇다', strokes: 15 },
        { char: '贈', examples: ['기증(寄贈)', '증정(贈呈)', '증여(贈與)', '증물(贈物)', '보내다'], reading: '줄 증', meaning: '주다', strokes: 19 },
        { char: '只', examples: ['단지(但只)', '유일(唯一)', '다만', '오직', '겨우'], reading: '다만 지', meaning: '다만', strokes: 5 },
        { char: '遲', examples: ['지각(遲刻)', '지연(遲延)', '지체(遲滯)', '지지(遲遲)', '더디다'], reading: '더딜 지', meaning: '더디다', strokes: 16 },
        { char: '差', examples: ['차이(差異)', '차별(差別)', '격차(格差)', '오차(誤差)', '시차(時差)'], reading: '어긋날 차', meaning: '어긋나다', strokes: 10 },
        { char: '捉', examples: ['포착(捕捉)', '착살(捉殺)', '체포(逮捕)', '잡다', '붙잡다'], reading: '잡을 착', meaning: '잡다', strokes: 10 },
        { char: '錯', examples: ['착오(錯誤)', '착각(錯覺)', '교착(交錯)', '착란(錯亂)', '섞이다'], reading: '섞일 착', meaning: '섞이다', strokes: 16 },
        { char: '墮', examples: ['타락(墮落)', '타태(墮胎)', '떨어지다', '무너지다', '게으르다'], reading: '떨어질 타', meaning: '떨어지다', strokes: 15 },
        { char: '妥', examples: ['타협(妥協)', '타당(妥當)', '타결(妥結)', '온당하다', '마땅하다'], reading: '온당할 타', meaning: '온당하다', strokes: 7 },
        { char: '托', examples: ['위탁(委托)', '청탁(請托)', '맡기다', '의탁(依托)', '부탁(付托)'], reading: '밀 탁', meaning: '밀다/맡기다', strokes: 6 },
        { char: '濁', examples: ['혼탁(混濁)', '탁류(濁流)', '탁주(濁酒)', '선청후탁(先淸後濁)', '흐리다'], reading: '흐릴 탁', meaning: '흐리다', strokes: 16 },
        { char: '濯', examples: ['세탁(洗濯)', '탁족(濯足)', '씻다', '빨다', '깨끗이하다'], reading: '씻을 탁', meaning: '씻다', strokes: 17 },
        { char: '卓', examples: ['탁월(卓越)', '탁자(卓子)', '탁견(卓見)', '식탁(食卓)', '높다'], reading: '높을 탁', meaning: '높다', strokes: 8 },
        { char: '歎', examples: ['탄식(歎息)', '감탄(感歎)', '한탄(恨歎)', '비탄(悲歎)', '개탄(慨歎)'], reading: '탄식할 탄', meaning: '탄식하다', strokes: 15 },
        { char: '彈', examples: ['탄환(彈丸)', '탄알(彈)', '폭탄(爆彈)', '탄성(彈性)', '규탄(糾彈)'], reading: '탄알 탄', meaning: '탄알', strokes: 15 },
        { char: '誕', examples: ['탄생(誕生)', '성탄(聖誕)', '탄신(誕辰)', '태어나다', '거짓말'], reading: '낳을 탄', meaning: '낳다', strokes: 14 },
        { char: '奪', examples: ['약탈(掠奪)', '강탈(强奪)', '박탈(剝奪)', '쟁탈(爭奪)', '빼앗다'], reading: '빼앗을 탈', meaning: '빼앗다', strokes: 14 },
        { char: '貪', examples: ['탐욕(貪慾)', '탐관오리(貪官汚吏)', '탐독(貪讀)', '탐하다', '욕심'], reading: '탐낼 탐', meaning: '탐내다', strokes: 11 },
        { char: '塔', examples: ['석탑(石塔)', '다보탑(多寶塔)', '탑', '철탑(鐵塔)', '기념탑'], reading: '탑 탑', meaning: '탑', strokes: 13 },
        { char: '湯', examples: ['탕약(湯藥)', '목욕탕(沐浴湯)', '설렁탕', '끓는 물', '온천'], reading: '끓을 탕', meaning: '끓다', strokes: 12 },
        { char: '怠', examples: ['권태(倦怠)', '태만(怠慢)', '나태(懶怠)', '게으르다', '소홀하다'], reading: '게으를 태', meaning: '게으르다', strokes: 9 },
        { char: '殆', examples: ['위태(危殆)', '거의', '자칫', '위험하다', '가까스로'], reading: '위태할 태', meaning: '위태하다', strokes: 9 },
        { char: '態', examples: ['태도(態度)', '상태(狀態)', '형태(形態)', '실태(實態)', '모양'], reading: '모양 태', meaning: '모양', strokes: 14 },
        { char: '罷', examples: ['파업(罷業)', '파면(罷免)', '파직(罷職)', '파장(罷場)', '마치다'], reading: '마칠 파', meaning: '마치다', strokes: 15 },
        { char: '派', examples: ['파견(派遺)', '파도(波濤)-no', '학파(學派)', '정파(政派)', '갈래'], reading: '갈래 파', meaning: '갈래', strokes: 9 },
        { char: '頗', examples: ['편파(偏頗)', '자못', '매우', '상당히', '치우치다'], reading: '자못 파', meaning: '자못', strokes: 14 },
        { char: '把', examples: ['파악(把握)', '파지(把持)', '잡다', '쥐다', '움키다'], reading: '잡을 파', meaning: '잡다', strokes: 7 },
        { char: '販', examples: ['판매(販賣)', '시판(市販)', '매판(買販)', '팔다', '장사'], reading: '팔 판', meaning: '팔다', strokes: 11 },
        { char: '版', examples: ['출판(出版)', '판본(版本)', '인쇄(印刷)-rel', '판목', '판권(版權)'], reading: '판목 판', meaning: '판목', strokes: 8 },
        { char: '陷', examples: ['함정(陷穽)', '결함(缺陷)', '함락(陷落)', '빠지다', '함몰(陷沒)'], reading: '빠질 함', meaning: '빠지다', strokes: 10 },
        { char: '抗', examples: ['항거(抗拒)', '저항(抵抗)', '반항(反抗)', '대항(對抗)', '겨루다'], reading: '겨룰 항', meaning: '겨루다', strokes: 7 },
        { char: '航', examples: ['항해(航海)', '항공(航空)', '운항(運航)', '항로(航路)', '순항(巡航)'], reading: '배 항', meaning: '배/항해', strokes: 10 },
        { char: '憲', examples: ['헌법(憲法)', '제헌(制憲)', '개헌(改憲)', '입헌(立憲)', '위헌(違憲)'], reading: '법 헌', meaning: '법', strokes: 16 },
        { char: '軒', examples: ['헌앙(軒昻)', '오죽헌(烏竹軒)', '추녀', '집', '높다'], reading: '추녀 헌', meaning: '추녀/집', strokes: 10 },
        { char: '恨', examples: ['한탄(恨歎)', '원한(怨恨)', '여한(餘恨)', '통한(痛恨)', '한맺히다'], reading: '한 한', meaning: '한', strokes: 9 },
        { char: '偕', examples: ['해로(偕老)', '백년해로(百年偕老)', '함께', '같이', '동반'], reading: '함께 해', meaning: '함께', strokes: 11 },
        { char: '享', examples: ['향유(享有)', '향락(享樂)', '향수(享受)', '누리다', '받다'], reading: '누릴 향', meaning: '누리다', strokes: 8 },
        { char: '響', examples: ['영향(影響)', '음향(音響)', '반향(反響)', '울리다', '교향곡(交響曲)'], reading: '울릴 향', meaning: '울리다', strokes: 20 },
        { char: '赫', examples: ['혁혁(赫赫)', '현혁(顯赫)', '빛나다', '붉다', '성내다'], reading: '빛날 혁', meaning: '빛나다', strokes: 14 },
        { char: '嫌', examples: ['혐오(嫌惡)', '혐의(嫌疑)', '싫어하다', '의심하다', '미워하다'], reading: '싫어할 혐', meaning: '싫어하다', strokes: 13 },
        { char: '協', examples: ['협력(協力)', '협동(協同)', '협조(協調)', '협의(協議)', '타협(妥協)'], reading: '화합할 협', meaning: '화합', strokes: 8 },
        { char: '惠', examples: ['은혜(恩惠)', '혜택(惠澤)', '수혜(受惠)', '자혜(慈惠)', '사랑'], reading: '은혜 혜', meaning: '은혜', strokes: 12 },
        { char: '惑', examples: ['유혹(誘惑)', '의혹(疑惑)', '미혹(迷惑)', '혼혹(昏惑)', '헤매다'], reading: '미혹할 혹', meaning: '미혹하다', strokes: 12 },
        { char: '忽', examples: ['소홀(疏忽)', '홀시(忽視)', '홀연(忽然)', '갑자기', '느닷없이'], reading: '갑자기 홀', meaning: '갑자기', strokes: 8 },
        { char: '弘', examples: ['홍익(弘益)', '홍보(弘報)', '홍대(弘大)', '넓다', '크다'], reading: '넓을 홍', meaning: '넓다', strokes: 5 },
        { char: '禍', examples: ['화근(禍根)', '재앙(災殃)', '화복(禍福)', '전화위복(轉禍爲福)', '재난'], reading: '재앙 화', meaning: '재앙', strokes: 14 },
        { char: '劃', examples: ['계획(計劃)', '기획(企劃)', '구획(區劃)', '획기적(劃期的)', '긋다'], reading: '그을 획', meaning: '긋다', strokes: 14 },
        { char: '歡', examples: ['환영(歡迎)', '환희(歡喜)', '환호(歡呼)', '기쁘다', '즐겁다'], reading: '기쁠 환', meaning: '기쁘다', strokes: 22 },
        { char: '慌', examples: ['황당(荒唐)', '공황(恐慌)', '당황(唐慌)', '어리둥절', '다급하다'], reading: '황공할 황', meaning: '황공하다', strokes: 12 },
        { char: '揮', examples: ['지휘(指揮)', '발휘(發揮)', '휘발(揮發)', '휘두르다', '뿌리다'], reading: '휘두를 휘', meaning: '휘두르다', strokes: 12 },
        { char: '攜', examples: ['휴대(携帶)', '제휴(提携)', '휴대전화', '이끌다', '들다'], reading: '이끌 휴', meaning: '이끌다', strokes: 21 },
        { char: '希', examples: ['희망(希望)', '희구(希求)', '희대(希代)', '바라다', '드물다'], reading: '바랄 희', meaning: '바라다', strokes: 7 },
        { char: '犧', examples: ['희생(犧牲)', '희생양(犧牲羊)', '제물', '바치다', '희생타'], reading: '희생 희', meaning: '희생', strokes: 20 },
    ],
    '3급II': [
        // 3급II 신규 배정한자 500자
        { char: '架', reading: '시렁 가', meaning: '가설', strokes: 9 },
        { char: '枷', reading: '칼 가', meaning: '도리깨', strokes: 9 },
        { char: '柯', reading: '가지 가', meaning: '가지', strokes: 9 },
        { char: '佳', reading: '아름다울 가', meaning: '가인', strokes: 8 },
        { char: '袈', reading: '가사 가', meaning: '가사', strokes: 11 },
        { char: '珏', reading: '쌍옥 각', meaning: '각', strokes: 9 },
        { char: '侃', reading: '강직할 간', meaning: '간', strokes: 8 },
        { char: '奸', reading: '간사할 간', meaning: '간사', strokes: 6 },
        { char: '杆', reading: '몽둥이 간', meaning: '간', strokes: 7 },
        { char: '竿', reading: '낚싯대 간', meaning: '간', strokes: 9 },
        { char: '艮', reading: '괘이름 간', meaning: '간', strokes: 6 },
        { char: '艱', reading: '어려울 간', meaning: '간난', strokes: 17 },
        { char: '諫', reading: '간할 간', meaning: '간언', strokes: 16 },
        { char: '褐', reading: '갈옷 갈', meaning: '갈색', strokes: 14 },
        { char: '葛', reading: '칡 갈', meaning: '갈등', strokes: 12 },
        { char: '勘', reading: '헤아릴 감', meaning: '감안', strokes: 11 },
        { char: '坎', reading: '구덩이 감', meaning: '감', strokes: 7 },
        { char: '嵌', reading: '산골짜기 감', meaning: '감', strokes: 12 },
        { char: '堪', reading: '견딜 감', meaning: '감내', strokes: 12 },
        { char: '憾', reading: '섭섭할 감', meaning: '유감', strokes: 16 },
        { char: '匣', reading: '가 갑', meaning: '갑', strokes: 7 },
        { char: '岬', reading: '곶 갑', meaning: '갑', strokes: 8 },
        { char: '鉀', reading: '갑옷 갑', meaning: '칼륨', strokes: 13 },
        { char: '康', reading: '편안 강', meaning: '건강', strokes: 11 },
        { char: '彊', reading: '굳세을 강', meaning: '강', strokes: 16 },
        { char: '橿', reading: '박달나무 강', meaning: '강', strokes: 17 },
        { char: '疆', reading: '지경 강', meaning: '강역', strokes: 19 },
        { char: '岡', reading: '산등성이 강', meaning: '강', strokes: 8 },
        { char: '綱', reading: '벼리 강', meaning: '강령', strokes: 14 },
        { char: '腔', reading: '빈속 강', meaning: '구강', strokes: 12 },
        { char: '개', reading: '낱 개', meaning: '개', strokes: 3 }, // 个 or 介
        { char: '介', reading: '낄 개', meaning: '소개', strokes: 4 },
        { char: '慨', reading: '슬퍼할 개', meaning: '비분강개', strokes: 14 },
        { char: '概', reading: '대개 개', meaning: '개요', strokes: 14 },
        { char: '蓋', reading: '덮을 개', meaning: '개', strokes: 14 },
        { char: '坑', reading: '구덩이 갱', meaning: '갱도', strokes: 7 },
        { char: '迲', reading: '갈 거', meaning: '거', strokes: 9 }, // Rare
        { char: '距', reading: '떨어질 거', meaning: '거리', strokes: 12 },
        { char: '据', reading: '일할 거', meaning: '거', strokes: 11 },
        { char: '鉅', reading: '클 거', meaning: '거물', strokes: 13 },
        { char: '乞', reading: '빌 걸', meaning: '거지', strokes: 3 },
        { char: '虔', reading: '정성 건', meaning: '경건', strokes: 10 },
        { char: '蹇', reading: '절뚝발이 건', meaning: '건', strokes: 17 },
        { char: '鍵', reading: '열쇠 건', meaning: '심건', strokes: 17 },
        { char: '愆', reading: '허물 건', meaning: '건', strokes: 13 },
        { char: '傑', reading: '뛰어날 걸', meaning: '걸작', strokes: 13 },
        { char: '儉', reading: '검소할 검', meaning: '검소', strokes: 15 },
        { char: '劍', reading: '칼 검', meaning: '검', strokes: 15 },
        { char: '瞼', reading: '눈꺼풀 검', meaning: '안검', strokes: 18 },
        { char: '鈐', reading: '비녀모양 검', meaning: '검', strokes: 12 },
        { char: '劫', reading: '위협할 겁', meaning: '겁박', strokes: 7 },
        { char: '偈', reading: '쉴 게', meaning: '게', strokes: 11 },
        { char: '憩', reading: '쉴 게', meaning: '휴게', strokes: 16 },
        { char: '格', reading: '격식 격', meaning: '격식', strokes: 10 },
        { char: '隔', reading: '사이뜰 격', meaning: '간격', strokes: 13 },
        { char: '牽', reading: '끌 견', meaning: '견인', strokes: 11 },
        { char: '絹', reading: '비단 견', meaning: '견', strokes: 13 },
        { char: '肩', reading: '어깨 견', meaning: '견', strokes: 8 },
        { char: '繭', reading: '고치 견', meaning: '견', strokes: 19 },
        { char: '遣', reading: '보낼 견', meaning: '파견', strokes: 16 },
        { char: '缺', reading: '이지러질 결', meaning: '결핍', strokes: 10 },
        { char: '決', reading: '결단할 결', meaning: '결정', strokes: 7 },
        { char: '潔', reading: '깨끗할 결', meaning: '청결', strokes: 15 },
        { char: '結', reading: '맺을 결', meaning: '결혼', strokes: 12 },
        { char: '兼', reading: '겸할 겸', meaning: '겸직', strokes: 10 },
        { char: '鉗', reading: '칼 겸', meaning: '겸', strokes: 13 },
        { char: '鎌', reading: '낫 겸', meaning: '겸', strokes: 18 },
        { char: '京', reading: '서울 경', meaning: '서울', strokes: 8 },
        { char: '頃', reading: '이랑 경', meaning: '경', strokes: 11 },
        { char: '耿', reading: '빛날 경', meaning: '경', strokes: 10 },
        { char: '莖', reading: '줄기 경', meaning: '경', strokes: 11 },
        { char: '警', reading: '경계할 경', meaning: '경찰', strokes: 20 },
        { char: '卿', reading: '벼슬 경', meaning: '경', strokes: 12 },
        { char: '庚', reading: '별 경', meaning: '경', strokes: 8 },
        { char: '徑', reading: '지름길 경', meaning: '직경', strokes: 10 },
        { char: '慶', reading: '경사 경', meaning: '경사', strokes: 15 },
        { char: '更', reading: '고칠 경', meaning: '갱신', strokes: 7 },
        { char: '硬', reading: '굳을 경', meaning: '경화', strokes: 12 },
        { char: '磬', reading: '경쇠 경', meaning: '경', strokes: 16 },
        { char: '經', reading: '지날 경', meaning: '경험', strokes: 13 },
        { char: '耕', reading: '밭갈 경', meaning: '경작', strokes: 10 },
        { char: '敬', reading: '공경 경', meaning: '공경', strokes: 13 },
        { char: '景', reading: '볕 경', meaning: '경치', strokes: 12 },
        { char: '輕', reading: '가벼울 경', meaning: '경량', strokes: 14 },
        { char: '驚', reading: '놀랄 경', meaning: '경악', strokes: 23 },
        { char: '鷄', reading: '닭 계', meaning: '계란', strokes: 21 },
        { char: '季', reading: '계절 계', meaning: '계절', strokes: 8 },
        { char: '屆', reading: '이를 계', meaning: '계', strokes: 8 },
        { char: '悸', reading: '두근거릴 계', meaning: '계', strokes: 11 },
        { char: '戒', reading: '계할 계', meaning: '계율', strokes: 7 },
        { char: '桂', reading: '계수나무 계', meaning: '계피', strokes: 10 },
        { char: '溪', reading: '시내 계', meaning: '계곡', strokes: 13 },
        { char: '界', reading: '지경 계', meaning: '세계', strokes: 9 },
        { char: '癸', reading: '열째천간 계', meaning: '계', strokes: 9 },
        { char: '系', reading: '이을 계', meaning: '계열', strokes: 7 },
        { char: '繋', reading: '맬 계', meaning: '계', strokes: 19 },
        { char: '繼', reading: '이을 계', meaning: '계승', strokes: 20 },
        { char: '計', reading: '셀 계', meaning: '계산', strokes: 9 },
        { char: '階', reading: '섬돌 계', meaning: '계단', strokes: 12 },
        { char: '古', reading: '옛 고', meaning: '고대', strokes: 5 },
        { char: '叩', reading: '두드릴 고', meaning: '고', strokes: 5 },
        { char: '告', reading: '알릴 고', meaning: '고백', strokes: 7 },
        { char: '呱', reading: '울 고', meaning: '고', strokes: 8 },
        { char: '固', reading: '굳을 고', meaning: '고정', strokes: 8 },
        { char: '尻', reading: '꽁무니 고', meaning: '고', strokes: 5 },
        { char: '庫', reading: '곳집 고', meaning: '창고', strokes: 10 },
        { char: '拷', reading: '칠 고', meaning: '고문', strokes: 9 },
        { char: '故', reading: '연고 고', meaning: '고향', strokes: 9 },
        { char: '枯', reading: '마를 고', meaning: '고목', strokes: 9 },
        { char: '沽', reading: '팔 고', meaning: '고', strokes: 8 },
        { char: '痼', reading: '고질 고', meaning: '고질', strokes: 13 },
        { char: '稿', reading: '원고 고', meaning: '원고', strokes: 15 },
        { char: '羔', reading: '새끼양 고', meaning: '고', strokes: 10 },
        { char: '考', reading: '상고할 고', meaning: '고려', strokes: 6 },
        { char: '股', reading: '넓적다리 고', meaning: '고', strokes: 8 },
        { char: '膏', reading: '기름 고', meaning: '고약', strokes: 14 },
        { char: '苦', reading: '쓸 고', meaning: '고생', strokes: 8 },
        { char: '菰', reading: '줄 고', meaning: '고', strokes: 11 },
        { char: '藁', reading: '짚 고', meaning: '고', strokes: 19 },
        { char: '蠱', reading: '벌레 고', meaning: '고', strokes: 23 },
        { char: '高', reading: '높을 고', meaning: '고등', strokes: 10 },
        { char: '鼓', reading: '북 고', meaning: '고무', strokes: 13 },
        { char: '曲', reading: '굽을 곡', meaning: '곡선', strokes: 6 },
        { char: '哭', reading: '울 곡', meaning: '통곡', strokes: 10 },
        { char: '斛', reading: '휘 곡', meaning: '곡', strokes: 11 },
        { char: '谷', reading: '골 곡', meaning: '계곡', strokes: 7 },
        { char: '穀', reading: '곡식 곡', meaning: '곡식', strokes: 14 },
        { char: '困', reading: '곤할 곤', meaning: '곤란', strokes: 7 },
        { char: '坤', reading: '땅 곤', meaning: '건곤', strokes: 8 },
        { char: '崑', reading: '산이름 곤', meaning: '곤륜산', strokes: 11 },
        { char: '昆', reading: '맏 곤', meaning: '곤충', strokes: 8 },
        { char: '梱', reading: '문지방 곤', meaning: '곤', strokes: 11 },
        { char: '棍', reading: '몽둥이 곤', meaning: '곤장', strokes: 12 },
        { char: '滾', reading: '흐를 곤', meaning: '곤', strokes: 14 },
        { char: '袞', reading: '곤룡포 곤', meaning: '곤룡포', strokes: 10 },
        { char: '鯤', reading: '곤어 곤', meaning: '곤', strokes: 19 },
        { char: '骨', reading: '뼈 골', meaning: '골절', strokes: 10 },
        { char: '供', reading: '이바지할 공', meaning: '공급', strokes: 8 },
        { char: '公', reading: '공변될 공', meaning: '공공', strokes: 4 },
        { char: '共', reading: '한가지 공', meaning: '공동', strokes: 6 },
        { char: '功', reading: '공 공', meaning: '공로', strokes: 5 },
        { char: '孔', reading: '구멍 공', meaning: '공', strokes: 4 },
        { char: '工', reading: '장인 공', meaning: '공장', strokes: 3 },
        { char: '恐', reading: '두려울 공', meaning: '공포', strokes: 10 },
        { char: '恭', reading: '공손할 공', meaning: '공손', strokes: 10 },
        { char: '攻', reading: '칠 공', meaning: '공격', strokes: 7 },
        { char: '拱', reading: '팔짱낄 공', meaning: '공', strokes: 9 },
        { char: '空', reading: '빌 공', meaning: '공허', strokes: 8 },
        { char: '貢', reading: '바칠 공', meaning: '공헌', strokes: 10 },
        { char: '鞏', reading: '굳을 공', meaning: '공고', strokes: 15 },
        { char: '串', reading: '곶 관', meaning: '관', strokes: 7 },
        { char: '寡', reading: '적을 과', meaning: '과부', strokes: 14 },
        { char: '戈', reading: '창 과', meaning: '과', strokes: 4 },
        { char: '瓜', reading: '오이 과', meaning: '과', strokes: 5 },
        { char: '科', reading: '과목 과', meaning: '과학', strokes: 9 },
        { char: '菓', reading: '과자 과', meaning: '과자', strokes: 11 },
        { char: '誇', reading: '자랑할 과', meaning: '과시', strokes: 13 },
        { char: '課', reading: '공부할 과', meaning: '과제', strokes: 15 },
        { char: '跨', reading: '타넘을 과', meaning: '과', strokes: 13 },
        { char: '過', reading: '지날 과', meaning: '과거', strokes: 12 },
        { char: '郭', reading: '둘레 곽', meaning: '성곽', strokes: 11 },
        { char: '廓', reading: '둘레 곽', meaning: '윤곽', strokes: 14 },
        { char: '藿', reading: '콩잎 곽', meaning: '곽', strokes: 20 },
        { char: '官', reading: '벼슬 관', meaning: '관리', strokes: 8 },
        { char: '寬', reading: '너그러울 관', meaning: '관대', strokes: 15 },
        { char: '慣', reading: '익숙할 관', meaning: '습관', strokes: 11 },
        { char: '棺', reading: '널 관', meaning: '관', strokes: 12 },
        { char: '款', reading: '항목 관', meaning: '약관', strokes: 12 },
        { char: '灌', reading: '물댈 관', meaning: '관개', strokes: 21 },
        { char: '管', reading: '대롱 관', meaning: '관리', strokes: 14 },
        { char: '罐', reading: '두레박 관', meaning: '관', strokes: 23 },
        { char: '觀', reading: '볼 관', meaning: '관찰', strokes: 25 },
        { char: '貫', reading: '꿸 관', meaning: '관통', strokes: 11 },
        { char: '關', reading: '빗장 관', meaning: '관심', strokes: 19 },
        { char: '刮', reading: '깎을 괄', meaning: '괄목상대', strokes: 8 },
        { char: '括', reading: '묶을 괄', meaning: '포괄', strokes: 9 },
        { char: '適', reading: '맞을 적', meaning: '적당', strokes: 15 },
        { char: '光', reading: '빛 광', meaning: '광명', strokes: 6 },
        { char: '廣', reading: '넓을 광', meaning: '광대', strokes: 15 },
        { char: '曠', reading: '밝을 광', meaning: '광', strokes: 19 },
        { char: '狂', reading: '미칠 광', meaning: '광기', strokes: 7 },
        { char: '筐', reading: '광주리 광', meaning: '광', strokes: 12 },
        { char: '鑛', reading: '쇳돌 광', meaning: '광산', strokes: 23 },
        { char: '卦', reading: '점괘 괘', meaning: '괘', strokes: 8 },
        { char: '掛', reading: '걸 괘', meaning: '괘도', strokes: 11 },
        { char: '乖', reading: '어그러질 괴', meaning: '괴리', strokes: 8 },
        { char: '傀', reading: '허수아비 괴', meaning: '괴뢰', strokes: 12 },
        { char: '塊', reading: '덩어리 괴', meaning: '괴', strokes: 13 },
        { char: '壞', reading: '무너질 괴', meaning: '파괴', strokes: 19 },
        { char: '怪', reading: '기이할 괴', meaning: '괴물', strokes: 8 },
        { char: '愧', reading: '부끄러울 괴', meaning: '참괴', strokes: 13 },
        { char: '拐', reading: '속일 괴', meaning: '유괴', strokes: 8 },
        { char: '魁', reading: '우두머리 괴', meaning: '괴수', strokes: 14 },
        { char: '宏', reading: '클 굉', meaning: '광굉', strokes: 7 },
        { char: '紘', reading: '벼리 굉', meaning: '굉', strokes: 10 },
        { char: '轟', reading: '울릴 굉', meaning: '굉음', strokes: 21 },
        { char: '交', reading: '사귈 교', meaning: '교제', strokes: 6 },
        { char: '僑', reading: '높을 교', meaning: '교포', strokes: 14 },
        { char: '咬', reading: '물 교', meaning: '교', strokes: 9 },
        { char: '喬', reading: '높을 교', meaning: '교', strokes: 12 },
        { char: '嬌', reading: '아리따울 교', meaning: '교태', strokes: 15 },
        { char: '巧', reading: '공교할 교', meaning: '기교', strokes: 5 },
        { char: '敎', reading: '가르칠 교', meaning: '교육', strokes: 11 },
        { char: '校', reading: '학교 교', meaning: '학교', strokes: 10 },
        { char: '橋', reading: '다리 교', meaning: '교량', strokes: 16 },
        { char: '狡', reading: '교활할 교', meaning: '교활', strokes: 9 },
        { char: '矯', reading: '바로잡을 교', meaning: '교정', strokes: 17 },
        { char: '絞', reading: '목맬 교', meaning: '교수', strokes: 12 },
        { char: '翹', reading: '발돋움할 교', meaning: '교', strokes: 18 },
        { char: '膠', reading: '아교 교', meaning: '교착', strokes: 15 },
        { char: '蕎', reading: '메밀 교', meaning: '교맥', strokes: 15 },
        { char: '蛟', reading: '교룡 교', meaning: '교룡', strokes: 12 },
        { char: '覺', reading: '깨달을 각', meaning: '각성', strokes: 20 },
        { char: '較', reading: '견줄 교', meaning: '비교', strokes: 13 },
        { char: '轎', reading: '가마 교', meaning: '교', strokes: 19 },
        { char: '郊', reading: '들 교', meaning: '교외', strokes: 9 },
        { char: '丘', reading: '언덕 구', meaning: '구릉', strokes: 5 },
        { char: '久', reading: '오랠 구', meaning: '영구', strokes: 3 },
        { char: '九', reading: '아홉 구', meaning: '구', strokes: 2 },
        { char: '仇', reading: '원수 구', meaning: '복수', strokes: 4 },
        { char: '俱', reading: '함께 구', meaning: '구', strokes: 10 },
        { char: '具', reading: '갖출 구', meaning: '도구', strokes: 8 },
        { char: '勾', reading: '굽을 구', meaning: '구', strokes: 4 },
        { char: '區', reading: '구역 구', meaning: '구역', strokes: 11 },
        { char: '口', reading: '입 구', meaning: '입구', strokes: 3 },
        { char: '句', reading: '글귀 구', meaning: '문구', strokes: 5 },
        { char: '咎', reading: '허물 구', meaning: '구', strokes: 8 },
        { char: '嘔', reading: '토할 구', meaning: '구토', strokes: 14 },
        { char: '坵', reading: '언덕 구', meaning: '구', strokes: 8 },
        { char: '垢', reading: '때 구', meaning: '무구', strokes: 9 },
        { char: '寇', reading: '도둑 구', meaning: '왜구', strokes: 11 },
        { char: '工', reading: '장인 공', meaning: '공장', strokes: 3 },
        { char: '廐', reading: '마구간 구', meaning: '구', strokes: 13 },
        { char: '懼', reading: '두려워할 구', meaning: '외구', strokes: 21 },
        { char: '拘', reading: '잡을 구', meaning: '구속', strokes: 8 },
        { char: '救', reading: '구원할 구', meaning: '구조', strokes: 11 },
        { char: '枸', reading: '구기자 구', meaning: '구기자', strokes: 9 },
        { char: '柩', reading: '널 구', meaning: '영구', strokes: 9 },
        { char: '構', reading: '얽을 구', meaning: '구성', strokes: 14 },
        { char: '歐', reading: '구라파 구', meaning: '구주', strokes: 15 },
        { char: '毆', reading: '때릴 구', meaning: '구타', strokes: 15 },
        { char: '毬', reading: '공 구', meaning: '채구', strokes: 11 },
        { char: '求', reading: '구할 구', meaning: '요구', strokes: 7 },
        { char: '溝', reading: '도랑 구', meaning: '하수구', strokes: 13 },
        { char: '灸', reading: '뜸 구', meaning: '침구', strokes: 7 },
        { char: '狗', reading: '개 구', meaning: '주구', strokes: 8 },
        { char: '玖', reading: '옥돌 구', meaning: '구', strokes: 7 },
        { char: '球', reading: '공 구', meaning: '지구', strokes: 11 },
        { char: '瞿', reading: '볼 구', meaning: '구', strokes: 18 },
        { char: '矩', reading: '곱자 구', meaning: '규구', strokes: 9 },
        { char: '究', reading: '연구할 구', meaning: '연구', strokes: 7 },
        { char: '紅', reading: '붉을 홍', meaning: '홍색', strokes: 9 },
        { char: '衢', reading: '네거리 구', meaning: '강구', strokes: 24 },
        { char: '謳', reading: '노래할 구', meaning: '구', strokes: 18 },
        { char: '購', reading: '살 구', meaning: '구입', strokes: 17 },
        { char: '軀', reading: '몸 구', meaning: '체구', strokes: 18 },
        { char: '逑', reading: '짝 구', meaning: '구', strokes: 10 },
        { char: '鈎', reading: '갈고리 구', meaning: '구', strokes: 12 },
        { char: '韝', reading: '활팔찌 구', meaning: '구', strokes: 18 },
        { char: '駒', reading: '망아지 구', meaning: '구', strokes: 15 },
        { char: '驅', reading: '몰 구', meaning: '구동', strokes: 21 },
        { char: '鳩', reading: '비둘기 구', meaning: '구', strokes: 13 },
        { char: '鷗', reading: '갈매기 구', meaning: '갈매기', strokes: 22 },
        { char: '國', reading: '나라 국', meaning: '국가', strokes: 11 },
        { char: '局', reading: '판 국', meaning: '국면', strokes: 7 },
        { char: '菊', reading: '국화 국', meaning: '국화', strokes: 11 },
        { char: '鞠', reading: '국문할 국', meaning: '국문', strokes: 17 },
        { char: '君', reading: '임금 군', meaning: '군주', strokes: 7 },
        { char: '窘', reading: '군색할 군', meaning: '군색', strokes: 12 },
        { char: '群', reading: '무리 군', meaning: '군중', strokes: 13 },
        { char: '裙', reading: '치마 군', meaning: '치마', strokes: 12 },
        { char: '軍', reading: '군사 군', meaning: '군대', strokes: 9 },
        { char: '郡', reading: '고을 군', meaning: '군', strokes: 10 },
        { char: '堀', reading: '굴 굴', meaning: '토굴', strokes: 11 },
        { char: '屈', reading: '굽힐 굴', meaning: '굴복', strokes: 8 },
        { char: '掘', reading: '팔 굴', meaning: '발굴', strokes: 11 },
        { char: '窟', reading: '굴 굴', meaning: '동굴', strokes: 13 },
        { char: '宮', reading: '집 궁', meaning: '궁궐', strokes: 10 },
        { char: '弓', reading: '활 궁', meaning: '양궁', strokes: 3 },
        { char: '窮', reading: '다할 궁', meaning: '빈궁', strokes: 15 },
        { char: '穹', reading: '하늘 궁', meaning: '창궁', strokes: 8 },
        { char: '倦', reading: '게으를 권', meaning: '권태', strokes: 10 },
        { char: '券', reading: '문서 권', meaning: '증권', strokes: 8 },
        { char: '勸', reading: '권할 권', meaning: '권장', strokes: 20 },
        { char: '卷', reading: '책 권', meaning: '권', strokes: 8 },
        { char: '圈', reading: '우리 권', meaning: '권', strokes: 11 },
        { char: '拳', reading: '주먹 권', meaning: '권투', strokes: 10 },
        { char: '權', reading: '권세 권', meaning: '권력', strokes: 22 },
        { char: '厥', reading: '그 궐', meaning: '궐', strokes: 12 },
        { char: '獗', reading: '날뛸 궐', meaning: '창궐', strokes: 15 },
        { char: '蕨', reading: '고사리 궐', meaning: '궐', strokes: 15 },
        { char: '闕', reading: '대궐 궐', meaning: '궁궐', strokes: 18 },
        { char: '机', reading: '책상 궤', meaning: '궤', strokes: 6 },
        { char: '櫃', reading: '함 궤', meaning: '궤짝', strokes: 18 },
        { char: '潰', reading: '무너질 궤', meaning: '붕궤', strokes: 16 },
        { char: '詭', reading: '속일 궤', meaning: '궤변', strokes: 13 },
        { char: '軌', reading: '바퀴자국 궤', meaning: '궤도', strokes: 9 },
        { char: '歸', reading: '돌아갈 귀', meaning: '귀가', strokes: 18 },
        { char: '貴', reading: '귀할 귀', meaning: '고귀', strokes: 12 },
        { char: '鬼', reading: '귀신 귀', meaning: '귀신', strokes: 10 },
        { char: '龜', reading: '거북 귀', meaning: '거북', strokes: 16 },
        { char: '叫', reading: '부르짖을 규', meaning: '규', strokes: 5 },
        { char: '圭', reading: '서옥 규', meaning: '규', strokes: 6 },
        { char: '奎', reading: '별 규', meaning: '규', strokes: 9 },
        { char: '閨', reading: '안방 규', meaning: '규방', strokes: 14 },
        { char: '規', reading: '법 규', meaning: '규칙', strokes: 11 },
        { char: '赳', reading: '헌걸찰 규', meaning: '규', strokes: 9 },
        { char: '均', reading: '고를 균', meaning: '균형', strokes: 7 },
        { char: '菌', reading: '버섯 균', meaning: '세균', strokes: 11 },
        { char: '畇', reading: '밭개간할 균', meaning: '균', strokes: 9 },
        { char: '鈞', reading: '서른근 균', meaning: '균', strokes: 12 },
        { char: '橘', reading: '귤 귤', meaning: '귤', strokes: 16 },
        { char: '克', reading: '이길 극', meaning: '극복', strokes: 7 },
        { char: '劇', reading: '심할 극', meaning: '극', strokes: 15 },
        { char: '戟', reading: '창 극', meaning: '극', strokes: 12 },
        { char: '棘', reading: '가시 극', meaning: '극', strokes: 12 },
        { char: '極', reading: '다할 극', meaning: '극한', strokes: 12 },
        { char: '隙', reading: '틈 극', meaning: '간극', strokes: 13 },
        { char: '僅', reading: '겨우 근', meaning: '근근', strokes: 13 },
        { char: '勤', reading: '부지런할 근', meaning: '근면', strokes: 13 },
        { char: '圻', reading: '경기 기', meaning: '기', strokes: 7 },
        { char: '址', reading: '터 지', meaning: '주지', strokes: 7 },
        { char: '坮', reading: '돈대 대', meaning: '대', strokes: 8 },
        { char: '坂', reading: '비탈 판', meaning: '판', strokes: 7 },
        { char: '坊', reading: '동네 방', meaning: '방', strokes: 7 },
        { char: '坑', reading: '구덩이 갱', meaning: '갱', strokes: 7 },
        { char: '坪', reading: '평평할 평', meaning: '평', strokes: 8 },
        { char: '坦', reading: '평탄할 탄', meaning: '탄', strokes: 8 },
        { char: '垢', reading: '때 구', meaning: '구', strokes: 9 },
        { char: '垣', reading: '담 원', meaning: '원', strokes: 9 },
        { char: '城', reading: '성 성', meaning: '성', strokes: 10 },
        { char: '垓', reading: '지경 해', meaning: '해', strokes: 9 },
        { char: '垠', reading: '지경 은', meaning: '은', strokes: 9 },
        { char: '埋', reading: '묻을 매', meaning: '매', strokes: 10 },
        { char: '埔', reading: '개 포', meaning: '포', strokes: 10 },
        { char: '域', reading: '지경 역', meaning: '역', strokes: 11 },
        { char: '埠', reading: '부두 부', meaning: '부', strokes: 11 },
        { char: '培', reading: '북돋을 배', meaning: '배', strokes: 11 },
        { char: '基', reading: '터 기', meaning: '기', strokes: 11 },
        { char: '堀', reading: '굴 굴', meaning: '굴', strokes: 11 },
        { char: '堂', reading: '집 당', meaning: '당', strokes: 11 },
        { char: '堅', reading: '굳을 견', meaning: '견', strokes: 11 },
        { char: '堆', reading: '쌓을 퇴', meaning: '퇴', strokes: 11 },
        { char: '墮', reading: '떨어질 타', meaning: '타', strokes: 15 },
        { char: '堤', reading: '둑 제', meaning: '제', strokes: 12 },
        { char: '堪', reading: '견딜 감', meaning: '감', strokes: 12 },
        { char: '堰', reading: '방죽 언', meaning: '언', strokes: 12 },
        { char: '堵', reading: '담 도', meaning: '도', strokes: 12 },
        { char: '場', reading: '마당 장', meaning: '장', strokes: 12 },
        { char: '報', reading: '갚을 보', meaning: '보', strokes: 12 },
        { char: '喜', reading: '기쁠 희', meaning: '희', strokes: 12 },
        { char: '堺', reading: '지경 계', meaning: '계', strokes: 12 },
        { char: '塊', reading: '덩어리 괴', meaning: '괴', strokes: 13 },
        { char: '塑', reading: '토우 소', meaning: '소', strokes: 13 },
        { char: '塔', reading: '탑 탑', meaning: '탑', strokes: 13 },
        { char: '塗', reading: '칠할 도', meaning: '도', strokes: 13 },
        { char: '塚', reading: '무덤 총', meaning: '총', strokes: 13 },
        { char: '塘', reading: '못 당', meaning: '당', strokes: 13 },
        { char: '塙', reading: '땅이름 고', meaning: '고', strokes: 13 },
        { char: '塞', reading: '막을 색', meaning: '색', strokes: 13 },
        { char: '塡', reading: '메울 전', meaning: '전', strokes: 13 },
        { char: '塢', reading: '둑 오', meaning: '오', strokes: 13 },
        { char: '塵', reading: '티끌 진', meaning: '진', strokes: 14 },
        { char: '境', reading: '지경 경', meaning: '경', strokes: 14 },
        { char: '墓', reading: '무덤 묘', meaning: '묘', strokes: 14 },
        { char: '塾', reading: '글방 숙', meaning: '숙', strokes: 14 },
        { char: '增', reading: '더할 증', meaning: '증', strokes: 15 },
        { char: '墜', reading: '떨어질 추', meaning: '추', strokes: 15 },
        { char: '墨', reading: '먹 묵', meaning: '묵', strokes: 15 },
        { char: '墳', reading: '무덤 분', meaning: '분', strokes: 15 },
        { char: '墾', reading: '개간할 간', meaning: '간', strokes: 16 },
        { char: '壁', reading: '벽 벽', meaning: '벽', strokes: 16 },
        { char: '壇', reading: '단 단', meaning: '단', strokes: 16 },
        { char: '壙', reading: '구덩이 광', meaning: '광', strokes: 18 },
        { char: '壕', reading: '호 호', meaning: '호', strokes: 17 },
        { char: '壓', reading: '누를 압', meaning: '압', strokes: 17 },
        { char: '壘', reading: '진 루', meaning: '루', strokes: 18 },
        { char: '壞', reading: '무너질 괴', meaning: '괴', strokes: 19 },
        { char: '壟', reading: '언덕 농', meaning: '농', strokes: 19 },
        { char: '壤', reading: '흙 양', meaning: '양', strokes: 20 },
        { char: '士', reading: '선비 사', meaning: '사', strokes: 3 },
        { char: '壬', reading: '아홉째천간 임', meaning: '임', strokes: 4 },
        { char: '壯', reading: '장할 장', meaning: '장', strokes: 7 },
        { char: '壹', reading: '한 일', meaning: '일', strokes: 12 },
        { char: '壺', reading: '병 호', meaning: '호', strokes: 12 },
        { char: '壽', reading: '목숨 수', meaning: '수', strokes: 14 },
        { char: '夏', reading: '여름 하', meaning: '하', strokes: 10 },
        { char: '夔', reading: '조심할 기', meaning: '기', strokes: 22 },
        { char: '夕', reading: '저녁 석', meaning: '석', strokes: 3 },
        { char: '外', reading: '밖 외', meaning: '외', strokes: 5 },
        { char: '夙', reading: '일찍 숙', meaning: '숙', strokes: 6 },
        { char: '多', reading: '많을 다', meaning: '다', strokes: 6 },
        { char: '夜', reading: '밤 야', meaning: '야', strokes: 8 },
        { char: '夢', reading: '꿈 몽', meaning: '몽', strokes: 14 },
        { char: '夬', reading: '터놓을 쾌', meaning: '쾌', strokes: 4 },
        { char: '大', reading: '클 대', meaning: '대', strokes: 3 },
        { char: '天', reading: '하늘 천', meaning: '천', strokes: 4 },
        { char: '太', reading: '클 태', meaning: '태', strokes: 4 },
        { char: '夫', reading: '지아비 부', meaning: '부', strokes: 4 },
        { char: '夭', reading: '일찍죽을 요', meaning: '요', strokes: 4 },
        { char: '失', reading: '잃을 실', meaning: '실', strokes: 5 },
        { char: '夷', reading: '오랑캐 이', meaning: '이', strokes: 6 },
        { char: '夸', reading: '자랑할 과', meaning: '과', strokes: 6 },
        { char: '夾', reading: '낄 협', meaning: '협', strokes: 7 },
        { char: '奄', reading: '문득 엄', meaning: '엄', strokes: 8 },
        { char: '奇', reading: '기이할 기', meaning: '기', strokes: 8 },
        { char: '奈', reading: '어찌 내', meaning: '내', strokes: 8 },
        { char: '奉', reading: '받들 봉', meaning: '봉', strokes: 8 },
        { char: '奎', reading: '별 규', meaning: '규', strokes: 9 },
        { char: '奏', reading: '아뢸 주', meaning: '주', strokes: 9 },
        { char: '契', reading: '맺을 계', meaning: '계', strokes: 9 },
        { char: '奔', reading: '달릴 분', meaning: '분', strokes: 8 },
        { char: '奕', reading: '클 혁', meaning: '혁', strokes: 9 },
        { char: '套', reading: '덮개 토', meaning: '토', strokes: 10 },
        { char: '奚', reading: '어찌 해', meaning: '해', strokes: 10 },
        { char: '奠', reading: '제사지낼 전', meaning: '전', strokes: 12 },
        { char: '奢', reading: '사치할 사', meaning: '사', strokes: 12 },
        { char: '奧', reading: '깊을 오', meaning: '오', strokes: 13 },
        { char: '奬', reading: '장려할 장', meaning: '장', strokes: 14 },
        { char: '奪', reading: '빼앗을 탈', meaning: '탈', strokes: 14 },
        { char: '奮', reading: '떨칠 분', meaning: '분', strokes: 16 },
        { char: '女', reading: '여자 여', meaning: '여', strokes: 3 },
        { char: '奴', reading: '종 노', meaning: '노', strokes: 5 },
        { char: '奸', reading: '간사할 간', meaning: '간', strokes: 6 },
        { char: '好', reading: '좋을 호', meaning: '호', strokes: 6 },
        { char: '如', reading: '같을 여', meaning: '여', strokes: 6 },
        { char: '妃', reading: '왕비 비', meaning: '비', strokes: 6 },
        { char: '妄', reading: '망령될 망', meaning: '망', strokes: 6 },
        { char: '妊', reading: '아이밸 임', meaning: '임', strokes: 7 },
        { char: '妓', reading: '기생 기', meaning: '기', strokes: 7 },
        { char: '妖', reading: '요상할 요', meaning: '요', strokes: 7 },
        { char: '妙', reading: '묘할 묘', meaning: '묘', strokes: 7 },
        { char: '妥', reading: '온당할 타', meaning: '타', strokes: 7 },
        { char: '妨', reading: '방해할 방', meaning: '방', strokes: 7 },
        { char: '妒', reading: '샘낼 투', meaning: '투', strokes: 7 },
        { char: '妻', reading: '아내 처', meaning: '처', strokes: 8 },
        { char: '妾', reading: '첩 첩', meaning: '첩', strokes: 8 },
        { char: '姆', reading: '할미 모', meaning: '모', strokes: 8 },
        { char: '姊', reading: '손윗누이 자', meaning: '자', strokes: 8 },
        { char: '始', reading: '비로소 시', meaning: '시', strokes: 8 },
        { char: '姓', reading: '성 성', meaning: '성', strokes: 8 },
        { char: '委', reading: '맡길 위', meaning: '위', strokes: 8 },
        { char: '姑', reading: '시어미 고', meaning: '고', strokes: 8 },
        { char: '妹', reading: '손아랫누이 매', meaning: '매', strokes: 8 },
        { char: '姜', reading: '성 강', meaning: '강', strokes: 9 },
        { char: '姨', reading: '이모 이', meaning: '이', strokes: 9 },
        { char: '姪', reading: '조카 질', meaning: '질', strokes: 9 },
        { char: '姬', reading: '계집 희', meaning: '희', strokes: 9 },
        { char: '姶', reading: '좋을 압', meaning: '압', strokes: 9 },
        { char: '姻', reading: '혼인 인', meaning: '인', strokes: 9 },
        { char: '姿', reading: '맵시 자', meaning: '자', strokes: 9 },
        { char: '威', reading: '위엄 위', meaning: '위', strokes: 9 },
        { char: '娃', reading: '예쁠 와', meaning: '와', strokes: 9 },
        { char: '娘', reading: '아가씨 낭', meaning: '낭', strokes: 10 },
        { char: '娟', reading: '예쁠 연', meaning: '연', strokes: 10 },
        { char: '娠', reading: '아이밸 신', meaning: '신', strokes: 10 },
        { char: '娥', reading: '예쁠 아', meaning: '아', strokes: 10 },
        { char: '娩', reading: '낳을 만', meaning: '만', strokes: 10 },
        { char: '娛', reading: '즐거워할 오', meaning: '오', strokes: 10 },
        { char: '娶', reading: '장가들 취', meaning: '취', strokes: 11 },
        { char: '婆', reading: '할미 파', meaning: '파', strokes: 11 },
        { char: '婉', reading: '순할 완', meaning: '완', strokes: 11 },
        { char: '婚', reading: '혼인 혼', meaning: '혼', strokes: 11 },
        { char: '婦', reading: '며느리 부', meaning: '부', strokes: 11 },
        { char: '婢', reading: '계집종 비', meaning: '비', strokes: 11 },
        { char: '婿', reading: '사위 서', meaning: '서', strokes: 12 },
        { char: '媒', reading: '중매 매', meaning: '매', strokes: 12 },
        { char: '媚', reading: '아첨할 미', meaning: '미', strokes: 12 }
    ],
    '2급': [
        // 2급 배정한자 (준2급 포함 통합 버전)
        // ㄱ
        { char: '假', examples: ['가식(假飾)', '가설(假說)', '가면(假面)', '가불(假拂)', '가짜'], reading: '거짓 가', meaning: '거짓', strokes: 11 },
        { char: '價', examples: ['가격(價格)', '가치(價値)', '물가(物價)', '평가(評價)', '대가(代價)'], reading: '값 가', meaning: '값', strokes: 15 },
        { char: '伽', examples: ['가야(伽倻)', '가야금(伽倻琴)', '승가(僧伽)', '유가(瑜伽)', '절'], reading: '절 가', meaning: '절', strokes: 7 },
        { char: '刊', examples: ['간행(刊行)', '신문(新聞)', '발간(發刊)', '석간(夕刊)', '조간(朝刊)'], reading: '새길 간', meaning: '출판', strokes: 5 },
        { char: '幹', examples: ['근간(根幹)', '간부(幹部)', '간선(幹線)', '신칸센(新幹線)', '줄기'], reading: '줄기 간', meaning: '줄기', strokes: 13 },
        { char: '懇', examples: ['간절(懇切)', '간청(懇請)', '간곡(懇曲)', '간담(懇談)', '정성'], reading: '간절할 간', meaning: '간절', strokes: 17 },
        { char: '刻', examples: ['조각(彫刻)', '시각(時刻)', '지각(遲刻)', '각인(刻印)', '심하다'], reading: '새길 각', meaning: '새기다', strokes: 8 },
        { char: '覺', examples: ['각성(覺醒)', '감각(感覺)', '시각(視覺)', '지각(知覺)', '깨닫다'], reading: '깨달을 각', meaning: '깨닫다', strokes: 20 },
        { char: '慨', examples: ['개탄(慨歎)', '분개(憤慨)', '감개(感慨)', '기개(氣慨)', '슬퍼하다'], reading: '분개할 개', meaning: '분개', strokes: 14 },
        { char: '檢', examples: ['검사(檢査)', '검토(檢討)', '검증(檢證)', '점검(點檢)', '조사'], reading: '검사할 검', meaning: '검사', strokes: 17 },
        { char: '劍', examples: ['검술(劍術)', '보검(寶劍)', '진검(眞劍)', '단검(短劍)', '칼'], reading: '칼 검', meaning: '칼', strokes: 15 },
        { char: '儉', examples: ['검소(儉素)', '근검(勤儉)', '절약(節約)', '검약(儉約)', '아끼다'], reading: '검소할 검', meaning: '검소', strokes: 15 },
        { char: '兼', examples: ['겸직(兼職)', '겸비(兼備)', '겸임(兼任)', '겸상(兼床)', '아우르다'], reading: '겸할 겸', meaning: '겸하다', strokes: 10 },
        { char: '謙', examples: ['겸손(謙遜)', '겸양(謙讓)', '겸허(謙虛)', '사양하다', '공손하다'], reading: '겸손할 겸', meaning: '겸손', strokes: 17 },
        { char: '驚', examples: ['경악(驚愕)', '경이(驚異)', '놀라다', '경천동지(驚天動地)', '두려워하다'], reading: '놀랄 경', meaning: '놀라다', strokes: 23 },
        { char: '競', examples: ['경쟁(競爭)', '경합(競合)', '경기(競技)', '경주(競走)', '다투다'], reading: '다툴 경', meaning: '경쟁', strokes: 20 },
        { char: '鏡', examples: ['거울', '안경(眼鏡)', '만화경(萬華鏡)', '망원경(望遠鏡)', '현미경(顯微鏡)'], reading: '거울 경', meaning: '거울', strokes: 19 },
        { char: '景', examples: ['경치(景致)', '풍경(風景)', '경관(景觀)', '배경(背景)', '전경(全景)'], reading: '경치 경', meaning: '경치', strokes: 12 },
        { char: '繼', examples: ['계속(繼續)', '계승(繼承)', '후계자(後繼者)', '중계(中繼)', '잇다'], reading: '이을 계', meaning: '계승', strokes: 20 },
        { char: '稀', examples: ['희귀(稀貴)', '고희(古稀)', '희미(稀微)', '드물다', '적다'], reading: '드물 희', meaning: '희귀', strokes: 12 },
        { char: '顧', examples: ['고문(顧問)', '회고(回顧)', '고객(顧客)', '삼고초려(三顧草廬)', '돌아보다'], reading: '돌아볼 고', meaning: '돌아보다', strokes: 21 },
        { char: '穀', examples: ['곡식(穀食)', '미곡(米穀)', '잡곡(雜穀)', '양곡(糧穀)', '오곡(五穀)'], reading: '곡식 곡', meaning: '곡식', strokes: 14 },
        { char: '鼓', examples: ['고동(鼓動)', '장구(杖鼓)', '고취(鼓吹)', '북', '두드렸다'], reading: '북 고', meaning: '북', strokes: 13 },
        { char: '貢', examples: ['공헌(貢獻)', '조공(朝貢)', '공물(貢物)', '바치다', '제물'], reading: '바칠 공', meaning: '공헌', strokes: 10 },
        { char: '恐', examples: ['공포(恐怖)', '공황(恐慌)', '죄송하다(恐縮)', '두렵다', '무서워하다'], reading: '두려울 공', meaning: '공포', strokes: 10 },
        { char: '怪', examples: ['괴물(怪物)', '괴이(怪異)', '수상하다', '기괴(奇怪)', '괴담(怪談)'], reading: '괴이할 괴', meaning: '괴이', strokes: 8 },
        { char: '款', examples: ['약관(約款)', '차관(借款)', '정성', '항목', '관대하다'], reading: '정성 관', meaning: '정성', strokes: 12 },
        { char: '冠', examples: ['왕관(王冠)', '금관(金冠)', '관혼상제(冠婚喪祭)', '갓', '으뜸'], reading: '갓 관', meaning: '관', strokes: 9 },
        { char: '慣', examples: ['습관(習慣)', '관습(慣習)', '관례(慣例)', '익숙하다', '버릇'], reading: '익숙할 관', meaning: '관습', strokes: 15 },
        { char: '勸', examples: ['권유(勸誘)', '권장(勸奬)', '권고(勸告)', '권면(勸勉)', '권하다'], reading: '권할 권', meaning: '권하다', strokes: 20 },
        { char: '歸', examples: ['귀가(歸家)', '귀국(歸國)', '복귀(復歸)', '귀납(歸納)', '돌아가다'], reading: '돌아갈 귀', meaning: '귀환', strokes: 18 },
        { char: '貴', examples: ['귀빈(貴賓)', '귀족(貴族)', '고귀(高貴)', '귀중(貴重)', '부귀(富貴)'], reading: '귀할 귀', meaning: '귀하다', strokes: 12 },
        { char: '規', examples: ['규칙(規則)', '규정(規定)', '규범(規範)', '규모(規模)', '법'], reading: '법 규', meaning: '규칙', strokes: 11 },
        { char: '劇', examples: ['연극(演劇)', '비극(悲劇)', '희극(喜劇)', '극장(劇場)', '심하다'], reading: '심할 극', meaning: '극심', strokes: 15 },
        { char: '勤', examples: ['근면(勤勉)', '근무(勤務)', '출근(出勤)', '개근(皆勤)', '부지런하다'], reading: '부지런할 근', meaning: '근면', strokes: 13 },
        { char: '禁', examples: ['금지(禁止)', '금연(禁煙)', '감금(監禁)', '금기(禁忌)', '통금(通禁)'], reading: '금할 금', meaning: '금지', strokes: 13 },
        { char: '器', examples: ['그릇', '기구(器具)', '식기(食器)', '악기(樂器)', '무기(武器)'], reading: '그릇 기', meaning: '그릇', strokes: 16 },
        { char: '奇', examples: ['기적(奇蹟)', '기이(奇異)', '기묘(奇妙)', '호기심(好奇心)', '홀수'], reading: '기이할 기', meaning: '기이', strokes: 8 },
        { char: '祈', examples: ['기도(祈禱)', '기원(祈願)', '기우제(祈雨祭)', '빌다', '바라다'], reading: '빌 기', meaning: '기도', strokes: 9 },
        { char: '騎', examples: ['기마(騎馬)', '기수(騎手)', '일기당천(一騎當千)', '말타다', '기병'], reading: '말탈 기', meaning: '기마', strokes: 18 },
        // ㄴ
        { char: '諾', examples: ['허락(許諾)', '승낙(承諾)', '응낙(應諾)', '쾌낙(快諾)', '대답하다'], reading: '허락할 낙', meaning: '허락', strokes: 16 },
        { char: '難', examples: ['곤란(困難)', '재난(災難)', '난이도(難易度)', '난해(難解)', '어렵다'], reading: '어려울 난', meaning: '어렵다', strokes: 19 },
        { char: '暖', examples: ['난방(暖房)', '온난(溫暖)', '난류(暖流)', '따뜻하다', '덥다'], reading: '따뜻할 난', meaning: '따뜻', strokes: 13 },
        { char: '納', examples: ['납부(納付)', '수납(收納)', '납세(納稅)', '납득(納得)', '들이다'], reading: '들일 납', meaning: '납입', strokes: 10 },
        { char: '腦', examples: ['두뇌(頭腦)', '뇌수(腦髓)', '세뇌(洗腦)', '수뇌(首腦)', '뇌'], reading: '뇌 뇌', meaning: '뇌', strokes: 13 },
        // ㄷ
        { char: '擔', examples: ['담당(擔當)', '부담(負擔)', '전담(專擔)', '담임(擔任)', '메다'], reading: '멜 담', meaning: '담당', strokes: 16 },
        { char: '膽', examples: ['담력(膽力)', '간담(肝膽)', '담대(膽大)', '쓸개', '용기'], reading: '쓸개 담', meaning: '담력', strokes: 17 },
        { char: '糖', examples: ['사탕(砂糖)', '당분(糖分)', '혈당(血糖)', '포도당(葡萄糖)', '엿'], reading: '엿 당', meaning: '설탕', strokes: 16 },
        { char: '到', examples: ['도착(到着)', '도달(到達)', '도래(到來)', '쇄도(殺到)', '이르다'], reading: '이를 도', meaning: '도착', strokes: 8 },
        { char: '途', examples: ['도중(途中)', '용도(用途)', '전도(前途)', '중도(中途)', '길'], reading: '길 도', meaning: '도중', strokes: 11 },
        { char: '獨', examples: ['독립(獨立)', '단독(單獨)', '고독(孤獨)', '독창(獨唱)', '홀로'], reading: '홀로 독', meaning: '독립', strokes: 16 },
        { char: '督', examples: ['감독(監督)', '독촉(督促)', '총독(總督)', '살피다', '재촉하다'], reading: '살필 독', meaning: '감독', strokes: 13 },
        { char: '頓', examples: ['돈오(頓悟)', '정돈(整頓)', '갑자기', '조아리다', '문득'], reading: '돈 돈', meaning: '돈', strokes: 13 },
        { char: '童', examples: ['아동(兒童)', '동화(童話)', '동요(童謠)', '신동(神童)', '아이'], reading: '아이 동', meaning: '아이', strokes: 12 },
        { char: '豆', examples: ['두부(豆腐)', '두유(豆乳)', '녹두(綠豆)', '콩', '제기'], reading: '콩 두', meaning: '콩', strokes: 7 },
        // ㄹ
        { char: '亂', examples: ['혼란(混亂)', '반란(叛亂)', '난동(亂動)', '요란(搖亂)', '어지럽다'], reading: '어지러울 란', meaning: '혼란', strokes: 13 },
        { char: '覽', examples: ['관람(觀覽)', '열람(閱覽)', '박람회(博覽會)', '일람(一覽)', '보다'], reading: '볼 람', meaning: '관람', strokes: 21 },
        { char: '略', examples: ['생략(省略)', '전략(戰略)', '침략(侵略)', '약속(約束)', '간략하다'], reading: '간략할 략', meaning: '약략', strokes: 11 },
        { char: '糧', examples: ['식량(食糧)', '양식(糧食)', '군량(軍糧)', '양곡(糧穀)', '먹이'], reading: '양식 량', meaning: '식량', strokes: 18 },
        { char: '慮', examples: ['고려(考慮)', '염려(念慮)', '배려(配慮)', '사려(思慮)', '생각하다'], reading: '생각할 려', meaning: '고려', strokes: 15 },
        { char: '旅', examples: ['여행(旅行)', '여관(旅館)', '여비(旅費)', '나그네', '군대'], reading: '나그네 려', meaning: '여행', strokes: 10 },
        { char: '勵', examples: ['격려(激勵)', '장려(奬勵)', '면려(勉勵)', '힘쓰다', '권하다'], reading: '힘쓸 려', meaning: '격려', strokes: 17 },
        { char: '烈', examples: ['열렬(熱烈)', '치열(熾烈)', '맹렬(猛烈)', '열사(烈士)', '맵다'], reading: '매울 렬', meaning: '열렬', strokes: 10 },
        { char: '鈴', reading: '방울 령', examples: ['방울', '풍경(風磬)-rel', '호령(號令)-no', '금령(金鈴)', '아령(啞鈴)'], meaning: '방울', strokes: 13 },
        { char: '領', examples: ['대통령(大統領)', '영토(領土)', '수령(首領)', '점령(占領)', '거느리다'], reading: '거느릴 령', meaning: '영도', strokes: 14 },
        { char: '禮', examples: ['예절(禮節)', '무례(無禮)', '예식(禮式)', '사례(謝禮)', '예도'], reading: '예도 례', meaning: '예의', strokes: 18 },
        { char: '露', examples: ['노출(露出)', '결로(結露)', '폭로(暴露)', '이슬', '드러나다'], reading: '이슬 로', meaning: '이슬', strokes: 21 },
        { char: '論', examples: ['의논(議論)', '토론(討論)', '이론(理論)', '결론(結論)', '말하다'], reading: '논할 론', meaning: '논하다', strokes: 15 },
        { char: '龍', examples: ['용', '용왕(龍王)', '공룡(恐龍)', '쌍룡(雙龍)', '임금'], reading: '용 룡', meaning: '용', strokes: 16 },
        { char: '律', examples: ['법률(法律)', '규율(規律)', '자율(自律)', '율동(律動)', '법'], reading: '법칙 률', meaning: '율법', strokes: 9 },
        { char: '陸', examples: ['육지(阮地)', '대륙(大陸)', '육군(阮軍)', '상륙(上陸)', '뭍'], reading: '뭍 륙', meaning: '육지', strokes: 11 },
        { char: '輪', examples: ['바퀴', '자전거(自轉車)', '삼륜(三輪)', '연륜(年輪)', '돌다'], reading: '바퀴 륜', meaning: '바퀴', strokes: 15 },
        { char: '離', examples: ['이별(離別)', '분리(分離)', '거리(距離)', '격리(隔離)', '떠나다'], reading: '떠날 리', meaning: '분리', strokes: 19 },
        // ㅁ
        { char: '萬', examples: ['일만(一萬)', '만국(萬國)', '만세(萬歲)', '만물(萬物)', '많다'], reading: '일만 만', meaning: '만', strokes: 15 },
        { char: '滿', examples: ['만족(滿足)', '충만(充滿)', '만점(滿點)', '미만(未滿)', '차다'], reading: '찰 만', meaning: '만족', strokes: 14 },
        { char: '亡', examples: ['사망(死亡)', '멸망(滅亡)', '도망(逃亡)', '망명(亡命)', '망하다'], reading: '망할 망', meaning: '멸망', strokes: 3 },
        { char: '望', examples: ['희망(希望)', '절망(絶望)', '전망(展望)', '소망(所望)', '바라다'], reading: '바랄 망', meaning: '희망', strokes: 11 },
        { char: '賣', examples: ['판매(販賣)', '매매(賣買)', '매점(賣店)', '경매(競賣)', '팔다'], reading: '팔 매', meaning: '판매', strokes: 15 },
        { char: '夢', examples: ['꿈', '악몽(惡夢)', '해몽(解夢)', '몽상(夢想)', '희망'], reading: '꿈 몽', meaning: '꿈', strokes: 14 },
        { char: '默', examples: ['침묵(沈默)', '묵념(默念)', '암묵(暗默)', '묵살(默殺)', '잠잠하다'], reading: '잠잠할 묵', meaning: '침묵', strokes: 16 },
        { char: '墨', examples: ['수묵화(水墨畵)', '필묵(筆墨)', '먹', '검다', '글씨'], reading: '먹 묵', meaning: '먹', strokes: 15 },
        { char: '文', examples: ['문학(文學)', '문장(文章)', '문화(文化)', '한문(漢文)', '글월'], reading: '글월 문', meaning: '글', strokes: 4 },
        { char: '密', examples: ['비밀(秘密)', '밀접(密接)', '치밀(緻密)', '정밀(精密)', '빽빽하다'], reading: '빽빽할 밀', meaning: '비밀', strokes: 11 },
        // ㅂ
        { char: '博', examples: ['박사(博士)', '박물관(博物館)', '박식(博識)', '도박(賭博)', '넓다'], reading: '넓을 박', meaning: '박학', strokes: 12 },
        { char: '縛', examples: ['속박(束縛)', '포박(捕縛)', '결박(結縛)', '묶다', '매다'], reading: '묶을 박', meaning: '속박', strokes: 16 },
        { char: '班', examples: ['반장(班長)', '반대(班隊)-no', '반열(班列)', '합반(合班)', '나누다'], reading: '나눌 반', meaning: '반', strokes: 10 },
        { char: '髮', examples: ['모발(毛髮)', '이발(理髮)', '흑발(黑髮)', '머리카락', '터럭'], reading: '터럭 발', meaning: '머리카락', strokes: 15 },
        { char: '範', examples: ['모범(模範)', '범위(範圍)', '규범(規範)', '시범(示範)', '법'], reading: '법 범', meaning: '모범', strokes: 15 },
        { char: '繁', examples: ['번영(繁榮)', '빈번(頻繁)', '번창(繁昌)', '농번기(農繁期)', '많다'], reading: '번성할 번', meaning: '번성', strokes: 17 },
        { char: '辨', examples: ['변별(辨別)', '분변(分辨)', '변상(辨償)', '가리다', '따지다'], reading: '분별할 변', meaning: '분별', strokes: 16 },
        { char: '辯', examples: ['변명(辯明)', '변호(辯護)', '웅변(雄辯)', '달변(達辯)', '말 잘하다'], reading: '말씀 변', meaning: '변론', strokes: 21 },
        { char: '兵', examples: ['군사(軍士)', '병사(兵士)', '병기(兵器)', '질병(疾病)-no', '전쟁'], reading: '군사 병', meaning: '군사', strokes: 7 },
        { char: '寶', examples: ['보물(寶物)', '국보(國寶)', '보배', '보석(寶石)', '소중하다'], reading: '보배 보', meaning: '보물', strokes: 20 },
        { char: '福', examples: ['행복(幸福)', '축복(祝福)', '복지(福祉)', '명복(冥福)', '복'], reading: '복 복', meaning: '복', strokes: 14 },
        { char: '複', examples: ['복잡(複雜)', '중복(重複)', '복수(複數)', '복제(複製)', '겹치다'], reading: '겹칠 복', meaning: '복잡', strokes: 14 },
        { char: '腹', examples: ['복부(腹部)', '공복(空腹)', '복통(腹痛)', '배', '마음'], reading: '배 복', meaning: '배', strokes: 13 },
        { char: '奉', examples: ['봉사(奉仕)', '봉납(奉納)', '받들다', '섬기다', '바치다'], reading: '받들 봉', meaning: '봉사', strokes: 8 },
        { char: '富', examples: ['풍부(豐富)', '부자(富者)', '빈부(貧富)', '부유(富裕)', '가멸다'], reading: '부유할 부', meaning: '부유', strokes: 12 },
        { char: '憤', examples: ['분노(憤怒)', '울분(鬱憤)', '의분(義憤)', '분하다', '성내다'], reading: '분할 분', meaning: '분노', strokes: 15 },
        { char: '貧', examples: ['빈곤(貧困)', '빈부(貧富)', '청빈(淸貧)', '가난하다', '모자라다'], reading: '가난할 빈', meaning: '가난', strokes: 11 },
        { char: '賓', examples: ['귀빈(貴賓)', '내빈(來賓)', '빈객(賓客)', '손님', '대접하다'], reading: '손님 빈', meaning: '손님', strokes: 14 },
        // ㅅ
        { char: '司', examples: ['사회(司會)', '사법(司法)', '상사(上司)', '맡다', '관청'], reading: '맡을 사', meaning: '사무', strokes: 5 },
        { char: '史', examples: ['역사(歷史)', '사기(史記)', '야사(野史)', '사료(史料)', '기록'], reading: '역사 사', meaning: '역사', strokes: 5 },
        { char: '詞', examples: ['가사(歌詞)', '조사(助詞)', '동사(動詞)', '명사(名詞)', '말'], reading: '말씀 사', meaning: '가사', strokes: 12 },
        { char: '賜', examples: ['하사(下賜)', '은사(恩賜)', '사약(賜藥)', '주다', '내리다'], reading: '줄 사', meaning: '하사', strokes: 15 },
        { char: '殺', examples: ['살인(殺人)', '자살(自殺)', '피살(被殺)', '살해(殺害)', '죽이다'], reading: '죽일 살', meaning: '살인', strokes: 11 },
        { char: '狀', examples: ['상태(狀態)', '형상(形狀)', '증상(症狀)', '상황(狀況)', '문서'], reading: '형상 상', meaning: '상태', strokes: 8 },
        { char: '詳', examples: ['상세(詳細)', '미상(未詳)', '불상(不詳)', '자세하다', '알다'], reading: '자세할 상', meaning: '상세', strokes: 13 },
        { char: '舌', examples: ['독설(毒舌)', '설전(舌戰)', '구설수(口舌數)', '혀', '말'], reading: '혀 설', meaning: '혀', strokes: 6 },
        { char: '誠', examples: ['성실(誠實)', '정성(精誠)', '충성(忠誠)', '성의(誠意)', '참되다'], reading: '정성 성', meaning: '성실', strokes: 14 },
        { char: '稅', examples: ['세금(稅金)', '면세(免稅)', '납세(納稅)', '관세(關稅)', '세놓다'], reading: '세금 세', meaning: '세금', strokes: 12 },
        { char: '蘇', examples: ['소생(蘇生)', '소심(蘇心)', '깨어나다', '되살아나다', '쉬다'], reading: '깨어날 소', meaning: '소생', strokes: 20 },
        { char: '俗', examples: ['풍속(風俗)', '민속(民俗)', '세속(世俗)', '저속(低俗)', '익히다'], reading: '풍속 속', meaning: '풍속', strokes: 9 },
        { char: '屬', examples: ['소속(所屬)', '부속(附屬)', '금속(金屬)', '존속(存屬)', '무리'], reading: '무리 속', meaning: '소속', strokes: 21 },
        { char: '訟', examples: ['소송(訴訟)', '쟁송(爭訟)', '송사', '재판하다', '다투다'], reading: '송사할 송', meaning: '소송', strokes: 11 },
        { char: '隨', examples: ['수행(隨行)', '수필(隨筆)', '부수(附隨)', '따르다', '맡기다'], reading: '따를 수', meaning: '따르다', strokes: 17 },
        { char: '輸', examples: ['수송(輸送)', '수출(輸出)', '수입(輸入)', '밀수(密輸)', '나르다'], reading: '나를 수', meaning: '수송', strokes: 16 },
        { char: '術', examples: ['기술(技術)', '예술(藝術)', '미술(美術)', '수술(手術)', '재주'], reading: '재주 술', meaning: '기술', strokes: 11 },
        { char: '純', examples: ['순수(純粹)', '단순(單純)', '순금(純金)', '순정(純情)', '깨끗하다'], reading: '순수할 순', meaning: '순수', strokes: 10 },
        { char: '循', examples: ['순환(循環)', '악순환(惡循環)', '순서(順序)-no', '돌다', '좇다'], reading: '따를 순', meaning: '순환', strokes: 12 },
        { char: '崇', examples: ['숭배(崇拜)', '숭상(崇尙)', '숭고(崇高)', '높이다', '존경하다'], reading: '높을 숭', meaning: '숭고', strokes: 11 },
        { char: '濕', examples: ['습기(濕氣)', '습도(濕度)', '가습기(加濕器)', '습하다', '젖다'], reading: '젖을 습', meaning: '습기', strokes: 17 },
        // ㅇ~ㅎ
        { char: '惡', examples: ['악마(惡魔)', '악몽(惡夢)', '최악(最惡)', '선악(善惡)', '나쁘다'], reading: '악할 악', meaning: '악', strokes: 12 },
        { char: '壓', examples: ['압력(壓力)', '탄압(彈壓)', '압도(壓倒)', '억압(抑壓)', '누르다'], reading: '누를 압', meaning: '압력', strokes: 17 },
        { char: '養', examples: ['양육(養育)', '부양(扶養)', '요양(療養)', '영양(營養)', '기르다'], reading: '기를 양', meaning: '양육', strokes: 15 },
        { char: '嚴', examples: ['엄격(嚴格)', '엄숙(嚴肅)', '엄수(嚴守)', '위엄(威嚴)', '엄하다'], reading: '엄할 엄', meaning: '엄격', strokes: 20 },
        { char: '譽', examples: ['명예(名譽)', '영예(榮譽)', '칭예(稱譽)', '기리다', '칭찬'], reading: '기릴 예', meaning: '명예', strokes: 21 },
        { char: '溫', examples: ['온도(溫度)', '온난(溫暖)', '온천(溫泉)', '체온(體溫)', '따뜻하다'], reading: '따뜻할 온', meaning: '온도', strokes: 13 },
        { char: '王', examples: ['임금', '왕국(王國)', '대왕(大王)', '제왕(帝王)', '으뜸'], reading: '임금 왕', meaning: '왕', strokes: 4 },
        { char: '雲', examples: ['구름', '성운(星雲)', '운무(雲霧)', '풍운(風雲)', '운집(雲集)'], reading: '구름 운', meaning: '구름', strokes: 12 },
        { char: '圓', examples: ['원만(圓滿)', '타원(橢圓)', '동그라미', '둥글다', '원'], reading: '둥글 원', meaning: '원', strokes: 13 },
        { char: '願', examples: ['소원(所願)', '기원(祈願)', '염원(念願)', '지원(志願)', '바라다'], reading: '원할 원', meaning: '소원', strokes: 19 },
        { char: '偉', examples: ['위대(偉大)', '위인(偉人)', '위업(偉業)', '크다', '훌륭하다'], reading: '클 위', meaning: '위대', strokes: 11 },
        { char: '遺', examples: ['유산(遺産)', '유언(遺言)', '유적(遺跡)', '후유증(後遺症)', '남기다'], reading: '남길 유', meaning: '유산', strokes: 19 },
        { char: '銀', examples: ['은행(銀行)', '수은(水銀)', '은메달', '은', '돈'], reading: '은 은', meaning: '은', strokes: 14 },
        { char: '義', examples: ['정의(正義)', '의무(義務)', '의리(義理)', '주의(主義)', '옳다'], reading: '옳을 의', meaning: '의리', strokes: 13 },
        { char: '議', examples: ['회의(會議)', '국회(國會)', '논의(論議)', '의결(議決)', '의논하다'], reading: '의논할 의', meaning: '의논', strokes: 20 },
        { char: '印', examples: ['인쇄(印刷)', '도장', '인상(印象)', '낙인(烙印)', '찍다'], reading: '도장 인', meaning: '인쇄', strokes: 6 },
        { char: '姓', examples: ['성명(姓名)', '성씨', '백성(百姓)', '성', '겨레'], reading: '성씨 성', meaning: '성씨', strokes: 8 },
        { char: '才', examples: ['재능(才能)', '인재(人材)', '영재(英才)', '천재(天才)', '재주'], reading: '재주 재', meaning: '재능', strokes: 3 },
        { char: '財', examples: ['재산(財産)', '재정(財政)', '재물(財物)', '문화재(文化財)', '돈'], reading: '재물 재', meaning: '재물', strokes: 10 },
        { char: '賊', examples: ['도적(盜賊)', '역적(逆賊)', '해적(海賊)', '도둑', '해치다'], reading: '도둑 적', meaning: '도적', strokes: 13 },
        { char: '典', examples: ['사전(辭典)', '고전(古典)', '예전(禮典)', '법', '책'], reading: '법 전', meaning: '전례', strokes: 8 },
        { char: '戰', examples: ['전쟁(戰爭)', '작전(作戰)', '도전(挑戰)', '휴전(休戰)', '싸우다'], reading: '싸울 전', meaning: '전쟁', strokes: 16 },
        { char: '錢', examples: ['금전(金錢)', '용돈', '환전(換錢)', '돈', '엽전'], reading: '돈 전', meaning: '금전', strokes: 16 },
        { char: '節', examples: ['계절(季節)', '절약(節約)', '예절(禮節)', '마디', '명절'], reading: '마디 절', meaning: '절기', strokes: 15 },
        { char: '政', examples: ['정치(政治)', '정부(政府)', '행정(行政)', '정책(政策)', '다스리다'], reading: '정사 정', meaning: '정치', strokes: 9 },
        { char: '靜', examples: ['정숙(靜肅)', '냉정(冷靜)', '안정(安靜)', '고요하다', '조용하다'], reading: '고요할 정', meaning: '정적', strokes: 16 },
        { char: '濟', examples: ['경제(經濟)', '구제(救濟)', '제주도(濟州道)', '건너다', '돕다'], reading: '건널 제', meaning: '구제', strokes: 18 },
        { char: '祖', examples: ['조상(祖上)', '시조(始祖)', '조국(祖國)', '할아버지', '법'], reading: '할아비 조', meaning: '조상', strokes: 10 },
        { char: '尊', examples: ['존경(尊敬)', '존중(尊重)', '자존심(自尊心)', '높다', '귀하다'], reading: '높을 존', meaning: '존경', strokes: 12 },
        { char: '宗', examples: ['종교(宗敎)', '종가(宗家)', '종조(宗祖)', '마루', '으뜸'], reading: '마루 종', meaning: '종가', strokes: 8 },
        { char: '罪', examples: ['범죄(犯罪)', '유죄(有罪)', '속죄(贖罪)', '죄악(罪惡)', '허물'], reading: '허물 죄', meaning: '죄', strokes: 13 },
        { char: '注', examples: ['주의(注意)', '주목(注目)', '주입(注入)', '주문(注文)', '붓다'], reading: '부을 주', meaning: '주의', strokes: 9 },
        { char: '株', examples: ['주식(株式)', '주주(株主)', '그루', '근본', '포기'], reading: '그루 주', meaning: '주식', strokes: 10 },
        { char: '準', examples: ['준비(準備)', '기준(基準)', '수준(水準)', '준수(遵守)', '법도'], reading: '물맴이 준', meaning: '기준', strokes: 14 },
        { char: '症', examples: ['증상(症狀)', '통증(痛症)', '증세(症勢)', '염증(炎症)', '병'], reading: '병 증', meaning: '증상', strokes: 10 },
        { char: '證', examples: ['증거(證據)', '보증(保證)', '인증(認證)', '증명(證明)', '깨닫다'], reading: '증거 증', meaning: '증거', strokes: 19 },
        { char: '値', examples: ['가치(價値)', '수치(數値)', '평균치(平均値)', '값', '만나다'], reading: '값 치', meaning: '값', strokes: 10 },
        { char: '治', examples: ['치료(治療)', '정치(政治)', '치안(治安)', '다스리다', '고치다'], reading: '다스릴 치', meaning: '치료', strokes: 9 },
        { char: '致', examples: ['일치(一致)', '치명(致命)', '유치(誘致)', '이르다', '보내다'], reading: '이를 치', meaning: '도달', strokes: 10 },
        { char: '哲', examples: ['철학(哲學)', '현철(賢哲)', '명철(明哲)', '밝다', '슬기'], reading: '밝을 철', meaning: '철학', strokes: 10 },
        { char: '鐵', examples: ['철도(鐵道)', '지하철(地下鐵)', '강철(鋼鐵)', '쇠', '검다'], reading: '쇠 철', meaning: '철', strokes: 21 },
        { char: '請', examples: ['청구(請求)', '요청(要請)', '신청(申請)', '초청(招請)', '청하다'], reading: '청할 청', meaning: '요청', strokes: 15 },
        { char: '體', examples: ['신체(身體)', '체육(體育)', '전체(全體)', '단체(團體)', '몸'], reading: '몸 체', meaning: '신체', strokes: 23 },
        { char: '賤', examples: ['천민(賤民)', '비천(卑賤)', '빈천(貧賤)', '천하다', '싸다'], reading: '천할 천', meaning: '천하다', strokes: 15 },
        { char: '學', examples: ['학교(學校)', '학생(學生)', '학습(學習)', '과학(科學)', '배우다'], reading: '배울 학', meaning: '배우다', strokes: 16 },
        { char: '害', examples: ['피해(被害)', '살해(殺害)', '손해(損害)', '공해(公害)', '해치다'], reading: '해칠 해', meaning: '해', strokes: 10 },
        { char: '虛', examples: ['허무(虛無)', '공허(空虛)', '허위(虛僞)', '겸허(謙虛)', '비다'], reading: '빌 허', meaning: '허무', strokes: 12 },
        { char: '獻', examples: ['공헌(貢獻)', '헌신(獻身)', '헌혈(獻血)', '바치다', '드리다'], reading: '드릴 헌', meaning: '헌신', strokes: 20 },
        { char: '賢', examples: ['현명(賢明)', '현인(賢人)', '현모양처(賢母良妻)', '어질다', '착하다'], reading: '어질 현', meaning: '현명', strokes: 15 },
        { char: '刑', examples: ['형벌(刑罰)', '형사(刑事)', '처형(處刑)', '형무소(刑務所)', '법'], reading: '형벌 형', meaning: '형벌', strokes: 6 },
        { char: '戶', examples: ['가구(家戶)', '호적(戶籍)', '문짝', '집', '구멍'], reading: '지게 호', meaning: '호', strokes: 4 },
        { char: '惑', examples: ['유혹(誘惑)', '의혹(疑惑)', '현혹(眩惑)', '미혹하다', '의심하다'], reading: '미혹할 혹', meaning: '유혹', strokes: 12 },
        { char: '魂', examples: ['영혼(靈魂)', '혼백(魂魄)', '혼', '넋', '마음'], reading: '넋 혼', meaning: '영혼', strokes: 14 },
        { char: '卑', examples: ['비굴(卑屈)', '비열(卑劣)', '남존여비(男尊女卑)', '낮다', '천하다'], reading: '낮을 비', meaning: '비천', strokes: 9 },
        { char: '讓', examples: ['양보(讓步)', '겸양(謙讓)', '사양(辭讓)', '양도(讓渡)', '사양하다'], reading: '사양할 양', meaning: '양보', strokes: 24 },
        { char: '眞', examples: ['진실(眞實)', '사진(寫眞)', '진리(眞理)', '순수(純粹)-rel', '참'], reading: '참 진', meaning: '참', strokes: 10 },
        { char: '實', examples: ['현실(現實)', '확실(確實)', '진실(眞實)', '열매', '참되다'], reading: '열매 실', meaning: '실제', strokes: 14 },
        // 준2급 추가 한자 100자
        // ㄱ 추가
        { char: '街', examples: ['거리', '가로수(街路樹)', '상가(商街)', '시가(市街)', '가두(街頭)'], reading: '거리 가', meaning: '거리', strokes: 12 },
        { char: '閣', examples: ['누각(樓閣)', '내각(內閣)', '전각(殿閣)', '사상누각(砂上樓閣)', '집'], reading: '집 각', meaning: '누각', strokes: 14 },
        { char: '却', examples: ['기각(棄却)', '망각(忘却)', '소각(燒却)', '각하(却下)', '냉각(冷却)'], reading: '물리칠 각', meaning: '각하', strokes: 7 },
        { char: '干', examples: ['간섭(干涉)', '간여(干與)', '약간(若干)', '방패', '마르다'], reading: '방패 간', meaning: '간섭', strokes: 3 },
        { char: '竿', examples: ['낚싯대', '죽간(竹竿)', '백척간두(百尺竿頭)', '장대', '간두(竿頭)'], reading: '장대 간', meaning: '낚싯대', strokes: 9 },
        { char: '肝', examples: ['간장(肝臟)', '간담(肝膽)', '심간(心肝)', '폐간(肺肝)', '간'], reading: '간 간', meaning: '간장', strokes: 7 },
        { char: '甘', examples: ['감미(甘味)', '감수(甘受)', '감언이설(甘言利說)', '고진감래(苦盡甘來)', '달다'], reading: '달 감', meaning: '달다', strokes: 5 },
        { char: '減', examples: ['감소(減少)', '감면(減免)', '절감(節減)', '삭감(削減)', '덜다'], reading: '덜 감', meaning: '감소', strokes: 13 },
        { char: '監', examples: ['감독(監督)', '감시(監視)', '감사(監査)', '감옥(監獄)', '보다'], reading: '볼 감', meaning: '감시', strokes: 15 },
        { char: '甲', examples: ['갑옷', '갑골문(甲骨文)', '회갑(回甲)', '갑부(甲富)', '첫째'], reading: '갑옷 갑', meaning: '갑', strokes: 5 },
        { char: '康', examples: ['건강(健康)', '강녕(康寧)', '만강(萬康)', '편안하다', '즐겁다'], reading: '편안할 강', meaning: '건강', strokes: 11 },
        { char: '鋼', examples: ['강철(鋼鐵)', '제강(製鋼)', '강판(鋼板)', '연강(軟鋼)', '굳세다'], reading: '강철 강', meaning: '강철', strokes: 16 },
        { char: '改', examples: ['개선(改善)', '개혁(改革)', '개정(改正)', '개조(改造)', '고치다'], reading: '고칠 개', meaning: '개선', strokes: 7 },
        { char: '介', examples: ['소개(紹介)', '중개(仲介)', '개입(介入)', '매개(媒介)', '끼다'], reading: '낄 개', meaning: '소개', strokes: 4 },
        { char: '客', examples: ['손님', '객실(客室)', '승객(乘客)', '관광객(觀光客)', '나그네'], reading: '손님 객', meaning: '손님', strokes: 9 },
        { char: '巨', examples: ['거대(巨大)', '거장(巨匠)', '거인(巨人)', '거액(巨額)', '크다'], reading: '클 거', meaning: '거대', strokes: 5 },
        { char: '距', examples: ['거리(距離)', '격거(隔距)', '상거(相距)', '떨어지다', '막다'], reading: '거리 거', meaning: '거리', strokes: 12 },
        { char: '拒', examples: ['거부(拒否)', '거절(拒絶)', '항거(抗拒)', '거역(拒逆)', '막다'], reading: '막을 거', meaning: '거부', strokes: 8 },
        { char: '擧', examples: ['선거(選舉)', '거수(擧手)', '거행(擧行)', '검거(檢擧)', '들다'], reading: '들 거', meaning: '선거', strokes: 18 },
        { char: '據', examples: ['근거(根據)', '증거(證據)', '점거(占據)', '의거(依據)', '기대다'], reading: '의거할 거', meaning: '근거', strokes: 17 },
        { char: '健', examples: ['건강(健康)', '건전(健全)', '건장(健壯)', '보건(保健)', '튼튼하다'], reading: '건강할 건', meaning: '건강', strokes: 11 },
        { char: '件', examples: ['조건(條件)', '사건(事件)', '물건(物件)', '용건(用件)', '안건(案件)'], reading: '물건 건', meaning: '조건', strokes: 6 },
        { char: '犬', examples: ['애견(愛犬)', '견공(犬公)', '견마(犬馬)', '사냥개', '개'], reading: '개 견', meaning: '개', strokes: 4 },
        { char: '堅', examples: ['견고(堅固)', '견실(堅實)', '견지(堅持)', '굳다', '단단하다'], reading: '굳을 견', meaning: '견고', strokes: 11 },
        { char: '結', examples: ['결혼(結婚)', '결과(結果)', '결합(結合)', '연결(連結)', '맺다'], reading: '맺을 결', meaning: '결합', strokes: 12 },
        { char: '缺', examples: ['결핍(缺乏)', '결석(缺席)', '결점(缺點)', '결근(缺勤)', '빠지다'], reading: '이지러질 결', meaning: '결핍', strokes: 10 },
        { char: '潔', examples: ['청결(淸潔)', '순결(純潔)', '결백(潔白)', '간결(簡潔)', '깨끗하다'], reading: '깨끗할 결', meaning: '결백', strokes: 16 },
        { char: '傾', examples: ['경향(傾向)', '경사(傾斜)', '경청(傾聽)', '기울다', '기울이다'], reading: '기울 경', meaning: '경향', strokes: 13 },
        { char: '硬', examples: ['경직(硬直)', '강경(强硬)', '경화(硬化)', '굳다', '단단하다'], reading: '굳을 경', meaning: '경직', strokes: 12 },
        { char: '警', examples: ['경찰(警察)', '경고(警告)', '경비(警備)', '경계(警戒)', '깨우치다'], reading: '경계할 경', meaning: '경찰', strokes: 20 },
        { char: '輕', examples: ['경량(輕量)', '경솔(輕率)', '경시(輕視)', '경쾌(輕快)', '가벼울 경'], reading: '가벼울 경', meaning: '경량', strokes: 14 },
        { char: '係', examples: ['관계(關係)', '연계(連係)', '계장(係長)', '매다', '잇다'], reading: '맬 계', meaning: '관계', strokes: 9 },
        { char: '界', examples: ['세계(世界)', '경계(境界)', '한계(限界)', '각계(各界)', '지경'], reading: '지경 계', meaning: '세계', strokes: 9 },
        { char: '階', examples: ['계단(階段)', '계급(階級)', '층계', '단계(段階)', '섬돌'], reading: '층계 계', meaning: '계단', strokes: 12 },
        { char: '鷄', examples: ['계란(鷄卵)', '양계(養鷄)', '삼계탕(蔘鷄湯)', '계륵(鷄肋)', '닭'], reading: '닭 계', meaning: '닭', strokes: 21 },
        // ㄴ 추가
        { char: '濃', examples: ['농후(濃厚)', '농도(濃度)', '농담(濃淡)', '짙다', '두텁다'], reading: '짙을 농', meaning: '농후', strokes: 17 },
        { char: '農', examples: ['농업(農業)', '농사(農事)', '농민(農民)', '농촌(農村)', '농부(農夫)'], reading: '농사 농', meaning: '농업', strokes: 13 },
        { char: '怒', examples: ['분노(憤怒)', '격노(激怒)', '희노애락(喜怒哀樂)', '성내다', '꾸짖다'], reading: '성낼 노', meaning: '분노', strokes: 9 },
        { char: '努', examples: ['노력(努力)', '분노(奮努)-no', '힘쓰다', '일하다', '노고'], reading: '힘쓸 노', meaning: '노력', strokes: 7 },
        // ㄷ 추가
        { char: '團', examples: ['단체(團體)', '집단(集團)', '단결(團結)', '사단(師團)', '둥글다'], reading: '둥글 단', meaning: '단체', strokes: 14 },
        { char: '段', examples: ['단계(段階)', '수단(手段)', '특단(特段)', '계단(階段)', '구분'], reading: '층계 단', meaning: '단계', strokes: 9 },
        { char: '斷', examples: ['판단(判斷)', '결단(決斷)', '단절(斷絶)', '차단(遮斷)', '끊다'], reading: '끊을 단', meaning: '판단', strokes: 18 },
        { char: '談', examples: ['대화(對話)', '면담(面談)', '회담(會談)', '농담(弄談)', '말씀'], reading: '말씀 담', meaning: '대화', strokes: 15 },
        { char: '當', examples: ['당연(當然)', '담당(擔當)', '정당(正當)', '당황(唐惶)-no', '마땅하다'], reading: '마땅 당', meaning: '당연', strokes: 13 },
        { char: '黨', examples: ['정당(政黨)', '여당(與黨)', '야당(野黨)', '당파(黨派)', '무리'], reading: '무리 당', meaning: '정당', strokes: 20 },
        { char: '堂', examples: ['당당(堂堂)', '식당(食堂)', '서당(書堂)', '강당(講堂)', '집'], reading: '집 당', meaning: '당', strokes: 11 },
        { char: '代', examples: ['대신(代身)', '대표(代表)', '시대(時代)', '세대(世代)', '대리(代理)'], reading: '대신할 대', meaning: '대신', strokes: 5 },
        { char: '帶', examples: ['휴대(携帶)', '연대(連帶)', '지대(地帶)', '유대(紐帶)', '띠'], reading: '띠 대', meaning: '지대', strokes: 11 },
        { char: '隊', examples: ['군대(軍隊)', '부대(部隊)', '대장(隊長)', '편대(編隊)', '무리'], reading: '무리 대', meaning: '군대', strokes: 12 },
        { char: '度', examples: ['정도(程度)', '태도(態度)', '각도(角度)', '온도(溫度)', '법도'], reading: '법도 도', meaning: '정도', strokes: 9 },
        { char: '圖', examples: ['지도(地圖)', '도서(圖書)', '의도(意圖)', '도모(圖謀)', '그림'], reading: '그림 도', meaning: '도화', strokes: 14 },
        { char: '導', examples: ['지도(指導)', '인도(引導)', '선도(先導)', '도입(導入)', '이끌다'], reading: '이끌 도', meaning: '지도', strokes: 16 },
        { char: '島', examples: ['섬', '도서(島嶼)', '무인도(無人島)', '반도(半島)', '열도(列島)'], reading: '섬 도', meaning: '섬', strokes: 10 },
        { char: '讀', examples: ['독서(讀書)', '구독(購讀)', '정독(精讀)', '낭독(朗讀)', '읽다'], reading: '읽을 독', meaning: '독서', strokes: 22 },
        { char: '毒', examples: ['독약(毒藥)', '중독(中毒)', '소독(消毒)', '맹독(猛毒)', '해치다'], reading: '독 독', meaning: '독', strokes: 9 },
        // ㅁ 추가
        { char: '末', examples: ['결말(結末)', '연말(年末)', '말기(末期)', '주말(週末)', '끝'], reading: '끝 말', meaning: '끝', strokes: 5 },
        { char: '買', examples: ['구매(購買)', '매수(買收)', '예매(預買)', '물건을 사다', '팔다(賣)-ant'], reading: '살 매', meaning: '구매', strokes: 12 },
        { char: '脈', examples: ['맥락(脈絡)', '동맥(動脈)', '산맥(山脈)', '인맥(人脈)', '줄기'], reading: '줄기 맥', meaning: '혈맥', strokes: 10 },
        { char: '盟', examples: ['동맹(同盟)', '연맹(聯盟)', '가맹(加盟)', '맹세(盟誓)', '약속'], reading: '맹세 맹', meaning: '동맹', strokes: 13 },
        { char: '猛', examples: ['맹렬(猛烈)', '맹수(猛獸)', '용맹(勇猛)', '사납다', '엄격하다'], reading: '사나울 맹', meaning: '맹렬', strokes: 11 },
        { char: '免', examples: ['면제(免除)', '면허(免許)', '사면(赦免)', '면하다', '벗다'], reading: '면할 면', meaning: '면제', strokes: 7 },
        { char: '命', examples: ['생명(生命)', '운명(運命)', '명령(命令)', '사명(使命)', '목숨'], reading: '목숨 명', meaning: '생명', strokes: 8 },
        { char: '模', examples: ['모범(模範)', '모양(模樣)', '규모(規模)', '모방(模倣)', '본뜨다'], reading: '본뜰 모', meaning: '모형', strokes: 15 },
        { char: '母', examples: ['어머니', '부모(父母)', '모국(母國)', '모성(母性)', '근본'], reading: '어미 모', meaning: '어머니', strokes: 5 },
        { char: '謀', examples: ['음모(陰謀)', '모의(謀議)', '참모(參謀)', '도모(圖謀)', '꾀하다'], reading: '꾀할 모', meaning: '음모', strokes: 16 },
        { char: '墓', examples: ['묘지(墓地)', '성묘(省墓)', '묘비(墓碑)', '무덤', '장사지내다'], reading: '무덤 묘', meaning: '묘지', strokes: 14 },
        { char: '妙', examples: ['기묘(奇妙)', '미묘(微妙)', '절묘(絶妙)', '오묘(奧妙)', '묘하다'], reading: '묘할 묘', meaning: '묘미', strokes: 7 },
        { char: '武', examples: ['무기(武器)', '무력(武力)', '무술(武術)', '문무(文武)', '호반'], reading: '호반 무', meaning: '무력', strokes: 8 },
        { char: '舞', examples: ['무용(舞踊)', '무대(舞臺)', '난무(亂舞)', '춤추다', '춤'], reading: '춤출 무', meaning: '춤', strokes: 14 },
        { char: '貿', examples: ['무역(貿易)', '무역풍(貿易風)', '바꾸다', '사다', '거래하다'], reading: '바꿀 무', meaning: '무역', strokes: 12 },
        // ㅂ 추가
        { char: '拜', examples: ['예배(禮拜)', '숭배(崇拜)', '세배(歲拜)', '절하다', '뵙다'], reading: '절 배', meaning: '경배', strokes: 9 },
        { char: '背', examples: ['배경(背景)', '배신(背信)', '등', '뒤', '배반하다'], reading: '등 배', meaning: '배경', strokes: 9 },
        { char: '番', examples: ['번호(番號)', '순번(順番)', '당번(當番)', '차례', '횟수'], reading: '차례 번', meaning: '번호', strokes: 12 },
        { char: '法', examples: ['법률(法律)', '방법(方法)', '불법(不法)', '헌법(憲法)', '법도'], reading: '법 법', meaning: '법률', strokes: 9 },
        { char: '變', examples: ['변화(變化)', '변경(變更)', '변신(變身)', '변수(變數)', '달라지다'], reading: '변할 변', meaning: '변화', strokes: 23 },
        { char: '別', examples: ['이별(離別)', '구별(區別)', '특별(特別)', '차별(差別)', '나누다'], reading: '나눌 별', meaning: '구별', strokes: 7 },
        { char: '病', examples: ['병완(病患)', '질병(疾病)', '병문안(病問安)', '병들다', '근심'], reading: '병 병', meaning: '질병', strokes: 10 },
        { char: '報', examples: ['보고(報告)', '보도(報道)', '정보(情報)', '보상(報償)', '알리다'], reading: '알릴 보', meaning: '보고', strokes: 12 },
        { char: '步', examples: ['보행(步行)', '진보(進步)', '양보(讓步)', '걸음', '걷다'], reading: '걸음 보', meaning: '보행', strokes: 7 },
        { char: '服', examples: ['의복(衣服)', '복종(服從)', '항복(降伏)-rel', '복무(服務)', '입다'], reading: '옷 복', meaning: '의복', strokes: 8 },
        { char: '本', examples: ['근본(根本)', '본래(本來)', '기본(基本)', '본부(本部)', '밑'], reading: '근본 본', meaning: '근본', strokes: 5 },
        { char: '封', examples: ['봉투(封套)', '밀봉(密封)', '봉인(封印)', '봉하다', '흙더미'], reading: '봉할 봉', meaning: '봉인', strokes: 9 },
        { char: '負', examples: ['부담(負擔)', '승부(勝負)', '부채(負債)', '지다', '패하다'], reading: '질 부', meaning: '부담', strokes: 9 },
        { char: '府', examples: ['정부(政府)', '도청(道廳)-rel', '왕부(王府)', '관청', '마을'], reading: '관청 부', meaning: '정부', strokes: 8 },
        { char: '婦', examples: ['부인(婦人)', '주부(主婦)', '고부(姑婦)', '며느리', '아내'], reading: '며느리 부', meaning: '부인', strokes: 11 },
        { char: '附', examples: ['부록(附錄)', '부착(附着)', '기부(寄附)', '첨부(添附)', '붙다'], reading: '붙을 부', meaning: '부착', strokes: 8 },
        { char: '浮', examples: ['부상(浮上)', '부양(浮揚)', '경박(輕薄)-rel', '뜨다', '떠다니다'], reading: '뜰 부', meaning: '부유', strokes: 10 },
        { char: '夫', examples: ['부부(夫婦)', '남편', '장부(丈夫)', '농부(農夫)', '사내'], reading: '지아비 부', meaning: '남편', strokes: 4 },
        { char: '扶', examples: ['부조(扶助)', '부양(扶養)', '상부상조(相扶相助)', '돕다', '붙들다'], reading: '도울 부', meaning: '부조', strokes: 7 },
        { char: '北', examples: ['북한(北韓)', '남북(南北)', '패배(敗北)', '북쪽', '달아나다'], reading: '북녘 북', meaning: '북쪽', strokes: 5 },
        { char: '粉', examples: ['분말(粉末)', '가루', '분필(粉筆)', '화장(化粧)-rel', '부수다'], reading: '가루 분', meaning: '분말', strokes: 10 },
        { char: '盆', examples: ['화분(花盆)', '분지(盆地)', '세수 대야', '동이', '그릇'], reading: '동이 분', meaning: '분', strokes: 9 },
        { char: '佛', examples: ['불교(佛敎)', '석가모니(釋迦牟尼)', '염불(念佛)', '부처', '깨닫다'], reading: '부처 불', meaning: '불', strokes: 7 },
        { char: '批', examples: ['비판(批判)', '비평(批評)', '비준(批准)', '치다', '깍아내리다'], reading: '칠 비', meaning: '비판', strokes: 7 },
        { char: '妃', examples: ['왕비(王妃)', '비빈(妃嬪)', '왕후(王后)', '아내', '짝'], reading: '왕비 비', meaning: '비', strokes: 6 },
        { char: '備', examples: ['준비(準備)', '대비(對備)', '구비(具備)', '장비(裝備)', '갖추다'], reading: '갖출 비', meaning: '준비', strokes: 12 },
        { char: '碑', examples: ['비석(碑石)', '기념비(記念碑)', '묘비(墓碑)', '비문(碑文)', '돌기둥'], reading: '비석 비', meaning: '비석', strokes: 13 },
        { char: '秘', examples: ['비밀(秘密)', '비결(秘訣)', '신비(神秘)', '숨기다', '신묘하다'], reading: '숨길 비', meaning: '비밀', strokes: 10 },
        { char: '飛', examples: ['비행(飛行)', '비상(飛翔)', '비약(飛躍)', '날다', '뛰다'], reading: '날 비', meaning: '비행', strokes: 9 },
        { char: '鼻', examples: ['이비인후과(耳鼻咽喉科)', '비염(鼻炎)', '콧물', '코', '시초'], reading: '코 비', meaning: '코', strokes: 14 },
        // 준2급 추가 한자 (ㅅ~ㅎ)
        // ㅅ
        { char: '査', examples: ['조사(調査)', '검사(檢査)', '수사(搜査)', '심사(審査)', '살피다'], reading: '조사할 사', meaning: '조사', strokes: 9 },
        { char: '死', examples: ['사망(死亡)', '생사(生死)', '필사(必死)', '죽다', '죽음'], reading: '죽을 사', meaning: '죽음', strokes: 6 },
        { char: '社', examples: ['사회(社會)', '회사(會社)', '신문사(新聞社)', '모이다', '사직(社稷)'], reading: '모일 사', meaning: '사회', strokes: 8 },
        { char: '師', examples: ['교사(敎師)', '의사(醫師)', '은사(恩師)', '스승', '군대'], reading: '스승 사', meaning: '스승', strokes: 10 },
        { char: '思', examples: ['생각', '사고(思考)', '의사(意思)', '사색(思索)', '그리워하다'], reading: '생각 사', meaning: '사고', strokes: 9 },
        { char: '士', examples: ['변호사(辯護士)', '박사(博士)', '병사(兵士)', '선비', '남자'], reading: '선비 사', meaning: '선비', strokes: 3 },
        { char: '寫', examples: ['사진(寫眞)', '묘사(描寫)', '필사(筆寫)', '베끼다', '그리다'], reading: '베낄 사', meaning: '사진', strokes: 15 },
        { char: '射', examples: ['사격(射擊)', '발사(發射)', '주사(注射)', '쏘다', '맞히다'], reading: '쏠 사', meaning: '사격', strokes: 10 },
        { char: '事', examples: ['사건(事件)', '사실(事實)', '사업(事業)', '일', '섬기다'], reading: '일 사', meaning: '일', strokes: 8 },
        { char: '仕', examples: ['봉사(奉仕)', '급사(給仕)', '벼슬하다', '섬기다', '일하다'], reading: '섬길 사', meaning: '벼슬', strokes: 5 },
        { char: '使', examples: ['사용(使用)', '대사(大使)', '천사(天使)', '부리다', '하여금'], reading: '부릴 사', meaning: '사용', strokes: 8 },
        { char: '絲', examples: ['철사(鐵絲)', '견사(繭絲)', '실', '실마리', '가늘다'], reading: '실 사', meaning: '실', strokes: 12 },
        { char: '私', examples: ['사생활(私生活)', '사리(私利)', '공사(公私)', '사사롭다', '나'], reading: '사사 사', meaning: '사적', strokes: 7 },
        { char: '謝', examples: ['감사(感謝)', '사과(謝瓜)', '사례(謝禮)', '사양(辭謝)', '갚다'], reading: '사례할 사', meaning: '사례', strokes: 17 },
        { char: '四', examples: ['사방(四方)', '사계(四季)', '사촌(四寸)', '넷', '넉'], reading: '넉 사', meaning: '넷', strokes: 5 },
        { char: '山', examples: ['등산(登山)', '강산(江山)', '산맥(山脈)', '산', '무덤'], reading: '뫼 산', meaning: '산', strokes: 3 },
        { char: '産', examples: ['생산(生産)', '산업(産業)', '재산(財産)', '출산(出産)', '낳다'], reading: '낳을 산', meaning: '생산', strokes: 11 },
        { char: '算', examples: ['계산(計算)', '암산(暗算)', '예산(豫算)', '산수(算數)', '셈하다'], reading: '셀 산', meaning: '계산', strokes: 14 },
        { char: '散', examples: ['산만(散漫)', '해산(解散)', '분산(分散)', '산책(散策)', '흩어지다'], reading: '흩을 산', meaning: '분산', strokes: 12 },
        { char: '傷', examples: ['상처(傷處)', '부상(負傷)', '손상(損傷)', '다치다', '상하다'], reading: '다칠 상', meaning: '상처', strokes: 13 },
        { char: '商', examples: ['상업(商業)', '상인(商人)', '상품(商品)', '장사', '헤아리다'], reading: '장사 상', meaning: '상업', strokes: 11 },
        { char: '想', examples: ['상상(想像)', '이상(理想)', '사상(思想)', '생각하다', '그리워하다'], reading: '생각할 상', meaning: '상상', strokes: 13 },
        { char: '象', examples: ['현상(現象)', '상징(象徵)', '기상(氣象)', '코끼리', '형상'], reading: '코끼리 상', meaning: '형상', strokes: 12 },
        { char: '賞', examples: ['상금(賞金)', '감상(鑑賞)', '포상(褒賞)', '상주다', '즐기다'], reading: '상줄 상', meaning: '상', strokes: 15 },
        { char: '常', examples: ['항상(恒常)', '정상(正常)', '비상(非常)', '일상(日常)', '떳떳하다'], reading: '항상 상', meaning: '평상', strokes: 11 },
        { char: '床', examples: ['침상(寢床)', '온상(溫床)', '책상(冊床)', '평상', '마루'], reading: '평상 상', meaning: '침대', strokes: 7 },
        { char: '像', examples: ['동상(銅像)', '석상(石像)', '화상(畵像)', '영상(映像)', '모양'], reading: '모양 상', meaning: '형상', strokes: 14 },
        { char: '西', examples: ['서양(西洋)', '서쪽', '동서(東西)', '서구(西歐)', '옮기다'], reading: '서녘 서', meaning: '서쪽', strokes: 6 },
        { char: '序', examples: ['순서(順序)', '질서(秩序)', '서론(序論)', '차례', '시초'], reading: '차례 서', meaning: '순서', strokes: 7 },
        { char: '書', examples: ['도서(圖書)', '서류(書類)', '독서(讀書)', '글씨', '쓰다'], reading: '글 서', meaning: '책', strokes: 10 },
        { char: '善', examples: ['선행(善行)', '최선(最善)', '자선(慈善)', '착하다', '좋다'], reading: '착할 선', meaning: '선', strokes: 12 },
        { char: '船', examples: ['선박(船舶)', '선장(船長)', '여객선(旅客船)', '배', '우주선'], reading: '배 선', meaning: '배', strokes: 11 },
        { char: '選', examples: ['선택(選擇)', '선거(選擧)', '선발(選拔)', '당선(當選)', '가리다'], reading: '가릴 선', meaning: '선택', strokes: 19 },
        { char: '宣', examples: ['선언(宣言)', '선전(宣傳)', '선포(宣布)', '베풀다', '펴다'], reading: '베풀 선', meaning: '선언', strokes: 9 },
        { char: '線', examples: ['곡선(曲線)', '직선(直線)', '노선(路線)', '줄', '실'], reading: '줄 선', meaning: '선', strokes: 15 },
        { char: '鮮', examples: ['신선(新鮮)', '생선(生鮮)', '선명(鮮明)', '고웄다', '깨끗하다'], reading: '고울 선', meaning: '신선', strokes: 17 },
        { char: '說', examples: ['설명(說明)', '설득(說得)', '소설(小說)', '전설(傳說)', '말씀'], reading: '말씀 설', meaning: '설명', strokes: 14 },
        { char: '設', examples: ['건설(建設)', '설치(設置)', '설계(設計)', '베풀다', '세우다'], reading: '베풀 설', meaning: '설치', strokes: 11 },
        { char: '雪', examples: ['설경(雪景)', '폭설(暴雪)', '백설(白雪)', '눈', '씻다'], reading: '눈 설', meaning: '눈', strokes: 11 },
        { char: '城', examples: ['성벽(城壁)', '산성(山城)', '도성(都城)', '성', '재'], reading: '성 성', meaning: '성', strokes: 9 },
        { char: '成', examples: ['성공(成功)', '완성(完成)', '성장(成長)', '이루다', '되다'], reading: '이룰 성', meaning: '성공', strokes: 7 },
        { char: '聖', examples: ['성인(聖人)', '신성(神聖)', '성경(聖經)', '거룩하다', '임금'], reading: '성인 성', meaning: '성인', strokes: 13 },
        { char: '性', examples: ['성격(性格)', '성질(性質)', '적성(適性)', '성품', '바탕'], reading: '성품 성', meaning: '성격', strokes: 9 },
        { char: '星', examples: ['위성(衛星)', '행성(行星)', '성좌(星座)', '별', '세월'], reading: '별 성', meaning: '별', strokes: 9 },
        { char: '盛', examples: ['성대(盛大)', '전성기(全盛期)', '번성(繁盛)', '성하다', '담다'], reading: '성할 성', meaning: '성대', strokes: 12 },
        { char: '聲', examples: ['소리', '음성(音聲)', '성명(聲明)', '명성(名聲)', '노래'], reading: '소리 성', meaning: '소리', strokes: 17 },
        { char: '勢', examples: ['기세(氣勢)', '형세(形勢)', '자세(姿勢)', '세력(勢力)', '기운'], reading: '기세 세', meaning: '형세', strokes: 13 },
        { char: '世', examples: ['세계(世界)', '세대(世代)', '출세(出世)', '인간', '일생'], reading: '인간 세', meaning: '세상', strokes: 5 },
        { char: '細', examples: ['세부(細部)', '미세(微細)', '섬세(纖細)', '가늘다', '작다'], reading: '가늘 세', meaning: '세부', strokes: 11 },
        { char: '洗', examples: ['세탁(洗濯)', '세수(洗手)', '세례(洗禮)', '씻다', '빨다'], reading: '씻을 세', meaning: '세탁', strokes: 10 },
        { char: '消', examples: ['소화(消化)', '소비(消費)', '취소(取消)', '사라지다', '끄다'], reading: '사라질 소', meaning: '소멸', strokes: 10 },
        { char: '少', examples: ['소년(少年)', '소수(少數)', '감소(減少)', '적다', '젊다'], reading: '적을 소', meaning: '적다', strokes: 4 },
        { char: '所', examples: ['장소(場所)', '소유(所有)', '주소(住所)', '바', '곳'], reading: '바 소', meaning: '장소', strokes: 8 },
        { char: '素', examples: ['소질(素質)', '요소(要素)', '검소(儉素)', '본디', '희다'], reading: '본디 소', meaning: '소박', strokes: 10 },
        { char: '笑', examples: ['미소(微笑)', '폭소(爆笑)', '비웃음', '웃다', '꽃피다'], reading: '웃을 소', meaning: '웃음', strokes: 10 },
        { char: '燒', examples: ['연소(燃燒)', '소각(燒却)', '전소(全燒)', '불사르다', '타다'], reading: '불사를 소', meaning: '소각', strokes: 16 },
        { char: '速', examples: ['속도(速度)', '고속(高速)', '가속(加速)', '빠르다', '불러오다'], reading: '빠를 속', meaning: '속도', strokes: 11 },
        { char: '續', examples: ['계속(繼續)', '연속(連續)', '후속(後續)', '잇다', '이어지다'], reading: '이을 속', meaning: '계속', strokes: 21 },
        { char: '孫', examples: ['손자(孫子)', '자손(子孫)', '후손(後孫)', '손주', '움'], reading: '손자 손', meaning: '손자', strokes: 10 },
        { char: '損', examples: ['손해(損害)', '손실(損失)', '훼손(毁損)', '덜다', '잃다'], reading: '덜 손', meaning: '손실', strokes: 13 },
        { char: '送', examples: ['송신(送信)', '배송(配送)', '방송(放送)', '보내다', '배웅하다'], reading: '보낼 송', meaning: '송신', strokes: 10 },
        { char: '松', examples: ['소나무', '송림(松林)', '송편', '송진', '굳세다'], reading: '소나무 송', meaning: '소나무', strokes: 8 },
        { char: '水', examples: ['수영(水泳)', '수도(水道)', '홍수(洪水)', '물', '강'], reading: '물 수', meaning: '물', strokes: 4 },
        { char: '手', examples: ['악수(握手)', '박수(拍手)', '수술(手術)', '손', '재주'], reading: '손 수', meaning: '손', strokes: 4 },
        { char: '受', examples: ['수용(受容)', '접수(接受)', '수상(受賞)', '받다', '얻다'], reading: '받을 수', meaning: '수령', strokes: 8 },
        { char: '秀', examples: ['우수(優秀)', '수려(秀麗)', '수재(秀才)', '빼어하다', '뛰어나다'], reading: '빼어날 수', meaning: '수려', strokes: 7 },
        { char: '修', examples: ['수리(修理)', '수정(修正)', '연수(硏修)', '닦다', '꾸미다'], reading: '닦을 수', meaning: '수리', strokes: 10 },
        { char: '收', examples: ['수집(收集)', '수입(收入)', '흡수(吸收)', '거두다', '잡다'], reading: '거둘 수', meaning: '수집', strokes: 6 },
        { char: '守', examples: ['수비(守備)', '준수(遵守)', '보수(保守)', '지키다', '보살피다'], reading: '지킬 수', meaning: '수비', strokes: 6 },
        { char: '數', examples: ['수학(數學)', '숫자(數字)', '다수(多數)', '셈하다', '세다'], reading: '셀 수', meaning: '숫자', strokes: 15 },
        { char: '樹', examples: ['가로수(街路樹)', '과수(果樹)', '수목(樹木)', '나무', '심다'], reading: '나무 수', meaning: '나무', strokes: 16 },
        { char: '首', examples: ['수도(首都)', '가수(歌手)', '원수(元首)', '머리', '으뜸'], reading: '머리 수', meaning: '수석', strokes: 9 },
        { char: '壽', examples: ['장수(長壽)', '수명(壽命)', '천수(天壽)', '목숨', '오래살다'], reading: '목숨 수', meaning: '장수', strokes: 14 },
        { char: '順', examples: ['순서(順序)', '순조(順調)', '모순(矛盾)-ant', '순하다', '따르다'], reading: '순할 순', meaning: '순서', strokes: 12 },
        { char: '習', examples: ['연습(練習)', '습관(習慣)', '복습(復習)', '익히다', '배우다'], reading: '익힐 습', meaning: '학습', strokes: 11 },
        { char: '勝', examples: ['승리(勝利)', '우승(優勝)', '필승(必勝)', '이기다', '낫다'], reading: '이길 승', meaning: '승리', strokes: 12 },
        { char: '承', examples: ['승인(承認)', '계승(繼承)', '전승(傳承)', '잇다', '받들다'], reading: '이을 승', meaning: '승계', strokes: 8 },
        { char: '時', examples: ['시간(時間)', '시대(時代)', '시계(時計)', '때', '철'], reading: '때 시', meaning: '시간', strokes: 10 },
        { char: '市', examples: ['시장(市場)', '도시(都市)', '시민(市民)', '저자', '장사하다'], reading: '저자 시', meaning: '시장', strokes: 5 },
        { char: '始', examples: ['시작(始作)', '시조(始祖)', '시종(始終)', '비로소', '처음'], reading: '비로소 시', meaning: '시작', strokes: 8 },
        { char: '視', examples: ['시력(視力)', '무시(無視)', '감시(監視)', '보다', '보이다'], reading: '볼 시', meaning: '시각', strokes: 12 },
        { char: '試', examples: ['시험(試驗)', '시도(試圖)', '입시(入試)', '시험하다', '쓰다'], reading: '시험할 시', meaning: '시험', strokes: 13 },
        { char: '詩', examples: ['시인(詩人)', '시집(詩集)', '자작시(自作詩)', '시', '읊다'], reading: '시 시', meaning: '시', strokes: 13 },
        { char: '式', examples: ['형식(形式)', '예식(禮式)', '공식(公式)', '법', '의식'], reading: '법 식', meaning: '방식', strokes: 6 },
        { char: '食', examples: ['식사(食事)', '음식(飮食)', '식당(食堂)', '밥', '먹다'], reading: '밥 식', meaning: '식사', strokes: 9 },
        { char: '植', examples: ['식물(植物)', '식목(植木)', '이식(移植)', '심다', '세우다'], reading: '심을 식', meaning: '식물', strokes: 12 },
        { char: '識', examples: ['지식(知識)', '상식(常識)', '의식(意識)', '알다', '기록하다'], reading: '알 식', meaning: '지식', strokes: 19 },
        { char: '身', examples: ['신체(身體)', '자신(自身)', '신분(身分)', '몸', '나'], reading: '몸 신', meaning: '신체', strokes: 7 },
        { char: '信', examples: ['신용(信用)', '통신(通信)', '신앙(信仰)', '믿다', '편지'], reading: '믿을 신', meaning: '신뢰', strokes: 9 },
        { char: '神', examples: ['신화(神話)', '귀신(鬼神)', '정신(精神)', '신', '영혼'], reading: '귀신 신', meaning: '신', strokes: 10 },
        { char: '新', examples: ['신규(新規)', '혁신(革新)', '최신(最新)', '새롭다', '새'], reading: '새 신', meaning: '신규', strokes: 13 },
        { char: '臣', examples: ['신하(臣下)', '공신(功臣)', '간신(奸臣)', '신하', '백성'], reading: '신하 신', meaning: '신하', strokes: 7 },
        { char: '深', examples: ['심해(深海)', '심부(深部)', '관심(關心)-rel', '깊다', '심하다'], reading: '깊을 심', meaning: '심층', strokes: 12 },
        { char: '心', examples: ['심장(心臟)', '중심(中心)', '양심(良心)', '마음', '생각'], reading: '마음 심', meaning: '마음', strokes: 4 },
        { char: '審', examples: ['심사(審査)', '심판(審判)', '재심(再審)', '살피다', '자세하다'], reading: '살필 심', meaning: '심사', strokes: 15 },
        // ㅇ
        { char: '兒', examples: ['아동(兒童)', '유아(幼兒)', '소아과(小兒科)', '아이', '자식'], reading: '아이 아', meaning: '아이', strokes: 8 },
        { char: '我', examples: ['자아(自我)', '아집(我執)', '피아(彼我)', '나', '우리'], reading: '나 아', meaning: '나', strokes: 7 },
        { char: '安', examples: ['안전(安全)', '평안(平安)', '불안(不安)', '편안하다', '즐기다'], reading: '편안할 안', meaning: '안전', strokes: 6 },
        { char: '眼', examples: ['안경(眼鏡)', '육안(肉眼)', '안목(眼目)', '눈', '구멍'], reading: '눈 안', meaning: '눈', strokes: 11 },
        { char: '案', examples: ['안건(案件)', '제안(提案)', '도안(圖案)', '방안(方案)', '책상'], reading: '책상 안', meaning: '안건', strokes: 10 },
        { char: '暗', examples: ['암흑(暗黑)', '암산(暗算)', '명암(明暗)', '어둡다', '몰래'], reading: '어두울 암', meaning: '암흑', strokes: 13 },
        { char: '壓', examples: ['압력(壓力)', '탄압(彈壓)', '제압(制壓)', '누르다', '억압하다'], reading: '누를 압', meaning: '압력', strokes: 17 },
        { char: '野', examples: ['야생(野生)', '야구(野球)', '분야(分野)', '들', '시골'], reading: '들 야', meaning: '야외', strokes: 11 },
        { char: '夜', examples: ['야간(夜間)', '야식(夜食)', '철야(徹夜)', '밤', '어둡다'], reading: '밤 야', meaning: '밤', strokes: 8 },
        { char: '藥', examples: ['약국(藥局)', '약속(約束)-rel', '치약(齒藥)', '약', '치료하다'], reading: '약 약', meaning: '약', strokes: 18 },
        { char: '約', examples: ['약속(約束)', '계약(契約)', '요약(要約)', '묶다', '검소하다'], reading: '맺을 약', meaning: '약속', strokes: 9 },
        { char: '弱', examples: ['약점(弱點)', '나약(懦弱)', '노약자(老弱者)', '약하다', '젊다'], reading: '약할 약', meaning: '약함', strokes: 10 },
        { char: '陽', examples: ['태양(太陽)', '석양(夕陽)', '양지(陽地)', '볕', '남쪽'], reading: '볕 양', meaning: '태양', strokes: 12 },
        { char: '羊', examples: ['양털', '면양(緬羊)', '산양(山羊)', '양', '아름답다'], reading: '양 양', meaning: '양', strokes: 6 },
        { char: '洋', examples: ['서양(西洋)', '대양(大洋)', '동양(東洋)', '바다', '넓다'], reading: '바다 양', meaning: '양', strokes: 10 },
        { char: '樣', examples: ['다양(多樣)', '모양(模樣)', '동양(同樣)', '본보기', '상수리나무'], reading: '모양 양', meaning: '모양', strokes: 15 },
        { char: '語', examples: ['국어(國語)', '영어(英語)', '단어(單語)', '말씀', '알리다'], reading: '말씀 어', meaning: '언어', strokes: 14 },
        { char: '魚', examples: ['어류(魚類)', '어항(魚缸)', '활어(活魚)', '물고기', '낚다'], reading: '물고기 어', meaning: '물고기', strokes: 11 },
        { char: '言', examples: ['언어(言語)', '조언(助言)', '선언(宣言)', '말씀', '말하다'], reading: '말씀 언', meaning: '말', strokes: 7 },
        { char: '業', examples: ['직업(職業)', '사업(事業)', '학업(學業)', '일', '업보'], reading: '업 업', meaning: '직업', strokes: 13 },
        { char: '女', examples: ['여성(女性)', '소녀(少女)', '여신(女神)', '여자', '딸'], reading: '여자 여', meaning: '여자', strokes: 3 },
        { char: '餘', examples: ['여유(餘裕)', '나머지', '여지(餘地)', '여생(餘生)', '남다'], reading: '남을 여', meaning: '여분', strokes: 16 },
        { char: '如', examples: ['여전(如前)', '결여(缺如)', '만약(萬如)', '같다', '만일'], reading: '같을 여', meaning: '여하', strokes: 6 },
        { char: '與', examples: ['참여(參與)', '관여(關與)', '부여(附與)', '주다', '더불다'], reading: '줄 여', meaning: '여', strokes: 14 },
        { char: '域', examples: ['지역(地域)', '구역(區域)', '영역(領域)', '지경', '나라'], reading: '지경 역', meaning: '영역', strokes: 11 },
        { char: '易', examples: ['무역(貿易)', '용이(容易)', '평이(平易)', '바꾸다', '쉽다'], reading: '바꿀 역', meaning: '교역', strokes: 8 },
        { char: '役', examples: ['역할(役割)', '주역(主役)', '병역(兵役)', '부리다', '일'], reading: '부릴 역', meaning: '역할', strokes: 7 },
        { char: '驛', examples: ['기차역(機車驛)', '서울역', '역전(驛前)', '정거장', '역참'], reading: '역 역', meaning: '역', strokes: 23 },
        { char: '然', examples: ['자연(自然)', '당연(當然)', '우연(偶然)', '그러하다', '불타다'], reading: '그럴 연', meaning: '자연', strokes: 12 },
        { char: '燃', examples: ['연료(燃料)', '연소(燃燒)', '가연성(可燃性)', '불타다', '사르다'], reading: '불사를 연', meaning: '연소', strokes: 16 },
        { char: '演', examples: ['연기(演技)', '공연(公演)', '연설(演說)', '펴다', '흐르다'], reading: '펼 연', meaning: '연기', strokes: 15 },
        { char: '延', examples: ['연기(延期)', '연장(延長)', '지연(遲延)', '늘이다', '끌다'], reading: '늘일 연', meaning: '연장', strokes: 8 },
        { char: '連', examples: ['연결(連結)', '연속(連續)', '관련(關聯)', '잇닿다', '잇다'], reading: '잇닿을 연', meaning: '연결', strokes: 14 },
        { char: '煙', examples: ['금연(禁煙)', '흡연(吸煙)', '연기', '안개', '그을음'], reading: '연기 연', meaning: '연기', strokes: 13 },
        { char: '鍊', examples: ['세련(洗鍊)', '단련(鍛鍊)', '연마(鍊磨)', '불리다', '익히다'], reading: '단련할 련', meaning: '연마', strokes: 17 },
        { char: '緣', examples: ['인연(因緣)', '혈연(血緣)', '사연(事緣)', '가장자리', '연줄'], reading: '인연 연', meaning: '인연', strokes: 15 },
        { char: '熱', examples: ['열정(熱情)', '가열(加熱)', '열기(熱氣)', '덥다', '열'], reading: '더울 열', meaning: '열', strokes: 15 },
        { char: '列', examples: ['나열(羅列)', '대열(隊列)', '열차(列車)', '벌리다', '줄'], reading: '벌릴 열', meaning: '열', strokes: 6 },
        { char: '葉', examples: ['나뭇잎', '낙엽(落葉)', '엽서(葉書)', '잎', '시대'], reading: '잎 엽', meaning: '잎', strokes: 15 },
        { char: '榮', examples: ['영광(榮光)', '번영(繁榮)', '영예(榮譽)', '영화', '꽃'], reading: '영화 영', meaning: '영광', strokes: 14 },
        { char: '永', examples: ['영원(永遠)', '영구(永久)', '영생(永生)', '길다', '오래다'], reading: '길 영', meaning: '영원', strokes: 5 },
        { char: '英', examples: ['영웅(英雄)', '영재(英才)', '영어(英語)', '꽃부리', '뛰어나다'], reading: '꽃부리 영', meaning: '영국', strokes: 9 },
        { char: '營', examples: ['경영(經營)', '운영(運營)', '병영(兵營)', '경영하다', '짓다'], reading: '경영할 영', meaning: '경영', strokes: 17 },
        { char: '迎', examples: ['환영(歡迎)', '영접(迎接)', '송구영신(送舊迎新)', '맞다', '마중하다'], reading: '맞을 영', meaning: '영접', strokes: 8 },
        { char: '映', examples: ['영화(映畵)', '반영(反映)', '상영(上映)', '비치다', '그림자'], reading: '비칠 영', meaning: '반영', strokes: 9 },
        { char: '影', examples: ['영향(影響)', '촬영(撮影)', '환영(幻影)', '그림자', '형상'], reading: '그림자 영', meaning: '그림자', strokes: 15 },
        { char: '藝', examples: ['예술(藝術)', '연예(演藝)', '기예(技藝)', '재주', '심다'], reading: '재주 예', meaning: '예술', strokes: 19 },
        { char: '豫', examples: ['예상(豫想)', '예방(豫防)', '예산(豫算)', '미리', '참여하다'], reading: '미리 예', meaning: '예상', strokes: 16 },
        { char: '午', examples: ['오후(午後)', '오전(午前)', '정오(正午)', '낮', '일곱째 지지'], reading: '낮 오', meaning: '정오', strokes: 4 },
        { char: '五', examples: ['오감(五感)', '오곡(五穀)', '오행(五行)', '다섯', '다섯 번'], reading: '다섯 오', meaning: '다섯', strokes: 4 },
        { char: '屋', examples: ['가옥(家屋)', '한옥(韓屋)', '옥상(屋上)', '집', '지붕'], reading: '집 옥', meaning: '집', strokes: 9 },
        { char: '玉', examples: ['옥석(玉石)', '옥새(玉璽)', '옥수수', '구슬', '아름답다'], reading: '구슬 옥', meaning: '옥', strokes: 5 },
        { char: '完', examples: ['완성(完成)', '완전(完全)', '미완(未完)', '완전하다', '끝내다'], reading: '완전할 완', meaning: '완전', strokes: 7 },
        { char: '外', examples: ['외국(外國)', '제외(除外)', '외모(外貌)', '바깥', '겉'], reading: '바깥 외', meaning: '밖', strokes: 5 },
        { char: '要', examples: ['요구(要求)', '중요(重要)', '필요(必要)', '구하다', '요긴하다'], reading: '요할 요', meaning: '필요', strokes: 9 },
        { char: '容', examples: ['용량(容量)', '내용(內容)', '수용(受容)', '얼굴', '담다'], reading: '얼굴 용', meaning: '용모', strokes: 10 },
        { char: '用', examples: ['사용(使用)', '용도(用途)', '이용(利用)', '쓰다', '베풀다'], reading: '쓸 용', meaning: '사용', strokes: 5 },
        { char: '勇', examples: ['용기(勇氣)', '용맹(勇猛)', '용감(勇敢)', '날래다', '과감하다'], reading: '날랠 용', meaning: '용기', strokes: 9 },
        { char: '優', examples: ['우수(優秀)', '우승(優勝)', '우대(優待)', '넉넉하다', '뛰어나다'], reading: '넉넉할 우', meaning: '우수', strokes: 17 },
        { char: '友', examples: ['친구(親舊)', '우정(友情)', '우호(友好)', '벗', '우애'], reading: '벗 우', meaning: '친구', strokes: 4 },
        { char: '右', examples: ['우측(右側)', '우회전(右回轉)', '좌우(左右)', '오른쪽', '오른손'], reading: '오른 우', meaning: '오른쪽', strokes: 5 },
        { char: '雨', examples: ['폭우(暴雨)', '강우(降雨)', '우기(雨期)', '비', '흩어지다'], reading: '비 우', meaning: '비', strokes: 8 },
        { char: '遇', examples: ['대우(待遇)', '조우(遭遇)', '우연(遇然)-no', '만나다', '당하다'], reading: '만날 우', meaning: '조우', strokes: 13 },
        { char: '郵', examples: ['우편(郵便)', '우표(郵票)', '우체국(郵遞局)', '우편', '역참'], reading: '우편 우', meaning: '우편', strokes: 11 },
        { char: '運', examples: ['운동(運動)', '운전(運轉)', '행운(幸運)', '옮기다', '운수'], reading: '움직일 운', meaning: '운동', strokes: 13 },
        { char: '院', examples: ['병원(病院)', '학원(學院)', '법원(法院)', '집', '담'], reading: '집 원', meaning: '병원', strokes: 10 },
        { char: '源', examples: ['근원(根源)', '자원(資源)', '원천(源泉)', '수원(水源)', '근본'], reading: '근원 원', meaning: '근원', strokes: 14 },
        { char: '遠', examples: ['원정(遠征)', '영원(永遠)', '소원(疏遠)', '멀다', '깊다'], reading: '멀 원', meaning: '원거리', strokes: 14 },
        { char: '原', examples: ['원인(原因)', '원칙(原則)', '원래(原來)', '언덕', '근본'], reading: '근원 원', meaning: '원인', strokes: 10 },
        { char: '員', examples: ['회원(會員)', '직원(職員)', '동원(動員)', '수효', '사람'], reading: '인원 원', meaning: '회원', strokes: 10 },
        { char: '園', examples: ['공원(公園)', '동산', '낙원(樂園)', '정원(庭園)', '마당'], reading: '동산 원', meaning: '공원', strokes: 13 },
        { char: '月', examples: ['세월(歲月)', '달', '월급(月給)', '매월(每月)', '한 달'], reading: '달 월', meaning: '달', strokes: 4 },
        { char: '危', examples: ['위험(危險)', '위기(危機)', '위태롭다', '두려워하다', '높다'], reading: '위태할 위', meaning: '위험', strokes: 6 },
        { char: '爲', examples: ['행위(行爲)', '인위(人爲)', '위하여', '하다', '삼다'], reading: '할 위', meaning: '위하다', strokes: 12 },
        { char: '位', examples: ['위치(位置)', '지위(地位)', '순위(順位)', '자리', '벼슬'], reading: '자리 위', meaning: '지위', strokes: 7 },
        { char: '委', examples: ['위원(委員)', '위임(委任)', '위탁(委託)', '맡기다', '버리다'], reading: '맡길 위', meaning: '위임', strokes: 8 },
        { char: '威', examples: ['위엄(威嚴)', '권위(權威)', '위력(威力)', '으름장', '두려워하다'], reading: '위엄 위', meaning: '위엄', strokes: 9 },
        { char: '慰', examples: ['위로(慰勞)', '위안(慰安)', '위문(慰問)', '위로하다', '편안하다'], reading: '위로할 위', meaning: '위로', strokes: 15 },
        { char: '由', examples: ['이유(理由)', '자유(自由)', '경유(經由)', '말미암다', '까닭'], reading: '말미암을 유', meaning: '이유', strokes: 5 },
        { char: '油', examples: ['석유(石油)', '주유(注油)', '식용유(食用油)', '기름', '매끄럽다'], reading: '기름 유', meaning: '기름', strokes: 8 },
        { char: '遊', examples: ['유희(遊戱)', '유목(遊牧)', '관광(觀光)-rel', '놀다', '즐기다'], reading: '놀 유', meaning: '유희', strokes: 13 },
        { char: '乳', examples: ['우유(牛乳)', '모유(母乳)', '유제품(乳製品)', '젖', '낳다'], reading: '젖 유', meaning: '젖', strokes: 8 },
        { char: '儒', examples: ['유교(儒敎)', '유학(儒學)', '선비', '유생(儒生)', '나약하다'], reading: '선비 유', meaning: '유교', strokes: 16 },
        { char: '維', examples: ['유지(維持)', '섬유(纖維)', '유신(維新)', '벼리', '매다'], reading: '벼리 유', meaning: '유지', strokes: 14 },
        { char: '有', examples: ['유무(有無)', '소유(所有)', '유명(有名)', '있다', '가지다'], reading: '있을 유', meaning: '있다', strokes: 6 },
        { char: '六', examples: ['육십(六十)', '육각형(六角形)', '오륙도(五六島)', '여섯', '여섯 번'], reading: '여섯 육', meaning: '여섯', strokes: 4 },
        { char: '育', examples: ['교육(敎育)', '육성(育成)', '보육(保育)', '기르다', '자라다'], reading: '기를 육', meaning: '교육', strokes: 8 },
        { char: '恩', examples: ['은혜(恩惠)', '보은(報恩)', '은인(恩人)', '사랑', '베풀다'], reading: '은혜 은', meaning: '은혜', strokes: 10 },
        { char: '隱', examples: ['은닉(隱匿)', '은둔(隱遁)', '은폐(隱蔽)', '숨다', '가리다'], reading: '숨을 은', meaning: '은폐', strokes: 17 },
        { char: '音', examples: ['음악(音樂)', '발음(發音)', '소음(騷音)', '소리', '소식'], reading: '소리 음', meaning: '소리', strokes: 9 },
        { char: '飮', examples: ['음료(飮料)', '음주(飮酒)', '음식(飮食)', '마시다', '숨기다'], reading: '마실 음', meaning: '음료', strokes: 13 },
        { char: '邑', examples: ['도읍(都邑)', '읍내(邑內)', '고을', '마을', '근심하다'], reading: '고을 읍', meaning: '읍', strokes: 7 },
        { char: '意', examples: ['의미(意味)', '의견(意見)', '주의(注意)', '뜻', '생각'], reading: '뜻 의', meaning: '의미', strokes: 13 },
        { char: '醫', examples: ['의사(醫師)', '의학(醫學)', '한의원(韓醫院)', '의원', '고치다'], reading: '의원 의', meaning: '의사', strokes: 18 },
        { char: '衣', examples: ['의복(衣服)', '의상(衣裳)', '탈의(脫衣)', '옷', '입다'], reading: '옷 의', meaning: '옷', strokes: 6 },
        { char: '依', examples: ['의존(依存)', '의지(依支)', '의뢰(依賴)', '의지하다', '따르다'], reading: '의지할 의', meaning: '의존', strokes: 8 },
        { char: '異', examples: ['차이(差異)', '이물질(異物質)', '이상(異常)', '다르다', '기이하다'], reading: '다를 이', meaning: '차이', strokes: 11 },
        { char: '移', examples: ['이동(移動)', '이민(移民)', '이사(移徙)', '옮기다', '바꾸다'], reading: '옮길 이', meaning: '이동', strokes: 11 },
        { char: '利', examples: ['이익(利益)', '편리(便利)', '이용(利用)', '이롭다', '날카롭다'], reading: '이로울 리', meaning: '이익', strokes: 7 },
        { char: '理', examples: ['이해(理解)', '이유(理由)', '논리(論理)', '다스리다', '이치'], reading: '다스릴 리', meaning: '이치', strokes: 12 },
        { char: '二', examples: ['이십(二十)', '이중(二重)', '유일무이(唯一無二)', '두', '둘'], reading: '두 이', meaning: '둘', strokes: 2 },
        { char: '以', examples: ['이하(以下)', '이상(以上)', '이전(以前)', '써', '...로써'], reading: '써 이', meaning: '이', strokes: 5 },
        { char: '仁', examples: ['인자(仁慈)', '인격(仁格)', '인술(仁術)', '어질다', '사랑'], reading: '어질 인', meaning: '인자', strokes: 4 },
        { char: '引', examples: ['인용(引用)', '인도(引導)', '인력(引力)', '끌다', '당기다'], reading: '끌 인', meaning: '인도', strokes: 4 },
        { char: '人', examples: ['인간(人間)', '인물(人物)', '인구(人口)', '사람', '타인'], reading: '사람 인', meaning: '사람', strokes: 2 },
        { char: '認', examples: ['인정(認定)', '확인(確認)', '인식(認識)', '알다', '허가하다'], reading: '알 인', meaning: '인정', strokes: 14 },
        { char: '因', examples: ['원인(原因)', '인과(因果)', '요인(要因)', '인하다', '유래하다'], reading: '인할 인', meaning: '원인', strokes: 6 },
        { char: '忍', examples: ['인내(忍耐)', '잔인(殘忍)', '참다', '용서하다', '견디다'], reading: '참을 인', meaning: '인내', strokes: 7 },
        { char: '日', examples: ['일기(日記)', '매일(每日)', '일일(一日)', '해', '날'], reading: '날 일', meaning: '해', strokes: 4 },
        { char: '一', examples: ['일등(一等)', '통일(統一)', '제일(第一)', '하나', '첫째'], reading: '한 일', meaning: '하나', strokes: 1 },
        { char: '任', examples: ['임무(任務)', '책임(責任)', '임명(任命)', '맡기다', '마음대로 하다'], reading: '맡길 임', meaning: '임무', strokes: 6 },
        { char: '入', examples: ['입구(入口)', '입학(入學)', '수입(收入)', '들다', '들어가다'], reading: '들 입', meaning: '입장', strokes: 2 },
        // ㅈ
        { char: '子', examples: ['자녀(子女)', '남자(男子)', '여자(女子)', '아들', '자식'], reading: '아들 자', meaning: '아들', strokes: 3 },
        { char: '者', examples: ['학자(學者)', '독자(讀者)', '환자(患者)', '사람', '놈'], reading: '놈 자', meaning: '자', strokes: 8 },
        { char: '自', examples: ['자유(自由)', '자신(自身)', '자연(自然)', '스스로', '몸소'], reading: '스스로 자', meaning: '자기', strokes: 6 },
        { char: '字', examples: ['한자(漢字)', '숫자(數字)', '문자(文字)', '글자', '자'], reading: '글자 자', meaning: '글자', strokes: 6 },
        { char: '資', examples: ['자본(資本)', '자원(資源)', '자격(資格)', '재물', '바탕'], reading: '재물 자', meaning: '자본', strokes: 13 },
        { char: '姿', examples: ['자세(姿勢)', '자태(姿態)', '용자(容姿)', '모습', '맵시'], reading: '모습 자', meaning: '자세', strokes: 9 },
        { char: '場', examples: ['운동장(運動場)', '공장(工場)', '입장(立場)', '마당', '곳'], reading: '마당 장', meaning: '장소', strokes: 12 },
        { char: '長', examples: ['장점(長點)', '회장(會長)', '성장(成長)', '길다', '어른'], reading: '긴 장', meaning: '길다', strokes: 8 },
        { char: '壯', examples: ['장군(壯軍)-no', '농장(農莊)-X', '장대(壯大)', '비장(悲壯)', '씩씩하다'], reading: '씩씩할 장', meaning: '장대', strokes: 7 },
        { char: '將', examples: ['장래(將來)', '장군(將軍)', '장차(將次)', '장수', '앞으로'], reading: '장수 장', meaning: '장군', strokes: 11 },
        { char: '障', examples: ['장애(障礙)', '고장(故障)', '보장(保障)', '막다', '가로막다'], reading: '막을 장', meaning: '장애', strokes: 14 },
        { char: '章', examples: ['문장(文章)', '차장(次章)-rel', '도장(圖章)', '글', '표시'], reading: '글 장', meaning: '문장', strokes: 11 },
        { char: '裝', examples: ['포장(包裝)', '장식(裝飾)', '의상(衣裝)', '꾸미다', '채우다'], reading: '꾸밀 장', meaning: '장식', strokes: 13 },
        { char: '張', examples: ['긴장(緊張)', '확장(擴張)', '주장(主張)', '베풀다', '넓히다'], reading: '베풀 장', meaning: '긴장', strokes: 11 },
        { char: '藏', examples: ['매장(埋藏)', '소장(所藏)', '저장(貯藏)', '감추다', '숨기다'], reading: '감출 장', meaning: '저장', strokes: 18 },
        { char: '臟', examples: ['심장(心臟)', '내장(內臟)', '오장육부(五臟六腑)', '오장', '내장'], reading: '내장 장', meaning: '심장', strokes: 22 },
        { char: '在', examples: ['존재(存在)', '부재(不在)', '현재(現在)', '있다', '살다'], reading: '있을 재', meaning: '존재', strokes: 6 },
        { char: '材', examples: ['재료(材料)', '목재(木材)', '인재(人材)', '재목', '성질'], reading: '재목 재', meaning: '재료', strokes: 7 },
        { char: '災', examples: ['재해(災害)', '화재(火災)', '재앙(災殃)', '재난', '불이 나다'], reading: '재앙 재', meaning: '재해', strokes: 7 },
        { char: '再', examples: ['재발(再發)', '재개(再開)', '재생(再生)', '두 번', '다시'], reading: '두 재', meaning: '재차', strokes: 6 },
        { char: '積', examples: ['면적(面積)', '성적(成績)', '축적(蓄積)', '쌓다', '모으다'], reading: '쌓을 적', meaning: '누적', strokes: 16 },
        { char: '籍', examples: ['국적(國籍)', '서적(書籍)', '호적(戶籍)', '문서', '장부'], reading: '문서 적', meaning: '국적', strokes: 20 },
        { char: '績', examples: ['실적(實績)', '성적(成績)', '공적(功績)', '길쌈하다', '이루다'], reading: '길쌈 적', meaning: '업적', strokes: 17 },
        { char: '的', examples: ['목적(目的)', '일반적(一般的)', '구체적(具體的)', '과녁', '참되다'], reading: '과녁 적', meaning: '목적', strokes: 8 },
        { char: '敵', examples: ['적군(敵軍)', '천적(天敵)', '무적(無敵)', '원수', '대적하다'], reading: '원수 적', meaning: '적', strokes: 15 },
        { char: '適', examples: ['적당(適當)', '적합(適合)', '적용(適用)', '맞다', '즐기다'], reading: '맞을 적', meaning: '적합', strokes: 15 },
        { char: '赤', examples: ['적색(赤色)', '적십자(赤十字)', '적자(赤字)', '붉다', '비다'], reading: '붉을 적', meaning: '적색', strokes: 7 },
        { char: '跡', examples: ['흔적(痕跡)', '유적(遺跡)', '기적(奇蹟)-rel', '자취', '발자국'], reading: '자취 적', meaning: '자취', strokes: 13 },
        { char: '全', examples: ['전체(全體)', '안전(安全)', '전국(全國)', '온전하다', '모두'], reading: '온전할 전', meaning: '전체', strokes: 6 },
        { char: '田', examples: ['유전(油田)', '전답(田畓)', '춘추전국(春秋戰國)', '밭', '사냥하다'], reading: '밭 전', meaning: '밭', strokes: 5 },
        { char: '傳', examples: ['전달(傳達)', '전통(傳統)', '선전(宣傳)', '전하다', '알리다'], reading: '전할 전', meaning: '전달', strokes: 13 },
        { char: '電', examples: ['전기(電氣)', '전화(電話)', '전자(電子)', '번개', '빠르다'], reading: '번개 전', meaning: '전기', strokes: 13 },
        { char: '前', examples: ['오전(午前)', '직전(直前)', '전후(前後)', '앞', '미리'], reading: '앞 전', meaning: '앞', strokes: 9 },
        { char: '展', examples: ['전시(展示)', '발전(發展)', '진전(進展)', '펴다', '늘어놓다'], reading: '펼 전', meaning: '전시', strokes: 10 },
        { char: '專', examples: ['전문(專門)', '전공(專攻)', '전용(專用)', '오로지', '마음대로 하다'], reading: '오로지 전', meaning: '전문', strokes: 11 },
        { char: '轉', examples: ['운전(運轉)', '회전(回轉)', '반전(反轉)', '구르다', '옮기다'], reading: '구를 전', meaning: '전환', strokes: 18 },
        { char: '店', examples: ['상점(商店)', '서점(書店)', '매점(賣店)', '가게', '여관'], reading: '가게 점', meaning: '가게', strokes: 8 },
        { char: '點', examples: ['점수(點數)', '관점(觀點)', '약점(弱點)', '점', '불켜다'], reading: '점 점', meaning: '점', strokes: 17 },
        { char: '占', examples: ['점령(占領)', '독점(獨占)', '점거(占據)', '점치다', '차지하다'], reading: '점칠 점', meaning: '점거', strokes: 5 },
        { char: '接', examples: ['직접(直接)', '면접(面接)', '접촉(接觸)', '사귀다', '만나다'], reading: '사귈 접', meaning: '접촉', strokes: 11 },
        { char: '定', examples: ['결정(決定)', '안정(安定)', '예정(豫定)', '정하다', '반드시'], reading: '정할 정', meaning: '결정', strokes: 8 },
        { char: '庭', examples: ['정원(庭園)', '가정(家庭)', '법정(法庭)', '뜰', '조정'], reading: '뜰 정', meaning: '정원', strokes: 10 },
        { char: '情', examples: ['감정(感情)', '사정(事情)', '정보(情報)', '뜻', '사랑'], reading: '뜻 정', meaning: '감정', strokes: 11 },
        { char: '整', examples: ['정리(整理)', '조정(調整)', '정돈(整頓)', '가지런하다', '정제하다'], reading: '가지런할 정', meaning: '정돈', strokes: 16 },
        { char: '正', examples: ['정상(正常)', '정직(正直)', '공정(公正)', '바르다', '정월'], reading: '바를 정', meaning: '정확', strokes: 5 },
        { char: '精', examples: ['정신(精神)', '정밀(精密)', '정성(精誠)', '정미', '자세하다'], reading: '정미 정', meaning: '정밀', strokes: 14 },
        { char: '停', examples: ['정지(停止)', '정거장(停車場)', '조정(調停)', '머무르다', '정체되다'], reading: '머무를 정', meaning: '정지', strokes: 11 },
        { char: '程', examples: ['과정(過程)', '정도(程度)', '일정(日程)', '한도', '길'], reading: '한도 정', meaning: '과정', strokes: 12 },
        { char: '丁', examples: ['장정(壯丁)', '정년(丁年)', '병정(兵丁)', '고무래', '넷째 천간'], reading: '장정 정', meaning: '정', strokes: 2 },
        { char: '頂', examples: ['정상(頂上)', '절정(絶頂)', '산정(山頂)', '정수리', '꼭대기'], reading: '정수리 정', meaning: '정상', strokes: 11 },
        { char: '帝', examples: ['황제(皇帝)', '제국(帝國)', '제왕(帝王)', '임금', '하느님'], reading: '임금 제', meaning: '황제', strokes: 9 },
        { char: '弟', examples: ['형제(兄弟)', '제자(弟子)', '사제(師弟)', '아우', '동생'], reading: '아우 제', meaning: '아우', strokes: 7 },
        { char: '除', examples: ['제외(除外)', '삭제(削除)', '청소(掃除)', '덜다', '제하다'], reading: '덜 제', meaning: '제거', strokes: 10 },
        { char: '制', examples: ['제도(制度)', '제한(制限)', '통제(統制)', '짓다', '마르다'], reading: '지을 제', meaning: '제도', strokes: 8 },
        { char: '題', examples: ['제목(題目)', '문제(問題)', '주제(主題)', '제목', '이마'], reading: '제목 제', meaning: '제목', strokes: 18 },
        { char: '諸', examples: ['제군(諸君)', '제반(諸般)', '제국(諸國)', '모든', '여러'], reading: '모든 제', meaning: '제반', strokes: 16 },
        { char: '提', examples: ['제안(提案)', '제출(提出)', '제공(提供)', '끌다', '들다'], reading: '끌 제', meaning: '제안', strokes: 12 },
        { char: '祭', examples: ['축제(祝祭)', '제사(祭祀)', '문화제(文化祭)', '제사지내다', '잔치'], reading: '제사 제', meaning: '제사', strokes: 11 },
        { char: '造', examples: ['창조(創造)', '제조(製造)', '구조(構造)', '짓다', '만들다'], reading: '지을 조', meaning: '제조', strokes: 11 },
        { char: '朝', examples: ['조선(朝鮮)', '조회(朝會)', '왕조(王朝)', '아침', '조정'], reading: '아침 조', meaning: '아침', strokes: 12 },
        { char: '早', examples: ['조기(早期)', '조속(早速)', '조조(早朝)', '이르다', '새벽'], reading: '이를 조', meaning: '조기', strokes: 6 },
        { char: '條', examples: ['조건(條件)', '조약(條約)', '조항(條項)', '가지', '조목'], reading: '가지 조', meaning: '조건', strokes: 11 },
        { char: '照', examples: ['조명(照明)', '대조(對照)', '참조(參照)', '비추다', '빛'], reading: '비출 조', meaning: '조명', strokes: 13 },
        { char: '調', examples: ['조사(調査)', '조절(調節)', '조화(調和)', '고르다', '조달하다'], reading: '고를 조', meaning: '조절', strokes: 15 },
        { char: '組', examples: ['조직(組織)', '조립(組立)', '노조(勞組)', '짜다', '끈'], reading: '짤 조', meaning: '조직', strokes: 11 },
        { char: '潮', examples: ['조수(潮水)', '풍조(風潮)', '조류(潮流)', '밀물', '조수'], reading: '조수 조', meaning: '조류', strokes: 16 },
        { char: '操', examples: ['조종(操縱)', '체조(體操)', '조작(操作)', '잡다', '다루다'], reading: '잡을 조', meaning: '조작', strokes: 16 },
        { char: '鳥', examples: ['조류(鳥類)', '익조(益鳥)', '백조(白鳥)', '새', '봉황'], reading: '새 조', meaning: '새', strokes: 11 },
        { char: '存', examples: ['존재(存在)', '보존(保存)', '생존(生存)', '있다', '보전하다'], reading: '있을 존', meaning: '존재', strokes: 6 },
        { char: '終', examples: ['종료(終了)', '최종(最終)', '시종(始終)', '마치다', '끝'], reading: '마칠 종', meaning: '종료', strokes: 11 },
        { char: '鍾', examples: ['종소리', '종루(鍾樓)', '자명종(自鳴鍾)', '쇠북', '술잔'], reading: '쇠북 종', meaning: '종', strokes: 17 },
        { char: '從', examples: ['복종(服從)', '순종(順從)', '주종(主從)', '좇다', '따르다'], reading: '좇을 종', meaning: '종사', strokes: 11 },
        { char: '種', examples: ['종류(種類)', '품종(品種)', '각종(各種)', '씨', '심다'], reading: '씨 종', meaning: '종류', strokes: 14 },
        { char: '座', examples: ['좌석(座席)', '강좌(講座)', '계좌(計座)', '자리', '앉다'], reading: '자리 좌', meaning: '좌석', strokes: 10 },
        { char: '左', examples: ['좌측(左側)', '좌회전(左回轉)', '좌우(左右)', '왼쪽', '왼손'], reading: '왼 좌', meaning: '왼쪽', strokes: 5 },
        { char: '主', examples: ['주인(主人)', '주요(主要)', '주장(主張)', '임금', '주체'], reading: '주인 주', meaning: '주인', strokes: 5 },
        { char: '酒', examples: ['음주(飮酒)', '주점(酒店)', '맥주(麥酒)', '술', '잔치'], reading: '술 주', meaning: '술', strokes: 10 },
        { char: '走', examples: ['주행(走行)', '도주(逃走)', '폭주(暴走)', '달리다', '가다'], reading: '달릴 주', meaning: '주행', strokes: 7 },
        { char: '周', examples: ['주변(周邊)', '주위(周圍)', '주기(周期)', '두루', '둘레'], reading: '두루 주', meaning: '주위', strokes: 8 },
        { char: '朱', examples: ['주홍(朱紅)', '주색(朱色)', '주사(朱砂)', '붉다', '줄기'], reading: '붉을 주', meaning: '주홍', strokes: 6 },
        { char: '住', examples: ['주택(住宅)', '거주(居住)', '주민(住民)', '살다', '머무르다'], reading: '살 주', meaning: '주거', strokes: 7 },
        { char: '州', examples: ['광주(光州)', '제주(濟州)', '구주(九州)', '고을', '섬'], reading: '고을 주', meaning: '주', strokes: 6 },
        { char: '晝', examples: ['주간(晝間)', '백주(白晝)', '야주(夜晝)-no', '낮', '정오'], reading: '낮 주', meaning: '주간', strokes: 11 },
        { char: '竹', examples: ['죽림(竹林)', '죽순(竹筍)', '대나무', '피리', '죽간'], reading: '대 죽', meaning: '대나무', strokes: 6 },
        { char: '俊', examples: ['준수(俊秀)', '준걸(俊傑)', '준재(俊才)', '준걸', '뛰어나다'], reading: '준걸 준', meaning: '준수', strokes: 9 },
        { char: '增', examples: ['증가(增加)', '증축(增築)', '급증(急增)', '더하다', '늘다'], reading: '더할 증', meaning: '증가', strokes: 15 },
        { char: '蒸', examples: ['증발(蒸發)', '수증기(水蒸氣)', '증류(蒸溜)', '찌다', '김이 오르다'], reading: '찔 증', meaning: '증기', strokes: 16 },
        { char: '贈', examples: ['기증(寄贈)', '증정(贈呈)', '애증(愛贈)-no', '주다', '보내다'], reading: '줄 증', meaning: '증정', strokes: 19 },
        { char: '之', examples: ['지(之)', '지동설(地動說)-no', '갈지자(之字)', '가다', '끼치다'], reading: '갈 지', meaning: '지', strokes: 4 },
        { char: '支', examples: ['지급(支給)', '지원(支援)', '지점(支店)', '지탱하다', '가지'], reading: '지탱할 지', meaning: '지원', strokes: 4 },
        { char: '志', examples: ['의지(意志)', '지원(志願)', '동지(同志)', '뜻', '마음'], reading: '뜻 지', meaning: '의지', strokes: 7 },
        { char: '止', examples: ['중지(中止)', '정지(停止)', '금지(禁止)', '그치다', '멈추다'], reading: '그칠 지', meaning: '정지', strokes: 4 },
        { char: '地', examples: ['지구(地球)', '토지(土地)', '지도(地圖)', '땅', '곳'], reading: '땅 지', meaning: '땅', strokes: 6 },
        { char: '知', examples: ['지식(知識)', '인지(認知)', '지각(知覺)', '알다', '슬기롭다'], reading: '알 지', meaning: '지식', strokes: 8 },
        { char: '智', examples: ['지혜(智慧)', '지능(知能)', '이치(理致)', '슬기', '알다'], reading: '지혜 지', meaning: '지혜', strokes: 12 },
        { char: '紙', examples: ['신문지(新聞紙)', '편지(便紙)', '백지(白紙)', '종이', '문서'], reading: '종이 지', meaning: '종이', strokes: 10 },
        { char: '指', examples: ['지도(指導)', '지시(指示)', '지적(指摘)', '손가락', '가리키다'], reading: '가리킬 지', meaning: '지시', strokes: 10 },
        { char: '持', examples: ['지지(支持)', '지속(持續)', '소지(所持)', '가지다', '버티다'], reading: '가질 지', meaning: '유지', strokes: 10 },
        { char: '至', examples: ['동지(冬至)', '하지(夏至)', '지극(至極)', '이르다', '지극하다'], reading: '이를 지', meaning: '지극', strokes: 6 },
        { char: '誌', examples: ['잡지(雜誌)', '일지(日誌)', '회지(會誌)', '기록하다', '적다'], reading: '기록할 지', meaning: '잡지', strokes: 14 },
        { char: '職', examples: ['직장(職場)', '직업(職業)', '조직(組織)', '벼슬', '맡다'], reading: '직분 직', meaning: '직업', strokes: 18 },
        { char: '直', examples: ['직접(直接)', '솔직(率直)', '수직(垂直)', '곧다', '바르다'], reading: '곧을 직', meaning: '직접', strokes: 8 },
        { char: '織', examples: ['조직(組織)', '직물(織物)', '방직(紡織)', '짜다', '모으다'], reading: '짤 직', meaning: '조직', strokes: 18 },
        { char: '珍', examples: ['진주(珍珠)', '진미(珍味)', '진귀(珍貴)', '보배', '귀하다'], reading: '보배 진', meaning: '진귀', strokes: 10 },
        { char: '津', examples: ['나루터', '진액(津液)', '흥미진진(興味津津)', '나루', '넘치다'], reading: '나루 진', meaning: '진', strokes: 10 },
        { char: '振', examples: ['진동(振動)', '부진(不振)', '진흥(振興)', '떨치다', '진동하다'], reading: '떨칠 진', meaning: '진동', strokes: 11 },
        { char: '進', examples: ['진보(進步)', '전진(前進)', '추진(推進)', '나아가다', '오르다'], reading: '나아갈 진', meaning: '진행', strokes: 12 },
        { char: '盡', examples: ['매진(賣盡)', '진력(盡力)', '탕진(蕩盡)', '다하다', '극치'], reading: '다할 진', meaning: '진력', strokes: 14 },
        { char: '鎭', examples: ['진압(鎭壓)', '진정(鎭靜)', '진통(鎭痛)', '진압하다', '누르다'], reading: '진압할 진', meaning: '진정', strokes: 18 },
        { char: '陣', examples: ['진영(陣營)', '진지(陣地)', '적진(敵陣)', '진치다', '줄'], reading: '진칠 진', meaning: '진영', strokes: 10 },
        { char: '集', examples: ['집합(集合)', '집중(集中)', '모집(募集)', '모으다', '모이다'], reading: '모을 집', meaning: '집합', strokes: 12 },
        // ㅊ
        { char: '差', examples: ['차이(差異)', '차별(差別)', '공차(公差)', '다르다', '어긋나다'], reading: '다를 차', meaning: '차이', strokes: 10 },
        { char: '次', examples: ['차례(次例)', '순차(順次)', '목차(目次)', '다음', '버금'], reading: '버금 차', meaning: '차례', strokes: 6 },
        { char: '車', examples: ['자동차(自動車)', '열차(列車)', '하차(下車)', '수레', '바퀴'], reading: '수레 차', meaning: '차', strokes: 7 },
        { char: '借', examples: ['차용(借用)', '차관(借款)', '임차(賃借)', '빌리다', '돕다'], reading: '빌 차', meaning: '차용', strokes: 10 },
        { char: '讚', examples: ['칭찬(稱讚)', '찬성(讚成)', '찬양(讚揚)', '기리다', '돕다'], reading: '기릴 찬', meaning: '찬양', strokes: 26 },
        { char: '參', examples: ['참가(參加)', '참고(參考)', '참석(參席)', '참여하다', '뵙다'], reading: '참여할 참', meaning: '참가', strokes: 11 },
        { char: '窓', examples: ['창문(窓門)', '차창(車窓)', '동창(同窓)', '창', '구멍'], reading: '창 창', meaning: '창문', strokes: 11 },
        { char: '創', examples: ['창조(創造)', '창작(創作)', '독창(獨創)', '비롯하다', '다치다'], reading: '비롯할 창', meaning: '창조', strokes: 12 },
        { char: '昌', examples: ['번창(繁昌)', '창성(昌盛)', '창원(昌原)', '창성하다', '착하다'], reading: '창성할 창', meaning: '창성', strokes: 8 },
        { char: '倉', examples: ['창고(倉庫)', '곡창(穀倉)', '미창(米倉)', '곳집', '창고'], reading: '곳집 창', meaning: '창고', strokes: 10 },
        { char: '採', examples: ['채집(採集)', '채택(採擇)', '채굴(採掘)', '캐다', '가리다'], reading: '캘 채', meaning: '채집', strokes: 11 },
        { char: '冊', examples: ['책방(冊房)', '공책(空冊)', '서책(書冊)', '책', '권'], reading: '책 책', meaning: '책', strokes: 5 },
        { char: '責', examples: ['책임(責任)', '문책(問責)', '질책(叱責)', '꾸짖다', '권하다'], reading: '꾸짖을 책', meaning: '책임', strokes: 11 },
        { char: '策', examples: ['대책(對策)', '정책(政策)', '산책(散策)', '꾀', '채찍'], reading: '꾀 책', meaning: '정책', strokes: 12 },
        { char: '處', examples: ['처리(處理)', '처분(處分)', '상처(傷處)', '곳', '살다'], reading: '곳 처', meaning: '처리', strokes: 11 },
        { char: '妻', examples: ['처자(妻子)', '양처(良妻)', '악처(惡妻)', '아내', '시집보내다'], reading: '아내 처', meaning: '아내', strokes: 8 },
        { char: '天', examples: ['천하(天下)', '천국(天國)', '천지(天地)', '하늘', '운명'], reading: '하늘 천', meaning: '하늘', strokes: 4 },
        { char: '千', examples: ['천만(千萬)', '수천(數千)', '일천(一千)', '천', '밭둑'], reading: '일천 천', meaning: '천', strokes: 3 },
        { char: '泉', examples: ['온천(溫泉)', '원천(源泉)', '샘물', '샘', '돈'], reading: '샘 천', meaning: '온천', strokes: 9 },
        { char: '川', examples: ['하천(河川)', '인천(仁川)', '산천(山川)', '내', '굴'], reading: '내 천', meaning: '강', strokes: 3 },
        { char: '鐵', examples: ['철도(鐵道)', '강철(鋼鐵)', '지하철(地下鐵)', '쇠', '굳다'], reading: '쇠 철', meaning: '철', strokes: 21 },
        { char: '聽', examples: ['청취(聽取)', '시청(視聽)', '도청(盜聽)', '듣다', '들어주다'], reading: '들을 청', meaning: '청취', strokes: 22 },
        { char: '廳', examples: ['관청(官廳)', '시청(市廳)', '도청(道廳)', '관청', '마루'], reading: '관청 청', meaning: '관청', strokes: 25 },
        { char: '靑', examples: ['청춘(靑春)', '청년(靑年)', '청색(靑色)', '푸르다', '젊다'], reading: '푸를 청', meaning: '청색', strokes: 8 },
        { char: '清', examples: ['청결(淸潔)', '청소(淸掃)', '청렴(淸廉)', '맑다', '깨끗하다'], reading: '맑을 청', meaning: '청결', strokes: 12 },
        { char: '初', examples: ['초기(初期)', '최초(最初)', '기초(基礎)', '처음', '시작하다'], reading: '처음 초', meaning: '초기', strokes: 7 },
        { char: '招', examples: ['초대(招待)', '초청(招請)', '자초(自招)', '부르다', '손짓하다'], reading: '부를 초', meaning: '초청', strokes: 8 },
        { char: '草', examples: ['초원(草原)', '잡초(雜草)', '초안(草案)', '풀', '거칠다'], reading: '풀 초', meaning: '풀', strokes: 10 },
        { char: '秒', examples: ['초속(秒速)', '수초(數秒)', '촌음(寸陰)-rel', '초', '세다'], reading: '초 초', meaning: '초', strokes: 9 },
        { char: '總', examples: ['총리(總理)', '총계(總計)', '총회(總會)', '거느리다', '모두'], reading: '모을 총', meaning: '총합', strokes: 17 },
        { char: '銃', examples: ['총기(銃器)', '권총(拳銃)', '총탄(銃彈)', '총', '도끼구멍'], reading: '총 총', meaning: '총', strokes: 14 },
        { char: '最', examples: ['최고(最高)', '최선(最善)', '최초(最初)', '가장', '극히'], reading: '가장 최', meaning: '최고', strokes: 12 },
        { char: '推', examples: ['추천(推薦)', '추리(推理)', '추측(推測)', '밀다', '옮기다'], reading: '밀 추', meaning: '추진', strokes: 11 },
        { char: '秋', examples: ['추석(秋夕)', '가을', '추수(秋收)', '만추(晩秋)', '세월'], reading: '가을 추', meaning: '가을', strokes: 9 },
        { char: '追', examples: ['추구(追求)', '추적(追跡)', '후회(後悔)-rel', '쫓다', '따르다'], reading: '쫓을 추', meaning: '추구', strokes: 10 },
        { char: '縮', examples: ['축소(縮小)', '단축(短縮)', '위축(萎縮)', '줄이다', '오그라들다'], reading: '줄 축', meaning: '축소', strokes: 17 },
        { char: '祝', examples: ['축하(祝賀)', '축복(祝福)', '경축(慶祝)', '빌다', '축문'], reading: '빌 축', meaning: '축하', strokes: 10 },
        { char: '築', examples: ['건축(建築)', '신축(新築)', '구축(構築)', '쌓다', '다지다'], reading: '쌓을 축', meaning: '건축', strokes: 16 },
        { char: '畜', examples: ['가축(家畜)', '축산(畜産)', '목축(牧畜)', '기르다', '짐승'], reading: '기를 축', meaning: '축산', strokes: 10 },
        { char: '蓄', examples: ['저축(貯蓄)', '비축(備蓄)', '함축(含蓄)', '모으다', '쌓다'], reading: '모을 축', meaning: '저축', strokes: 16 },
        { char: '出', examples: ['출발(出發)', '출석(出席)', '수출(輸出)', '나가다', '나다'], reading: '날 출', meaning: '출발', strokes: 5 },
        { char: '春', examples: ['봄', '청춘(靑春)', '입춘(立春)', '춘기(春期)', '추분'], reading: '봄 춘', meaning: '봄', strokes: 9 },
        { char: '忠', examples: ['충성(忠誠)', '충실(忠實)', '충고(忠告)', '충성', '공평하다'], reading: '충성 충', meaning: '충성', strokes: 8 },
        { char: '蟲', examples: ['곤충(昆蟲)', '해충(害蟲)', '기생충(寄生蟲)', '벌레', '재난'], reading: '벌레 충', meaning: '벌레', strokes: 18 },
        { char: '充', examples: ['충전(充電)', '충분(充分)', '보충(補充)', '채우다', '막다'], reading: '채울 충', meaning: '충전', strokes: 6 },
        { char: '衝', examples: ['충돌(衝突)', '충격(衝擊)', '완충(緩衝)', '찌르다', '부딪치다'], reading: '찌를 충', meaning: '충돌', strokes: 15 },
        { char: '就', examples: ['취업(就業)', '취직(就職)', '성취(成就)', '나아가다', '이루다'], reading: '나아갈 취', meaning: '취업', strokes: 12 },
        { char: '趣', examples: ['취미(趣味)', '정취(情趣)', '취지(趣旨)', '뜻', '재미'], reading: '뜻 취', meaning: '취미', strokes: 15 },
        { char: '取', examples: ['취득(取得)', '섭취(攝取)', '쟁취(爭取)', '가지다', '취하다'], reading: '가질 취', meaning: '취득', strokes: 8 },
        { char: '吹', examples: ['취주(吹奏)', '고취(鼓吹)', '취타(吹打)', '불다', '비웃다'], reading: '불 취', meaning: '취주', strokes: 7 },
        { char: '層', examples: ['계층(階層)', '지층(地層)', '층계(層階)', '층', '겹'], reading: '층 층', meaning: '계층', strokes: 15 },
        { char: '測', examples: ['측정(測定)', '관측(觀測)', '예측(豫測)', '헤아리다', '재다'], reading: '헤아릴 측', meaning: '측정', strokes: 13 },
        { char: '側', examples: ['측면(側面)', '좌측(左側)', '반대편', '곁', '치우치다'], reading: '곁 측', meaning: '측면', strokes: 11 },
        { char: '親', examples: ['친구(親舊)', '친절(親切)', '부친(父親)', '친하다', '어버이'], reading: '친할 친', meaning: '친척', strokes: 16 },
        { char: '七', examples: ['칠월(七月)', '칠석(七夕)', '칠면조(七面鳥)', '일곱', '일곱 번'], reading: '일곱 칠', meaning: '일곱', strokes: 2 },
        { char: '針', examples: ['침', '방침(方針)', '지침(指針)', '바늘', '꿰매다'], reading: '바늘 침', meaning: '바늘', strokes: 10 },
        { char: '沈', examples: ['침묵(沈默)', '침몰(沈沒)', '침체(沈滯)', '잠기다', '가라앉다'], reading: '잠길 침', meaning: '침몰', strokes: 8 },
        { char: '寢', examples: ['침실(寢室)', '침대(寢臺)', '취침(就寢)', '자다', '쉬다'], reading: '잘 침', meaning: '침실', strokes: 14 },
        // ㅌ
        { char: '他', examples: ['타인(他人)', '타향(他鄕)', '기타(其他)', '다르다', '남'], reading: '다를 타', meaning: '타인', strokes: 5 },
        { char: '打', examples: ['타격(打擊)', '타자(打者)', '구타(毆打)', '치다', '때리다'], reading: '칠 타', meaning: '타격', strokes: 6 },
        { char: '脫', examples: ['탈출(脫出)', '이탈(離脫)', '탈퇴(脫退)', '벗다', '빠지다'], reading: '벗을 탈', meaning: '탈출', strokes: 11 },
        { char: '探', examples: ['탐험(探險)', '탐구(探究)', '탐정(探偵)', '찾다', '더듬다'], reading: '찾을 탐', meaning: '탐색', strokes: 11 },
        { char: '擇', examples: ['선택(選擇)', '채택(採擇)', '양자택일(兩者擇一)', '가리다', '고르다'], reading: '가릴 택', meaning: '선택', strokes: 17 },
        { char: '宅', examples: ['주택(住宅)', '자택(自宅)', '귀택(歸宅)', '집', '댁'], reading: '집 택', meaning: '주택', strokes: 6 },
        { char: '土', examples: ['토지(土地)', '국토(國土)', '황토(黃土)', '흙', '땅'], reading: '흙 토', meaning: '땅', strokes: 3 },
        { char: '討', examples: ['토론(討論)', '검토(檢討)', '토벌(討伐)', '티다', '찾다'], reading: '칠 토', meaning: '토벌', strokes: 10 },
        { char: '通', examples: ['통신(通信)', '교통(交通)', '통과(通過)', '통하다', '오가다'], reading: '통할 통', meaning: '통과', strokes: 11 },
        { char: '痛', examples: ['통증(痛症)', '고통(苦痛)', '두통(頭痛)', '아프다', '괴롭다'], reading: '아플 통', meaning: '통증', strokes: 12 },
        { char: '統', examples: ['통일(統一)', '대통령(大統領)', '전통(傳統)', '거느리다', '합치다'], reading: '거느릴 통', meaning: '통일', strokes: 12 },
        { char: '投', examples: ['투자(投資)', '투표(投票)', '투수(投手)', '던지다', '넣다'], reading: '던질 투', meaning: '투자', strokes: 7 },
        { char: '退', examples: ['퇴근(退勤)', '후퇴(後退)', '은퇴(隱退)', '물러나다', '피하다'], reading: '물러날 퇴', meaning: '퇴각', strokes: 10 },
        { char: '特', examples: ['특별(特別)', '특징(特徵)', '독특(獨特)', '특별하다', '승냥이'], reading: '특별할 특', meaning: '특수', strokes: 10 },
        // ㅍ
        { char: '破', examples: ['파괴(破壞)', '파산(破産)', '타파(打破)', '깨뜨리다', '부수다'], reading: '깨트릴 파', meaning: '파괴', strokes: 10 },
        { char: '波', examples: ['파도(波濤)', '한파(寒波)', '전파(電波)', '물결', '요동하다'], reading: '물결 파', meaning: '파도', strokes: 9 },
        { char: '判', examples: ['판단(判斷)', '비판(批判)', '재판(裁判)', '가르다', '판별하다'], reading: '판단할 판', meaning: '판단', strokes: 7 },
        { char: '板', examples: ['칠판(漆板)', '게시판(揭示板)', '간판(看板)', '널빤지', '판목'], reading: '널 판', meaning: '판', strokes: 8 },
        { char: '販', examples: ['판매(販賣)', '시판(市販)', '매판(買販)', '팔다', '장사'], reading: '팔 판', meaning: '판매', strokes: 11 },
        { char: '八', examples: ['팔월(八月)', '팔방(八方)', '팔도(八道)', '여덟', '여덟 번'], reading: '여덟 팔', meaning: '여덟', strokes: 2 },
        { char: '敗', examples: ['패배(敗北)', '실패(失敗)', '완패(完敗)', '패하다', '깨뜨리다'], reading: '패할 패', meaning: '패배', strokes: 11 },
        { char: '便', examples: ['편리(便利)', '우편(郵便)', '불편(不便)', '편하다', '소식'], reading: '편할 편', meaning: '편리', strokes: 9 },
        { char: '篇', examples: ['중편(中篇)', '단편(短篇)', '전편(全篇)', '책', '편'], reading: '책 편', meaning: '편', strokes: 15 },
        { char: '編', examples: ['편집(編輯)', '편성(編成)', '편찬(編纂)', '엮다', '짓다'], reading: '엮을 편', meaning: '편집', strokes: 15 },
        { char: '片', examples: ['파편(破片)', '단편(斷片)', '편무(片務)', '조각', '짝'], reading: '조각 편', meaning: '조각', strokes: 4 },
        { char: '平', examples: ['평화(平和)', '평등(平等)', '평균(平均)', '평평하다', '다스리다'], reading: '평평할 평', meaning: '평등', strokes: 5 },
        { char: '評', examples: ['평가(評價)', '비평(批評)', '평판(評判)', '평하다', '품평하다'], reading: '평할 평', meaning: '평가', strokes: 12 },
        { char: '閉', examples: ['폐쇄(閉鎖)', '폐회(閉會)', '밀폐(密閉)', '닫다', '막히다'], reading: '닫을 폐', meaning: '폐쇄', strokes: 11 },
        { char: '廢', examples: ['폐지(廢止)', '황폐(荒廢)', '폐기(廢棄)', '폐하다', '그만두다'], reading: '폐할 폐', meaning: '폐지', strokes: 15 },
        { char: '布', examples: ['공포(公布)', '배포(配布)', '살포(撒布)', '베', '펴다'], reading: '베 포', meaning: '포', strokes: 5 },
        { char: '浦', examples: ['포구(浦口)', '영등포(永登浦)', '제물포(濟物浦)', '개', '물가'], reading: '개 포', meaning: '포구', strokes: 10 },
        { char: '抱', examples: ['포옹(抱擁)', '포부(抱負)', '결초보은(結草報恩)-no', '안다', '품다'], reading: '안을 포', meaning: '포옹', strokes: 8 },
        { char: '捕', examples: ['체포(逮捕)', '포획(捕獲)', '포로(捕虜)', '잡다', '사로잡다'], reading: '잡을 포', meaning: '체포', strokes: 10 },
        { char: '暴', examples: ['폭력(暴力)', '폭우(暴雨)', '난폭(亂暴)', '사납다', '햇볕 쪼이다'], reading: '사나울 폭', meaning: '폭력', strokes: 15 },
        { char: '爆', examples: ['폭발(爆發)', '폭격(爆擊)', '원폭(原爆)', '터지다', '불태우다'], reading: '터질 폭', meaning: '폭발', strokes: 19 },
        { char: '表', examples: ['표현(表現)', '대표(代表)', '표면(表面)', '겉', '나타내다'], reading: '겉 표', meaning: '표현', strokes: 8 },
        { char: '標', examples: ['표준(標準)', '목표(目標)', '표지(標識)', '표하다', '나타내다'], reading: '표할 표', meaning: '표시', strokes: 15 },
        { char: '票', examples: ['투표(投票)', '차표(車票)', '우표(郵票)', '표', '쪽지'], reading: '표 표', meaning: '투표', strokes: 11 },
        { char: '品', examples: ['품질(品質)', '작품(作品)', '상품(商品)', '물건', '품수'], reading: '물건 품', meaning: '물품', strokes: 9 },
        { char: '風', examples: ['풍경(風景)', '태풍(颱風)', '풍습(風習)', '바람', '모습'], reading: '바람 풍', meaning: '바람', strokes: 9 },
        { char: '豊', examples: ['풍년(豊年)', '풍부(豊富)', '풍성(豊盛)', '풍년', '넉넉하다'], reading: '풍년 풍', meaning: '풍년', strokes: 18 },
        { char: '被', examples: ['피해(被害)', '피고(被告)', '피동(被動)', '입다', '당하다'], reading: '입을 피', meaning: '피해', strokes: 10 },
        { char: '皮', examples: ['피부(皮膚)', '표피(表皮)', '모피(毛皮)', '가죽', '겉'], reading: '가죽 피', meaning: '피부', strokes: 5 },
        { char: '避', examples: ['회피(回避)', '도피(逃避)', '피서(避暑)', '피하다', '벗어나다'], reading: '피할 피', meaning: '회피', strokes: 17 },
        { char: '疲', examples: ['피로(疲勞)', '피곤(疲困)', '피폐(疲弊)', '지치다', '고달프다'], reading: '지칠 피', meaning: '피로', strokes: 10 },
        { char: '血', examples: ['혈액(血液)', '출혈(出血)', '혈통(血統)', '피', '골육'], reading: '피 혈', meaning: '피', strokes: 6 },
        { char: '必', examples: ['필수(必須)', '필요(必要)', '필승(必勝)', '반드시', '오로지'], reading: '반드시 필', meaning: '필요', strokes: 5 },
        { char: '筆', examples: ['필기(筆記)', '연필(鉛筆)', '집필(執筆)', '붓', '쓰다'], reading: '붓 필', meaning: '붓', strokes: 12 },
        // ㅎ
        { char: '下', examples: ['지하(地下)', '하산(下山)', '하락(下落)', '아래', '내리다'], reading: '아래 하', meaning: '아래', strokes: 3 },
        { char: '夏', examples: ['하복(夏服)', '하계(夏季)', '하지(夏至)', '여름', '중국'], reading: '여름 하', meaning: '여름', strokes: 10 },
        { char: '河', examples: ['하천(河川)', '운하(運河)', '강하(江河)', '물', '내'], reading: '물 하', meaning: '강', strokes: 9 },
        { char: '荷', examples: ['하물(荷物)', '출하(出荷)', '부하(負荷)', '연', '짐'], reading: '연 하', meaning: '짐', strokes: 13 },
        { char: '閑', examples: ['한가(閑暇)', '한적(閑寂)', '등한(等閑)', '한가하다', '막다'], reading: '한가할 한', meaning: '한가', strokes: 12 },
        { char: '恨', examples: ['원한(怨恨)', '통한(痛恨)', '한탄(恨歎)', '한', '뉘우치다'], reading: '한 한', meaning: '원한', strokes: 9 },
        { char: '限', examples: ['한계(限界)', '제한(制限)', '무한(無限)', '한하다', '기한'], reading: '한할 한', meaning: '한계', strokes: 9 },
        { char: '韓', examples: ['한국(韓國)', '한복(韓服)', '한식(韓食)', '나라', '우물 난간'], reading: '나라 한', meaning: '한국', strokes: 17 },
        { char: '寒', examples: ['한파(寒波)', '오한(惡寒)', '빈한(貧寒)', '차다', '춥다'], reading: '찰 한', meaning: '추위', strokes: 12 },
        { char: '漢', examples: ['한자(漢字)', '한강(漢江)', '문한(文漢)', '한수', '사나이'], reading: '한수 한', meaning: '한', strokes: 14 },
        { char: '割', examples: ['할인(割引)', '역할(役割)', '분할(分割)', '베다', '나누다'], reading: '벨 할', meaning: '분할', strokes: 12 },
        { char: '合', examples: ['합격(合格)', '종합(綜合)', '협력(協力)-rel', '합하다', '모이다'], reading: '합할 합', meaning: '합치다', strokes: 6 },
        { char: '航', examples: ['항공(航空)', '항해(航海)', '운항(運航)', '배', '건너다'], reading: '배 항', meaning: '항해', strokes: 10 },
        { char: '港', examples: ['항구(港口)', '공항(空港)', '입항(入港)', '항구', '뱃길'], reading: '항구 항', meaning: '항구', strokes: 13 },
        { char: '抗', examples: ['항의(抗議)', '저항(抵抗)', '대항(對抗)', '막다', '겨루다'], reading: '막을 항', meaning: '항거', strokes: 7 },
        { char: '項', examples: ['항목(項目)', '조항(條項)', '사항(事項)', '목덜미', '낱낱'], reading: '목덜미 항', meaning: '항목', strokes: 12 },
        { char: '解', examples: ['해결(解決)', '이해(理解)', '해석(解釋)', '풀다', '깨닫다'], reading: '풀 해', meaning: '해결', strokes: 13 },
        { char: '海', examples: ['해양(海洋)', '해안(海岸)', '동해(東海)', '바다', '크다'], reading: '바다 해', meaning: '바다', strokes: 10 },
        { char: '核', examples: ['핵심(核心)', '핵무기(核武器)', '세포핵(細胞核)', '씨', '풀이하다'], reading: '씨 핵', meaning: '핵심', strokes: 10 },
        { char: '幸', examples: ['행복(幸福)', '다행(多幸)', '행운(幸運)', '다행', '요행'], reading: '다행 행', meaning: '행복', strokes: 8 },
        { char: '行', examples: ['행동(行動)', '은행(銀行)', '진행(進行)', '다니다', '행하다'], reading: '다닐 행', meaning: '행동', strokes: 6 },
        { char: '向', examples: ['방향(方向)', '향상(向上)', '전향(轉向)', '향하다', '나아가다'], reading: '향할 향', meaning: '방향', strokes: 6 },
        { char: '香', examples: ['향기(香氣)', '향수(香水)', '방향(芳香)', '향기롭다', '향'], reading: '향기 향', meaning: '향기', strokes: 9 },
        { char: '鄕', examples: ['고향(故鄕)', '귀향(歸鄕)', '향토(鄕土)', '시골', '마을'], reading: '시골 향', meaning: '고향', strokes: 13 },
        { char: '許', examples: ['허락(許諾)', '허가(許可)', '면허(免許)', '허용하다', '바치다'], reading: '허락할 허', meaning: '허락', strokes: 11 },
        { char: '憲', examples: ['헌법(憲法)', '제헌(制憲)', '개헌(改憲)', '법', '법전'], reading: '법 헌', meaning: '헌법', strokes: 16 },
        { char: '驗', examples: ['시험(試驗)', '경험(經驗)', '체험(體驗)', '시험하다', '증험하다'], reading: '시험할 험', meaning: '시험', strokes: 23 },
        { char: '險', examples: ['위험(危險)', '모험(冒險)', '험난(險難)', '험하다', '음흉하다'], reading: '험할 험', meaning: '위험', strokes: 16 },
        { char: '革', examples: ['혁신(革新)', '개혁(改革)', '변혁(變革)', '가죽', '고치다'], reading: '가죽 혁', meaning: '혁신', strokes: 9 },
        { char: '現', examples: ['현재(現在)', '현실(現實)', '표현(表現)', '나타나다', '지금'], reading: '나타날 현', meaning: '현재', strokes: 12 },
        { char: '玄', examples: ['현묘(玄妙)', '현관(玄關)', '현미(玄米)', '검다', '오묘하다'], reading: '검을 현', meaning: '검다', strokes: 5 },
        { char: '顯', examples: ['현저(顯著)', '현시(顯示)', '발현(發顯)', '나타나다', '드러나다'], reading: '나타날 현', meaning: '현저', strokes: 23 },
        { char: '血', examples: ['혈연(血緣)', '혈액(血液)', '출혈(出血)', '피', '피가 나오다'], reading: '피 혈', meaning: '피', strokes: 6 },
        { char: '穴', examples: ['동굴(洞窟)', '혈거(穴居)', '사혈(死穴)', '구멍', '움집'], reading: '구멍 혈', meaning: '구멍', strokes: 5 },
        { char: '協', examples: ['협력(協力)', '협동(協同)', '타협(妥協)', '화합하다', '돕다'], reading: '화합할 협', meaning: '협력', strokes: 8 },
        { char: '形', examples: ['형태(形態)', '형성(形成)', '유형(有形)', '모양', '꼴'], reading: '모양 형', meaning: '형태', strokes: 7 },
        { char: '兄', examples: ['형제(兄弟)', '친형(親兄)', '형님', '형', '맏이'], reading: '형 형', meaning: '형', strokes: 5 },
        { char: '型', examples: ['모델', '전형(典型)', '모형(模型)', '거푸집', '본보기'], reading: '거푸집 형', meaning: '유형', strokes: 9 },
        { char: '惠', examples: ['은혜(恩惠)', '수혜(受惠)', '혜택(惠澤)', '은혜', '사랑'], reading: '은혜 혜', meaning: '은혜', strokes: 12 },
        { char: '湖', examples: ['호수(湖水)', '호반(湖畔)', '담수호(淡水湖)', '호수', '넓다'], reading: '호수 호', meaning: '호수', strokes: 13 },
        { char: '號', examples: ['번호(番號)', '신호(信號)', '암호(暗號)', '이름', '부르다'], reading: '이름 호', meaning: '번호', strokes: 13 },
        { char: '好', examples: ['호감(好感)', '우호(友好)', '선호(選好)', '좋다', '즐기다'], reading: '좋을 호', meaning: '좋다', strokes: 6 },
        { char: '呼', examples: ['호흡(呼吸)', '호명(呼名)', '환호(歡呼)', '부르다', '숨쉬다'], reading: '부를 호', meaning: '호출', strokes: 8 },
        { char: '互', examples: ['상호(相互)', '호환(互換)', '호해(互解)-no', '서로', '어긋나다'], reading: '서로 호', meaning: '상호', strokes: 4 },
        { char: '護', examples: ['보호(保護)', '간호(看護)', '변호(辯護)', '돕다', '지키다'], reading: '도울 호', meaning: '보호', strokes: 21 },
        { char: '虎', examples: ['호랑이', '맹호(猛虎)', '호시탐탐(虎視耽耽)', '범', '용맹하다'], reading: '범 호', meaning: '호랑이', strokes: 8 },
        { char: '或', examples: ['혹시(或是)', '간혹(間或)', '혹자(或者)', '혹', '의심하다'], reading: '혹 혹', meaning: '혹시', strokes: 8 },
        { char: '婚', examples: ['결혼(結婚)', '이혼(離婚)', '혼인(婚姻)', '혼인하다', '장가들다'], reading: '혼인할 혼', meaning: '결혼', strokes: 11 },
        { char: '混', examples: ['혼란(混亂)', '혼동(混同)', '혼합(混合)', '섞이다', '흐리다'], reading: '섞을 혼', meaning: '혼합', strokes: 11 },
        { char: '紅', examples: ['홍색(紅色)', '홍조(紅潮)', '주홍(朱紅)', '붉다', '연지'], reading: '붉을 홍', meaning: '홍색', strokes: 9 },
        { char: '火', examples: ['화재(火災)', '소화(消火)', '화산(火山)', '불', '타다'], reading: '불 화', meaning: '불', strokes: 4 },
        { char: '花', examples: ['화초(花草)', '국화(國花)', '개화(開花)', '꽃', '아름답다'], reading: '꽃 화', meaning: '꽃', strokes: 10 },
        { char: '和', examples: ['화해(和解)', '평화(平和)', '조화(調和)', '화하다', '온화하다'], reading: '화할 화', meaning: '화합', strokes: 8 },
        { char: '話', examples: ['대화(對話)', '전화(電話)', '화법(話法)', '말', '이야기하다'], reading: '말씀 화', meaning: '대화', strokes: 13 },
        { char: '畵', examples: ['화가(畵家)', '영화(映畵)', '만화(漫畫)', '그림', '긋다'], reading: '그림 화', meaning: '그림', strokes: 12 },
        { char: '華', examples: ['화려(華麗)', '번화(繁華)', '중화(中華)', '빛나다', '꽃'], reading: '빛날 화', meaning: '화려', strokes: 12 },
        { char: '化', examples: ['변화(變化)', '문화(文化)', '소화(消化)', '되다', '가르치다'], reading: '될 화', meaning: '변화', strokes: 4 },
        { char: '貨', examples: ['화물(貨物)', '재화(財貨)', '통화(通貨)', '재물', '돈'], reading: '재물 화', meaning: '화물', strokes: 11 },
        { char: '確', examples: ['확실(確實)', '정확(正確)', '확신(確信)', '굳다', '단단하다'], reading: '굳을 확', meaning: '확실', strokes: 15 },
        { char: '擴', examples: ['확대(擴大)', '확장(擴張)', '확산(擴散)', '넓히다', '퍼지다'], reading: '넓힐 확', meaning: '확대', strokes: 19 },
        { char: '歡', examples: ['환영(歡迎)', '환호(歡呼)', '환담(歡談)', '기쁘다', '즐거워하다'], reading: '기쁠 환', meaning: '환영', strokes: 22 },
        { char: '還', examples: ['반환(返還)', '귀환(歸還)', '송환(送還)', '돌아오다', '돌려보내다'], reading: '돌아올 환', meaning: '반환', strokes: 17 },
        { char: '患', examples: ['환자(患者)', '질환(疾患)', '우환(憂患)', '근심', '병'], reading: '근심 환', meaning: '환자', strokes: 11 },
        { char: '換', examples: ['교환(交換)', '전환(轉換)', '환전(換錢)', '바꾸다', '갈다'], reading: '바꿀 환', meaning: '교환', strokes: 12 },
        { char: '環', examples: ['환경(環境)', '순환(循環)', '화환(花環)', '고리', '둘러싸다'], reading: '고리 환', meaning: '환경', strokes: 17 },
        { char: '皇', examples: ['황제(皇帝)', '황실(皇室)', '교황(教皇)', '임금', '크다'], reading: '임금 황', meaning: '황제', strokes: 9 },
        { char: '黃', examples: ['황금(黃金)', '황색(黃色)', '황토(黃土)', '누렇다', '황제'], reading: '누를 황', meaning: '황색', strokes: 12 },
        { char: '況', examples: ['상황(狀況)', '정황(情況)', '현황(現況)', '형편', '하물며'], reading: '형편 황', meaning: '상황', strokes: 8 },
        { char: '會', examples: ['회의(會議)', '사회(社會)', '기회(機會)', '모이다', '만나다'], reading: '모일 회', meaning: '회의', strokes: 13 },
        { char: '回', examples: ['회전(回轉)', '회복(回復)', '이번(吏番)-no', '돌다', '횟수'], reading: '돌 회', meaning: '회전', strokes: 6 },
        { char: '灰', examples: ['석회(石灰)', '회색(灰色)', '화산재(火山灰)', '재', '석회'], reading: '재 회', meaning: '회색', strokes: 6 },
        { char: '繪', examples: ['회화(繪畵)', '삽화(插繪)', '그림', '그리다', '수놓다'], reading: '그릴 회', meaning: '회화', strokes: 19 },
        { char: '懷', examples: ['회상(回想)', '회의(懷疑)', '포회(抱懷)', '품다', '생각하다'], reading: '품을 회', meaning: '회상', strokes: 19 },
        { char: '橫', examples: ['횡단(橫斷)', '횡포(橫暴)', '종횡(縱橫)', '가로', '제멋대로'], reading: '가로 횡', meaning: '횡단', strokes: 16 },
        { char: '效', examples: ['효과(效果)', '유효(有效)', '효능(效能)', '본받다', '보람'], reading: '본받을 효', meaning: '효과', strokes: 10 },
        { char: '孝', examples: ['효도(孝道)', '효자(孝子)', '불효(不孝)', '효도', '섬기다'], reading: '효도 효', meaning: '효도', strokes: 7 },
        { char: '厚', examples: ['후대(厚待)', '중후(重厚)', '후하다', '두텁다', '짙다'], reading: '두터울 후', meaning: '후덕', strokes: 9 },
        { char: '後', examples: ['후배(後輩)', '오후(午後)', '후회(後悔)', '뒤', '늦다'], reading: '뒤 후', meaning: '뒤', strokes: 9 },
        { char: '候', examples: ['기후(氣候)', '후보(候補)', '징후(徵候)', '기후', '살피다'], reading: '기후 후', meaning: '후보', strokes: 10 },
        { char: '訓', examples: ['훈련(訓練)', '교훈(敎訓)', '훈육(訓育)', '가르치다', '타이르다'], reading: '가르칠 훈', meaning: '훈련', strokes: 10 },
        { char: '勳', examples: ['훈장(勳章)', '공훈(功勳)', '훈공(勳功)', '공', '공로'], reading: '공 훈', meaning: '훈장', strokes: 16 },
        { char: '揮', examples: ['지휘(指揮)', '발휘(發揮)', '휘발(揮發)', '휘두르다', '뿌리다'], reading: '휘두를 휘', meaning: '휘두르다', strokes: 12 },
        { char: '休', examples: ['휴식(休息)', '휴가(休暇)', '휴일(休日)', '쉬다', '그치다'], reading: '쉴 휴', meaning: '휴식', strokes: 6 },
        { char: '携', examples: ['휴대(携帶)', '제휴(提携)', '휴대폰', '이끌다', '들다'], reading: '이끌 휴', meaning: '휴대', strokes: 13 },
        { char: '黑', examples: ['흑백(黑白)', '암흑(暗黑)', '흑인(黑人)', '검다', '나쁘다'], reading: '검을 흑', meaning: '검다', strokes: 12 },
        { char: '欣', examples: ['흔쾌(欣快)', '흔희(欣喜)', '기뻐하다', '즐거워하다', '흔들다'], reading: '기쁠 흔', meaning: '흔쾌', strokes: 8 },
        { char: '興', examples: ['흥미(興味)', '흥분(興奮)', '부흥(復興)', '일어나다', '흥하다'], reading: '일어날 흥', meaning: '흥미', strokes: 16 },
        { char: '希', examples: ['희망(希望)', '희구(希求)', '희소(希少)', '바라다', '드물다'], reading: '바랄 희', meaning: '희망', strokes: 7 },
        { char: '喜', examples: ['희극(喜劇)', '환희(歡喜)', '희소식(喜消息)', '기쁘다', '즐겁다'], reading: '기쁠 희', meaning: '기쁨', strokes: 12 },
        // 2급 추가

        // 1급 배정한자
        // ㄱ
        { char: '賈', examples: ['상고(商賈)', '거상(巨賈)', '여가(餘賈)', '장사', '값'], reading: '상고 가', meaning: '상인', strokes: 13 },
        { char: '柯', examples: ['남가일몽(南柯一夢)', '가부(柯斧)', '자루', '가지', '나뭇가지'], reading: '자루 가', meaning: '도끼자루', strokes: 9 },
        { char: '伽', examples: ['가야(伽倻)', '가람(伽藍)', '절', '더하다', '부처'], reading: '더할 가', meaning: '더하다', strokes: 7 },
        { char: '珏', examples: ['쌍옥', '이름자', '구슬', '옥', '패물'], reading: '구슬 각', meaning: '두 구슬', strokes: 9 },
        { char: '葛', examples: ['갈등(葛藤)', '갈근(葛根)', '제갈(諸葛)', '칡', '덩굴'], reading: '칡 갈', meaning: '칡', strokes: 15 },
        { char: '憾', examples: ['유감(遺憾)', '통한(痛憾)', '감정(憾情)', '섭섭하다', '한탄하다'], reading: '한 감', meaning: '한스럽다', strokes: 16 },
        { char: '岬', examples: ['장산곶(長山岬)', '호미곶(虎尾岬)', '곶', '산허리', '물가'], reading: '곶 갑', meaning: '곶', strokes: 8 },
        { char: '姜', examples: ['강씨(姜氏)', '성', '강태공(姜太公)', '생강(生姜)', '굳세다'], reading: '성 강', meaning: '강씨', strokes: 9 },
        { char: '崗', examples: ['산강(山崗)', '난강(亂崗)', '산등성이', '언덕', '망보다'], reading: '산마루 강', meaning: '산마루', strokes: 11 },
        { char: '疆', examples: ['강역(疆域)', '만수무강(萬壽無疆)', '국경', '지경', '끝'], reading: '경계 강', meaning: '경계', strokes: 19 },
        { char: '坑', examples: ['갱도(坑道)', '분서갱유(焚書坑儒)', '탄갱(炭坑)', '구덩이', '묻다'], reading: '구덩이 갱', meaning: '구덩이', strokes: 7 },
        { char: '桀', examples: ['하걸(夏桀)', '걸물(桀物)', '걸작(桀作)-no', '홰', '사납다'], reading: '걸출할 걸', meaning: '뛰어나다', strokes: 10 },
        { char: '憩', examples: ['휴게(休憩)', '사게(賜憩)', '쉬다', '휴식하다', '살다'], reading: '쉴 게', meaning: '쉬다', strokes: 16 },
        { char: '揭', examples: ['게양(揭揚)', '게시(揭示)', '게재(揭載)', '높이 들다', '걸다'], reading: '들 게', meaning: '들다', strokes: 12 },
        { char: '甄', examples: ['견훤(甄萱)', '도자기', '살피다', '질그릇', '구별하다'], reading: '살필 견', meaning: '살피다', strokes: 13 },
        { char: '璟', examples: ['옥빛', '이름자', '빛나다', '광채', '옥'], reading: '빛날 경', meaning: '빛나다', strokes: 16 },
        { char: '炅', examples: ['빛', '열', '나타나다', '이름자', '빛나다'], reading: '빛 경', meaning: '빛', strokes: 8 },
        { char: '雇', examples: ['고용(雇用)', '해고(解雇)', '고용주(雇用主)', '품 팔다', '세내다'], reading: '품팔 고', meaning: '고용', strokes: 12 },
        { char: '菓', examples: ['과자(菓子)', '제과(製菓)', '다과(茶菓)', '과일', '실과'], reading: '과실 과', meaning: '과일', strokes: 14 },
        { char: '瓜', examples: ['수박(西瓜)', '오이', '과전불납리(瓜田不納履)', '오이밭', '달리다'], reading: '오이 과', meaning: '오이', strokes: 5 },
        { char: '槐', examples: ['괴목(槐木)', '회화나무', '괴안(槐安)', '홰나무', '느티나무'], reading: '홰나무 괴', meaning: '회화나무', strokes: 14 },
        { char: '膠', examples: ['교착(膠着)', '아교(阿膠)', '비교(鼻膠)', '붙다', '어긋나다'], reading: '아교 교', meaning: '아교', strokes: 15 },
        { char: '僑', examples: ['교포(僑胞)', '화교(華僑)', '교민(僑民)', '임시로 살다', '높다'], reading: '나그네 교', meaning: '교포', strokes: 14 },
        { char: '鷗', examples: ['백구(白鷗)', '갈매기', '해구(海鷗)', '물새', '노래하다'], reading: '갈매기 구', meaning: '갈매기', strokes: 22 },
        { char: '邱', examples: ['대구(大邱)', '언덕', '마을', '땅 이름', '성'], reading: '언덕 구', meaning: '언덕', strokes: 8 },
        { char: '玖', examples: ['옥돌', '아홉(갖은자)', '검은 옥', '이름자', '아홉'], reading: '아홉 구', meaning: '아홉', strokes: 7 },
        { char: '鞠', examples: ['축국(蹴鞠)', '국궁(鞠躬)', '기르다', '공', '굽히다'], reading: '공 국', meaning: '공', strokes: 18 },
        { char: '窟', examples: ['동굴(洞窟)', '소굴(巢窟)', '빈민굴(貧民窟)', '움집', '구멍'], reading: '굴 굴', meaning: '굴', strokes: 13 },
        { char: '掘', examples: ['발굴(發掘)', '채굴(採掘)', '도굴(盜掘)', '파다', '뚫다'], reading: '팔 굴', meaning: '파다', strokes: 11 },
        { char: '圈', examples: ['수도권(首都圈)', '권역(圈域)', '대기권(大氣圈)', '우리', '돌다'], reading: '우리 권', meaning: '권역', strokes: 11 },
        { char: '闕', examples: ['궁궐(宮闕)', '궐석(闕席)', '대궐', '빠지다', '이지러지다'], reading: '대궐 궐', meaning: '궐', strokes: 18 },
        { char: '奎', examples: ['규장각(奎章閣)', '별', '문장', '별자리', '이름자'], reading: '별 규', meaning: '별자리', strokes: 9 },
        { char: '逵', examples: ['네거리', '길', '도로', '이름자', '통하다'], reading: '네거리 규', meaning: '네거리', strokes: 11 },
        { char: '圭', examples: ['서옥', '홀', '규각(圭角)', '모서리', '반듯하다'], reading: '홀 규', meaning: '홀', strokes: 6 },
        { char: '龜', examples: ['귀감(龜鑑)', '귀갑(龜甲)', '거북', '트다', '갈라지다'], reading: '거북 구', meaning: '거북', strokes: 16 },
        { char: '虯', examples: ['이무기', '용', '구룡(虯龍)', '서리다', '꿈틀거리다'], reading: '이무기 구', meaning: '이무기', strokes: 10 },
        { char: '嘉', examples: ['가례(嘉禮)', '가상(嘉尙)', '가배(嘉俳)', '아름답다', '기쁘다'], reading: '아름다울 가', meaning: '아름답다', strokes: 14 },
        { char: '暻', examples: ['밝다', '이름자', '환하다', '햇살', '비치다'], reading: '밝을 경', meaning: '밝다', strokes: 13 },
        { char: '耿', examples: ['경경(耿耿)', '빛나다', '굳다', '이름자', '근심하다'], reading: '밝을 경', meaning: '밝다', strokes: 10 },
        // ㄴ
        { char: '濃', examples: ['농도(濃度)', '농후(濃厚)', '농담(濃淡)', '짙다', '두텁다'], reading: '짙을 농', meaning: '짙다', strokes: 17 },
        { char: '尼', examples: ['비구니(比丘尼)', '여승', '말리다', '가깝다', '화평하다'], reading: '비구니 니', meaning: '비구니', strokes: 5 },
        { char: '溺', examples: ['익사(溺死)', '탐닉(耽溺)', '매몰(埋沒)', '빠지다', '오줌'], reading: '빠질 닉', meaning: '빠지다', strokes: 13 },
        // ㄷ
        { char: '丹', examples: ['단풍(丹楓)', '단청(丹靑)', '일편단심(一片丹心)', '붉다', '정성'], reading: '붉을 단', meaning: '붉다', strokes: 4 },
        { char: '悼', examples: ['애도(哀悼)', '추도(追悼)', '슬퍼하다', '가엾다', '떨다'], reading: '슬퍼할 도', meaning: '애도', strokes: 11 },
        { char: '桃', examples: ['도화(桃花)', '복숭아', '무릉도원(武陵桃源)', '복숭아나무', '도색'], reading: '복숭아 도', meaning: '복숭아', strokes: 10 },
        { char: '燾', examples: ['덮다', '비치다', '이름자', '나타나다', '비추다'], reading: '덮을 도', meaning: '덮다', strokes: 17 },
        { char: '棟', examples: ['동량(棟梁)', '병동(病棟)', '용마루', '지붕', '집'], reading: '마루 동', meaning: '마루', strokes: 12 },
        { char: '董', examples: ['골동품(骨董品)', '이사회(理事會)-rel', '감독하다', '바로잡다', '동네'], reading: '살필 동', meaning: '살피다', strokes: 15 },
        { char: '斗', examples: ['태산북두(泰山北斗)', '두주불사(斗酒不辭)', '말(용량)', '별 이름', '구기'], reading: '말 두', meaning: '말', strokes: 4 },
        { char: '杜', examples: ['두문불출(杜門不出)', '두절(杜絶)', '두견화(杜鵑花)', '막다', '팥배나무'], reading: '막을 두', meaning: '막다', strokes: 7 },
        { char: '竇', examples: ['부비동(副鼻竇)', '구멍', '움', '개구멍', '무너지다'], reading: '구멍 두', meaning: '구멍', strokes: 26 },
        // ㄹ
        { char: '賴', examples: ['신뢰(信賴)', '의뢰(依賴)', '무뢰한(無賴漢)', '힘입다', '버티다'], reading: '의뢰할 뢰', meaning: '의뢰', strokes: 16 },
        { char: '洛', examples: ['낙동강(洛東江)', '낙양(洛陽)', '물 이름', '서울', '강 이름'], reading: '낙수 락', meaning: '낙수', strokes: 9 },
        { char: '駱', examples: ['낙타(駱駝)', '낙타과', '낙타털', '오랑캐', '말'], reading: '낙타 락', meaning: '낙타', strokes: 16 },
        { char: '樂', examples: ['오락(娛樂)', '음악(音樂)', '낙원(樂園)', '즐겁다', '풍류'], reading: '즐거울 락', meaning: '즐겁다', strokes: 15 },
        { char: '瀾', examples: ['파란(波瀾)', '파란만장(波瀾萬丈)', '물결', '큰 물결', '뜨는 물'], reading: '물결 란', meaning: '물결', strokes: 20 },
        { char: '濫', examples: ['남용(濫用)', '범람(氾濫)', '남발(濫發)', '넘치다', '퍼지다'], reading: '넘칠 람', meaning: '남용', strokes: 18 },
        { char: '藍', examples: ['청출어람(靑出於藍)', '남색(藍色)', '쪽', '람보(藍寶)', '절'], reading: '쪽 람', meaning: '쪽', strokes: 18 },
        { char: '朗', examples: ['명랑(明朗)', '낭독(朗讀)', '낭송(朗誦)', '밝다', '맑다'], reading: '밝을 랑', meaning: '밝다', strokes: 10 },
        { char: '廊', examples: ['회랑(回廊)', '화랑(畵廊)', '행랑(行廊)', '복도', '사랑채'], reading: '행랑 랑', meaning: '복도', strokes: 12 },
        { char: '鋁', examples: ['알루미늄', '창', '줄', '다듬다', '갈다'], reading: '알루미늄 려', meaning: '알루미늄', strokes: 13 },
        { char: '呂', examples: ['율려(律呂)', '성', '법칙', '음률', '등뼈'], reading: '성 려', meaning: '여씨', strokes: 7 },
        { char: '旅', examples: ['여행(旅行)', '여권(旅券)', '여관(旅館)', '나그네', '군사'], reading: '나그네 려', meaning: '여행', strokes: 10 },
        { char: '憐', examples: ['가련(可憐)', '동련(同憐)', '연민(憐憫)', '불쌍히 여기다', '사랑하다'], reading: '불쌍히여길 련', meaning: '가엾다', strokes: 16 },
        { char: '蓮', examples: ['연꽃', '목련(木蓮)', '연화(蓮花)', '연밥', '연잎'], reading: '연꽃 련', meaning: '연꽃', strokes: 17 },
        { char: '廉', examples: ['청렴(淸廉)', '염치(廉恥)', '저렴(低廉)', '싸다', '검소하다'], reading: '청렴할 염', meaning: '청렴', strokes: 13 },
        { char: '獵', examples: ['수렵(狩獵)', '엽총(獵銃)', '포엽(捕獵)', '사냥하다', '찾다'], reading: '사냥할 렵', meaning: '사냥', strokes: 18 },
        { char: '嶺', examples: ['대관령(大關嶺)', '삼남의 영(嶺)', '고개', '산봉우리', '재'], reading: '고개 령', meaning: '고개', strokes: 17 },
        { char: '靈', examples: ['영혼(靈魂)', '신령(神靈)', '영감(靈感)', '신령하다', '기이하다'], reading: '신령 령', meaning: '신령', strokes: 24 },
        { char: '玲', examples: ['영롱(玲瓏)', '옥 소리', '깨끗하다', '밝다', '이름자'], reading: '옥소리 령', meaning: '옥소리', strokes: 10 },
        { char: '禮', examples: ['예절(禮節)', '예의(禮儀)', '결례(缺禮)', '예도', '인사'], reading: '예도 례', meaning: '예의', strokes: 18 },
        { char: '鹿', examples: ['녹용(鹿茸)', '사슴', '순록(馴鹿)', '녹피(鹿皮)', '제위(帝位)'], reading: '사슴 록', meaning: '사슴', strokes: 11 },
        { char: '綠', examples: ['녹색(綠色)', '초록(草綠)', '녹지(綠地)', '푸르다', '검붉다'], reading: '푸를 록', meaning: '녹색', strokes: 14 },
        { char: '淪', examples: ['윤리(倫理)-no', '침륜(沈淪)', '빠지다', '물놀이', '잠기다'], reading: '빠질 륜', meaning: '빠지다', strokes: 11 },
        { char: '栗', examples: ['밤', '율곡(栗谷)', '전율(戰慄)', '떨다', '단단하다'], reading: '밤 률', meaning: '밤', strokes: 10 },
        { char: '凜', examples: ['늠름(凜凜)', '의기양양', '춥다', '차다', '두려워하다'], reading: '추울 름', meaning: '엄숙', strokes: 15 },
        { char: '梁', examples: ['교량(橋梁)', '동량(棟梁)', '들보', '다리', '돌'], reading: '들보 량', meaning: '들보', strokes: 11 },
        { char: '亮', examples: ['제갈량(諸葛亮)', '동량(東亮)-no', '밝다', '믿다', '돕다'], reading: '밝을 량', meaning: '밝다', strokes: 9 },
        { char: '陵', examples: ['왕릉(王陵)', '구릉(丘陵)', '능침(陵寢)', '언덕', '무덤'], reading: '언덕 릉', meaning: '언덕', strokes: 11 },
        // ㅁ
        { char: '莫', examples: ['색막(塞莫)', '사막(沙漠)', '막대(莫大)', '없다', '말다'], reading: '없을 막', meaning: '없다', strokes: 13 },
        { char: '萬', examples: ['만세(萬歲)', '만물(萬物)', '일만(一萬)', '많다', '모든'], reading: '일만 만', meaning: '만', strokes: 15 },
        { char: '蔓', examples: ['만연(蔓延)', '덩굴', '순무', '뻗다', '퍼지다'], reading: '넝쿨 만', meaning: '넝쿨', strokes: 17 },
        { char: '邁', examples: ['매진(邁進)', '호매(豪邁)', '가다', '지나다', '늙다'], reading: '갈 매', meaning: '가다', strokes: 20 },
        { char: '梅', examples: ['매실(梅實)', '매화(梅花)', '매우(梅雨)', '장마', '그을음'], reading: '매화 매', meaning: '매화', strokes: 11 },
        { char: '冒', examples: ['모험(冒險)', '감모(感冒)', '무릅쓰다', '가리다', '거짓으로 꾸미다'], reading: '무릅쓸 모', meaning: '무릅쓰다', strokes: 9 },
        { char: '牧', examples: ['목장(牧場)', '목사(牧師)', '목축(牧畜)', '치다', '기르다'], reading: '칠 목', meaning: '목축', strokes: 8 },
        { char: '睦', examples: ['화목(和睦)', '친목(親睦)', '목린(睦隣)', '화하다', '친하다'], reading: '화목할 목', meaning: '화목', strokes: 13 },
        { char: '穆', examples: ['화목', '온화하다', '다소곳하다', '공경하다', '삼가다'], reading: '화할 목', meaning: '화목', strokes: 16 },
        { char: '茂', examples: ['무성(茂盛)', '무임(茂林)-no', '우거지다', '힘쓰다', '아름답다'], reading: '무성할 무', meaning: '무성', strokes: 11 },
        { char: '戊', examples: ['무술(戊戌)', '무신(戊申)', '천간', '창', '다섯째 천간'], reading: '천간 무', meaning: '천간', strokes: 5 },
        { char: '霧', examples: ['안개', '오리무중(五里霧中)', '박무(薄霧)', '흐릿하다', '자욱하다'], reading: '안개 무', meaning: '안개', strokes: 19 },
        { char: '眉', examples: ['눈썹', '미간(眉間)', '백미(白眉)', '눈가', '노인'], reading: '눈썹 미', meaning: '눈썹', strokes: 9 },
        { char: '珉', examples: ['강민', '수민', '옥돌', '아름다운 돌', '이름자'], reading: '옥돌 민', meaning: '옥돌', strokes: 9 },
        { char: '旻', examples: ['민수', '가을 하늘', '하늘', '이름자', '민'], reading: '하늘 민', meaning: '하늘', strokes: 8 },
        { char: '玟', examples: ['옥무늬', '이름자', '옥', ' 아름답다', '민'], reading: '玉무늬 민', meaning: '옥무늬', strokes: 8 },
        { char: '閔', examples: ['민망(閔惘)', '민씨(閔氏)', '위문(慰閔)', '민며느리', '성'], reading: '민망할 민', meaning: '민망', strokes: 12 },
        // ㅂ
        { char: '博', examples: ['박사(博士)', '박물관(博物館)', '도박(賭博)', '해박(該博)', '넓다'], reading: '넓을 박', meaning: '넓다', strokes: 12 },
        { char: '朴', examples: ['박씨(朴氏)', '순박(淳朴)', '소박(素朴)', '질박(質朴)', '후박나무'], reading: '성 박', meaning: '박씨', strokes: 6 },
        { char: '璞', examples: ['박옥(璞玉)', '혼박(渾璞)', '옥돌', '순수하다', '다듬지 않다'], reading: '통옥 박', meaning: '다듬지않은옥', strokes: 16 },
        { char: '泊', examples: ['숙박(宿泊)', '정박(碇泊)', '민박(民泊)', '배를 대다', '묵다'], reading: '머무를 박', meaning: '머무르다', strokes: 8 },
        { char: '薄', examples: ['박빙(薄氷)', '경박(輕薄)', '희박(稀薄)', '박약(薄弱)', '엷다'], reading: '엷을 박', meaning: '엷다', strokes: 17 },
        { char: '磻', examples: ['반계(磻溪)', '강 이름', '돌 이름', '물가', '반'], reading: '반석 반', meaning: '반석', strokes: 15 },
        { char: '斑', examples: ['반점(斑點)', '몽고반(蒙古斑)', '반문(斑紋)', '얼룩', '아롱지다'], reading: '얼룩 반', meaning: '얼룩', strokes: 12 },
        { char: '帆', examples: ['일만(一帆)-no', '범선(帆船)', '출범(出帆)', '돛', '돛단배'], reading: '돛 범', meaning: '돛', strokes: 6 },
        { char: '凡', examples: ['비범(非凡)', '평범(平凡)', '범인(凡人)', '범례(凡例)', '모두'], reading: '모든 범', meaning: '모든', strokes: 3 },
        { char: '汎', examples: ['범용(汎用)', '범람(汎濫)', '범론(汎論)', '넓다', '뜨다'], reading: '넓을 범', meaning: '넓다', strokes: 6 },
        { char: '炳', examples: ['병(炳)', '문병(文炳)', '빛나다', '밝다', '잡다'], reading: '빛날 병', meaning: '빛나다', strokes: 9 },
        { char: '甫', examples: ['두보(杜甫)', '황보(皇甫)', '보(甫)', '크다', '남편'], reading: '아비 보', meaning: '아비', strokes: 7 },
        { char: '輔', examples: ['보좌(輔佐)', '보도(輔導)', '보필(輔弼)', '돕다', '덧방나무'], reading: '도울 보', meaning: '돕다', strokes: 14 },
        { char: '鵬', examples: ['붕조(鵬鳥)', '대붕(大鵬)', '붕정만리(鵬程萬里)', '붕새', '크다'], reading: '붕새 붕', meaning: '붕새', strokes: 19 },
        { char: '丕', examples: ['비(丕)', '비업(丕業)', '크다', '으뜸', '받들다'], reading: '클 비', meaning: '크다', strokes: 5 },
        { char: '彬', examples: ['빈빈(彬彬)', '문질빈빈(文質彬彬)', '빛나다', '아름답다', '성하다'], reading: '빛날 빈', meaning: '빛나다', strokes: 11 },
        { char: '斌', examples: ['이름자', '빛나다', '문채', '아름답다', '빈'], reading: '빛날 빈', meaning: '빛나다', strokes: 12 },
        // ㅅ
        { char: '璽', examples: ['옥새(玉璽)', '국새(國璽)', '인장', '도장', '찍다'], reading: '도장 새', meaning: '도장', strokes: 19 },
        { char: '瑞', examples: ['상서(詳瑞)', '서광(瑞光)', '서설(瑞雪)', '길조', '홀'], reading: '상서 서', meaning: '상서', strokes: 14 },
        { char: '舒', examples: ['서(舒)', '서정(舒情)', '펴다', '늘어지다', '천천히'], reading: '펼 서', meaning: '펴다', strokes: 12 },
        { char: '敍', examples: ['서술(敍述)', '서사(敍事)', '자서전(自敍傳)', '펴다', '차례'], reading: '펼 서', meaning: '펴다', strokes: 11 },
        { char: '碩', examples: ['석사(碩士)', '석학(碩學)', '거석(巨碩)', '크다', '충실하다'], reading: '클 석', meaning: '크다', strokes: 14 },
        { char: '宣', examples: ['선언(宣言)', '선전(宣傳)', '선포(宣布)', '베풀다', '펴다'], reading: '베풀 선', meaning: '베풀다', strokes: 9 },
        { char: '璇', examples: ['선궁(璇宮)', '옥', '구슬', '아름답다', '돌다'], reading: '아름다운옥 선', meaning: '아름다운옥', strokes: 15 },
        { char: '銑', examples: ['선철(銑鐵)', '무쇠', '쇳덩이', '광택', '조그만 방울'], reading: '쇠 선', meaning: '쇠', strokes: 14 },
        { char: '奭', examples: ['석(奭)', '쌍명(雙奭)', '크다', '성하다', '붉다'], reading: '붉을 석', meaning: '붉다', strokes: 15 },
        { char: '晟', examples: ['성(晟)', '밝다', '성하다', '이름자', '성'], reading: '성할 성', meaning: '성하다', strokes: 11 },
        { char: '淑', examples: ['숙녀(淑女)', '정숙(貞淑)', '요조숙녀(窈窕淑女)', '맑다', '착하다'], reading: '맑을 숙', meaning: '맑다', strokes: 11 },
        { char: '淳', examples: ['순박(淳朴)', '순후(淳厚)', '순풍(淳風)', '순박하다', '진실하다'], reading: '순박할 순', meaning: '순박', strokes: 12 },
        { char: '舜', examples: ['순임금(舜帝)', '무궁화(舜花)', '순간', '임금', '나팔꽃'], reading: '임금 순', meaning: '순임금', strokes: 12 },
        { char: '崇', examples: ['숭배(崇拜)', '숭상(崇尙)', '존숭(尊崇)', '높다', '차다'], reading: '높을 숭', meaning: '높다', strokes: 11 },
        { char: '承', examples: ['계승(繼承)', '승인(承認)', '승낙(承諾)', '잇다', '받들다'], reading: '이을 승', meaning: '이다', strokes: 8 },
        { char: '昇', examples: ['승격(昇格)', '승진(昇進)', '승화(昇華)', '오르다', '해 돋다'], reading: '오를 승', meaning: '오르다', strokes: 8 },
        { char: '時', examples: ['시간(時間)', '시대(時代)', '시계(時計)', '때', '철'], reading: '때 시', meaning: '때', strokes: 10 },
        { char: '埴', examples: ['식토(埴土)', '점토', '찰흙', '지팡이', '심다'], reading: '찰흙 식', meaning: '찰흙', strokes: 11 },
        { char: '植', examples: ['식물(植物)', '식목(植木)', '이식(移植)', '심다', '세우다'], reading: '심을 식', meaning: '심다', strokes: 12 },
        { char: '莘', examples: ['신(莘)', '세신(細莘)', '족두리풀', '성하다', '많다'], reading: '성할 신', meaning: '성하다', strokes: 13 },
        { char: '宰', examples: ['재상(宰相)', '주재(主宰)', '재소(宰所)', '다스리다', '가재'], reading: '재상 재', meaning: '재상', strokes: 10 },
        // ㅇ
        { char: '娥', examples: ['항아(姮娥)', '선아(仙娥)', '예쁘다', '미녀', '계집아기'], reading: '예쁠 아', meaning: '예쁘다', strokes: 10 },
        { char: '雅', examples: ['우아(優雅)', '아악(雅樂)', '단아(端雅)', '아름답다', '바르다'], reading: '아름다울 아', meaning: '아름답다', strokes: 13 },
        { char: '岳', examples: ['산악(山岳)', '관악산(冠岳山)', '설악산(雪岳山)', '산', '큰 산'], reading: '산 악', meaning: '산', strokes: 8 },
        { char: '昻', examples: ['앙등(昻騰)', '앙양(昻揚)', '헌앙(軒昻)', '오르다', '높다'], reading: '오를 앙', meaning: '오르다', strokes: 8 },
        { char: '曄', examples: ['빛나다', '성하다', '불빛', '번쩍거리다', '이름자'], reading: '빛날 엽', meaning: '빛나다', strokes: 16 },
        { char: '榮', examples: ['영광(榮光)', '번영(繁榮)', '영예(榮譽)', '영화', '꽃'], reading: '영화 영', meaning: '영광', strokes: 14 },
        { char: '泳', examples: ['수영(水泳)', '배영(背泳)', '유영(遊泳)', '헤엄치다', '물놀이'], reading: '헤엄칠 영', meaning: '헤엄', strokes: 9 },
        { char: '瑛', examples: ['옥빛', '수정', '아름답다', '투명하다', '이름자'], reading: '옥빛 영', meaning: '옥빛', strokes: 14 },
        { char: '瑩', examples: ['영롱(瑩瓏)', '밝다', '맑다', '의혹하다', '옥돌'], reading: '빛날 영', meaning: '빛나다', strokes: 15 },
        { char: '瀛', examples: ['소영주(小瀛洲)', '바다', '늪', '못', '신선이 사는 산'], reading: '바다 영', meaning: '바다', strokes: 20 },
        { char: '暎', examples: ['영화(暎畵)', '반영(反暎)', '비치다', '햇살', '이름자'], reading: '비칠 영', meaning: '비치다', strokes: 13 },
        { char: '叡', examples: ['예지(叡智)', '성예(聖叡)', '사리에 밝다', '임금', '이름자'], reading: '밝을 예', meaning: '밝다', strokes: 16 },
        { char: '鋭', examples: ['예리(銳利)', '예민(銳敏)', '첨예(尖銳)', '날카롭다', '빠르다'], reading: '날카로울 예', meaning: '날카롭다', strokes: 15 },
        { char: '旿', examples: ['오시(旿時)', '밝다', '대낮', '이름자', '깨닫다'], reading: '도울 오', meaning: '돕다', strokes: 7 },
        { char: '旭', examples: ['욱일승천(旭日昇天)', '아침 해', '빛나다', '돋다', '이름자'], reading: '아침해 욱', meaning: '아침해', strokes: 6 },
        { char: '煜', examples: ['빛나다', '불꽃', '비치다', '이름자', '욱'], reading: '빛날 욱', meaning: '빛나다', strokes: 13 },
        { char: '彧', examples: ['문채', '무성하다', '빛나다', '성하다', '이름자'], reading: '빛날 욱', meaning: '빛나다', strokes: 10 },
        { char: '鈺', examples: ['보배', '금', '단단한 금', '귀한 것', '이름자'], reading: '보배 욱', meaning: '보배', strokes: 13 },
        { char: '雄', examples: ['웅장(雄壯)', '영웅(英雄)', '수컷', '굳세다', '뛰어나다'], reading: '수컷 웅', meaning: '수컷', strokes: 12 },
        { char: '熊', examples: ['곰', '웅담(熊膽)', '반달곰', '힘세다', '미련하다'], reading: '곰 웅', meaning: '곰', strokes: 14 },
        { char: '元', examples: ['원기(元氣)', '원년(元年)', '단원(單元)', '으뜸', '크다'], reading: '으뜸 원', meaning: '으뜸', strokes: 4 },
        { char: '瑗', examples: ['도원(覩瑗)', '구슬', '옥', '둥근 옥', '이름자'], reading: '구슬 원', meaning: '구슬', strokes: 14 },
        { char: '垣', examples: ['담장', '성원(城垣)', '담', '울타리', '별'], reading: '담 원', meaning: '담', strokes: 9 },
        { char: '瑜', examples: ['유가(瑜伽)', '백옥', '아름다운 옥', '이름자', '빛나다'], reading: '아름다운옥 유', meaning: '아름다운옥', strokes: 14 },
        { char: '裕', examples: ['부유(富裕)', '여유(餘裕)', '유복(裕福)', '넉넉하다', '너그럽다'], reading: '넉넉할 유', meaning: '넉넉', strokes: 13 },
        { char: '潤', examples: ['윤택(潤澤)', '이윤(利潤)', '습윤(濕潤)', '불다', '광택'], reading: '윤택할 윤', meaning: '윤택', strokes: 15 },
        { char: '允', examples: ['윤허(允許)', '진실로', '마땅하다', '믿다', '이름자'], reading: '허락할 윤', meaning: '허락', strokes: 4 },
        { char: '殷', examples: ['은성(殷盛)', '은나라', '성하다', '크다', '많다'], reading: '성할 은', meaning: '성하다', strokes: 10 },
        { char: '隱', examples: ['은둔(隱遁)', '은폐(隱蔽)', '은밀(隱密)', '숨다', '가리다'], reading: '숨을 은', meaning: '숨다', strokes: 17 },
        { char: '銀', examples: ['은행(銀行)', '은메달', '수은(水銀)', '돈', '은'], reading: '은 은', meaning: '은', strokes: 14 },
        { char: '誾', examples: ['온화하다', '향기롭다', '쟁정하다', '이름자', '은'], reading: '화할 은', meaning: '화목', strokes: 15 },
        { char: '義', examples: ['정의(正義)', '의무(義務)', '의리(義理)', '옳다', '뜻'], reading: '옳을 의', meaning: '옳다', strokes: 13 },
        { char: '毅', examples: ['강의(剛毅)', '굳세다', '과감하다', '참다', '이름자'], reading: '굳셀 의', meaning: '굳세다', strokes: 15 },
        { char: '翼', examples: ['좌익(左翼)', '우익(右翼)', '비익(比翼)', '날개', '돕다'], reading: '날개 익', meaning: '날개', strokes: 18 },
        { char: '寅', examples: ['인시(寅時)', '범', '동료', '셋째 지지', '공경하다'], reading: '범 인', meaning: '범', strokes: 11 },
        { char: '珍', examples: ['진주(珍珠)', '진수성찬(珍羞盛饌)', '진귀(珍貴)', '보배', '귀하다'], reading: '보배 진', meaning: '보배', strokes: 10 },
        { char: '晉', examples: ['진급(晉級)', '진나라', '나아가다', '억누르다', '꽂다'], reading: '나아갈 진', meaning: '나아가다', strokes: 10 },
        { char: '鎭', examples: ['진압(鎭壓)', '진정(鎭靜)', '진해(鎭海)', '누르다', '진정하다'], reading: '진압할 진', meaning: '진압', strokes: 18 },
        { char: '振', examples: ['진동(振動)', '진흥(振興)', '부진(不振)', '떨치다', '구원하다'], reading: '떨칠 진', meaning: '떨치다', strokes: 11 },
        // ㅈ
        { char: '贊', examples: ['찬성(贊成)', '찬양(贊揚)', '협찬(協贊)', '돕다', '기리다'], reading: '도울 찬', meaning: '돕다', strokes: 19 },
        { char: '璨', examples: ['찬란(璨爛)', '빛나다', '이름자', '옥빛', '찬'], reading: '빛날 찬', meaning: '빛나다', strokes: 18 },
        { char: '燦', examples: ['찬란(燦爛)', '빛나다', '선명하다', '이름자', '찬'], reading: '빛날 찬', meaning: '빛나다', strokes: 17 },
        { char: '蒼', examples: ['창공(蒼空)', '창백(蒼白)', '창생(蒼生)', '푸르다', '우거지다'], reading: '푸를 창', meaning: '푸르다', strokes: 16 },
        { char: '昌', examples: ['창성(昌盛)', '번창(繁昌)', '창원(昌原)', '창대(昌大)', '아름답다'], reading: '창성할 창', meaning: '창성', strokes: 8 },
        { char: '彩', examples: ['색채(色彩)', '수채화(水彩畵)', '광채(光彩)', '채색', '무늬'], reading: '채색 채', meaning: '채색', strokes: 11 },
        { char: '哲', examples: ['철학(哲學)', '현철(賢哲)', '명철(明哲)', '밝다', '슬기롭다'], reading: '밝을 철', meaning: '밝다', strokes: 10 },
        { char: '澈', examples: ['투철(透澈)', '맑다', '물 맑다', '통하다', '이름자'], reading: '맑을 철', meaning: '맑다', strokes: 16 },
        { char: '晨', examples: ['혼정신성(昏定晨省)', '새벽', '아침', '별 이름', '신'], reading: '새벽 신', meaning: '새벽', strokes: 11 },
        { char: '忱', examples: ['충심(忠忱)', '정성', '성심', '믿음', '침'], reading: '정성 침', meaning: '정성', strokes: 8 },
        // ㅌ
        { char: '泰', examples: ['태산(泰山)', '태평(泰平)', '안태(安泰)', '크다', '편안하다'], reading: '클 태', meaning: '크다', strokes: 10 },
        { char: '兌', examples: ['태환(兌換)', '태열(兌悅)', '바꾸다', '기뻐하다', '곧다'], reading: '바꿀 태', meaning: '바꾸다', strokes: 7 },
        { char: '卓', examples: ['탁월(卓越)', '탁자(卓子)', '탁견(卓見)', '높다', '뛰어나다'], reading: '높을 탁', meaning: '높다', strokes: 8 },
        { char: '琢', examples: ['절차탁마(切磋琢磨)', '조탁(彫琢)', '다듬다', '쪼다', '갈다'], reading: '다듬을 탁', meaning: '다듬다', strokes: 13 },
        // ㅍ
        { char: '坡', examples: ['파평(坡平)', '언덕', '비탈', '둑', '고개'], reading: '언덕 파', meaning: '언덕', strokes: 8 },
        { char: '彭', examples: ['팽(彭)', '성', '부풀다', '가다', '나라이름'], reading: '북소리 팽', meaning: '북소리', strokes: 12 },
        { char: '杓', examples: ['북두칠성(北斗七星)', '국자', '자루', '당기다', '표'], reading: '국자 표', meaning: '국자', strokes: 7 },
        { char: '杷', examples: ['비파(枇杷)', '비파나무', '악기', '긁다', '파'], reading: '비파 파', meaning: '비파', strokes: 8 },
        { char: '豊', examples: ['풍년(豊年)', '풍부(豊富)', '풍성(豊盛)', '넉넉하다', '크다'], reading: '풍년 풍', meaning: '풍년', strokes: 13 },
        { char: '馮', examples: ['빙자(憑藉)', '성', '업신여기다', '타다', '오르다'], reading: '빙자할 빙', meaning: '의지', strokes: 12 },
        // ㅎ
        { char: '夏', examples: ['하계(夏季)', '하지(夏至)', '하복(夏服)', '여름', '중국'], reading: '여름 하', meaning: '여름', strokes: 10 },
        { char: '河', examples: ['하천(河川)', '운하(運河)', '강하(江河)', '물', '강'], reading: '물 하', meaning: '강', strokes: 8 },
        { char: '荷', examples: ['출하(出荷)', '하물(荷物)', '박하(薄荷)', '연꽃', '짐'], reading: '연꽃 하', meaning: '연꽃', strokes: 13 },
        { char: '翰', examples: ['한림(翰林)', '서한(書翰)', '문한(文翰)', '붓', '날개'], reading: '붓 한', meaning: '붓', strokes: 16 },
        { char: '漢', examples: ['한자(漢字)', '한강(漢江)', '문한(文漢)', '한나라', '사나이'], reading: '한수 한', meaning: '한수', strokes: 14 },
        { char: '翕', examples: ['흡합(翕合)', '흡연(翕然)', '모으다', '합하다', '거두다'], reading: '모을 흡', meaning: '모으다', strokes: 12 },
        { char: '赫', examples: ['혁혁(赫赫)', '빛나다', '붉다', '성하다', '노하다'], reading: '빛날 혁', meaning: '빛나다', strokes: 14 },
        { char: '爀', examples: ['빛나다', '불꽃', '붉다', '성하다', '혁'], reading: '빛날 혁', meaning: '빛나다', strokes: 19 },
        { char: '玄', examples: ['현미(玄米)', '현관(玄關)', '현묘(玄妙)', '검다', '오묘하다'], reading: '검을 현', meaning: '검다', strokes: 5 },
        { char: '鉉', examples: ['솥걸이', '솥귀', '활시위', '이름자', '현'], reading: '솥걸이 현', meaning: '솥걸이', strokes: 13 },
        { char: '泫', examples: ['현연(泫然)', '이슬', '눈물 흘리다', '빛나다', '이름자'], reading: '눈물흐를 현', meaning: '눈물흐르다', strokes: 8 },
        { char: '炫', examples: ['현요(炫曜)', '빛나다', '자랑하다', '비치다', '현혹하다'], reading: '빛날 현', meaning: '빛나다', strokes: 9 },
        { char: '賢', examples: ['현명(賢明)', '현인(賢人)', '성현(聖賢)', '어질다', '착하다'], reading: '어질 현', meaning: '어질다', strokes: 15 },
        { char: '鉉', examples: ['솥걸이', '솥귀', '활시위', '이름자', '현'], reading: '솥걸이 현', meaning: '솥걸이', strokes: 13 },
        { char: '協', examples: ['협력(協力)', '협동(協同)', '협회(協會)', '화합하다', '돕다'], reading: '화합할 협', meaning: '화합', strokes: 8 },
        { char: '灝', examples: ['호호(灝灝)', '넓다', '희다', '콩물', '이름자'], reading: '넓을 호', meaning: '넓다', strokes: 22 },
        { char: '皓', examples: ['호치(皓齒)', '호백(皓白)', '희다', '깨끗하다', '빛나다'], reading: '흰 호', meaning: '희다', strokes: 12 },
        { char: '虎', examples: ['호랑이(虎狼)', '맹호(猛虎)', '용호(龍虎)', '범', '용맹'], reading: '범 호', meaning: '범', strokes: 8 },
        { char: '琥', examples: ['호박(琥珀)', '옥', '호박', '호랑이 모양의 옥', '이름자'], reading: '호박 호', meaning: '호박', strokes: 13 },
        { char: '浩', examples: ['호연지기(浩然之氣)', '호대(浩大)', '넓다', '클', '많다'], reading: '넓을 호', meaning: '넓다', strokes: 11 },
        { char: '鎬', examples: ['호경(鎬京)', '호미', '냄비', '빛나다', '이름자'], reading: '호미 호', meaning: '호미', strokes: 18 },
        { char: '鴻', examples: ['홍곡(鴻鵠)', '홍은(鴻恩)', '큰 기러기', '크다', '넓다'], reading: '큰기러기 홍', meaning: '큰기러기', strokes: 17 },
        { char: '弘', examples: ['홍익(弘益)', '홍보(弘報)', '홍대(弘大)', '넓다', '크다'], reading: '넓을 홍', meaning: '넓다', strokes: 5 },
        { char: '洪', examples: ['홍수(洪水)', '홍복(洪福)', '홍대(洪大)', '큰 물', '넓다'], reading: '큰물 홍', meaning: '큰물', strokes: 10 },
        { char: '紅', examples: ['홍색(紅色)', '홍조(紅潮)', '분홍(粉紅)', '붉다', '연지'], reading: '붉을 홍', meaning: '붉다', strokes: 9 },
        { char: '皇', examples: ['황제(皇帝)', '황실(皇室)', '교황(教皇)', '임금', '크다'], reading: '임금 황', meaning: '임금', strokes: 9 },
        { char: '煌', examples: ['휘황(輝煌)', '빛나다', '불꽃', '성하다', '이름자'], reading: '빛날 황', meaning: '빛나다', strokes: 13 },
        { char: '晃', examples: ['황황(晃晃)', '빛나다', '밝다', '나타나다', '이름자'], reading: '빛날 황', meaning: '빛나다', strokes: 10 },
        { char: '輝', examples: ['광휘(光輝)', '휘황(輝煌)', '빛나다', '비치다', '이름자'], reading: '빛날 휘', meaning: '빛나다', strokes: 15 },
        { char: '徽', examples: ['취미(徽章)', '국장(國徽)', '아름답다', '기', '표지'], reading: '아름다울 휘', meaning: '아름답다', strokes: 17 },
        { char: '曉', examples: ['효성(曉星)', '효유(曉喩)', '통효(通曉)', '새벽', '깨닫다'], reading: '새벽 효', meaning: '새벽', strokes: 16 },
        { char: '孝', examples: ['효도(孝道)', '효자(孝子)', '충효(忠孝)', '효성', '섬기다'], reading: '효도 효', meaning: '효도', strokes: 7 },
        { char: '勳', examples: ['훈장(勳章)', '공훈(功勳)', '훈공(勳功)', '훈적(勳績)', '표훈(表勳)'], reading: '공 훈', meaning: '공', strokes: 16 },
        { char: '熙', examples: ['강희(康熙)', '희망(熙望)', '희열(熙悅)', '희희(熙熙)', '희송(熙頌)'], reading: '빛날 희', meaning: '빛나다', strokes: 14 },
        { char: '熹', examples: ['주희(朱熹)', '희미(熹微)', '빛나다', '불빛', '이름자'], reading: '빛날 희', meaning: '빛나다', strokes: 16 },
        { char: '曦', examples: ['조희(朝曦)', '춘희(春曦)', '석희(夕曦)', '여명(黎明)-rel', '햇빛'], reading: '햇빛 희', meaning: '햇빛', strokes: 20 },
        { char: '僖', examples: ['희열(僖悅)', '희락(僖樂)', '기쁘다', '즐겁다', '이름자'], reading: '기쁠 희', meaning: '기쁘다', strokes: 14 },
        { char: '羲', examples: ['복희(伏羲)', '희생(犧牲)-rel', '회생(羲牲)', '희자(羲字)', '희화(羲和)'], reading: '복희 희', meaning: '복희', strokes: 17 },
        // 2급 추가 (Part 2)

        // 2급 신규 배정한자 200자 (대표 한자)
        // ㄱ
        { char: '軻', examples: ['맹가(孟軻)', '형가(荊軻)', '수레', '험하다', '이름자'], reading: '수레 가', meaning: '수레', strokes: 12 },
        { char: '迦', examples: ['석가(釋迦)', '가섭(迦葉)', '더하다', '만나다', '차단하다'], reading: '더할 가', meaning: '더하다', strokes: 9 },
        { char: '杆', examples: ['목간(木杆)', '간두(杆頭)', '몽둥이', '방패', '막대기'], reading: '몽둥이 간', meaning: '몽둥이', strokes: 7 },
        { char: '艮', examples: ['간방(艮方)', '괘 이름', '어긋나다', '머무르다', '단단하다'], reading: '괘이름 간', meaning: '간', strokes: 6 },
        { char: '鞨', examples: ['말갈(靺鞨)', '두건', '가죽신', '오랑캐', '이름자'], reading: '신 갈', meaning: '신', strokes: 18 },
        { char: '鉀', examples: ['칼륨', '갑옷', '금속', '이름자', '갑'], reading: '칼륨 갑', meaning: '칼륨', strokes: 13 },
        { char: '岡', examples: ['산강(山岡)', '언덕', '산등성이', '산마루', '강'], reading: '산마루 강', meaning: '산마루', strokes: 8 },
        { char: '彊', examples: ['강성(彊盛)', '부국강병(富國彊兵)', '굳세다', '강하다', '힘쓰다'], reading: '굳셀 강', meaning: '강하다', strokes: 16 },
        { char: '价', examples: ['대가(代价)', '가치', '크다', '착하다', '심부름꾼'], reading: '벼슬 개', meaning: '벼슬', strokes: 6 },
        { char: '塏', examples: ['상개(爽塏)', '높은 땅', '마르다', '좋은 땅', '이름자'], reading: '마를 개', meaning: '마르다', strokes: 13 },
        { char: '鍵', examples: ['건반(鍵盤)', '관건(關鍵)', '열쇠', '자물쇠', '끄르다'], reading: '열쇠 건', meaning: '열쇠', strokes: 17 },
        { char: '杰', examples: ['걸작(杰作)', '호걸(豪杰)', '뛰어나다', '특출나다', '이름자'], reading: '뛰어날 걸', meaning: '뛰어나다', strokes: 8 },
        { char: '儆', examples: ['경계(儆戒)', '경비(儆備)', '깨우치다', '조심하다', '알리다'], reading: '깨우칠 경', meaning: '깨우치다', strokes: 15 },
        { char: '瓊', examples: ['경옥(瓊玉)', '경지(瓊枝)', '아름다운 옥', '붉은 옥', '이름자'], reading: '아름다운옥 경', meaning: '아름다운 옥', strokes: 19 },
        { char: '皐', examples: ['구월(皐月)', '한고조(漢皐祖)', '언덕', '못가', '부르다'], reading: '못가 고', meaning: '못가', strokes: 11 },
        { char: '戈', examples: ['간과(干戈)', '동과(同戈)', '창', '전쟁', '찌르다'], reading: '창 과', meaning: '창', strokes: 4 },
        { char: '款', examples: ['약관(約款)', '차관(借款)', '정성', '항목', '문서'], reading: '관대할 관', meaning: '관대하다', strokes: 12 },
        { char: '琯', examples: ['옥관(玉琯)', '피리', '옥피리', '다스리다', '이름자'], reading: '피리 관', meaning: '피리', strokes: 12 },
        { char: '串', examples: ['곶감', '관련(串聯)', '환찬(患串)', '꿰다', '꼬챙이'], reading: '꿸 관', meaning: '꿰다', strokes: 7 },
        { char: '傀', examples: ['괴뢰(傀儡)', '허수아비', '꼭두각시', '크다', '괴상하다'], reading: '허수아비 괴', meaning: '허수아비', strokes: 12 },
        { char: '絞', examples: ['교수(絞首)', '교살(絞殺)', '매다', '짜다', '목매다'], reading: '맬 교', meaning: '매다', strokes: 12 },
        { char: '歐', examples: ['구주(歐洲)', '구미(歐美)', '구라파(歐羅巴)', '토하다', '노래하다'], reading: '구주 구', meaning: '구주', strokes: 15 },
        { char: '購', examples: ['구매(購買)', '구독(購讀)', '구입(購入)', '사다', '구하다'], reading: '살 구', meaning: '사다', strokes: 17 },
        { char: '閨', examples: ['규방(閨房)', '규수(閨秀)', '안방', '부녀자', '작은 문'], reading: '안방 규', meaning: '안방', strokes: 14 },
        { char: '珪', examples: ['규소(珪素)', '서옥', '홀', '옥', '이름자'], reading: '홀 규', meaning: '홀', strokes: 10 },
        { char: '揆', examples: ['백규(百揆)', '헤아리다', '도리', '법', '다스리다'], reading: '헤아릴 규', meaning: '헤아리다', strokes: 12 },
        { char: '瑾', examples: ['근유(瑾瑜)', '아름다운 옥', '이름자', '붉은 옥', '옥'], reading: '아름다운옥 근', meaning: '아름다운 옥', strokes: 16 },
        { char: '槿', examples: ['무궁화(無窮花)', '근역(槿域)', '나무 이름', '덧없다', '이름자'], reading: '무궁화 근', meaning: '무궁화', strokes: 15 },
        { char: '兢', examples: ['전전긍긍(戰戰兢兢)', '조심하다', '삼가다', '떨다', '두려워하다'], reading: '조심할 긍', meaning: '조심하다', strokes: 14 },
        { char: '棋', examples: ['바둑', '기원(棋院)', '장기', '기사', '기보'], reading: '바둑 기', meaning: '바둑', strokes: 12 },
        { char: '冀', examples: ['희망', '바라다', '기대하다', '욕심', '이름자'], reading: '바랄 기', meaning: '바라다', strokes: 16 },
        { char: '岐', examples: ['분기점(分岐點)', '갈림길', '가닥', '나뉘다', '다르다'], reading: '갈래 기', meaning: '갈래', strokes: 7 },
        { char: '驥', examples: ['천리마', '기린아', '준마', '현인', '이름자'], reading: '준마 기', meaning: '준마', strokes: 26 },
        { char: '耆', examples: ['기로(耆老)', '늙은이', '즐기다', '스승', '이름자'], reading: '늙을 기', meaning: '늙다', strokes: 10 },
        { char: '麒', examples: ['기린(麒麟)', '상상 속의 동물', '뛰어난 사람', '이름자', '기린'], reading: '기린 기', meaning: '기린', strokes: 19 },
        { char: '沂', examples: ['기수(沂水)', '물이름', '은은하다', '이름자', '기'], reading: '물이름 기', meaning: '물이름', strokes: 7 },
        { char: '淇', examples: ['기수(淇水)', '물이름', '이름자', '기'], reading: '물이름 기', meaning: '물이름', strokes: 11 },
        { char: '琦', examples: ['기이하다', '옥', '아름답다', '훌륭하다', '이름자'], reading: '아름다운옥 기', meaning: '아름다운 옥', strokes: 12 },
        { char: '琪', examples: ['옥', '아름다운 옥', '기이하다', '이름자', '기'], reading: '옥이름 기', meaning: '옥이름', strokes: 13 },
        { char: '璣', examples: ['선기옥형(璇璣玉衡)', '구슬', '별 이름', '이름자', '기'], reading: '구슬 기', meaning: '구슬', strokes: 17 },
        { char: '箕', examples: ['키', '쓰레받기', '별 이름', '자세', '이름자'], reading: '키 기', meaning: '키', strokes: 14 },
        { char: '騏', examples: ['얼룩말', '준마', '천리마', '이름자', '기'], reading: '얼룩말 기', meaning: '얼룩말', strokes: 18 },
        // ㄴ
        { char: '尿', examples: ['당뇨(糖尿)', '이뇨(利尿)', '요소(尿素)', '오줌', '누다'], reading: '오줌 뇨', meaning: '오줌', strokes: 7 },
        // ㄷ
        { char: '鍛', examples: ['단련(鍛鍊)', '대장장이', '쇠를 불리다', '두드리다', '닦다'], reading: '단련할 단', meaning: '단련하다', strokes: 17 },
        { char: '湍', examples: ['급류', '여울', '빠르다', '물이름', '이름자'], reading: '여울 단', meaning: '여울', strokes: 12 },
        { char: '潭', examples: ['백록담(白鹿潭)', '용담(龍潭)', '못', '깊다', '물가'], reading: '못 담', meaning: '못', strokes: 15 },
        { char: '膽', examples: ['담력(膽力)', '담석(膽石)', '간담(肝膽)', '쓸개', '용기'], reading: '쓸개 담', meaning: '쓸개', strokes: 17 },
        { char: '塘', examples: ['연못', '둑', '제방', '이름자', '당'], reading: '못 당', meaning: '못', strokes: 13 },
        { char: '戴', examples: ['추대(推戴)', '불공대천(不共戴天)', '이다', '받들다', '모시다'], reading: '이을 대', meaning: '이다', strokes: 18 },
        { char: '垈', examples: ['대지(垈地)', '터', '집터', '기초', '이름자'], reading: '터 대', meaning: '터', strokes: 9 },
        { char: '悳', examples: ['덕', '은혜', '이름자', '덕망', '덕행'], reading: '큰덕 덕', meaning: '큰 덕', strokes: 11 },
        { char: '惇', examples: ['도텁다', '진실하다', '힘쓰다', '두텁다', '이름자'], reading: '도타울 돈', meaning: '도탑다', strokes: 11 },
        { char: '燉', examples: ['돈육', '불타다', '익히다', '이름자', '돈'], reading: '익힐 돈', meaning: '익히다', strokes: 16 },
        { char: '頓', examples: ['돈오(頓悟)', '정돈(整頓)', '갑자기', '조아리다', '머무르다'], reading: '머리둘 돈', meaning: '머리두다', strokes: 13 },
        { char: '乭', examples: ['이세돌', '돌', '이름자', '석(石)의 훈음차', '돌'], reading: '돌 돌', meaning: '돌', strokes: 3 },
        { char: '桐', examples: ['오동나무(梧桐)', '거문고', '이름자', '동', '나무'], reading: '오동나무 동', meaning: '오동나무', strokes: 10 },
        { char: '藤', examples: ['등나무(藤)', '갈등(葛藤)', '등가구', '덩굴', '이름자'], reading: '등나무 등', meaning: '등나무', strokes: 18 },
        { char: '謄', examples: ['등기(登記)', '등본(謄本)', '등사(謄寫)', '베끼다', '옮기다'], reading: '등사할 등', meaning: '등사하다', strokes: 17 },
        { char: '鄧', examples: ['등소평(鄧小平)', '성씨', '나라이름', '이름자', '등'], reading: '성씨 등', meaning: '성', strokes: 19 },
        // ㄹ
        { char: '裸', examples: ['전라(全裸)', '적나라(赤裸裸)', '나체(裸體)', '벌거벗다', '드러나다'], reading: '벗을 라', meaning: '벗다', strokes: 13 },
        { char: '洛', examples: ['낙양(洛陽)', '낙수(洛水)', '낙동강(洛東江)', '물이름', '낙지'], reading: '물이름 락', meaning: '물이름', strokes: 9 },
        { char: '爛', examples: ['찬란(燦爛)', '난만(爛漫)', '부란(腐爛)', '빛나다', '문드러지다'], reading: '빛날 란', meaning: '빛나다', strokes: 21 },
        { char: '藍', examples: ['람색(藍色)', '남전(藍田)', '쪽빛', '남색', '염료'], reading: '쪽 람', meaning: '쪽', strokes: 18 },
        { char: '拉', examples: ['납치(拉致)', '마찰(摩擦)-no', '끌다', '당기다', '찢다'], reading: '잡아당길 랍', meaning: '잡아당기다', strokes: 8 },
        { char: '萊', examples: ['봉래(蓬萊)', '고래(苦萊)', '명아주', '아욱', '거친 땅'], reading: '명아주 래', meaning: '명아주', strokes: 11 },
        { char: '輛', examples: ['차량(車輛)', '일량(一輛)', '수레', '대', '량'], reading: '수레 량', meaning: '수레', strokes: 15 },
        { char: '樑', examples: ['동량(棟樑)', '교량(橋樑)', '들보', '기둥', '다리'], reading: '들보 량', meaning: '들보', strokes: 13 },
        { char: '亮', examples: ['명량(明亮)', '청량(淸亮)', '제갈량(諸葛亮)', '밝다', '믿다'], reading: '밝을 량', meaning: '밝다', strokes: 9 },
        { char: '廬', examples: ['초려(草廬)', '삼고초려(三顧草廬)', '여산(廬山)', '오두막', '집'], reading: '초막 려', meaning: '초막', strokes: 19 },
        { char: '礪', examples: ['연려(硏礪)', '숫돌', '갈다', '닦다', '이름자'], reading: '숫돌 려', meaning: '숫돌', strokes: 19 },
        { char: '呂', examples: ['여씨(呂氏)', '여불위(呂不韋)', '성씨', '허리뼈', '음률'], reading: '성씨 려', meaning: '성', strokes: 7 },
        { char: '驪', examples: ['여주(驪州)', '노려(奴驪)', '검은 말', '연이어', '이름자'], reading: '검은말 려', meaning: '검은 말', strokes: 30 },
        { char: '煉', examples: ['단련(鍛煉)', '수련(修煉)', '연단(煉丹)', '불려내다', '정련하다'], reading: '불려낼 련', meaning: '불려내다', strokes: 13 },
        { char: '漣', examples: ['연수(漣水)', '잔물결', '파문', '이름자', '련'], reading: '물결 련', meaning: '물결', strokes: 14 },
        { char: '濂', examples: ['염계(濂溪)', '주염계(周濂溪)', '물이름', '흐르다', '이름자'], reading: '물이름 렴', meaning: '물이름', strokes: 16 },
        { char: '玲', examples: ['영롱(玲瓏)', '옥소리', '맑다', '또렷하다', '이름자'], reading: '옥소리 령', meaning: '옥 소리', strokes: 9 },
        { char: '醴', examples: ['감로(甘露)', '단술', '좋은 술', '감주', '이름자'], reading: '단술 례', meaning: '단술', strokes: 20 },
        { char: '盧', examples: ['노씨(盧氏)', '그릇', '검다', '성씨', '이름자'], reading: '그릇 로', meaning: '그릇', strokes: 16 },
        { char: '鷺', examples: ['백로(白鷺)', '노도(鷺島)', '왜가리', '새 이름', '백로과'], reading: '백로 로', meaning: '백로', strokes: 24 },
        { char: '蘆', examples: ['갈대', '노화(蘆花)', '노생(蘆生)', '창포', '이름자'], reading: '갈대 로', meaning: '갈대', strokes: 19 },
        { char: '魯', examples: ['노나라', '노둔(魯鈍)', '노직(魯直)', '어리석다', '소박하다'], reading: '어리석을 로', meaning: '어리석다', strokes: 15 },
        { char: '櫓', examples: ['노', '거룻배 노', '망루(望樓)', '젓다', '이름자'], reading: '노 로', meaning: '노', strokes: 19 },
        { char: '鑪', examples: ['용광로(鎔鑪)', '화로', '풀무', '녹이다', '이름자'], reading: '화로 로', meaning: '화로', strokes: 26 },
        { char: '壟', examples: ['농단(壟斷)', '언덕', '이랑', '무덤', '독점하다'], reading: '언덕 롱', meaning: '언덕', strokes: 19 },
        { char: '瀘', examples: ['노주(瀘州)', '노수(瀘水)', '물이름', '중국 지명', '이름자'], reading: '물이름 로', meaning: '물이름', strokes: 18 },
        { char: '潞', examples: ['노강(潞江)', '노수(潞水)', '물이름', '중국 지명', '이름자'], reading: '물이름 로', meaning: '물이름', strokes: 15 },
        { char: '淥', examples: ['녹수(淥水)', '맑다', '깨끗하다', '물이름', '이름자'], reading: '맑을 록', meaning: '맑다', strokes: 11 },
        { char: '綠', examples: ['녹색(綠色)', '초록(草綠)', '녹차(綠茶)', '푸르다', '신록(新綠)'], reading: '푸를 록', meaning: '푸르다', strokes: 14 },
        { char: '騮', examples: ['유(騮)', '적토마(赤兔馬)-rel', '말', '준마', '이름자'], reading: '말 류', meaning: '말', strokes: 18 },
        { char: '柳', examples: ['버드나무', '유씨(柳氏)', '유엽(柳葉)', '수양버들', '성씨'], reading: '버들 류', meaning: '버드나무', strokes: 9 },
        { char: '隆', examples: ['융성(隆盛)', '번영(繁榮)', '융기(隆起)', '성하다', '높다'], reading: '성할 륭', meaning: '성하다', strokes: 11 },
        { char: '婁', examples: ['누루(婁累)', '별이름', '성씨', '모으다', '이름자'], reading: '별이름 루', meaning: '별이름', strokes: 11 },
        { char: '瑠', examples: ['유리(琉璃)', '유리(瑠璃)', '옥', '보석', '이름자'], reading: '유리 류', meaning: '유리', strokes: 14 },
        { char: '漏', examples: ['누수(漏水)', '누출(漏出)', '누설(漏泄)', '새다', '빠지다'], reading: '샐 루', meaning: '새다', strokes: 14 },
        { char: '壘', examples: ['보루', '성루(城壘)', '누석(壘石)', '쌓다', '진지'], reading: '보루 루', meaning: '보루', strokes: 18 },
        { char: '淚', examples: ['눈물', '눈물', '맹랑', '슬프다', '루'], reading: '눈물 루', meaning: '눈물', strokes: 11 },
        { char: '累', examples: ['누적(累積)', '연루(連累)', '누차(累次)', '쌓다', '어렵다'], reading: '쌓을 루', meaning: '쌓다', strokes: 11 },
        { char: '縷', examples: ['누루(縷縷)', '실', '가닥', '상세하다', '수'], reading: '실 루', meaning: '실', strokes: 16 },
        { char: '膂', examples: ['역량(力量)', '등골', '허리', '힘', '이름자'], reading: '등골 려', meaning: '등골', strokes: 13 },
        { char: '侶', examples: ['동려(同侶)', '반려(伴侶)', '짝', '동무', '벗'], reading: '짝 려', meaning: '짝', strokes: 9 },
        { char: '旅', examples: ['여행(旅行)', '군려(軍旅)', '나그네', '군대', '무리'], reading: '나그네 려', meaning: '나그네', strokes: 10 },
        { char: '慮', examples: ['고려(考慮)', '사려(思慮)', '염려(念慮)', '생각하다', '걱정'], reading: '생각할 려', meaning: '생각하다', strokes: 15 },
        { char: '濾', examples: ['여과(濾過)', '려과(濾過)', '거르다', '걸러내다', '정화'], reading: '거를 려', meaning: '거르다', strokes: 18 },
        { char: '呂', examples: ['여씨(呂氏)', '음려(音呂)', '등뼈', '성씨', '율려'], reading: '등뼈 려', meaning: '등뼈', strokes: 7 },
        { char: '儷', examples: ['배려(配儷)', '부려(夫儷)', '짝', '부부', '아름답다'], reading: '짝 려', meaning: '짝', strokes: 21 },
        { char: '廖', examples: ['요씨(廖氏)', '성씨', '고요하다', '빈 집', '이름자'], reading: '빌 료', meaning: '비다', strokes: 14 },
        { char: '寮', examples: ['동료(同寮)', '기숙사(寮舍)', '벼슬', '집', '관청'], reading: '집 료', meaning: '집', strokes: 15 },
        { char: '遼', examples: ['요동(遼東)', '요하(遼河)', '멀다', '요원하다', '요나라'], reading: '멀 료', meaning: '멀다', strokes: 15 },
        { char: '療', examples: ['치료(治療)', '요양(療養)', '의료(醫療)', '낫게하다', '병 고치다'], reading: '치료할 료', meaning: '치료하다', strokes: 17 },
        { char: '燎', examples: ['불사르다', '봉화', '요원(燎原)', '불꽃', '밝다'], reading: '불사를 료', meaning: '불사르다', strokes: 16 },
        { char: '瞭', examples: ['명료(明瞭)', '료해(瞭解)', '밝다', '분명하다', '살피다'], reading: '밝을 료', meaning: '밝다', strokes: 17 },
        { char: '僚', examples: ['동료(同僚)', '관료(官僚)', '막료(幕僚)', '벗', '동무'], reading: '동료 료', meaning: '동료', strokes: 14 },
        { char: '寥', examples: ['적료(寂寥)', '요료(寥寥)', '쓸쓸하다', '고요하다', '적다'], reading: '쓸쓸할 료', meaning: '쓸쓸하다', strokes: 14 },
        { char: '繚', examples: ['료란(繚亂)', '감기다', '얽히다', '어지럽다', '두르다'], reading: '감길 료', meaning: '감기다', strokes: 18 },
        { char: '瘤', examples: ['혹', '종기', '부스럼', '혹', '류'], reading: '혹 류', meaning: '혹', strokes: 15 },
        { char: '琉', examples: ['유리(琉璃)', '유구(琉球)', '보석', '빛나다', '이름자'], reading: '유리 류', meaning: '유리', strokes: 11 },
        { char: '榴', examples: ['석류(石榴)', '류탄(榴彈)', '석류나무', '나무', '이름자'], reading: '석류 류', meaning: '석류', strokes: 14 },
        { char: '溜', examples: ['미끄러지다', '흐르다', '미끄럽다', '빨리', '류'], reading: '흐를 류', meaning: '흐르다', strokes: 13 },
        { char: '瀏', examples: ['유람(瀏覽)', '맑다', '깨끗하다', '물이름', '이름자'], reading: '맑을 류', meaning: '맑다', strokes: 18 },
        { char: '硫', examples: ['유황(硫黃)', '황산(硫酸)', '황(黃)-no', '광물', '류황'], reading: '유황 류', meaning: '유황', strokes: 12 },
        { char: '遛', examples: ['거닐다', '산책(散策)-no', '노닐다', '배회하다', '이름자'], reading: '거닐 류', meaning: '거닐다', strokes: 13 },
        { char: '鎏', examples: ['도금(鍍金)', '금칠', '도류(鍍鎏)', '칠하다', '이름자'], reading: '도금할 류', meaning: '도금하다', strokes: 18 },
        { char: '凌', examples: ['능욕(凌辱)', '능멸(凌蔑)', '업신여기다', '얼음', '능가하다'], reading: '업신여길 릉', meaning: '업신여기다', strokes: 10 },
        { char: '凜', examples: ['늠름(凜凜)', '엄숙하다', '서리', '추우다', '두렵다'], reading: '엄할 름', meaning: '엄하다', strokes: 15 },
        { char: '栗', examples: ['밤', '율곡(栗谷)', '전율(戰慄)', '떨다', '밤나무'], reading: '밤 률', meaning: '밤', strokes: 10 },
        { char: '慄', examples: ['전율(戰慄)', '공률(恐慄)', '율리다', '두려워하다', '떨다'], reading: '떨 률', meaning: '떨다', strokes: 13 },
        { char: '律', examples: ['법률(法律)', '율법(律法)', '규율(規律)', '법칙', '음률'], reading: '법률 률', meaning: '법률', strokes: 9 },
        { char: '履', examples: ['이행(履行)', '리력(履歷)', '신', '밟다', '행하다'], reading: '신 리', meaning: '신', strokes: 15 },
        { char: '李', examples: ['이씨(李氏)', '자두', '오얏', '성씨', '나무'], reading: '오얏 리', meaning: '오얏', strokes: 7 },
        { char: '裏', examples: ['이면(裏面)', '내리(內裏)', '속', '안', '이면'], reading: '속 리', meaning: '속', strokes: 13 },
        { char: '吏', examples: ['관리(官吏)', '이방(吏房)', '벼슬아치', '아전', '소리'], reading: '관리 리', meaning: '관리', strokes: 6 },
        { char: '利', examples: ['이익(利益)', '이로움', '편리(便利)', '날카롭다', '이득'], reading: '이로울 리', meaning: '이롭다', strokes: 7 },
        { char: '俐', examples: ['영리(伶俐)', '총명하다', '민첩하다', '똑똑하다', '이름자'], reading: '영리할 리', meaning: '영리하다', strokes: 9 },
        { char: '痢', examples: ['이질(痢疾)', '설사', '복통', '병', '리'], reading: '설사 리', meaning: '설사', strokes: 12 },
        { char: '瑮', examples: ['옥', '옥이름', '아름답다', '이름자', '리'], reading: '옥이름 리', meaning: '옥이름', strokes: 14 },
        // ㅁ
        { char: '蔓', examples: ['만연(蔓延)', '덩굴', '넝쿨', '뻗다', '퍼지다'], reading: '덩굴 만', meaning: '덩굴', strokes: 14 },
        { char: '卍', examples: ['만자(卍字)', '만(卍)', '불교 상징', '길상', '만자무늬'], reading: '만자 만', meaning: '만자', strokes: 6 },
        { char: '蠻', examples: ['야만(野蠻)', '만족(蠻族)', '오랑캐', '거칠다', '남만'], reading: '오랑캐 만', meaning: '오랑캐', strokes: 25 },
        { char: '邁', examples: ['매진(邁進)', '호매(豪邁)', '노매(老邁)', '가다', '뛰어나다'], reading: '갈 매', meaning: '가다', strokes: 17 },
        { char: '脈', examples: ['맥박(脈搏)', '혈맥(血脈)', '산맥(山脈)', '줄기', '동맥(動脈)'], reading: '맥 맥', meaning: '맥', strokes: 11 },
        { char: '貊', examples: ['맥족', '예맥(濊貊)', '오랑캐', '북방민족', '이름자'], reading: '맥족 맥', meaning: '맥족', strokes: 13 },
        { char: '孟', examples: ['맹자(孟子)', '맏', '첫째', '시작', '봄'], reading: '맏 맹', meaning: '맏', strokes: 8 },
        { char: '盟', examples: ['동맹(同盟)', '맹세(盟誓)', '연맹(聯盟)', '약속', '서약'], reading: '맹세 맹', meaning: '맹세', strokes: 13 },
        { char: '猛', examples: ['맹렬(猛烈)', '맹수(猛獸)', '용맹(勇猛)', '사납다', '강하다'], reading: '사나울 맹', meaning: '사납다', strokes: 11 },
        { char: '冕', examples: ['면류관', '왕관', '제왕', '관', '이름자'], reading: '면류관 면', meaning: '면류관', strokes: 11 },
        { char: '沔', examples: ['면수(沔水)', '물이름', '넘치다', '중국 지명', '이름자'], reading: '물이름 면', meaning: '물이름', strokes: 8 },
        { char: '杳', examples: ['묘연(杳然)', '아득하다', '어둡다', '깊다', '묘연'], reading: '아득할 묘', meaning: '아득하다', strokes: 8 },
        { char: '妙', examples: ['기묘(奇妙)', '묘미(妙味)', '오묘(奧妙)', '묘하다', '절묘(絶妙)'], reading: '묘할 묘', meaning: '묘하다', strokes: 7 },
        { char: '卯', examples: ['묘시(卯時)', '토끼띠', '지지(地支)', '동쪽', '새벽'], reading: '토끼 묘', meaning: '토끼', strokes: 5 },
        { char: '茂', examples: ['무성(茂盛)', '번무(繁茂)', '우거지다', '성하다', '풍성하다'], reading: '무성할 무', meaning: '무성하다', strokes: 9 },
        { char: '武', examples: ['무술(武術)', '무력(武力)', '무예(武藝)', '용맹', '군사'], reading: '호반 무', meaning: '호반', strokes: 8 },
        { char: '戊', examples: ['무술(戊戌)', '무신(戊申)', '천간', '다섯째', '무'], reading: '천간 무', meaning: '천간', strokes: 5 },
        { char: '舞', examples: ['무용(舞踊)', '춤', '무도(舞蹈)', '춤추다', '난무(亂舞)'], reading: '춤출 무', meaning: '춤추다', strokes: 14 },
        { char: '撫', examples: ['위무(慰撫)', '무양(撫養)', '어루만지다', '쓰다듬다', '달래다'], reading: '어루만질 무', meaning: '어루만지다', strokes: 15 },
        { char: '畝', examples: ['이랑', '무(畝)', '논밭', '밭둑', '면적'], reading: '이랑 무', meaning: '이랑', strokes: 9 },
        { char: '墓', examples: ['묘지(墓地)', '무덤', '분묘(墳墓)', '묘비(墓碑)', '성묘(省墓)'], reading: '무덤 묘', meaning: '무덤', strokes: 14 },
        { char: '慕', examples: ['사모(思慕)', '경모(景慕)', '흠모(欽慕)', '그리워하다', '따르다'], reading: '사모할 모', meaning: '사모하다', strokes: 14 },
        { char: '謀', examples: ['음모(陰謀)', '계모(計謀)', '모의(謀議)', '꾀', '도모(圖謀)'], reading: '꾀 모', meaning: '꾀', strokes: 16 },
        { char: '畝', examples: ['두목', '수령', '우두머리', '으뜸', '묘'], reading: '두목 묘', meaning: '두목', strokes: 11 },
        { char: '眸', examples: ['동공(瞳孔)', '눈동자', '눈', '모양(眸樣)', '이름자'], reading: '눈동자 모', meaning: '눈동자', strokes: 11 },
        // ㅂ
        { char: '牧', examples: ['목장(牧場)', '목축(牧畜)', '목사(牧師)', '치다', '기르다'], reading: '칠 목', meaning: '치다', strokes: 8 },
        { char: '睦', examples: ['화목(和睦)', '친목(親睦)', '목린(睦隣)', '친하다', '화하다'], reading: '화목할 목', meaning: '화목하다', strokes: 13 },
        { char: '穆', examples: ['온목(溫穆)', '목목(穆穆)', '화목', '온화하다', '공경하다'], reading: '화목할 목', meaning: '화목하다', strokes: 16 },
        { char: '沐', examples: ['목욕(沐浴)', '머리감다', '씻다', '은혜 입다', '목'], reading: '머리감을 목', meaning: '머리감다', strokes: 7 },
        { char: '坵', examples: ['구릉(丘陵)', '언덕', '구(丘)', '묘(墓)', '이름자'], reading: '언덕 묘', meaning: '언덕', strokes: 8 },
        { char: '妹', examples: ['자매(姉妹)', '누이동생', '여동생', '누이', '매'], reading: '누이 매', meaning: '누이', strokes: 8 },
        { char: '袂', examples: ['분매(分袂)', '이별', '소매', '옷소매', '매'], reading: '소매 매', meaning: '소매', strokes: 11 },
        { char: '枚', examples: ['일매(一枚)', '낱', '개', '개수', '매'], reading: '낱 매', meaning: '낱', strokes: 8 },
        { char: '枋', examples: ['방재(枋材)', '나무', '널빤지', '방목', '이름자'], reading: '방목 방', meaning: '방목', strokes: 8 },
        { char: '芳', examples: ['방향(芳香)', '방명록(芳名錄)', '향기', '향기롭다', '아름답다'], reading: '향기 방', meaning: '향기', strokes: 7 },
        { char: '彷', examples: ['방황(彷徨)', '배회', '헤매다', '어슬렁거리다', '방'], reading: '방황할 방', meaning: '방황하다', strokes: 7 },
        { char: '舫', examples: ['선박(船舶)', '배', '거룻배', '방주', '이름자'], reading: '배 방', meaning: '배', strokes: 10 },
        { char: '邦', examples: ['국방(國防)', '나라', '방국(邦國)', '우방(友邦)', '국가'], reading: '나라 방', meaning: '나라', strokes: 7 },
        { char: '磅', examples: ['방(磅)', '파운드', '무게', '무겁다', '방'], reading: '무게 방', meaning: '무게', strokes: 15 },
        { char: '膀', examples: ['팽창(膨脹)', '어깨', '방광(膀胱)', '방', '부풀다'], reading: '어깨 방', meaning: '어깨', strokes: 14 },
        { char: '蒡', examples: ['우엉(牛蒡)', '우방(牛蒡)', '풀이름', '약초', '방'], reading: '우엉 방', meaning: '우엉', strokes: 13 },
        { char: '倍', examples: ['배수(倍數)', '배(倍)', '두배', '곱절', '가중'], reading: '곱절 배', meaning: '곱절', strokes: 10 },
        { char: '陪', examples: ['배석(陪席)', '배종(陪從)', '모시다', '따르다', '배'], reading: '모실 배', meaning: '모시다', strokes: 10 },
        { char: '俳', examples: ['배우(俳優)', '배회(俳徊)', '배우', '희롱하다', '배'], reading: '배우 배', meaning: '배우', strokes: 10 },
        { char: '徘', examples: ['배회(徘徊)', '방황', '헤매다', '머뭇거리다', '배'], reading: '배회할 배', meaning: '배회하다', strokes: 11 },
        { char: '賠', examples: ['배상(賠償)', '변상(辯償)', '갚다', '보상하다', '배'], reading: '갚을 배', meaning: '갚다', strokes: 15 },
        { char: '拜', examples: ['예배(禮拜)', '배알(拜謁)', '절', '절하다', '뵙다'], reading: '절 배', meaning: '절', strokes: 9 },
        { char: '稗', examples: ['피', '잡곡', '보리', '이름자', '패'], reading: '피 패', meaning: '피', strokes: 13 },
        { char: '班', examples: ['반열(班列)', '반차(班次)', '반장(班長)', '나누다', '무리'], reading: '반열 반', meaning: '반열', strokes: 10 },
        { char: '頒', examples: ['반포(頒布)', '반사(頒賜)', '나누다', '내리다', '반'], reading: '나눌 반', meaning: '나누다', strokes: 13 },
        { char: '斑', examples: ['반점(斑點)', '얼룩', '반문(斑紋)', '아롱지다', '반'], reading: '얼룩 반', meaning: '얼룩', strokes: 12 },
        { char: '搬', examples: ['이사(移徙)', '운반(運搬)', '옮기다', '나르다', '반'], reading: '옮길 반', meaning: '옮기다', strokes: 13 },
        { char: '攀', examples: ['등반(登攀)', '잡다', '오르다', '기어오르다', '반'], reading: '잡을 반', meaning: '잡다', strokes: 19 },
        { char: '潘', examples: ['쌀뜨물', '반수(潘水)', '물이름', '성씨', '반'], reading: '쌀뜨물 반', meaning: '쌀뜨물', strokes: 15 },
        { char: '盤', examples: ['반상(盤床)', '소반', '쟁반', '그릇', '반석(盤石)'], reading: '소반 반', meaning: '소반', strokes: 15 },
        { char: '磻', examples: ['반계(磻溪)', '바위', '돌', '물가', '반'], reading: '바위 반', meaning: '바위', strokes: 15 },
        { char: '蟠', examples: ['용반(龍蟠)', '서리다', '감기다', '도사리다', '반'], reading: '서릴 반', meaning: '서리다', strokes: 19 },
        { char: '伴', examples: ['동반(同伴)', '동무', '짝', '반려(伴侶)', '함께'], reading: '짝 반', meaning: '짝', strokes: 7 },
        { char: '叛', examples: ['반란(叛亂)', '배반(背叛)', '반역(叛逆)', '배반하다', '반'], reading: '배반할 반', meaning: '배반하다', strokes: 9 },
        { char: '畔', examples: ['강반(江畔)', '밭두둑', '가', '언덕', '반'], reading: '밭두둑 반', meaning: '밭두둑', strokes: 10 },
        { char: '泮', examples: ['반수(泮水)', '얼음풀리다', '녹다', '학교', '반'], reading: '얼음풀릴 반', meaning: '얼음풀리다', strokes: 8 },
        { char: '胖', examples: ['비만', '살찌다', '고기', '반쪽', '반'], reading: '반쪽고기 반', meaning: '반쪽고기', strokes: 9 },
        { char: '罰', examples: ['처벌(處罰)', '벌', '형벌(刑罰)', '벌주다', '징계'], reading: '벌 벌', meaning: '벌', strokes: 14 },
        { char: '閥', examples: ['벌열', '재벌(財閥)', '문벌(門閥)', '세력', '벌'], reading: '벌열 벌', meaning: '벌열', strokes: 14 },
        { char: '伐', examples: ['벌목(伐木)', '정벌(征伐)', '치다', '베다', '자랑하다'], reading: '칠 벌', meaning: '치다', strokes: 6 },
        { char: '筏', examples: ['뗏목', '벌(筏)', '목재', '배', '벌'], reading: '뗏목 벌', meaning: '뗏목', strokes: 12 },
        { char: '範', examples: ['모범(模範)', '범위(範圍)', '규범(規範)', '법', '본'], reading: '법 범', meaning: '법', strokes: 15 },
        { char: '梵', examples: ['범어(梵語)', '범천(梵天)', '산스크리트', '청정', '범'], reading: '범어 범', meaning: '범어', strokes: 11 },
        { char: '泛', examples: ['광범(廣泛)', '범람(泛濫)', '뜨다', '넓다', '범'], reading: '뜰 범', meaning: '뜨다', strokes: 7 },
        { char: '犯', examples: ['범죄(犯罪)', '범인(犯人)', '침범(侵犯)', '범하다', '어기다'], reading: '범할 범', meaning: '범하다', strokes: 5 },
        { char: '凡', examples: ['범인(凡人)', '평범(平凡)', '범속(凡俗)', '모두', '보통'], reading: '무릇 범', meaning: '무릇', strokes: 3 },
        // ㅅ
        { char: '僧', examples: ['승려(僧侶)', '중', '스님', '고승(高僧)', '승방(僧房)'], reading: '중 승', meaning: '중', strokes: 14 },
        { char: '璽', examples: ['옥새(玉璽)', '국새(國璽)', '인새(印璽)', '왕의 도장', '새'], reading: '옥새 새', meaning: '옥새', strokes: 19 },
        { char: '塞', examples: ['폐색(閉塞)', '요새(要塞)', '색', '막다', '교통체증'], reading: '막을 색', meaning: '막다', strokes: 13 },
        { char: '索', examples: ['탐색(探索)', '색출(索出)', '검색(檢索)', '색', '찾다'], reading: '찾을 색', meaning: '찾다', strokes: 10 },
        { char: '傘', examples: ['우산', '양산(陽傘)', '낙하산(落下傘)', '산', '비산'], reading: '우산 산', meaning: '우산', strokes: 12 },
        { char: '汕', examples: ['물고기많다', '산(汕)', '풍부', '어장', '산'], reading: '물고기많을 산', meaning: '물고기많다', strokes: 6 },
        { char: '珊', examples: ['산호(珊瑚)', '산호초', '보석', '산', '바다'], reading: '산호 산', meaning: '산호', strokes: 9 },
        { char: '刪', examples: ['삭제(刪除)', '깎다', '삭감(削減)', '산', '지우다'], reading: '깎을 산', meaning: '깎다', strokes: 7 },
        { char: '酸', examples: ['산성(酸性)', '황산(黃酸)', '시다', '산미(酸味)', '산'], reading: '실 산', meaning: '시다', strokes: 14 },
        { char: '散', examples: ['분산(分散)', '해산(解散)', '산책(散策)', '산', '흩어지다'], reading: '흩어질 산', meaning: '흩어지다', strokes: 12 },
        { char: '霜', examples: ['서리', '상강(霜降)', '하서(夏霜)', '백상(白霜)', '서리꽃'], reading: '서리 상', meaning: '서리', strokes: 17 },
        { char: '喪', examples: ['상실(喪失)', '잃다', '소실(喪失)', '상', '없어지다'], reading: '잃을 상', meaning: '잃다', strokes: 12 },
        { char: '桑', examples: ['상전(桑田)', '뽕나무', '상밭', '뽕잎', '상'], reading: '뽕나무 상', meaning: '뽕나무', strokes: 10 },
        { char: '喪', examples: ['상사(喪事)', '장례', '상복(喪服)', '상주(喪主)', '상'], reading: '장례 상', meaning: '장례', strokes: 12 },
        { char: '尙', examples: ['오히려', '상(尙)', '여전히', '상고(伏古)', '상'], reading: '오히려 상', meaning: '오히려', strokes: 8 },
        { char: '裳', examples: ['상하의(下衣)', '치마', '한복', '건곤상', '상'], reading: '치마 상', meaning: '치마', strokes: 14 },
        { char: '償', examples: ['보상(償)', '대상(償)', '배상', '갚다', '보답'], reading: '갚을 상', meaning: '갚다', strokes: 17 },
        { char: '傷', examples: ['상해(傷害)', '부상(負傷)', '중상(傷)', '다치다', '상처'], reading: '다칠 상', meaning: '다치다', strokes: 13 },
        { char: '嘗', examples: ['맛보다', '시식(嘗食)', '시음(嘗飲)', '상', '경험하다'], reading: '맛볼 상', meaning: '맛보다', strokes: 14 },
        { char: '箱', examples: ['상자', '보물상자', '수납함', '컨테이너', '상'], reading: '상자 상', meaning: '상자', strokes: 15 },
        { char: '緖', examples: ['두서(頭緖)', '실마리', '시초(始緖)', '서론(緖論)', '서'], reading: '실마리 서', meaning: '실마리', strokes: 14 },
        { char: '庶', examples: ['서민(庶民)', '여럿', '서물(庶物)', '서', '백성'], reading: '여러 서', meaning: '여럿', strokes: 11 },
        { char: '恕', examples: ['용서(寬恕)', '서량(恕量)', '용서하다', '서', '너그럽다'], reading: '용서할 서', meaning: '용서하다', strokes: 10 },
        { char: '曙', examples: ['서광(曙光)', '새벽', '동틀녘', '서색(曙色)', '서'], reading: '새벽 서', meaning: '새벽', strokes: 18 },
        { char: '暑', examples: ['서열(暑熱)', '더위', '폭서(暴暑)', '서여름', '서'], reading: '더울 서', meaning: '덥다', strokes: 12 },
        { char: '鼠', examples: ['서역(鼠疫)', '쥐', '논둘기', '쥐해', '서'], reading: '쥐 서', meaning: '쥐', strokes: 13 },
        { char: '湑', examples: ['맑다', '서(湑)', '서수(湑水)', '맑을', '서'], reading: '맑을 서', meaning: '맑다', strokes: 12 },
        { char: '敍', examples: ['서술(敍述)', '펴다', '서사(敍事)', '서', '서술하다'], reading: '펼 서', meaning: '펴다', strokes: 11 },
        { char: '敘', examples: ['서술(敘述)', '펴다', '서사(敘事)', '서', '서술하다'], reading: '펼 서', meaning: '펴다', strokes: 11 },
        { char: '墅', examples: ['별장(別墅)', '집', '만서(墅)', '별장', '서'], reading: '집 서', meaning: '집', strokes: 14 },
        { char: '鋤', examples: ['호미', '매다', '밭다', '긁다', '서'], reading: '호미 서', meaning: '호미', strokes: 15 },
        { char: '薯', examples: ['고구마', '감자', '마', '토란', '서'], reading: '마 서', meaning: '마', strokes: 16 },
        { char: '蜀', examples: ['사천(四川)', '촉나라', '촉한(蜀漢)', '촉', '중국'], reading: '촉나라 촉', meaning: '촉나라', strokes: 13 },
        { char: '束', examples: ['결속(束)', '묶다', '속박(束縛)', '속', '제약'], reading: '묶을 속', meaning: '묶다', strokes: 7 },
        { char: '贖', examples: ['속죄(贖罪)', '속량(贖量)', '속죄하다', '속', '대속'], reading: '속죄할 속', meaning: '속죄하다', strokes: 23 },
        { char: '塑', examples: ['조소(塑)', '빚다', '소상(塑像)', '소', '성형'], reading: '빚을 소', meaning: '빚다', strokes: 13 },
        { char: '蘇', examples: ['회소(蘇)', '되살리다', '소생(蘇生)', '소', '깨어나다'], reading: '되살릴 소', meaning: '되살리다', strokes: 19 },
        { char: '肅', examples: ['엄숙(厳肅)', '숨숙', '숙엄(肅厳)', '숙', '경건하다'], reading: '엄숙할 숙', meaning: '엄숙하다', strokes: 13 },
        { char: '宿', examples: ['숙박(宿泊)', '자다', '숙소(宿所)', '숙', '숫박'], reading: '잠 숙', meaning: '자다', strokes: 11 },
        { char: '淑', examples: ['숙녀(淑女)', '맑다', '숙덕(淑德)', '숙', '현숙'], reading: '맑을 숙', meaning: '맑다', strokes: 11 },
        { char: '孰', examples: ['누구', '숙(孰)', '숙지(孰知)', '숙', '어느'], reading: '누구 숙', meaning: '누구', strokes: 11 },
        { char: '塾', examples: ['서당(書塾)', '글방', '학당(學塾)', '숙', '서원'], reading: '글방 숙', meaning: '글방', strokes: 14 },
        { char: '叔', examples: ['숙부(叔父)', '아저씨', '숙모(叔母)', '숙', '삼촌'], reading: '아저씨 숙', meaning: '아저씨', strokes: 8 },
        { char: '菽', examples: ['숙수(菽水)', '콩', '숙봠(菽麥)', '숙', '팜'], reading: '콩 숙', meaning: '콩', strokes: 11 },
        { char: '耀', examples: ['창포', '손(耀)', '손초(耀초)', '손', '향기로운'], reading: '창포 손', meaning: '창포', strokes: 13 },
        { char: '損', examples: ['손해(損害)', '덜다', '손상(損傷)', '손', '손실'], reading: '덜 손', meaning: '덜다', strokes: 13 },
        { char: '筍', examples: ['죽순', '순채(筍菜)', '순', '대나무', '봄나물'], reading: '죽순 순', meaning: '죽순', strokes: 12 },
        { char: '旬', examples: ['순일(旬日)', '열흘', '상순(上旬)', '순', '십일'], reading: '열흘 순', meaning: '열흘', strokes: 6 },
        { char: '馴', examples: ['순화(馴化)', '길들이다', '순치(馴致)', '순', '순종'], reading: '길들일 순', meaning: '길들이다', strokes: 13 },
        { char: '循', examples: ['순환(循環)', '따르다', '순서(循序)', '순', '순환하다'], reading: '따를 순', meaning: '따르다', strokes: 12 },
        { char: '巡', examples: ['순찰(巡察)', '돌다', '순회(巡回)', '순', '순시'], reading: '돌 순', meaning: '돌다', strokes: 6 },
        { char: '殉', examples: ['순국(殉國)', '따라죽다', '순직(殉職)', '순', '순사'], reading: '따라죽을 순', meaning: '따라죽다', strokes: 10 },
        { char: '淳', examples: ['순박(淳朴)', '순박하다', '순후(淳厚)', '순', '순수'], reading: '순박할 순', meaning: '순박하다', strokes: 11 },
        { char: '醇', examples: ['순수(醇粹)', '순수하다', '순후(醇厚)', '순', '정순'], reading: '순수할 순', meaning: '순수하다', strokes: 15 },
        { char: '舜', examples: ['순임금', '중국 임금', '우순(虞舜)', '순', '요순'], reading: '순임금 순', meaning: '순임금', strokes: 12 },
        { char: '楯', examples: ['방패', '순(楯)', '방패순', '순', '보호'], reading: '방패 순', meaning: '방패', strokes: 13 },
        { char: '瞬', examples: ['순간(瞬間)', '눈깜짝하다', '일순(一瞬)', '순', '순식간'], reading: '눈깜짝할 순', meaning: '눈깜짝하다', strokes: 18 },
        { char: '脣', examples: ['구순(口脣)', '입술', '청순(唇脣)', '순', '입술'], reading: '입술 순', meaning: '입술', strokes: 11 },
        { char: '蓴', examples: ['순채', '수초', '순채국', '순', '수초'], reading: '순채 순', meaning: '순채', strokes: 14 },
        { char: '荀', examples: ['순나물', '순(荀)', '나물', '순', '식물'], reading: '순나물 순', meaning: '순나물', strokes: 9 },
        { char: '筍', examples: ['마디', '순(筍)', '죽순', '순', '대나무'], reading: '마디 순', meaning: '마디', strokes: 12 },
        // ㅇ
        { char: '岳', examples: ['악산(岳山)', '산', '태악(泰岳)', '악', '큐지'], reading: '산 악', meaning: '산', strokes: 8 },
        { char: '惡', examples: ['악인(惡人)', '악하다', '험악(險惡)', '악', '평악'], reading: '악할 악', meaning: '악하다', strokes: 12 },
        { char: '握', examples: ['악수(握手)', '쥐다', '악권(握權)', '악', '잡다'], reading: '쥘 악', meaning: '쥐다', strokes: 12 },
        { char: '渥', examples: ['풍성하다', '악(渥)', '풍성', '악', '많다'], reading: '풍성할 악', meaning: '풍성하다', strokes: 12 },
        { char: '鄂', examples: ['언덕', '악(鄂)', '지명', '악', '중국'], reading: '언덕 악', meaning: '언덕', strokes: 14 },
        { char: '顎', examples: ['하악(下顎)', '턱', '상악(上顎)', '악', '턱뼈'], reading: '턱 악', meaning: '턱', strokes: 18 },
        { char: '岸', examples: ['해안(海岸)', '언덕', '강안(江岸)', '안', '강변'], reading: '언덕 안', meaning: '언덕', strokes: 8 },
        { char: '晏', examples: ['늦다', '안(晏)', '안하(晏夏)', '안', '평안'], reading: '늦을 안', meaning: '늦다', strokes: 10 },
        { char: '案', examples: ['안건(案件)', '책상', '기안(起案)', '안', '방안'], reading: '책상 안', meaning: '책상', strokes: 10 },
        { char: '眼', examples: ['안과(眼科)', '눈', '안구(眼球)', '안', '눈동자'], reading: '눈 안', meaning: '눈', strokes: 11 },
        { char: '雁', examples: ['야생기러기', '기러기', '안열(雁列)', '안', '철새'], reading: '기러기 안', meaning: '기러기', strokes: 12 },
        { char: '鞍', examples: ['안장', '말안장', '안마(鞍马)', '안', '탈것'], reading: '안장 안', meaning: '안장', strokes: 15 },
        { char: '壓', examples: ['압력(壓力)', '누르다', '압박(壓迫)', '압', '압축'], reading: '누를 압', meaning: '누르다', strokes: 17 },
        { char: '鴨', examples: ['오리', '압육(鴨肉)', '철새', '압', '집오리'], reading: '오리 압', meaning: '오리', strokes: 16 },
        { char: '仰', examples: ['앙변(仰望)', '우러르다', '앙용(仰臥)', '앙', '올려다볔'], reading: '우러를 앙', meaning: '우러르다', strokes: 6 },
        { char: '央', examples: ['중앙(中央)', '가운데', '앙충(央忠)', '앙', '중심'], reading: '가운데 앙', meaning: '가운데', strokes: 5 },
        { char: '殃', examples: ['재앙(災殃)', '재앙', '화앙(禍殃)', '앙', '재해'], reading: '재앙 앙', meaning: '재앙', strokes: 9 },
        { char: '鴦', examples: ['원앙(鴛鴦)', '원앙', '덕조', '앙', '철새'], reading: '원앙 앙', meaning: '원앙', strokes: 16 },
        { char: '昻', examples: ['높다', '앙(昻)', '앙양(昻扬)', '앙', '오르다'], reading: '높을 앙', meaning: '높다', strokes: 8 },
        { char: '鸚', examples: ['앵무새', '앵무(鸚鵡)', '새', '앵', '조류'], reading: '앵무 앵', meaning: '앵무', strokes: 28 },
        { char: '罌', examples: ['항아리', '앵', '앵작(罌爵)', '앵', '그릇'], reading: '항아리 앵', meaning: '항아리', strokes: 22 },
        { char: '嬰', examples: ['영아(嬰兒)', '어린아이', '영유아', '영', '아기'], reading: '어린아이 영', meaning: '어린아이', strokes: 17 },
        { char: '纓', examples: ['갓끈', '영', '영끈(纓帶)', '영', '끈'], reading: '끈 영', meaning: '끈', strokes: 23 },
        { char: '迎', examples: ['환영(歡迎)', '맞다', '영접(迎接)', '영', '맞이하다'], reading: '맞을 영', meaning: '맞다', strokes: 8 },
        { char: '盈', examples: ['충영(充盈)', '차다', '영여(盈餘)', '영', '가득차다'], reading: '찼을 영', meaning: '차다', strokes: 9 },
        { char: '瑩', examples: ['빛나다', '영', '영석(瑩石)', '영', '물빛'], reading: '빛날 영', meaning: '빛나다', strokes: 15 },
        { char: '榮', examples: ['영광(榮光)', '영화', '번영(繁榮)', '영', '영화롭다'], reading: '영화 영', meaning: '영화', strokes: 14 },
        { char: '詠', examples: ['영시(詠詩)', '읊다', '영찬(詠讚)', '영', '시를 읊다'], reading: '읊을 영', meaning: '읊다', strokes: 12 },
        { char: '泳', examples: ['수영(水泳)', '헤엄치다', '영법(泳法)', '영', '헤엄'], reading: '헤엄칠 영', meaning: '헤엄치다', strokes: 8 },
        { char: '穎', examples: ['이삭', '영', '영민(穎敏)', '영', '뛰어나다'], reading: '이삭 영', meaning: '이삭', strokes: 16 },
        { char: '叡', examples: ['예지(叡智)', '밝다', '예성(叡聖)', '예', '총명하다'], reading: '밝을 예', meaning: '밝다', strokes: 16 },
        { char: '曳', examples: ['견예(牽曳)', '끌다', '예행(曳行)', '예', '끌고가다'], reading: '끌 예', meaning: '끌다', strokes: 6 },
        { char: '裔', examples: ['후예(後裔)', '후예', '자손', '예', '후손'], reading: '후예 예', meaning: '후예', strokes: 13 },
        { char: '銳', examples: ['예리(銳利)', '날카롭다', '예각(銳角)', '예', '날카로운'], reading: '날카로울 예', meaning: '날카롭다', strokes: 15 },
        // ㅈ
        { char: '慈', examples: ['자애(慈愛)', '사랑', '자비(慈悲)', '자', '어버이'], reading: '사랑 자', meaning: '사랑', strokes: 13 },
        { char: '滋', examples: ['자양(滋養)', '불어나다', '번식(滋殖)', '자', '자라다'], reading: '불어날 자', meaning: '불어나다', strokes: 12 },
        { char: '煮', examples: ['삶다', '자', '요리', '자', '끓이다'], reading: '삶을 자', meaning: '삶다', strokes: 12 },
        { char: '恣', examples: ['방자(恣意)', '방자하다', '자의(恣意)', '자', '마음대로'], reading: '방자할 자', meaning: '방자하다', strokes: 10 },
        { char: '刺', examples: ['자극(刺戟)', '찌르다', '명함(名刺)', '자', '찌르다'], reading: '찌를 자', meaning: '찌르다', strokes: 8 },
        { char: '咨', examples: ['자문(咨問)', '묻다', '상담', '자', '문의하다'], reading: '물을 자', meaning: '묻다', strokes: 9 },
        { char: '姿', examples: ['자세(姿勢)', '모양', '자태(姿態)', '자', '몸가짐'], reading: '모양 자', meaning: '모양', strokes: 9 },
        { char: '孜', examples: ['자자(孜孜)', '힘쓰다', '부지런하다', '자', '힘쓰다'], reading: '힘쓸 자', meaning: '힘쓰다', strokes: 7 },
        { char: '玆', examples: ['이', '자', '이때', '자', '여기'], reading: '이 자', meaning: '이', strokes: 9 },
        { char: '紫', examples: ['자주색', '자색(紫色)', '보라', '자', '자주'], reading: '자주 자', meaning: '자주', strokes: 12 },
        { char: '茲', examples: ['이', '자', '이때', '자', '여기'], reading: '이 자', meaning: '이', strokes: 9 },
        { char: '諮', examples: ['자문(諮問)', '묻다', '상담', '자', '문의하다'], reading: '물을 자', meaning: '묻다', strokes: 16 },
        { char: '資', examples: ['자본(資本)', '재물', '자금(資金)', '자', '자원'], reading: '재물 자', meaning: '재물', strokes: 13 },
        { char: '雌', examples: ['암컷', '자웅(雌雄)', '암수', '자', '암컷'], reading: '암컷 자', meaning: '암컷', strokes: 14 },
        { char: '作', examples: ['작품(作品)', '짓다', '저작(著作)', '작', '만들다'], reading: '지을 작', meaning: '짓다', strokes: 7 },
        { char: '昨', examples: ['어제', '작일(昨日)', '지난날', '작', '전날'], reading: '어제 작', meaning: '어제', strokes: 9 },
        { char: '爵', examples: ['작위(爵位)', '벼슬', '작록(爵祿)', '작', '관직'], reading: '벼슬 작', meaning: '벼슬', strokes: 17 },
        { char: '酌', examples: ['술따르다', '작', '참작(參酌)', '작', '헤아리다'], reading: '술따를 작', meaning: '술따르다', strokes: 10 },
        { char: '灼', examples: ['작열(灼熱)', '불사르다', '불타다', '작', '태우다'], reading: '불사를 작', meaning: '불사르다', strokes: 7 },
        { char: '斫', examples: ['찍다', '작', '베다', '작', '자르다'], reading: '찍을 작', meaning: '찍다', strokes: 9 },
        { char: '綽', examples: ['너그럽다', '작', '여유', '작', '넉넉하다'], reading: '너그러울 작', meaning: '너그럽다', strokes: 14 },
        { char: '雀', examples: ['참새', '작설(雀舌)', '새', '작', '조류'], reading: '참새 작', meaning: '참새', strokes: 11 },
        { char: '孱', examples: ['약하다', '잔', '허약', '잔', '약골'], reading: '약할 잔', meaning: '약하다', strokes: 13 },
        { char: '殘', examples: ['잔인(殘忍)', '남다', '잔학(殘虐)', '잔', '잔혹'], reading: '남을 잔', meaning: '남다', strokes: 12 },
        { char: '盞', examples: ['잔', '술잔', '찻잔', '잔', '그릇'], reading: '잔 잔', meaning: '잔', strokes: 13 },
        { char: '棧', examples: ['잔도(棧道)', '잔도', '산길', '잔', '다리'], reading: '잔도 잔', meaning: '잔도', strokes: 12 },
        { char: '潺', examples: ['졸졸흐르다', '잔', '물소리', '잔', '흐르다'], reading: '졸졸흐를 잔', meaning: '졸졸흐르다', strokes: 15 },
        { char: '孃', examples: ['처녀', '양', '낭자', '양', '아가씨'], reading: '처녀 양', meaning: '처녀', strokes: 19 },
        { char: '墻', examples: ['담장', '장', '성벽(城墻)', '장', '벽'], reading: '담 장', meaning: '담', strokes: 16 },
        { char: '莊', examples: ['장원(莊園)', '마을', '농장', '장', '촌락'], reading: '마을 장', meaning: '마을', strokes: 10 },
        { char: '粧', examples: ['화장(化粧)', '단장하다', '분장', '장', '꾸미다'], reading: '단장할 장', meaning: '단장하다', strokes: 12 },
        { char: '藏', examples: ['장서(藏書)', '감추다', '보장(保藏)', '장', '저장'], reading: '감출 장', meaning: '감추다', strokes: 17 },
        { char: '臟', examples: ['내장(內臟)', '오장', '장기', '장', '간장'], reading: '오장 장', meaning: '오장', strokes: 22 },
        { char: '裝', examples: ['장식(裝飾)', '꾸미다', '포장', '장', '치장'], reading: '꾸밀 장', meaning: '꾸미다', strokes: 13 },
        { char: '贓', examples: ['장물', '훔친물건', '장', '장', '도난품'], reading: '장물 장', meaning: '장물', strokes: 17 },
        { char: '匠', examples: ['장인(匠人)', '장인', '기술자', '장', '기능인'], reading: '장인 장', meaning: '장인', strokes: 6 },
        { char: '醬', examples: ['장', '된장', '간장', '장', '양념'], reading: '장 장', meaning: '장', strokes: 18 },
        { char: '丈', examples: ['장인(丈人)', '어른', '노인', '장', '시아버지'], reading: '어른 장', meaning: '어른', strokes: 3 },
        { char: '杖', examples: ['지팡이', '장', '목장(木杖)', '장', '지팡이'], reading: '지팡이 장', meaning: '지팡이', strokes: 7 },
        { char: '帳', examples: ['장막', '휘장', '모기장', '장', '커튼'], reading: '장막 장', meaning: '장막', strokes: 11 },
        { char: '障', examples: ['장애(障碍)', '막다', '장벽(障壁)', '장', '방해'], reading: '막을 장', meaning: '막다', strokes: 14 },
        { char: '狀', examples: ['상황(狀況)', '형상', '증서(狀書)', '장', '모습'], reading: '형상 장', meaning: '형상', strokes: 7 },
        { char: '掌', examples: ['장악(掌握)', '손바닥', '관장(管掌)', '장', '손'], reading: '손바닥 장', meaning: '손바닥', strokes: 12 },
        { char: '丞', examples: ['승상(丞相)', '돕다', '보좌', '승', '도우다'], reading: '도울 승', meaning: '돕다', strokes: 6 },
        { char: '載', examples: ['기재(記載)', '싣다', '적재(積載)', '재', '실리다'], reading: '실을 재', meaning: '싣다', strokes: 13 },
        { char: '栽', examples: ['재배(栽培)', '심다', '식재(植栽)', '재', '심기'], reading: '심을 재', meaning: '심다', strokes: 10 },
        { char: '哉', examples: ['어조사', '재', '감탄사', '재', '문장'], reading: '어조사 재', meaning: '어조사', strokes: 9 },
        { char: '宰', examples: ['재상(宰相)', '재상', '총리', '재', '장관'], reading: '재상 재', meaning: '재상', strokes: 10 },
        { char: '災', examples: ['재난(災難)', '재앙', '재해(災害)', '재', '화재'], reading: '재앙 재', meaning: '재앙', strokes: 7 },
        { char: '裁', examples: ['재판(裁判)', '마르다', '재단(裁斷)', '재', '결정하다'], reading: '마를 재', meaning: '마르다', strokes: 12 },
        { char: '材', examples: ['재료(材料)', '재목', '목재(木材)', '재', '자재'], reading: '재목 재', meaning: '재목', strokes: 7 },
        { char: '財', examples: ['재산(財産)', '재물', '재정(財政)', '재', '돈'], reading: '재물 재', meaning: '재물', strokes: 10 },
        { char: '在', examples: ['존재(存在)', '있다', '재직(在職)', '재', '위치하다'], reading: '있을 재', meaning: '있다', strokes: 6 },
        // ㅊ
        { char: '綵', examples: ['채색', '색깔', '오색', '채', '물들이다'], reading: '채색 채', meaning: '채색', strokes: 14 },
        { char: '採', examples: ['채집(採集)', '캐다', '채취(採取)', '채', '채광'], reading: '캘 채', meaning: '캐다', strokes: 11 },
        { char: '債', examples: ['부채(負債)', '빚', '채무(債務)', '채', '빚'], reading: '빚 채', meaning: '빚', strokes: 13 },
        { char: '冊', examples: ['책', '서책(書冊)', '책자', '책', '도서'], reading: '책 책', meaning: '책', strokes: 5 },
        { char: '柵', examples: ['울타리', '책', '난간', '책', '바리케이드'], reading: '울타리 책', meaning: '울타리', strokes: 9 },
        { char: '責', examples: ['책임(責任)', '꾸짖다', '책망(責望)', '책', '비난'], reading: '꾸짖을 책', meaning: '꾸짖다', strokes: 11 },
        { char: '處', examples: ['처리(處理)', '곳', '처분(處分)', '처', '장소'], reading: '곳 처', meaning: '곳', strokes: 11 },
        { char: '妻', examples: ['처', '아내', '부처(夫妻)', '처', '배우자'], reading: '처 처', meaning: '처', strokes: 8 },
        { char: '凄', examples: ['처량(凄涼)', '슬프다', '참혹', '처', '처참'], reading: '슬플 처', meaning: '슬프다', strokes: 10 },
        { char: '悽', examples: ['처량(悽涼)', '슬프다', '처절', '처', '비참'], reading: '슬플 처', meaning: '슬프다', strokes: 11 },
        { char: '棲', examples: ['서식(棲息)', '깃들다', '거주', '서', '살다'], reading: '깃들 서', meaning: '깃들다', strokes: 12 },
        { char: '淸', examples: ['청결(淸潔)', '맑다', '청정(淸淨)', '청', '깨끗'], reading: '맑을 청', meaning: '맑다', strokes: 11 },
        { char: '請', examples: ['청구(請求)', '청하다', '요청(要請)', '청', '신청'], reading: '청할 청', meaning: '청하다', strokes: 15 },
        { char: '聽', examples: ['청취(聽取)', '듣다', '경청(傾聽)', '청', '들리다'], reading: '들을 청', meaning: '듣다', strokes: 22 },
        { char: '廳', examples: ['청사(廳舍)', '청사', '관청', '청', '건물'], reading: '청사 청', meaning: '청사', strokes: 25 },
        { char: '靑', examples: ['청색(靑色)', '푸르다', '청춘(靑春)', '청', '파랑'], reading: '푸를 청', meaning: '푸르다', strokes: 8 },
        { char: '菁', examples: ['꽃부리', '청', '정화(菁華)', '청', '꽃'], reading: '꽃부리 청', meaning: '꽃부리', strokes: 11 },
        { char: '晴', examples: ['청명(晴明)', '개다', '맑음', '청', '날씨'], reading: '갤 청', meaning: '개다', strokes: 12 },
        { char: '淸', examples: ['청결(淸潔)', '맑다', '청정(淸淨)', '청', '깨끗'], reading: '맑을 청', meaning: '맑다', strokes: 11 },
        { char: '凊', examples: ['차갑다', '청', '서늘', '청', '시원'], reading: '차가울 청', meaning: '차갑다', strokes: 10 },
        { char: '聰', examples: ['총명(聰明)', '귀밝다', '영리', '총', '똑똑'], reading: '귀밝을 총', meaning: '귀밝다', strokes: 17 },
        { char: '總', examples: ['총괄(總括)', '모으다', '총합', '총', '전체'], reading: '모을 총', meaning: '모으다', strokes: 17 },
        { char: '叢', examples: ['초목(草木叢)', '수풀', '덤불', '총', '숲'], reading: '수풀 총', meaning: '수풀', strokes: 18 },
        { char: '寵', examples: ['총애(寵愛)', '사랑', '총신', '총', '귀염'], reading: '사랑 총', meaning: '사랑', strokes: 19 },
        { char: '촌', examples: ['촌락(村落)', '마디', '단위', '촌', '치수'], reading: '마디 촌', meaning: '마디', strokes: 3 },
        { char: '村', examples: ['촌락(村落)', '마을', '농촌', '촌', '시골'], reading: '마을 촌', meaning: '마을', strokes: 7 },
        { char: '忖', examples: ['헤아리다', '촌', '추측', '촌', '짐작'], reading: '헤아릴 촌', meaning: '헤아리다', strokes: 6 },
        { char: '寸', examples: ['촌수(寸數)', '마디', '단위', '촌', '치수'], reading: '마디 촌', meaning: '마디', strokes: 3 },
        { char: '蹴', examples: ['차다', '축', '축구(蹴球)', '축', '발차기'], reading: '찰 축', meaning: '차다', strokes: 19 },
        { char: '縮', examples: ['축소(縮小)', '줄이다', '수축(收縮)', '축', '줄어들다'], reading: '줄일 축', meaning: '줄이다', strokes: 17 },
        { char: '祝', examples: ['축하(祝賀)', '빌다', '축복(祝福)', '축', '기원'], reading: '빌 축', meaning: '빌다', strokes: 9 },
        { char: '丑', examples: ['축시(丑時)', '소', '십이지', '축', '시간'], reading: '소 축', meaning: '소', strokes: 4 },
        { char: '畜', examples: ['축산(畜産)', '기르다', '가축(家畜)', '축', '동물'], reading: '기를 축', meaning: '기르다', strokes: 10 },
        { char: '築', examples: ['건축(建築)', '쌓다', '축조(築造)', '축', '건설'], reading: '쌓을 축', meaning: '쌓다', strokes: 16 },
        { char: '蓄', examples: ['저축(貯蓄)', '쌓다', '축적(蓄積)', '축', '모으다'], reading: '쌓을 축', meaning: '쌓다', strokes: 13 },
        { char: '逐', examples: ['축출(逐出)', '쫓다', '추방', '축', '쫓아내다'], reading: '쫓을 축', meaning: '쫓다', strokes: 11 },
        { char: '竺', examples: ['천축(天竺)', '천축', '인도', '축', '나라'], reading: '천축 축', meaning: '천축', strokes: 8 },
        { char: '燭', examples: ['촛불', '초', '등불', '촉', '불빛'], reading: '촛불 촉', meaning: '촛불', strokes: 17 },
        { char: '囑', examples: ['부탁(囑託)', '부탁하다', '당부', '촉', '위탁'], reading: '부탁할 촉', meaning: '부탁하다', strokes: 24 },
        { char: '觸', examples: ['접촉(接觸)', '닿다', '촉감(觸感)', '촉', '만지다'], reading: '닿을 촉', meaning: '닿다', strokes: 26 },
        { char: '矗', examples: ['높다', '축', '우뚝', '축', '솟다'], reading: '높을 축', meaning: '높다', strokes: 24 },
        // ㅌ
        { char: '坦', examples: ['평탄(平坦)', '평탄하다', '탄탄', '탄', '편안'], reading: '평탄할 탄', meaning: '평탄하다', strokes: 8 },
        { char: '呑', examples: ['삼키다', '탄', '음식', '탄', '먹다'], reading: '삼킬 탄', meaning: '삼키다', strokes: 7 },
        { char: '湯', examples: ['탕', '국', '온탕(溫湯)', '탕', '뜨거운물'], reading: '끓을 탕', meaning: '끓다', strokes: 12 },
        { char: '糖', examples: ['설탕(雪糖)', '엿', '당분', '당', '사탕'], reading: '엿 당', meaning: '엿', strokes: 16 },
        { char: '堂', examples: ['교회당', '집', '당당(堂堂)', '당', '건물'], reading: '집 당', meaning: '집', strokes: 11 },
        { char: '棠', examples: ['아가위나무', '당', '나무', '당', '식물'], reading: '아가위나무 당', meaning: '아가위나무', strokes: 12 },
        { char: '唐', examples: ['당나라', '당', '중국', '당', '왕조'], reading: '당나라 당', meaning: '당나라', strokes: 10 },
        { char: '溏', examples: ['진흙', '당', '늪', '당', '습지'], reading: '진흙 당', meaning: '진흙', strokes: 13 },
        { char: '踏', examples: ['답사(踏査)', '밟다', '답보(踏步)', '답', '걷다'], reading: '밟을 답', meaning: '밟다', strokes: 15 },
        { char: '撻', examples: ['치다', '달', '매질', '달', '때리다'], reading: '칠 달', meaning: '치다', strokes: 15 },
        { char: '奪', examples: ['쟁탈(爭奪)', '빼앗다', '탈취(奪取)', '탈', '빼앗기다'], reading: '빼앗을 탈', meaning: '빼앗다', strokes: 14 },
        { char: '脫', examples: ['탈출(脫出)', '벗다', '이탈(離脫)', '탈', '벗어나다'], reading: '벗을 탈', meaning: '벗다', strokes: 13 },
        { char: '呑', examples: ['삼키다', '탄', '음식', '탄', '먹다'], reading: '삼킬 탄', meaning: '삼키다', strokes: 7 },
        { char: '貪', examples: ['탐욕(貪慾)', '탐내다', '탐심(貪心)', '탐', '욕심'], reading: '탐낼 탐', meaning: '탐내다', strokes: 11 },
        { char: '耽', examples: ['빠지다', '탐', '몰두', '탐', '중독'], reading: '빠질 탐', meaning: '빠지다', strokes: 10 },
        { char: '探', examples: ['탐험(探險)', '찾다', '탐구(探究)', '탐', '조사'], reading: '찾을 탐', meaning: '찾다', strokes: 11 },
        { char: '塔', examples: ['탑', '석탑(石塔)', '첨탑', '탑', '건축물'], reading: '탑 탑', meaning: '탑', strokes: 13 },
        { char: '搭', examples: ['얹다', '탑', '탑승(搭乘)', '탑', '타다'], reading: '얹을 탑', meaning: '얹다', strokes: 12 },
        { char: '榻', examples: ['평상', '탑', '침상', '탑', '침대'], reading: '평상 탑', meaning: '평상', strokes: 14 },
        { char: '撻', examples: ['치다', '달', '매질', '달', '때리다'], reading: '칠 달', meaning: '치다', strokes: 15 },
        { char: '泰', examples: ['태평(泰平)', '크다', '태산(泰山)', '태', '평안'], reading: '클 태', meaning: '크다', strokes: 10 },
        { char: '汰', examples: ['씻다', '태', '정리', '태', '선별'], reading: '일을 태', meaning: '씻다', strokes: 7 },
        { char: '怠', examples: ['태만(怠慢)', '게으르다', '나태(懶怠)', '태', '게으름'], reading: '게으를 태', meaning: '게으르다', strokes: 9 },
        { char: '殆', examples: ['위태(危殆)', '위태하다', '거의', '태', '위험'], reading: '위태할 태', meaning: '위태하다', strokes: 9 },
        { char: '態', examples: ['태도(態度)', '모양', '상태(狀態)', '태', '자세'], reading: '모양 태', meaning: '모양', strokes: 14 },
        { char: '胎', examples: ['태아(胎兒)', '아이배다', '임신', '태', '태반'], reading: '아이밸 태', meaning: '아이배다', strokes: 9 },
        { char: '苔', examples: ['이끼', '태', '녹조', '태', '식물'], reading: '이끼 태', meaning: '이끼', strokes: 8 },
        { char: '擇', examples: ['선택(選擇)', '가리다', '택일(擇日)', '택', '고르다'], reading: '가릴 택', meaning: '가리다', strokes: 17 },
        { char: '宅', examples: ['주택(住宅)', '집', '가택(家宅)', '택', '집'], reading: '집 택', meaning: '집', strokes: 6 },
        { char: '澤', examples: ['은택(恩澤)', '못', '택지(澤地)', '택', '습지'], reading: '못 택', meaning: '못', strokes: 16 },
        // ㅍ
        { char: '罷', examples: ['파업(罷業)', '그만두다', '파면(罷免)', '파', '중단'], reading: '그만둘 파', meaning: '그만두다', strokes: 15 },
        { char: '派', examples: ['파벌(派閥)', '갈래', '학파(學派)', '파', '무리'], reading: '갈래 파', meaning: '갈래', strokes: 9 },
        { char: '破', examples: ['파괴(破壞)', '깨뜨리다', '파손(破損)', '파', '부수다'], reading: '깨뜨릴 파', meaning: '깨뜨리다', strokes: 10 },
        { char: '頗', examples: ['자못', '파', '상당히', '파', '꽤'], reading: '자못 파', meaning: '자못', strokes: 14 },
        { char: '波', examples: ['파도(波濤)', '물결', '파장(波長)', '파', '파동'], reading: '물결 파', meaning: '물결', strokes: 8 },
        { char: '播', examples: ['방송(放送)', '뿌리다', '파종(播種)', '파', '전파'], reading: '뿌릴 파', meaning: '뿌리다', strokes: 15 },
        { char: '坡', examples: ['비탈', '파', '경사', '파', '언덕'], reading: '비탈 파', meaning: '비탈', strokes: 8 },
        { char: '把', examples: ['파악(把握)', '잡다', '장악', '파', '쥐다'], reading: '잡을 파', meaning: '잡다', strokes: 7 },
        { char: '爬', examples: ['긁다', '파', '기어가다', '파', '기다'], reading: '긁을 파', meaning: '긁다', strokes: 8 },
        { char: '琶', examples: ['비파(琵琶)', '비파', '악기', '파', '현악기'], reading: '비파 파', meaning: '비파', strokes: 12 },
        { char: '杷', examples: ['비파(枇杷)', '비파', '과일', '파', '나무'], reading: '비파 파', meaning: '비파', strokes: 8 },
        { char: '覇', examples: ['패권(覇權)', '으뜸', '우두머리', '패', '주인'], reading: '으뜸 패', meaning: '으뜸', strokes: 19 },
        { char: '敗', examples: ['패배(敗北)', '패하다', '실패(失敗)', '패', '지다'], reading: '패할 패', meaning: '패하다', strokes: 11 },
        { char: '貝', examples: ['조개', '패', '조개껍질', '패', '어패류'], reading: '조개 패', meaning: '조개', strokes: 7 },
        { char: '肺', examples: ['폐(肺)', '허파', '폐렴(肺炎)', '폐', '장기'], reading: '허파 폐', meaning: '허파', strokes: 9 },
        { char: '廢', examples: ['폐기(廢棄)', '폐하다', '폐지(廢止)', '폐', '버리다'], reading: '폐할 폐', meaning: '폐하다', strokes: 15 },
        { char: '閉', examples: ['폐쇄(閉鎖)', '닫다', '폐문(閉門)', '폐', '닫히다'], reading: '닫을 폐', meaning: '닫다', strokes: 11 },
        { char: '幣', examples: ['폐백', '화폐(貨幣)', '돈', '폐', '선물'], reading: '폐백 폐', meaning: '폐백', strokes: 15 },
        { char: '蔽', examples: ['은폐(隱蔽)', '가리다', '엄폐', '폐', '가림'], reading: '가릴 폐', meaning: '가리다', strokes: 15 },
        { char: '弊', examples: ['폐단(弊端)', '폐단', '폐해(弊害)', '폐', '해로움'], reading: '폐단 폐', meaning: '폐단', strokes: 14 },
        { char: '泡', examples: ['거품', '포', '비누', '포', '물거품'], reading: '거품 포', meaning: '거품', strokes: 8 },
        { char: '咆', examples: ['부르짖다', '포', '으르렁', '포', '외치다'], reading: '부르짖을 포', meaning: '부르짖다', strokes: 8 },
        { char: '抱', examples: ['포옹(抱擁)', '안다', '포용(包容)', '포', '껴안다'], reading: '안을 포', meaning: '안다', strokes: 8 },
        { char: '砲', examples: ['대포(大砲)', '큰돌', '포탄(砲彈)', '포', '무기'], reading: '큰돌 포', meaning: '큰돌', strokes: 10 },
        { char: '袍', examples: ['도포', '포', '의복', '포', '옷'], reading: '옷 포', meaning: '옷', strokes: 10 },
        { char: '鮑', examples: ['전복', '포', '어패류', '포', '조개'], reading: '전복 포', meaning: '전복', strokes: 15 },
        { char: '布', examples: ['포백(布帛)', '베', '발표(發表)', '포', '천'], reading: '베 포', meaning: '베', strokes: 5 },
        { char: '怖', examples: ['공포(恐怖)', '두려워하다', '무서움', '포', '두려움'], reading: '두려워할 포', meaning: '두려워하다', strokes: 8 },
        { char: '浦', examples: ['포구(浦口)', '개', '해변', '포', '항구'], reading: '개 포', meaning: '개', strokes: 10 },
        { char: '捕', examples: ['포획(捕獲)', '잡다', '체포(逮捕)', '포', '잡음'], reading: '잡을 포', meaning: '잡다', strokes: 10 },
        { char: '普', examples: ['보급(普及)', '널리', '보편(普遍)', '보', '일반'], reading: '널리 보', meaning: '널리', strokes: 12 },
        { char: '匍', examples: ['기어다니다', '포', '전진', '포', '포복'], reading: '기어다닐 포', meaning: '기어다니다', strokes: 9 },
        { char: '莆', examples: ['마름', '포', '식물', '포', '수초'], reading: '마름 포', meaning: '마름', strokes: 10 },
        { char: '葡', examples: ['포도(葡萄)', '포도', '과일', '포', '과수'], reading: '포도 포', meaning: '포도', strokes: 12 },
        { char: '蒲', examples: ['부들', '포', '식물', '포', '풀'], reading: '부들 포', meaning: '부들', strokes: 13 },
        { char: '逋', examples: ['빚지다', '포', '도망', '포', '피하다'], reading: '빚질 포', meaning: '빚지다', strokes: 10 },
        { char: '浮', examples: ['부유(浮游)', '뜨다', '부상(浮上)', '부', '떠오르다'], reading: '뜰 부', meaning: '뜨다', strokes: 10 },
        { char: '孵', examples: ['부화(孵化)', '깔다', '알', '부', '부화하다'], reading: '깔 부', meaning: '깔다', strokes: 14 },
        { char: '腐', examples: ['부패(腐敗)', '썩다', '부식(腐蝕)', '부', '부패하다'], reading: '썩을 부', meaning: '썩다', strokes: 14 },
        { char: '敷', examples: ['부설(敷設)', '펴다', '부포(敷布)', '부', '깔다'], reading: '펼 부', meaning: '펴다', strokes: 15 },
        { char: '膚', examples: ['피부(皮膚)', '살', '피부', '부', '살결'], reading: '살 부', meaning: '살', strokes: 15 },
        { char: '斧', examples: ['도끼', '부', '무기', '부', '연장'], reading: '도끼 부', meaning: '도끼', strokes: 8 },
        { char: '簿', examples: ['장부(帳簿)', '장부', '문서', '부', '기록'], reading: '장부 부', meaning: '장부', strokes: 19 },
        // ㅎ
        { char: '鶴', examples: ['학', '두루미', '백학(白鶴)', '학', '새'], reading: '학 학', meaning: '학', strokes: 21 },
        { char: '寒', examples: ['한랭(寒冷)', '춥다', '추위', '한', '겨울'], reading: '찰 한', meaning: '춥다', strokes: 12 },
        { char: '恨', examples: ['원한(怨恨)', '한', '유감(遺憾)', '한', '후회'], reading: '한 한', meaning: '한', strokes: 9 },
        { char: '限', examples: ['한계(限界)', '한하다', '제한(制限)', '한', '한도'], reading: '한할 한', meaning: '한하다', strokes: 9 },
        { char: '閑', examples: ['한가(閑暇)', '한가하다', '여유', '한', '한가함'], reading: '한가할 한', meaning: '한가하다', strokes: 12 },
        { char: '旱', examples: ['가뭄', '한', '한발(旱魃)', '한', '가물다'], reading: '가뭄 한', meaning: '가뭄', strokes: 7 },
        { char: '汗', examples: ['땀', '한', '땀방울', '한', '발한'], reading: '땀 한', meaning: '땀', strokes: 6 },
        { char: '漢', examples: ['한강(漢江)', '한수', '한자(漢字)', '한', '중국'], reading: '한수 한', meaning: '한수', strokes: 14 },
        { char: '翰', examples: ['붓', '한', '문한(文翰)', '한', '글'], reading: '붓 한', meaning: '붓', strokes: 16 },
        { char: '含', examples: ['포함(包含)', '머금다', '함유(含有)', '함', '포함하다'], reading: '머금을 함', meaning: '머금다', strokes: 7 },
        { char: '咸', examples: ['다', '함', '모두', '함', '전부'], reading: '다 함', meaning: '다', strokes: 9 },
        { char: '函', examples: ['함', '상자', '서함(書函)', '함', '편지'], reading: '함 함', meaning: '함', strokes: 8 },
        { char: '陷', examples: ['함정(陷穽)', '빠지다', '함락(陷落)', '함', '빠뜨리다'], reading: '빠질 함', meaning: '빠지다', strokes: 10 },
        { char: '艦', examples: ['군함(軍艦)', '군함', '함대(艦隊)', '함', '배'], reading: '군함 함', meaning: '군함', strokes: 21 },
        { char: '銜', examples: ['물다', '함', '직함(職銜)', '함', '물고'], reading: '물 함', meaning: '물다', strokes: 14 },
        { char: '蛤', examples: ['조개', '합', '대합', '합', '어패류'], reading: '조개 합', meaning: '조개', strokes: 12 },
        { char: '合', examples: ['합동(合同)', '합하다', '결합(結合)', '합', '합치다'], reading: '합할 합', meaning: '합하다', strokes: 6 },
        { char: '盒', examples: ['합', '상자', '함', '합', '그릇'], reading: '합 합', meaning: '합', strokes: 11 },
        { char: '閤', examples: ['문', '합', '대문', '합', '문짝'], reading: '문 합', meaning: '문', strokes: 14 },
        { char: '項', examples: ['항목(項目)', '목덜미', '사항(事項)', '항', '조항'], reading: '목덜미 항', meaning: '목덜미', strokes: 12 },
        { char: '抗', examples: ['저항(抵抗)', '막다', '항거(抗拒)', '항', '대항'], reading: '막을 항', meaning: '막다', strokes: 7 },
        { char: '航', examples: ['항해(航海)', '배', '비행(飛航)', '항', '항공'], reading: '배 항', meaning: '배', strokes: 10 },
        { char: '頑', examples: ['완고(頑固)', '완고하다', '고집', '완', '완강'], reading: '완고할 완', meaning: '완고하다', strokes: 13 },
        { char: '港', examples: ['항구(港口)', '항구', '공항(空港)', '항', '무역항'], reading: '항구 항', meaning: '항구', strokes: 12 },
        { char: '巷', examples: ['골목', '항', '거리', '항', '골목길'], reading: '골목 항', meaning: '골목', strokes: 9 },
        { char: '缸', examples: ['항아리', '항', '독', '항', '그릇'], reading: '항아리 항', meaning: '항아리', strokes: 9 },
        { char: '享', examples: ['향유(享有)', '누리다', '향락(享樂)', '향', '즐기다'], reading: '누릴 향', meaning: '누리다', strokes: 8 },
        { char: '鄕', examples: ['고향(故鄕)', '고향', '향촌(鄕村)', '향', '시골'], reading: '고향 향', meaning: '고향', strokes: 13 },
        { char: '向', examples: ['방향(方向)', '향하다', '지향(志向)', '향', '향하다'], reading: '향할 향', meaning: '향하다', strokes: 6 },
        { char: '嚮', examples: ['향하다', '향', '방향', '향', '지향'], reading: '향할 향', meaning: '향하다', strokes: 18 },
        { char: '香', examples: ['향기(香氣)', '향기', '향수(香水)', '향', '냄새'], reading: '향기 향', meaning: '향기', strokes: 9 },
        { char: '響', examples: ['반향(反響)', '울리다', '영향(影響)', '향', '소리'], reading: '울릴 향', meaning: '울리다', strokes: 20 },
        { char: '許', examples: ['허락(許諾)', '허락하다', '허가(許可)', '허', '인정'], reading: '허락할 허', meaning: '허락하다', strokes: 11 },
        { char: '虛', examples: ['허무(虛無)', '비다', '공허(空虛)', '허', '헛되다'], reading: '빌 허', meaning: '비다', strokes: 12 },
        { char: '赫', examples: ['빛나다', '혁', '현저', '혁', '드러나다'], reading: '빛날 혁', meaning: '빛나다', strokes: 14 },
        { char: '劾', examples: ['탄핵(彈劾)', '탄핵하다', '조사', '핵', '추궁'], reading: '탄핵할 핵', meaning: '탄핵하다', strokes: 9 },
        { char: '核', examples: ['핵심(核心)', '씨', '원자핵(原子核)', '핵', '중심'], reading: '씨 핵', meaning: '씨', strokes: 10 },
        { char: '嫌', examples: ['혐오(嫌惡)', '싫어하다', '기피(忌避)', '혐', '싫음'], reading: '싫어할 혐', meaning: '싫어하다', strokes: 13 },
        { char: '協', examples: ['협력(協力)', '화합하다', '협동(協同)', '협', '협조'], reading: '화합할 협', meaning: '화합하다', strokes: 8 },
        { char: '脅', examples: ['협박(脅迫)', '겁내다', '위협(威脅)', '협', '협박하다'], reading: '겁낼 협', meaning: '겁내다', strokes: 10 },
        { char: '夾', examples: ['끼다', '협', '협착(狹窄)', '협', '끼우다'], reading: '낄 협', meaning: '끼다', strokes: 7 },
        { char: '俠', examples: ['협객(俠客)', '협객', '의협(義俠)', '협', '협력'], reading: '협객 협', meaning: '협객', strokes: 9 },
        { char: '峽', examples: ['협곡(峽谷)', '골짜기', '해협(海峽)', '협', '좁은계곡'], reading: '골짜기 협', meaning: '골짜기', strokes: 9 },
        { char: '形', examples: ['형상(形象)', '모양', '형태(形態)', '형', '형체'], reading: '모양 형', meaning: '모양', strokes: 7 },
        { char: '螢', examples: ['반딧불', '형', '반딧불이', '형', '곤충'], reading: '반딧불 형', meaning: '반딧불', strokes: 16 },
        { char: '惠', examples: ['은혜(恩惠)', '은혜', '혜택(惠澤)', '혜', '베풀다'], reading: '은혜 혜', meaning: '은혜', strokes: 12 },
        { char: '慧', examples: ['지혜(智慧)', '슬기', '총명', '혜', '슬기롭다'], reading: '슬기 혜', meaning: '슬기', strokes: 15 },
        { char: '兮', examples: ['어조사', '혜', '감탄사', '혜', '문장'], reading: '어조사 혜', meaning: '어조사', strokes: 4 },
        { char: '戶', examples: ['지게', '호', '문', '호', '집'], reading: '지게 호', meaning: '지게', strokes: 4 },
        { char: '湖', examples: ['호수(湖水)', '호수', '강호(江湖)', '호', '연못'], reading: '호수 호', meaning: '호수', strokes: 12 },
        { char: '虎', examples: ['호랑이', '범', '맹호(猛虎)', '호', '호랑이'], reading: '범 호', meaning: '범', strokes: 8 },
        { char: '琥', examples: ['호박(琥珀)', '호박', '보석', '호', '보석'], reading: '호박 호', meaning: '호박', strokes: 13 },
        { char: '浩', examples: ['광대(浩大)', '넓다', '호탕(浩蕩)', '호', '넓고크다'], reading: '넓을 호', meaning: '넓다', strokes: 11 },
        { char: '皓', examples: ['희다', '호', '밝다', '호', '하얗다'], reading: '흰 호', meaning: '희다', strokes: 12 },
        { char: '鎬', examples: ['호미', '호', '농기구', '호', '연장'], reading: '호미 호', meaning: '호미', strokes: 18 },
        { char: '呼', examples: ['호출(呼出)', '부르다', '호흡(呼吸)', '호', '외치다'], reading: '부를 호', meaning: '부르다', strokes: 8 },
        { char: '號', examples: ['번호(番號)', '이름', '호령(號令)', '호', '명칭'], reading: '이름 호', meaning: '이름', strokes: 13 },
        { char: '惑', examples: ['미혹(迷惑)', '미혹하다', '의혹(疑惑)', '혹', '헷갈리다'], reading: '미혹할 혹', meaning: '미혹하다', strokes: 12 },
        { char: '或', examples: ['혹', '혹은', '어떤', '혹', '아니면'], reading: '혹 혹', meaning: '혹', strokes: 8 },
        { char: '酷', examples: ['혹독(酷毒)', '심하다', '잔혹(殘酷)', '혹', '가혹'], reading: '심할 혹', meaning: '심하다', strokes: 14 },
        { char: '渾', examples: ['혼연(渾然)', '온전하다', '혼연일체', '혼', '하나'], reading: '온전할 혼', meaning: '온전하다', strokes: 11 },
        { char: '魂', examples: ['영혼(靈魂)', '넋', '혼백(魂魄)', '혼', '정신'], reading: '넋 혼', meaning: '넋', strokes: 14 },
        { char: '昏', examples: ['어둡다', '혼', '혼미(昏迷)', '혼', '어리석다'], reading: '어두울 혼', meaning: '어둡다', strokes: 8 },
        { char: '混', examples: ['혼합(混合)', '섞이다', '혼란(混亂)', '혼', '혼동'], reading: '섞일 혼', meaning: '섞이다', strokes: 11 },
        { char: '忽', examples: ['홀연(忽然)', '홀연하다', '갑자기', '홀', '홀연히'], reading: '홀연할 홀', meaning: '홀연하다', strokes: 8 },
        { char: '笏', examples: ['홀', '홀기', '신하의예물', '홀', '의식도구'], reading: '홀 홀', meaning: '홀', strokes: 10 },
        { char: '弘', examples: ['홍대(弘大)', '넓다', '광대', '홍', '크다'], reading: '넓을 홍', meaning: '넓다', strokes: 5 },
        { char: '洪', examples: ['홍수(洪水)', '큰물', '범람', '홍', '물'], reading: '큰물 홍', meaning: '큰물', strokes: 10 },
        { char: '紅', examples: ['홍색(紅色)', '붉다', '빨강', '홍', '붉은색'], reading: '붉을 홍', meaning: '붉다', strokes: 9 },
        { char: '鴻', examples: ['큰기러기', '홍', '기러기', '홍', '새'], reading: '큰기러기 홍', meaning: '큰기러기', strokes: 17 },
        { char: '禍', examples: ['재앙(災禍)', '재앙', '화근(禍根)', '화', '재난'], reading: '재앙 화', meaning: '재앙', strokes: 14 },
        { char: '華', examples: ['화려(華麗)', '빛나다', '중화(中華)', '화', '꽃'], reading: '빛날 화', meaning: '빛나다', strokes: 12 },
        { char: '嘩', examples: ['떠들다', '화', '시끄럽다', '화', '소란'], reading: '떠들 화', meaning: '떠들다', strokes: 13 },
        { char: '譁', examples: ['떠들다', '화', '시끄럽다', '화', '소란'], reading: '떠들 화', meaning: '떠들다', strokes: 20 },
        { char: '劃', examples: ['획득(劃得)', '긋다', '구획(區劃)', '획', '나누다'], reading: '그을 획', meaning: '긋다', strokes: 14 },
        { char: '確', examples: ['확실(確實)', '확실하다', '정확(正確)', '확', '확고'], reading: '확실할 확', meaning: '확실하다', strokes: 15 },
        { char: '擴', examples: ['확대(擴大)', '넓히다', '확장(擴張)', '확', '확충'], reading: '넓힐 확', meaning: '넓히다', strokes: 18 },
        { char: '歡', examples: ['환영(歡迎)', '기쁘다', '환호(歡呼)', '환', '즐겁다'], reading: '기쁠 환', meaning: '기쁘다', strokes: 22 },
        { char: '換', examples: ['교환(交換)', '바꾸다', '환전(換錢)', '환', '바꾸다'], reading: '바꿀 환', meaning: '바꾸다', strokes: 12 },
        { char: '煥', examples: ['찬란(煥爛)', '빛나다', '환하다', '환', '환히'], reading: '빛날 환', meaning: '빛나다', strokes: 13 },
        { char: '丸', examples: ['환약(丸藥)', '둥글다', '알약', '환', '둥근모양'], reading: '둥글 환', meaning: '둥글다', strokes: 3 },
        { char: '患', examples: ['환자(患者)', '근심하다', '질환(疾患)', '환', '걱정'], reading: '근심할 환', meaning: '근심하다', strokes: 11 },
        { char: '喚', examples: ['환기(喚起)', '부르다', '호출', '환', '일깨우다'], reading: '부를 환', meaning: '부르다', strokes: 12 },
        { char: '還', examples: ['환원(還元)', '돌아오다', '반환(返還)', '환', '돌려주다'], reading: '돌아올 환', meaning: '돌아오다', strokes: 17 },
        { char: '慌', examples: ['황급(慌急)', '황급하다', '당황(慌)', '황', '급하다'], reading: '황급할 황', meaning: '황급하다', strokes: 12 },
        { char: '荒', examples: ['황폐(荒廢)', '거칠다', '황무지(荒蕪地)', '황', '거칠다'], reading: '거칠 황', meaning: '거칠다', strokes: 9 },
        { char: '黃', examples: ['황색(黃色)', '누르다', '노랑', '황', '노란색'], reading: '누를 황', meaning: '누르다', strokes: 12 },
        { char: '皇', examples: ['황제(皇帝)', '임금', '천황(天皇)', '황', '제왕'], reading: '임금 황', meaning: '임금', strokes: 9 },
        { char: '煌', examples: ['빛나다', '황', '찬란', '황', '빛'], reading: '빛날 황', meaning: '빛나다', strokes: 13 },
        { char: '晃', examples: ['빛나다', '황', '번쩍', '황', '환하다'], reading: '빛날 황', meaning: '빛나다', strokes: 10 },
        { char: '隍', examples: ['해자(解自)', '해자', '성밖도랑', '황', '성곽'], reading: '해자 황', meaning: '해자', strokes: 13 },
        { char: '蝗', examples: ['메뚜기', '황', '곤충', '황', '해충'], reading: '메뚜기 황', meaning: '메뚜기', strokes: 15 },
        { char: '揮', examples: ['지휘(指揮)', '두르다', '휘두르다', '휘', '흔들다'], reading: '두를 휘', meaning: '두르다', strokes: 12 },
        { char: '輝', examples: ['광휘(光輝)', '빛나다', '빛', '휘', '찬란'], reading: '빛날 휘', meaning: '빛나다', strokes: 15 },
        { char: '徽', examples: ['아름답다', '휘', '휘장', '휘', '표시'], reading: '아름다울 휘', meaning: '아름답다', strokes: 17 },
        { char: '麾', examples: ['지휘(指麾)', '지휘하다', '휘하(麾下)', '휘', '통솔'], reading: '지휘할 휘', meaning: '지휘하다', strokes: 15 },
        { char: '暉', examples: ['빛', '휘', '햇빛', '휘', '광휘'], reading: '빛 휘', meaning: '빛', strokes: 13 },
        { char: '携', examples: ['휴대(携帶)', '이끌다', '휴대폰', '휴', '가지다'], reading: '이끌 휴', meaning: '이끌다', strokes: 13 },
        { char: '戱', examples: ['놀다', '희', '유희(遊戲)', '희', '게임'], reading: '놀 희', meaning: '놀다', strokes: 15 },
        { char: '喜', examples: ['희열(喜悅)', '기쁘다', '환희(歡喜)', '희', '기쁨'], reading: '기쁠 희', meaning: '기쁘다', strokes: 12 },
        { char: '熙', examples: ['빛나다', '희', '번성', '희', '밝다'], reading: '빛날 희', meaning: '빛나다', strokes: 14 },
        { char: '熹', examples: ['빛나다', '희', '광명', '희', '밝다'], reading: '빛날 희', meaning: '빛나다', strokes: 16 },
        { char: '曦', examples: ['햇빛', '희', '아침햇살', '희', '빛'], reading: '햇빛 희', meaning: '햇빛', strokes: 20 },
        { char: '僖', examples: ['기쁘다', '희', '즐겁다', '희', '기쁨'], reading: '기쁠 희', meaning: '기쁘다', strokes: 14 },
        { char: '羲', examples: ['희생(犧牲)', '희생', '제사', '희', '바치다'], reading: '희생 희', meaning: '희생', strokes: 17 },
        { char: '稀', examples: ['희귀(稀貴)', '드물다', '희소(稀少)', '희', '드물게'], reading: '드물 희', meaning: '드물다', strokes: 12 },
        { char: '犧', examples: ['희생(犧牲)', '희생', '제물', '희', '바치다'], reading: '희생 희', meaning: '희생', strokes: 20 },
        { char: '戲', examples: ['연극(演戲)', '놀다', '유희(遊戲)', '희', '게임'], reading: '놀 희', meaning: '놀다', strokes: 17 }
    ],
    '1급': [
        // ㄱ
        { char: '嘉', examples: ['가례(嘉禮)', '아름답다', '가상(嘉尙)', '가', '기쁘다'], reading: '아름다울 가', meaning: '아름답다', strokes: 14 },
        { char: '呵', examples: ['꾸짖다', '가', '가책(呵責)', '가', '웃다'], reading: '꾸짖을 가', meaning: '꾸짖다', strokes: 8 },
        { char: '嫁', examples: ['시집가다', '가', '전가(轉嫁)', '가', '개가(改嫁)'], reading: '시집갈 가', meaning: '시집가다', strokes: 13 },
        { char: '稼', examples: ['경작', '가', '가동(稼動)', '가', '농사'], reading: '심을 가', meaning: '심다', strokes: 15 },
        { char: '苛', examples: ['가혹(苛酷)', '가혹하다', '가렴주구(苛斂誅求)', '가', '매섭다'], reading: '가혹할 가', meaning: '가혹하다', strokes: 9 },
        { char: '袈', examples: ['가사(袈裟)', '가사', '승복', '가', '옷'], reading: '가사 가', meaning: '가사', strokes: 11 },
        { char: '駕', examples: ['어가(御駕)', '멍에', '능가(凌駕)', '가', '타다'], reading: '멍에 가', meaning: '멍에', strokes: 15 },
        { char: '哥', examples: ['성씨', '가', '노래', '가', '형'], reading: '성 가', meaning: '성씨', strokes: 10 },
        { char: '恪', examples: ['삼가다', '각', '각별(恪別)', '각', '정성'], reading: '삼갈 각', meaning: '삼가다', strokes: 9 },
        { char: '殼', examples: ['지각(地殼)', '껍질', '갑각(甲殼)', '각', '껍데기'], reading: '껍질 각', meaning: '껍질', strokes: 12 },
        { char: '奸', examples: ['간사(奸邪)', '간사하다', '간신(奸臣)', '간', '교활'], reading: '간사할 간', meaning: '간사하다', strokes: 6 },
        { char: '墾', examples: ['개간(開墾)', '개간하다', '간전(墾田)', '간', '갈다'], reading: '개간할 간', meaning: '개간하다', strokes: 16 },
        { char: '澗', examples: ['산골물', '간', '계곡', '간', '물'], reading: '산골물 간', meaning: '산골물', strokes: 16 },
        { char: '癎', examples: ['간질(癎疾)', '질병', '지랄병', '간', '발작'], reading: '간질 간', meaning: '간질', strokes: 17 },
        { char: '竿', examples: ['낚싯대', '간', '장대', '간', '대나무'], reading: '낚싯대 간', meaning: '낚싯대', strokes: 9 },
        { char: '艱', examples: ['간난(艱難)', '어렵다', '간고(艱苦)', '간', '힘들다'], reading: '어려울 간', meaning: '어렵다', strokes: 17 },
        { char: '諫', examples: ['간언(諫言)', '간하다', '충간(忠諫)', '간', '충고'], reading: '간할 간', meaning: '간하다', strokes: 16 },
        { char: '揀', examples: ['택간(擇揀)', '가리다', '간택(揀擇)', '간', '고르다'], reading: '가릴 간', meaning: '가리다', strokes: 12 },
        { char: '喝', examples: ['공갈(恐喝)', '꾸짖다', '일갈(一喝)', '갈', '큰소리'], reading: '꾸짖을 갈', meaning: '꾸짖다', strokes: 12 },
        { char: '竭', examples: ['고갈(枯竭)', '다하다', '진력(盡力)', '갈', '매진하다'], reading: '다할 갈', meaning: '다하다', strokes: 14 },
        { char: '褐', examples: ['갈색(褐色)', '털옷', '갈탄(褐炭)', '갈', '밤색'], reading: '털옷 갈', meaning: '털옷', strokes: 14 },
        { char: '堪', examples: ['감내(堪耐)', '견디다', '난감(難堪)', '감', '참다'], reading: '견딜 감', meaning: '견디다', strokes: 12 },
        { char: '柑', examples: ['감귤(柑橘)', '귤나무', '감자(柑子)', '감', '귤'], reading: '귤나무 감', meaning: '귤나무', strokes: 9 },
        { char: '疳', examples: ['감질(疳疾)', '감질나다', '어린이병', '감', '질병'], reading: '감질 감', meaning: '감질', strokes: 10 },
        { char: '瞰', examples: ['조망(眺望)', '굽어보다', '조감(鳥瞰)', '감', '내려다보다'], reading: '굽어볼 감', meaning: '굽어보다', strokes: 17 },
        { char: '紺', examples: ['감색(紺色)', '짙은청색', '감청(紺靑)', '감', '남색'], reading: '감색 감', meaning: '감색', strokes: 11 },
        { char: '勘', examples: ['감안(勘案)', '헤아리다', '감고(勘考)', '감', '생각하다'], reading: '헤아릴 감', meaning: '헤아리다', strokes: 11 },
        { char: '匣', examples: ['갑', '상자', '성냥갑', '갑', '케이스'], reading: '갑 갑', meaning: '갑', strokes: 7 },
        { char: '閘', examples: ['수문(水門)', '갑문(閘門)', '문', '갑', '댐'], reading: '수문 갑', meaning: '수문', strokes: 13 },
        { char: '腔', examples: ['구강(口腔)', '비다', '복강(腹腔)', '강', '빈속'], reading: '빌 강', meaning: '비다', strokes: 12 },
        { char: '慷', examples: ['강개(慷慨)', '강개하다', '슬퍼하다', '강', '분개'], reading: '강개할 강', meaning: '강개하다', strokes: 14 },
        { char: '糠', examples: ['조강(糟糠)', '겨', '조강지처(糟糠之妻)', '강', '쌀겨'], reading: '겨 강', meaning: '겨', strokes: 17 },
        { char: '薑', examples: ['생강', '강', '생강차', '강', '양념'], reading: '생강 강', meaning: '생강', strokes: 17 },
        { char: '愾', examples: ['적개심(敵愾心)', '성내다', '분개', '개', '화내다'], reading: '성낼 개', meaning: '성내다', strokes: 13 },
        { char: '漑', examples: ['관개(灌漑)', '물대다', '수리', '개', '논물'], reading: '물댈 개', meaning: '물대다', strokes: 14 },
        { char: '凱', examples: ['개선(凱旋)', '개선문', '개가(凱歌)', '개', '이기다'], reading: '개선할 개', meaning: '개선하다', strokes: 12 },
        { char: '箇', examples: ['개소(箇所)', '낱', '개', '개', '장소'], reading: '낱 개', meaning: '낱', strokes: 14 },
        { char: '芥', examples: ['겨자', '개', '티끌', '개', '작은것'], reading: '겨자 개', meaning: '겨자', strokes: 8 },
        { char: '羹', examples: ['국', '갱', '양갱(羊羹)', '갱', '스프'], reading: '국 갱', meaning: '국', strokes: 19 },
        { char: '醵', examples: ['차출(醵出)', '추렴하다', '갹출(醵出)', '갹', '모으다'], reading: '추렴할 갹', meaning: '추렴하다', strokes: 20 },
        { char: '渠', examples: ['개천', '거', '도랑', '거', '수로'], reading: '개천 거', meaning: '개천', strokes: 12 },
        { char: '倨', examples: ['거만(倨慢)', '거만하다', '오만', '거', '건방지다'], reading: '거만할 거', meaning: '거만하다', strokes: 10 },
        { char: '腱', examples: ['건', '힘줄', '아킬레스건', '건', '근육'], reading: '힘줄 건', meaning: '힘줄', strokes: 13 },
        { char: '虔', examples: ['경건(敬虔)', '정성', '독실', '건', '공경'], reading: '정성 건', meaning: '정성', strokes: 10 },
        { char: '怯', examples: ['비겁(卑怯)', '겁내다', '겁쟁이', '겁', '두려워하다'], reading: '겁낼 겁', meaning: '겁내다', strokes: 8 },
        { char: '劫', examples: ['영겁(永劫)', '위협하다', '겁탈(劫奪)', '겁', '오랜시간'], reading: '위협할 겁', meaning: '위협하다', strokes: 7 },
        { char: '偈', examples: ['게송(偈頌)', '쉬다', '불교시', '게', '시'], reading: '쉴 게', meaning: '쉬다', strokes: 11 },
        { char: '檄', examples: ['격문(檄文)', '격문', '성명서', '격', '글'], reading: '격문 격', meaning: '격문', strokes: 17 },
        { char: '膈', examples: ['횡격막(橫膈膜)', '흉격', '가슴', '격', '칸막이'], reading: '흉격 격', meaning: '흉격', strokes: 14 },
        { char: '覡', examples: ['박수', '격', '무당', '격', '남자무당'], reading: '박수 격', meaning: '박수(남자무당)', strokes: 14 },
        { char: '繭', examples: ['누에고치', '견', '고치', '견', '방사'], reading: '고치 견', meaning: '누에고치', strokes: 19 },
        { char: '譴', examples: ['꾸짖다', '견', '견책(譴責)', '견', '질책'], reading: '꾸짖을 견', meaning: '꾸짖다', strokes: 21 },
        { char: '鵑', examples: ['두견이', '견', '소쩍새', '견', '새'], reading: '두견이 견', meaning: '두견이', strokes: 18 },
        { char: '勁', examples: ['강경(强勁)', '굳세다', '경속(勁速)', '경', '강하다'], reading: '굳셀 경', meaning: '굳세다', strokes: 9 },
        { char: '鯨', examples: ['고래', '경', '포경(捕鯨)', '경', '바다동물'], reading: '고래 경', meaning: '고래', strokes: 19 },
        { char: '憬', examples: ['동경(憧憬)', '깨닫다', '그리워하다', '경', '선망'], reading: '깨달을 경', meaning: '깨닫다', strokes: 15 },
        { char: '頸', examples: ['목', '경', '경동맥(頸動脈)', '경', '목덜미'], reading: '목 경', meaning: '목', strokes: 16 },
        { char: '莖', examples: ['줄기', '경', '음경(陰莖)', '경', '식물줄기'], reading: '줄기 경', meaning: '줄기', strokes: 11 },
        { char: '脛', examples: ['정강이', '경', '다리', '경', '신체'], reading: '정강이 경', meaning: '정강이', strokes: 11 },
        { char: '磬', examples: ['편경(編磬)', '경쇠', '악기', '경', '타악기'], reading: '경쇠 경', meaning: '경쇠', strokes: 16 },
        { char: '痙', examples: ['경련(痙攣)', '경련하다', '떨림', '경', '마비'], reading: '경련할 경', meaning: '경련하다', strokes: 12 },
        { char: '梗', examples: ['뇌경색(腦梗塞)', '대개', '경색', '경', '막히다'], reading: '대개 경', meaning: '대개', strokes: 11 },
        { char: '悸', examples: ['심계(心悸)', '두근거리다', '동계(動悸)', '계', '떨리다'], reading: '두근거릴 계', meaning: '두근거리다', strokes: 11 },
        { char: '敲', examples: ['퇴고(推敲)', '두드리다', '고타(敲打)', '고', '다듬다'], reading: '두드릴 고', meaning: '두드리다', strokes: 14 },
        { char: '辜', examples: ['무고(無辜)', '허물', '죄', '고', '죄과'], reading: '허물 고', meaning: '허물', strokes: 12 },
        { char: '袴', examples: ['바지', '고', '의복', '고', '바짓가랑이'], reading: '바지 고', meaning: '바지', strokes: 10 },
        { char: '拷', examples: ['고문(拷問)', '고문하다', '문초', '고', '때리다'], reading: '고문할 고', meaning: '고문하다', strokes: 9 },
        { char: '叩', examples: ['고두(叩頭)', '두드리다', '노크', '고', '절하다'], reading: '두드릴 고', meaning: '두드리다', strokes: 5 },
        { char: '股', examples: ['고관절(股關節)', '넓적다리', '다리', '고', '허벅지'], reading: '넓적다리 고', meaning: '넓적다리', strokes: 8 },
        { char: '呱', examples: ['고고(呱呱)', '울다', '울음소리', '고', '태어나다'], reading: '울 고', meaning: '울다', strokes: 8 },
        { char: '膏', examples: ['고약(膏藥)', '기름', '석고(石膏)', '고', '연고'], reading: '기름 고', meaning: '기름', strokes: 14 },
        { char: '痼', examples: ['고질(痼疾)', '고질병', '질병', '고', '병'], reading: '고질 고', meaning: '고질', strokes: 13 },
        { char: '錮', examples: ['금고(禁錮)', '가두다', '감금', '고', '막다'], reading: '가둘 고', meaning: '가두다', strokes: 16 },
        { char: '梏', examples: ['차고(銬梏)', '수갑', '족쇄', '고', '구속'], reading: '수갑 고', meaning: '수갑', strokes: 11 },
        { char: '鵠', examples: ['고니', '고', '백조', '고', '과녁'], reading: '고니 고', meaning: '고니', strokes: 18 },
        { char: '昆', examples: ['곤충(昆蟲)', '맏', '후손', '곤', '벌레'], reading: '맏 곤', meaning: '맏', strokes: 8 },
        { char: '棍', examples: ['곤봉(棍棒)', '몽둥이', '막대기', '곤', '방망이'], reading: '몽둥이 곤', meaning: '몽둥이', strokes: 12 },
        { char: '袞', examples: ['곤룡포(袞龍袍)', '곤룡포', '임금옷', '곤', '의복'], reading: '곤룡포 곤', meaning: '곤룡포', strokes: 10 },
        { char: '汨', examples: ['골몰(汨沒)', '빠지다', '몰두', '골', '잠기다'], reading: '골 몰', meaning: '골몰하다', strokes: 8 },
        { char: '鞏', examples: ['공고(鞏固)', '굳다', '단단하다', '공', '튼튼하다'], reading: '굳을 공', meaning: '굳다', strokes: 15 },
        { char: '拱', examples: ['공수(拱手)', '팔짱끼다', '두손맞잡다', '공', '인사하다'], reading: '팔짱낄 공', meaning: '팔짱끼다', strokes: 9 },
        { char: '顆', examples: ['과립(顆粒)', '낱알', '알갱이', '과', '둥근것'], reading: '낱알 과', meaning: '낱알', strokes: 17 },
        { char: '廓', examples: ['윤곽(輪廓)', '둘레', '외곽(外廓)', '곽', '테두리'], reading: '둘레 곽', meaning: '둘레', strokes: 14 },
        { char: '槨', examples: ['석곽(石槨)', '덧널', '관', '곽', '널'], reading: '덧널 곽', meaning: '덧널', strokes: 15 },
        { char: '藿', examples: ['미역', '곽', '콩잎', '곽', '향초'], reading: '콩잎 곽', meaning: '콩잎', strokes: 20 },
        { char: '棺', examples: ['관', '널', '입관(入棺)', '관', '장례'], reading: '널 관', meaning: '널', strokes: 12 },
        { char: '顴', examples: ['관골(顴骨)', '광대뼈', '얼굴', '관', '뼈'], reading: '광대뼈 관', meaning: '광대뼈', strokes: 26 },
        { char: '灌', examples: ['관개(灌漑)', '물대다', '관목(灌木)', '관', '붓다'], reading: '물댈 관', meaning: '물대다', strokes: 21 },
        { char: '刮', examples: ['괄목(刮目)', '깎다', '비비다', '괄', '긁다'], reading: '깎을 괄', meaning: '깎다', strokes: 8 },
        { char: '括', examples: ['일괄(一括)', '묶다', '총괄(總括)', '괄', '포괄'], reading: '묶을 괄', meaning: '묶다', strokes: 9 },
        { char: '曠', examples: ['광야(曠野)', '비다', '광활(曠闊)', '광', '넓다'], reading: '빌 광', meaning: '비다', strokes: 19 },
        { char: '壙', examples: ['광중(壙中)', '뫼구덩이', '무덤', '광', '구덩이'], reading: '광 광', meaning: '광(뫼구덩이)', strokes: 18 },
        { char: '匡', examples: ['광정(匡正)', '바르다', '구제', '광', '바로잡다'], reading: '바를 광', meaning: '바르다', strokes: 6 },
        { char: '胱', examples: ['방광(膀胱)', '오줌통', '방광염', '광', '장기'], reading: '오줌통 광', meaning: '오줌통', strokes: 10 },
        { char: '罫', examples: ['계선', '줄', '바둑판줄', '괘', '선'], reading: '줄 괘', meaning: '줄', strokes: 14 },
        { char: '卦', examples: ['점괘', '괘', '팔괘(八卦)', '괘', '점'], reading: '점괘 괘', meaning: '점괘', strokes: 8 },
        { char: '拐', examples: ['유괴(誘拐)', '후리다', '가로채다', '괴', '속이다'], reading: '후릴 괴', meaning: '후리다', strokes: 8 },
        { char: '魁', examples: ['수괴(首魁)', '으뜸', '우두머리', '괴', '크다'], reading: '으뜸 괴', meaning: '으뜸', strokes: 14 },
        { char: '乖', examples: ['괴리(乖離)', '어그러지다', '배반', '괴', '떨어지다'], reading: '어그러질 괴', meaning: '어그러지다', strokes: 8 },
        { char: '肱', examples: ['고굉(股肱)', '팔뚝', '심복', '굉', '신하'], reading: '팔뚝 굉', meaning: '팔뚝', strokes: 8 },
        { char: '轟', examples: ['굉음(轟音)', '울리다', '떠들썩하다', '굉', '소리'], reading: '울릴 굉', meaning: '울리다', strokes: 21 },
        { char: '宏', examples: ['광대(宏大)', '크다', '웅장', '굉', '넓다'], reading: '클 굉', meaning: '크다', strokes: 7 },
        { char: '攪', examples: ['교란(攪亂)', '어지럽다', '교반(攪拌)', '교', '흔들다'], reading: '어지러울 교', meaning: '어지럽다', strokes: 23 },
        { char: '咬', examples: ['교합(咬合)', '깨물다', '물다', '교', '씹다'], reading: '깨물 교', meaning: '깨물다', strokes: 9 },
        { char: '喬', examples: ['교목(喬木)', '높다', '큰나무', '교', '높이솟다'], reading: '높을 교', meaning: '높다', strokes: 12 },
        { char: '驕', examples: ['교만(驕慢)', '교만하다', '오만(傲驕)', '교', '거만'], reading: '교만할 교', meaning: '교만하다', strokes: 22 },
        { char: '轎', examples: ['가마', '교', '교군', '교', '탈것'], reading: '가마 교', meaning: '가마', strokes: 18 },
        { char: '蛟', examples: ['교룡', '교', '용', '교', '이무기'], reading: '교룡 교', meaning: '교룡', strokes: 12 },
        { char: '皎', examples: ['교교(皎皎)', '달밝다', '희다', '교', '깨끗하다'], reading: '달 밝을 교', meaning: '달 밝다', strokes: 11 },
        { char: '狡', examples: ['교활(狡猾)', '교활하다', '간교', '교', '꾀'], reading: '교활할 교', meaning: '교활하다', strokes: 9 },
        { char: '嬌', examples: ['교태(嬌態)', '아리땁다', '애교(愛嬌)', '교', '사랑스럽다'], reading: '아리따울 교', meaning: '아리땁다', strokes: 15 },
        { char: '矩', examples: ['규구(規矩)', '법도', '사각형', '구', '규칙'], reading: '법도 구', meaning: '법도', strokes: 9 },
        { char: '駒', examples: ['망아지', '구', '가구(家駒)', '구', '말'], reading: '망아지 구', meaning: '망아지', strokes: 15 },
        { char: '鳩', examples: ['비둘기', '구', '관구(斑鳩)', '구', '새'], reading: '비둘기 구', meaning: '비둘기', strokes: 13 },
        { char: '舅', examples: ['외구(外舅)', '시아비', '외삼촌', '구', '장인'], reading: '시아비 구', meaning: '시아비', strokes: 13 },
        { char: '枸', examples: ['구기자(枸杞子)', '구기자', '나무', '구', '약재'], reading: '구기자 구', meaning: '구기자', strokes: 9 },
        { char: '廏', examples: ['마구간', '구', '외양간', '구', '축사'], reading: '마구간 구', meaning: '마구간', strokes: 13 },
        { char: '寇', examples: ['왜구(倭寇)', '도적', '침략자', '구', '도둑'], reading: '도적 구', meaning: '도적', strokes: 11 },
        { char: '嘔', examples: ['구토(嘔吐)', '토하다', '구역질', '구', '게우다'], reading: '토할 구', meaning: '토하다', strokes: 14 },
        { char: '仇', examples: ['원수', '구', '복수', '구', '적'], reading: '원수 구', meaning: '원수', strokes: 4 },
        { char: '垢', examples: ['무구(無垢)', '때', '오구(汚垢)', '구', '먼지'], reading: '때 구', meaning: '때', strokes: 9 },
        { char: '衢', examples: ['강구(康衢)', '네거리', '거리', '구', '길'], reading: '네거리 구', meaning: '네거리', strokes: 24 },
        { char: '鉤', examples: ['갈고리', '구', '낚시바늘', '구', '쇠갈고리'], reading: '갈고리 구', meaning: '갈고리', strokes: 13 },
        { char: '臼', examples: ['절구', '구', '구치(臼齒)', '구', '어금니'], reading: '절구 구', meaning: '절구', strokes: 6 },
        { char: '毆', examples: ['구타(毆打)', '때리다', '폭행', '구', '치다'], reading: '때릴 구', meaning: '때리다', strokes: 15 },
        { char: '溝', examples: ['하수구(下水溝)', '도랑', '구거(溝渠)', '구', '개천'], reading: '도랑 구', meaning: '도랑', strokes: 13 },
        { char: '灸', examples: ['침구(鍼灸)', '뜸', '뜸질', '구', '치료'], reading: '뜸 구', meaning: '뜸', strokes: 7 },
        { char: '軀', examples: ['체구(體軀)', '몸', '신체', '구', '몸집'], reading: '몸 구', meaning: '몸', strokes: 18 },
        { char: '柩', examples: ['영구(靈柩)', '널', '관', '구', '운구'], reading: '널 구', meaning: '널', strokes: 9 },
        { char: '謳', examples: ['구가(謳歌)', '노래하다', '찬양', '구', '칭송'], reading: '노래할 구', meaning: '노래하다', strokes: 18 },
        { char: '嶇', examples: ['기구(崎嶇)', '험하다', '산길', '구', '가파르다'], reading: '험할 구', meaning: '험하다', strokes: 14 },
        { char: '窘', examples: ['군색(窘??)', '군색하다', '가난', '군', '어렵다'], reading: '군색할 군', meaning: '군색하다', strokes: 12 },
        { char: '躬', examples: ['국궁(鞠躬)', '몸', '몸소', '궁', '숙이다'], reading: '몸 궁', meaning: '몸', strokes: 10 },
        { char: '穹', examples: ['창궁(蒼穹)', '하늘', '궁륭(穹窿)', '궁', '높다'], reading: '하늘 궁', meaning: '하늘', strokes: 8 },
        { char: '眷', examples: ['가권(家眷)', '돌보다', '식구', '권', '가족'], reading: '돌볼 권', meaning: '돌보다', strokes: 11 },
        { char: '捲', examples: ['석권(席捲)', '말다', '압권(壓捲)', '권', '말아쥐다'], reading: '말 권', meaning: '말다', strokes: 11 },
        { char: '倦', examples: ['권태(倦怠)', '게으르다', '피곤(疲倦)', '권', '지치다'], reading: '게으를 권', meaning: '게으르다', strokes: 10 },
        { char: '蹶', examples: ['궐기(蹶起)', '넘어지다', '일어나다', '궐', '차다'], reading: '넘어질 궐', meaning: '넘어지다', strokes: 19 },
        { char: '潰', examples: ['붕괴(崩潰)', '무너지다', '궤멸(潰滅)', '궤', '패하다'], reading: '무너질 궤', meaning: '무너지다', strokes: 16 },
        { char: '詭', examples: ['궤변(詭辯)', '속이다', '기이하다', '궤', '거짓'], reading: '속일 궤', meaning: '속이다', strokes: 13 },
        { char: '几', examples: ['안석', '궤', '책상', '궤', '기대다'], reading: '안석 궤', meaning: '안석', strokes: 2 },
        { char: '櫃', examples: ['장롱', '궤', '뒤주', '궤', '금고'], reading: '함 궤', meaning: '함', strokes: 18 },
        { char: '机', examples: ['책상', '궤', '책상다리', '궤', '나무'], reading: '책상 궤', meaning: '책상', strokes: 6 },
        { char: '逵', examples: ['한길', '규', '대로(大逵)', '규', '큰길'], reading: '한길 규', meaning: '한길', strokes: 12 },
        { char: '葵', examples: ['해바라기', '규', '접시꽃', '규', '식물'], reading: '해바라기 규', meaning: '해바라기', strokes: 12 },
        { char: '窺', examples: ['규명(窺明)', '엿보다', '탐색', '규', '살피다'], reading: '엿볼 규', meaning: '엿보다', strokes: 16 },
        { char: '硅', examples: ['규소(硅素)', '규사(硅砂)', '모래', '규', '광물'], reading: '규소 규', meaning: '규소', strokes: 11 },
        { char: '橘', examples: ['감귤', '귤', '밀감', '귤', '과일'], reading: '귤 귤', meaning: '귤', strokes: 16 },
        { char: '隙', examples: ['공극(空隙)', '틈', '간극(間隙)', '극', '사이'], reading: '틈 극', meaning: '틈', strokes: 13 },
        { char: '剋', examples: ['극기(剋己)', '이기다', '상극(相剋)', '극', '극복하다'], reading: '이길 극', meaning: '이기다', strokes: 9 },
        { char: '戟', examples: ['자극(刺戟)', '창', '창검', '격', '찌르다'], reading: '창 격', meaning: '창', strokes: 12 },
        { char: '棘', examples: ['가시', '극', '형극(荊棘)', '극', '고난'], reading: '가시 극', meaning: '가시', strokes: 12 },
        { char: '饉', examples: ['기근(飢饉)', '주리다', '흉년', '근', '굶주림'], reading: '주릴 근', meaning: '주리다', strokes: 20 },
        { char: '覲', examples: ['알현(謁覲)', '뵙다', '친근(親覲)', '근', '만나다'], reading: '뵐 근', meaning: '뵙다', strokes: 18 },
        { char: '襟', examples: ['흉금(胸襟)', '옷깃', '가슴', '금', '마음'], reading: '옷깃 금', meaning: '옷깃', strokes: 18 },
        { char: '擒', examples: ['생포(生擒)', '사로잡다', '포획', '금', '잡다'], reading: '사로잡을 금', meaning: '사로잡다', strokes: 16 },
        { char: '衾', examples: ['침금(寢衾)', '이불', '침구', '금', '덮다'], reading: '이불 금', meaning: '이불', strokes: 10 },
        { char: '扱', examples: ['취급(取扱)', '다루다', '지급(支給)', '급', '처리'], reading: '다룰 급', meaning: '다루다', strokes: 7 },
        { char: '汲', examples: ['급급(汲汲)', '긷다', '길어내다', '급', '바쁘다'], reading: '길을 급', meaning: '긷다', strokes: 7 },
        { char: '矜', examples: ['긍지(矜持)', '자랑하다', '자긍(自矜)', '긍', '자부심'], reading: '자랑할 긍', meaning: '자랑하다', strokes: 9 },
        { char: '亘', examples: ['경항(更亘)', '걸치다', '이어지다', '선', '뻗다'], reading: '걸칠 선(긍)', meaning: '걸치다', strokes: 6 },
        { char: '譏', examples: ['기롱(譏弄)', '나무라다', '비웃다', '기', '조롱'], reading: '나무랄 기', meaning: '나무라다', strokes: 19 },
        { char: '肌', examples: ['피부', '살', '살갗', '기', '피부결'], reading: '살 기', meaning: '살', strokes: 6 },
        { char: '綺', examples: ['기라성(綺羅星)', '비단', '아름답다', '기', '화려하다'], reading: '비단 기', meaning: '비단', strokes: 14 },
        { char: '杞', examples: ['기우(杞憂)', '구기자나무', '근심', '기', '걱정'], reading: '구기자나무 기', meaning: '구기자나무', strokes: 7 },
        { char: '朞', examples: ['기년(朞年)', '돌', '일주년', '기', '기간'], reading: '돌 기', meaning: '돌(1주년)', strokes: 12 },
        { char: '崎', examples: ['기구(崎嶇)', '험하다', '산길', '기', '비탈지다'], reading: '험할 기', meaning: '험하다', strokes: 11 },
        { char: '妓', examples: ['기생(妓生)', '기녀(妓女)', '예기(藝妓)', '기', '유흥'], reading: '기생 기', meaning: '기생', strokes: 7 },
        { char: '伎', examples: ['기예(伎藝)', '재주', '기량', '기', '솜씨'], reading: '재주 기', meaning: '재주', strokes: 6 },
        { char: '羈', examples: ['속박', '굴레', '나그네', '기', '매다'], reading: '굴레 기', meaning: '굴레', strokes: 25 },
        { char: '嗜', examples: ['기호(嗜好)', '즐기다', '좋아하다', '기', '취미'], reading: '즐길 기', meaning: '즐기다', strokes: 13 },
        { char: '畸', examples: ['기형(畸形)', '뙈기밭', '기이하다', '기', '다르다'], reading: '뙈기밭 기', meaning: '뙈기밭', strokes: 13 },
        { char: '拮', examples: ['길항(拮抗)', '일하다', '버티다', '길', '대항'], reading: '일할 길', meaning: '일하다', strokes: 9 },
        { char: '喫', examples: ['만끽(滿喫)', '마시다', '흡연(喫煙)', '끽', '먹다'], reading: '마실 끽', meaning: '마시다', strokes: 12 },
        { char: '拏', examples: ['나포(拏捕)', '붙잡다', '체포', '나', '잡다'], reading: '붙잡을 나', meaning: '붙잡다', strokes: 9 },
        { char: '懦', examples: ['나약(懦弱)', '나약하다', '유약(柔懦)', '나', '약하다'], reading: '나약할 나', meaning: '나약하다', strokes: 17 },
        { char: '拿', examples: ['나포(拿捕)', '붙잡다', '포획', '나', '잡다'], reading: '붙잡을 나', meaning: '붙잡다', strokes: 10 },
        { char: '儺', examples: ['나례(儺禮)', '역귀쫓다', '굿', '나', '의식'], reading: '역귀 쫓을 나', meaning: '역귀 쫓다', strokes: 21 },
        { char: '煖', examples: ['난방(煖房)', '따뜻하다', '온난', '난', '덥히다'], reading: '따뜻할 난', meaning: '따뜻하다', strokes: 13 },
        { char: '捏', examples: ['날조(捏造)', '꾸미다', '조작', '날', '거짓'], reading: '꾸밀 날', meaning: '꾸미다', strokes: 10 },
        { char: '捺', examples: ['날인(捺印)', '누르다', '도장', '날', '찍다'], reading: '누를 날', meaning: '누르다', strokes: 11 },
        { char: '衲', examples: ['납의(衲衣)', '기우다', '승복', '납', '누더기'], reading: '기울 납', meaning: '기우다', strokes: 10 },
        { char: '囊', examples: ['배낭(背囊)', '주머니', '낭종(囊腫)', '낭', '자루'], reading: '주머니 낭', meaning: '주머니', strokes: 22 },
        { char: '撚', examples: ['재연(再撚)', '비틀다', '꼬다', '연', '비비다'], reading: '비틀 년', meaning: '비틀다', strokes: 15 },
        { char: '涅', examples: ['열반(涅槃)', '개흙', '검은흙', '열', '진흙'], reading: '개흙 녈', meaning: '개흙', strokes: 10 },
        { char: '弩', examples: ['쇠뇌', '노', '강노(强弩)', '노', '활'], reading: '쇠뇌 노', meaning: '쇠뇌', strokes: 8 },
        { char: '駑', examples: ['노둔(駑鈍)', '둔하다', '노마(駑馬)', '노', '둔한말'], reading: '둔할 노', meaning: '둔하다', strokes: 15 },
        { char: '膿', examples: ['고름', '농', '농양(膿瘍)', '농', '염증'], reading: '고름 농', meaning: '고름', strokes: 17 },
        { char: '撓', examples: ['요골(橈骨)', '어지럽다', '굽다', '요', '휘다'], reading: '어지러울 뇨', meaning: '어지럽다', strokes: 15 },
        { char: '訥', examples: ['눌변(訥辯)', '말더듬다', '어눌(語訥)', '눌', '말막히다'], reading: '말더듬을 눌', meaning: '말더듬다', strokes: 11 },
        { char: '紐', examples: ['제휴(提紐)', '끈', '유대(紐帶)', '뉴', '맺다'], reading: '끈 뉴', meaning: '끈', strokes: 10 },
        { char: '匿', examples: ['은닉(隱匿)', '숨기다', '익명(匿名)', '닉', '감추다'], reading: '숨길 닉', meaning: '숨기다', strokes: 11 },
        { char: '蛋', examples: ['단백질(蛋白質)', '새알', '피단(皮蛋)', '단', '계란'], reading: '새알 단', meaning: '새알', strokes: 11 },
        { char: '簞', examples: ['단사표음(簞食瓢飮)', '대광주리', '도시락', '단', '그릇'], reading: '대광주리 단', meaning: '대광주리', strokes: 14 },
        { char: '緞', examples: ['비단', '단', '융단(絨緞)', '단', '옷감'], reading: '비단 단', meaning: '비단', strokes: 15 },
        { char: '撻', examples: ['매질', '달', '구타', '달', '채찍질'], reading: '매질할 달', meaning: '매질하다', strokes: 16 },
        { char: '疸', examples: ['황달(黃疸)', '질병', '누렇게뜨다', '달', '병'], reading: '황달 달', meaning: '황달', strokes: 10 },
        { char: '憺', examples: ['참담(慘憺)', '편안하다', '고요', '담', '아프다'], reading: '편안할 담', meaning: '편안하다', strokes: 16 },
        { char: '曇', examples: ['담천(曇天)', '흐리다', '구름끼다', '담', '날씨'], reading: '흐릴 담', meaning: '흐리다', strokes: 16 },
        { char: '澹', examples: ['담백(澹白)', '맑다', '담담하다', '담', '깨끗하다'], reading: '맑을 담', meaning: '맑다', strokes: 16 },
        { char: '痰', examples: ['가래', '담', '객담(喀痰)', '담', '침'], reading: '가래 담', meaning: '가래', strokes: 13 },
        { char: '譚', examples: ['담화(譚話)', '이야기', '기담(奇譚)', '담', '설화'], reading: '이야기 담', meaning: '이야기', strokes: 19 },
        { char: '遝', examples: ['복잡(複遝)', '뒤섞이다', '혼잡', '답', '붐비다'], reading: '뒤섞일 답', meaning: '뒤섞이다', strokes: 13 },
        { char: '撞', examples: ['충돌(衝突)', '치다', '당구(撞球)', '당', '부딪치다'], reading: '칠 당', meaning: '치다', strokes: 15 },
        { char: '棠', examples: ['해당화(海棠花)', '아가위', '나무', '당', '식물'], reading: '아가위 당', meaning: '아가위(해당화)', strokes: 12 },
        { char: '螳', examples: ['당랑(螳螂)', '사마귀', '곤충', '당', '벌레'], reading: '사마귀 당', meaning: '사마귀', strokes: 17 },
        { char: '擡', examples: ['대두(擡頭)', '들다', '머리를들다', '대', '일어나다'], reading: '들 대', meaning: '들다', strokes: 17 },
        { char: '袋', examples: ['부대(負袋)', '자루', '봉투', '대', '주머니'], reading: '자루 대', meaning: '자루', strokes: 11 },
        { char: '搗', examples: ['도정(搗精)', '찧다', '도매(搗賣)', '도', '빻다'], reading: '찧을 도', meaning: '찧다', strokes: 13 },
        { char: '鍍', examples: ['도금(鍍金)', '도금하다', '입히다', '도', '금입히다'], reading: '도금할 도', meaning: '도금하다', strokes: 16 },
        { char: '蹈', examples: ['무용(舞蹈)', '밟다', '답습(踏襲)', '도', '춤추다'], reading: '밟을 도', meaning: '밟다', strokes: 17 },
        { char: '賭', examples: ['도박(賭博)', '내기', '노름', '도', '걸다'], reading: '내기 도', meaning: '내기', strokes: 16 },
        { char: '萄', examples: ['포도(葡萄)', '포도', '머루', '도', '과일'], reading: '포도 도', meaning: '포도', strokes: 11 },
        { char: '禱', examples: ['기도(祈禱)', '빌다', '축도(祝禱)', '도', '기원'], reading: '빌 도', meaning: '빌다', strokes: 19 },
        { char: '睹', examples: ['목도(目睹)', '보다', '현도(見睹)', '도', '눈앞에보다'], reading: '볼 도', meaning: '보다', strokes: 13 },
        { char: '濤', examples: ['파도(波濤)', '큰물결', '격랑', '도', '물결'], reading: '큰물결 도', meaning: '큰물결', strokes: 17 },
        { char: '屠', examples: ['도살(屠殺)', '잡다', '도축(屠畜)', '도', '죽이다'], reading: '잡을 도', meaning: '잡다(죽이다)', strokes: 11 },
        { char: '淘', examples: ['도태(淘汰)', '일다', '가려내다', '도', '씻다'], reading: '일 도', meaning: '일다', strokes: 11 },
        { char: '掉', examples: ['조달(掉達)', '흔들다', '떨치다', '도', '움직이다'], reading: '흔들 도', meaning: '흔들다', strokes: 11 },
        { char: '堵', examples: ['안도(安堵)', '담', '평안하다', '도', '벽'], reading: '담 도', meaning: '담', strokes: 11 },
        { char: '滔', examples: ['도도(滔滔)', '물넘치다', '거침없다', '도', '흐르다'], reading: '물넘칠 도', meaning: '물 넘치다', strokes: 13 },
        { char: '禿', examples: ['독수리(禿수리)', '대머리', '민둥산', '독', '벗겨지다'], reading: '대머리 독', meaning: '대머리', strokes: 7 },
        { char: '瀆', examples: ['모독(冒瀆)', '도랑', '더럽히다', '독', '모욕'], reading: '도랑 독', meaning: '도랑', strokes: 18 },
        { char: '沌', examples: ['혼돈(混沌)', '물흐리다', '어지럽다', '돈', '혼란'], reading: '물 흐릴 돈', meaning: '물 흐리다', strokes: 7 },
        { char: '疼', examples: ['동통(疼痛)', '아프다', '통증', '동', '쑤시다'], reading: '아플 동', meaning: '아프다', strokes: 10 },
        { char: '瞳', examples: ['동공(瞳孔)', '눈동자', '눈', '동', '시력'], reading: '눈동자 동', meaning: '눈동자', strokes: 17 },
        { char: '胴', examples: ['동체(胴體)', '몸통', '허리', '동', '몸'], reading: '몸통 동', meaning: '몸통', strokes: 10 },
        { char: '憧', examples: ['동경(憧憬)', '그리워하다', '사모하다', '동', '왕래하다'], reading: '그리워할 동', meaning: '그리워하다', strokes: 15 },
        { char: '兜', examples: ['투구', '두', '두건', '두', '모자'], reading: '투구 두', meaning: '투구', strokes: 11 },
        { char: '痘', examples: ['천연두(天然痘)', '마마', '곰보', '두', '질병'], reading: '천연두 두', meaning: '천연두', strokes: 12 },
        { char: '臀', examples: ['둔부(臀部)', '볼기', '엉덩이', '둔', '신체'], reading: '볼기 둔', meaning: '볼기', strokes: 17 },
        { char: '遁', examples: ['은둔(隱遁)', '달아나다', '도망(遁逃)', '둔', '숨다'], reading: '달아날 둔', meaning: '달아나다', strokes: 12 },
        { char: '橙', reading: '귤나무 등', meaning: '귤나무', strokes: 16 },
        { char: '邏', reading: '순행할 라', meaning: '순행하다', strokes: 22 },
        { char: '螺', reading: '소라 라', meaning: '소라', strokes: 17 },
        { char: '懶', reading: '게으를 라', meaning: '게으르다', strokes: 19 },
        { char: '癩', reading: '나병 라', meaning: '나병', strokes: 21 },
        { char: '駱', reading: '낙타 락', meaning: '낙타', strokes: 16 },
        { char: '烙', reading: '지질 락', meaning: '지지다', strokes: 10 },
        { char: '酪', examples: ['낙농(酪農)', '타락', '유제품', '낙', '치즈'], reading: '타락 락', meaning: '타락(유즙)', strokes: 13 },
        { char: '瀾', examples: ['파란(波瀾)', '물결', '논란', '란', '파동'], reading: '물결 란', meaning: '물결', strokes: 20 },
        { char: '鸞', examples: ['난새', '난', '봉황', '난', '상상의새'], reading: '난새 란', meaning: '난새', strokes: 30 },
        { char: '剌', examples: ['발랄(潑剌)', '어그러지다', '활발', '랄', '명랑'], reading: '어그러질 랄', meaning: '어그러지다', strokes: 9 },
        { char: '辣', examples: ['신랄(辛辣)', '맵다', '악랄(惡辣)', '랄', '가혹하다'], reading: '매울 랄', meaning: '맵다', strokes: 14 },
        { char: '籃', examples: ['요람(搖籃)', '바구니', '농구(籃球)', '람', '통'], reading: '바구니 람', meaning: '바구니', strokes: 20 },
        { char: '蠟', examples: ['밀랍', '랍', '양초', '랍', '왁스'], reading: '밀랍 랍', meaning: '밀랍', strokes: 21 },
        { char: '臘', examples: ['구랍(舊臘)', '섣달', '연말', '랍', '겨울'], reading: '섣달 랍', meaning: '섣달', strokes: 19 },
        { char: '狼', examples: ['낭패(狼狽)', '이리', '늑대', '낭', '곤경'], reading: '이리 랑', meaning: '이리', strokes: 10 },
        { char: '倆', examples: ['기량(技倆)', '재주', '솜씨', '량', '기술'], reading: '재주 량', meaning: '재주', strokes: 10 },
        { char: '粱', examples: ['고량(膏粱)', '기장', '곡식', '량', '음식'], reading: '기장 량', meaning: '기장', strokes: 13 },
        { char: '侶', examples: ['승려(僧侶)', '짝', '반려(伴侶)', '려', '친구'], reading: '짝 려', meaning: '짝', strokes: 9 },
        { char: '戾', examples: ['괴리(乖戾)', '어그러지다', '폭려(暴戾)', '려', '사납다'], reading: '어그러질 려', meaning: '어그러지다', strokes: 8 },
        { char: '濾', examples: ['여과(濾過)', '거르다', '여과기', '려', '필터'], reading: '거를 려', meaning: '거르다', strokes: 18 },
        { char: '閭', examples: ['이문', '여', '마을', '여', '문'], reading: '이문 려', meaning: '이문(마을문)', strokes: 15 },
        { char: '黎', examples: ['여명(黎明)', '검다', '백성(黎民)', '여', '새벽'], reading: '검을 려', meaning: '검다', strokes: 15 },
        { char: '瀝', examples: ['피력(披瀝)', '거르다', '배출', '력', '짜내다'], reading: '거를 력', meaning: '거르다', strokes: 19 },
        { char: '礫', examples: ['사력(砂礫)', '조약돌', '자갈', '력', '돌'], reading: '조약돌 력', meaning: '조약돌', strokes: 20 },
        { char: '輦', examples: ['연', '손수레', '수레', '연', '임금수레'], reading: '손수레 련', meaning: '손수레', strokes: 15 },
        { char: '斂', examples: ['수렴(收斂)', '거두다', '가혹(苛斂)', '렴', '모으다'], reading: '거둘 렴', meaning: '거두다', strokes: 17 },
        { char: '殮', examples: ['입관(入殮)', '염하다', '염습(殮襲)', '렴', '장례'], reading: '염할 렴', meaning: '염하다', strokes: 17 },
        { char: '簾', examples: ['수렴청정(垂簾聽政)', '발', '커튼', '렴', '가리개'], reading: '발 렴', meaning: '발(커튼)', strokes: 19 },
        { char: '齡', examples: ['연령(年齡)', '나이', '고령(高齡)', '령', '수명'], reading: '나이 령', meaning: '나이', strokes: 17 },
        { char: '囹', examples: ['영어(囹圄)', '옥', '감옥', '령', '갇히다'], reading: '옥 령', meaning: '옥', strokes: 8 },
        { char: '逞', examples: ['영이(逞異)', '굳세다', '왕성하다', '령', '씩씩하다'], reading: '굳셀 령', meaning: '굳세다', strokes: 10 },
        { char: '鈴', examples: ['방울', '령', '호령(號鈴)', '령', '벨'], reading: '방울 령', meaning: '방울', strokes: 13 },
        { char: '虜', examples: ['포로(捕虜)', '포로', '사로잡히다', '로', '잡히다'], reading: '포로 로', meaning: '포로', strokes: 13 },
        { char: '擄', examples: ['노략(擄掠)', '노략질하다', '약탈', '로', '빼앗다'], reading: '노략질할 로', meaning: '노략질하다', strokes: 16 },
        { char: '撈', examples: ['구로(救撈)', '잡다', '건지다', '로', '구하다'], reading: '잡을 로', meaning: '잡다(건지다)', strokes: 15 },
        { char: '麓', examples: ['산기슭', '록', '산록(山麓)', '록', '산자락'], reading: '산기슭 록', meaning: '산기슭', strokes: 19 },
        { char: '碌', examples: ['골록(骨碌)', '돌모양', '자갈', '록', '돌'], reading: '돌 모양 록', meaning: '돌 모양', strokes: 13 },
        { char: '壟', examples: ['독점(獨壟)', '언덕', '농단(籠斷)', '롱', '밭두둑'], reading: '언덕 롱', meaning: '언덕', strokes: 19 },
        { char: '聾', examples: ['농아(聾啞)', '귀머거리', '난청', '농', '귀먹다'], reading: '귀머거리 롱', meaning: '귀머거리', strokes: 22 },
        { char: '瓏', examples: ['영롱(玲瓏)', '영롱하다', '밝다', '농', '빛나다'], reading: '영롱할 롱', meaning: '영롱하다', strokes: 20 },
        { char: '賂', examples: ['뇌물(賂物)', '뇌물', '수뢰(收賂)', '뢰', '바치다'], reading: '뇌물 뢰', meaning: '뇌물', strokes: 13 },
        { char: '磊', examples: ['낙뢰(落磊)', '돌무더기', '많다', '뢰', '쌓이다'], reading: '돌무더기 뢰', meaning: '돌무더기', strokes: 15 },
        { char: '牢', examples: ['망양보뢰(亡羊補牢)', '우리', '감옥', '뢰', '굳다'], reading: '우리 뢰', meaning: '우리', strokes: 7 },
        { char: '儡', examples: ['괴뢰(傀儡)', '꼭두각시', '허수아비', '뢰', '인형'], reading: '꼭두각시 뢰', meaning: '꼭두각시', strokes: 19 },
        { char: '燎', examples: ['요원(燎原)', '횃불', '타다', '요', '불'], reading: '횃불 료', meaning: '횃불', strokes: 16 },
        { char: '瞭', examples: ['요연(瞭然)', '밝다', '명료(明瞭)', '요', '분명하다'], reading: '밝을 료', meaning: '밝다', strokes: 17 },
        { char: '聊', examples: ['무료(無聊)', '애오라지', '잠깐', '요', '조금'], reading: '애오라지 료', meaning: '애오라지', strokes: 11 },
        { char: '寥', examples: ['요원(寥遠)', '쓸쓸하다', '적막', '요', '고요하다'], reading: '쓸쓸할 료', meaning: '쓸쓸하다', strokes: 14 },
        { char: '寮', examples: ['기숙사', '료', '동관', '료', '관리'], reading: '동관 료', meaning: '동관', strokes: 15 },
        { char: '壘', examples: ['성루(城壘)', '진', '보루(堡壘)', '루', '방어'], reading: '진 루', meaning: '진', strokes: 18 },
        { char: '婁', examples: ['숙루(宿婁)', '별이름', '성씨', '루', '별'], reading: '별이름 루', meaning: '별이름', strokes: 11 },
        { char: '陋', examples: ['누추(陋醜)', '좁다', '비루(鄙陋)', '루', '천하다'], reading: '좁을 루', meaning: '좁다', strokes: 9 },
        { char: '琉', examples: ['유리(琉璃)', '구슬', '보석', '유', '투명하다'], reading: '유리 류', meaning: '유리', strokes: 10 },
        { char: '溜', examples: ['증류(蒸溜)', '방울지다', '떨어지다', '류', '흐르다'], reading: '방울져 떨어질 류', meaning: '방울져 떨어지다', strokes: 13 },
        { char: '瘤', examples: ['혹', '류', '종양', '류', '혹부리'], reading: '혹 류', meaning: '혹', strokes: 15 },
        { char: '戮', examples: ['살육(殺戮)', '죽이다', '도륙(屠戮)', '육', '형벌'], reading: '죽일 륙', meaning: '죽이다', strokes: 15 },
        { char: '淪', examples: ['영락(零落)', '물놀이', '빠지다', '윤', '몰락'], reading: '물놀이 륜', meaning: '물놀이', strokes: 11 },
        { char: '綸', examples: ['경륜(經綸)', '낚싯줄', '다스리다', '윤', '정치'], reading: '낚싯줄 륜', meaning: '낚싯줄', strokes: 14 },
        { char: '慄', examples: ['전율(戰慄)', '떨리다', '소름', '율', '두렵다'], reading: '떨릴 률', meaning: '떨리다', strokes: 13 },
        { char: '肋', examples: ['늑골(肋骨)', '갈비', '옆구리', '늑', '뼈'], reading: '갈비 륵', meaning: '갈비', strokes: 6 },
        { char: '勒', examples: ['미륵(彌勒)', '굴레', '억제', '륵', '다스리다'], reading: '굴레 륵', meaning: '굴레', strokes: 11 },
        { char: '凜', examples: ['늠름(凜凜)', '차다', '씩씩하다', '늠', '위엄'], reading: '찰 름', meaning: '차다', strokes: 15 },
        { char: '稜', examples: ['능선(稜線)', '모', '모서리', '능', '각'], reading: '모 릉', meaning: '모', strokes: 13 },
        { char: '綾', examples: ['비단', '능', '능라(綾羅)', '능', '옷감'], reading: '비단 릉', meaning: '비단', strokes: 14 },
        { char: '凌', examples: ['능가(凌駕)', '업신여기다', '침범', '능', '능멸'], reading: '능가할 릉', meaning: '능가하다', strokes: 10 },
        { char: '菱', examples: ['마름모(菱毛)', '마름', '수초', '능', '식물'], reading: '마름 릉', meaning: '마름', strokes: 11 },
        { char: '悧', examples: ['영리(怜悧)', '똑똑하다', '슬기롭다', '리', '지혜'], reading: '영리할 리', meaning: '영리하다', strokes: 10 },
        { char: '籬', examples: ['울타리', '리', '객리(客籬)', '리', '담장'], reading: '울타리 리', meaning: '울타리', strokes: 25 },
        { char: '釐', examples: ['이정(釐正)', '다스리다', '바로잡다', '리', '고치다'], reading: '다스릴 리', meaning: '다스리다', strokes: 18 },
        { char: '俚', examples: ['속리(俗俚)', '속되다', '속언(俚言)', '리', '민요'], reading: '속될 리', meaning: '속되다', strokes: 9 },
        { char: '裡', examples: ['뇌리(腦裡)', '속', '이면(裏面)', '리', '안'], reading: '속 리', meaning: '속', strokes: 12 },
        { char: '痢', examples: ['이질(痢疾)', '설사', '배탈', '리', '질병'], reading: '설사 리', meaning: '설사', strokes: 13 },
        { char: '罹', examples: ['이재민(罹災民)', '걸리다', '당하다', '리', '입다'], reading: '걸릴 리', meaning: '걸리다', strokes: 16 },
        { char: '吝', examples: ['인색(吝嗇)', '아끼다', '구두쇠', '인', '쩨쩨하다'], reading: '아낄 린', meaning: '아끼다', strokes: 7 },
        { char: '鱗', examples: ['역린(逆鱗)', '비늘', '물고기', '린', '갑옷'], reading: '비늘 린', meaning: '비늘', strokes: 23 },
        { char: '燐', examples: ['인(燐)', '도깨비불', '성냥', '린', '원소'], reading: '도깨비불 린', meaning: '도깨비불', strokes: 16 },
        { char: '躪', examples: ['유린(蹂躪)', '짓밟다', '침해', '린', '망치다'], reading: '유린할 린', meaning: '유린하다', strokes: 27 },
        { char: '淋', examples: ['임질(淋疾)', '물뿌리다', '적시다', '림', '임파선'], reading: '물 뿌릴 림', meaning: '물 뿌리다', strokes: 11 },
        { char: '笠', examples: ['삿갓', '립', '방립(方笠)', '립', '모자'], reading: '삿갓 립', meaning: '삿갓', strokes: 11 },
        { char: '粒', examples: ['입자(粒子)', '낱알', '미립자', '립', '알갱이'], reading: '낱알 립', meaning: '낱알', strokes: 11 },
        { char: '寞', examples: ['적막(寂寞)', '쓸쓸하다', '고요', '막', '외롭다'], reading: '쓸쓸할 막', meaning: '쓸쓸하다', strokes: 14 },
        { char: '輓', examples: ['만시지탄(晩時之歎)', '끌다', '만회(輓回)', '만', '늦다'], reading: '끌 만', meaning: '끌다', strokes: 14 },
        { char: '饅', examples: ['만두(饅頭)', '만두', '군만두', '만', '음식'], reading: '만두 만', meaning: '만두', strokes: 20 },
        { char: '蔓', examples: ['만연(蔓延)', '덩굴', '퍼지다', '만', '줄기'], reading: '덩굴 만', meaning: '덩굴', strokes: 17 },
        { char: '鰻', examples: ['장어', '만', '풍천장어', '만', '물고기'], reading: '뱀장어 만', meaning: '뱀장어', strokes: 22 },
        { char: '卍', examples: ['만자', '만', '절', '만', '불교'], reading: '만자 만', meaning: '만자(절)', strokes: 6 },
        { char: '彎', examples: ['만곡(灣曲)', '굽다', '활', '만', '휘다'], reading: '굽을 만', meaning: '굽다', strokes: 22 },
        { char: '挽', examples: ['만회(挽回)', '당기다', '되돌리다', '만', '끌다'], reading: '당길 만', meaning: '당기다', strokes: 10 },
        { char: '瞞', examples: ['기만(欺瞞)', '속이다', '감추다', '만', '거짓'], reading: '속일 만', meaning: '속이다', strokes: 16 },
        { char: '抹', examples: ['말살(抹殺)', '지우다', '말소(抹消)', '말', '없애다'], reading: '지울 말', meaning: '지우다', strokes: 8 },
        { char: '沫', examples: ['비말(飛沫)', '거품', '물거품', '말', '튀다'], reading: '거품 말', meaning: '거품', strokes: 8 },
        { char: '襪', examples: ['양말(洋襪)', '버선', '족발(足襪)', '말', '신다'], reading: '버선 말', meaning: '버선', strokes: 21 },
        { char: '芒', examples: ['망종(芒種)', '까끄라기', '가시', '망', '뾰족하다'], reading: '까끄라기 망', meaning: '까끄라기', strokes: 7 },
        { char: '惘', examples: ['망연(惘然)', '멍하다', '어리둥절', '망', '흐릿하다'], reading: '멍할 망', meaning: '멍하다', strokes: 11 },
        { char: '煤', examples: ['매연(煤煙)', '그을음', '석탄', '매', '연기'], reading: '그을음 매', meaning: '그을음', strokes: 13 },
        { char: '罵', examples: ['매도(罵倒)', '욕하다', '꾸짖다', '매', '비난'], reading: '욕할 매', meaning: '욕하다', strokes: 16 },
        { char: '邁', examples: ['매진(邁進)', '가다', '나아가다', '매', '힘쓰다'], reading: '갈 매', meaning: '가다', strokes: 16 },
        { char: '呆', examples: ['치매(癡呆)', '어리석다', '멍하다', '매', '바보'], reading: '어리석을 매', meaning: '어리석다', strokes: 7 },
        { char: '昧', examples: ['애매(曖昧)', '어둡다', '우매(愚昧)', '매', '모르다'], reading: '어두울 매', meaning: '어둡다', strokes: 9 },
        { char: '寐', examples: ['가몽(假寐)', '자다', '꿈', '매', '잠'], reading: '잘 매', meaning: '자다', strokes: 12 },
        { char: '萌', examples: ['맹아(萌芽)', '싹', '트다', '맹', '시초'], reading: '싹 맹', meaning: '싹', strokes: 12 },
        { char: '棉', examples: ['면화(棉花)', '목화', '솜', '면', '직물'], reading: '목화 면', meaning: '목화', strokes: 12 },
        { char: '眄', examples: ['고면(顧眄)', '곁눈질하다', '살피다', '면', '보다'], reading: '곁눈질할 면', meaning: '곁눈질하다', strokes: 9 },
        { char: '緬', examples: ['미얀마(緬??)', '가는실', '면', '면', '멀다'], reading: '가는 실 면', meaning: '가는 실', strokes: 15 },
        { char: '麪', examples: ['냉면(冷麪)', '밀가루', '국수', '면', '라면'], reading: '밀가루 면', meaning: '밀가루', strokes: 13 },
        { char: '溟', examples: ['창명(滄溟)', '바다', '어둡다', '명', '깊다'], reading: '바다 명', meaning: '바다', strokes: 14 },
        { char: '皿', examples: ['기명(器皿)', '그릇', '접시', '명', '식기'], reading: '그릇 명', meaning: '그릇', strokes: 5 },
        { char: '螟', examples: ['명충(螟蟲)', '나방', '해충', '명', '벌레'], reading: '나방 명', meaning: '나방', strokes: 16 },
        { char: '暝', examples: ['여명(黎暝)', '어둡다', '석양', '명', '저녁'], reading: '어두울 명', meaning: '어둡다', strokes: 14 },
        { char: '酩', examples: ['명정(酩酊)', '술취하다', '취기', '명', '만취'], reading: '술 취할 명', meaning: '술 취하다', strokes: 13 },
        { char: '袂', examples: ['연몌(連袂)', '소매', '분몌(分袂)', '몌', '옷'], reading: '소매 미', meaning: '소매', strokes: 10 },
        { char: '摸', examples: ['모색(摸索)', '찾다', '모모(摸摸)', '모', '더듬다'], reading: '찾을 모', meaning: '찾다', strokes: 14 },
        { char: '牡', examples: ['모란(牡丹)', '수컷', '모', '수모', '수소'], reading: '수컷 모', meaning: '수컷', strokes: 7 },
        { char: '糢', examples: ['모호(糢糊)', '모본', '본보기', '모', '흐릿하다'], reading: '모본 모', meaning: '모본', strokes: 15 },
        { char: '耗', examples: ['소모(消耗)', '쓰다', '감모(減耗)', '모', '없애다'], reading: '소모할 모', meaning: '소모하다', strokes: 10 },
        { char: '歿', examples: ['전몰(戰歿)', '죽다', '사망', '몰', '순국'], reading: '죽을 몰', meaning: '죽다', strokes: 8 },
        { char: '猫', examples: ['묘안(猫眼)', '고양이', '애묘(愛猫)', '묘', '동물'], reading: '고양이 묘', meaning: '고양이', strokes: 12 },
        { char: '描', examples: ['묘사(描寫)', '그리다', '소묘(素描)', '묘', '서술하다'], reading: '그릴 묘', meaning: '그리다', strokes: 12 },
        { char: '杳', examples: ['묘연(杳然)', '아득하다', '멀다', '묘', '깜깜하다'], reading: '아득할 묘', meaning: '아득하다', strokes: 8 },
        { char: '渺', examples: ['묘연(渺然)', '아득하다', '넓다', '묘', '끝없다'], reading: '아득할 묘', meaning: '아득하다', strokes: 13 },
        { char: '巫', examples: ['무당(巫堂)', '무속(巫俗)', '무녀(巫女)', '무', '굿'], reading: '무당 무', meaning: '무당', strokes: 7 },
        { char: '蕪', examples: ['황무지(荒蕪地)', '거칠다', '무잡(蕪雜)', '무', '잡풀'], reading: '거칠 무', meaning: '거칠다', strokes: 16 },
        { char: '畝', examples: ['반무(半畝)', '이랑', '밭', '무', '농사'], reading: '이랑 무', meaning: '이랑', strokes: 10 },
        { char: '毋', examples: ['무령(毋寧)', '말다', '금지', '무', '아니다'], reading: '말 무', meaning: '말다', strokes: 4 },
        { char: '撫', examples: ['위무(慰撫)', '어루만지다', '무마(撫摩)', '무', '달래다'], reading: '어루만질 무', meaning: '어루만지다', strokes: 15 },
        { char: '拇', examples: ['가무(哥拇)', '엄지손가락', '무지(拇指)', '무', '지문'], reading: '엄지손가락 무', meaning: '엄지손가락', strokes: 8 },
        { char: '憮', examples: ['무연(憮然)', '사랑하다', '멍하다', '무', '실망'], reading: '사랑할 무', meaning: '사랑하다(멍하다)', strokes: 15 },
        { char: '誣', examples: ['무고(誣告)', '속이다', '무함(誣陷)', '무', '거짓말'], reading: '속일 무', meaning: '속이다', strokes: 14 },
        { char: '蚊', examples: ['모기', '문', '모기장', '문', '해충'], reading: '모기 문', meaning: '모기', strokes: 10 },
        { char: '靡', examples: ['풍미(風靡)', '쓰러지다', '퇴폐(頹靡)', '미', '따르다'], reading: '쓰러질 미', meaning: '쓰러지다', strokes: 19 },
        { char: '薇', examples: ['장미(薔薇)', '고비', '백薇', '미', '꽃'], reading: '고비 미', meaning: '고비(장미)', strokes: 17 },
        { char: '媚', examples: ['무비(嫵媚)', '아첨하다', '교태', '미', '알랑거리다'], reading: '아첨할 미', meaning: '아첨하다', strokes: 12 },
        { char: '悶', examples: ['고민(苦悶)', '번민하다', '답답하다', '민', '괴로워하다'], reading: '번민할 민', meaning: '번민하다', strokes: 12 },
        { char: '謐', examples: ['정밀(靜謐)', '고요하다', '평온', '밀', '조용하다'], reading: '고요할 밀', meaning: '고요하다', strokes: 17 },
        { char: '膊', examples: ['포박(捕膊)', '팔뚝', '상박(上膊)', '박', '어깨'], reading: '팔뚝 박', meaning: '팔뚝', strokes: 14 },
        { char: '搏', examples: ['맥박(脈搏)', '치다', '박동(搏動)', '박', '두드리다'], reading: '칠 박', meaning: '치다', strokes: 13 },
        { char: '縛', examples: ['속박(束縛)', '묶다', '포박(捕縛)', '박', '결박하다'], reading: '묶을 박', meaning: '묶다', strokes: 16 },
        { char: '箔', examples: ['금박(金箔)', '발', '은박(銀箔)', '박', '얇다'], reading: '발 박', meaning: '발', strokes: 14 },
        { char: '撲', examples: ['타박상(打撲傷)', '치다', '박멸(撲滅)', '박', '때리다'], reading: '칠 박', meaning: '치다', strokes: 15 },
        { char: '剝', examples: ['박탈(剝奪)', '벗기다', '박제(剝製)', '박', '깎다'], reading: '벗길 박', meaning: '벗기다', strokes: 10 },
        { char: '珀', examples: ['호박(琥珀)', '보석', '송진', '박', '화석'], reading: '호박 박', meaning: '호박', strokes: 9 },
        { char: '樸', examples: ['순박(淳樸)', '성하다', '소박(素樸)', '박', '질박하다'], reading: '순박할 박', meaning: '순박하다', strokes: 16 },
        { char: '粕', examples: ['주박(酒粕)', '지게미', '찌꺼기', '박', '술찌꺼기'], reading: '지게미 박', meaning: '지게미', strokes: 11 },
        { char: '駁', examples: ['반박(反駁)', '논박하다', '논쟁', '박', '따지다'], reading: '논박할 박', meaning: '논박하다', strokes: 14 },
        { char: '槃', examples: ['열반(涅槃)', '쟁반', '소반', '반', '그릇'], reading: '쟁반 반', meaning: '쟁반', strokes: 14 },
        { char: '斑', examples: ['반점(斑點)', '아롱지다', '얼룩', '반', '무늬'], reading: '아롱질 반', meaning: '아롱지다', strokes: 12 },
        { char: '礬', examples: ['명반(明礬)', '백반', '화학', '반', '광물'], reading: '명반 반', meaning: '명반', strokes: 20 },
        { char: '絆', examples: ['기반(羈絆)', '얽어매다', '멍에', '반', '속박'], reading: '얽어맬 반', meaning: '얽어매다', strokes: 11 },
        { char: '畔', examples: ['강반(江畔)', '두둑', '논두렁', '반', '가장자리'], reading: '두둑 반', meaning: '두둑', strokes: 10 },
        { char: '蟠', examples: ['반전(蟠??)', '서리다', '용반(龍蟠)', '반', '구불구불'], reading: '서릴 반', meaning: '서리다', strokes: 18 },
        { char: '頒', examples: ['반포(頒布)', '나누다', '반상(頒賞)', '반', '알리다'], reading: '나눌 반', meaning: '나누다', strokes: 13 },
        { char: '攀', examples: ['등반(登攀)', '더위잡다', '오르다', '반', '매달리다'], reading: '더위잡을 반', meaning: '더위잡다', strokes: 19 },
        { char: '拌', examples: ['각반(脚拌)', '버리다', '휘젓다', '반', '섞다'], reading: '버릴 반', meaning: '버리다(나누다)', strokes: 8 },
        { char: '跋', examples: ['발호(跋扈)', '밟다', '발문(跋文)', '발', '후기'], reading: '밟을 발', meaning: '밟다', strokes: 12 },
        { char: '勃', examples: ['발발(勃發)', '일어나다', '발기(勃起)', '발', '갑자기'], reading: '일어날 발', meaning: '일어나다(노하다)', strokes: 9 },
        { char: '魃', examples: ['한발(旱魃)', '가뭄귀신', '가뭄', '발', '재해'], reading: '가뭄 귀신 발', meaning: '가뭄 귀신', strokes: 14 },
        { char: '醱', examples: ['발효(醱酵)', '술괴다', '빚다', '발', '숙성'], reading: '술 괼 발', meaning: '술 괴다', strokes: 20 },
        { char: '潑', examples: ['활발(活潑)', '물뿌리다', '발랄', '발', '튀다'], reading: '물 뿌릴 발', meaning: '물 뿌리다', strokes: 15 },
        { char: '撥', examples: ['도발(挑撥)', '다스리다', '분발(奮撥)', '발', '일으키다'], reading: '다스릴 발', meaning: '다스리다', strokes: 15 },
        { char: '彷', examples: ['방황(彷徨)', '헤매다', '모방(模彷)', '방', '떠돌다'], reading: '헤맬 방', meaning: '헤매다', strokes: 7 },
        { char: '尨', examples: ['방잡(尨雜)', '삽살개', '섞이다', '방', '개'], reading: '삽살개 방', meaning: '삽살개', strokes: 7 },
        { char: '謗', examples: ['비방(誹謗)', '헐뜯다', '훼방(毁謗)', '방', '비난'], reading: '헐뜯을 방', meaning: '헐뜯다', strokes: 17 },
        { char: '坊', examples: ['수방(水坊)', '동네', '거리', '방', '마을'], reading: '동네 방', meaning: '동네', strokes: 7 },
        { char: '膀', examples: ['방광(膀胱)', '오줌통', '신장', '방', '장기'], reading: '오줌통 방', meaning: '오줌통', strokes: 14 },
        { char: '幇', examples: ['방조(幇助)', '돕다', '방조죄', '방', '거들다'], reading: '도울 방', meaning: '돕다', strokes: 12 },
        { char: '昉', examples: ['발방(發昉)', '마치', '밝다', '방', '시작'], reading: '마치 방', meaning: '마치', strokes: 8 },
        { char: '肪', examples: ['지방(脂肪)', '기름', '비계', '방', '살'], reading: '기름 방', meaning: '기름', strokes: 8 },
        { char: '榜', examples: ['방방(榜榜)', '방붙이다', '게시', '방', '알리다'], reading: '방 붙일 방', meaning: '방 붙이다', strokes: 14 },
        { char: '枋', examples: ['소목방(蘇木枋)', '다목', '나무', '방', '재목'], reading: '다목 방', meaning: '다목', strokes: 8 },
        { char: '陪', examples: ['배석(陪席)', '모시다', '배심(陪審)', '배', '따르다'], reading: '모실 배', meaning: '모시다', strokes: 11 },
        { char: '胚', examples: ['배아(胚芽)', '아이배다', '시초', '배', '싹'], reading: '아이 밸 배', meaning: '아이 배다', strokes: 9 },
        { char: '湃', examples: ['팽배(澎湃)', '물결일다', '넘치다', '배', '파도'], reading: '물결 일 배', meaning: '물결 일다', strokes: 13 },
        { char: '徘', examples: ['배회(徘徊)', '노닐다', '거닐다', '배', '헤매다'], reading: '노닐 배', meaning: '노닐다', strokes: 11 },
        { char: '魄', examples: ['혼백(魂魄)', '넋', '영혼', '백', '기백'], reading: '넋 백', meaning: '넋', strokes: 15 },
        { char: '帛', examples: ['죽백(竹帛)', '비단', '서화', '백', '옷감'], reading: '비단 백', meaning: '비단', strokes: 8 },
        { char: '藩', examples: ['번속(藩屬)', '울타리', '제후국', '번', '나라'], reading: '울타리 번', meaning: '울타리', strokes: 18 },
        { char: '蕃', examples: ['번성(蕃盛)', '우거지다', '번식', '번', '무성하다'], reading: '우거질 번', meaning: '우거지다', strokes: 15 },
        { char: '帆', examples: ['범선(帆船)', '돗', '출범(出帆)', '범', '배'], reading: '돗 범', meaning: '돗', strokes: 6 },
        { char: '梵', examples: ['범어(梵語)', '불교', '범종(梵鐘)', '범', '인도'], reading: '범어 범', meaning: '범어', strokes: 11 },
        { char: '氾', examples: ['범람(氾濫)', '넘치다', '홍수', '범', '물'], reading: '넘칠 범', meaning: '넘치다', strokes: 5 },
        { char: '泛', examples: ['범주(泛舟)', '뜨다', '넓다', '범', '배띄우다'], reading: '뜰 범', meaning: '뜨다', strokes: 8 },
        { char: '癖', examples: ['버릇', '벽', '결벽(潔癖)', '벽', '습관'], reading: '버릇 벽', meaning: '버릇', strokes: 18 },
        { char: '劈', examples: ['벽두(劈頭)', '쪼개다', '처음', '벽', '가르다'], reading: '쪼갤 벽', meaning: '쪼개다', strokes: 15 },
        { char: '闢', examples: ['개벽(開闢)', '열다', '천지개벽', '벽', '시작'], reading: '열 벽', meaning: '열다', strokes: 21 },
        { char: '擘', examples: ['거벽(巨擘)', '엄지', '으뜸', '벽', '가르다'], reading: '엄지 벽', meaning: '엄지', strokes: 17 },
        { char: '璧', examples: ['완벽(完璧)', '구슬', '보석', '벽', '훌륭하다'], reading: '구슬 벽', meaning: '구슬', strokes: 18 },
        { char: '鼈', examples: ['자라', '별', '독별(禿鼈)', '별', '거북'], reading: '자라 별', meaning: '자라', strokes: 25 },
        { char: '瞥', examples: ['일별(一瞥)', '언뜻보다', '잠깐', '별', '보다'], reading: '언뜻 볼 별', meaning: '언뜻 보다', strokes: 16 },
        { char: '甁', examples: ['화병(花甁)', '병', '유리병', '병', '그릇'], reading: '병 병', meaning: '병', strokes: 13 },
        { char: '餠', examples: ['화중지병(畵中之餠)', '떡', '전병(煎餠)', '병', '음식'], reading: '떡 병', meaning: '떡', strokes: 15 },
        { char: '菩', examples: ['보살(菩薩)', '보리(菩提)', '불교', '보', '깨달음'], reading: '보살 보', meaning: '보살', strokes: 11 },
        { char: '堡', examples: ['보루(堡壘)', '작은성', '진지', '보', '요새'], reading: '작은 성 보', meaning: '작은 성', strokes: 12 },
        { char: '洑', examples: ['보', '저수지', '보', '둑', '물막이'], reading: '보 보', meaning: '보', strokes: 9 },
        { char: '鰒', examples: ['전복', '복', '석결명(石決明)', '복', '해산물'], reading: '전복 복', meaning: '전복', strokes: 20 },
        { char: '僕', examples: ['공복(公僕)', '종', '하인', '복', '머슴'], reading: '종 복', meaning: '종', strokes: 14 },
        { char: '匐', examples: ['포복(匍匐)', '기어가다', '엎드리다', '복', '기다'], reading: '기어갈 복', meaning: '기어가다', strokes: 11 },
        { char: '輻', examples: ['폭주(輻輳)', '바퀴살', '복사(輻射)', '복', '모이다'], reading: '바퀴살 복', meaning: '바퀴살', strokes: 15 },
        { char: '鋒', examples: ['선봉(先鋒)', '칼끝', '봉기(鋒起)', '봉', '날카롭다'], reading: '칼끝 봉', meaning: '칼끝', strokes: 15 },
        { char: '烽', examples: ['봉화(烽火)', '봉수', '봉초', '봉', '신호'], reading: '봉화 봉', meaning: '봉화', strokes: 11 },
        { char: '捧', examples: ['봉대(捧對)', '받들다', '바치다', '봉', '올리다'], reading: '받들 봉', meaning: '받들다', strokes: 11 },
        { char: '棒', examples: ['몽둥이', '봉', '철봉(鐵棒)', '봉', '막대기'], reading: '몽둥이 봉', meaning: '몽둥이', strokes: 12 },
        { char: '賻', examples: ['부의(賻儀)', '부의금', '조의금', '부', '부조'], reading: '부의 부', meaning: '부의', strokes: 17 },
        { char: '駙', examples: ['부마(駙馬)', '사위', '임금사위', '부', '말'], reading: '부마 부', meaning: '부마', strokes: 15 },
        { char: '訃', examples: ['부고(訃告)', '부음(訃音)', '통지', '부', '알리다'], reading: '부고 부', meaning: '부고', strokes: 9 },
        { char: '芙', examples: ['부용(芙蓉)', '연꽃', '아름답다', '부', '꽃'], reading: '연꽃 부', meaning: '연꽃', strokes: 7 },
        { char: '腑', examples: ['폐부(肺腑)', '장부', '육부(六腑)', '부', '속마음'], reading: '장부 부', meaning: '장부', strokes: 12 },
        { char: '斧', examples: ['부월(斧鉞)', '도끼', '작두', '부', '찍다'], reading: '도끼 부', meaning: '도끼', strokes: 8 },
        { char: '埠', examples: ['부두(埠頭)', '선창', '항구', '부', '나루터'], reading: '부두 부', meaning: '부두', strokes: 11 },
        { char: '咐', examples: ['분부(吩咐)', '명령하다', '시키다', '부', '알리다'], reading: '분부할 부', meaning: '분부하다', strokes: 8 },
        { char: '剖', examples: ['해부(解剖)', '쪼개다', '분석', '부', '가르다'], reading: '쪼갤 부', meaning: '쪼개다', strokes: 10 },
        { char: '俯', examples: ['부감(俯瞰)', '구부리다', '가산(俯産)', '부', '숙이다'], reading: '구부릴 부', meaning: '구부리다', strokes: 10 },
        { char: '孵', examples: ['부화(孵化)', '알까다', '기르다', '부', '새끼'], reading: '알 깔 부', meaning: '알 까다', strokes: 14 },
        { char: '扮', examples: ['분장(扮裝)', '꾸미다', '분뇨(扮尿)', '분', '역할'], reading: '꾸밀 분', meaning: '꾸미다', strokes: 7 },
        { char: '雰', examples: ['분위기(雰圍氣)', '안개', '눈', '분', '기운'], reading: '안개 분', meaning: '안개(분위기)', strokes: 12 },
        { char: '盆', examples: ['화분(花盆)', '동이', '분지(盆地)', '분', '그릇'], reading: '동이 분', meaning: '동이', strokes: 9 },
        { char: '焚', examples: ['분서(焚書)', '불사르다', '분신(焚身)', '분', '태우다'], reading: '불사를 분', meaning: '불사르다', strokes: 12 },
        { char: '吩', examples: ['분부(吩咐)', '명령', '시키다', '분', '알리다'], reading: '분부할 분', meaning: '분부하다', strokes: 7 },
        { char: '噴', examples: ['분수(噴水)', '뿜다', '분출(噴出)', '분', '토하다'], reading: '뿜을 분', meaning: '뿜다', strokes: 15 },
        { char: '忿', examples: ['의분(義忿)', '성내다', '분노(忿怒)', '분', '화내다'], reading: '성낼 분', meaning: '성내다', strokes: 8 },
        { char: '糞', examples: ['분뇨(糞尿)', '똥', '거름', '분', '오물'], reading: '똥 분', meaning: '똥', strokes: 17 },
        { char: '彿', examples: ['방불(彷彿)', '비슷하다', '흡사', '불', '닮다'], reading: '비슷할 불', meaning: '비슷하다', strokes: 8 },
        { char: '棚', examples: ['대붕(大棚)', '시렁', '선반', '붕', '가게'], reading: '시렁 붕', meaning: '시렁', strokes: 12 },
        { char: '硼', examples: ['붕소(硼素)', '붕산', '화학', '붕', '원소'], reading: '붕소 붕', meaning: '붕소', strokes: 13 },
        { char: '繃', examples: ['붕대(繃帶)', '묶다', '감다', '붕', '치료'], reading: '묶을 붕', meaning: '묶다', strokes: 17 },
        { char: '誹', examples: ['비방(誹謗)', '헐뜯다', '욕하다', '비', '비난'], reading: '헐뜯을 비', meaning: '헐뜯다', strokes: 15 },
        { char: '砒', examples: ['비소(砒素)', '독약', '비상(砒霜)', '비', '광물'], reading: '비소 비', meaning: '비소', strokes: 9 },
        { char: '妣', examples: ['현비(顯妣)', '어머니', '돌아가신어머니', '비', '제사'], reading: '죽은 어미 비', meaning: '죽은 어미', strokes: 7 },
        { char: '鄙', examples: ['비루(鄙陋)', '더럽다', '천하다', '비', '비열하다'], reading: '더러울 비', meaning: '더럽다', strokes: 14 },
        { char: '譬', examples: ['비유(譬喩)', '비유하다', '예를들다', '비', '빗대다'], reading: '비유할 비', meaning: '비유하다', strokes: 20 },
        { char: '裨', examples: ['비보(裨補)', '돕다', '유익하다', '비', '보태다'], reading: '도울 비', meaning: '돕다', strokes: 14 },
        { char: '臂', examples: ['비완(臂腕)', '팔', '팔뚝', '비', '신체'], reading: '팔 비', meaning: '팔', strokes: 17 },
        { char: '脾', examples: ['비장(脾臟)', '지라', '비위(脾胃)', '비', '장기'], reading: '지라 비', meaning: '지라', strokes: 12 },
        { char: '翡', examples: ['비취(翡翠)', '물총새', '옥', '비', '보석'], reading: '물총새 비', meaning: '물총새', strokes: 14 },
        { char: '扉', examples: ['서비(柴扉)', '문짝', '사립문', '비', '문'], reading: '문짝 비', meaning: '문짝', strokes: 12 },
        { char: '秕', examples: ['비정(秕政)', '쭉정이', '나쁜정치', '비', '껍질'], reading: '쭉정이 비', meaning: '쭉정이', strokes: 9 },
        { char: '痺', examples: ['마비(麻痺)', '저리다', '심장마비', '비', '굳다'], reading: '마비될 비', meaning: '마비되다', strokes: 13 },
        { char: '琵', examples: ['비파(琵琶)', '악기', '비파나무', '비', '연주'], reading: '비파 비', meaning: '비파', strokes: 12 },
        { char: '沸', examples: ['비등(沸騰)', '끓다', '용솟음치다', '비', '끓어오르다'], reading: '끓을 비', meaning: '끓다', strokes: 8 },
        { char: '憊', examples: ['곤비(困憊)', '고달프다', '지치다', '비', '피곤'], reading: '고달플 비', meaning: '고달프다', strokes: 16 },
        { char: '匕', examples: ['비수(匕首)', '칼', '숟가락', '비', '날카롭다'], reading: '비수 비', meaning: '비수', strokes: 2 },
        { char: '蜚', examples: ['유비(流蜚)', '바퀴', '벌레', '비', '유언비어'], reading: '바퀴 비', meaning: '바퀴', strokes: 14 },
        { char: '庇', examples: ['비호(庇護)', '덮다', '감싸다', '비', '보호'], reading: '덮을 비', meaning: '덮다', strokes: 7 },
        { char: '緋', examples: ['비단(緋緞)', '비단', '붉다', '비', '홍색'], reading: '비단 비', meaning: '비단(붉은빛)', strokes: 14 },
        { char: '殯', examples: ['빈소(殯所)', '장례', '발인', '빈', '상여'], reading: '빈소 빈', meaning: '빈소', strokes: 18 },
        { char: '濱', examples: ['해빈(海濱)', '물가', '해변', '빈', '강가'], reading: '물가 빈', meaning: '물가', strokes: 17 },
        { char: '嬪', examples: ['세자빈(世子嬪)', '아내', '빈궁', '빈', '궁녀'], reading: '아내 빈', meaning: '아내(빈)', strokes: 17 },
        { char: '嚬', examples: ['효빈(效嚬)', '찌푸리다', '찡그리다', '빈', '흉내'], reading: '찌푸릴 빈', meaning: '찌푸리다', strokes: 19 },
        { char: '瀕', examples: ['빈사(瀕死)', '임박하다', '물가', '빈', '다다르다'], reading: '물가 빈', meaning: '물가(임박하다)', strokes: 19 },
        { char: '憑', examples: ['빙의(憑依)', '기대다', '의지하다', '빙', '귀신들리다'], reading: '기댈 빙', meaning: '기대다', strokes: 16 },
        { char: '逼', examples: ['핍박(逼迫)', '닥치다', '구박', '핍', '괴롭히다'], reading: '닥칠 핍', meaning: '닥치다(핍박)', strokes: 12 },
        { char: '乏', examples: ['결핍(缺乏)', '모자라다', '가난', '핍', '없다'], reading: '모자랄 핍', meaning: '모자라다', strokes: 4 },
        { char: '些', examples: ['사소(些少)', '적다', '약간', '사', '조금'], reading: '적을 사', meaning: '적다', strokes: 8 },
        { char: '麝', examples: ['사향(麝香)', '노루', '향기', '사', '동물'], reading: '사향 사', meaning: '사향', strokes: 21 },
        { char: '祠', examples: ['사당(祠堂)', '제사', '신사(神祠)', '사', '사당'], reading: '사당 사', meaning: '사당', strokes: 10 },
        { char: '紗', examples: ['독사(毒紗)', '비단', '면사(綿紗)', '사', '실'], reading: '비단 사', meaning: '비단', strokes: 10 },
        { char: '嗣', examples: ['후사(後嗣)', '잇다', '상속', '사', '자손'], reading: '이을 사', meaning: '잇다', strokes: 13 },
        { char: '奢', examples: ['사치(奢侈)', '자랑하다', '호화', '사', '낭비'], reading: '사치할 사', meaning: '사치하다', strokes: 12 },
        { char: '娑', examples: ['사바(娑婆)', '춤추다', '불교', '사', '세계'], reading: '춤출 사', meaning: '춤추다', strokes: 10 },
        { char: '徙', examples: ['이사(移徙)', '옮기다', '천사(遷徙)', '사', '거처'], reading: '옮길 사', meaning: '옮기다', strokes: 11 },
        { char: '瀉', examples: ['설사(洩瀉)', '쏟다', '토사(吐瀉)', '사', '배설'], reading: '쏟을 사', meaning: '쏟다', strokes: 19 },
        { char: '獅', examples: ['사자(獅子)', '맹수', '사자吼', '사', '용맹'], reading: '사자 사', meaning: '사자', strokes: 13 },
        { char: '蓑', examples: ['도롱이', '사', '우장', '사', '비옷'], reading: '도롱이 사', meaning: '도롱이', strokes: 13 },
        { char: '疝', examples: ['산통(疝痛)', '산증', '복통', '산', '아프다'], reading: '산증 산', meaning: '산증', strokes: 8 },
        { char: '珊', examples: ['산호(珊瑚)', '보석', '바다', '산', '구슬'], reading: '산호 산', meaning: '산호', strokes: 10 },
        { char: '刪', examples: ['삭감(削減)', '깎다', '삭제(削除)', '산', '지우다'], reading: '깎을 산', meaning: '깎다', strokes: 7 },
        { char: '撒', examples: ['살포(撒布)', '뿌리다', '산재(撒在)', '살', '흩뜨리다'], reading: '뿌릴 살', meaning: '뿌리다', strokes: 15 },
        { char: '煞', examples: ['살기(煞氣)', '죽이다', '상쇄(相煞)', '살', '흉하다'], reading: '죽일 살', meaning: '죽이다(사람 죽일 쇄)', strokes: 13 },
        { char: '薩', examples: ['보살(菩薩)', '부처', '보살피다', '살', '불교'], reading: '보살 살', meaning: '보살', strokes: 18 },
        { char: '滲', examples: ['삼투(滲透)', '스며들다', '번지다', '삼', '배다'], reading: '스며들 삼', meaning: '스며들다', strokes: 14 },
        { char: '澁', examples: ['난삽(難澁)', '떫다', '매끄럽지않다', '삽', '거칠다'], reading: '떫을 삽', meaning: '떫다', strokes: 15 },
        { char: '爽', examples: ['상쾌(爽快)', '시원하다', '명랑', '상', '밝다'], reading: '시원할 상', meaning: '시원하다', strokes: 11 },
        { char: '翔', examples: ['비상(飛翔)', '날다', '활공', '상', '오르다'], reading: '날 상', meaning: '날다', strokes: 12 },
        { char: '殤', examples: ['국상(國殤)', '일찍죽다', '요절(夭殤)', '상', '죽음'], reading: '일찍 죽을 상', meaning: '일찍 죽다', strokes: 11 },
        { char: '孀', examples: ['청상과부(靑孀寡婦)', '과부', '홀어미', '상', '혼자'], reading: '과부 상', meaning: '과부', strokes: 20 },
        { char: '璽', examples: ['옥새(玉璽)', '도장', '국새(國璽)', '새', '임금도장'], reading: '옥새 새', meaning: '옥새', strokes: 19 },
        { char: '嗇', examples: ['인색(吝嗇)', '아끼다', '구두쇠', '색', '절약'], reading: '아낄 색', meaning: '아끼다', strokes: 13 },
        { char: '牲', examples: ['희생(犧牲)', '제물', '가축', '생', '바치다'], reading: '희생 생', meaning: '희생', strokes: 9 },
        { char: '甥', examples: ['생질(甥姪)', '조카', '누이아들', '생', '친척'], reading: '생질 생', meaning: '생질(누이의 아들)', strokes: 12 },
        { char: '抒', examples: ['서정(抒情)', '풀다', '표현하다', '서', '감정'], reading: '풀 서', meaning: '풀다', strokes: 8 },
        { char: '棲', examples: ['서식(棲息)', '살다', '동거(同棲)', '서', '깃들다'], reading: '살 서', meaning: '살다(깃들다)', strokes: 12 },
        { char: '犀', examples: ['서각(犀角)', '무소', '코뿔소', '서', '뿔'], reading: '무소 서', meaning: '무소(코뿔소)', strokes: 12 },
        { char: '胥', examples: ['서리(胥吏)', '서로', '돕다', '서', '관리'], reading: '서로 서', meaning: '서로', strokes: 9 },
        { char: '薯', examples: ['감자(甘薯)', '마', '고구마', '서', '식물'], reading: '마 서', meaning: '마(감자)', strokes: 17 },
        { char: '黍', examples: ['기장', '서', '곡식', '서', '수수'], reading: '기장 서', meaning: '기장', strokes: 12 },
        { char: '嶼', examples: ['도서(島嶼)', '섬', '작은섬', '서', '바다'], reading: '섬 서', meaning: '섬', strokes: 17 },
        { char: '曙', examples: ['서광(曙光)', '새벽', '희망', '서', '동트다'], reading: '새벽 서', meaning: '새벽', strokes: 17 },
        { char: '鼠', examples: ['궁서(窮鼠)', '쥐', '작다', '서', '도망'], reading: '쥐 서', meaning: '쥐', strokes: 13 },
        { char: '壻', examples: ['여서(女壻)', '사위', '남편', '서', '혼인'], reading: '사위 서', meaning: '사위', strokes: 12 },
        { char: '潟', examples: ['개석(開潟)', '개펄', '간석지', '석', '갯벌'], reading: '개펄 석', meaning: '개펄', strokes: 15 },
        { char: '煽', examples: ['선동(煽動)', '부채질하다', '선풍(煽風)', '선', '자극하다'], reading: '부채질할 선', meaning: '부채질하다', strokes: 14 },
        { char: '銑', examples: ['선철(銑鐵)', '무쇠', '철광석', '선', '쇠'], reading: '무쇠 선', meaning: '무쇠', strokes: 14 },
        { char: '膳', examples: ['수라선(水剌膳)', '반찬', '진수성찬', '선', '식사'], reading: '반찬 선', meaning: '반찬', strokes: 16 },
        { char: '羨', examples: ['선망(羨望)', '부러워하다', '부럼', '선', '질투'], reading: '부러워할 선', meaning: '부러워하다', strokes: 13 },
        { char: '扇', examples: ['선풍기(扇風機)', '부채', '부채질', '선', '바람'], reading: '부채 선', meaning: '부채', strokes: 10 },
        { char: '腺', examples: ['갑상선(甲狀腺)', '샘', '선세포', '선', '분비'], reading: '샘 선', meaning: '샘', strokes: 13 },
        { char: '屑', examples: ['목설(木屑)', '가루', '톱밥', '설', '부스러기'], reading: '가루 설', meaning: '가루', strokes: 10 },
        { char: '泄', examples: ['누설(漏泄)', '새다', '배설(排泄)', '설', '퍼뜨리다'], reading: '샐 설', meaning: '새다', strokes: 9 },
        { char: '洩', examples: ['유출(流洩)', '새다', '누설(漏洩)', '설', '흘러나오다'], reading: '샐 설', meaning: '새다', strokes: 9 },
        { char: '渫', examples: ['준설(浚渫)', '치다', '파내다', '설', '제거하다'], reading: '칠 설', meaning: '치다(파내다)', strokes: 12 },
        { char: '閃', examples: ['섬광(閃光)', '번쩍이다', '섬섬(閃閃)', '섬', '빛나다'], reading: '번쩍일 섬', meaning: '번쩍이다', strokes: 10 },
        { char: '殲', examples: ['섬멸(殲滅)', '다죽이다', '전멸', '섬', '없애다'], reading: '다 죽일 섬', meaning: '다 죽이다', strokes: 21 },
        { char: '醒', examples: ['각성(覺醒)', '깨다', '성찰', '성', '일깨우다'], reading: '깰 성', meaning: '깨다', strokes: 16 },
        { char: '簫', examples: ['퉁소(簫管)', '피리', '옥퉁소', '소', '악기'], reading: '퉁소 소', meaning: '퉁소', strokes: 18 },
        { char: '塑', examples: ['소조(塑造)', '토우', '플라스틱', '소', '빚다'], reading: '토우 소', meaning: '토우', strokes: 13 },
        { char: '遡', examples: ['소급(遡及)', '거슬러 올라가다', '소구(遡求)', '소', '되돌아가다'], reading: '거슬러 올라갈 소', meaning: '거슬러 올라가다', strokes: 14 },
        { char: '逍', examples: ['소요(逍遙)', '거닐다', '노닐다', '소', '자유'], reading: '거닐 소', meaning: '거닐다', strokes: 11 },
        { char: '蕭', examples: ['소연(蕭然)', '쓸쓸하다', '소슬(蕭瑟)', '소', '조용하다'], reading: '맑은 대쑥 소', meaning: '맑은 대쑥', strokes: 16 },
        { char: '瘙', examples: ['소양증(瘙痒症)', '가렵다', '종기', '소', '긁다'], reading: '종기 소', meaning: '종기(가렵다)', strokes: 15 },
        { char: '疎', examples: ['소외(疎外)', '트이다', '소통(疎通)', '소', '멀다'], reading: '트일 소', meaning: '트이다', strokes: 12 },
        { char: '甦', examples: ['소생(甦生)', '되살아나다', '부활', '소', '깨어나다'], reading: '되살아날 소', meaning: '되살아나다', strokes: 12 },
        { char: '梳', examples: ['소발(梳髮)', '빗', '빗질', '소', '다듬다'], reading: '빗 소', meaning: '빗', strokes: 11 },
        { char: '宵', examples: ['철야(徹宵)', '밤', '저녁', '소', '어둠'], reading: '밤 소', meaning: '밤', strokes: 10 },
        { char: '搔', examples: ['소파(搔爬)', '긁다', '파내다', '소', '가렵다'], reading: '긁을 소', meaning: '긁다', strokes: 13 },
        { char: '贖', examples: ['속죄(贖罪)', '속바치다', '대속(代贖)', '속', '갚다'], reading: '속바칠 속', meaning: '속바치다', strokes: 22 },
        { char: '遜', examples: ['겸손(謙遜)', '사양(遜讓)', '손색(遜色)', '손', '낮추다'], reading: '겸손할 손', meaning: '겸손하다', strokes: 14 },
        { char: '悚', examples: ['죄송(罪悚)', '두려워하다', '황송(惶悚)', '송', '무섭다'], reading: '두려워할 송', meaning: '두려워하다', strokes: 10 },
        { char: '碎', examples: ['분쇄(粉碎)', '부수다', '파쇄(破碎)', '쇄', '깨다'], reading: '부술 쇄', meaning: '부수다', strokes: 13 },
        { char: '灑', examples: ['쇄락(灑落)', '뿌리다', '물뿌리다', '쇄', '씻다'], reading: '뿌릴 쇄', meaning: '뿌리다', strokes: 22 },
        { char: '蒐', examples: ['수집(蒐集)', '모으다', '수색(蒐索)', '수', '찾다'], reading: '모을 수', meaning: '모으다', strokes: 13 },
        { char: '嫂', examples: ['형수(兄嫂)', '아주머니', '제수(弟嫂)', '수', '올케'], reading: '형수 수', meaning: '형수', strokes: 13 },
        { char: '戍', examples: ['수비(戍備)', '지키다', '국경', '수', '위수'], reading: '지킬 수', meaning: '지키다', strokes: 6 },
        { char: '髓', examples: ['골수(骨髓)', '뼛골', '정수(精髓)', '수', '핵심'], reading: '골수 수', meaning: '골수', strokes: 23 },
        { char: '酬', examples: ['보수(報酬)', '갚다', '응수(應酬)', '수', '대가'], reading: '갚을 수', meaning: '갚다', strokes: 13 },
        { char: '袖', examples: ['소매', '수', '장수(長袖)', '수', '옷'], reading: '소매 수', meaning: '소매', strokes: 10 },
        { char: '羞', examples: ['수치(羞恥)', '부끄럽다', '수오(羞惡)', '수', '창피하다'], reading: '부끄러울 수', meaning: '부끄럽다', strokes: 11 },
        { char: '狩', examples: ['수렵(狩獵)', '사냥', '사냥꾼', '수', '잡다'], reading: '사냥 수', meaning: '사냥', strokes: 9 },
        { char: '繡', examples: ['자수(刺繡)', '수놓다', '비단', '수', '장식'], reading: '수놓을 수', meaning: '수놓다', strokes: 19 },
        { char: '粹', examples: ['순수(純粹)', '진리', '국수(國粹)', '수', '깨끗하다'], reading: '순수할 수', meaning: '순수하다', strokes: 14 },
        { char: '竪', examples: ['횡수(橫竪)', '세우다', '곧다', '수', '높다'], reading: '세울 수', meaning: '세우다', strokes: 13 },
        { char: '穗', examples: ['출수(出穗)', '이삭', '벼', '수', '열매'], reading: '이삭 수', meaning: '이삭', strokes: 17 },
        { char: '瘦', examples: ['비수(肥瘦)', '여위다', '마르다', '수', '홀쭉하다'], reading: '여윌 수', meaning: '여위다', strokes: 15 },
        { char: '讎', examples: ['원수(怨讎)', '갚다', '복수', '수', '대적하다'], reading: '원수 수', meaning: '원수', strokes: 23 },
        { char: '夙', examples: ['숙원(夙願)', '일찍', '숙성(夙成)', '숙', '오래되다'], reading: '일찍 숙', meaning: '일찍', strokes: 6 },
        { char: '菽', examples: ['숙맥(菽麥)', '콩', '오곡', '숙', '곡식'], reading: '콩 숙', meaning: '콩', strokes: 11 },
        { char: '塾', examples: ['사숙(私塾)', '글방', '학원', '숙', '배우다'], reading: '글방 숙', meaning: '글방', strokes: 14 },
        { char: '醇', examples: ['순정(醇正)', '진한술', '순수하다', '순', '진하다'], reading: '진한 술 순', meaning: '진한 술', strokes: 15 },
        { char: '筍', examples: ['죽순(竹筍)', '순', '우후죽순(雨後竹筍)', '순', '대나무'], reading: '죽순 순', meaning: '죽순', strokes: 12 },
        { char: '馴', examples: ['순치(馴致)', '길들이다', '온순(溫馴)', '순', '익숙하다'], reading: '길들일 순', meaning: '길들이다', strokes: 10 },
        { char: '膝', examples: ['슬하(膝下)', '무릎', '슬관절', '슬', '자손'], reading: '무릎 슬', meaning: '무릎', strokes: 15 },
        { char: '丞', examples: ['정승(政丞)', '돕다', '승상(丞相)', '승', '벼슬'], reading: '도울 승', meaning: '돕다', strokes: 6 },
        { char: '柿', examples: ['연시(軟柿)', '감', '홍시(紅柿)', '시', '과일'], reading: '감 시', meaning: '감', strokes: 9 },
        { char: '匙', examples: ['시가(匙架)', '숟가락', '수저', '시', '밥숟가락'], reading: '숟가락 시', meaning: '숟가락', strokes: 11 },
        { char: '媤', examples: ['시댁(媤宅)', '시집', '시가', '시', '시어머니'], reading: '시집 시', meaning: '시집', strokes: 12 },
        { char: '弑', examples: ['시해(弑害)', '죽이다', '암살', '시', '임금죽이다'], reading: '죽일 시', meaning: '죽이다', strokes: 12 },
        { char: '猜', examples: ['시기(猜忌)', '의심하다', '샘내다', '시', '질투'], reading: '시기할 시', meaning: '시기하다', strokes: 11 },
        { char: '諡', examples: ['시호(諡號)', '이름', '죽은뒤이름', '시', '칭호'], reading: '시호 시', meaning: '시호', strokes: 16 },
        { char: '豺', examples: ['시낭(豺狼)', '승냥이', '하이에나', '시', '짐승'], reading: '승냥이 시', meaning: '승냥이', strokes: 10 },
        { char: '熄', examples: ['종식(終熄)', '꺼지다', '소멸', '식', '없어지다'], reading: '꺼질 식', meaning: '꺼지다', strokes: 14 },
        { char: '蝕', examples: ['침식(侵蝕)', '좀먹다', '부식(腐蝕)', '식', '갉아먹다'], reading: '좀먹을 식', meaning: '좀먹다', strokes: 15 },
        { char: '拭', examples: ['불식(拂拭)', '닦다', '씻다', '식', '없애다'], reading: '닦을 식', meaning: '닦다', strokes: 9 },
        { char: '薪', examples: ['와신상담(臥薪嘗膽)', '섶', '땔나무', '신', '연료'], reading: '섶 신', meaning: '섶', strokes: 17 },
        { char: '迅', examples: ['신속(迅速)', '빠르다', '혁신', '신', '급하다'], reading: '빠를 신', meaning: '빠르다', strokes: 7 },
        { char: '蜃', examples: ['신기루(蜃氣樓)', '무명조개', '조개', '신', '환상'], reading: '무명조개 신', meaning: '무명조개(신기루)', strokes: 13 },
        { char: '燼', examples: ['여진(餘燼)', '깜부기불', '재', '신', '남은불'], reading: '깜부기불 신', meaning: '깜부기불', strokes: 18 },
        { char: '宸', examples: ['신금(宸襟)', '대궐', '임금', '신', '궁궐'], reading: '대궐 신', meaning: '대궐', strokes: 10 },
        { char: '娠', examples: ['임신(妊娠)', '아이배다', '잉태', '신', '태아'], reading: '아이 밸 신', meaning: '아이 배다', strokes: 10 },
        { char: '呻', examples: ['신음(呻吟)', '끙끙거리다', '앓다', '신', '소리'], reading: '끙끙거릴 신', meaning: '끙끙거리다', strokes: 8 },
        { char: '訊', examples: ['심신(審訊)', '묻다', '신문(訊問)', '신', '조사하다'], reading: '물을 신', meaning: '묻다', strokes: 10 },
        { char: '悉', examples: ['상실(詳悉)', '다', '모두', '실', '알다'], reading: '다 실', meaning: '다', strokes: 11 },
        { char: '什', examples: ['가재도구', '세간', '집기', '십', '살림'], reading: '세간 십', meaning: '세간(열 십)', strokes: 4 },
        { char: '牙', examples: ['상아(象牙)', '어금니', '치아', '아', '이'], reading: '어금니 아', meaning: '어금니', strokes: 4 },
        { char: '衙', examples: ['관아(官衙)', '관청', '마을', '아', '청사'], reading: '관청 아', meaning: '관청', strokes: 13 },
        { char: '訝', examples: ['괴아(怪訝)', '의심하다', '의아', '아', '이상하다'], reading: '의심할 아', meaning: '의심하다', strokes: 11 },
        { char: '堊', examples: ['백악(白堊)', '흰흙', '분필', '악', '도료'], reading: '흰 흙 악', meaning: '흰 흙', strokes: 11 },
        { char: '顎', examples: ['악관절(顎關節)', '턱', '주걱턱', '악', '입'], reading: '턱 악', meaning: '턱', strokes: 18 },
        { char: '幄', examples: ['천막(天幄)', '휘장', '장막', '악', '막'], reading: '휘장 악', meaning: '휘장', strokes: 12 },
        { char: '晏', examples: ['안가(晏駕)', '늦다', '안녕', '안', '편안하다'], reading: '늦을 안', meaning: '늦다', strokes: 10 },
        { char: '鞍', examples: ['안장(鞍裝)', '말안장', '가죽', '안', '타다'], reading: '안장 안', meaning: '안장', strokes: 15 },
        { char: '韈', examples: ['양말(洋韈)', '버선', '족의', '안', '신발'], reading: '버선 안', meaning: '버선', strokes: 21 },
        { char: '斡', examples: ['알선(斡旋)', '돌다', '중재', '알', '주선하다'], reading: '돌 알', meaning: '돌다(관리하다)', strokes: 14 },
        { char: '謁', examples: ['알현(謁見)', '뵙다', '면회', '알', '만나다'], reading: '봬 알', meaning: '뵙다', strokes: 16 },
        { char: '軋', examples: ['알력(軋轢)', '삐걱거리다', '마찰', '알', '다투다'], reading: '삐걱거릴 알', meaning: '삐걱거리다', strokes: 8 },
        { char: '巖', examples: ['암석(巖石)', '바위', '용암(鎔巖)', '암', '절벽'], reading: '바위 암', meaning: '바위', strokes: 23 },
        { char: '癌', examples: ['위암(胃癌)', '암', '종양', '암', '병'], reading: '암 암', meaning: '암', strokes: 17 },
        { char: '唵', examples: ['옴(唵)', '머금다', '진언', '암', '주문'], reading: '머금으라 암', meaning: '머금으라(옴)', strokes: 11 },
        { char: '押', examples: ['압류(押留)', '누르다', '압수(押收)', '압', '도장'], reading: '누를 압', meaning: '누르다', strokes: 8 },
        { char: '泱', examples: ['앙앙(泱泱)', '넓다', '흐르다', '앙', '깊다'], reading: '넓을 앙', meaning: '넓다', strokes: 8 },
        { char: '鴦', examples: ['원앙(鴛鴦)', '새', '부부', '앙', '암컷'], reading: '원앙 앙', meaning: '원앙(암컷)', strokes: 16 },
        { char: '殃', examples: ['재앙(災殃)', '앙화(殃禍)', '불행', '앙', '해'], reading: '재앙 앙', meaning: '재앙', strokes: 9 },
        { char: '靄', examples: ['애광(靄光)', '아지랑이', '안개', '애', '기운'], reading: '아지랑이 애', meaning: '아지랑이', strokes: 24 },
        { char: '隘', examples: ['애로(隘路)', '좁다', '협애(狹隘)', '애', '험하다'], reading: '좁을 애', meaning: '좁다', strokes: 12 },
        { char: '厄', examples: ['액운(厄運)', '액', '재앙(災厄)', '액', '재난'], reading: '액 액', meaning: '액', strokes: 4 },
        { char: '呃', examples: ['액역(呃逆)', '딸꾹질', '막히다', '액', '목메다'], reading: '딸꾹질할 액', meaning: '딸꾹질하다', strokes: 7 },
        { char: '阨', examples: ['곤액(困阨)', '막히다', '재앙', '액', '좁다'], reading: '막힐 액', meaning: '막히다', strokes: 8 },
        { char: '腋', examples: ['액취(腋臭)', '겨드랑이', '암내', '액', '신체'], reading: '겨드랑이 액', meaning: '겨드랑이', strokes: 12 },
        { char: '櫻', examples: ['앵두(櫻桃)', '벚나무', '앵화(櫻花)', '앵', '꽃'], reading: '벚 앵', meaning: '벚', strokes: 21 },
        { char: '鶯', examples: ['앵무(鶯鵡)', '꾀꼬리', '봄', '앵', '새'], reading: '꾀꼬리 앵', meaning: '꾀꼬리', strokes: 21 },
        { char: '耶', examples: ['야소(耶蘇)', '예수', '어조사', '야', '그런가'], reading: '어조사 야', meaning: '어조사', strokes: 9 },
        { char: '惹', examples: ['야기(惹起)', '일으키다', '이끌다', '야', '초래하다'], reading: '이끌 야', meaning: '이끌다(일으키다)', strokes: 13 },
        { char: '揶', examples: ['야유(揶揄)', '놀리다', '조롱', '야', '비웃다'], reading: '놀릴 야', meaning: '놀리다', strokes: 12 },
        { char: '爺', examples: ['할아버지', '아비', '야야(爺爺)', '야', '노인'], reading: '아비 야', meaning: '아비(어르신네)', strokes: 13 },
        { char: '冶', examples: ['도야(陶冶)', '불리다', '대장장이', '야', '다듬다'], reading: '불릴 야', meaning: '불리다', strokes: 7 },
        { char: '躍', examples: ['도약(跳躍)', '뛰다', '활약(活躍)', '약', '발전'], reading: '뛸 약', meaning: '뛰다', strokes: 21 },
        { char: '壤', examples: ['토양(土壤)', '흙', '천양지차(天壤之差)', '양', '땅'], reading: '흙 양', meaning: '흙', strokes: 17 },
        { char: '恙', examples: ['무양(無恙)', '근심', '안부', '양', '병'], reading: '근심 양', meaning: '근심', strokes: 10 },
        { char: '痒', examples: ['소양증(瘙痒症)', '가렵다', '긁다', '양', '피부병'], reading: '가려울 양', meaning: '가렵다', strokes: 11 },
        { char: '瘍', examples: ['종양(腫瘍)', '종기', '궤양(潰瘍)', '양', '상처'], reading: '종기 양', meaning: '종기', strokes: 14 },
        { char: '楊', examples: ['수양버들(垂楊-)', '버들', '양류(楊柳)', '양', '나무'], reading: '버들 양', meaning: '버들', strokes: 13 },
        { char: '佯', examples: ['양동(佯動)', '거짓', '가장하다', '양', '속이다'], reading: '거짓 양', meaning: '거짓', strokes: 8 },
        { char: '釀', examples: ['양조(釀造)', '빚다', '발효', '양', '술'], reading: '빚을 양', meaning: '빚다', strokes: 24 },
        { char: '鰺', examples: ['전갱이', '소', '생선', '어류', '물고기'], reading: '전갱이 소', meaning: '전갱이(양?)', strokes: 22 },
        { char: '圄', examples: ['영어(囹圄)', '감옥', '옥살이', '어', '가두다'], reading: '감옥 어', meaning: '감옥', strokes: 10 },
        { char: '馭', examples: ['제어(制御)', '부리다', '통제', '어', '다루다'], reading: '부릴 어', meaning: '부리다(말)', strokes: 12 },
        { char: '臆', examples: ['억측(臆測)', '가슴', '억설(臆說)', '억', '추측'], reading: '가슴 억', meaning: '가슴(억측)', strokes: 17 },
        { char: '偃', examples: ['언월도(偃月刀)', '쓰러지다', '눕다', '언', '쉬다'], reading: '쓰러질 언', meaning: '쓰러지다', strokes: 11 },
        { char: '堰', examples: ['방죽', '언', '둑', '보', '제방'], reading: '방죽 언', meaning: '방죽', strokes: 12 },
        { char: '諺', examples: ['속담(俗談)', '이언(俚諺)', '상말', '언', '말'], reading: '상말 언', meaning: '상말(속담)', strokes: 16 },
        { char: '儼', examples: ['엄연(儼然)', '엄하다', '의젓하다', '엄', '엄숙'], reading: '엄할 엄', meaning: '엄하다', strokes: 22 },
        { char: '奄', examples: ['엄류(奄留)', '문득', '가리다', '엄', '갑자기'], reading: '문득 엄', meaning: '문득', strokes: 8 },
        { char: '掩', examples: ['엄폐(掩蔽)', '가리다', '엄호(掩護)', '엄', '숨기다'], reading: '가릴 엄', meaning: '가리다', strokes: 11 },
        { char: '業', examples: ['사업(事業)', '업무', '직업', '업', '일'], reading: '업 업', meaning: '업', strokes: 13 },
        { char: '孼', examples: ['서자', '얼자', '재앙', '얼', '근심'], reading: '서자 얼', meaning: '서자', strokes: 19 },
        { char: '蘗', examples: ['황벽', '얼', '약재', '벽', '나무'], reading: '황벽나무 벽', meaning: '황벽나무(얼)', strokes: 20 },
        { char: '曄', examples: ['엽엽(曄曄)', '빛나다', '화려하다', '엽', '밝다'], reading: '빛날 엽', meaning: '빛나다', strokes: 16 },
        { char: '靨', examples: ['보조개', '엽', '귀엽다', '엽', '웃음'], reading: '보조개 엽', meaning: '보조개', strokes: 23 },
        { char: '瑩', examples: ['영롱(瑩瓏)', '밝다', '맑다', '영', '옥'], reading: '밝을 영', meaning: '밝다', strokes: 15 },
        { char: '纓', examples: ['절영(絶纓)', '갓끈', '끈', '영', '매다'], reading: '갓끈 영', meaning: '갓끈', strokes: 23 },
        { char: '瓔', examples: ['영락(瓔珞)', '구슬', '목걸이', '영', '장식'], reading: '구슬 목걸이 영', meaning: '구슬 목걸이', strokes: 21 },
        { char: '瑛', examples: ['영옥(瑛玉)', '옥빛', '아름답다', '영', '수정'], reading: '옥빛 영', meaning: '옥빛', strokes: 13 },
        { char: '咏', examples: ['영탄(咏歎)', '읊다', '노래하다', '영', '시'], reading: '읊을 영', meaning: '읊다', strokes: 8 },
        { char: '渶', examples: ['영수(渶水)', '물맑다', '강이름', '영', '깨끗하다'], reading: '물 맑을 영', meaning: '물 맑다', strokes: 12 },
        { char: '煐', examples: ['영기(煐氣)', '빛나다', '불꽃', '영', '밝다'], reading: '빛날 영', meaning: '빛나다', strokes: 13 },
        { char: '盈', examples: ['영만(盈滿)', '차다', '가득하다', '영', '넘치다'], reading: '찰 영', meaning: '차다', strokes: 9 },
        { char: '穎', examples: ['총영(聰穎)', '이삭', '빼어나다', '영', '재주'], reading: '이삭 영', meaning: '이삭(빼어나다)', strokes: 16 },
        { char: '楹', examples: ['영주(楹柱)', '기둥', '주련(柱聯)', '영', '집'], reading: '기둥 영', meaning: '기둥', strokes: 13 },
        { char: '藝', examples: ['예술(藝術)', '재주', '기예(技藝)', '예', '기술'], reading: '재주 예', meaning: '재주', strokes: 19 },
        { char: '倪', examples: ['예노(倪老)', '어린아이', '노인', '예', '경계'], reading: '어린아이 예', meaning: '어린아이', strokes: 10 },
        { char: '秇', examples: ['원예(園藝)', '심다', '재배', '예', '가꾸다'], reading: '심을 예', meaning: '심다', strokes: 8 },
        { char: '乂', examples: ['징예(懲乂)', '베다', '다스리다', '예', '징계'], reading: '벨 예', meaning: '베다(다스릴 예)', strokes: 2 },
        { char: '曳', examples: ['예항(曳航)', '끌다', '견인(牽引)', '예', '배'], reading: '끌 예', meaning: '끌다', strokes: 6 },
        { char: '穢', examples: ['오예(汚穢)', '더럽다', '추잡하다', '예', '더러움'], reading: '더러울 예', meaning: '더럽다', strokes: 18 },
        { char: '翳', examples: ['백내장(白內障)', '가리다', '병', '예', '눈'], reading: '가릴 예', meaning: '가리다', strokes: 17 },
        { char: '鋭', examples: ['예리(銳利)', '날카롭다', '예민(銳敏)', '예', '뾰족하다'], reading: '날카로울 예', meaning: '날카롭다', strokes: 15 },
        { char: '裔', examples: ['후예(後裔)', '후손', '자손', '예', '핏줄'], reading: '후손 예', meaning: '후손', strokes: 13 },
        { char: '霓', examples: ['운예(雲霓)', '무지개', '비', '예', '구름'], reading: '무지개 예', meaning: '무지개', strokes: 16 },
        { char: '伍', examples: ['대오(隊伍)', '다섯', '행렬', '오', '군대'], reading: '다섯 오', meaning: '다섯', strokes: 6 },
        { char: '寤', examples: ['오매불망(寤寐不忘)', '깨다', '잠', '오', '생각'], reading: '깰 오', meaning: '깨다', strokes: 14 },
        { char: '奧', examples: ['오지(奧地)', '깊다', '속', '오', '심오하다'], reading: '깊을 오', meaning: '깊다', strokes: 12 },
        { char: '懊', examples: ['오뇌(懊惱)', '뉘우치다', '번민', '오', '괴로워하다'], reading: '뉘우칠 오', meaning: '뉘우치다', strokes: 15 },
        { char: '塢', examples: ['선거(船渠)', '둑', '진지', '오', '배'], reading: '둑 오', meaning: '둑', strokes: 13 },
        { char: '傲', examples: ['오만(傲慢)', '거만하다', '자랑', '오', '뽐내다'], reading: '거만할 오', meaning: '거만하다', strokes: 13 },
        { char: '獒', examples: ['오견(獒犬)', '개', '맹견', '오', '지키다'], reading: '개 오', meaning: '개(맹견)', strokes: 15 },
        { char: '嗚', examples: ['오열(嗚咽)', '탄식하다', '울다', '오', '슬퍼하다'], reading: '탄식할 오', meaning: '탄식하다', strokes: 13 },
        { char: '熬', examples: ['오전(熬煎)', '볶다', '달이다', '오', '조리'], reading: '볶을 오', meaning: '볶다', strokes: 15 },
        { char: '甕', reading: '항아리 옹', meaning: '항아리', strokes: 18 },
        { char: '壅', reading: '막을 옹', meaning: '막다', strokes: 16 },
        { char: '渦', reading: '소용돌이 와', meaning: '소용돌이', strokes: 12 },
        { char: '窪', reading: '웅덩이 와', meaning: '웅덩이', strokes: 14 },
        { char: '訛', reading: '그릇될 와', meaning: '그릇되다', strokes: 11 },
        { char: '蝸', reading: '달팽이 와', meaning: '달팽이', strokes: 13 },
        { char: '婉', reading: '순할 완', meaning: '순하다', strokes: 11 },
        { char: '玩', reading: '희롱할 완', meaning: '희롱하다', strokes: 8 },
        { char: '琬', reading: '홀 완', meaning: '홀', strokes: 12 },
        { char: '碗', reading: '주발 완', meaning: '주발', strokes: 13 },
        { char: '腕', reading: '팔뚝 완', meaning: '팔뚝', strokes: 12 },
        { char: '頑', reading: '완고할 완', meaning: '완고하다', strokes: 13 },
        { char: '曰', examples: ['공자왈(孔子曰)', '가로되', '왈가왈부(曰可曰否)', '왈', '말하다'], reading: '가로 왈', meaning: '가로되', strokes: 4 },
        { char: '汪', examples: ['왕양(汪洋)', '넓다', '바다', '왕', '깊다'], reading: '넓을 왕', meaning: '넓다', strokes: 7 },
        { char: '矮', examples: ['왜소(矮小)', '키작다', '난장이', '왜', '작다'], reading: '키 작을 왜', meaning: '키 작다', strokes: 13 },
        { char: '歪', examples: ['왜곡(歪曲)', '비뚤다', '기울다', '왜', '잘못'], reading: '비뚤 왜', meaning: '비뚤다', strokes: 9 },
        { char: '猥', examples: ['비외(卑猥)', '함부로', '외설(猥褻)', '외', '더럽다'], reading: '함부로 외', meaning: '함부로', strokes: 12 },
        { char: '巍', examples: ['외외(巍巍)', '높다', '웅장', '외', '크다'], reading: '높을 외', meaning: '높다', strokes: 20 },
        { char: '夭', examples: ['요절(夭折)', '일찍죽다', '요사(夭死)', '요', '죽음'], reading: '일찍 죽을 요', meaning: '일찍 죽다', strokes: 4 },
        { char: '堯', examples: ['요순(堯舜)', '요임금', '성군', '요', '임금'], reading: '요임금 요', meaning: '요임금', strokes: 12 },
        { char: '姚', examples: ['요야(姚冶)', '예쁘다', '아름답다', '요', '미인'], reading: '예쁠 요', meaning: '예쁘다', strokes: 9 },
        { char: '僥', examples: ['요행(僥倖)', '바라다', '행운', '요', '우연'], reading: '요행 요', meaning: '요행', strokes: 14 },
        { char: '凹', examples: ['오목거울', '요철(凹凸)', '들어감', '요', '음각'], reading: '오목할 요', meaning: '오목하다', strokes: 5 },
        { char: '拗', examples: ['집요(執拗)', '꺾다', '고집', '요', '비틀다'], reading: '꺾을 요', meaning: '꺾다', strokes: 8 },
        { char: '擾', examples: ['소요(騷擾)', '어지럽다', '동요(動搖)', '요', '시끄럽다'], reading: '어지러울 요', meaning: '어지럽다', strokes: 18 },
        { char: '橈', examples: ['불요불굴(不橈不屈)', '굽다', '노', '요', '휘다'], reading: '굽을 요', meaning: '굽다', strokes: 16 },
        { char: '窈', examples: ['요조숙녀(窈窕淑女)', '그윽하다', '얌전하다', '요', '깊다'], reading: '그윽할 요', meaning: '그윽하다', strokes: 10 },
        { char: '窯', examples: ['도요(陶窯)', '가마', '기와', '요', '굽다'], reading: '가마 요', meaning: '가마', strokes: 15 },
        { char: '謠', examples: ['민요(民謠)', '노래', '가요', '요', '동요'], reading: '노래 요', meaning: '노래', strokes: 17 },
        { char: '饒', examples: ['풍요(豊饒)', '넉넉하다', '배불리', '요', '많다'], reading: '넉넉할 요', meaning: '넉넉하다', strokes: 21 },
        { char: '瑢', examples: ['영롱(瑩瓏)', '패옥소리', '용', '구슬', '소리'], reading: '패옥 소리 용', meaning: '패옥 소리', strokes: 14 },
        { char: '蓉', examples: ['부용(芙蓉)', '연꽃', '용', '꽃', '식물'], reading: '연꽃 용', meaning: '연꽃', strokes: 13 },
        { char: '榕', examples: ['용수(榕樹)', '뱅갈고무나무', '용', '나무', '식물'], reading: '뱅갈고무나무 용', meaning: '뱅갈고무나무', strokes: 14 },
        { char: '埇', examples: ['용', '길돋우다', '용도(埇道)', '용', '도로'], reading: '길 돋울 용', meaning: '길 돋우다', strokes: 10 },
        { char: '湧', examples: ['용출(湧出)', '샘솟다', '용수(湧水)', '용', '솟다'], reading: '샘솟을 용', meaning: '샘솟다', strokes: 12 },
        { char: '踊', examples: ['무용(舞踊)', '뛰다', '춤추다', '용', '발돋움'], reading: '뛸 용', meaning: '뛰다', strokes: 14 },
        { char: '鎔', examples: ['용해(鎔解)', '녹이다', '용광로(鎔鑛爐)', '용', '쇳물'], reading: '녹일 용', meaning: '녹이다', strokes: 18 },
        { char: '于', examples: ['우', '어조사', '우선(于先)', '우', '갈다'], reading: '어조사 우', meaning: '어조사', strokes: 3 },
        { char: '佑', examples: ['천우신조(天佑神助)', '돕다', '우조(佑助)', '우', '보살피다'], reading: '도울 우', meaning: '돕다', strokes: 7 },
        { char: '偶', examples: ['우연(偶然)', '짝', '배우자(配偶者)', '우', '허수아비'], reading: '짝 우', meaning: '짝', strokes: 11 },
        { char: '寓', examples: ['우화(寓話)', '머무르다', '비유', '우', '살다'], reading: '머무를 우', meaning: '머무르다', strokes: 12 },
        { char: '尤', examples: ['원망(怨尤)', '더욱', '허물', '우', '우수'], reading: '더욱 우', meaning: '더욱', strokes: 4 },
        { char: '迂', examples: ['우회(迂廻)', '멀다', '우직(迂直)', '우', '돌아가다'], reading: '멀 우', meaning: '멀다', strokes: 7 },
        { char: '盂', examples: ['탁발(托鉢)', '바리', '그릇', '우(盂)', '대야'], reading: '바리 우', meaning: '바리(그릇)', strokes: 8 },
        { char: '紆', examples: ['우여곡절(紆餘曲折)', '굽다', '얽히다', '우', '복잡'], reading: '굽을 우', meaning: '굽다', strokes: 9 },
        { char: '芋', examples: ['우란분(芋蘭盆)', '토란', '감자', '우', '식물'], reading: '토란 우', meaning: '토란', strokes: 6 },
        { char: '虞', examples: ['우려(虞慮)', '염려하다', '근심', '우', '걱정'], reading: '염려할 우', meaning: '염려하다', strokes: 13 },
        { char: '旭', examples: ['욱일승천(旭日昇天)', '해돋다', '아침', '욱', '태양'], reading: '해 돋을 욱', meaning: '해 돋다', strokes: 6 },
        { char: '郁', examples: ['욱욱(郁郁)', '성하다', '향기롭다', '욱', '풀'], reading: '성할 욱', meaning: '성하다', strokes: 9 },
        { char: '昱', examples: ['욱', '빛나다', '밝다', '욱', '광채'], reading: '빛날 욱', meaning: '빛나다', strokes: 9 },
        { char: '頊', examples: ['전욱(顓頊)', '삼가다', '임금', '욱', '사람이름'], reading: '삼갈 욱', meaning: '삼가다', strokes: 13 },
        { char: '云', examples: ['운위(云謂)', '이르다', '말하다', '운', '언급'], reading: '이를 운', meaning: '이르다', strokes: 4 },
        { char: '芸', examples: ['운향(芸香)', '향풀', '예술', '운', '향초'], reading: '향풀 운', meaning: '향풀', strokes: 7 },
        { char: '耘', examples: ['경운(耕耘)', '김매다', '농사', '운', '가꾸다'], reading: '김맬 운', meaning: '김매다', strokes: 10 },
        { char: '隕', examples: ['운석(隕石)', '떨어지다', '운성(隕星)', '운', '낙하'], reading: '떨어질 운', meaning: '떨어지다', strokes: 12 },
        { char: '蔚', examples: ['울산(蔚山)', '울창하다', '울릉도', '울', '지역'], reading: '울창할 울', meaning: '울창하다', strokes: 14 },
        { char: '鬱', examples: ['우울(憂鬱)', '답답하다', '울창', '울', '슬픔'], reading: '답답할 울', meaning: '답답하다(울창할 울)', strokes: 29 },
        { char: '亐', examples: ['울릉도(亐陵島)', '땅이름', '울', '섬', '지역'], reading: '땅 이름 울', meaning: '땅 이름', strokes: 3 },
        { char: '熊', examples: ['웅담(熊膽)', '곰', '영웅(英雄)', '웅', '짐승'], reading: '곰 웅', meaning: '곰', strokes: 14 },
        { char: '媛', examples: ['재원(才媛)', '미녀', '여자', '원', '아름답다'], reading: '미녀 원', meaning: '미녀', strokes: 12 },
        { char: '垣', examples: ['성원(城垣)', '담', '울타리', '원', '벽'], reading: '담 원', meaning: '담', strokes: 9 },
        { char: '冤', examples: ['원통(冤痛)', '억울하다', '원한', '원', '원수'], reading: '원통할 원', meaning: '원통하다', strokes: 10 },
        { char: '猿', examples: ['견원지간(犬猿之間)', '원숭이', '유인원', '원', '동물'], reading: '원숭이 원', meaning: '원숭이', strokes: 13 },
        { char: '鴛', examples: ['원앙(鴛鴦)', '새', '수컷', '원', '부부'], reading: '원앙 원', meaning: '원앙(수컷)', strokes: 16 },
        { char: '鉞', examples: ['부월(斧鉞)', '도끼', '무기', '월', '형벌'], reading: '도끼 월', meaning: '도끼', strokes: 13 },
        { char: '渭', examples: ['위수(渭水)', '강', '물', '위', '지명'], reading: '강 이름 위', meaning: '강 이름', strokes: 12 },
        { char: '魏', examples: ['위나라(魏-)', '나라이름', '북위', '위', '역사'], reading: '나라 위', meaning: '나라', strokes: 18 },
        { char: '萎', examples: ['위축(萎縮)', '시들다', '마르다', '위', '줄어들다'], reading: '시들 위', meaning: '시들다', strokes: 11 },
        { char: '韋', examples: ['위편삼절(韋編三絶)', '가죽', '책끈', '위', '다듬다'], reading: '가죽 위', meaning: '가죽', strokes: 9 },
        { char: '蝟', examples: ['고슴도치', '위', '가시', '위집(蝟集)', '위'], reading: '고슴도치 위', meaning: '고슴도치', strokes: 15 },
        { char: '楡', examples: ['유가(楡家)', '느릅나무', '유목', '유', '나무'], reading: '느릅나무 유', meaning: '느릅나무', strokes: 13 },
        { char: '宥', examples: ['용서(容宥)', '유해(宥海)', '관대하다', '유', '너그럽다'], reading: '용서할 유', meaning: '용서하다', strokes: 9 },
        { char: '愉', examples: ['유쾌(愉快)', '즐겁다', '기쁘다', '유', '쾌활'], reading: '즐거울 유', meaning: '즐겁다', strokes: 12 },
        { char: '揄', examples: ['야유(揶揄)', '놀리다', '비웃다', '유', '조롱'], reading: '야유할 유', meaning: '야유하다', strokes: 12 },
        { char: '柚', examples: ['유자(柚子)', '나무', '과일', '유', '향기'], reading: '유자 유', meaning: '유자', strokes: 9 },
        { char: '蹂', examples: ['유린(蹂躪)', '짓밟다', '괴롭히다', '유', '침해'], reading: '유린할 유', meaning: '유린하다', strokes: 16 },
        { char: '釉', examples: ['유약(釉藥)', '광택', '바르다', '유', '도자기'], reading: '광택 유', meaning: '광택', strokes: 12 },
        { char: '牖', examples: ['창(牖)', '창문', '유', '들창', '구멍'], reading: '창 유', meaning: '창', strokes: 15 },
        { char: '踰', examples: ['월유(越踰)', '넘다', '초월', '유', '건너다'], reading: '넘을 유', meaning: '넘다', strokes: 16 },
        { char: '逾', examples: ['유월(逾月)', '넘다', '지나다', '유', '경과'], reading: '넘을 유', meaning: '넘다', strokes: 13 },
        { char: '諛', examples: ['아첨(阿諛)', '알랑거리다', '유', '비위맞추다', '첨유(諂諛)'], reading: '아첨할 유', meaning: '아첨하다', strokes: 15 },
        { char: '逌', examples: ['유유(逌逌)', '웃다', '만족하다', '유', '기뻐하다'], reading: '웃는 모양 유', meaning: '웃는 모양', strokes: 11 },
        { char: '孺', examples: ['부유(婦孺)', '젖먹이', '어린아이', '유', '자식'], reading: '젖먹이 유', meaning: '젖먹이', strokes: 17 },
        { char: '嬬', examples: ['유', '약한여자', '여자', '유', '여성'], reading: '약한 여자 유', meaning: '약한 여자', strokes: 12 },
        { char: '襦', examples: ['저고리', '유', '속옷', '등거리', '유'], reading: '저고리 유', meaning: '저고리', strokes: 20 },
        { char: '毓', examples: ['종육(鍾毓)', '기르다', '양육', '육', '자라다'], reading: '기를 육', meaning: '기르다', strokes: 13 },
        { char: '尹', examples: ['부윤(府尹)', '다스리다', '성씨', '윤', '벼슬'], reading: '다스릴 윤', meaning: '다스리다', strokes: 4 },
        { char: '戎', examples: ['병융(兵戎)', '오랑캐', '군사', '융', '무기'], reading: '오랑캐 융', meaning: '오랑캐', strokes: 6 },
        { char: '絨', examples: ['융단(絨緞)', '융', '비단', '융', '천'], reading: '융 융', meaning: '융', strokes: 12 },
        { char: '殷', examples: ['은성(殷盛)', '성하다', '은나라', '은', '풍성하다'], reading: '성할 은', meaning: '성하다(은나라)', strokes: 10 },
        { char: '誾', examples: ['은은(誾誾)', '온화하다', '부드럽다', '은', '향기'], reading: '온화할 은', meaning: '온화하다', strokes: 15 },
        { char: '蔭', examples: ['음덕(蔭德)', '그늘', '덕택', '음', '보호'], reading: '그늘 음', meaning: '그늘', strokes: 15 },
        { char: '揖', examples: ['읍소(揖訴)', '읍하다', '인사', '읍', '절'], reading: '읍할 읍', meaning: '읍하다', strokes: 12 },
        { char: '鷹', examples: ['매', '응', '사냥매', '응', '새'], reading: '매 응', meaning: '매', strokes: 24 },
        { char: '膺', examples: ['의분전응(義憤塡膺)', '가슴', '받다', '응', '마음'], reading: '가슴 응', meaning: '가슴', strokes: 17 },
        { char: '凝', examples: ['응고(凝固)', '엉기다', '응시(凝視)', '응', '굳다'], reading: '엉길 응', meaning: '엉기다', strokes: 16 },
        { char: '矣', examples: ['어조사', '의', '마침표', '의', '끝'], reading: '어조사 의', meaning: '어조사', strokes: 7 },
        { char: '誼', examples: ['우의(友誼)', '옳다', '정의', '의', '친분'], reading: '옳을 의', meaning: '옳다', strokes: 15 },
        { char: '毅', examples: ['강의(剛毅)', '굳세다', '의지', '의', '단호하다'], reading: '굳셀 의', meaning: '굳세다', strokes: 15 },
        { char: '懿', examples: ['의덕(懿德)', '아름답다', '훌륭하다', '의', '덕'], reading: '아름다울 의', meaning: '아름답다', strokes: 22 },
        { char: '苡', examples: ['의이(苡仁)', '질경이', '율무', '이', '약재'], reading: '질경이 이', meaning: '질경이', strokes: 8 },
        { char: '爾', examples: ['이시(爾時)', '너', '그때', '이', '당신'], reading: '너 이', meaning: '너', strokes: 14 },
        { char: '珥', examples: ['이(珥)', '귀고리', '장식', '이', '구슬'], reading: '귀고리 이', meaning: '귀고리', strokes: 10 },
        { char: '伊', examples: ['이두(伊讀)', '저', '이', '사람', '이것'], reading: '저 이', meaning: '저', strokes: 6 },
        { char: '飴', examples: ['이탕(飴糖)', '엿', '달다', '이', '사탕'], reading: '엿 이', meaning: '엿', strokes: 14 },
        { char: '頤', examples: ['이(頤)', '턱', '기르다', '이', '얼굴'], reading: '턱 이', meaning: '턱', strokes: 16 },
        { char: '貳', examples: ['이심(貳心)', '두', '두마음', '이', '의심하다'], reading: '두 이', meaning: '두(둘)', strokes: 12 },
        { char: '痍', examples: ['창이(瘡痍)', '상처', '다치다', '이', '아픔'], reading: '상처 이', meaning: '상처', strokes: 11 },
        { char: '姨', examples: ['이모(姨母)', '이모부', '친척', '이', '여자'], reading: '이모 이', meaning: '이모', strokes: 9 },
        { char: '翊', examples: ['익대(翊戴)', '돕다', '보좌', '익', '날개'], reading: '도울 익', meaning: '돕다', strokes: 11 },
        { char: '靷', examples: ['인(靷)', '가슴걸이', '끈', '인', '수레'], reading: '가슴걸이 인', meaning: '가슴걸이', strokes: 9 },
        { char: '靭', examples: ['강인(强靭)', '질기다', '인대(靭帶)', '인', '튼튼하다'], reading: '질길 인', meaning: '질기다', strokes: 12 },
        { char: '湮', examples: ['인멸(湮滅)', '묻히다', '잠기다', '인', '없어지다'], reading: '묻힐 인', meaning: '묻히다', strokes: 12 },
        { char: '咽', examples: ['인후(咽喉)', '목구멍', '목', '인', '삼키다'], reading: '목구멍 인', meaning: '목구멍', strokes: 9 },
        { char: '蚓', examples: ['구인(蚯蚓)', '지렁이', '벌레', '인', '꿈틀거리다'], reading: '지렁이 인', meaning: '지렁이', strokes: 10 },
        { char: '壹', examples: ['금일봉(金壹封)', '하나', '천하통일', '일', '한결같다'], reading: '한 일', meaning: '한(하나)', strokes: 12 },
        { char: '佚', examples: ['일화(佚話)', '편안하다', '숨다', '일', '이야기'], reading: '편안할 일', meaning: '편안하다', strokes: 7 },
        { char: '溢', examples: ['일류(溢流)', '넘치다', '해일(海溢)', '일', '가득하다'], reading: '넘칠 일', meaning: '넘치다', strokes: 13 },
        { char: '馹', examples: ['역말', '일주(馹走)', '일', '파발마', '말'], reading: '역말 일', meaning: '역말', strokes: 14 },
        { char: '壬', examples: ['임오군란(壬午軍亂)', '아홉째천간', '임', '북쪽', '오행'], reading: '아홉째 천간 임', meaning: '아홉째 천간', strokes: 4 },
        { char: '稔', examples: ['임실(稔實)', '여물다', '곡식', '임', '익다'], reading: '여물 임', meaning: '여물다', strokes: 13 },
        { char: '藉', examples: ['빙자(憑藉)', '깔다', '의지하다', '자', '빌리다'], reading: '깔 자', meaning: '깔다(자적하다)', strokes: 18 },
        { char: '炙', examples: ['회자(膾炙)', '굽다', '구이', '자', '음식'], reading: '구울 자', meaning: '굽다', strokes: 8 },
        { char: '蔗', examples: ['감자(甘蔗)', '사탕수수', '자당(蔗糖)', '자', '설탕'], reading: '사탕수수 자', meaning: '사탕수수', strokes: 15 },
        { char: '恣', examples: ['방자(放恣)', '마음대로', '자행(恣行)', '자', '제멋대로'], reading: '방자할 자', meaning: '방자하다', strokes: 10 },
        { char: '磁', examples: ['자석(磁石)', '자기(磁器)', '나침반', '자', '쇠'], reading: '자석 자', meaning: '자석', strokes: 14 },
        { char: '咨', examples: ['자문(咨問)', '묻다', '상의하다', '자', '한탄하다'], reading: '물을 자', meaning: '묻다', strokes: 9 },
        { char: '瓷', examples: ['청자(靑瓷)', '오기', '도자기', '자', '그릇'], reading: '오기 자', meaning: '오기(질그릇)', strokes: 11 },
        { char: '疵', examples: ['하자(瑕疵)', '허물', '흠', '자', '결점'], reading: '허물 자', meaning: '허물', strokes: 11 },
        { char: '柘', examples: ['산뽕나무', '자', '지팡이', '자목(柘木)', '나무'], reading: '산뽕나무 자', meaning: '산뽕나무', strokes: 9 },
        { char: '灼', examples: ['작열(灼熱)', '불사르다', '뜨겁다', '작', '타다'], reading: '불사를 작', meaning: '불사르다', strokes: 7 },
        { char: '爵', examples: ['백작(伯爵)', '벼슬', '작위', '작', '지위'], reading: '벼슬 작', meaning: '벼슬', strokes: 17 },
        { char: '芍', examples: ['작약(芍藥)', '함박꽃', '약초', '작', '꽃'], reading: '함박꽃 작', meaning: '함박꽃', strokes: 7 },
        { char: '鵲', examples: ['까치', '작', '오작교(烏鵲橋)', '작', '새'], reading: '까치 작', meaning: '까치', strokes: 19 },
        { char: '嚼', examples: ['저작(咀嚼)', '씹다', '반추', '작', '먹다'], reading: '씹을 작', meaning: '씹다', strokes: 21 },
        { char: '蠶', examples: ['양잠(養蠶)', '누에', '잠식(蠶食)', '잠', '고치'], reading: '누에 잠', meaning: '누에', strokes: 24 },
        { char: '簪', examples: ['옥잠(玉簪)', '비녀', '장식', '잠', '머리핀'], reading: '비녀 잠', meaning: '비녀', strokes: 18 },
        { char: '庄', examples: ['장원(庄園)', '농막', '별장', '장', '마을'], reading: '농막 장', meaning: '농막(촌락)', strokes: 6 },
        { char: '墻', examples: ['담장(墻)', '장', '성벽', '월장(越墻)', '울타리'], reading: '담 장', meaning: '담', strokes: 16 },
        { char: '薔', examples: ['장미(薔薇)', '꽃', '식물', '장', '가시'], reading: '장미 장', meaning: '장미', strokes: 17 },
        { char: '杖', examples: ['지팡이', '장', '도장(刀杖)', '장', '막대기'], reading: '지팡이 장', meaning: '지팡이', strokes: 7 },
        { char: '瘴', examples: ['장기(瘴氣)', '풍토병', '독기', '장', '병'], reading: '장기 장', meaning: '장기(풍토병)', strokes: 16 },
        { char: '漿', examples: ['혈장(血漿)', '미음', '액체', '장', '물'], reading: '미음 장', meaning: '미음', strokes: 15 },
        { char: '醬', examples: ['간장(艮醬)', '젓갈', '된장', '장', '반찬'], reading: '젓갈 장', meaning: '젓갈(장)', strokes: 19 },
        { char: '臟', examples: ['심장(心臟)', '오장', '내장', '장', '장기'], reading: '오장 장', meaning: '오장', strokes: 22 },
        { char: '丈', examples: ['장부(丈夫)', '어른', '장인', '장', '남자'], reading: '어른 장', meaning: '어른', strokes: 3 },
        { char: '仗', examples: ['의장(儀仗)', '의지하다', '무기', '장', '받들다'], reading: '의지할 장', meaning: '의지하다', strokes: 5 },
        { char: '欌', examples: ['장롱(欌籠)', '가구', '농', '장', '보관함'], reading: '장롱 장', meaning: '장롱', strokes: 22 },
        { char: '匠', examples: ['장인(匠人)', '목수', '거장(巨匠)', '장', '기술자'], reading: '장인 장', meaning: '장인', strokes: 6 },
        { char: '渽', examples: ['재(渽)', '맑다', '물', '깨끗하다', '재'], reading: '맑을 재', meaning: '맑다', strokes: 12 },
        { char: '滓', examples: ['잔재(殘滓)', '찌꺼기', '나머지', '재', '앙금'], reading: '찌꺼기 재', meaning: '찌꺼기', strokes: 14 },
        { char: '錚', examples: ['쟁쟁(錚錚)', '쇳소리', '유명하다', '쟁', '울리다'], reading: '쇳소리 쟁', meaning: '쇳소리', strokes: 16 },
        { char: '儲', examples: ['저축(儲蓄)', '쌓다', '저장', '저', '모으다'], reading: '쌓을 저', meaning: '쌓다', strokes: 17 },
        { char: '沮', examples: ['저지(沮止)', '막다', '상저(喪沮)', '저', '낙담'], reading: '막을 저', meaning: '막다', strokes: 8 },
        { char: '姐', examples: ['소저(小姐)', '누이', '아가씨', '저', '여자'], reading: '누이 저', meaning: '누이', strokes: 8 },
        { char: '杵', examples: ['공이', '방망이', '저구(杵臼)', '저', '찧다'], reading: '공이 저', meaning: '공이', strokes: 8 },
        { char: '疽', examples: ['탄저병(炭疽病)', '등창', '종기', '저', '병'], reading: '등창 저', meaning: '등창', strokes: 10 },
        { char: '蛆', examples: ['구더기', '저', '더럽다', '벌레', '부패'], reading: '구더기 저', meaning: '구더기', strokes: 11 },
        { char: '咀', examples: ['저작(咀嚼)', '씹다', '맛보다', '저', '먹다'], reading: '씹을 저', meaning: '씹다', strokes: 8 },
        { char: '狙', examples: ['저격(狙擊)', '엿보다', '노리다', '저', '원숭이'], reading: '원숭이 저', meaning: '원숭이(엿보다)', strokes: 8 },
        { char: '箸', examples: ['수저(匙箸)', '젓가락', '식사', '저', '집다'], reading: '젓가락 저', meaning: '젓가락', strokes: 14 },
        { char: '苧', examples: ['모시', '저포(苧布)', '삼', '저', '옷감'], reading: '모시 저', meaning: '모시', strokes: 8 },
        { char: '邸', examples: ['관저(官邸)', '집', '저택', '저', '사저'], reading: '집 저', meaning: '집', strokes: 7 },
        { char: '迪', examples: ['계적(啓迪)', '나아가다', '이끌다', '적', '길'], reading: '나아갈 적', meaning: '나아가다', strokes: 9 },
        { char: '嫡', examples: ['적자(嫡子)', '정실', '본처', '적', '직계'], reading: '정실 적', meaning: '정실', strokes: 14 },
        { char: '甸', examples: ['경기(京畿)', '경기', '교외', '전', '들'], reading: '경기 전', meaning: '경기', strokes: 7 },
        { char: '銓', examples: ['전형(銓衡)', '저울질하다', '뽑다', '전', '심사'], reading: '저울질할 전', meaning: '저울질하다', strokes: 14 },
        { char: '箋', examples: ['처방전(處方箋)', '쪽지', '편지', '전', '종이'], reading: '쪽지 전', meaning: '쪽지', strokes: 14 },
        { char: '筌', examples: ['득어망전(得魚忘筌)', '통발', '도구', '전', '잊다'], reading: '통발 전', meaning: '통발', strokes: 12 },
        { char: '詮', examples: ['전석(詮釋)', '설명하다', '풀이하다', '전', '자세히'], reading: '설명할 전', meaning: '설명하다', strokes: 13 },
        { char: '輾', examples: ['전전반측(輾轉反側)', '구르다', '돌다', '전', '뒤척이다'], reading: '구를 전', meaning: '구르다', strokes: 17 },
        { char: '廛', examples: ['좌판(坐板)', '가게', '상점', '전', '시장'], reading: '가게 전', meaning: '가게', strokes: 15 },
        { char: '剪', examples: ['전지(剪枝)', '가위', '자르다', '전', '끊다'], reading: '가위 전', meaning: '가위', strokes: 11 },
        { char: '顚', examples: ['전도(顚倒)', '정수리', '뒤집히다', '전', '꼭대기'], reading: '정수리 전', meaning: '정수리', strokes: 19 },
        { char: '奠', examples: ['전례(奠禮)', '제사지내다', '올리다', '전', '의식'], reading: '제사 지낼 전', meaning: '제사 지내다', strokes: 12 },
        { char: '悛', examples: ['개전(改悛)', '개과하다', '고치다', '전', '뉘우치다'], reading: '개과할 전', meaning: '개과하다', strokes: 10 },
        { char: '顫', examples: ['전율(顫慄)', '떨다', '진동', '전', '공포'], reading: '떨 전', meaning: '떨다', strokes: 22 },
        { char: '旃', examples: ['전', '깃발', '기', '전', '표지'], reading: '깃발 전', meaning: '깃발', strokes: 10 },
        { char: '氈', examples: ['모전(毛氈)', '담요', '양탄자', '전', '털'], reading: '모전 전', meaning: '모전', strokes: 17 },
        { char: '纏', examples: ['전족(纏足)', '얽다', '감다', '전', '매다'], reading: '얽을 전', meaning: '얽다', strokes: 21 },
        { char: '鱣', examples: ['전어', '물고기', '전', '생선', '어류'], reading: '전어 전', meaning: '전어(철갑상어)', strokes: 24 },
        { char: '癜', examples: ['백전풍(白癜風)', '어루러기', '피부병', '전', '반점'], reading: '어루러기 전', meaning: '어루러기', strokes: 18 },
        { char: '癲', examples: ['전광(癲狂)', '미치다', '광기', '전', '발작'], reading: '미칠 전', meaning: '미치다', strokes: 24 },
        { char: '截', examples: ['절단(截斷)', '끊다', '자르다', '절', '가로막다'], reading: '끊을 절', meaning: '끊다', strokes: 14 },
        { char: '竊', examples: ['절도(竊盜)', '훔치다', '도둑', '절', '몰래'], reading: '훔칠 절', meaning: '훔치다', strokes: 22 },
        { char: '占', examples: ['점령(占領)', '점치다', '차지하다', '점', '예언'], reading: '점칠 점', meaning: '점치다', strokes: 5 },
        { char: '黏', examples: ['점액(黏液)', '끈끈하다', '점착', '점', '붙다'], reading: '끈끈할 점', meaning: '끈끈하다', strokes: 17 },
        { char: '霑', examples: ['균점(均霑)', '젖다', '은혜', '점', '입다'], reading: '젖을 점', meaning: '젖다', strokes: 16 },
        { char: '鮎', examples: ['점어(鮎魚)', '메기', '물고기', '점', '생선'], reading: '메기 점', meaning: '메기', strokes: 16 },
        { char: '玷', examples: ['점', '이지러지다', '흠', '점', '결점'], reading: '이지러질 점', meaning: '이지러지다', strokes: 9 },
        { char: '諜', examples: ['간첩(間諜)', '염탐하다', '첩보', '첩', '스파이'], reading: '간첩 첩', meaning: '간첩(염탐하다)', strokes: 15 },
        { char: '鼎', examples: ['정립(鼎立)', '솥', '발이셋', '정', '안정'], reading: '솥 정', meaning: '솥', strokes: 13 },
        { char: '挺', examples: ['정신(挺身)', '빼어나다', '앞장서다', '정', '뛰어나다'], reading: '빼어날 정', meaning: '빼어나다', strokes: 10 },
        { char: '整', examples: ['정리(整理)', '가지런하다', '정돈', '정', '조정'], reading: '가지런할 정', meaning: '가지런하다', strokes: 16 },
        { char: '晶', examples: ['수정(水晶)', '맑다', '결정(結晶)', '정', '빛나다'], reading: '맑을 정', meaning: '맑다(수정)', strokes: 12 },
        { char: '錠', examples: ['알약(錠劑)', '덩어리', '자물쇠', '정', '약'], reading: '덩어리 정', meaning: '덩어리(알약)', strokes: 16 },
        { char: '偵', examples: ['정찰(偵察)', '염탐하다', '탐정(探偵)', '정', '살피다'], reading: '염탐할 정', meaning: '염탐하다', strokes: 11 },
        { char: '幀', examples: ['족자', '그림', '틀', '정', '액자'], reading: '그림족자 정', meaning: '그림족자', strokes: 12 },
        { char: '旌', examples: ['정문(旌門)', '기', '표창하다', '정', '깃발'], reading: '기 정', meaning: '기', strokes: 11 },
        { char: '珵', examples: ['옥', '정', '구슬', '정', '보석'], reading: '옥 이름 정', meaning: '옥 이름', strokes: 11 },
        { char: '綎', examples: ['띠술', '정', '장식', '정', '끈'], reading: '띠 술 정', meaning: '띠 술', strokes: 13 },
        { char: '珽', examples: ['옥홀', '정', '규', '정', '패'], reading: '옥홀 정', meaning: '옥홀', strokes: 11 },
        { char: '梃', examples: ['지렛대', '몽둥이', '막대기', '정', '도구'], reading: '지렛대 정', meaning: '지렛대(몽둥이)', strokes: 11 },
        { char: '楨', examples: ['정간(楨幹)', '광나무', '기둥', '정', '목재'], reading: '광나무 정', meaning: '광나무', strokes: 13 },
        { char: '禎', examples: ['경정(慶禎)', '상서', '복', '정', '경사'], reading: '상서 정', meaning: '상서(복)', strokes: 14 },
        { char: '靖', examples: ['정국(靖國)', '편안하다', '안정', '정', '평화'], reading: '편안할 정', meaning: '편안하다', strokes: 13 },
        { char: '玎', examples: ['정정(玎玎)', '옥소리', '맑다', '정', '소리'], reading: '옥소리 정', meaning: '옥소리', strokes: 7 },
        { char: '柾', examples: ['정목(柾木)', '나무바르다', '곧다', '정', '재목'], reading: '나무 바르다 정', meaning: '나무 바르다', strokes: 9 },
        { char: '艇', examples: ['잠수정(潛水艇)', '거룻배', '배', '정', '작은배'], reading: '거룻배 정', meaning: '거룻배', strokes: 13 },
        { char: '訂', examples: ['정정(訂正)', '바로잡다', '개정(改訂)', '정', '고치다'], reading: '바로잡을 정', meaning: '바로잡다', strokes: 9 },
        { char: '釘', examples: ['철정(鐵釘)', '못', '박다', '정', '쇠못'], reading: '못 정', meaning: '못', strokes: 8 },
        { char: '酊', examples: ['명정(酩酊)', '술취하다', '취기', '정', '술'], reading: '술 취할 정', meaning: '술 취하다', strokes: 9 },
        { char: '醍', examples: ['제호(醍醐)', '맑은술', '깨닫다', '제', '맛좋은술'], reading: '맑은 술 제', meaning: '맑은 술', strokes: 16 },
        { char: '梯', examples: ['사다리', '제', '계제(階梯)', '은제(銀梯)', '오르다'], reading: '사다리 제', meaning: '사다리', strokes: 11 },
        { char: '臍', examples: ['배꼽', '제', '제대(臍帶)', '식자우환(識字憂患)', '태줄'], reading: '배꼽 제', meaning: '배꼽', strokes: 18 },
        { char: '蹄', examples: ['마제(馬蹄)', '굽', '발굽', '제', '말발굽'], reading: '굽 제', meaning: '굽', strokes: 16 },
        { char: '詔', examples: ['조서(詔書)', '임금', '명령', '조', '알리다'], reading: '조서 조', meaning: '조서', strokes: 12 },
        { char: '躁', examples: ['조급(躁急)', '성급하다', '조울증(躁鬱症)', '조', '떠들썩하다'], reading: '조급할 조', meaning: '조급하다', strokes: 20 },
        { char: '阻', examples: ['저지(沮止)', '막다', '험하다', '조', '방해'], reading: '막힐 조', meaning: '막히다', strokes: 8 },
        { char: '凋', examples: ['조락(凋落)', '시들다', '쇠퇴', '조', '떨어지다'], reading: '시들 조', meaning: '시들다', strokes: 10 },
        { char: '漕', examples: ['조운(漕運)', '배젓다', '운송', '조', '배'], reading: '배 저을 조', meaning: '배 젓다', strokes: 14 },
        { char: '糟', examples: ['조강지처(糟糠之妻)', '지게미', '술찌끼', '조', '나쁘다'], reading: '지게미 조', meaning: '지게미', strokes: 17 },
        { char: '俎', examples: ['도마', '조', '조두(俎豆)', '제기', '요리'], reading: '도마 조', meaning: '도마', strokes: 9 },
        { char: '爪', examples: ['조아(爪牙)', '손톱', '발톱', '조', '신하'], reading: '손톱 조', meaning: '손톱', strokes: 4 },
        { char: '窕', examples: ['요조(窈窕)', '그윽하다', '얌전하다', '조', '깊다'], reading: '그윽할 조', meaning: '그윽하다', strokes: 11 },
        { char: '稠', examples: ['조밀(稠密)', '빽빽하다', '많다', '조', '촘촘하다'], reading: '빽빽할 조', meaning: '빽빽하다', strokes: 13 },
        { char: '嘲', examples: ['조소(嘲笑)', '비웃다', '조롱(嘲弄)', '조', '놀리다'], reading: '비웃을 조', meaning: '비웃다', strokes: 15 },
        { char: '晁', examples: ['조', '아침', '성씨', '조', '새벽'], reading: '아침 조', meaning: '아침', strokes: 10 },
        { char: '棗', examples: ['대추', '조', '조율이시(棗栗梨枾)', '대추나무', '과일'], reading: '대추 조', meaning: '대추', strokes: 12 },
        { char: '蚤', examples: ['벼룩', '조', '일찍', '조', '벌레'], reading: '벼룩 조', meaning: '벼룩', strokes: 10 },
        { char: '簇', examples: ['군족(群簇)', '조릿대', '무리', '족', '모이다'], reading: '조릿대 족', meaning: '조릿대', strokes: 17 },
        { char: '猝', examples: ['졸사(猝死)', '갑자기', '졸도(猝倒)', '졸', '창졸(倉猝)'], reading: '갑자기 졸', meaning: '갑자기', strokes: 10 },
        { char: '悰', examples: ['즐겁다', '종', '기쁘다', '종', '심정'], reading: '즐거울 종', meaning: '즐겁다', strokes: 11 },
        { char: '踪', examples: ['실종(失踪)', '자취', '행방', '종', '종적(踪跡)'], reading: '자취 종', meaning: '자취', strokes: 15 },
        { char: '淙', examples: ['종종(淙淙)', '물소리', '흐르다', '종', '깨끗하다'], reading: '물소리 종', meaning: '물소리', strokes: 11 },
        { char: '琮', examples: ['옥홀', '종', '예기', '종', '보석'], reading: '옥 홀 종', meaning: '옥 홀', strokes: 12 },
        { char: '鍾', examples: ['종(鍾)', '쇠북', '종루(鍾樓)', '종', '시간'], reading: '쇠북 종', meaning: '쇠북', strokes: 17 },
        { char: '坐', examples: ['좌석(坐席)', '앉다', '좌선(坐禪)', '좌', '자리'], reading: '앉을 좌', meaning: '앉다', strokes: 7 },
        { char: '挫', examples: ['좌절(挫折)', '꺾다', '실패', '좌', '꺾이다'], reading: '꺾을 좌', meaning: '꺾다', strokes: 10 },
        { char: '罪', examples: ['범죄(犯罪)', '죄', '죄악(罪惡)', '좌', '벌'], reading: '허물 죄', meaning: '허물', strokes: 13 },
        { char: '躊', examples: ['주저(躊躇)', '머뭇거리다', '망설이다', '주', '멈칫하다'], reading: '머뭇거릴 주', meaning: '머뭇거리다', strokes: 21 },
        { char: '誅', examples: ['주살(誅殺)', '베다', '벌하다', '주', '죽이다'], reading: '벨 주', meaning: '베다', strokes: 13 },
        { char: '疇', examples: ['범주(範疇)', '이랑', '밭', '주', '구역'], reading: '이랑 주', meaning: '이랑', strokes: 19 },
        { char: '綢', examples: ['주밀(綢密)', '얽히다', '빽빽하다', '주', '감다'], reading: '얽킬 주', meaning: '얽키다', strokes: 14 },
        { char: '胄', examples: ['갑주(甲胄)', '자손', '투구', '주', '핏줄'], reading: '자손 주', meaning: '자손(투구)', strokes: 9 },
        { char: '廚', examples: ['주방(廚房)', '부엌', '요리', '주', '식당'], reading: '부엌 주', meaning: '부엌', strokes: 15 },
        { char: '紬', examples: ['명주(明紬)', '비단', '주', '직물', '옷감'], reading: '명주 주', meaning: '명주', strokes: 11 },
        { char: '呪', examples: ['주문(呪文)', '빌다', '저주(咀呪)', '주', '비는말'], reading: '빌 주', meaning: '빌다(저주)', strokes: 8 },
        { char: '侏', examples: ['주유(侏儒)', '난쟁이', '작다', '주', '사람'], reading: '난쟁이 주', meaning: '난쟁이', strokes: 8 },
        { char: '嗾', examples: ['교사(敎嗾)', '부추기다', '시키다', '주', '선동'], reading: '부추길 주', meaning: '부추기다', strokes: 15 },
        { char: '紂', examples: ['주왕(紂王)', '주임금', '폭군', '주', '은나라'], reading: '주임금 주', meaning: '주임금', strokes: 9 },
        { char: '蛛', examples: ['거미(蜘蛛)', '주', '곤충', '주망(蛛網)', '벌레'], reading: '거미 주', meaning: '거미', strokes: 12 },
        { char: '註', examples: ['주석(註釋)', '주내다', '풀이', '주', '설명'], reading: '주 낼 주', meaning: '주 내다', strokes: 12 },
        { char: '輳', examples: ['폭주(輻輳)', '모이다', '바퀴살', '주', '집중'], reading: '모일 주', meaning: '모이다', strokes: 16 },
        { char: '浚', examples: ['준설(浚渫)', '깊다', '파내다', '준', '깊이'], reading: '깊을 준', meaning: '깊다', strokes: 10 },
        { char: '逡', examples: ['준순(逡巡)', '뒷걸음질치다', '물러나다', '준', '망설이다'], reading: '뒷걸음질칠 준', meaning: '뒷걸음질치다', strokes: 11 },
        { char: '樽', examples: ['주준(酒樽)', '술통', '술잔', '준', '통'], reading: '술통 준', meaning: '술통', strokes: 16 },
        { char: '茁', examples: ['졸장부(茁丈夫)', '풀나오다', '자라다', '줄', '싹'], reading: '풀 나올 줄', meaning: '풀 나오다', strokes: 9 },
        { char: '楫', examples: ['주즙(舟楫)', '노', '배', '즙', '뱃놀이'], reading: '노 즙', meaning: '노(뱃노)', strokes: 13 },
        { char: '汁', examples: ['과즙(果汁)', '즙', '국물', '즙', '액체'], reading: '즙 즙', meaning: '즙', strokes: 5 },
        { char: '葺', examples: ['보즙(補葺)', '기우다', '잇다', '즙', '지붕'], reading: '기울 즙', meaning: '기우다(잇다)', strokes: 13 },
        { char: '症', examples: ['증세(症勢)', '병', '증상(症狀)', '증', '아픔'], reading: '증세 증', meaning: '증세', strokes: 10 },
        { char: '拯', examples: ['증구(拯救)', '건지다', '구하다', '증', '구제'], reading: '건질 증', meaning: '건지다', strokes: 9 },
        { char: '甑', examples: ['시루', '증산(甑山)', '질그릇', '증', '찜통'], reading: '시루 증', meaning: '시루', strokes: 17 },
        { char: '曾', examples: ['일찍이', '증조(曾祖)', '미증유(未曾有)', '증', '거듭'], reading: '일찍이 증', meaning: '일찍이', strokes: 12 },
        { char: '之', examples: ['지(之)', '어조사', '가다', '그것', '관형격'], reading: '갈 지', meaning: '가다', strokes: 4 },
        { char: '址', examples: ['유지(遺址)', '터', '기지(基址)', '지', '유적지'], reading: '터 지', meaning: '터', strokes: 7 },
        { char: '沚', examples: ['물가', '지', '섬', '지', '강가'], reading: '물가 지', meaning: '물가', strokes: 7 },
        { char: '祉', examples: ['복지(福祉)', '복', '행복', '지', '경사'], reading: '복 지', meaning: '복', strokes: 9 },
        { char: '肢', examples: ['사지(四肢)', '팔다리', '지체(肢體)', '지', '몸'], reading: '팔다리 지', meaning: '팔다리', strokes: 8 },
        { char: '枳', examples: ['탱자', '지', '지각(枳殼)', '지', '가시나무'], reading: '탱자 지', meaning: '탱자', strokes: 9 },
        { char: '咫', examples: ['지척(咫尺)', '짧다', '가깝다', '지', '거리'], reading: '짧을 지', meaning: '짧다(거리)', strokes: 9 },
        { char: '贄', examples: ['폐백(幣帛)', '지', '예물', '지', '선물'], reading: '폐백 지', meaning: '폐백', strokes: 18 },
        { char: '趾', examples: ['발가락', '지', '족적(足蹟)', '지', '발'], reading: '발가락 지', meaning: '발가락', strokes: 11 },
        { char: '摯', examples: ['진지(眞摯)', '잡다', '성실하다', '지', '지극하다'], reading: '잡을 지', meaning: '잡다', strokes: 15 },
        { char: '漬', examples: ['염지(鹽漬)', '담그다', '절이다', '지', '물들다'], reading: '담글 지', meaning: '담그다', strokes: 14 },
        { char: '痣', examples: ['점', '사마귀', '지', '특징', '기미'], reading: '사마귀 지', meaning: '사마귀(점)', strokes: 13 },
        { char: '直', examples: ['직선(直線)', '곧다', '솔직하다', '직', '바로'], reading: '곧을 직', meaning: '곧다', strokes: 8 },
        { char: '稷', examples: ['사직(社稷)', '기장', '곡식', '직', '나라'], reading: '기장 직', meaning: '기장(사직)', strokes: 15 },
        { char: '禝', examples: ['사직(社稷)', '직', '제사', '직', '단'], reading: '사직 직', meaning: '사직', strokes: 14 },
        { char: '稙', examples: ['올벼', '직', '이른벼', '직', '식물'], reading: '올벼 직', meaning: '올벼', strokes: 13 },
        { char: '嗔', examples: ['진노(嗔怒)', '성내다', '화내다', '진', '분노'], reading: '성낼 진', meaning: '성내다', strokes: 13 },
        { char: '賑', examples: ['진휼(賑恤)', '구휼하다', '베풀다', '진', '도와주다'], reading: '구휼할 진', meaning: '구휼하다', strokes: 15 },
        { char: '疹', examples: ['발진(發疹)', '홍역', '두드러기', '진', '피부병'], reading: '홍역 진', meaning: '홍역', strokes: 10 },
        { char: '秦', examples: ['진나라(秦-)', '진시황', '나라', '진', '중국'], reading: '나라 이름 진', meaning: '나라 이름', strokes: 10 },
        { char: '軫', examples: ['진념(軫念)', '수레뒤턱', '근심하다', '진', '생각'], reading: '수레 뒤턱 진', meaning: '수레 뒤턱', strokes: 12 },
        { char: '塵', examples: ['미세먼지', '티끌', '먼지', '진', '속세'], reading: '티끌 진', meaning: '티끌', strokes: 14 },
        { char: '津', examples: ['나루터', '진', '흥미진진(興味津津)', '진', '물가'], reading: '나루 진', meaning: '나루', strokes: 9 },
        { char: '榛', examples: ['개암나무', '진', '가시덤불', '진', '나무'], reading: '개암나무 진', meaning: '개암나무', strokes: 14 },
        { char: '禛', examples: ['복', '진', '상서롭다', '진', '행운'], reading: '복 진', meaning: '복', strokes: 15 },
        { char: '縝', examples: ['주밀(綢縝)', '삼실', '이루다', '진', '꼼꼼하다'], reading: '삼실 진', meaning: '삼실', strokes: 16 },
        { char: '溱', examples: ['진', '많다', '강이름', '진', '성하다'], reading: '많을 진', meaning: '많다', strokes: 13 },
        { char: '臻', examples: ['진', '이르다', '닿다', '진', '오다'], reading: '이를 진', meaning: '이르다', strokes: 16 },
        { char: '晉', examples: ['진급(晉級)', '나아가다', '오르다', '진', '승진'], reading: '나아갈 진', meaning: '나아가다', strokes: 10 },
        { char: '朕', examples: ['짐(朕)', '나', '임금', '황제', '스스로'], reading: '나 짐', meaning: '나(임금)', strokes: 10 },
        { char: '斟', examples: ['짐작(斟酌)', '헤아리다', '따르다', '짐', '술따르다'], reading: '짐작할 짐', meaning: '짐작하다', strokes: 13 },
        { char: '鴆', examples: ['짐새', '독', '짐독(鴆毒)', '짐', '새'], reading: '짐새 짐', meaning: '짐새', strokes: 14 },
        { char: '嫉', examples: ['질투(嫉妬)', '시기하다', '미워하다', '질', '질시(嫉視)'], reading: '시기할 질', meaning: '시기하다', strokes: 13 },
        { char: '桎', examples: ['질곡(桎梏)', '차꼬', '속박', '질', '족쇄'], reading: '차꼬 질', meaning: '차꼬', strokes: 10 },
        { char: '膣', examples: ['질(膣)', '여성', '신체', '질', '장기'], reading: '질 질', meaning: '질(보지)', strokes: 15 },
        { char: '跌', examples: ['질도(跌倒)', '거꾸러지다', '넘어지다', '질', '실패'], reading: '거꾸러질 질', meaning: '거꾸러지다', strokes: 12 },
        { char: '叱', examples: ['질타(叱咤)', '꾸짖다', '질책(叱責)', '질', '야단치다'], reading: '꾸짖을 질', meaning: '꾸짖다', strokes: 5 },
        { char: '蹉', examples: ['차질(蹉跌)', '미끄러지다', '실수', '차', '잘못'], reading: '미끄러질 차', meaning: '미끄러지다', strokes: 17 },
        { char: '磋', examples: ['절차탁마(切磋琢磨)', '갈다', '닦다', '차', '노력'], reading: '갈 차', meaning: '갈다', strokes: 14 },
        { char: '箚', examples: ['기찰(記箚)', '찌르다', '기록하다', '차', '메모'], reading: '찌를 차', meaning: '찌르다', strokes: 14 },
        { char: '刹', examples: ['찰나(刹那)', '절', '사찰(寺刹)', '찰', '순간'], reading: '절 찰', meaning: '절', strokes: 8 },
        { char: '僭', examples: ['참칭(僭稱)', '참람하다', '넘보다', '참', '분수에넘다'], reading: '참람할 참', meaning: '참람하다', strokes: 14 },
        { char: '塹', examples: ['참호(塹壕)', '구덩이', '해자(垓字)', '참', '파다'], reading: '구덩이 참', meaning: '구덩이', strokes: 14 },
        { char: '懺', examples: ['참회(懺悔)', '뉘우치다', '고해', '참', '반성'], reading: '뉘우칠 참', meaning: '뉘우치다', strokes: 20 },
        { char: '讖', examples: ['참위(讖緯)', '비결', '예언', '참', '점'], reading: '비결 참', meaning: '비결', strokes: 24 },
        { char: '讒', examples: ['참소(讒訴)', '참언(讒言)', '헐뜯다', '참', '모함'], reading: '참소할 참', meaning: '참소하다', strokes: 24 },
        { char: '斬', examples: ['참수(斬首)', '베다', '자르다', '참', '처형'], reading: '벨 참', meaning: '베다', strokes: 11 },
        { char: '站', examples: ['역참(驛站)', '정거장', '서다', '참', '머무르다'], reading: '역참 참', meaning: '역참', strokes: 10 },
        { char: '菖', examples: ['창포(菖蒲)', '풀', '식물', '창', '단오'], reading: '창포 창', meaning: '창포', strokes: 12 },
        { char: '猖', examples: ['창궐(猖獗)', '미쳐날뛰다', '사납다', '창', '퍼지다'], reading: '미쳐 날뛸 창', meaning: '미쳐 날뛰다', strokes: 11 },
        { char: '愴', examples: ['참담(悽愴)', '슬퍼하다', '창', '비참하다', '아프다'], reading: '슬퍼할 창', meaning: '슬퍼하다', strokes: 13 },
        { char: '廠', examples: ['병기창(兵器廠)', '헛간', '공장', '창', '창고'], reading: '헛간 창', meaning: '헛간(공장)', strokes: 15 },
        { char: '敞', examples: ['광창(廣敞)', '시원하다', '넓다', '창', '트이다'], reading: '시원할 창', meaning: '시원하다', strokes: 12 },
        { char: '脹', examples: ['팽창(膨脹)', '붓다', '부풀다', '창', '확대'], reading: '부을 창', meaning: '붓다', strokes: 12 },
        { char: '艙', examples: ['선창(船艙)', '배', '창', '화물칸', '객실'], reading: '선창 창', meaning: '선창', strokes: 16 },
        { char: '瘡', examples: ['욕창(褥瘡)', '부스럼', '상처', '창', '종기'], reading: '부스럼 창', meaning: '부스럼', strokes: 15 },
        { char: '債', examples: ['부채(負債)', '빚', '채무(債務)', '채', '빌리다'], reading: '빚 채', meaning: '빚', strokes: 13 },
        { char: '砦', examples: ['요새(要砦)', '울타리', '성채', '채', '방어'], reading: '울타리 채', meaning: '울타리', strokes: 11 },
        { char: '埰', examples: ['사패지', '채', '영지', '채', '땅'], reading: '사패지 채', meaning: '사패지', strokes: 11 },
        { char: '釵', examples: ['금채(金釵)', '비녀', '머리장식', '채', '장신구'], reading: '비녀 채', meaning: '비녀', strokes: 11 },
        { char: '斥', examples: ['배척(排斥)', '물리치다', '개척(開拓)', '척', '거절하다'], reading: '물리칠 척', meaning: '물리치다', strokes: 5 },
        { char: '拓', examples: ['개척(開拓)', '넓히다', '탁본(拓本)', '척', '열다'], reading: '넓힐 척', meaning: '넓히다', strokes: 8 },
        { char: '瘠', examples: ['척박(瘠薄)', '여위다', '메마르다', '척', '땅'], reading: '여윌 척', meaning: '여위다', strokes: 15 },
        { char: '脊', examples: ['척추(脊椎)', '등성마루', '등뼈', '척', '뼈'], reading: '등성마루 척', meaning: '등성마루', strokes: 10 },
        { char: '蹠', examples: ['척', '발바닥', '밟다', '척', '발'], reading: '발바닥 척', meaning: '발바닥', strokes: 18 },
        { char: '喘', examples: ['천식(喘息)', '헐떡거리다', '숨차다', '천', '호흡'], reading: '헐떡거릴 천', meaning: '헐떡거리다', strokes: 12 },
        { char: '擅', examples: ['독단(獨擅)', '멋대로', '천단(擅斷)', '천', '마음대로'], reading: '멋대로 천', meaning: '멋대로 하다', strokes: 16 },
        { char: '闡', examples: ['천명(闡明)', '열다', '밝히다', '천', '드러내다'], reading: '열 천', meaning: '열다', strokes: 20 },
        { char: '籤', examples: ['추첨(抽籤)', '제비', '당첨(當籤)', '첨', '뽑다'], reading: '제비 첨', meaning: '제비(추첨)', strokes: 23 },
        { char: '諂', examples: ['아첨(阿諂)', '알랑거라다', '첨유(諂諛)', '첨', '비위맞추다'], reading: '아첨할 첨', meaning: '아첨하다', strokes: 15 },
        { char: '妾', examples: ['첩(妾)', '소실', '첩실', '첩', '여자'], reading: '첩 첩', meaning: '첩', strokes: 8 },
        { char: '捷', examples: ['민첩(敏捷)', '빠르다', '승리', '첩', '재빠르다'], reading: '빠를 첩', meaning: '빠르다', strokes: 11 },
        { char: '帖', examples: ['수첩(手帖)', '문서', '약첩', '첩', '책'], reading: '문서 첩', meaning: '문서', strokes: 8 },
        { char: '疊', examples: ['중첩(重疊)', '겹치다', '첩첩산중(疊疊山中)', '첩', '포개다'], reading: '겹쳐질 첩', meaning: '겹쳐지다', strokes: 22 },
        { char: '睫', examples: ['속눈썹', '첩', '눈', '첩', '털'], reading: '속눈썹 첩', meaning: '속눈썹', strokes: 13 },
        { char: '晴', examples: ['청천(晴天)', '개다', '쾌청(快晴)', '청', '맑다'], reading: '갤 청', meaning: '개다', strokes: 12 },
        { char: '鯖', examples: ['청어', '물고기', '청', '생선', '자반'], reading: '청어 청', meaning: '청어', strokes: 19 },
        { char: '剃', examples: ['체발(剃髮)', '머리깎다', '삭발', '체', '이발'], reading: '머리 깎을 체', meaning: '머리 깎다', strokes: 9 },
        { char: '諦', examples: ['체념(諦念)', '살피다', '포기하다', '체', '깨닫다'], reading: '살필 체', meaning: '살피다(체념)', strokes: 16 },
        { char: '逮', examples: ['체포(逮捕)', '미치다', '잡다', '체', '이르다'], reading: '미칠 체', meaning: '미치다(체포)', strokes: 11 },
        { char: '滯', examples: ['정체(停滯)', '막히다', '체증(滯症)', '체', '머무르다'], reading: '막힐 체', meaning: '막히다', strokes: 14 },
        { char: '篩', examples: ['체', '거르다', '선별', '체질', '시'], reading: '체 시', meaning: '체(시/사)', strokes: 16 },
        { char: '草', examples: ['초고(草稿)', '기초(起草)', '풀', '초', '초안'], reading: '풀 초', meaning: '풀', strokes: 10 },
        { char: '哨', examples: ['보초(步哨)', '망보다', '전초(前哨)', '초', '감시'], reading: '망 볼 초', meaning: '망 보다', strokes: 10 },
        { char: '礁', examples: ['암초(暗礁)', '바위', '초', '위험', '돌'], reading: '암초 초', meaning: '암초', strokes: 17 },
        { char: '貂', examples: ['담비', '모피', '초', '동물', '털'], reading: '담비 초', meaning: '담비', strokes: 12 },
        { char: '憔', examples: ['초췌(憔悴)', '수척하다', '여위다', '초', '마르다'], reading: '수척할 초', meaning: '수척하다', strokes: 15 },
        { char: '蜀', examples: ['촉나라(蜀-)', '나라', '유비', '촉', '촉한'], reading: '나라 이름 촉', meaning: '나라 이름', strokes: 13 },
        { char: '囑', examples: ['위촉(委囑)', '부탁하다', '촉탁(囑託)', '촉', '맡기다'], reading: '부탁할 촉', meaning: '부탁하다', strokes: 24 },
        { char: '矗', examples: ['조광(矗光)', '우거지다', '곧다', '촉', '서다'], reading: '우거질 촉', meaning: '우거지다(곧을 촉)', strokes: 24 },
        { char: '寵', examples: ['총애(寵愛)', '괴다', '사랑', '총', '총신(寵臣)'], reading: '괼 총', meaning: '괴다(사랑하다)', strokes: 19 },
        { char: '叢', examples: ['총서(叢書)', '떨기', '모이다', '총', '숲'], reading: '떨기 총', meaning: '떨기', strokes: 18 },
        { char: '悇', examples: ['독도(悇憿)', '둔하다', '근심하다', '추', '어리석다'], reading: '둔할 도', meaning: '둔하다(근심할 추)', strokes: 11 },
        { char: '錐', examples: ['낭중지추(囊中之錐)', '송곳', '입추(立錐)', '추', '뾰족하다'], reading: '송곳 추', meaning: '송곳', strokes: 16 },
        { char: '湫', examples: ['소택', '추', '다하다', '추', '낮다'], reading: '소택 추', meaning: '소택(다할 추)', strokes: 12 },
        { char: '鄒', examples: ['추', '나라', '성씨', '추', '중국'], reading: '나라 이름 추', meaning: '나라 이름', strokes: 12 },
        { char: '楸', examples: ['추목(楸木)', '개오동나무', '바둑판', '추', '나무'], reading: '개오동나무 추', meaning: '개오동나무', strokes: 13 },
        { char: '樞', examples: ['중추(中樞)', '지도리', '중심', '추', '핵심'], reading: '지도리 추', meaning: '지도리', strokes: 15 },
        { char: '芻', examples: ['반추(反芻)', '꼴', '되새김질', '추', '풀'], reading: '꼴 추', meaning: '꼴(풀)', strokes: 10 },
        { char: '酋', examples: ['추장(酋長)', '우두머리', '두목', '추', '리더'], reading: '우두머리 추', meaning: '우두머리', strokes: 9 },
        { char: '椎', examples: ['척추(脊椎)', '등골', '망치', '추', '뼈'], reading: '몽둥이 추', meaning: '몽둥이(등골)', strokes: 12 },
        { char: '錘', examples: ['천칭(天錘)', '저울추', '무게', '추', '달다'], reading: '저울 추', meaning: '저울', strokes: 16 },
        { char: '鎚', examples: ['철퇴(鐵鎚)', '망치', '쇠망치', '추', '때리다'], reading: '망치 추', meaning: '망치', strokes: 18 },
        { char: '麁', examples: ['추', '거칠다', '대강', '추', '크다'], reading: '거칠 추', meaning: '거칠다', strokes: 11 },
        { char: '筑', examples: ['축', '악기', '건축', '축', '쌓다'], reading: '악기 이름 축', meaning: '악기 이름', strokes: 12 },
        { char: '竺', examples: ['천축(天竺)', '대나무', '두텁다', '축', '인도'], reading: '대나무 축', meaning: '대나무(나라 이름)', strokes: 8 },
        { char: '椿', examples: ['춘부장(椿府丈)', '참죽나무', '아버지', '춘', '나무'], reading: '참죽나무 춘', meaning: '참죽나무', strokes: 13 },
        { char: '黜', examples: ['축출(逐黜)', '내치다', '물리치다', '출', '쫓아내다'], reading: '물리칠 출', meaning: '물리치다', strokes: 17 },
        { char: '充', examples: ['충전(充電)', '채우다', '충분(充分)', '충', '가득하다'], reading: '채울 충', meaning: '채우다', strokes: 6 },
        { char: '蟲', examples: ['곤충(昆蟲)', '벌레', '충해(蟲害)', '충', '해충'], reading: '벌레 충', meaning: '벌레', strokes: 18 },
        { char: '冲', examples: ['상충(相冲)', '빌다', '화하다', '충', '찌르다'], reading: '빌 충', meaning: '빌다', strokes: 6 },
        { char: '衷', examples: ['절충(折衷)', '속마음', '고충(苦衷)', '충', '가운데'], reading: '속마음 충', meaning: '속마음', strokes: 10 },
        { char: '膵', examples: ['췌장(膵臟)', '췌액', '장기', '췌', '신체'], reading: '췌장 췌', meaning: '췌장', strokes: 15 },
        { char: '萃', examples: ['발췌(拔萃)', '모이다', '초췌', '췌', '뽑다'], reading: '모일 췌', meaning: '모이다', strokes: 12 },
        { char: '贅', examples: ['군더더기', '혹', '赘언(贅言)', '췌', '남다'], reading: '혹 췌', meaning: '혹(군더더기)', strokes: 18 },
        { char: '炊', examples: ['취사(炊事)', '불때다', '밥짓다', '취', '자취(自炊)'], reading: '불 땔 취', meaning: '불 때다', strokes: 8 },
        { char: '鷲', examples: ['독수리', '취', '영취산(靈鷲山)', '취', '새'], reading: '독수리 취', meaning: '독수리', strokes: 23 },
        { char: '翠', examples: ['비취(翡翠)', '물총새', '푸르다', '취', '보석'], reading: '푸를 취', meaning: '푸르다', strokes: 14 },
        { char: '脆', examples: ['연취(軟脆)', '연하다', '무르다', '취', '약하다'], reading: '연할 취', meaning: '연하다', strokes: 10 },
        { char: '側', examples: ['측면(側面)', '곁', '측근(側近)', '측', '옆'], reading: '곁 측', meaning: '곁', strokes: 11 },
        { char: '廁', examples: ['측간(廁間)', '뒷간', '화장실', '측', '변소'], reading: '뒷간 측', meaning: '뒷간', strokes: 12 },
        { char: '惻', examples: ['측은지심(惻隱之心)', '슬퍼하다', '가엾다', '측', '동정'], reading: '슬퍼할 측', meaning: '슬퍼하다', strokes: 12 },
        { char: '侈', examples: ['사치(奢侈)', '사치하다', '낭비', '치', '호화'], reading: '사치할 치', meaning: '사치하다', strokes: 8 },
        { char: '幟', examples: ['기치(旗幟)', '기', '깃발', '치', '표식'], reading: '기 치', meaning: '기', strokes: 15 },
        { char: '熾', examples: ['치열(熾烈)', '성하다', '불타다', '치', '강하다'], reading: '성할 치', meaning: '성하다', strokes: 16 },
        { char: '雉', examples: ['장끼', '꿩', '치', '까투리', '새'], reading: '꿩 치', meaning: '꿩', strokes: 13 },
        { char: '淄', examples: ['치', '검은빛', '강이름', '치', '검다'], reading: '검은빛 치', meaning: '검은빛', strokes: 11 },
        { char: '錙', examples: ['치', '저울눈', '무게', '치', '작다'], reading: '저울눈 치', meaning: '저울눈', strokes: 16 },
        { char: '嗤', examples: ['치소(嗤笑)', '비웃다', '조소', '치', '놀리다'], reading: '비웃을 치', meaning: '비웃다', strokes: 13 },
        { char: '痴', examples: ['음치(音痴)', '어리석다', '치매(痴呆)', '치', '바보'], reading: '어리석을 치', meaning: '어리석다', strokes: 13 },
        { char: '癡', examples: ['백치(白癡)', '어리석다', '치정(癡情)', '치', '미련'], reading: '어리석을 치', meaning: '어리석다', strokes: 19 },
        { char: '梔', examples: ['치자(梔子)', '치자나무', '염료', '치', '열매'], reading: '치자나무 치', meaning: '치자나무', strokes: 11 },
        { char: '馳', examples: ['질주(疾馳)', '달리다', '경주', '치', '빠르다'], reading: '달릴 치', meaning: '달리다', strokes: 13 },
        { char: '親', examples: ['친절(親切)', '친하다', '부모', '친', '가깝다'], reading: '친할 친', meaning: '친하다', strokes: 16 },
        { char: '枕', examples: ['침구(寢具)', '베개', '목침(木枕)', '침', '잠자다'], reading: '베개 침', meaning: '베개', strokes: 8 },
        { char: '蟄', examples: ['경칩(驚蟄)', '숨다', '겨울잠', '칩', '웅크리다'], reading: '숨을 칩', meaning: '숨다(겨울잠)', strokes: 17 },
        { char: '秤', examples: ['천칭(天秤)', '저울', '무게', '칭', '달다'], reading: '저울 칭', meaning: '저울', strokes: 10 },
        { char: '快', examples: ['쾌활(快活)', '쾌하다', '빠르다', '쾌', '즐겁다'], reading: '쾌할 쾌', meaning: '쾌하다', strokes: 7 },
        { char: '唾', examples: ['타액(唾液)', '침', '수타(手唾)', '타', '뱉다'], reading: '침 타', meaning: '침', strokes: 11 },
        { char: '咤', examples: ['질타(叱咤)', '꾸짖다', '타', '야단치다', '혼내다'], reading: '꾸짖을 타', meaning: '꾸짖다', strokes: 9 },
        { char: '陀', examples: ['타락(墮落)', '비탈지다', '불타(佛陀)', '타', '떨어지다'], reading: '비탈질 타', meaning: '비탈지다', strokes: 8 },
        { char: '駝', examples: ['낙타(駱駝)', '타', '동물', '타', '혹'], reading: '낙타 타', meaning: '낙타', strokes: 15 },
        { char: '楕', examples: ['타원(楕圓)', '길쭉하다', '타', '모양', '기하'], reading: '길쭉할 타', meaning: '길쭉하다', strokes: 13 },
        { char: '馱', examples: ['타', '짐싣다', '운반', '타', '말'], reading: '짐 실을 타', meaning: '짐 싣다', strokes: 13 },
        { char: '托', examples: ['의탁(依托)', '맡기다', '부탁', '탁', '밀다'], reading: '맡길 탁', meaning: '맡기다', strokes: 6 },
        { char: '鐸', examples: ['목탁(木鐸)', '방울', '종', '탁', '깨우치다'], reading: '방울 탁', meaning: '방울', strokes: 21 },
        { char: '濁', examples: ['혼탁(混濁)', '흐리다', '탁주(濁酒)', '탁', '더럽다'], reading: '흐릴 탁', meaning: '흐리다', strokes: 16 },
        { char: '灘', examples: ['천탄(淺灘)', '여울', '현해탄(玄海灘)', '탄', '물가'], reading: '여울 탄', meaning: '여울', strokes: 21 },
        { char: '坦', examples: ['평탄(平坦)', '지형', '평평하다', '탄', '탄탄대로(坦坦大路)'], reading: '평탄할 탄', meaning: '평탄하다', strokes: 8 },
        { char: '憚', examples: ['기탄(忌憚)', '꺼리다', '거리끼다', '탄', '주저하다'], reading: '꺼릴 탄', meaning: '꺼리다', strokes: 16 },
        { char: '綻', examples: ['파탄(破綻)', '터지다', '찢어지다', '탄', '매화'], reading: '터질 탄', meaning: '터지다', strokes: 14 },
        { char: '奪', examples: ['강탈(强奪)', '빼앗다', '약탈(掠奪)', '탈', '탈환'], reading: '빼앗을 탈', meaning: '빼앗다', strokes: 14 },
        { char: '耽', examples: ['탐독(耽讀)', '즐기다', '빠지다', '탐', '음란(耽溺)'], reading: '즐길 탐', meaning: '즐기다', strokes: 10 },
        { char: '宕', examples: ['호탕(豪宕)', '방탕하다', '너그럽다', '탕', '미루다'], reading: '호탕할 탕', meaning: '호탕하다', strokes: 8 },
        { char: '帑', examples: ['국탕(國帑)', '금고', '곳간', '탕', '재물'], reading: '금고 탕', meaning: '금고', strokes: 8 },
        { char: '蕩', examples: ['방탕(放蕩)', '쓸어버리다', '탕진(蕩盡)', '탕', '흔들다'], reading: '방탕할 탕', meaning: '방탕하다', strokes: 16 },
        { char: '殆', examples: ['위태(危殆)', '거의', '자칫', '태', '위험'], reading: '위태할 태', meaning: '위태하다', strokes: 9 },
        { char: '苔', examples: ['청태(靑苔)', '이끼', '백태(白苔)', '태', '식물'], reading: '이끼 태', meaning: '이끼', strokes: 8 },
        { char: '汰', examples: ['도태(淘汰)', '일다', '씻다', '태', '사치하다'], reading: '일 태', meaning: '일다(걸러내다)', strokes: 7 },
        { char: '颱', examples: ['태풍(颱風)', '바람', '태', '폭풍', '기상'], reading: '태풍 태', meaning: '태풍', strokes: 14 },
        { char: '撑', examples: ['지탱(支撑)', '버티다', '지지하다', '탱', '막다'], reading: '버틸 탱', meaning: '버티다', strokes: 15 },
        { char: '攄', examples: ['터득(攄得)', '펴다', '표현하다', '터', '깨닫다'], reading: '펼 터', meaning: '펴다', strokes: 17 },
        { char: '慟', examples: ['통곡(慟哭)', '서러워하다', '슬퍼하다', '통', '울다'], reading: '서러워할 통', meaning: '서러워하다', strokes: 14 },
        { char: '桶', examples: ['통(桶)', '저금통', '물통', '통', '용기'], reading: '통 통', meaning: '통', strokes: 11 },
        { char: '堆', examples: ['퇴적(堆積)', '쌓다', '무더기', '퇴비(堆肥)', '언덕'], reading: '쌓을 퇴', meaning: '쌓다', strokes: 11 },
        { char: '槌', examples: ['철퇴(鐵槌)', '망치', '두드리다', '퇴', '치다'], reading: '망치 퇴', meaning: '망치', strokes: 14 },
        { char: '褪', examples: ['퇴색(褪色)', '바래다', '벗다', '퇴', '낡다'], reading: '바랠 퇴', meaning: '바래다', strokes: 16 },
        { char: '腿', examples: ['대퇴(大腿)', '넓적다리', '허벅지', '퇴', '다리'], reading: '넓적다리 퇴', meaning: '넓적다리', strokes: 14 },
        { char: '投', examples: ['투표(投票)', '던지다', '투자(投資)', '투', '투수'], reading: '던질 투', meaning: '던지다', strokes: 7 },
        { char: '骰', examples: ['투자(骰子)', '주사위', '노름', '투', '도박'], reading: '주사위 투', meaning: '주사위', strokes: 13 },
        { char: '妬', examples: ['질투(嫉妬)', '시기하다', '강샘', '투', '미워하다'], reading: '시기할 투', meaning: '시기하다', strokes: 8 },
        { char: '套', examples: ['상투(常套)', '씌우다', '봉투(封套)', '투', '틀'], reading: '씌울 투', meaning: '씌우다', strokes: 10 },
        { char: '芭', examples: ['파초(芭蕉)', '풀', '바나나', '파', '식물'], reading: '파초 파', meaning: '파초', strokes: 8 },
        { char: '跛', examples: ['파행(跛行)', '절름발이', '절뚝거리다', '파', '불균형'], reading: '절름발이 파', meaning: '절름발이', strokes: 12 },
        { char: '爬', examples: ['파충류(爬蟲類)', '긁다', '기어가다', '파', '동물'], reading: '긁을 파', meaning: '긁다', strokes: 8 },
        { char: '琶', examples: ['비파(琵琶)', '악기', '타다', '파', '음악'], reading: '비파 파', meaning: '비파', strokes: 12 },
        { char: '瓣', examples: ['꽃잎', '판', '화판(花瓣)', '판막(瓣膜)', '조각'], reading: '꽃잎 판', meaning: '꽃잎', strokes: 19 },
        { char: '佩', examples: ['패용(佩用)', '차다', '명심하다', '패', '패검(佩劍)'], reading: '찰 패', meaning: '차다', strokes: 8 },
        { char: '唄', examples: ['범패(梵唄)', '염불', '노래', '패', '불교'], reading: '염불 패', meaning: '염불', strokes: 10 },
        { char: '悖', examples: ['패륜(悖倫)', '거스르다', '어긋나다', '패', '나쁘다'], reading: '거스럴 패', meaning: '거스르다', strokes: 10 },
        { char: '浿', examples: ['패수(浿水)', '강이름', '대동강', '패', '물'], reading: '물 이름 패', meaning: '물 이름', strokes: 10 },
        { char: '膨', examples: ['팽창(膨脹)', '부풀다', '늘어나다', '팽', '커지다'], reading: '부풀 팽', meaning: '부풀다', strokes: 16 },
        { char: '愎', examples: ['강퍅(剛愎)', '괴팍하다', '고집', '퍅', '성격'], reading: '강퍅할 퍅', meaning: '강퍅하다', strokes: 12 },
        { char: '扁', examples: ['편도(扁桃)', '작다', '납작하다', '편', '편평족(扁平足)'], reading: '작을 편', meaning: '작다(납작하다)', strokes: 9 },
        { char: '篇', examples: ['장편(長篇)', '책', '편찬(篇纂)', '편', '시편'], reading: '책 편', meaning: '책', strokes: 15 },
        { char: '翩', examples: ['편편(翩翩)', '나부끼다', '펄럭이다', '편', '날다'], reading: '나부낄 편', meaning: '나부끼다', strokes: 15 },
        { char: '貶', examples: ['폄하(貶下)', '떨어뜨리다', '낮추다', '폄', '깎아내리다'], reading: '떨어뜨릴 폄', meaning: '떨어뜨리다', strokes: 12 },
        { char: '萍', examples: ['부평초(浮萍草)', '개구리밥', '떠다니다', '평', '풀'], reading: '개구리밥 평', meaning: '개구리밥', strokes: 12 },
        { char: '吠', examples: ['광견(狂犬)', '짖다', '개', '폐', '소리'], reading: '짖을 폐', meaning: '짖다', strokes: 7 },
        { char: '肺', examples: ['폐(肺)', '허파', '폐렴(肺炎)', '폐', '숨쉬다'], reading: '허파 폐', meaning: '허파', strokes: 8 },
        { char: '蔽', examples: ['은폐(隱蔽)', '덮다', '가리다', '폐', '막다'], reading: '덮을 폐', meaning: '덮다', strokes: 16 },
        { char: '袍', examples: ['도포(道袍)', '옷', '포', '관복', '입다'], reading: '도포 포', meaning: '도포', strokes: 10 },
        { char: '鮑', examples: ['관포지교(管鮑之交)', '전복', '절인물고기', '포', '해산물'], reading: '절인 물고기 포', meaning: '절인 물고기(전복)', strokes: 16 },
        { char: '逋', examples: ['포탈(逋脫)', '달아나다', '체납', '포', '도망'], reading: '달아날 포', meaning: '달아나다', strokes: 11 },
        { char: '脯', examples: ['육포(肉脯)', '포', '말린고기', '포', '제수'], reading: '포 포', meaning: '포', strokes: 11 },
        { char: '匍', examples: ['포복(匍匐)', '기다', '기어가다', '포', '엎드리다'], reading: '길 포', meaning: '기다', strokes: 9 },
        { char: '葡', examples: ['포도(葡萄)', '과일', '포도주', '포', '나무'], reading: '포도 포', meaning: '포도', strokes: 13 },
        { char: '曝', examples: ['폭로(暴露)', '쪼이다', '햇볕', '폭', '드러내다'], reading: '폭 포', meaning: '폭(쪼이다)', strokes: 19 },
        { char: '幅', examples: ['부의(賻儀)', '폭', '너비', '진폭(振幅)', '넓이'], reading: '폭 폭', meaning: '폭', strokes: 12 },
        { char: '驃', examples: ['표기(驃騎)', '표', '말', '날래다', '용감하다'], reading: '표절따 표', meaning: '표절따', strokes: 21 },
        { char: '剽', examples: ['표절(剽竊)', '훔치다', '표', '베끼다', '도둑'], reading: '훔칠 표', meaning: '훔치다', strokes: 11 },
        { char: '慓', examples: ['표표(慓慓)', '날래다', '급하다', '표', '빠르다'], reading: '날랠 표', meaning: '날래다', strokes: 14 },
        { char: '豹', examples: ['표범(豹)', '짐승', '가죽', '표', '얼룩'], reading: '표범 표', meaning: '표범', strokes: 10 },
        { char: '彪', examples: ['표', '무늬', '아름답다', '표', '범'], reading: '무늬 표', meaning: '무늬', strokes: 11 },
        { char: '稟', examples: ['품의(稟議)', '여쭈다', '품성(稟性)', '품', '보고하다'], reading: '여쭐 품', meaning: '여쭈다', strokes: 13 },
        { char: '諷', examples: ['풍자(諷刺)', '비꼬다', '풍간(諷諫)', '풍', '암시'], reading: '풍자할 풍', meaning: '풍자하다', strokes: 16 },
        { char: '彼', examples: ['피차(彼此)', '저', '그', '피아(彼我)', '상대'], reading: '저 피', meaning: '저', strokes: 8 },
        { char: '疲', examples: ['피곤(疲困)', '지치다', '피로(疲勞)', '피', '힘들다'], reading: '피곤할 피', meaning: '피곤하다', strokes: 10 },
        { char: '鈹', examples: ['비소', '창', '침', '피', '금속'], reading: '창 피', meaning: '창', strokes: 13 },
        { char: '疋', examples: ['필부(疋夫)', '짝', '필', '발', '소박하다'], reading: '필 필', meaning: '필(짝)', strokes: 5 },
        { char: '下', examples: ['하산(下山)', '아래', '하늘(天下)', '하', '내려가다'], reading: '아래 하', meaning: '아래', strokes: 3 },
        { char: '瑕', examples: ['하자(瑕疵)', '허물', '결점', '하', '티'], reading: '허물 하', meaning: '허물', strokes: 13 },
        { char: '鰕', examples: ['새우', '대하(大鰕)', '하', '해산물', '갑각류'], reading: '새우 하', meaning: '새우', strokes: 20 },
        { char: '虐', examples: ['학대(虐待)', '모질다', '학살(虐殺)', '학', '괴롭히다'], reading: '모질 학', meaning: '모질다', strokes: 9 },
        { char: '瘧', examples: ['학질(瘧疾)', '말라리아', '학', '병', '열병'], reading: '학질 학', meaning: '학질', strokes: 15 },
        { char: '翰', examples: ['한림(翰林)', '날개', '글', '한', '붓'], reading: '날개 한', meaning: '날개', strokes: 16 },
        { char: '罕', examples: ['희한(稀罕)', '드물다', '한', '그물', '적다'], reading: '드물 한', meaning: '드물다', strokes: 7 },
        { char: '邯', examples: ['한단지몽(邯鄲之夢)', '땅이름', '한', '조나라', '꿈'], reading: '땅 이름 한', meaning: '땅 이름', strokes: 8 },
        { char: '轄', examples: ['관할(管轄)', '다스리다', '비녀장', '할', '통할(統轄)'], reading: '비녀장 할', meaning: '비녀장(다스리다)', strokes: 17 },
        { char: '咸', examples: ['함흥(咸興)', '다', '모두', '함', '함경도'], reading: '다 함', meaning: '다', strokes: 9 },
        { char: '檻', examples: ['함정(檻穽)', '우리', '난간', '함', '가두다'], reading: '우리 함', meaning: '우리', strokes: 18 },
        { char: '緘', examples: ['함구(緘口)', '봉하다', '입다물다', '함', '편지'], reading: '봉할 함', meaning: '봉하다', strokes: 15 },
        { char: '銜', examples: ['직함(職銜)', '재갈', '벼슬', '함', '직위'], reading: '재갈 함', meaning: '재갈', strokes: 14 },
        { char: '陜', examples: ['협착(陜窄)', '좁다', '협', '땅이름', '합'], reading: '좁을 합', meaning: '좁다', strokes: 10 },
        { char: '蛤', examples: ['대합(大蛤)', '조개', '합', '모시조개', '합개(蛤蓋)'], reading: '조개 합', meaning: '조개', strokes: 12 },
        { char: '伉', examples: ['항려(伉儷)', '짝', '배우자', '항', '강하다'], reading: '짝 항', meaning: '짝', strokes: 6 },
        { char: '沆', examples: ['항해(沆瀣)', '넓다', '이슬', '항', '흐르다'], reading: '넓을 항', meaning: '넓다', strokes: 7 },
        { char: '姮', examples: ['항아(姮娥)', '달', '항', '선녀', '미인'], reading: '항아 항', meaning: '항아', strokes: 9 },
        { char: '缸', examples: ['어항(魚缸)', '항아리', '물독', '항', '그릇'], reading: '항아리 항', meaning: '항아리', strokes: 9 },
        { char: '偕', examples: ['해로(偕老)', '함께', '백년해로', '해', '같이하다'], reading: '함께 해', meaning: '함께', strokes: 11 },
        { char: '諧', examples: ['해학(諧謔)', '화하다', '어울리다', '해', '익살'], reading: '화할 해', meaning: '화하다', strokes: 16 },
        { char: '骸', examples: ['잔해(殘骸)', '해골', '형해(形骸)', '해', '뼈'], reading: '해골 해', meaning: '해골', strokes: 16 },
        { char: '蟹', examples: ['게', '해', '게장', '해', '갑각류'], reading: '게 해', meaning: '게', strokes: 19 },
        { char: '懈', examples: ['해태(懈怠)', '게으르다', '나태하다', '해', '느슨하다'], reading: '게으를 해', meaning: '게으르다', strokes: 16 },
        { char: '咳', examples: ['해수(咳嗽)', '기침', '해', '천식', '가래'], reading: '기침 해', meaning: '기침', strokes: 9 },
        { char: '駭', examples: ['아해(駭兒)', '놀라다', '해괴(駭怪)', '해', '두려워하다'], reading: '놀랄 해', meaning: '놀라다', strokes: 16 },
        { char: '倖', examples: ['요행(僥倖)', '행운', '다행', '행', '바라다'], reading: '요행 행', meaning: '요행', strokes: 10 },
        { char: '嚮', examples: ['전향(轉嚮)', '향하다', '방향', '향', '나아가다'], reading: '향할 향', meaning: '향하다', strokes: 19 },
        { char: '餉', examples: ['군량(軍餉)', '건량', '식량', '향', '밥'], reading: '건량 향', meaning: '건량', strokes: 15 },
        { char: '噓', examples: ['허풍(噓風)', '불다', '숨쉬다', '허', '거짓말'], reading: '불 허', meaning: '불다', strokes: 14 },
        { char: '墟', examples: ['폐허(廢墟)', '터', '유적', '허', '빈터'], reading: '터 허', meaning: '터', strokes: 15 },
        { char: '歇', examples: ['간헐(間歇)', '쉬다', '헐', '간격', '잠시'], reading: '쉴 헐', meaning: '쉬다', strokes: 13 },
        { char: '赫', examples: ['혁혁(赫赫)', '빛나다', '붉다', '혁', '공적'], reading: '빛날 혁', meaning: '빛나다', strokes: 14 },
        { char: '奕', examples: ['혁세(奕世)', '크다', '아름답다', '혁', '성하다'], reading: '클 혁', meaning: '크다', strokes: 9 },
        { char: '弦', examples: ['현악기(絃樂器)', '활시위', '상현(上弦)', '현', '악기줄'], reading: '활시위 현', meaning: '활시위', strokes: 8 },
        { char: '舷', examples: ['선현(船舷)', '배', '가장자리', '현', '갑판'], reading: '뱃지 현', meaning: '뱃지(가장자리)', strokes: 11 },
        { char: '眩', examples: ['현기증(眩氣症)', '아찔하다', '어지럽다', '현', '눈부시다'], reading: '아찔할 현', meaning: '아찔하다', strokes: 10 },
        { char: '絢', examples: ['현란(絢爛)', '무늬', '빛나다', '현', '아름답다'], reading: '무늬 현', meaning: '무늬', strokes: 12 },
        { char: '俔', examples: ['현', '염탐하다', '엿보다', '현', '미인'], reading: '염탐할 현', meaning: '염탐하다', strokes: 9 },
        { char: '睍', examples: ['현', '보다', '현현(睍睍)', '현', '두려워하다'], reading: '볼 현', meaning: '보다', strokes: 12 },
        { char: '孑', examples: ['혈혈단신(孑孑單身)', '외롭다', '홀로', '혈', '모기유충(장구벌레)'], reading: '외로울 혈', meaning: '외롭다', strokes: 3 },
        { char: '穴', examples: ['동굴(洞窟)', '구멍', '혈(穴)', '혈거(穴居)', '무덤'], reading: '구멍 혈', meaning: '구멍', strokes: 5 },
        { char: '嫌', examples: ['혐오(嫌惡)', '싫어하다', '혐의(嫌疑)', '혐', '의심'], reading: '싫어할 혐', meaning: '싫어하다', strokes: 13 },
        { char: '俠', examples: ['협객(俠客)', '호협하다', '의롭다', '협', '용감하다'], reading: '호협할 협', meaning: '호협하다', strokes: 9 },
        { char: '挾', examples: ['협공(挾攻)', '끼다', '품다', '협', '끼우다'], reading: '낄 협', meaning: '끼다', strokes: 10 },
        { char: '頰', examples: ['뺨', '협', '얼굴', '협골(頰骨)', '볼'], reading: '뺨 협', meaning: '뺨', strokes: 16 },
        { char: '亨', examples: ['만사형통(萬事亨通)', '형통하다', '통하다', '형', '제사지내다'], reading: '형통할 형', meaning: '형통하다', strokes: 7 },
        { char: '荊', examples: ['형극(荊棘)', '가시', '가시나무', '형', '고난'], reading: '가시 형', meaning: '가시', strokes: 10 },
        { char: '彗', examples: ['혜성(彗星)', '살별', '빗자루', '혜', '별'], reading: '살별 혜', meaning: '살별', strokes: 11 },
        { char: '醯', examples: ['식혜(食醯)', '혜', '초', '식초', '젓갈'], reading: '식혜 혜', meaning: '식혜', strokes: 19 },
        { char: '蹊', examples: ['혜경(蹊徑)', '지름길', '길', '혜', '좁은길'], reading: '지름길 혜', meaning: '지름길', strokes: 17 },
        { char: '瑚', examples: ['산호(珊瑚)', '호', '보석', '산호초', '바다'], reading: '산호 호', meaning: '산호', strokes: 13 },
        { char: '琥', examples: ['호박(琥珀)', '보석', '호', '송진', '광물'], reading: '호박 호', meaning: '호박', strokes: 12 },
        { char: '扈', examples: ['호종(扈從)', '뒤따르다', '호', '수행하다', '따르다'], reading: '뒤따를 호', meaning: '뒤따르다', strokes: 11 },
        { char: '壕', examples: ['참호(塹壕)', '해자', '구덩이', '호', '방어'], reading: '해자 호', meaning: '해자', strokes: 17 },
        { char: '濠', examples: ['해자', '호', '물웅덩이', '성', '방어'], reading: '해자 호', meaning: '해자', strokes: 17 },
        { char: '壺', examples: ['산호(山壺)', '병', '항아리', '호', '그릇'], reading: '병 호', meaning: '병', strokes: 12 },
        { char: '祜', examples: ['천호(天祜)', '복', '호', '행복', '도움'], reading: '복 호', meaning: '복', strokes: 10 },
        { char: '顥', examples: ['호', '크다', '하얗다', '호', '머리'], reading: '클 호', meaning: '크다', strokes: 21 },
        { char: '酷', examples: ['혹독(酷毒)', '심하다', '냉혹(冷酷)', '혹', '잔인하다'], reading: '심할 혹', meaning: '심하다', strokes: 14 },
        { char: '惑', examples: ['유혹(誘惑)', '미혹하다', '의혹(疑惑)', '혹', '속이다'], reading: '미혹할 혹', meaning: '미혹하다', strokes: 12 },
        { char: '婚', examples: ['결혼(結婚)', '혼인', '혼사(婚事)', '혼', '혼례'], reading: '혼인 혼', meaning: '혼인', strokes: 11 },
        { char: '昏', examples: ['황혼(黃昏)', '어둡다', '혼수(昏睡)', '혼', '저녁'], reading: '어두울 혼', meaning: '어둡다', strokes: 8 },
        { char: '忽', examples: ['홀대(忽待)', '갑자기', '소홀(疏忽)', '홀', '무시하다'], reading: '갑자기 홀', meaning: '갑자기', strokes: 8 },
        { char: '惚', examples: ['황홀(恍惚)', '홀', '흐릿하다', '반하다', '취하다'], reading: '황홀할 홀', meaning: '황홀하다', strokes: 11 },
        { char: '笏', examples: ['홀(笏)', '조복', '신하', '홀', '패'], reading: '홀 홀', meaning: '홀', strokes: 10 },
        { char: '哄', examples: ['홍소(哄笑)', '떠들썩하다', '크게웃다', '홍', '웃다'], reading: '떠들썩할 홍', meaning: '떠들썩하다', strokes: 9 },
        { char: '泓', examples: ['홍', '물깊다', '웅덩이', '홍', '맑다'], reading: '물 깊을 홍', meaning: '물 깊다', strokes: 8 },
        { char: '烘', examples: ['홍', '횃불', '비추다', '홍', '불'], reading: '횃불 홍', meaning: '횃불', strokes: 10 },
        { char: '訌', examples: ['내홍(內訌)', '어지럽다', '싸움', '홍', '혼란'], reading: '어지러울 홍', meaning: '어지럽다', strokes: 10 },
        { char: '嬅', examples: ['영화(英嬅)', '곱다', '여자이름', '화', '아름답다'], reading: '고울 화', meaning: '곱다', strokes: 12 },
        { char: '靴', examples: ['화', '신발', '장화', '군화', '구두'], reading: '신 화', meaning: '신', strokes: 13 },
        { char: '樺', examples: ['화목(樺木)', '자작나무', '화', '나무', '껍질'], reading: '자작나무 화', meaning: '자작나무', strokes: 16 },
        { char: '畵', examples: ['회화(繪畵)', '그림', '화가', '화', '그리다'], reading: '그림 화', meaning: '그림', strokes: 13 },
        { char: '歡', examples: ['환영(歡迎)', '기뻐하다', '환희(歡喜)', '환', '즐겁다'], reading: '기뻐할 환', meaning: '기뻐하다', strokes: 22 },
        { char: '丸', examples: ['탄환(彈丸)', '알', '둥글다', '환약(丸藥)', '공'], reading: '알 환', meaning: '알', strokes: 3 },
        { char: '奐', examples: ['환', '빛나다', '성대하다', '환', '아름답다'], reading: '빛날 환', meaning: '빛나다', strokes: 9 },
        { char: '宦', examples: ['환관(宦官)', '벼슬', '내시', '환', '섬기다'], reading: '벼슬 환', meaning: '벼슬', strokes: 7 },
        { char: '鰥', examples: ['환과고독(鰥寡孤獨)', '홀아비', '물고기', '환', '외롭다'], reading: '홀아비 환', meaning: '홀아비', strokes: 21 },
        { char: '渙', examples: ['환산(渙散)', '흩어지다', '퍼지다', '환', '풀리다'], reading: '흩어질 환', meaning: '흩어지다', strokes: 12 },
        { char: '猾', examples: ['교활(狡猾)', '간사하다', '노회(老猾)', '활', '나쁘다'], reading: '교활할 활', meaning: '교활하다', strokes: 13 },
        { char: '湟', examples: ['해자', '황', '성', '물웅덩이', '황'], reading: '해자 황', meaning: '해자', strokes: 12 },
        { char: '隍', examples: ['성황(城隍)', '해자', '황', '성', '수호신'], reading: '해자 황', meaning: '해자', strokes: 12 },
        { char: '徨', examples: ['방황(彷徨)', '노닐다', '헤매다', '황', '떠돌다'], reading: '노닐 황', meaning: '노닐다', strokes: 12 },
        { char: '惶', examples: ['황공(惶恐)', '두려워하다', '당황(唐惶)', '황', '겁나다'], reading: '두려워할 황', meaning: '두려워하다', strokes: 12 },
        { char: '遑', examples: ['황급(遑急)', '허둥거리다', '급하다', '황', '바쁘다'], reading: '허둥거릴 황', meaning: '허둥거리다', strokes: 12 },
        { char: '荒', examples: ['황무지(荒蕪地)', '거칠다', '흉년', '황', '황폐(荒廢)'], reading: '거칠 황', meaning: '거칠다', strokes: 10 },
        { char: '恢', examples: ['회복((恢復)', '넓다', '크다', '회', '돌이키다'], reading: '넓을 회', meaning: '넓다', strokes: 9 },
        { char: '蛔', examples: ['회충(蛔蟲)', '기생충', '회', '벌레', '뱃속'], reading: '회충 회', meaning: '회충', strokes: 12 },
        { char: '膾', examples: ['회자(膾炙)', '회', '날고기', '회', '음식'], reading: '회 회', meaning: '회', strokes: 17 },
        { char: '賄', examples: ['뇌물(賂物)', '수뢰(受雷)', '회', '증회(贈賄)', '돈'], reading: '뇌물 회', meaning: '뇌물', strokes: 13 },
        { char: '徊', examples: ['배회(徘徊)', '노닐다', '헤매다', '회', '돌아다니다'], reading: '노닐 회', meaning: '노닐다', strokes: 9 },
        { char: '晦', examples: ['그믐', '회', '도회(韜晦)', '어둡다', '회색'], reading: '그믐 회', meaning: '그믐', strokes: 11 },
        { char: '效', examples: ['효과(效果)', '효험', '효력(效力)', '효', '보람'], reading: '본받을 효', meaning: '본받다', strokes: 10 },
        { char: '哮', examples: ['포효(咆哮)', '으르렁거리다', '효', '울부짖다', '효천(哮喘)'], reading: '으르렁거릴 효', meaning: '으르렁거리다', strokes: 10 },
        { char: '嚆', examples: ['효시(嚆矢)', '울다', '시초', '효', '소리'], reading: '울 효', meaning: '울다', strokes: 16 },
        { char: '肴', examples: ['주효(酒肴)', '안주', '가효(佳肴)', '효', '음식'], reading: '안주 효', meaning: '안주', strokes: 8 },
        { char: '侯', examples: ['제후(諸侯)', '후작', '왕후(王侯)', '후', '벼슬'], reading: '제후 후', meaning: '제후', strokes: 9 },
        { char: '逅', examples: ['해후(邂逅)', '만나다', '우연히', '후', '조우'], reading: '만날 후', meaning: '만나다', strokes: 10 },
        { char: '煦', examples: ['후', '따뜻하다', '은혜', '후', '사랑'], reading: '따뜻할 후', meaning: '따뜻하다', strokes: 13 },
        { char: '嗅', examples: ['후각(嗅覺)', '맡다', '냄새', '후신경(嗅神經)', '코'], reading: '맡을 후', meaning: '맡다(냄새)', strokes: 13 },
        { char: '吼', examples: ['포효(咆吼)', '울다', '사자후(獅子吼)', '후', '짖다'], reading: '울 후', meaning: '울다', strokes: 7 },
        { char: '薨', examples: ['훙서(薨逝)', '죽다', '왕후', '훙', '별세'], reading: '죽을 훙', meaning: '죽다', strokes: 17 },
        { char: '喧', examples: ['훤화(喧嘩)', '떠들썩하다', '시끄럽다', '훤', '소란'], reading: '떠들썩할 훤', meaning: '떠들썩하다', strokes: 12 },
        { char: '卉', examples: ['화훼(花卉)', '풀', '꽃', '훼', '식물'], reading: '풀 훼', meaning: '풀', strokes: 5 },
        { char: '毁', examples: ['훼손(毁損)', '헐다', '비방(誹毁)', '훼', '망가지다'], reading: '헐 훼', meaning: '헐다', strokes: 13 },
        { char: '彙', examples: ['어휘(語彙)', '무리', '모으다', '휘', '어휘력'], reading: '무리 휘', meaning: '무리', strokes: 13 },
        { char: '徽', examples: ['휘장(徽章)', '아름답다', '상징', '휘', '표시'], reading: '아름다울 휘', meaning: '아름답다', strokes: 17 },
        { char: '麾', examples: ['휘하(麾下)', '지휘(指揮)', '대장기', '휘', '부하'], reading: '대장기 휘', meaning: '대장기', strokes: 15 },
        { char: '諱', examples: ['기휘(忌諱)', '꺼리다', '숨기다', '휘', '이름'], reading: '꺼릴 휘', meaning: '꺼리다', strokes: 16 },
        { char: '恤', examples: ['구휼(救恤)', '불쌍하다', '돕다', '휼', '구제'], reading: '구휼할 휼', meaning: '구휼하다', strokes: 9 },
        { char: '鷸', examples: ['어부지리(漁夫之利)', '방휼지쟁(蚌鷸之爭)', '도요새', '휼', '새'], reading: '도요새 휼', meaning: '도요새', strokes: 17 },
        { char: '匈', examples: ['흉노(匈奴)', '오랑캐', '흉', '북방', '민족'], reading: '오랑캐 흉', meaning: '오랑캐', strokes: 6 },
        { char: '兇', examples: ['흉악(兇惡)', '흉하다', '흉기(兇器)', '흉', '사납다'], reading: '흉할 흉', meaning: '흉하다', strokes: 6 },
        { char: '洶', examples: ['흉흉(洶洶)', '물결', '흉', '뒤숭숭하다', '흐르다'], reading: '물결 흉', meaning: '물결', strokes: 9 },
        { char: '歆', examples: ['흠향(歆饗)', '흠모(歆慕)', '받다', '흠', '즐기다'], reading: '흠향할 흠', meaning: '흠향하다', strokes: 13 },
        { char: '洽', examples: ['흡족(洽足)', '넉넉하다', '흡', '화합', '젖다'], reading: '흡족할 흡', meaning: '흡족하다', strokes: 9 },
        { char: '恰', examples: ['흡사(恰似)', '마침', '꼭', '흡', '비슷하다'], reading: '마침 흡', meaning: '마침', strokes: 9 },
        { char: '禧', examples: ['희수(禧壽)', '복', '기쁘다', '희', '경사'], reading: '복 희', meaning: '복', strokes: 17 },
        { char: '嬉', examples: ['유희(嬉戱)', '즐기다', '놀다', '희', '장난'], reading: '즐길 희', meaning: '즐기다', strokes: 15 },
        { char: '噫', examples: ['희', '탄식하다', '아', '희', '슬프다'], reading: '탄식할 희', meaning: '탄식하다', strokes: 16 },
        { char: '犧', examples: ['희생(犧牲)', '제물', '희', '바치다', '희생타'], reading: '희생 희', meaning: '희생', strokes: 20 },
        { char: '詰', examples: ['힐문(詰問)', '꾸짖다', '묻다', '힐난(詰難)', '따지다'], reading: '물으실 힐', meaning: '물으시다', strokes: 13 }
    ]
};

// 한자 획순 매핑 (번체 → 간체) - HanziWriter는 주로 간체자 데이터 제공
// 모든 데이터베이스 한자에 대한 완전한 매핑 (195자)
const strokeOrderMapping = {
    // === 8급 (30자) ===
    '萬': '万', // 일만 만
    // 나머지 8급 한자는 간체/번체 동일

    // === 7급 (25자) ===
    '東': '东', // 동녘 동
    '靑': '青', // 푸를 청 (靑→青)
    '黃': '黄', // 누를 황
    '黑': '黑', // 검을 흑 (동일)
    '學': '学', // 배울 학
    '校': '校', // 학교 교 (동일)
    // 나머지 7급 한자는 간체/번체 동일

    // === 6급 (20자) ===
    '國': '国', // 나라 국
    '長': '长', // 긴 장
    '後': '后', // 뒤 후
    '內': '内', // 안 내
    '門': '门', // 문 문
    '開': '开', // 열 개
    '閉': '闭', // 닫을 폐
    '見': '见', // 볼 견
    '聞': '闻', // 들을 문
    '讀': '读', // 읽을 독
    '書': '书', // 글 서

    // === 5급 (20자) ===
    '敎': '教', // 가르칠 교
    '體': '体', // 몸 체
    '間': '间', // 사이 간
    '時': '时', // 때 시
    '異': '异', // 다를 이
    '舊': '旧', // 옛 구
    '強': '强', // 강할 강 (强→强, 일부 시스템에서 强 사용)
    '弱': '弱', // 약할 약 (동일)
    '重': '重', // 무거울 중 (동일하지만 일부 간체에서 다름)

    // === 4급 (20자) ===
    '愛': '爱', // 사랑 애
    '義': '义', // 옳을 의
    '動': '动', // 움직일 동
    '靜': '静', // 고요할 정
    '惡': '恶', // 악할 악
    '德': '德', // 덕 덕 (동일하나 간체 变형 존재)

    // === 3급 (20자) ===
    '禮': '礼', // 예도 례
    '權': '权', // 권세 권
    '敗': '败', // 패할 패
    '勝': '胜', // 이길 승
    '戰': '战', // 싸울 전
    '治': '治', // 다스릴 치 (동일)
    '政': '政', // 정사 정 (동일)
    '則': '则', // 법칙 칙 (추가됨)

    // === 준2급 (20자) ===
    '論': '论', // 논할 론
    '辯': '辩', // 말씀 변
    '證': '证', // 증거 증
    '實': '实', // 열매 실
    '虛': '虚', // 빌 허
    '眞': '真', // 참 진
    '假': '假', // 거짓 가 (동일)
    '價': '价', // 값 가
    '値': '值', // 값 치 (동일)
    '財': '财', // 재물 재
    '富': '富', // 부유할 부 (동일)
    '貧': '贫', // 가난할 빈
    '貴': '贵', // 귀할 귀
    '賤': '贱', // 천할 천
    '尊': '尊', // 높을 존 (동일)
    '謙': '谦', // 겸손할 겸
    '讓': '让', // 사양할 양

    // === 2급 (20자) ===
    '哀': '哀', // 슬플 애 (동일)
    '樂': '乐', // 즐거울 락
    '喜': '喜', // 기쁠 희 (동일)
    '怒': '怒', // 성낼 노 (동일)
    '憂': '忧', // 근심 우
    '懼': '惧', // 두려워할 구
    '慮': '虑', // 생각할 려
    '節': '节', // 마디 절
    '操': '操', // 절개 조 (동일)
    '廉': '廉', // 청렴할 염 (동일)
    '恥': '耻', // 부끄러울 치 (추가됨)
    '謝': '谢', // 사례할 사
    '恩': '恩', // 은혜 은 (동일)
    '報': '报', // 갚을 보
    '答': '答', // 대답 답 (동일)
    '問': '问', // 물을 문
    '疑': '疑', // 의심할 의 (동일)

    // === 1급 (20자) ===
    '鬱': '郁', // 우거질 울
    '憲': '宪', // 법 헌
    '薦': '荐', // 천거할 천
    '籍': '籍', // 책 적 (동일)
    '釋': '释', // 풀 석
    '譯': '译', // 번역할 역
    '辭': '辞', // 말씀 사
    '議': '议', // 의논할 의
    '談': '谈', // 말씀 담
    '諮': '咨', // 물을 자
    '詢': '询', // 물을 순
    '諸': '诸', // 모든 제
    '諭': '谕', // 깨우칠 유
    '識': '识', // 알 식
    '覺': '觉', // 깨달을 각
    '寤': '寤', // 깰 오 (동일)
    '寐': '寐', // 잘 매 (동일)
    '醉': '醉', // 취할 취 (동일)
    '醒': '醒'  // 깰 성 (동일)
};

// 전역 변수
let selectedCharacters = [];
let currentLevel = '';
let currentLayout = 'a4-2'; // 기본값

// 레이아웃 설정
const layoutSettings = {
    // A5 1자는 기존대로 (1페이지 1자)
    'a5-1': { limit: 1, charsPerPage: 1, rows: 8, cols: 8, className: 'layout-a5-1' },

    // A4 옵션들은 모두 '1장 2자(layout-a4-2)' 레이아웃을 사용하고, 
    // 선택 개수(limit)에 따라 자동으로 페이지가 늘어나도록 설정
    'a4-2': { limit: 2, charsPerPage: 2, rows: 5, cols: 10, className: 'layout-a4-2' },
    'a4-4': { limit: 4, charsPerPage: 2, rows: 5, cols: 10, className: 'layout-a4-2' }, // 2장
    'a4-6': { limit: 6, charsPerPage: 2, rows: 5, cols: 10, className: 'layout-a4-2' }, // 3장
    'a4-8': { limit: 8, charsPerPage: 2, rows: 5, cols: 10, className: 'layout-a4-2' }, // 4장
    'a4-10': { limit: 10, charsPerPage: 2, rows: 5, cols: 10, className: 'layout-a4-2' } // 5장
};

// DOM 요소
const levelSelect = document.getElementById('levelSelect');
const layoutSelect = document.getElementById('layoutSelect');
const characterSelectionGroup = document.getElementById('characterSelectionGroup');
const characterGrid = document.getElementById('characterGrid');
const generateBtn = document.getElementById('generateBtn');
const selectedCount = document.getElementById('selectedCount');
const editorView = document.getElementById('editorView');
const worksheetView = document.getElementById('worksheetView');
const worksheetContent = document.getElementById('worksheetContent');
const backBtn = document.getElementById('backBtn');
const printBtn = document.getElementById('printBtn');
const selectFirstRowBtn = document.getElementById('selectFirstRowBtn');
const resetSelectionBtn = document.getElementById('resetSelectionBtn');

// 이벤트 리스너
levelSelect.addEventListener('change', handleLevelChange);
if (layoutSelect) layoutSelect.addEventListener('change', handleLayoutChange);
generateBtn.addEventListener('click', generateWorksheet);
backBtn.addEventListener('click', showEditor);
printBtn.addEventListener('click', () => window.print());
if (selectFirstRowBtn) selectFirstRowBtn.addEventListener('click', selectFirstRow);
if (resetSelectionBtn) resetSelectionBtn.addEventListener('click', resetSelection);

// 급수 선택 처리
function handleLevelChange(e) {
    currentLevel = e.target.value;
    selectedCharacters = [];

    if (currentLevel) {
        displayCharacters(currentLevel);
        characterSelectionGroup.style.display = 'block';
        updateGenerateButton();
    } else {
        characterSelectionGroup.style.display = 'none';
        generateBtn.style.display = 'none';
    }
    updateSelectedCount();
}

// 레이아웃 변경 처리
function handleLayoutChange(e) {
    currentLayout = e.target.value;
    selectedCharacters = []; // 레이아웃 변경 시 선택 초기화

    if (currentLevel) {
        displayCharacters(currentLevel); // 그리드 갱신
    }
    updateSelectedCount();
    updateGenerateButton();
}

// 한자 표시
// 한자 표시 (10개씩 줄 단위)
function displayCharacters(level) {
    const characters = hanjaDatabase[level];
    characterGrid.innerHTML = '';

    const chunkSize = 10;
    for (let i = 0; i < characters.length; i += chunkSize) {
        const chunk = characters.slice(i, i + chunkSize);

        const rowDiv = document.createElement('div');
        rowDiv.className = 'grid-row';

        const selectBtn = document.createElement('button');
        selectBtn.className = 'row-select-btn';
        selectBtn.innerHTML = '▶';
        selectBtn.title = '이 줄 선택';

        const cellsDiv = document.createElement('div');
        cellsDiv.className = 'row-cells';

        chunk.forEach(hanja => {
            const card = document.createElement('div');
            card.className = 'character-card';
            // 이미 선택된 상태 반영
            if (selectedCharacters.some(c => c.char === hanja.char)) {
                card.classList.add('selected');
            }

            card.innerHTML = `
                <div class="character-main">${hanja.char}</div>
                <div class="character-info">${hanja.strokes}획</div>
            `;
            card.addEventListener('click', () => toggleCharacter(hanja, card));
            cellsDiv.appendChild(card);
        });

        selectBtn.onclick = () => selectRowCharacters(chunk, cellsDiv);

        rowDiv.appendChild(selectBtn);
        rowDiv.appendChild(cellsDiv);
        characterGrid.appendChild(rowDiv);
    }

    updateCardStates();
}

// 한자 선택/해제
function toggleCharacter(hanja, card) {
    const index = selectedCharacters.findIndex(c => c.char === hanja.char);
    const limit = layoutSettings[currentLayout].limit;

    if (index > -1) {
        // 선택 해제
        selectedCharacters.splice(index, 1);
        card.classList.remove('selected');
    } else {
        // 선택
        if (selectedCharacters.length < limit) {
            selectedCharacters.push(hanja);
            card.classList.add('selected');
        }
    }

    updateSelectedCount();
    updateCardStates();
    updateGenerateButton();
}

// 가로 1줄(첫번째 줄) 자동 선택
function selectFirstRow() {
    const cards = Array.from(characterGrid.children);
    if (cards.length === 0) return;

    // 첫 줄 찾기 (offsetTop 기준)
    const firstTop = cards[0].offsetTop;
    const firstRowCards = cards.filter(card => card.offsetTop === firstTop);

    // 선택 제한
    const limit = layoutSettings[currentLayout].limit;

    let changed = false;
    for (const card of firstRowCards) {
        if (selectedCharacters.length >= limit) break;
        if (card.classList.contains('selected') || card.classList.contains('disabled')) continue;

        const char = card.querySelector('.character-main').textContent;
        // 데이터 찾기
        const hanja = hanjaDatabase[currentLevel].find(h => h.char === char);

        if (hanja) {
            selectedCharacters.push(hanja);
            card.classList.add('selected');
            changed = true;
        }
    }

    if (changed) {
        updateSelectedCount();
        updateCardStates();
        updateGenerateButton();
    }
}

// 선택 초기화
function resetSelection() {
    selectedCharacters = [];
    updateSelectedCount();
    updateCardStates();
    updateGenerateButton();

    // UI 업데이트
    const cards = characterGrid.children;
    for (const card of cards) {
        card.classList.remove('selected', 'disabled');
    }
}

// 줄 선택 함수
function selectRowCharacters(chunk, cellsDiv) {
    const limit = layoutSettings[currentLayout].limit;
    const cards = Array.from(cellsDiv.children);
    let changed = false;

    // 해당 줄의 모든 한자가 선택되어 있는지 확인
    const allSelected = chunk.every((hanja, i) => {
        // 이미 선택되어 있거나, 선택 불가능한 상태(disabled)인지 확인
        // (단, 현재 선택된 것들은 disabled가 아님)
        return selectedCharacters.some(c => c.char === hanja.char);
    });

    if (allSelected) {
        // 모두 선택되어 있으면 해제
        chunk.forEach((hanja, i) => {
            const idx = selectedCharacters.findIndex(c => c.char === hanja.char);
            if (idx > -1) {
                selectedCharacters.splice(idx, 1);
                cards[i].classList.remove('selected');
                changed = true;
            }
        });
    } else {
        // 하나라도 선택 안 된게 있으면 선택 (limit 체크)
        chunk.forEach((hanja, i) => {
            if (selectedCharacters.length >= limit) return;

            const idx = selectedCharacters.findIndex(c => c.char === hanja.char);
            if (idx === -1) {
                selectedCharacters.push(hanja);
                cards[i].classList.add('selected');
                changed = true;
            }
        });
    }

    if (changed) {
        updateSelectedCount();
        updateCardStates();
        updateGenerateButton();
    }
}

// 탭 전환 및 기출문제 로직
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.dataset.tab;

        // 탭 버튼 활성화
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // 탭 콘텐츠 표시
        tabContents.forEach(c => {
            c.style.display = c.id === `${tabName}Tab` ? 'block' : 'none';
            c.classList.toggle('active', c.id === `${tabName}Tab`);
        });

        // 워크시트 뷰 숨기기 (에디터로 돌아오기)
        if (editorView) editorView.style.display = 'block';
        if (worksheetView) worksheetView.style.display = 'none';
        const ov = document.getElementById('onlineView');
        if (ov) ov.style.display = 'none';
    });
});

// 퀴즈 버튼 리스너
const generateQuizBtn = document.getElementById('generateQuizBtn');
const regenQuizBtn = document.getElementById('regenQuizBtn');
const showAnswerBtn = document.getElementById('showAnswerBtn');

if (generateQuizBtn) generateQuizBtn.addEventListener('click', generateQuiz);
if (regenQuizBtn) regenQuizBtn.addEventListener('click', generateQuiz);
if (showAnswerBtn) showAnswerBtn.addEventListener('click', toggleAnswerPage);

function toggleAnswerPage() {
    const answerPage = document.querySelector('.quiz-answer-page');
    if (answerPage) {
        const isVisible = answerPage.classList.contains('visible');
        if (isVisible) {
            answerPage.classList.remove('visible');
            showAnswerBtn.innerHTML = '👁️ 정답 보기';
        } else {
            answerPage.classList.add('visible');
            showAnswerBtn.innerHTML = '🚫 정답 가리기';
            // 정답 페이지로 스크롤
            answerPage.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        alert('생성된 정답 페이지가 없습니다.');
    }
}

function generateQuiz() {
    const level = document.getElementById('quizLevelSelect').value;
    const count = parseInt(document.getElementById('quizCount').value);
    const types = Array.from(document.querySelectorAll('input[name="quizType"]:checked')).map(cb => cb.value);

    if (!level) {
        alert('시험 급수를 선택해주세요.');
        return;
    }
    if (types.length === 0) {
        alert('최소 한 가지 이상의 문제 유형을 선택해주세요.');
        return;
    }

    const characters = hanjaDatabase[level];
    if (!characters || characters.length === 0) {
        alert('해당 급수의 데이터가 부족합니다.');
        return;
    }

    // 문제 데이터 생성
    const quizItems = [];
    const typeCount = Math.ceil(count / types.length);

    types.forEach(type => {
        for (let i = 0; i < typeCount; i++) {
            if (quizItems.length >= count) break;
            const randomHanja = characters[Math.floor(Math.random() * characters.length)];
            quizItems.push({ type, hanja: randomHanja });
        }
    });

    // 셔플
    quizItems.sort(() => Math.random() - 0.5);

    renderQuiz(level, quizItems);
}

function renderQuiz(level, quizItems) {
    editorView.style.display = 'none';
    worksheetView.style.display = 'block';
    worksheetContent.innerHTML = '';

    // 퀴즈 버튼 보이기
    if (regenQuizBtn) regenQuizBtn.style.display = 'flex';
    if (showAnswerBtn) {
        showAnswerBtn.style.display = 'flex';
        showAnswerBtn.innerHTML = '👁️ 정답 보기';
    }

    const itemsPerPage = 20; // 한 페이지 20문제
    for (let i = 0; i < quizItems.length; i += itemsPerPage) {
        const chunk = quizItems.slice(i, i + itemsPerPage);

        const page = document.createElement('div');
        page.className = 'quiz-page';

        page.innerHTML = `
            <div class="quiz-header">
                <div class="quiz-title">제 ${Math.floor(i / itemsPerPage) + 1}회 한자능력검정시험 대비 (${level})</div>
                <div class="quiz-info">성명: ______________ &nbsp;&nbsp; 점수: ______ / ${quizItems.length}</div>
            </div>
            <div class="quiz-section">
                <div class="quiz-instruction">※ 다음 문제의 정답을 쓰세요.</div>
                <div class="quiz-grid">
                    ${chunk.map((item, idx) => {
            const num = i + idx + 1;
            let questionHtml = '';
            if (item.type === 'reading') {
                questionHtml = `<div class="quiz-question">${item.hanja.char}</div><div class="quiz-answer-box"></div>`;
            } else if (item.type === 'meaning') {
                questionHtml = `<div class="quiz-question">${item.hanja.char}</div><div class="quiz-answer-box"></div>`;
            } else if (item.type === 'writing') {
                questionHtml = `<div class="quiz-question text-question">${item.hanja.meaning}</div><div class="quiz-answer-box" style="height: 50px;"></div>`;
            }

            return `
                            <div class="quiz-item">
                                <div class="quiz-num">${num}.</div>
                                ${questionHtml}
                            </div>
                        `;
        }).join('')}
                </div>
            </div>
        `;
        worksheetContent.appendChild(page);
    }

    // 정답 페이지 생성
    const answerPage = document.createElement('div');
    answerPage.className = 'quiz-answer-page';

    const answersHtml = quizItems.map((item, idx) => {
        const num = idx + 1;
        let val = '';
        if (item.type === 'reading') {
            const parts = item.hanja.reading.split(' ');
            val = parts.length > 1 ? parts[parts.length - 1] : item.hanja.reading;
        }
        else if (item.type === 'meaning') val = item.hanja.reading;
        else if (item.type === 'writing') val = item.hanja.char;

        return `<div class="answer-item"><span class="answer-num">${num}.</span><span class="answer-val">${val}</span></div>`;
    }).join('');

    answerPage.innerHTML = `
        <div class="quiz-header">
            <div class="quiz-title">정 답 지</div>
            <div class="quiz-info">${level} 모의고사 정답</div>
        </div>
        <div class="answer-grid">
            ${answersHtml}
        </div>
    `;
    worksheetContent.appendChild(answerPage);
}

// 선택 개수 업데이트
function updateSelectedCount() {
    const limit = layoutSettings[currentLayout].limit;
    selectedCount.textContent = `${selectedCharacters.length}/${limit} 선택됨`;
}

// 생성 버튼 상태
function updateGenerateButton() {
    if (selectedCharacters.length > 0) {
        generateBtn.style.display = 'flex';
    } else {
        generateBtn.style.display = 'none';
    }
}

// 카드 상태 업데이트
function updateCardStates() {
    const limit = layoutSettings[currentLayout].limit;
    const cards = characterGrid.querySelectorAll('.character-card');
    cards.forEach(card => {
        if (selectedCharacters.length >= limit && !card.classList.contains('selected')) {
            card.classList.add('disabled');
        } else {
            card.classList.remove('disabled');
        }
    });
}

// 학습지 생성 (수정: 페이지 분할 로직)
function generateWorksheet() {
    worksheetContent.innerHTML = '';
    // 퀴즈 전용 버튼 숨기기
    const regenBtn = document.getElementById('regenQuizBtn');
    const answerBtn = document.getElementById('showAnswerBtn');
    if (regenBtn) regenBtn.style.display = 'none';
    if (answerBtn) answerBtn.style.display = 'none';
    const setting = layoutSettings[currentLayout];
    const itemsPerPage = setting.charsPerPage;

    // 선택된 한자들을 페이지 단위로 나누어 생성
    for (let i = 0; i < selectedCharacters.length; i += itemsPerPage) {
        const chunk = selectedCharacters.slice(i, i + itemsPerPage);

        const page = document.createElement('div');
        page.className = `worksheet-page ${setting.className}`;

        chunk.forEach(hanja => {
            const section = createCharacterSection(hanja, setting);
            page.appendChild(section);
        });

        worksheetContent.appendChild(page);
    }

    showWorksheet();

    // 획순 렌더링
    setTimeout(() => {
        selectedCharacters.forEach(hanja => {
            renderStrokeOrder(hanja.char, `stroke-order-${hanja.char}`);
        });
    }, 100);
}

// 한자 섹션 생성
function createCharacterSection(hanja, setting) {
    const section = document.createElement('div');
    section.className = 'character-section';

    // 용례 HTML 생성
    const examplesHtml = hanja.examples ?
        `<div class="character-examples"><span class="example-label">용례:</span>${hanja.examples.join(', ')}</div>` : '';

    section.innerHTML = `
        <div class="character-header">
            <div class="header-main-row">
                <div class="character-display">${hanja.char}</div>
                <div class="character-details">
                    <div class="character-reading">${hanja.reading}</div>
                    <div class="character-meaning">${hanja.meaning}</div>
                    <div class="character-strokes">${hanja.strokes}획</div>
                </div>
            </div>
            ${examplesHtml}
        </div>
        <div class="stroke-order-section">
            <div class="stroke-order-grid" id="stroke-order-${hanja.char}">
            </div>
        </div>
        <div class="practice-grid" style="grid-template-columns: repeat(${setting.cols}, 1fr);">
            ${createPracticeGrid(hanja.char, setting.rows, setting.cols)}
        </div>
    `;

    return section;
}

// 획순 렌더링 (한 획씩 누적)
function renderStrokeOrder(char, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // 먼저 정자(번체자) 그대로 시도
    HanziWriter.loadCharacterData(char).then(function (charData) {
        // 정자 데이터 있음 - 정자로 획순 표시
        const strokeCount = charData.strokes.length;
        for (let i = 1; i <= strokeCount; i++) {
            (function (stepNum, character) {
                createStrokeStep(character, stepNum, container, containerId);
            })(i, char);
        }
    }).catch(function () {
        // 정자 데이터 없음 - 간체자로 폴백
        const mappedChar = strokeOrderMapping[char];
        if (mappedChar && mappedChar !== char) {
            HanziWriter.loadCharacterData(mappedChar).then(function (charData) {
                const strokeCount = charData.strokes.length;
                for (let i = 1; i <= strokeCount; i++) {
                    (function (stepNum, character) {
                        createStrokeStep(character, stepNum, container, containerId);
                    })(i, mappedChar);
                }
            }).catch(function (error) {
                console.warn(`획순 데이터 없음: ${char}`, error);
                container.innerHTML = `<div style="padding: 1rem; color: #6B7280; font-size: 0.9rem;">이 한자의 획순 데이터를 사용할 수 없습니다.</div>`;
            });
        } else {
            container.innerHTML = `<div style="padding: 1rem; color: #6B7280; font-size: 0.9rem;">이 한자의 획순 데이터를 사용할 수 없습니다.</div>`;
        }
    });
}

// 개별 획순 단계 생성
function createStrokeStep(char, stepNumber, container, containerId) {
    const stepDiv = document.createElement('div');
    stepDiv.className = 'stroke-step';
    stepDiv.id = `${containerId}-step-${stepNumber}`;

    container.appendChild(stepDiv);

    // 로컬 변수로 캡처
    const targetChar = char;
    const targetStep = stepNumber;

    // 해당 단계까지의 획 표시
    const writer = HanziWriter.create(stepDiv, targetChar, {
        width: 35,
        height: 35,
        padding: 2,
        showOutline: false,
        strokeColor: '#000000',
        radicalColor: '#000000',
        drawingWidth: 2.5,
        showCharacter: false,
        onLoadCharDataSuccess: function () {
            // 데이터 로드 완료 후 획 그리기
            let currentStroke = 0;
            const drawNext = () => {
                if (currentStroke < targetStep) {
                    writer.animateStroke(currentStroke, {
                        duration: 1,
                        onComplete: () => {
                            currentStroke++;
                            drawNext();
                        }
                    });
                }
            };
            drawNext();
        }
    });
}

// 연습 그리드 생성
function createPracticeGrid(char, rows, cols) {
    let grid = '';
    const totalCells = rows * cols;
    // 가이드는 첫 20% 정도만? 아니면 고정 1~2줄.
    const guideCount = Math.min(cols * 2, totalCells);

    for (let i = 0; i < totalCells; i++) {
        let cellClass = 'practice-cell';
        let content = '';

        if (i < guideCount) {
            cellClass += ' guide';
            content = char;
        }

        grid += `<div class="${cellClass}">${content}</div>`;
    }
    return grid;
}

// 뷰 전환
function showWorksheet() {
    editorView.style.display = 'none';
    worksheetView.style.display = 'block';
}

function showEditor() {
    editorView.style.display = 'block';
    worksheetView.style.display = 'none';
    const ov = document.getElementById('onlineView');
    if (ov) ov.style.display = 'none';
}

/* 온라인 학습 로직 */

// DOM Elements & Variables
const startOnlineBtn = document.getElementById('startOnlineBtn');
const exitOnlineBtn = document.getElementById('exitOnlineBtn');
const submitOnlineBtn = document.getElementById('submitOnlineBtn');
const retryWrongBtn = document.getElementById('retryWrongBtn');
const onlineMainView = document.getElementById('onlineView');
const onlineContent = document.getElementById('onlineContent');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const scoreDisplay = document.getElementById('scoreDisplay');
const onlineTitle = document.getElementById('onlineTitle');

let currentOnlineData = [];

// Event Listeners
if (startOnlineBtn) startOnlineBtn.addEventListener('click', startOnlineLearning);
if (exitOnlineBtn) exitOnlineBtn.addEventListener('click', exitOnlineLearning);
if (submitOnlineBtn) submitOnlineBtn.addEventListener('click', submitOnlineQuiz);
if (retryWrongBtn) retryWrongBtn.addEventListener('click', retryWrongAnswers);

// Helper: 셔플 함수
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 퀴즈 시작
function startOnlineLearning() {
    const level = document.getElementById('onlineLevelSelect').value;
    const count = parseInt(document.getElementById('onlineCount').value);

    // 선택된 유형 가져오기
    const selectedTypes = Array.from(document.querySelectorAll('input[name="onlineType"]:checked')).map(cb => cb.value);

    // 유효성 검사
    if (!level) { alert('학습할 급수를 선택해주세요.'); return; }
    if (selectedTypes.length === 0) { alert('최소 한 가지 이상의 문제 유형을 선택해주세요.'); return; }

    const characters = hanjaDatabase[level];
    if (!characters || characters.length === 0) { alert('해당 급수의 데이터가 없습니다.'); return; }

    generateQuizData(level, characters, count, selectedTypes);

    // 뷰 전환 및 초기화
    editorView.style.display = 'none';
    if (worksheetView) worksheetView.style.display = 'none';
    if (onlineMainView) onlineMainView.style.display = 'flex';

    onlineTitle.textContent = `${level} 온라인 학습`;
    scoreDisplay.style.display = 'none';
    submitOnlineBtn.style.display = 'block';
    retryWrongBtn.style.display = 'none';

    renderOnlineQuiz(currentOnlineData);
}

function generateQuizData(level, characters, count, types) {
    currentOnlineData = [];

    // 전체 단어 풀 생성 (단어 문제용)
    let wordPool = [];
    if (types.includes('word_reading') || types.includes('word_hanja')) {
        characters.forEach(c => {
            if (c.examples) {
                c.examples.forEach(ex => {
                    // "天地(전지)" 형식 파싱
                    const match = ex.match(/^([^(]+)\(([^)]+)\)$/);
                    if (match) {
                        wordPool.push({ hanja: match[1], reading: match[2] });
                    }
                });
            }
        });
    }

    // 낱자 풀 생성 (오답용)
    const charPool = characters.map(c => ({ char: c.char, reading: c.reading, meaning: c.meaning || c.reading }));

    for (let i = 0; i < count; i++) {
        const type = types[Math.floor(Math.random() * types.length)];
        let questionItem = null;
        let options = [];

        // 문제 생성
        if (type.startsWith('single_')) {
            const hanja = characters[Math.floor(Math.random() * characters.length)];
            const correct = type === 'single_reading' ? hanja.reading.split(' ').pop() // 음만
                : (type === 'single_meaning' ? hanja.reading : hanja.char);

            // 오답 생성 (4개)
            let distractors = [];
            while (distractors.length < 4) {
                const d = charPool[Math.floor(Math.random() * charPool.length)];
                let dVal = type === 'single_reading' ? d.reading.split(' ').pop()
                    : (type === 'single_meaning' ? d.reading : d.char);

                if (dVal !== correct && !distractors.includes(dVal)) {
                    distractors.push(dVal);
                }
            }
            options = shuffleArray([correct, ...distractors]);

            questionItem = {
                id: i,
                type: type,
                question: type === 'single_hanja' ? hanja.reading : hanja.char, // 질문 표시용
                correctAnswer: correct,
                options: options,
                userAnswer: null,
                isCorrect: false,
                rawHanja: hanja
            };

        } else if (type.startsWith('word_')) {
            if (wordPool.length < 5) { i--; continue; } // 단어 부족 시 재시도

            const wordObj = wordPool[Math.floor(Math.random() * wordPool.length)];
            const correct = type === 'word_reading' ? wordObj.reading : wordObj.hanja;

            // 오답 생성
            let distractors = [];
            let attempts = 0;
            while (distractors.length < 4 && attempts < 50) {
                attempts++;
                const d = wordPool[Math.floor(Math.random() * wordPool.length)];
                let dVal = type === 'word_reading' ? d.reading : d.hanja;

                if (dVal !== correct && !distractors.includes(dVal)) {
                    distractors.push(dVal);
                }
            }

            options = shuffleArray([correct, ...distractors]);

            questionItem = {
                id: i,
                type: type,
                question: type === 'word_reading' ? wordObj.hanja : wordObj.reading,
                correctAnswer: correct,
                options: options,
                userAnswer: null,
                isCorrect: false
            };
        }

        if (questionItem) currentOnlineData.push(questionItem);
    }
}

function renderOnlineQuiz(quizData) {
    if (!onlineContent) return;
    onlineContent.innerHTML = '';
    updateProgress(0, quizData.length);

    quizData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'online-question-card';
        card.dataset.id = item.id;

        let typeLabel = '';
        let displayClass = 'question-display';

        switch (item.type) {
            case 'single_reading': typeLabel = '다음 한자의 독음은?'; break;
            case 'single_meaning': typeLabel = '다음 한자의 훈음(뜻과 음)은?'; break;
            case 'single_hanja': typeLabel = '다음 훈음에 해당하는 한자는?'; displayClass += ' text-question'; break;
            case 'word_reading': typeLabel = '다음 단어의 독음은?'; break;
            case 'word_hanja': typeLabel = '다음 독음에 해당하는 한자 단어는?'; displayClass += ' text-question'; break;
        }

        const optionsHtml = item.options.map((opt, optIdx) => `
            <label class="quiz-option" onclick="selectOption(${item.id}, '${opt}', this)">
                <input type="radio" name="q_${item.id}" value="${opt}">
                <span>${opt}</span>
            </label>
        `).join('');

        card.innerHTML = `
            <div class="question-header">
                <span>문제 ${index + 1}</span>
                <span>${typeLabel}</span>
            </div>
            <div class="question-body">
                <div class="${displayClass}">${item.question}</div>
                <div class="quiz-options">
                    ${optionsHtml}
                </div>
                <div class="feedback-msg" id="feedback-${item.id}"></div>
            </div>
        `;
        onlineContent.appendChild(card);
    });
}

// 옵션 선택 핸들러 (전역)
window.selectOption = function (id, val, labelEl) {
    // UI 업데이트
    const card = document.querySelector(`.online-question-card[data-id="${id}"]`);
    if (!card) return;

    // 기존 선택 제거
    card.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('selected'));
    // 현재 선택 추가
    labelEl.classList.add('selected');
    // 라디오 체크
    const radio = labelEl.querySelector('input[type="radio"]');
    if (radio) radio.checked = true;

    // 데이터 업데이트
    const item = currentOnlineData.find(d => d.id === id);
    if (item) {
        item.userAnswer = val;
        // 진행률
        const answeredCount = currentOnlineData.filter(d => d.userAnswer).length;
        updateProgress(answeredCount, currentOnlineData.length);
    }
}

function updateProgress(current, total) {
    if (!progressText || !progressBar) return;
    progressText.textContent = `${current}/${total}`;
    const percent = total > 0 ? (current / total) * 100 : 0;
    progressBar.style.width = `${percent}%`;
}

function submitOnlineQuiz() {
    if (!confirm('정말 제출하시겠습니까? (풀지 않은 문제는 오답 처리됩니다)')) return;

    let correctCount = 0;

    currentOnlineData.forEach(item => {
        // 정답 체크
        item.isCorrect = (item.userAnswer === item.correctAnswer);
        if (item.isCorrect) correctCount++;

        // UI 반영
        const card = document.querySelector(`.online-question-card[data-id="${item.id}"]`);
        if (card) {
            const feedback = card.querySelector(`#feedback-${item.id}`);
            const options = card.querySelectorAll('.quiz-option');

            // 모든 옵션 비활성화 및 정답 표시
            options.forEach(opt => {
                const input = opt.querySelector('input');
                input.disabled = true;
                opt.style.pointerEvents = 'none'; // 클릭 방지

                const val = input.value;
                if (val === item.correctAnswer) {
                    opt.classList.add('correct');
                    opt.innerHTML += '<span class="result-icon">⭕</span>';
                } else if (val === item.userAnswer && !item.isCorrect) {
                    opt.classList.add('wrong');
                    opt.innerHTML += '<span class="result-icon">❌</span>';
                }
            });

            if (item.isCorrect) {
                // 정답 메시지 생략 (옵션에 표시됨)
            } else {
                feedback.innerHTML = `<span style="color:#ef4444; font-weight:bold;">정답: ${item.correctAnswer}</span>`;
            }
        }
    });

    // 점수 표시
    const score = Math.round((correctCount / currentOnlineData.length) * 100);
    if (scoreDisplay) {
        scoreDisplay.textContent = `${score}점`;
        scoreDisplay.style.display = 'block';
    }

    submitOnlineBtn.style.display = 'none';

    // 오답 있으면 재시도 버튼
    const wrongExists = currentOnlineData.some(d => !d.isCorrect);
    if (wrongExists) {
        retryWrongBtn.style.display = 'block';
    }

    if (onlineMainView) onlineMainView.scrollTop = 0;
}

function retryWrongAnswers() {
    const wrongData = currentOnlineData.filter(item => !item.isCorrect);

    // 데이터 리셋
    wrongData.forEach(item => {
        item.userAnswer = null;
        item.isCorrect = false;
        // 옵션 셔플은 유지 (사용자가 답을 외워서 맞추는 것도 학습의 일종이므로)
    });

    currentOnlineData = wrongData;

    scoreDisplay.style.display = 'none';
    submitOnlineBtn.style.display = 'block';
    retryWrongBtn.style.display = 'none';

    renderOnlineQuiz(currentOnlineData);
    if (onlineTitle) onlineTitle.textContent += " (오답 학습)";
}

function exitOnlineLearning() {
    if (confirm('학습을 종료하고 나가시겠습니까?')) {
        if (onlineMainView) onlineMainView.style.display = 'none';
        if (editorView) editorView.style.display = 'block';
    }
}


// ==========================================
// 직접 입력 탭 기능 추가
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // 탭 버튼 이벤트 리스너 (기존 로직과 별도로 추가하여 확실하게 동작시킴)
    const directTabBtn = document.querySelector('[data-tab="directInput"]');
    if (directTabBtn) {
        directTabBtn.addEventListener('click', function() {
            // 모든 탭 버튼 비활성화
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            // 현재 버튼 활성화
            this.classList.add('active');

            // 모든 탭 콘텐츠 숨김
            document.querySelectorAll('.tab-content').forEach(content => {
                content.style.display = 'none';
                content.classList.remove('active');
            });

            // 직접 입력 탭 표시
            const directTab = document.getElementById('directInputTab');
            if (directTab) {
                directTab.style.display = 'block';
                directTab.classList.add('active');
            }
        });
    }

    // 직접 입력 생성 버튼 이벤트
    const generateDirectBtn = document.getElementById('generateDirectBtn');
    if (generateDirectBtn) {
        generateDirectBtn.addEventListener('click', handleDirectGeneration);
    }
});

function handleDirectGeneration() {
    const input = document.getElementById('hanjaInput').value;
    if (!input || input.trim().length === 0) {
        alert('한자를 입력해주세요.');
        return;
    }

    // 입력된 텍스트에서 한자만 추출 (정규식 사용)
    // CJK 통합 한자 범위 등 포함
    const hanjaRegex = /[\u4e00-\u9fff\u3400-\u4dbf\u20000-\u2a6df\u2a700-\u2b73f\u2b740-\u2b81f\u2b820-\u2ceaf\uf900-\ufaff\u2f800-\u2fa1f]/g;
    const foundChars = input.match(hanjaRegex);

    if (!foundChars || foundChars.length === 0) {
        alert('입력된 내용에서 유효한 한자를 찾을 수 없습니다.');
        return;
    }

    // 중복 제거 (선택적 - 여기서는 중복 제거하여 학습 효율 높임)
    const uniqueChars = [...new Set(foundChars)];

    // 전역 변수 selectedCharacters 초기화
    selectedCharacters = [];

    // DB에서 한자 정보 검색
    uniqueChars.forEach(char => {
        let charData = null;

        // 모든 급수의 데이터를 순회하며 검색
        for (const level in hanjaDatabase) {
            const found = hanjaDatabase[level].find(c => c.char === char);
            if (found) {
                charData = found;
                break;
            }
        }

        if (charData) {
            selectedCharacters.push(charData);
        } else {
            // DB에 없는 한자는 기본 정보로 생성
            selectedCharacters.push({
                char: char,
                reading: ' ',  // 정보 없음
                meaning: ' ', // 정보 없음
                strokes: '?',
                examples: []
            });
        }
    });

    if (selectedCharacters.length === 0) {
        alert('학습지를 생성할 한자가 없습니다.');
        return;
    }

    // 레이아웃 설정 업데이트
    const layoutSelect = document.getElementById('directLayoutSelect');
    if (layoutSelect) {
        currentLayout = layoutSelect.value;
    }

    // 화면 전환
    const editorView = document.getElementById('editorView');
    const worksheetView = document.getElementById('worksheetView');
    
    if (editorView) editorView.style.display = 'none';
    if (worksheetView) worksheetView.style.display = 'block';

    // 학습지 생성 함수 호출
    generateWorksheet();
}

