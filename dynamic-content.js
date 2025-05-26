// JavaScript to dynamically change content
function showContent(section) {

    event.preventDefault();
    const contentMap = {
        'welcome': `<h4 style= "color:#4f86c1;" id="about-title2">A leading company in the domestic and global markets</h4>
                    <p id="about-text">YoungKorea Co., Ltd. is a specialized company dedicated to the independent research, development, and manufacturing of advanced in-vehicle technologies, including TVs, monitors, cameras, black boxes, and navigation systems. Founded with a commitment to advancing automotive innovation, our expert R&D team—comprising professionals with over 20 years of experience—ensures the highest standards of performance and quality across every stage of production. Recognized both domestically and internationally, YoungKorea has earned the trust of buyers and consumers through its excellence in automotive AV and security solutions. </p>
                    <img src="images/papers.png" style="width:75%; height: auto;">

                    <h4 style= "color:#4f86c1;" id="about-text2">Participation in electronics exhibition/conferences held worldwide </h4>
                    <div style="display:flex;">
                    <img src="images/exhibition(1).png" style="width:33%;  height:auto;">
                    <img src="images/exhibition(2).png" style="width:33%;  height:auto;">
                    <img src="images/exhibition(3).png" style="width:33%;  height:auto;">
                    </div>
                    <h4 style= "color:#4f86c1;"" id="about-text3">production process</h4>
                    <img src="images/process.png" style="width:85%; height: auto;">
                    `,

                    
        'history': `<h3 style= "color:#4f86c1;">1996.8</h3>
                    <p> YOUNG ACOUSTIC(영음향)설립/ 국내 차량용 TV안테나 개발 판매</p>
                    <br>
                    <h3 style= "color:#4f86c1;">1997</h3>
                    <p>일본 수출용 TV 안테나 개발 생산 수출</p>
                    <br>
                    <h3 style= "color:#4f86c1;">1998</h3>
                    <p> 생산 LINE 이전 확장/ DIVERSITY ANT 개발, LCD PANEL 수입, 판매 사업부 신설</p>
                    <br>
                    <h3 style= "color:#4f86c1;">1999</h3>
                    <p> 차량용 LCD TV/MONITOR 개발부 신설/5인치 TFT LCD TV/MONITOR 개발후 일본 및 미국 OEM 생산 후 판매</p>
                    <br>
                    <h3 style= "color:#4f86c1;">2000</h3>
                    <p> 5.6인치 및 5.8인치 TFT LCD TV/ MONITOR 개발 후 일본 및 미국 OEM 생산 후 수출</p>
                    <br>
                    <h3 style= "color:#4f86c1;">2001</h3>
                    <p> 국내 최초 4인치 ROOMMIRROR 형 모니터 개발 후 일본, 미국 및 국내 내수 시장 판매</p>
                    <br>
                    <h3 style= "color:#4f86c1;">2002</h3>
                    <p> 영코리아(주) 법인 전환/ 미국 수출시장 확대/ 7인치 TV 및 MONITOR 개발 후 판매</p>
                    <br>
                    <h3 style= "color:#4f86c1;">2003</h3>
                    <p> -국내최초 5인치 ROOMMIRROR형 모니터 개발 후 일본 및 미국 판매</p>
                    <p> -일본 수출 시장 확대 (바이어 : KDM, YAC ETC.)</p>
                    <br>
                    <h3 style= "color:#4f86c1;">2004</h3>
                    <p> -공장 부지 확장 이전(경기도 시흥시 은행동, 대지 455m²)</p>
                    <p> -국내 최초 5.8인치 ROOMMIROR형 모니터 개발 후 일본 및 미국 판매</p>
                    <br>
                    <h3 style= "color:#4f86c1;">2005</h3>
                    <p> -10.2인치 천장형 TV/MONITOR 개발 후 일본 및 미국 판매</p>
                    <p> -일본 수출 시장 확대(바이어 : REBIRTH, COMTEK, CHUHATSU HANBAI ETC)</p>
                    <br>
                    <h3 style= "color:#4f86c1;">2006</h3>
                    <p> -10.2인치 SCREEN 3분할/4분할 MONITOR 개발 후 수출/ 미국 수출 시장 확대(바이어 : SAVV)</p>
                    <p> -국내 최초 6.2인치 ROOMMIRROR 개발 후 일본수출</p>
                    <br>
                    <h3 style= "color:#4f86c1;">2007</h3>
                    <p> -일본 연간 60억 공급 계약/ 일본 신규 바이어 OEM체결</p>
                    <p> -DIGITAL TV(1-SEG)수신기/분리형 1-SCREEN 4분할 CONTROL BOX/7인치 ROOMMIRROR형 모니터 개발 수출</P
                    <p> -일본 수출형 1-SEG DIGITAL FILM ANT 개발 후 수출/일본 신규 바이어 OEM 계약 체결(NIIGATA 社)</p>
                    <p> -국제품질 인증 ISO-9001 획득</p>
                    <br>
                    <h3 style= "color:#4f86c1;">2008</h3>
                    <p> -일본 대형 유통매장 7인치 NAVIGATION & 1-SEG 공급계약</p>
                    <p> -상품광고용 POP 개발 내수/수출 판매확대(12인치/7인치)</p>
                    <p> -일본차량 용품 최대유통업체(AUTO BOX)에 7“ 모니터 공급계약</p>
                    <p> -중국 내 부품공급 및 SKD 조립업체 기술 제휴</p>
                    <p> -국내 JS LCD CO., LTD. 회사와 차량형 대형 모니터 공급계약</p>
                    <p> -내수시장 확대를 목표로 차량용 샤크 안테나 4종 생산 공급 및 대형모니터 생산공급 국내 차량용DMB 수신기 2종 개발 공급</p>
                    <p> -일본 대형 유통매장 7인치 NAVIGATION & 1-SEG 공급계약</p> 
                    <p> -남미(브라질/멕시코) 1-SEG & 대형모니터 수출개시</p>
                    <p> -일본향 7“ 네비게이션 4.3”네비게이션 신규 개발후 수출개시</p>
                    <br>
                    <h3 style= "color:#4f86c1;">2009</h3>
                    <p> -4.3인치 일본 네비게이션 개발 및 판매</p>
                    <p> -7인치 일본 네비게이션 개발 및 판매</p>
                    <br>
                    <h3 style= "color:#4f86c1;">2010</h3>
                    <p> -8인치 1SEG 네비게이션 개발 판매</p>
                    <p> -7인치 8인치 9인치 10.2인치 디지털 모니터 개발 판매</p>
                    <br>
                    <h3 style= "color:#4f86c1;">2011</h3>
                    <p> -모바일용 고화질 HD급 디지털방송 SET UP BOX(2D/4D) 개발 판매 </p>
                    <p> -모바일용 고화질 HD급 디지털 TV 7인치 8인치 9인치 개발 판매 </p>
                    <p> -모바일용 고화질 TV 7인치 8인치 & 네비게이션 개발 판매 </p>
                    <p> -국내 가정용 디지털 TV 개발 판매 </p>
                    <br>
                    <h3 style= "color:#4f86c1;">2012</h3>
                    <p> -모바일용 고화질 (HD급) 모니터 7인치 8인치 9인치 개발 판매</p>
                    <p> -인공지능 블랙 박스 & 네비게이션 개발 완료 </p>
                    <p> -스마트폰 연동 모니터 & 네비게이션 개발 완료 </p>
                    <br>
                    <h3 style= "color:#4f86c1;">2013</h3>
                    <p> 모바일용 고화질(HD급) 네비게이션 개발(7인치, 8인치)</p>
                    <br>
                    <h3 style= "color:#4f86c1;">2014</h3>
                    <p> 일본 렌터카용 블랙박스 개발</p>
                    <br>
                    <h3 style= "color:#4f86c1;">2015</h3>
                    <p> 9인치 트럭 전용 네비게이션 개발</p>
                    <br>
                    <h3 style= "color:#4f86c1;">2016</h3>
                    <p> -초음파 후발 센서 주차 보조 시스템/ 광시야각(V:120°/H:160°)차량용 후방카메라/무선 광시야각 송수신기 /HD-DMR 수신기 개발 생산 수출</p>
                    <p> -광시야각(V:120°/H:160°)차량용 후방카메라 개발 </p>
                    <p> -무선 광시야각 송수신기 개발(일본 수출 중)</p>
                    <p> -HD-DMR 수신기 개발 </p>
                    <br>
                    <h3 style= "color:#4f86c1;">2017</h3>
                    <p> HDMI/AHD 모니터, AHD 카메라 개발 생산 수출</p>
                    <br><h3 style= "color:#4f86c1;">2020</h3>
                    <p> -신사옥 확장 건축 이전 완료 (생산 라인 확대)</p>
                    <p> -고화질 블랙박스/ 10.1인치 IPS 4분할 모니터 및 멀티미디어 모니터 개발 생산</p>
                    <br><h3 style= "color:#4f86c1;">2021</h3>
                    <p> -고화질 (HD급) 무선 모니터&카메라 시스템 개발 생산 수출</p>
                    <p> -디지털 초음파 운전 보조 시스템 개발 생산 수출</p>
                    <p> -메탈 HD 방수모니터 (IP69K)개발 생산</p>
                    <br>

                    `,

        'our-field': `<img src="images/field.png" style="width:100%; height: auto;">
                    <img src="images/field(1).png" style="width:100%; height: auto;">`
                };
    
    // Update active navigation link
    document.querySelectorAll('#about-nav a').forEach(link => link.classList.remove('active'));
    document.getElementById(`nav-${section}`).classList.add('active');

    // Update dynamic content
    document.getElementById('dynamic-content').innerHTML = contentMap[section];
    
}