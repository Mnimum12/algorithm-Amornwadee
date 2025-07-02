// ข้อมูลเกม
const gameData = {
    food: [
        {
            title: "การทำไข่เจียว",
            emoji: "🍳",
            steps: [
                { emoji: "🥚", text: "1. ตอกไข่ใส่ชาม" },
                { emoji: "🥄", text: "2. ตีไข่ให้เข้ากัน" },
                { emoji: "🔥", text: "3. ตั้งกระทะใส่น้ำมัน" },
                { emoji: "🍳", text: "4. เทไข่ลงกระทะ" }
            ],
            correctOrders: [[0, 1, 2, 3]]
        },
        {
            title: "การทำข้าวผัด",
            emoji: "🍛",
            steps: [
                { emoji: "🍚", text: "1. เตรียมข้าวสวย" },
                { emoji: "🥕", text: "2. หั่นผักและเนื้อสัตว์" },
                { emoji: "🔥", text: "3. ตั้งกระทะใส่น้ำมัน" },
                { emoji: "🍳", text: "4. ผัดส่วนผสมทั้งหมด" }
            ],
            correctOrders: [[0, 1, 2, 3], [1, 0, 2, 3], [0, 2, 1, 3]]
        },
        {
            title: "การต้มมาม่า",
            emoji: "🍜",
            steps: [
                { emoji: "💧", text: "1. ใส่น้ำในหม้อ" },
                { emoji: "🔥", text: "2. เปิดไฟต้มน้ำ" },
                { emoji: "🍝", text: "3. ใส่บะหมี่ลงไป" },
                { emoji: "🧂", text: "4. ใส่เครื่องปรุงรส" }
            ],
            correctOrders: [[0, 1, 2, 3], [0, 1, 3, 2]]
        },
        {
            title: "การทำแซนด์วิช",
            emoji: "🥪",
            steps: [
                { emoji: "🍞", text: "1. เตรียมขนมปัง" },
                { emoji: "🧈", text: "2. ทาเนยหรือซอส" },
                { emoji: "🥬", text: "3. ใส่ผักและแฮม" },
                { emoji: "🔪", text: "4. ตัดครึ่งและเสิร์ฟ" }
            ],
            correctOrders: [[0, 1, 2, 3], [0, 2, 1, 3], [0, 3, 1, 2]]
        },
        {
            title: "การทำข้าวต้ม",
            emoji: "🍚",
            steps: [
                { emoji: "🍚", text: "1. เตรียมข้าวสวย" },
                { emoji: "💧", text: "2. ใส่น้ำในหม้อ" },
                { emoji: "🔥", text: "3. ตั้งไฟต้มข้าว" },
                { emoji: "🥄", text: "4. คนข้าวเป็นครั้งคราว" }
            ],
            correctOrders: [[0, 1, 2, 3], [1, 0, 2, 3]]
        },
        {
            title: "การทำสลัดผัก",
            emoji: "🥗",
            steps: [
                { emoji: "🥬", text: "1. ล้างผักให้สะอาด" },
                { emoji: "🔪", text: "2. หั่นผักเป็นชิ้นเล็ก" },
                { emoji: "🧂", text: "3. เตรียมน้ำสลัด" },
                { emoji: "🥄", text: "4. ผสมผักกับน้ำสลัด" }
            ],
            correctOrders: [[0, 1, 2, 3], [0, 2, 1, 3], [0, 1, 3, 2]]
        },
        {
            title: "การทำกาแฟ",
            emoji: "☕",
            steps: [
                { emoji: "💧", text: "1. ต้มน้ำให้เดือด" },
                { emoji: "☕", text: "2. ใส่กาแฟลงถ้วย" },
                { emoji: "🔥", text: "3. เทน้ำร้อนลงถ้วย" },
                { emoji: "🥄", text: "4. คนให้เข้ากัน" }
            ],
            correctOrders: [[0, 1, 2, 3], [1, 0, 2, 3], [0, 1, 3, 2]]
        },
        {
            title: "การทำข้าวโพดต้ม",
            emoji: "🌽",
            steps: [
                { emoji: "🌽", text: "1. เตรียมข้าวโพด" },
                { emoji: "💧", text: "2. ใส่น้ำในหม้อ" },
                { emoji: "🔥", text: "3. ต้มข้าวโพด 15 นาที" },
                { emoji: "🧂", text: "4. ใส่เกลือเล็กน้อย" }
            ],
            correctOrders: [[0, 1, 2, 3], [1, 0, 2, 3], [0, 1, 3, 2], [1, 0, 3, 2]]
        },
        {
            title: "การทำชาไทย",
            emoji: "🥤",
            steps: [
                { emoji: "💧", text: "1. ต้มน้ำให้เดือด" },
                { emoji: "🍃", text: "2. ชงชาไทยให้เข้ม" },
                { emoji: "🥛", text: "3. เติมนมข้นหวาน" },
                { emoji: "🧊", text: "4. ใส่น้ำแข็งในแก้ว" },
                { emoji: "🥤", text: "5. เทชาลงในแก้ว" }
            ],
            correctOrders: [[0, 1, 2, 3, 4], [0, 1, 3, 2, 4], [3, 0, 1, 2, 4]]
        },
        {
            title: "การทำเฟรนช์โทสต์",
            emoji: "🍞",
            steps: [
                { emoji: "🥚", text: "1. ตีไข่ใส่นม" },
                { emoji: "🍞", text: "2. จุ่มขนมปังไข่" },
                { emoji: "🔥", text: "3. ตั้งกระทะใส่เนย" },
                { emoji: "🍳", text: "4. ทอดขนมปังทั้งสองด้าน" }
            ],
            correctOrders: [[0, 1, 2, 3], [0, 2, 1, 3], [2, 0, 1, 3]]
        }
    ],
    math: [
        {
            title: "การบวกเลข",
            emoji: "➕",
            steps: [
                { emoji: "📝", text: "1. เขียนตัวเลขในแนวตั้ง" },
                { emoji: "👀", text: "2. ดูหลักหน่วย" },
                { emoji: "🔢", text: "3. บวกตัวเลขทีละหลัก" },
                { emoji: "✅", text: "4. เขียนคำตอบ" }
            ],
            correctOrders: [[0, 1, 2, 3]]
        },
        {
            title: "การลบเลข",
            emoji: "➖",
            steps: [
                { emoji: "📝", text: "1. เขียนตัวเลขในแนวตั้ง" },
                { emoji: "👀", text: "2. ดูหลักหน่วย" },
                { emoji: "🔢", text: "3. ลบตัวเลขทีละหลัก" },
                { emoji: "✅", text: "4. เขียนคำตอบ" }
            ],
            correctOrders: [[0, 1, 2, 3]]
        },
        {
            title: "การคูณเลข",
            emoji: "✖️",
            steps: [
                { emoji: "📝", text: "1. เขียนตัวเลขในแนวตั้ง" },
                { emoji: "🔢", text: "2. คูณตัวเลขหลักหน่วย" },
                { emoji: "🔢", text: "3. คูณตัวเลขหลักสิบ" },
                { emoji: "➕", text: "4. บวกผลลัพธ์ทั้งหมด" }
            ],
            correctOrders: [[0, 1, 2, 3]]
        },
        {
            title: "การหารเลข",
            emoji: "➗",
            steps: [
                { emoji: "📝", text: "1. เขียนสัญลักษณ์หาร" },
                { emoji: "🔢", text: "2. หารตัวเลขหลักแรก" },
                { emoji: "🔢", text: "3. นำเศษลงมา" },
                { emoji: "🔄", text: "4. ทำซ้ำจนหมด" }
            ],
            correctOrders: [[0, 1, 2, 3]]
        },
        {
            title: "การหาค่าเฉลี่ย",
            emoji: "📊",
            steps: [
                { emoji: "📝", text: "1. เขียนตัวเลขทั้งหมด" },
                { emoji: "➕", text: "2. บวกตัวเลขทั้งหมด" },
                { emoji: "🔢", text: "3. นับจำนวนตัวเลข" },
                { emoji: "➗", text: "4. หารผลรวมด้วยจำนวน" }
            ],
            correctOrders: [[0, 1, 2, 3], [0, 2, 1, 3], [2, 0, 1, 3]]
        },
        {
            title: "การเปรียบเทียบเศษส่วน",
            emoji: "🔍",
            steps: [
                { emoji: "📝", text: "1. เขียนเศษส่วนทั้งสอง" },
                { emoji: "🔢", text: "2. หาตัวคูณร่วมน้อย" },
                { emoji: "✖️", text: "3. ขยายเศษส่วนให้เท่า" },
                { emoji: "👀", text: "4. เปรียบเทียบเศษส่วน" }
            ],
            correctOrders: [[0, 1, 2, 3]]
        },
        {
            title: "การแก้สมการ",
            emoji: "🔑",
            steps: [
                { emoji: "📝", text: "1. เขียนสมการ" },
                { emoji: "🔢", text: "2. ย้ายตัวเลขข้างหนึ่ง" },
                { emoji: "🔄", text: "3. ทำการคำนวณ" },
                { emoji: "✅", text: "4. ตรวจสอบคำตอบ" }
            ],
            correctOrders: [[0, 1, 2, 3]]
        },
        {
            title: "การหาพื้นที่สี่เหลี่ยม",
            emoji: "📐",
            steps: [
                { emoji: "📏", text: "1. วัดความยาว" },
                { emoji: "📏", text: "2. วัดความกว้าง" },
                { emoji: "✖️", text: "3. คูณยาว x กว้าง" },
                { emoji: "📝", text: "4. เขียนหน่วยพื้นที่" }
            ],
            correctOrders: [[0, 1, 2, 3], [1, 0, 2, 3], [0, 1, 3, 2], [1, 0, 3, 2]]
        },
        {
            title: "การหาเปอร์เซ็นต์",
            emoji: "%",
            steps: [
                { emoji: "📝", text: "1. เขียนเศษส่วน" },
                { emoji: "➗", text: "2. หารเศษด้วยส่วน" },
                { emoji: "✖️", text: "3. คูณด้วย 100" },
                { emoji: "%", text: "4. ใส่เครื่องหมาย %" }
            ],
            correctOrders: [[0, 1, 2, 3]]
        },
        {
            title: "การแปลงหน่วย",
            emoji: "🔄",
            steps: [
                { emoji: "📝", text: "1. เขียนตัวเลขและหน่วย" },
                { emoji: "🔢", text: "2. หาอัตราส่วนการแปลง" },
                { emoji: "✖️", text: "3. คูณด้วยอัตราส่วน" },
                { emoji: "📝", text: "4. เขียนหน่วยใหม่" }
            ],
            correctOrders: [[0, 1, 2, 3]]
        }
    ],
    life: [
        {
            title: "การแปรงฟัน",
            emoji: "🦷",
            steps: [
                { emoji: "🚿", text: "1. เปิดน้ำ" },
                { emoji: "🪥", text: "2. ใส่ยาสีฟัน" },
                { emoji: "✨", text: "3. แปรงฟันให้สะอาด" },
                { emoji: "💧", text: "4. บ้วนปากด้วยน้ำ" }
            ],
            correctOrders: [[0, 1, 2, 3]]
        },
        {
            title: "การเตรียมตัวไปโรงเรียน",
            emoji: "🎒",
            steps: [
                { emoji: "⏰", text: "1. ตื่นนอน" },
                { emoji: "🚿", text: "2. อาบน้ำแปรงฟัน" },
                { emoji: "👕", text: "3. แต่งตัวใส่ชุดนักเรียน" },
                { emoji: "🎒", text: "4. เก็บหนังสือใส่กระเป๋า" }
            ],
            correctOrders: [[0, 1, 2, 3], [0, 1, 3, 2], [0, 3, 1, 2]]
        },
        {
            title: "การล้างจาน",
            emoji: "🍽️",
            steps: [
                { emoji: "🚿", text: "1. เปิดน้ำ" },
                { emoji: "🧽", text: "2. ใส่น้ำยาล้างจาน" },
                { emoji: "✨", text: "3. ขัดจานให้สะอาด" },
                { emoji: "💧", text: "4. ล้างน้ำให้หมด" }
            ],
            correctOrders: [[0, 1, 2, 3], [1, 0, 2, 3], [0, 2, 1, 3]]
        },
        {
            title: "การทำความสะอาดห้อง",
            emoji: "🧹",
            steps: [
                { emoji: "🧸", text: "1. เก็บของเล่น" },
                { emoji: "🛏️", text: "2. เก็บที่นอน" },
                { emoji: "🧹", text: "3. กวาดพื้นห้อง" },
                { emoji: "🪣", text: "4. ถูพื้นห้อง" }
            ],
            correctOrders: [[0, 1, 2, 3], [1, 0, 2, 3], [0, 2, 1, 3], [1, 2, 0, 3]]
        },
        {
            title: "การเตรียมกระเป๋าเดินทาง",
            emoji: "🧳",
            steps: [
                { emoji: "📝", text: "1. ทำรายการสิ่งของ" },
                { emoji: "👕", text: "2. เตรียมเสื้อผ้า" },
                { emoji: "🧴", text: "3. เตรียมของใช้ส่วนตัว" },
                { emoji: "🧳", text: "4. ใส่ของในกระเป๋า" }
            ],
            correctOrders: [[0, 1, 2, 3], [0, 2, 1, 3], [1, 2, 0, 3], [2, 1, 0, 3]]
        },
        {
            title: "การปลูกต้นไม้",
            emoji: "🌱",
            steps: [
                { emoji: "🕳️", text: "1. ขุดหลุมในดิน" },
                { emoji: "🌱", text: "2. ใส่ต้นกล้าลงหลุม" },
                { emoji: "🌍", text: "3. กลบดินให้มิด" },
                { emoji: "💧", text: "4. รดน้ำให้ต้นไม้" }
            ],
            correctOrders: [[0, 1, 2, 3]]
        },
        {
            title: "การทำการบ้าน",
            emoji: "📚",
            steps: [
                { emoji: "🎒", text: "1. เอาหนังสือออกจากกระเป๋า" },
                { emoji: "📖", text: "2. อ่านโจทย์ให้เข้าใจ" },
                { emoji: "✏️", text: "3. ทำการบ้านทีละข้อ" },
                { emoji: "✅", text: "4. ตรวจสอบคำตอบ" }
            ],
            correctOrders: [[0, 1, 2, 3]]
        },
        {
            title: "การซักผ้า",
            emoji: "👕",
            steps: [
                { emoji: "🧺", text: "1. แยกเสื้อผ้าตามสี" },
                { emoji: "🧴", text: "2. ใส่ผงซักฟอก" },
                { emoji: "💧", text: "3. ใส่น้ำตามระดับ" },
                { emoji: "🔄", text: "4. เปิดเครื่องซักผ้า" }
            ],
            correctOrders: [[0, 1, 2, 3], [0, 2, 1, 3], [0, 3, 1, 2], [0, 3, 2, 1]]
        },
        {
            title: "การทำสวน",
            emoji: "🌻",
            steps: [
                { emoji: "🌱", text: "1. เตรียมเมล็ดพันธุ์" },
                { emoji: "🌍", text: "2. เตรียมดินปลูก" },
                { emoji: "🕳️", text: "3. หว่านเมล็ดลงดิน" },
                { emoji: "💧", text: "4. รดน้ำเป็นประจำ" }
            ],
            correctOrders: [[0, 1, 2, 3], [1, 0, 2, 3], [0, 2, 1, 3]]
        },
        {
            title: "การออกกำลังกาย",
            emoji: "🏃",
            steps: [
                { emoji: "👕", text: "1. เปลี่ยนชุดออกกำลังกาย" },
                { emoji: "🤸", text: "2. วอร์มอัพร่างกาย" },
                { emoji: "🏃", text: "3. ออกกำลังกายจริงจัง" },
                { emoji: "💧", text: "4. ดื่มน้ำและพักผ่อน" }
            ],
            correctOrders: [[0, 1, 2, 3]]
        }
    ]
};

// สถานะเกม
let players = [];
let currentPlayerIndex = 0;
let currentCategory = '';
let currentQuestionIndex = 0;
let timerInterval;
let timeLeft = 0;
const TIME_PER_QUESTION = 60; // วินาที
const MAX_QUESTIONS = 10;

// ระบบบันทึกคะแนน
const STORAGE_KEYS = {
    GAME_HISTORY: 'algorithmGame_gameHistory',
    ALL_TIME_STATS: 'algorithmGame_allTimeStats',
    PLAYER_RECORDS: 'algorithmGame_playerRecords'
};

const MAX_HISTORY_RECORDS = 50;

// ดึง DOM Elements ที่จำเป็น
const startScreen = document.getElementById('start-screen');
const registerScreen = document.getElementById('register-screen');
const categoryScreen = document.getElementById('category-screen');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');

const playerCountButtons = document.querySelectorAll('.player-count-btn');
const playerInputsContainer = document.getElementById('player-inputs');
const backToStartBtn = document.getElementById('back-to-start-btn');
const startGameBtn = document.getElementById('start-game-btn');

const categoryCards = document.querySelectorAll('.category-card');
const currentPlayerDisplay = document.getElementById('current-player-display');

const gamePlayerName = document.getElementById('game-player-name');
const gamePlayerScore = document.getElementById('game-player-score');
const questionNumberDisplay = document.getElementById('question-number');
const timerDisplay = document.getElementById('timer');
const timerBar = document.getElementById('timer-bar');
const questionImage = document.getElementById('question-image');
const questionTitle = document.getElementById('question-title');
const stepsContainer = document.getElementById('steps-container');
const dropZonesContainer = document.getElementById('drop-zones');
const submitAnswerBtn = document.getElementById('submit-answer-btn');
const nextQuestionBtn = document.getElementById('next-question-btn');
const resetAnswerBtn = document.getElementById('reset-answer-btn');
const backToHomeFromGameBtn = document.getElementById('back-to-home-from-game-btn');

const resultPlayerName = document.getElementById('result-player-name');
const resultPlayerScore = document.getElementById('result-player-score');
const resultPlayerLevel = document.getElementById('result-player-level');
const leaderboard = document.getElementById('leaderboard');
const playAgainBtn = document.getElementById('play-again-btn');
const newGameBtn = document.getElementById('new-game-btn');
const confettiContainer = document.getElementById('confetti-container');
const backToHomeBtn = document.getElementById('back-to-home-btn');

// Modal elements
const answerModal = document.getElementById('answer-modal');
const modalContent = document.getElementById('modal-content');
const closeModalBtn = document.getElementById('close-modal-btn');

// --- ฟังก์ชันพื้นฐานสำหรับการแสดงหน้าจอ ---
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// --- ฟังก์ชันเริ่มต้นเกมและจัดการผู้เล่น ---
function setupPlayerRegistration(count) {
    players = [];
    playerInputsContainer.innerHTML = ''; // เคลียร์ input เดิม
    for (let i = 1; i <= count; i++) {
        players.push({ id: i, name: `ผู้เล่น ${i}`, score: 0 }); // สร้าง Object ผู้เล่น
        const inputDiv = document.createElement('div');
        inputDiv.className = 'mb-4';
        inputDiv.innerHTML = `
            <label for="player-name-${i}" class="block text-gray-700 text-lg font-medium mb-2 text-left">ชื่อผู้เล่น ${i}:</label>
            <input type="text" id="player-name-${i}" placeholder="ใส่ชื่อที่นี่" class="w-full p-3 border border-gray-300 rounded-lg text-lg focus:ring-blue-500 focus:border-blue-500">
        `;
        playerInputsContainer.appendChild(inputDiv);
    }
    showScreen('register-screen');
}

function startNewGame() {
    // เก็บชื่อผู้เล่นจาก input
    players.forEach((player, index) => {
        const inputElement = document.getElementById(`player-name-${player.id}`);
        if (inputElement && inputElement.value.trim() !== '') {
            player.name = inputElement.value.trim();
        }
        player.score = 0; // รีเซ็ตคะแนน
    });

    currentPlayerIndex = 0;
    currentCategory = '';
    currentQuestionIndex = 0;
    // เริ่มต้นการเล่นสำหรับผู้เล่นคนแรก
    showCategorySelection();
}

function showCategorySelection() {
    const currentPlayer = players[currentPlayerIndex];
    currentPlayerDisplay.textContent = `ผู้เล่น: ${currentPlayer.name}`;
    showScreen('category-screen');
}

function startGameForCurrentPlayer(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    loadQuestion();
    showScreen('game-screen');
}

// --- ฟังก์ชันการโหลดคำถาม ---
function loadQuestion() {
    // หยุด Timer ก่อนโหลดข้อใหม่
    clearInterval(timerInterval);

    const categoryQuestions = gameData[currentCategory];
    if (!categoryQuestions || categoryQuestions.length === 0) {
        console.error("ไม่มีคำถามในหมวดนี้:", currentCategory);
        endGame(); // หรือจัดการข้อผิดพลาด
        return;
    }

    if (currentQuestionIndex >= MAX_QUESTIONS || currentQuestionIndex >= categoryQuestions.length) {
        endPlayerTurn();
        return;
    }

    const question = categoryQuestions[currentQuestionIndex];

    gamePlayerName.textContent = players[currentPlayerIndex].name;
    gamePlayerScore.textContent = players[currentPlayerIndex].score;
    questionNumberDisplay.textContent = currentQuestionIndex + 1;
    timerDisplay.textContent = TIME_PER_QUESTION;
    timerBar.style.width = '100%';

    questionImage.textContent = question.emoji;
    questionTitle.textContent = question.title;

    // สุ่มลำดับขั้นตอน
    let shuffledSteps = [...question.steps];
    // Fisher-Yates shuffle algorithm
    for (let i = shuffledSteps.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledSteps[i], shuffledSteps[j]] = [shuffledSteps[j], shuffledSteps[i]];
    }

    stepsContainer.innerHTML = '';
    shuffledSteps.forEach((step, index) => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'draggable bg-white p-4 rounded-xl shadow-md text-center cursor-grab text-lg flex items-center justify-center min-h-[90px] hover:bg-gray-50';
        stepDiv.setAttribute('draggable', true);
        stepDiv.dataset.originalIndex = question.steps.indexOf(step); // เก็บ index เดิม
        stepDiv.innerHTML = `<span class="mr-2 text-2xl">${step.emoji}</span>${step.text.split('. ')[1]}`; // แสดง emoji + ข้อความ
        stepsContainer.appendChild(stepDiv);
    });

    dropZonesContainer.innerHTML = '';
    for (let i = 0; i < question.steps.length; i++) {
        const dropZoneDiv = document.createElement('div');
        dropZoneDiv.className = 'drop-zone flex items-center justify-center';
        dropZoneDiv.dataset.position = i;
        dropZoneDiv.innerHTML = `<span class="text-gray-400 text-lg">${i + 1}</span>`;
        dropZonesContainer.appendChild(dropZoneDiv);
    }

    // รีเซ็ตสถานะปุ่ม
    submitAnswerBtn.classList.remove('hidden');
    nextQuestionBtn.classList.add('hidden');

    setupDragAndDrop(); // ตั้งค่า Drag and Drop ใหม่ทุกครั้งที่โหลดคำถาม
    startTimer(); // เริ่ม Timer
}

// --- ฟังก์ชัน Drag & Drop และ Touch Support ---
let draggedItem = null;
let touchOffset = { x: 0, y: 0 };
let isDraggingTouch = false;
let originalParent = null;
let originalNextSibling = null;

function setupDragAndDrop() {
    const draggables = document.querySelectorAll('.draggable');
    const dropZones = document.querySelectorAll('.drop-zone');

    draggables.forEach(draggable => {
        // Clear all previous event listeners
        draggable.replaceWith(draggable.cloneNode(true));
    });

    // Re-get elements after cloning
    const newDraggables = document.querySelectorAll('.draggable');

    newDraggables.forEach(draggable => {
        // Mobile click support
        draggable.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            // สำหรับมือถือ: ถ้ายังไม่มีตัวที่เลือก ให้เลือกตัวนี้
            if (!selectedForMove) {
                selectedForMove = draggable;
                draggable.classList.add('selected');
                draggable.style.backgroundColor = 'rgba(59, 130, 246, 0.3)';
                draggable.style.border = '2px solid #3b82f6';
                draggable.style.transform = 'scale(1.02)';

                showMobileInstruction('แตะที่ตำแหน่งที่ต้องการวาง');
                return;
            }

            // ถ้าคลิกตัวเดิมอีกครั้ง ให้ยกเลิกการเลือก
            if (selectedForMove === draggable) {
                deselectItem();
                return;
            }
        });

        // Desktop Drag Events
        draggable.addEventListener('dragstart', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                return false;
            }

            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', draggable.outerHTML);
            e.dataTransfer.setData('text/plain', '');

            draggedItem = draggable;
            originalParent = draggable.parentNode;
            originalNextSibling = draggable.nextSibling;

            setTimeout(() => {
                draggable.classList.add('dragging');
            }, 0);
        });

        draggable.addEventListener('dragend', (e) => {
            if (draggedItem) {
                draggedItem.classList.remove('dragging');

                // Clear any remaining highlights
                document.querySelectorAll('.drop-zone').forEach(zone => {
                    zone.classList.remove('highlight');
                });
                document.getElementById('steps-container')?.classList.remove('highlight');

                draggedItem = null;
                originalParent = null;
                originalNextSibling = null;
            }
        });

        // Mouse events for desktop only
        if (window.innerWidth > 768) {
            draggable.addEventListener('mousedown', (e) => {
                e.preventDefault();
            });
        }
    });

    // Desktop drop events
    dropZones.forEach(dropZone => {
        if (window.innerWidth > 768) {
            dropZone.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
                dropZone.classList.add('highlight');
            });

            dropZone.addEventListener('dragenter', (e) => {
                e.preventDefault();
                dropZone.classList.add('highlight');
            });

            dropZone.addEventListener('dragleave', (e) => {
                if (!dropZone.contains(e.relatedTarget)) {
                    dropZone.classList.remove('highlight');
                }
            });

            dropZone.addEventListener('drop', (e) => {
                e.preventDefault();
                e.stopPropagation();
                dropZone.classList.remove('highlight');

                if (draggedItem) {
                    handleDrop(dropZone);
                }
            });
        }

        // Mobile click support
        dropZone.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            if (selectedForMove) {
                // ย้าย selectedForMove ไปยัง dropZone นี้
                handleMobileDrop(dropZone);
                deselectItem();
            }
        });
    });

    // Steps container drop events
    const stepsContainer = document.getElementById('steps-container');
    if (stepsContainer) {
        if (window.innerWidth > 768) {
            stepsContainer.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
                stepsContainer.classList.add('highlight');
            });

            stepsContainer.addEventListener('dragenter', (e) => {
                e.preventDefault();
                stepsContainer.classList.add('highlight');
            });

            stepsContainer.addEventListener('dragleave', (e) => {
                if (!stepsContainer.contains(e.relatedTarget)) {
                    stepsContainer.classList.remove('highlight');
                }
            });

            stepsContainer.addEventListener('drop', (e) => {
                e.preventDefault();
                e.stopPropagation();
                stepsContainer.classList.remove('highlight');

                if (draggedItem) {
                    handleDropToSteps();
                }
            });
        }

        // Mobile click support
        stepsContainer.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            if (selectedForMove) {
                // ส่ง selectedForMove กลับไปยัง steps container
                handleMobileDropToSteps();
                deselectItem();
            }
        });
    }
}

function handleDrop(dropZone) {
    if (!draggedItem) return;

    const sourceParent = draggedItem.parentNode;
    const sourceIsDropZone = sourceParent.classList.contains('drop-zone');

    // ถ้า dropZone ว่างเปล่า หรือมี textNode '1', '2', '3', '4' อยู่
    if (dropZone.children.length === 1 && dropZone.children[0].tagName === 'SPAN') {
        // วางลงในช่องว่าง
        dropZone.innerHTML = '';
        dropZone.appendChild(draggedItem);
        dropZone.classList.add('filled');

        // เคลียร์ตำแหน่งเดิมถ้ามาจาก dropZone
        if (sourceIsDropZone) {
            sourceParent.innerHTML = `<span class="text-gray-400 text-lg">${parseInt(sourceParent.dataset.position) + 1}</span>`;
            sourceParent.classList.remove('filled');
        }
    } else if (dropZone.children.length > 0 && dropZone.children[0].classList.contains('draggable')) {
        // มี item อยู่แล้ว - สลับตำแหน่งกัน
        const existingItem = dropZone.children[0];

        // ลบ item ที่มีอยู่ออกจาก dropZone ปัจจุบัน
        dropZone.removeChild(existingItem);

        if (sourceIsDropZone) {
            // ถ้า draggedItem มาจาก dropZone อื่น - สลับกัน
            sourceParent.appendChild(existingItem);
            sourceParent.classList.add('filled');
        } else {
            // ถ้า draggedItem มาจาก stepsContainer - ส่ง existingItem กลับไป
            document.getElementById('steps-container').appendChild(existingItem);
        }

        // วาง draggedItem ลงในตำแหน่งใหม่
        dropZone.appendChild(draggedItem);
        dropZone.classList.add('filled');

        // เคลียร์ตำแหน่งเดิมถ้ามาจาก dropZone
        if (sourceIsDropZone) {
            sourceParent.innerHTML = `<span class="text-gray-400 text-lg">${parseInt(sourceParent.dataset.position) + 1}</span>`;
            sourceParent.classList.remove('filled');
        }
    }
}

function handleDropToSteps() {
    if (!draggedItem) return;

    const sourceParent = draggedItem.parentNode;
    const sourceIsDropZone = sourceParent.classList.contains('drop-zone');

    // ส่ง draggedItem กลับไปยัง steps container
    document.getElementById('steps-container').appendChild(draggedItem);

    // เคลียร์ตำแหน่งเดิมถ้ามาจาก dropZone
    if (sourceIsDropZone) {
        sourceParent.innerHTML = `<span class="text-gray-400 text-lg">${parseInt(sourceParent.dataset.position) + 1}</span>`;
        sourceParent.classList.remove('filled');
    }
}

// ฟังก์ชันสำหรับ Mobile Drop
function handleMobileDrop(dropZone) {
    if (!selectedForMove) return;

    const sourceParent = selectedForMove.parentNode;
    const sourceIsDropZone = sourceParent.classList.contains('drop-zone');

    // ถ้า dropZone ว่างเปล่า หรือมี textNode '1', '2', '3', '4' อยู่
    if (dropZone.children.length === 1 && dropZone.children[0].tagName === 'SPAN') {
        // วางลงในช่องว่าง
        dropZone.innerHTML = '';
        dropZone.appendChild(selectedForMove);
        dropZone.classList.add('filled');

        // เคลียร์ตำแหน่งเดิมถ้ามาจาก dropZone
        if (sourceIsDropZone) {
            sourceParent.innerHTML = `<span class="text-gray-400 text-lg">${parseInt(sourceParent.dataset.position) + 1}</span>`;
            sourceParent.classList.remove('filled');
        }
    } else if (dropZone.children.length > 0 && dropZone.children[0].classList.contains('draggable')) {
        // มี item อยู่แล้ว - สลับตำแหน่งกัน
        const existingItem = dropZone.children[0];

        // ลบ item ที่มีอยู่ออกจาก dropZone ปัจจุบัน
        dropZone.removeChild(existingItem);

        if (sourceIsDropZone) {
            // ถ้า selectedForMove มาจาก dropZone อื่น - สลับกัน
            sourceParent.appendChild(existingItem);
            sourceParent.classList.add('filled');
        } else {
            // ถ้า selectedForMove มาจาก stepsContainer - ส่ง existingItem กลับไป
            document.getElementById('steps-container').appendChild(existingItem);
        }

        // วาง selectedForMove ลงในตำแหน่งใหม่
        dropZone.appendChild(selectedForMove);
        dropZone.classList.add('filled');

        // เคลียร์ตำแหน่งเดิมถ้ามาจาก dropZone
        if (sourceIsDropZone) {
            sourceParent.innerHTML = `<span class="text-gray-400 text-lg">${parseInt(sourceParent.dataset.position) + 1}</span>`;
            sourceParent.classList.remove('filled');
        }
    }
}

function handleMobileDropToSteps() {
    if (!selectedForMove) return;

    const sourceParent = selectedForMove.parentNode;
    const sourceIsDropZone = sourceParent.classList.contains('drop-zone');

    // ส่ง selectedForMove กลับไปยัง steps container
    document.getElementById('steps-container').appendChild(selectedForMove);

    // เคลียร์ตำแหน่งเดิมถ้ามาจาก dropZone
    if (sourceIsDropZone) {
        sourceParent.innerHTML = `<span class="text-gray-400 text-lg">${parseInt(sourceParent.dataset.position) + 1}</span>`;
        sourceParent.classList.remove('filled');
    }
}

// --- ฟังก์ชัน Timer ---
function startTimer() {
    timeLeft = TIME_PER_QUESTION;
    timerDisplay.textContent = timeLeft;
    timerBar.style.width = '100%'; // รีเซ็ตความกว้างของ Timer bar

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        timerBar.style.width = `${(timeLeft / TIME_PER_QUESTION) * 100}%`;

        if (timeLeft <= 10) {
            timerBar.style.backgroundColor = '#f59e0b'; // สีส้ม
        }
        if (timeLeft <= 5) {
            timerBar.style.backgroundColor = '#ef4444'; // สีแดง
        }
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = 'หมดเวลา!';
            checkAnswer(true); // ตรวจคำตอบเมื่อหมดเวลา
        }
    }, 1000);
}

// --- ฟังก์ชันจัดการ Local Storage ---
function saveGameData() {
    try {
        // บันทึกข้อมูลเกมปัจจุบัน
        const gameRecord = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            players: players.map(player => ({
                name: player.name,
                score: player.score,
                accuracy: Math.round((player.score / MAX_QUESTIONS) * 100),
                category: currentCategory
            })),
            category: currentCategory,
            totalQuestions: MAX_QUESTIONS
        };

        // เก็บประวัติ 50 เกมล่าสุด
        let gameHistory = getGameHistory();
        gameHistory.unshift(gameRecord);
        if (gameHistory.length > MAX_HISTORY_RECORDS) {
            gameHistory = gameHistory.slice(0, MAX_HISTORY_RECORDS);
        }
        localStorage.setItem(STORAGE_KEYS.GAME_HISTORY, JSON.stringify(gameHistory));

        // อัปเดทสถิติรวม
        updateAllTimeStats(gameRecord);

        // อัปเดทประวัติผู้เล่น
        updatePlayerRecords(gameRecord);

    } catch (error) {
        console.error('Error saving game data:', error);
    }
}

function getGameHistory() {
    try {
        const history = localStorage.getItem(STORAGE_KEYS.GAME_HISTORY);
        return history ? JSON.parse(history) : [];
    } catch (error) {
        console.error('Error loading game history:', error);
        return [];
    }
}

function getAllTimeStats() {
    try {
        const stats = localStorage.getItem(STORAGE_KEYS.ALL_TIME_STATS);
        return stats ? JSON.parse(stats) : {
            totalGamesPlayed: 0,
            totalQuestionsAnswered: 0,
            totalCorrectAnswers: 0,
            averageAccuracy: 0,
            categoriesPlayed: {},
            bestScore: 0,
            totalTimePlayed: 0
        };
    } catch (error) {
        console.error('Error loading all-time stats:', error);
        return {
            totalGamesPlayed: 0,
            totalQuestionsAnswered: 0,
            totalCorrectAnswers: 0,
            averageAccuracy: 0,
            categoriesPlayed: {},
            bestScore: 0,
            totalTimePlayed: 0
        };
    }
}

function updateAllTimeStats(gameRecord) {
    try {
        let stats = getAllTimeStats();
        
        stats.totalGamesPlayed++;
        stats.totalQuestionsAnswered += gameRecord.totalQuestions * gameRecord.players.length;
        
        gameRecord.players.forEach(player => {
            stats.totalCorrectAnswers += player.score;
            if (player.score > stats.bestScore) {
                stats.bestScore = player.score;
            }
        });
        
        stats.averageAccuracy = Math.round((stats.totalCorrectAnswers / stats.totalQuestionsAnswered) * 100);
        
        // อัปเดทหมวดหมู่ที่เล่น
        if (!stats.categoriesPlayed[gameRecord.category]) {
            stats.categoriesPlayed[gameRecord.category] = 0;
        }
        stats.categoriesPlayed[gameRecord.category]++;
        
        localStorage.setItem(STORAGE_KEYS.ALL_TIME_STATS, JSON.stringify(stats));
    } catch (error) {
        console.error('Error updating all-time stats:', error);
    }
}

function getPlayerRecords() {
    try {
        const records = localStorage.getItem(STORAGE_KEYS.PLAYER_RECORDS);
        return records ? JSON.parse(records) : {};
    } catch (error) {
        console.error('Error loading player records:', error);
        return {};
    }
}

function updatePlayerRecords(gameRecord) {
    try {
        let playerRecords = getPlayerRecords();
        
        gameRecord.players.forEach(player => {
            if (!playerRecords[player.name]) {
                playerRecords[player.name] = {
                    name: player.name,
                    totalGames: 0,
                    totalScore: 0,
                    bestScore: 0,
                    averageScore: 0,
                    lastPlayed: null,
                    categoriesPlayed: {}
                };
            }
            
            const record = playerRecords[player.name];
            record.totalGames++;
            record.totalScore += player.score;
            record.averageScore = Math.round(record.totalScore / record.totalGames * 100) / 100;
            
            if (player.score > record.bestScore) {
                record.bestScore = player.score;
            }
            
            record.lastPlayed = new Date().toISOString();
            
            if (!record.categoriesPlayed[gameRecord.category]) {
                record.categoriesPlayed[gameRecord.category] = 0;
            }
            record.categoriesPlayed[gameRecord.category]++;
        });
        
        localStorage.setItem(STORAGE_KEYS.PLAYER_RECORDS, JSON.stringify(playerRecords));
    } catch (error) {
        console.error('Error updating player records:', error);
    }
}

function getTopPlayers(limit = 10) {
    try {
        const playerRecords = getPlayerRecords();
        return Object.values(playerRecords)
            .sort((a, b) => b.bestScore - a.bestScore || b.averageScore - a.averageScore)
            .slice(0, limit);
    } catch (error) {
        console.error('Error getting top players:', error);
        return [];
    }
}

// --- ฟังก์ชันการตรวจคำตอบ ---
function checkAnswer(timedOut = false) {
    clearInterval(timerInterval); // หยุด Timer
    submitAnswerBtn.classList.add('hidden');

    const currentQuestion = gameData[currentCategory][currentQuestionIndex];
    const dropZones = document.querySelectorAll('#drop-zones .drop-zone');
    let userAnswer = [];
    let isCorrect = false;

    // ดึงลำดับคำตอบของผู้เล่น
    dropZones.forEach(zone => {
        const item = zone.querySelector('.draggable');
        if (item) {
            userAnswer.push(parseInt(item.dataset.originalIndex));
        } else {
            userAnswer.push(null); // ถ้ามีช่องว่าง
        }
    });

    // ตรวจสอบความถูกต้อง
    if (!userAnswer.includes(null)) { // ต้องไม่มีช่องว่าง
        isCorrect = currentQuestion.correctOrders.some(correctOrder => {
            return JSON.stringify(userAnswer) === JSON.stringify(correctOrder);
        });
    }

    // แสดง popup modal
    showAnswerModal(isCorrect, timedOut, currentQuestion);

    if (isCorrect && !timedOut) {
        players[currentPlayerIndex].score++;
        // เพิ่ม animation หรือ effect เมื่อตอบถูก
        dropZonesContainer.classList.add('correct-answer');
    } else {
        // เพิ่ม animation หรือ effect เมื่อตอบผิด
        dropZonesContainer.classList.add('wrong-answer');
    }

    // ลบ animation class หลังแสดงผล
    setTimeout(() => {
        dropZonesContainer.classList.remove('correct-answer', 'wrong-answer');
    }, 1000);

    gamePlayerScore.textContent = players[currentPlayerIndex].score; // อัพเดทคะแนน
}

// --- ฟังก์ชันการเปลี่ยนข้อ/ผู้เล่น ---
function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function endPlayerTurn() {
    clearInterval(timerInterval); // หยุด Timer
    currentPlayerIndex++; // ไปผู้เล่นคนถัดไป

    if (currentPlayerIndex < players.length) {
        // ผู้เล่นคนถัดไปยังมีอยู่ ให้เลือกหมวดใหม่
        showCategorySelection();
    } else {
        // เล่นครบทุกคนแล้ว แสดงผลสรุป
        endGame();
    }
}

function endGame() {
    // บันทึกข้อมูลก่อนแสดงผล
    saveGameData();
    showResultScreen();
}

// --- ฟังก์ชันแสดงผลสรุป ---
function showResultScreen() {
    showScreen('result-screen');
    const currentPlayer = players[currentPlayerIndex -1]; // ผู้เล่นคนสุดท้ายที่เล่น

    resultPlayerName.textContent = currentPlayer ? currentPlayer.name : 'ไม่มีข้อมูล';
    resultPlayerScore.textContent = currentPlayer ? `${currentPlayer.score}/${MAX_QUESTIONS}` : '0/10';

    // กำหนดระดับความเก่ง
    let level = "เริ่มต้น";
    if (currentPlayer) {
        const accuracy = Math.round((currentPlayer.score / MAX_QUESTIONS) * 100);
        if (accuracy >= 80) {
            level = `🏆 ยอดเยี่ยม! (${accuracy}%)`;
            createConfetti(); // เฉลิมฉลองด้วย confetti
        } else if (accuracy >= 60) {
            level = `⭐ ดีมาก (${accuracy}%)`;
        } else if (accuracy >= 40) {
            level = `👍 ดี (${accuracy}%)`;
        } else {
            level = `💪 ลองใหม่นะ (${accuracy}%)`;
        }
    }
    resultPlayerLevel.textContent = level;

    updateLeaderboard();
    updateAllTimeStatsDisplay();
    updateAllTimeLeaderboard();
}

function updateLeaderboard() {
    leaderboard.innerHTML = '';
    // เรียงลำดับผู้เล่นตามคะแนนจากมากไปน้อย
    const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

    sortedPlayers.forEach((player, index) => {
        const accuracy = Math.round((player.score / MAX_QUESTIONS) * 100);
        const playerEntry = document.createElement('div');
        playerEntry.className = `player-score flex items-center justify-between p-3 mb-2 bg-white rounded-lg shadow-sm text-lg ${index === 0 ? 'highlight' : ''}`;
        playerEntry.innerHTML = `
            <div class="flex items-center">
                <span class="font-bold text-gray-700 mr-2">${index + 1}.</span>
                <div>
                    <div class="font-bold text-gray-700">${player.name}</div>
                    <div class="text-sm text-gray-500">ความแม่นยำ: ${accuracy}%</div>
                </div>
            </div>
            <span class="font-semibold text-indigo-600">${player.score}/${MAX_QUESTIONS}</span>
        `;
        leaderboard.appendChild(playerEntry);
    });
}

function updateAllTimeStatsDisplay() {
    const stats = getAllTimeStats();
    const allTimeStatsContainer = document.getElementById('all-time-stats');
    
    if (!allTimeStatsContainer) return;
    
    // หาหมวดที่เล่นมากที่สุด
    let favoriteCategory = 'ไม่มี';
    let maxCategoryCount = 0;
    for (const [category, count] of Object.entries(stats.categoriesPlayed)) {
        if (count > maxCategoryCount) {
            maxCategoryCount = count;
            favoriteCategory = getCategoryDisplayName(category);
        }
    }
    
    allTimeStatsContainer.innerHTML = `
        <div class="bg-white rounded-lg p-3 text-center shadow-sm">
            <div class="text-2xl font-bold text-orange-600">${stats.totalGamesPlayed}</div>
            <div class="text-xs text-gray-600">เกมทั้งหมด</div>
        </div>
        <div class="bg-white rounded-lg p-3 text-center shadow-sm">
            <div class="text-2xl font-bold text-green-600">${stats.averageAccuracy}%</div>
            <div class="text-xs text-gray-600">ความแม่นยำเฉลี่ย</div>
        </div>
        <div class="bg-white rounded-lg p-3 text-center shadow-sm">
            <div class="text-2xl font-bold text-blue-600">${stats.bestScore}</div>
            <div class="text-xs text-gray-600">คะแนนสูงสุด</div>
        </div>
        <div class="bg-white rounded-lg p-3 text-center shadow-sm">
            <div class="text-lg font-bold text-purple-600">${favoriteCategory}</div>
            <div class="text-xs text-gray-600">หมวดโปรด</div>
        </div>
    `;
}

function updateAllTimeLeaderboard() {
    const allTimeLeaderboardContainer = document.getElementById('all-time-leaderboard');
    
    if (!allTimeLeaderboardContainer) return;
    
    const topPlayers = getTopPlayers(10);
    
    if (topPlayers.length === 0) {
        allTimeLeaderboardContainer.innerHTML = '<div class="text-center text-gray-500 py-4">ยังไม่มีข้อมูลผู้เล่น</div>';
        return;
    }
    
    allTimeLeaderboardContainer.innerHTML = '';
    
    topPlayers.forEach((player, index) => {
        const lastPlayedDate = new Date(player.lastPlayed).toLocaleDateString('th-TH');
        const playerEntry = document.createElement('div');
        playerEntry.className = `flex items-center justify-between p-3 mb-2 bg-white rounded-lg shadow-sm ${index < 3 ? 'border-l-4' : ''}`;
        
        // เพิ่มสีตาม ranking
        if (index === 0) playerEntry.classList.add('border-yellow-400');
        else if (index === 1) playerEntry.classList.add('border-gray-400');
        else if (index === 2) playerEntry.classList.add('border-orange-400');
        
        const rankIcon = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}.`;
        
        playerEntry.innerHTML = `
            <div class="flex items-center">
                <span class="text-xl mr-3">${rankIcon}</span>
                <div>
                    <div class="font-bold text-gray-700">${player.name}</div>
                    <div class="text-sm text-gray-500">
                        เล่น ${player.totalGames} เกม | เฉลี่ย ${player.averageScore} คะแนน
                    </div>
                    <div class="text-xs text-gray-400">เล่นล่าสุด: ${lastPlayedDate}</div>
                </div>
            </div>
            <div class="text-right">
                <div class="font-bold text-lg text-teal-600">${player.bestScore}</div>
                <div class="text-xs text-gray-500">คะแนนสูงสุด</div>
            </div>
        `;
        allTimeLeaderboardContainer.appendChild(playerEntry);
    });
}

function getCategoryDisplayName(category) {
    const categoryNames = {
        food: 'เมนูอาหาร',
        math: 'คณิตศาสตร์', 
        life: 'ชีวิตประจำวัน'
    };
    return categoryNames[category] || category;
}

// --- ฟังก์ชันแสดง Answer Modal ---
function showAnswerModal(isCorrect, timedOut, question) {
    // สร้างเฉลยทุกรูปแบบ
    const allSolutionsHTML = question.correctOrders.map((correctOrder, solutionIndex) => {
        const solutionTitle = question.correctOrders.length > 1 ? `วิธีที่ ${solutionIndex + 1}:` : 'เฉลย:';
        return `
            <div class="mb-4 ${solutionIndex > 0 ? 'border-t border-gray-300 pt-4' : ''}">
                <h4 class="text-md font-semibold mb-2 ${isCorrect && !timedOut ? 'text-green-700' : 'text-red-700'}">${solutionTitle}</h4>
                <div class="text-left">
                    ${correctOrder.map((idx, i) => 
                        `<p class="text-sm mb-1 ${isCorrect && !timedOut ? 'text-green-600' : 'text-red-600'}">${i + 1}. ${question.steps[idx].emoji} ${question.steps[idx].text.split('. ')[1]}</p>`
                    ).join('')}
                </div>
            </div>
        `;
    }).join('');

    let modalHTML = '';
    if (isCorrect && !timedOut) {
        // ตอบถูก
        modalHTML = `
            <div class="modal-emoji correct-emoji">🎉</div>
            <h2 class="text-3xl font-bold modal-title mb-4">ยอดเยี่ยม!</h2>
            <p class="modal-content-text">เก่งมาก! คุณเรียงลำดับได้ถูกต้องแล้ว 🌟</p>
            <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-4 shadow-inner">
                <h3 class="font-bold text-green-700 mb-3 text-lg">✅ ลำดับที่ถูกต้อง:</h3>
                ${allSolutionsHTML}
            </div>
        `;
    } else {
        // ตอบผิดหรือหมดเวลา
        const reasonText = timedOut ? 'หมดเวลา!' : 'คำตอบไม่ถูกต้อง';
        modalHTML = `
            <div class="modal-emoji wrong-emoji">🤔</div>
            <h2 class="text-3xl font-bold modal-title mb-4">ลองใหม่นะ!</h2>
            <p class="modal-content-text">${reasonText} ไม่เป็นไร ลองดูคำตอบแล้วลองใหม่นะ! 💪</p>
            <div class="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-xl p-4 max-h-60 overflow-y-auto shadow-inner">
                <h3 class="font-bold text-red-700 mb-3 text-lg">💡 ลำดับที่ถูกต้อง:</h3>
                ${allSolutionsHTML}
            </div>
        `;
    }

    modalContent.innerHTML = modalHTML;
    answerModal.classList.remove('hidden');
    answerModal.style.display = 'flex';
    answerModal.querySelector('.bg-white').classList.add('modal-slide-in');
    
    // Force reflow และแสดง modal
    setTimeout(() => {
        answerModal.style.opacity = '1';
    }, 10);
}

function hideAnswerModal() {
    answerModal.style.opacity = '0';
    setTimeout(() => {
        answerModal.classList.add('hidden');
        answerModal.style.display = 'none';
        answerModal.querySelector('.bg-white').classList.remove('modal-slide-in');
        // ไปข้อถัดไปหลังปิด modal
        nextQuestion();
    }, 300);
}

// --- ฟังก์ชันรีเซ็ตคำตอบ ---
function resetAnswers() {
    // ส่งคืนทุก draggable item กลับไปยัง steps container
    const draggableItems = document.querySelectorAll('.drop-zone .draggable');
    const stepsContainer = document.getElementById('steps-container');

    draggableItems.forEach(item => {
        stepsContainer.appendChild(item);
    });

    // รีเซ็ต drop zones ให้กลับมาเป็นค่าเริ่มต้น
    const dropZones = document.querySelectorAll('.drop-zone');
    dropZones.forEach((zone, index) => {
        zone.innerHTML = `<span class="text-gray-400 text-lg">${index + 1}</span>`;
        zone.classList.remove('filled');
    });

    // Clear any mobile selection
    deselectItem();
    hideMobileInstruction();
}

// Functions for mobile click-based interaction
let selectedForMove = null;

function deselectItem() {
    if (selectedForMove) {
        selectedForMove.classList.remove('selected');
        selectedForMove.style.backgroundColor = '';
        selectedForMove.style.border = '';
        selectedForMove.style.transform = '';
        selectedForMove = null;
    }
    hideMobileInstruction();
}

function showMobileInstruction(message) {
    let instruction = document.getElementById('mobile-instruction');
    if (!instruction) {
        instruction = document.createElement('div');
        instruction.id = 'mobile-instruction';
        instruction.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg z-50 text-sm font-medium';
        document.body.appendChild(instruction);
    }
    instruction.textContent = message;
    instruction.style.display = 'block';
}

function hideMobileInstruction() {
    const instruction = document.getElementById('mobile-instruction');
    if (instruction) {
        instruction.style.display = 'none';
    }
}

// --- Confetti Effect (เมื่อได้คะแนนสูง) ---
function createConfetti() {
    confettiContainer.innerHTML = ''; // Clear previous confetti
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.top = `${Math.random() * -20}%`;
        confetti.style.animation = `confetti-fall ${Math.random() * 3 + 2}s linear infinite`; // 2-5 seconds
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        confetti.style.transform = `scale(${Math.random() * 0.8 + 0.2})`; // 0.2-1.0 scale
        confettiContainer.appendChild(confetti);
    }
}

// --- Event Listeners ทั้งหมด ---

// ปุ่มเลือกจำนวนผู้เล่น
playerCountButtons.forEach(button => {
    button.addEventListener('click', function() {
        const playerCount = parseInt(this.dataset.count);
        setupPlayerRegistration(playerCount); // เรียกฟังก์ชันสร้าง input ผู้เล่น
    });
});

// ปุ่ม "กลับ" บนหน้าลงทะเบียน
backToStartBtn.addEventListener('click', () => {
    showScreen('start-screen');
});

// ปุ่ม "เริ่มเกม" บนหน้าลงทะเบียน
startGameBtn.addEventListener('click', startNewGame);

// การเลือกหมวด
categoryCards.forEach(card => {
    card.addEventListener('click', function() {
        const category = this.dataset.category;
        startGameForCurrentPlayer(category);
    });
});

// ปุ่ม "ส่งคำตอบ"
submitAnswerBtn.addEventListener('click', () => checkAnswer(false));

// ปุ่ม "ไปข้อถัดไป"
nextQuestionBtn.addEventListener('click', nextQuestion);

// ปุ่ม "รีเซ็ตคำตอบ" บนหน้าเกม
resetAnswerBtn.addEventListener('click', () => {
    resetAnswers();
});

// ปุ่ม "กลับหน้าหลัก" บนหน้าเกม
backToHomeFromGameBtn.addEventListener('click', () => {
    clearInterval(timerInterval); // หยุด timer
    showScreen('start-screen'); // กลับไปหน้าเริ่มต้น
    // รีเซ็ตสถานะเกมทั้งหมด
    players = [];
    currentPlayerIndex = 0;
    currentQuestionIndex = 0;
});

// ปุ่ม "เล่นอีกครั้ง" บนหน้าสรุปผล
playAgainBtn.addEventListener('click', () => {
    // เล่นซ้ำสำหรับผู้เล่นคนเดิม
    players.forEach(player => player.score = 0); // รีเซ็ตคะแนนผู้เล่นเดิม
    currentPlayerIndex = 0;
    currentQuestionIndex = 0;
    showCategorySelection();
});

// ปุ่ม "เกมใหม่" บนหน้าสรุปผล
newGameBtn.addEventListener('click', () => {
    showScreen('start-screen'); // กลับไปหน้าเลือกจำนวนผู้เล่น
    // รีเซ็ตสถานะเกมทั้งหมด
    players = [];
    currentPlayerIndex = 0;
    currentQuestionIndex = 0;
});

// ปุ่ม "กลับหน้าหลัก" บนหน้าเลือกโหมด
backToHomeBtn.addEventListener('click', () => {
    showScreen('start-screen'); // กลับไปหน้าเริ่มต้น
    // รีเซ็ตสถานะเกมทั้งหมด
    players = [];
    currentPlayerIndex = 0;
    currentQuestionIndex = 0;
});

// ปุ่มปิด modal
closeModalBtn.addEventListener('click', hideAnswerModal);

// ปิด modal เมื่อคลิกนอกกรอบ
answerModal.addEventListener('click', (e) => {
    if (e.target === answerModal) {
        hideAnswerModal();
    }
});

// --- ฟังก์ชันเสียงหุ่นยนต์ ---
function playRobotSound() {
    // สร้างเสียงบี๊บๆ ด้วย Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime + 0.2);

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);

    // เพิ่มการเปลี่ยนสีตาหุ่นยนต์
    const eyeLeft = document.querySelector('.robot-eye-left');
    const eyeRight = document.querySelector('.robot-eye-right');
    const statusLight = document.querySelector('.robot-status-light');

    if (eyeLeft && eyeRight && statusLight) {
        eyeLeft.style.fill = '#f59e0b';
        eyeRight.style.fill = '#f59e0b';
        statusLight.style.fill = '#ef4444';

        setTimeout(() => {
            eyeLeft.style.fill = '#fef3c7';
            eyeRight.style.fill = '#fef3c7';
            statusLight.style.fill = '#34d399';
        }, 500);
    }
}

// --- เริ่มต้นเกมเมื่อ DOM โหลดเสร็จ ---
document.addEventListener('DOMContentLoaded', () => {
    showScreen('start-screen'); // แสดงหน้าจอเริ่มต้นเมื่อโหลดหน้าเว็บ
});
