/********************* 
 * Rotatingline Test *
 *********************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'rotatingLine';  // from the Builder filename that created this script
let expInfo = {'Katilimci numarasi(kendi belirlediginiz 6 haneli bir sayi)': '', 'Cinsiyet': '', 'Yas': '', 'Deneyi actiginiz tarayiciniz': ''};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(ConsentRoutineBegin());
flowScheduler.add(ConsentRoutineEachFrame());
flowScheduler.add(ConsentRoutineEnd());
flowScheduler.add(Consent2RoutineBegin());
flowScheduler.add(Consent2RoutineEachFrame());
flowScheduler.add(Consent2RoutineEnd());
flowScheduler.add(Consent3RoutineBegin());
flowScheduler.add(Consent3RoutineEachFrame());
flowScheduler.add(Consent3RoutineEnd());
flowScheduler.add(instructionRoutineBegin());
flowScheduler.add(instructionRoutineEachFrame());
flowScheduler.add(instructionRoutineEnd());
flowScheduler.add(instruction1bRoutineBegin());
flowScheduler.add(instruction1bRoutineEachFrame());
flowScheduler.add(instruction1bRoutineEnd());
flowScheduler.add(instruction2RoutineBegin());
flowScheduler.add(instruction2RoutineEachFrame());
flowScheduler.add(instruction2RoutineEnd());
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin, blocksLoopScheduler);
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'beep.wav', 'path': './beep.wav'},
    {'name': 'conditions.xlsx', 'path': './conditions.xlsx'}
  ]
});

function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

function experimentInit() {
  // Initialize components for Routine "Consent"
  ConsentClock = new util.Clock();
  Consent_form = new visual.TextStim({
    win: psychoJS.window,
    name: 'Consent_form',
    text: 'AYDINLATILMIŞ ONAM FORMU\n\nKoç Üniversitesi Psikoloji Bölümü öğretim üyesi Prof. Dr. Fuat Balcı yönetiminde yüksek lisans\nöğrencisi Merve Erdoğan tarafından aksiyon alma hissi konusunda yürütülen araştırmaya katılımınız rica olunmaktadır. Bu çalışmada katılımınız tamamen gönüllülük esasına dayanır. \n\nÇALIŞMANIN ADI: Dikkat ve Aksiyon Alma Hissi\n\nÇALIŞMANIN AMACI\nKoç Üniversitesi tarafından yürütülen bu çalışmanın amacı, aksiyon alma hissini kontrol\neden bilişsel mekanizmayı araştırmaktır.\n\nPROSEDÜRLER\nBu çalışmaya gönüllü katılmak istemeniz halinde yürütülecek çalışmalar şöyledir;\nYaklaşık 45 dakikalık bilgisayar üzerinde yapılacak olan bir davranış deneyine katılmanız\nbeklenmektedir. Bu çalışmada sizden bir tuşa basmanız ve sonrasında oluşan sese sizin sebep olup olmadığınızı değerlendirmeniz istenmektedir.\n\nOnam formunun devamı için herhangi bir tuşa basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Consent_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Consent2"
  Consent2Clock = new util.Clock();
  Consent_text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Consent_text2',
    text: 'OLASI RİSKLER VE RAHATSIZLIKLAR\nDeneyin risk ya da rahatsızlığı yoktur.\n\nTOPLUMA VE/VEYA DENEKLERE OLASI FAYDALARI\nBu çalışmanın amacı aksiyon alma hissini kontrol eden bilişsel mekanizmayı ve etkileyen faktörleri\naraştırmaktır. Çalışmanın sonuçları, bu mekanizma hakkında topluma bilgi sağlayacaktır.\n\nGİZLİLİK\nBu çalışmayla bağlantılı olarak elde edilen ve sizinle özdeşleşmiş her bilgi gizli kalacak, kişilerle\npaylaşılmayacak ve yalnızca sizin izniniz veya kanunun gerektirdiği ölçüde ifşa edilecektir. Gizlilik\ntanımlanmış bir kodlama prosedürüyle sağlanacak ve kod çözümüne erişim yalnızca çalışmanın\nsorumlusu araştırmacıyla sınırlı kalacaktır. Tüm veriler, sınırlı erişime sahip güvenli ve şifreli bir\nveri tabanında tutulacaktır.\n\nOnam formunun devamı için herhangi bir tuşa basınız.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  consent_resp2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Consent3"
  Consent3Clock = new util.Clock();
  Consent_text3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Consent_text3',
    text: 'KATILIM VE AYRILMA\nBu çalışmanın içinde olmak isteyip istemediğinize tamamı ile bağımsız ve etki altında kalmadan\nkarar verebilirsiniz. Bu çalışmaya gönüllü olarak katılmaya karar vermeniz halinde dahi, sahip\nolduğunuz herhangi bir hakkı kaybetmeden veya herhangi bir cezaya maruz kalmadan istediğiniz\nzaman çekilebilirsiniz. Çalışmadan çekilmek isterseniz bir cezası yoktur ve sahip olduğunuz\nfaydaları kaybetmezsiniz.\n\nARAŞTIRMACILARIN KİMLİĞİ\nBu araştırma ile ilgili herhangi bir sorunuz veya endişeniz varsa, lütfen iletişime geçiniz:\nProf. Dr. Fuat Balcı\nKoç Üniversitesi\nT: 0212 338 1138\nE: fbalci@ku.edu.tr\nMerve Erdoğan\nKoç Üniversitesi\nE: merdogan19@ku.edu.tr\n\nYukarıda açıklanan prosedürleri anladım. Sorularım tatmin olacağım şekilde yanıtlandı ve dilediğim\nzaman ayrılma hakkım saklı kalmak koşulu ile bu çalışmaya katılmayı onaylıyorum diyorsanız ‘e’ tuşuna, deneyden çekilmek için ‘h’ tuşuna basınız.\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  consent_resp3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  instruction_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text',
    text: 'Merhaba!\n\nBu deneyde bazı denemelerde ekranda bir sayı belirecek ve bu sayıyı deneme sonuna kadar\naklınızda tutmanız istenecek.\n\nDeneme esnasında, ekranda saat kolu dönen bir saat belirecek.\nBu esnada istediğiniz herhangi bir an "SPACE" tuşuna basmanız ve sonrasında \ntuşa bastığınız an saat kolunun kaçı gösterdiğini belirtmeniz istenecek.\n\nDevam etmek için herhangi bir tuşa basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instruction_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction1b"
  instruction1bClock = new util.Clock();
  instruction_textb = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_textb',
    text: 'Tuşa basış bazı denemelerde bir sese sebep olacak bazı denemelerde olmayacak.\n\nBazı denemelerde tuşa basış anınıza ek olarak tuşa basışın ses oluşumuna sebep olduğunu ne kadar hissettiğinizi değerlendirmeniz istenecek.\n\nHer denemenin sonunda, eğer o deneme başında size sayı gösterilmişse bu sayıyı girmeniz istenecek.\n\nBu sayıyı mümkün olduğunca doğru şekilde hatırlayıp yazmaya çalışmanız bekleniyor olacak.\n\nDevam etmek için herhangi bir tuşa basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instruction_respb = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction2"
  instruction2Clock = new util.Clock();
  instruction_text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text2',
    text: 'ÖNEMLİ HATIRLATMA!\n\nDeneme esnasında saat üzerinde tuşa basış yapacağınız anı önceden belirlememelisiniz.\n\nDeneye başlamak için bilgisayarınızdan ses duyabildiğinize emin olun\nve bilgisayarın sesini 40 olarak ayarlayın lütfen.\n\nHazırsanız boşluk tuşuna basarak deneyi başlatabilirsiniz.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instruction_resp2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_start"
  trial_startClock = new util.Clock();
  block_random = [0, 0, 0, 0, 0, 0, 1];
  effect_block = [1, 1, 1, 2, 2, 2];
  shuffle(effect_block);
  shuffle(block_random);
  block = 0;
  act_block = 0;
  
  // Initialize components for Routine "fix"
  fixClock = new util.Clock();
  fix_cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_cross',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "high_load"
  high_loadClock = new util.Clock();
  high_target1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'high_target1',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  high_target2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'high_target2',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  high_target3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'high_target3',
    text: 'Any text\n\nincluding line breaks',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  high_target4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'high_target4',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.5,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  high_target5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'high_target5',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  high_target6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'high_target6',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "low_load"
  low_loadClock = new util.Clock();
  low_target1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'low_target1',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  low_target2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'low_target2',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  low_target3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'low_target3',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  low_target4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'low_target4',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  low_target5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'low_target5',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  low_target6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'low_target6',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  a = [0, 0.22, 0, (- 0.22)];
  b = [0.22, 0, (- 0.22), 0];
  x = 0;
  random_start = [[0, 0.19], [0.04, 0.18574], [0.06, 0.1828], [0.1, 0.16155], [0.13, 0.13856], [0.15, 0.11662], [0.16, 0.10247], [0.18, 0.06083], [0, (- 0.19)], [0.04, (- 0.18574)], [0.06, (- 0.1828)], [0.1, (- 0.16155)], [0.13, (- 0.13856)], [0.15, (- 0.11662)], [0.16, (- 0.10247)], [0.18, (- 0.06083)], [0, (- 0.19)], [(- 0.04), (- 0.18574)], [(- 0.06), (- 0.1828)], [(- 0.1), (- 0.16155)], [(- 0.13), (- 0.13856)], [(- 0.15), (- 0.11662)], [(- 0.16), (- 0.10247)], [(- 0.18), (- 0.06083)], [0, 0.19], [(- 0.04), 0.18574], [(- 0.06), 0.1828], [(- 0.1), 0.16155], [(- 0.13), 0.13856], [(- 0.15), 0.11662], [(- 0.16), 0.10247], [(- 0.18), 0.06083], [0, 0.19], [0.04, 0.18574], [0.06, 0.1828], [0.1, 0.16155], [0.13, 0.13856], [0.15, 0.11662], [0.16, 0.10247], [0.18, 0.06083], [0, (- 0.19)], [0.04, (- 0.18574)], [0.06, (- 0.1828)], [0.1, (- 0.16155)], [0.13, (- 0.13856)], [0.15, (- 0.11662)], [0.16, (- 0.10247)], [0.18, (- 0.06083)], [0, (- 0.19)], [(- 0.04), (- 0.18574)], [(- 0.06), (- 0.1828)], [(- 0.1), (- 0.16155)], [(- 0.13), (- 0.13856)], [(- 0.15), (- 0.11662)], [(- 0.16), (- 0.10247)], [(- 0.18), (- 0.06083)], [0, 0.19], [(- 0.04), 0.18574], [(- 0.06), 0.1828], [(- 0.1), 0.16155], [(- 0.13), 0.13856], [(- 0.15), 0.11662], [(- 0.16), 0.10247], [(- 0.18), 0.06083], [0, 0.19], [0.04, 0.18574], [0.06, 0.1828], [0.1, 0.16155], [0.13, 0.13856], [0.15, 0.11662], [0.16, 0.10247], [0.18, 0.06083], [0, (- 0.19)], [0.04, (- 0.18574)], [0.06, (- 0.1828)], [0.1, (- 0.16155)], [0.13, (- 0.13856)], [0.15, (- 0.11662)], [0.16, (- 0.10247)], [0.18, (- 0.06083)], [0, (- 0.19)], [(- 0.04), (- 0.18574)], [(- 0.06), (- 0.1828)], [(- 0.1), (- 0.16155)], [(- 0.13), (- 0.13856)], [(- 0.15), (- 0.11662)], [(- 0.16), (- 0.10247)], [(- 0.18), (- 0.06083)], [0, 0.19], [(- 0.04), 0.18574], [(- 0.06), 0.1828], [(- 0.1), 0.16155], [(- 0.13), 0.13856], [(- 0.15), 0.11662], [(- 0.16), 0.10247], [(- 0.18), 0.06083]];
  shuffle(random_start);
  random_stop = linspace(0.3, 0.6, 96);
  shuffle(random_stop);
  trial = 0;
  
  clock_hand = new visual.ShapeStim ({
    win: psychoJS.window, name: 'clock_hand', 
    vertices: [[-[0.2, 0.2][0]/2.0, 0], [+[0.2, 0.2][0]/2.0, 0]],
    ori: 1.0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  circle = new visual.Polygon ({
    win: psychoJS.window, name: 'circle', 
    edges: 100, size:[0.5, 0.5],
    ori: 10, pos: [0, 0],
    lineWidth: 0.02, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0.5, depth: -3, interpolate: true,
  });
  
  min1 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min1', 
    vertices: [[-[0.05, 0.05][0]/2.0, 0], [+[0.05, 0.05][0]/2.0, 0]],
    ori: 0, pos: [0, 0.21],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  min1 = new visual.ShapeStim(win, {"vertices": [[0, 0.195], [0, 0.25]], "lineColor": [(- 1), (- 1), (- 1)], "lineWidth": 2.4});
  
  min2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min2', 
    vertices: [[-[0.05, 0.05][0]/2.0, 0], [+[0.05, 0.05][0]/2.0, 0]],
    ori: 0, pos: [0.21, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  min2 = new visual.ShapeStim(win, {"vertices": [[0.195, 0], [0.25, 0]], "lineColor": [(- 1), (- 1), (- 1)], "lineWidth": 2.4});
  
  min3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min3', 
    vertices: [[-[0.04, 0.04][0]/2.0, 0], [+[0.04, 0.04][0]/2.0, 0]],
    ori: 0, pos: [0, (- 0.21)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -8, interpolate: true,
  });
  
  min3 = new visual.ShapeStim(win, {"vertices": [[0, (- 0.195)], [0, (- 0.25)]], "lineColor": [(- 1), (- 1), (- 1)], "lineWidth": 2.4});
  
  min4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min4', 
    vertices: [[-[0.04, 0.04][0]/2.0, 0], [+[0.04, 0.04][0]/2.0, 0]],
    ori: 0, pos: [(- 0.21), 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -10, interpolate: true,
  });
  
  min1a = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min1a', 
    vertices: [[-[0.03, 0.03][0]/2.0, 0], [+[0.03, 0.03][0]/2.0, 0]],
    ori: 120, pos: [0.122, 0.2],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1, depth: -11, interpolate: true,
  });
  
  min1b = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min1b', 
    vertices: [[-[0.03, 0.03][0]/2.0, 0], [+[0.03, 0.03][0]/2.0, 0]],
    ori: 150, pos: [0.2, 0.122],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -12, interpolate: true,
  });
  
  min2a = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min2a', 
    vertices: [[-[0.03, 0.03][0]/2.0, 0], [+[0.03, 0.03][0]/2.0, 0]],
    ori: 30, pos: [0.2, (- 0.122)],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -13, interpolate: true,
  });
  
  min2b = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min2b', 
    vertices: [[-[0.03, 0.03][0]/2.0, 0], [+[0.03, 0.03][0]/2.0, 0]],
    ori: 60, pos: [0.122, (- 0.2)],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -14, interpolate: true,
  });
  
  min3a = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min3a', 
    vertices: [[-[0.03, 0.03][0]/2.0, 0], [+[0.03, 0.03][0]/2.0, 0]],
    ori: 300, pos: [(- 0.122), (- 0.2)],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -15, interpolate: true,
  });
  
  min3b = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min3b', 
    vertices: [[-[0.03, 0.03][0]/2.0, 0], [+[0.03, 0.03][0]/2.0, 0]],
    ori: 330, pos: [(- 0.2), (- 0.122)],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -16, interpolate: true,
  });
  
  min4a = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min4a', 
    vertices: [[-[0.03, 0.03][0]/2.0, 0], [+[0.03, 0.03][0]/2.0, 0]],
    ori: 30, pos: [(- 0.2), 0.122],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -17, interpolate: true,
  });
  
  min4b = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min4b', 
    vertices: [[-[0.03, 0.03][0]/2.0, 0], [+[0.03, 0.03][0]/2.0, 0]],
    ori: 60, pos: [(- 0.122), 0.2],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -18, interpolate: true,
  });
  
  outcome = new sound.Sound({
    win: psychoJS.window,
    value: 'beep.wav',
    secs: (- 1),
    });
  outcome.setVolume(1);
  min4 = new visual.ShapeStim(win, {"vertices": [[(- 0.195), 0], [(- 0.25), 0]], "lineColor": [(- 1), (- 1), (- 1)], "lineWidth": 2.4});
  
  // Initialize components for Routine "answer"
  answerClock = new util.Clock();
  answer_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'answer_text',
    text: 'Lütfen tuşa basış yaptığınız anı saat üzerinde işaretleyin.\nCevabınızı onaylamak için "Enter" tuşuna basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  circle_answer = new visual.Polygon ({
    win: psychoJS.window, name: 'circle_answer', 
    edges: 100, size:[0.5, 0.5],
    ori: 0, pos: [0, 0],
    lineWidth: 0.02, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0.5, depth: -2, interpolate: true,
  });
  
  answer_click = new core.Mouse({
    win: psychoJS.window,
  });
  answer_click.mouseClock = new util.Clock();
  answer_stableHand = new visual.ShapeStim ({
    win: psychoJS.window, name: 'answer_stableHand', 
    vertices: [[-[0.5, 0.5][0]/2.0, 0], [+[0.5, 0.5][0]/2.0, 0]],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  answer_stableHand = new visual.ShapeStim(win, {"vertices": [[0, 0], [0, 0.19]], "lineColor": [(- 1), (- 1), (- 1)], "fillColor": null, "lineWidth": 2.2});
  
  min1ans = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min1ans', 
    vertices: [[-[0.4, 0.4][0]/2.0, 0], [+[0.4, 0.4][0]/2.0, 0]],
    ori: 0, pos: [0, 0.21],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  min2ans = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min2ans', 
    vertices: [[-[0.4, 0.4][0]/2.0, 0], [+[0.4, 0.4][0]/2.0, 0]],
    ori: 0, pos: [0.21, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -7, interpolate: true,
  });
  
  min3ans = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min3ans', 
    vertices: [[-[0.4, 0.4][0]/2.0, 0], [+[0.4, 0.4][0]/2.0, 0]],
    ori: 0, pos: [0, (- 0.21)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -8, interpolate: true,
  });
  
  min4ans = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min4ans', 
    vertices: [[-[0.4, 0.4][0]/2.0, 0], [+[0.4, 0.4][0]/2.0, 0]],
    ori: 0, pos: [(- 0.21), 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -9, interpolate: true,
  });
  
  min1ans = new visual.ShapeStim(win, {"vertices": [[0, 0.195], [0, 0.25]], "lineColor": [(- 1), (- 1), (- 1)], "lineWidth": 2.4});
  min2ans = new visual.ShapeStim(win, {"vertices": [[0.195, 0], [0.25, 0]], "lineColor": [(- 1), (- 1), (- 1)], "lineWidth": 2.4});
  min3ans = new visual.ShapeStim(win, {"vertices": [[0, (- 0.195)], [0, (- 0.25)]], "lineColor": [(- 1), (- 1), (- 1)], "lineWidth": 2.4});
  min4ans = new visual.ShapeStim(win, {"vertices": [[(- 0.195), 0], [(- 0.25), 0]], "lineColor": [(- 1), (- 1), (- 1)], "lineWidth": 2.4});
  
  min1aAns = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min1aAns', 
    vertices: [[-[0.03, 0.03][0]/2.0, 0], [+[0.03, 0.03][0]/2.0, 0]],
    ori: 120, pos: [0.122, 0.2],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -11, interpolate: true,
  });
  
  min1bAns = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min1bAns', 
    vertices: [[-[0.03, 0.03][0]/2.0, 0], [+[0.03, 0.03][0]/2.0, 0]],
    ori: 150, pos: [0.2, 0.122],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -12, interpolate: true,
  });
  
  min2aAns = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min2aAns', 
    vertices: [[-[0.03, 0.03][0]/2.0, 0], [+[0.03, 0.03][0]/2.0, 0]],
    ori: 30, pos: [0.2, (- 0.122)],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -13, interpolate: true,
  });
  
  min2bAns = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min2bAns', 
    vertices: [[-[0.03, 0.03][0]/2.0, 0], [+[0.03, 0.03][0]/2.0, 0]],
    ori: 60, pos: [0.122, (- 0.2)],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -14, interpolate: true,
  });
  
  min3aAns = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min3aAns', 
    vertices: [[-[0.03, 0.03][0]/2.0, 0], [+[0.03, 0.03][0]/2.0, 0]],
    ori: 300, pos: [(- 0.122), (- 0.2)],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -15, interpolate: true,
  });
  
  min3bAns = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min3bAns', 
    vertices: [[-[0.03, 0.03][0]/2.0, 0], [+[0.03, 0.03][0]/2.0, 0]],
    ori: 330, pos: [(- 0.2), (- 0.122)],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -16, interpolate: true,
  });
  
  min4aAns = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min4aAns', 
    vertices: [[-[0.03, 0.03][0]/2.0, 0], [+[0.03, 0.03][0]/2.0, 0]],
    ori: 30, pos: [(- 0.2), 0.122],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -17, interpolate: true,
  });
  
  min4bAns = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min4bAns', 
    vertices: [[-[0.03, 0.03][0]/2.0, 0], [+[0.03, 0.03][0]/2.0, 0]],
    ori: 60, pos: [(- 0.122), 0.2],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -18, interpolate: true,
  });
  
  // Initialize components for Routine "answer_marked"
  answer_markedClock = new util.Clock();
  pos = [];
  
  marked_answerText = new visual.TextStim({
    win: psychoJS.window,
    name: 'marked_answerText',
    text: 'Lütfen tuşa basış yaptığınız anı saat üzerinde işaretleyin.\nCevabınızı onaylamak için "Enter" tuşuna basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  circle_marked = new visual.Polygon ({
    win: psychoJS.window, name: 'circle_marked', 
    edges: 100, size:[0.5, 0.5],
    ori: 0, pos: [0, 0],
    lineWidth: 0.2, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0.5, depth: -2, interpolate: true,
  });
  
  marker = new visual.Polygon ({
    win: psychoJS.window, name: 'marker', 
    edges: 100, size:[0.01, 0.01],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  marked_clockHand = new visual.ShapeStim ({
    win: psychoJS.window, name: 'marked_clockHand', 
    vertices: [[-[0.5, 0.5][0]/2.0, 0], [+[0.5, 0.5][0]/2.0, 0]],
    ori: 1.0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  changed_answer = new core.Mouse({
    win: psychoJS.window,
  });
  changed_answer.mouseClock = new util.Clock();
  marking_end = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  min1marked = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min1marked', 
    vertices: [[-[0.4, 0.4][0]/2.0, 0], [+[0.4, 0.4][0]/2.0, 0]],
    ori: 0, pos: [0, 0.21],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -7, interpolate: true,
  });
  
  min2marked = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min2marked', 
    vertices: [[-[0.4, 0.4][0]/2.0, 0], [+[0.4, 0.4][0]/2.0, 0]],
    ori: 0, pos: [0.21, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -8, interpolate: true,
  });
  
  min3marked = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min3marked', 
    vertices: [[-[0.4, 0.4][0]/2.0, 0], [+[0.4, 0.4][0]/2.0, 0]],
    ori: 0, pos: [0, (- 0.21)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -9, interpolate: true,
  });
  
  min4marked = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min4marked', 
    vertices: [[-[0.4, 0.4][0]/2.0, 0], [+[0.4, 0.4][0]/2.0, 0]],
    ori: 0, pos: [(- 0.21), 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -10, interpolate: true,
  });
  
  min1marked = new visual.ShapeStim(win, {"vertices": [[0, 0.195], [0, 0.25]], "lineColor": [(- 1), (- 1), (- 1)], "lineWidth": 2.4});
  min2marked = new visual.ShapeStim(win, {"vertices": [[0.195, 0], [0.25, 0]], "lineColor": [(- 1), (- 1), (- 1)], "lineWidth": 2.4});
  min3marked = new visual.ShapeStim(win, {"vertices": [[0, (- 0.195)], [0, (- 0.25)]], "lineColor": [(- 1), (- 1), (- 1)], "lineWidth": 2.4});
  min4marked = new visual.ShapeStim(win, {"vertices": [[(- 0.195), 0], [(- 0.25), 0]], "lineColor": [(- 1), (- 1), (- 1)], "lineWidth": 2.4});
  
  min1amarked = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min1amarked', 
    vertices: [[-[0.03, 0.03][0]/2.0, 0], [+[0.03, 0.03][0]/2.0, 0]],
    ori: 120, pos: [0.122, 0.2],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -12, interpolate: true,
  });
  
  min1bmarked = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min1bmarked', 
    vertices: [[-[0.03, 0.03][0]/2.0, 0], [+[0.03, 0.03][0]/2.0, 0]],
    ori: 150, pos: [0.2, 0.122],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -13, interpolate: true,
  });
  
  min2amarked = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min2amarked', 
    vertices: [[-[0.03, 0.03][0]/2.0, 0], [+[0.03, 0.03][0]/2.0, 0]],
    ori: 30, pos: [0.2, (- 0.122)],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -14, interpolate: true,
  });
  
  min2bmarked = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min2bmarked', 
    vertices: [[-[0.03, 0.03][0]/2.0, 0], [+[0.03, 0.03][0]/2.0, 0]],
    ori: 60, pos: [0.122, (- 0.2)],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -15, interpolate: true,
  });
  
  min3amarked = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min3amarked', 
    vertices: [[-[0.03, 0.03][0]/2.0, 0], [+[0.03, 0.03][0]/2.0, 0]],
    ori: 300, pos: [(- 0.122), (- 0.2)],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -16, interpolate: true,
  });
  
  min3bmarked = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min3bmarked', 
    vertices: [[-[0.03, 0.03][0]/2.0, 0], [+[0.03, 0.03][0]/2.0, 0]],
    ori: 330, pos: [(- 0.2), (- 0.122)],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -17, interpolate: true,
  });
  
  min4amarked = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min4amarked', 
    vertices: [[-[0.03, 0.03][0]/2.0, 0], [+[0.03, 0.03][0]/2.0, 0]],
    ori: 30, pos: [(- 0.2), 0.122],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -18, interpolate: true,
  });
  
  min4bmarked = new visual.ShapeStim ({
    win: psychoJS.window, name: 'min4bmarked', 
    vertices: [[-[0.03, 0.03][0]/2.0, 0], [+[0.03, 0.03][0]/2.0, 0]],
    ori: 60, pos: [(- 0.122), 0.2],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -19, interpolate: true,
  });
  
  // Initialize components for Routine "warning"
  warningClock = new util.Clock();
  warning_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'warning_text',
    text: 'Çok fazla deneme yaptınız.\n\nLütfen emin olduktan sonra işaretleyiniz.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "explicit_test"
  explicit_testClock = new util.Clock();
  slider_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'slider_text',
    text: 'Sese ne kadar sizin tuşa basmanızın sebep olduğunu hissettiniz?\nAşağıda işaretleyin ve <Enter> tuşuna basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    size: [1.0, 0.05], pos: [0, (- 0.25)], units: 'height',
    labels: ['Hic', 'Tamamen'], ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    granularity: 0, style: [visual.Slider.Style.RATING],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, 
    flip: false,
  });
  
  slider_ending = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "memory_question"
  memory_questionClock = new util.Clock();
  mem_question_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'mem_question_text',
    text: 'Lütfen deneme başında gösterilen sayıyı giriniz:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  mem_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  displayText = new visual.TextStim({
    win: psychoJS.window,
    name: 'displayText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "block_end"
  block_endClock = new util.Clock();
  block1_endText = new visual.TextStim({
    win: psychoJS.window,
    name: 'block1_endText',
    text: '1. blok bitti.\n\nLütfen devam etmek için herhangi bir tuşa basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  block1_endKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  block2_endTest = new visual.TextStim({
    win: psychoJS.window,
    name: 'block2_endTest',
    text: '2. blok bitti.\n\nLütfen devam etmek için herhangi bir tuşa basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  block3_endText = new visual.TextStim({
    win: psychoJS.window,
    name: 'block3_endText',
    text: '3. blok bitti.\n\nLütfen devam etmek için herhangi bir tuşa basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  block4_endText = new visual.TextStim({
    win: psychoJS.window,
    name: 'block4_endText',
    text: '4. blok bitti.\n\nLütfen devam etmek için herhangi bir tuşa basınız.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  block5_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'block5_end',
    text: 'Deney bitti!\n\nKatılımınız için teşekkürler!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function ConsentRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Consent'-------
    t = 0;
    ConsentClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Consent_resp.keys = undefined;
    Consent_resp.rt = undefined;
    _Consent_resp_allKeys = [];
    // keep track of which components have finished
    ConsentComponents = [];
    ConsentComponents.push(Consent_form);
    ConsentComponents.push(Consent_resp);
    
    ConsentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}

function ConsentRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Consent'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = ConsentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Consent_form* updates
    if (t >= 0.0 && Consent_form.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Consent_form.tStart = t;  // (not accounting for frame time here)
      Consent_form.frameNStart = frameN;  // exact frame index
      
      Consent_form.setAutoDraw(true);
    }

    
    // *Consent_resp* updates
    if (t >= 0.0 && Consent_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Consent_resp.tStart = t;  // (not accounting for frame time here)
      Consent_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Consent_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Consent_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Consent_resp.clearEvents(); });
    }

    if (Consent_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Consent_resp.getKeys({keyList: [], waitRelease: false});
      _Consent_resp_allKeys = _Consent_resp_allKeys.concat(theseKeys);
      if (_Consent_resp_allKeys.length > 0) {
        Consent_resp.keys = _Consent_resp_allKeys[_Consent_resp_allKeys.length - 1].name;  // just the last key pressed
        Consent_resp.rt = _Consent_resp_allKeys[_Consent_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ConsentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ConsentRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Consent'-------
    ConsentComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Consent_resp.keys', Consent_resp.keys);
    if (typeof Consent_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Consent_resp.rt', Consent_resp.rt);
        routineTimer.reset();
        }
    
    Consent_resp.stop();
    // the Routine "Consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function Consent2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Consent2'-------
    t = 0;
    Consent2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    consent_resp2.keys = undefined;
    consent_resp2.rt = undefined;
    _consent_resp2_allKeys = [];
    // keep track of which components have finished
    Consent2Components = [];
    Consent2Components.push(Consent_text2);
    Consent2Components.push(consent_resp2);
    
    Consent2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}

function Consent2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Consent2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Consent2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Consent_text2* updates
    if (t >= 0.0 && Consent_text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Consent_text2.tStart = t;  // (not accounting for frame time here)
      Consent_text2.frameNStart = frameN;  // exact frame index
      
      Consent_text2.setAutoDraw(true);
    }

    
    // *consent_resp2* updates
    if (t >= 0.0 && consent_resp2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_resp2.tStart = t;  // (not accounting for frame time here)
      consent_resp2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { consent_resp2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { consent_resp2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { consent_resp2.clearEvents(); });
    }

    if (consent_resp2.status === PsychoJS.Status.STARTED) {
      let theseKeys = consent_resp2.getKeys({keyList: [], waitRelease: false});
      _consent_resp2_allKeys = _consent_resp2_allKeys.concat(theseKeys);
      if (_consent_resp2_allKeys.length > 0) {
        consent_resp2.keys = _consent_resp2_allKeys[_consent_resp2_allKeys.length - 1].name;  // just the last key pressed
        consent_resp2.rt = _consent_resp2_allKeys[_consent_resp2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Consent2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Consent2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Consent2'-------
    Consent2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Consent2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function Consent3RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Consent3'-------
    t = 0;
    Consent3Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    consent_resp3.keys = undefined;
    consent_resp3.rt = undefined;
    _consent_resp3_allKeys = [];
    // keep track of which components have finished
    Consent3Components = [];
    Consent3Components.push(Consent_text3);
    Consent3Components.push(consent_resp3);
    
    Consent3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}

function Consent3RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Consent3'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Consent3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Consent_text3* updates
    if (t >= 0.0 && Consent_text3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Consent_text3.tStart = t;  // (not accounting for frame time here)
      Consent_text3.frameNStart = frameN;  // exact frame index
      
      Consent_text3.setAutoDraw(true);
    }

    
    // *consent_resp3* updates
    if (t >= 0.0 && consent_resp3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_resp3.tStart = t;  // (not accounting for frame time here)
      consent_resp3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { consent_resp3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { consent_resp3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { consent_resp3.clearEvents(); });
    }

    if (consent_resp3.status === PsychoJS.Status.STARTED) {
      let theseKeys = consent_resp3.getKeys({keyList: [], waitRelease: false});
      _consent_resp3_allKeys = _consent_resp3_allKeys.concat(theseKeys);
      if (_consent_resp3_allKeys.length > 0) {
        consent_resp3.keys = _consent_resp3_allKeys[_consent_resp3_allKeys.length - 1].name;  // just the last key pressed
        consent_resp3.rt = _consent_resp3_allKeys[_consent_resp3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Consent3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Consent3RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Consent3'-------
    Consent3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Consent3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function instructionRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instruction'-------
    t = 0;
    instructionClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instruction_resp.keys = undefined;
    instruction_resp.rt = undefined;
    _instruction_resp_allKeys = [];
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(instruction_text);
    instructionComponents.push(instruction_resp);
    
    instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}

function instructionRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instruction'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_text* updates
    if (t >= 0.0 && instruction_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text.tStart = t;  // (not accounting for frame time here)
      instruction_text.frameNStart = frameN;  // exact frame index
      
      instruction_text.setAutoDraw(true);
    }

    
    // *instruction_resp* updates
    if (t >= 0.0 && instruction_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_resp.tStart = t;  // (not accounting for frame time here)
      instruction_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruction_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruction_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruction_resp.clearEvents(); });
    }

    if (instruction_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruction_resp.getKeys({keyList: [], waitRelease: false});
      _instruction_resp_allKeys = _instruction_resp_allKeys.concat(theseKeys);
      if (_instruction_resp_allKeys.length > 0) {
        instruction_resp.keys = _instruction_resp_allKeys[_instruction_resp_allKeys.length - 1].name;  // just the last key pressed
        instruction_resp.rt = _instruction_resp_allKeys[_instruction_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function instructionRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instruction'-------
    instructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function instruction1bRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instruction1b'-------
    t = 0;
    instruction1bClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instruction_respb.keys = undefined;
    instruction_respb.rt = undefined;
    _instruction_respb_allKeys = [];
    // keep track of which components have finished
    instruction1bComponents = [];
    instruction1bComponents.push(instruction_textb);
    instruction1bComponents.push(instruction_respb);
    
    instruction1bComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}

function instruction1bRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instruction1b'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instruction1bClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_textb* updates
    if (t >= 0.0 && instruction_textb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_textb.tStart = t;  // (not accounting for frame time here)
      instruction_textb.frameNStart = frameN;  // exact frame index
      
      instruction_textb.setAutoDraw(true);
    }

    
    // *instruction_respb* updates
    if (t >= 0.0 && instruction_respb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_respb.tStart = t;  // (not accounting for frame time here)
      instruction_respb.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruction_respb.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruction_respb.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruction_respb.clearEvents(); });
    }

    if (instruction_respb.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruction_respb.getKeys({keyList: [], waitRelease: false});
      _instruction_respb_allKeys = _instruction_respb_allKeys.concat(theseKeys);
      if (_instruction_respb_allKeys.length > 0) {
        instruction_respb.keys = _instruction_respb_allKeys[_instruction_respb_allKeys.length - 1].name;  // just the last key pressed
        instruction_respb.rt = _instruction_respb_allKeys[_instruction_respb_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instruction1bComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function instruction1bRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instruction1b'-------
    instruction1bComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "instruction1b" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function instruction2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instruction2'-------
    t = 0;
    instruction2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instruction_resp2.keys = undefined;
    instruction_resp2.rt = undefined;
    _instruction_resp2_allKeys = [];
    // keep track of which components have finished
    instruction2Components = [];
    instruction2Components.push(instruction_text2);
    instruction2Components.push(instruction_resp2);
    
    instruction2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}

function instruction2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instruction2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instruction2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_text2* updates
    if (t >= 0.0 && instruction_text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text2.tStart = t;  // (not accounting for frame time here)
      instruction_text2.frameNStart = frameN;  // exact frame index
      
      instruction_text2.setAutoDraw(true);
    }

    
    // *instruction_resp2* updates
    if (t >= 0.0 && instruction_resp2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_resp2.tStart = t;  // (not accounting for frame time here)
      instruction_resp2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruction_resp2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruction_resp2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruction_resp2.clearEvents(); });
    }

    if (instruction_resp2.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruction_resp2.getKeys({keyList: ['space'], waitRelease: false});
      _instruction_resp2_allKeys = _instruction_resp2_allKeys.concat(theseKeys);
      if (_instruction_resp2_allKeys.length > 0) {
        instruction_resp2.keys = _instruction_resp2_allKeys[_instruction_resp2_allKeys.length - 1].name;  // just the last key pressed
        instruction_resp2.rt = _instruction_resp2_allKeys[_instruction_resp2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instruction2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function instruction2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instruction2'-------
    instruction2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "instruction2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function blocksLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  blocks = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 5, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'blocks'
  });
  psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
  currentLoop = blocks;  // we're now the current loop

  // Schedule all the trials in the trialList:
  blocks.forEach(function() {
    const snapshot = blocks.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    const conditionLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(conditionLoopBegin, conditionLoopScheduler);
    thisScheduler.add(conditionLoopScheduler);
    thisScheduler.add(conditionLoopEnd);
    thisScheduler.add(block_endRoutineBegin(snapshot));
    thisScheduler.add(block_endRoutineEachFrame(snapshot));
    thisScheduler.add(block_endRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}

function conditionLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  condition = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions.xlsx',
    seed: undefined, name: 'condition'
  });
  psychoJS.experiment.addLoop(condition); // add the loop to the experiment
  currentLoop = condition;  // we're now the current loop

  // Schedule all the trials in the trialList:
  condition.forEach(function() {
    const snapshot = condition.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trial_startRoutineBegin(snapshot));
    thisScheduler.add(trial_startRoutineEachFrame(snapshot));
    thisScheduler.add(trial_startRoutineEnd(snapshot));
    thisScheduler.add(fixRoutineBegin(snapshot));
    thisScheduler.add(fixRoutineEachFrame(snapshot));
    thisScheduler.add(fixRoutineEnd(snapshot));
    thisScheduler.add(high_loadRoutineBegin(snapshot));
    thisScheduler.add(high_loadRoutineEachFrame(snapshot));
    thisScheduler.add(high_loadRoutineEnd(snapshot));
    thisScheduler.add(low_loadRoutineBegin(snapshot));
    thisScheduler.add(low_loadRoutineEachFrame(snapshot));
    thisScheduler.add(low_loadRoutineEnd(snapshot));
    thisScheduler.add(trialRoutineBegin(snapshot));
    thisScheduler.add(trialRoutineEachFrame(snapshot));
    thisScheduler.add(trialRoutineEnd(snapshot));
    thisScheduler.add(answerRoutineBegin(snapshot));
    thisScheduler.add(answerRoutineEachFrame(snapshot));
    thisScheduler.add(answerRoutineEnd(snapshot));
    const marker_changeLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(marker_changeLoopBegin, marker_changeLoopScheduler);
    thisScheduler.add(marker_changeLoopScheduler);
    thisScheduler.add(marker_changeLoopEnd);
    thisScheduler.add(warningRoutineBegin(snapshot));
    thisScheduler.add(warningRoutineEachFrame(snapshot));
    thisScheduler.add(warningRoutineEnd(snapshot));
    thisScheduler.add(explicit_testRoutineBegin(snapshot));
    thisScheduler.add(explicit_testRoutineEachFrame(snapshot));
    thisScheduler.add(explicit_testRoutineEnd(snapshot));
    thisScheduler.add(memory_questionRoutineBegin(snapshot));
    thisScheduler.add(memory_questionRoutineEachFrame(snapshot));
    thisScheduler.add(memory_questionRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}

function marker_changeLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  marker_change = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 6, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'marker_change'
  });
  psychoJS.experiment.addLoop(marker_change); // add the loop to the experiment
  currentLoop = marker_change;  // we're now the current loop

  // Schedule all the trials in the trialList:
  marker_change.forEach(function() {
    const snapshot = marker_change.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(answer_markedRoutineBegin(snapshot));
    thisScheduler.add(answer_markedRoutineEachFrame(snapshot));
    thisScheduler.add(answer_markedRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}

function marker_changeLoopEnd() {
  psychoJS.experiment.removeLoop(marker_change);

  return Scheduler.Event.NEXT;
}

function conditionLoopEnd() {
  psychoJS.experiment.removeLoop(condition);

  return Scheduler.Event.NEXT;
}

function blocksLoopEnd() {
  psychoJS.experiment.removeLoop(blocks);

  return Scheduler.Event.NEXT;
}

function trial_startRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial_start'-------
    t = 0;
    trial_startClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    trial_startComponents = [];
    
    trial_startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}

function trial_startRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial_start'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trial_startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trial_startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function trial_startRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial_start'-------
    trial_startComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "trial_start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function fixRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'fix'-------
    t = 0;
    fixClock.reset(); // clock
    frameN = -1;
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixComponents = [];
    fixComponents.push(fix_cross);
    
    fixComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}

function fixRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'fix'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = fixClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_cross* updates
    if (t >= 0.0 && fix_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_cross.tStart = t;  // (not accounting for frame time here)
      fix_cross.frameNStart = frameN;  // exact frame index
      
      fix_cross.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_cross.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fixComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function fixRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'fix'-------
    fixComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}

function high_loadRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'high_load'-------
    t = 0;
    high_loadClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    tStart = t;
    
    high_target1.setText(mem_target1);
    high_target2.setText(mem_target2);
    high_target4.setText(mem_target3);
    high_target5.setText(mem_target5);
    high_target6.setText(mem_target6);
    // keep track of which components have finished
    high_loadComponents = [];
    high_loadComponents.push(high_target1);
    high_loadComponents.push(high_target2);
    high_loadComponents.push(high_target3);
    high_loadComponents.push(high_target4);
    high_loadComponents.push(high_target5);
    high_loadComponents.push(high_target6);
    
    high_loadComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}

function high_loadRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'high_load'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = high_loadClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (((high === 0) || (block_random[block] === 1))) {
        continueRoutine = false;
    }
    if ((t > (tStart + 3))) {
        continueRoutine = false;
    }
    
    
    // *high_target1* updates
    if (((act_block == 0)) && high_target1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      high_target1.tStart = t;  // (not accounting for frame time here)
      high_target1.frameNStart = frameN;  // exact frame index
      
      high_target1.setAutoDraw(true);
    }

    if (high_target1.status === PsychoJS.Status.STARTED && t >= (high_target1.tStart + 3)) {
      high_target1.setAutoDraw(false);
    }
    
    // *high_target2* updates
    if (((act_block == 1)) && high_target2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      high_target2.tStart = t;  // (not accounting for frame time here)
      high_target2.frameNStart = frameN;  // exact frame index
      
      high_target2.setAutoDraw(true);
    }

    if (high_target2.status === PsychoJS.Status.STARTED && t >= (high_target2.tStart + 3)) {
      high_target2.setAutoDraw(false);
    }
    
    // *high_target3* updates
    if (((act_block == 2)) && high_target3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      high_target3.tStart = t;  // (not accounting for frame time here)
      high_target3.frameNStart = frameN;  // exact frame index
      
      high_target3.setAutoDraw(true);
    }

    if (high_target3.status === PsychoJS.Status.STARTED && t >= (high_target3.tStart + 3)) {
      high_target3.setAutoDraw(false);
    }
    
    // *high_target4* updates
    if (((act_block == 3)) && high_target4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      high_target4.tStart = t;  // (not accounting for frame time here)
      high_target4.frameNStart = frameN;  // exact frame index
      
      high_target4.setAutoDraw(true);
    }

    if (high_target4.status === PsychoJS.Status.STARTED && t >= (high_target4.tStart + 3)) {
      high_target4.setAutoDraw(false);
    }
    
    // *high_target5* updates
    if (((act_block == 4)) && high_target5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      high_target5.tStart = t;  // (not accounting for frame time here)
      high_target5.frameNStart = frameN;  // exact frame index
      
      high_target5.setAutoDraw(true);
    }

    if (high_target5.status === PsychoJS.Status.STARTED && t >= (high_target5.tStart + 3)) {
      high_target5.setAutoDraw(false);
    }
    
    // *high_target6* updates
    if (((act_block == 5)) && high_target6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      high_target6.tStart = t;  // (not accounting for frame time here)
      high_target6.frameNStart = frameN;  // exact frame index
      
      high_target6.setAutoDraw(true);
    }

    if (high_target6.status === PsychoJS.Status.STARTED && t >= (high_target6.tStart + 3)) {
      high_target6.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    high_loadComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function high_loadRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'high_load'-------
    high_loadComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "high_load" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function low_loadRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'low_load'-------
    t = 0;
    low_loadClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    tStart = t;
    
    low_target1.setText(mem_target1);
    low_target2.setText(mem_target2);
    low_target3.setText(mem_target3);
    low_target4.setText(mem_target4);
    low_target5.setText(mem_target5);
    low_target6.setText(mem_target6);
    // keep track of which components have finished
    low_loadComponents = [];
    low_loadComponents.push(low_target1);
    low_loadComponents.push(low_target2);
    low_loadComponents.push(low_target3);
    low_loadComponents.push(low_target4);
    low_loadComponents.push(low_target5);
    low_loadComponents.push(low_target6);
    
    low_loadComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}

function low_loadRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'low_load'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = low_loadClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (((high === 1) || (block_random[block] === 1))) {
        continueRoutine = false;
    }
    if ((t > (tStart + 3))) {
        continueRoutine = false;
    }
    
    
    // *low_target1* updates
    if (((act_block == 0)) && low_target1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      low_target1.tStart = t;  // (not accounting for frame time here)
      low_target1.frameNStart = frameN;  // exact frame index
      
      low_target1.setAutoDraw(true);
    }

    if (low_target1.status === PsychoJS.Status.STARTED && t >= (low_target1.tStart + 3)) {
      low_target1.setAutoDraw(false);
    }
    
    // *low_target2* updates
    if (((act_block == 1)) && low_target2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      low_target2.tStart = t;  // (not accounting for frame time here)
      low_target2.frameNStart = frameN;  // exact frame index
      
      low_target2.setAutoDraw(true);
    }

    if (low_target2.status === PsychoJS.Status.STARTED && t >= (low_target2.tStart + 3)) {
      low_target2.setAutoDraw(false);
    }
    
    // *low_target3* updates
    if (((act_block == 2)) && low_target3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      low_target3.tStart = t;  // (not accounting for frame time here)
      low_target3.frameNStart = frameN;  // exact frame index
      
      low_target3.setAutoDraw(true);
    }

    if (low_target3.status === PsychoJS.Status.STARTED && t >= (low_target3.tStart + 3)) {
      low_target3.setAutoDraw(false);
    }
    
    // *low_target4* updates
    if (((act_block == 3)) && low_target4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      low_target4.tStart = t;  // (not accounting for frame time here)
      low_target4.frameNStart = frameN;  // exact frame index
      
      low_target4.setAutoDraw(true);
    }

    if (low_target4.status === PsychoJS.Status.STARTED && t >= (low_target4.tStart + 3)) {
      low_target4.setAutoDraw(false);
    }
    
    // *low_target5* updates
    if (((act_block == 4)) && low_target5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      low_target5.tStart = t;  // (not accounting for frame time here)
      low_target5.frameNStart = frameN;  // exact frame index
      
      low_target5.setAutoDraw(true);
    }

    if (low_target5.status === PsychoJS.Status.STARTED && t >= (low_target5.tStart + 3)) {
      low_target5.setAutoDraw(false);
    }
    
    // *low_target6* updates
    if (((act_block == 5)) && low_target6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      low_target6.tStart = t;  // (not accounting for frame time here)
      low_target6.frameNStart = frameN;  // exact frame index
      
      low_target6.setAutoDraw(true);
    }

    if (low_target6.status === PsychoJS.Status.STARTED && t >= (low_target6.tStart + 3)) {
      low_target6.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    low_loadComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function low_loadRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'low_load'-------
    low_loadComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "low_load" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    pressed = false;
    pressTime = Number.parseFloat("inf");
    
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    clock_hand = new visual.ShapeStim(win, {"vertices": [[0, 0], random_start[trial]], "lineColor": [(- 1), (- 1), (- 1)], "fillColor": null, "lineWidth": 2.2, "autoLog": false});
    
    outcome.setVolume(1);
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(clock_hand);
    trialComponents.push(key_resp);
    trialComponents.push(circle);
    trialComponents.push(min1);
    trialComponents.push(min2);
    trialComponents.push(min3);
    trialComponents.push(min4);
    trialComponents.push(min1a);
    trialComponents.push(min1b);
    trialComponents.push(min2a);
    trialComponents.push(min2b);
    trialComponents.push(min3a);
    trialComponents.push(min3b);
    trialComponents.push(min4a);
    trialComponents.push(min4b);
    trialComponents.push(outcome);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}

function trialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (((pressed === false) && (key_resp.keys === "space"))) {
        pressed = true;
        pressTime = t;
    }
    if ((t > (pressTime + random_stop[trial]))) {
        continueRoutine = false;
    }
    
    
    // *clock_hand* updates
    if (t >= 0.0 && clock_hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clock_hand.tStart = t;  // (not accounting for frame time here)
      clock_hand.frameNStart = frameN;  // exact frame index
      
      clock_hand.setAutoDraw(true);
    }

    
    if (clock_hand.status === PsychoJS.Status.STARTED){ // only update if being drawn
      clock_hand.setOri((t * 140.62));
    }
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
      }
    }
    
    
    // *circle* updates
    if (t >= 0.0 && circle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      circle.tStart = t;  // (not accounting for frame time here)
      circle.frameNStart = frameN;  // exact frame index
      
      circle.setAutoDraw(true);
    }

    
    // *min1* updates
    if (t >= 0.0 && min1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min1.tStart = t;  // (not accounting for frame time here)
      min1.frameNStart = frameN;  // exact frame index
      
      min1.setAutoDraw(true);
    }

    
    // *min2* updates
    if (t >= 0.0 && min2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min2.tStart = t;  // (not accounting for frame time here)
      min2.frameNStart = frameN;  // exact frame index
      
      min2.setAutoDraw(true);
    }

    
    // *min3* updates
    if (t >= 0.0 && min3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min3.tStart = t;  // (not accounting for frame time here)
      min3.frameNStart = frameN;  // exact frame index
      
      min3.setAutoDraw(true);
    }

    
    // *min4* updates
    if (t >= 0.0 && min4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min4.tStart = t;  // (not accounting for frame time here)
      min4.frameNStart = frameN;  // exact frame index
      
      min4.setAutoDraw(true);
    }

    
    // *min1a* updates
    if (t >= 0.0 && min1a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min1a.tStart = t;  // (not accounting for frame time here)
      min1a.frameNStart = frameN;  // exact frame index
      
      min1a.setAutoDraw(true);
    }

    
    // *min1b* updates
    if (t >= 0.0 && min1b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min1b.tStart = t;  // (not accounting for frame time here)
      min1b.frameNStart = frameN;  // exact frame index
      
      min1b.setAutoDraw(true);
    }

    
    // *min2a* updates
    if (t >= 0.0 && min2a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min2a.tStart = t;  // (not accounting for frame time here)
      min2a.frameNStart = frameN;  // exact frame index
      
      min2a.setAutoDraw(true);
    }

    
    // *min2b* updates
    if (t >= 0.0 && min2b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min2b.tStart = t;  // (not accounting for frame time here)
      min2b.frameNStart = frameN;  // exact frame index
      
      min2b.setAutoDraw(true);
    }

    
    // *min3a* updates
    if (t >= 0.0 && min3a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min3a.tStart = t;  // (not accounting for frame time here)
      min3a.frameNStart = frameN;  // exact frame index
      
      min3a.setAutoDraw(true);
    }

    
    // *min3b* updates
    if (t >= 0.0 && min3b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min3b.tStart = t;  // (not accounting for frame time here)
      min3b.frameNStart = frameN;  // exact frame index
      
      min3b.setAutoDraw(true);
    }

    
    // *min4a* updates
    if (t >= 0.0 && min4a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min4a.tStart = t;  // (not accounting for frame time here)
      min4a.frameNStart = frameN;  // exact frame index
      
      min4a.setAutoDraw(true);
    }

    
    // *min4b* updates
    if (t >= 0.0 && min4b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min4b.tStart = t;  // (not accounting for frame time here)
      min4b.frameNStart = frameN;  // exact frame index
      
      min4b.setAutoDraw(true);
    }

    // start/stop outcome
    if ((((pressed and (pressTime + 0.25) and (effect1 == 1) and (effect_block[act_block] == 1) and (block_random[block] == 0)) or (pressed and (pressTime + 0.25) and (effect2 == 1) and (effect_block[act_block] == 2) and (block_random[block] == 0)))) && outcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      outcome.tStart = t;  // (not accounting for frame time here)
      outcome.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ outcome.play(); });  // screen flip
      outcome.status = PsychoJS.Status.STARTED;
    }
    if (t >= (outcome.getDuration() + outcome.tStart)     && outcome.status === PsychoJS.Status.STARTED) {
      outcome.stop();  // stop the sound (if longer than duration)
      outcome.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        }
    
    key_resp.stop();
    trial = (trial + 1);
    
    outcome.stop();  // ensure sound has stopped at end of routine
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function answerRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'answer'-------
    t = 0;
    answerClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    clock_hand_answer = new visual.ShapeStim(win, {"vertices": [[0, 0], [0, 0.22]], "lineColor": [(- 1), (- 1), (- 1)], "fillColor": null, "lineWidth": 2.2, "autoLog": false});
    marking = 0;
    
    // setup some python lists for storing info about the answer_click
    // current position of the mouse:
    answer_click.x = [];
    answer_click.y = [];
    answer_click.leftButton = [];
    answer_click.midButton = [];
    answer_click.rightButton = [];
    answer_click.time = [];
    answer_click.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    answerComponents = [];
    answerComponents.push(answer_text);
    answerComponents.push(circle_answer);
    answerComponents.push(answer_click);
    answerComponents.push(answer_stableHand);
    answerComponents.push(min1ans);
    answerComponents.push(min2ans);
    answerComponents.push(min3ans);
    answerComponents.push(min4ans);
    answerComponents.push(min1aAns);
    answerComponents.push(min1bAns);
    answerComponents.push(min2aAns);
    answerComponents.push(min2bAns);
    answerComponents.push(min3aAns);
    answerComponents.push(min3bAns);
    answerComponents.push(min4aAns);
    answerComponents.push(min4bAns);
    
    answerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}

function answerRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'answer'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = answerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *answer_text* updates
    if (t >= 0.0 && answer_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      answer_text.tStart = t;  // (not accounting for frame time here)
      answer_text.frameNStart = frameN;  // exact frame index
      
      answer_text.setAutoDraw(true);
    }

    
    // *circle_answer* updates
    if (t >= 0.0 && circle_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      circle_answer.tStart = t;  // (not accounting for frame time here)
      circle_answer.frameNStart = frameN;  // exact frame index
      
      circle_answer.setAutoDraw(true);
    }

    // *answer_click* updates
    if (t >= 0.0 && answer_click.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      answer_click.tStart = t;  // (not accounting for frame time here)
      answer_click.frameNStart = frameN;  // exact frame index
      
      answer_click.status = PsychoJS.Status.STARTED;
      answer_click.mouseClock.reset();
      prevButtonState = answer_click.getPressed();  // if button is down already this ISN'T a new click
      }
    if (answer_click.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      let buttons = answer_click.getPressed();
      if (!buttons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = buttons;
        if (buttons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          const xys = answer_click.getPos();
          answer_click.x.push(xys[0]);
          answer_click.y.push(xys[1]);
          answer_click.leftButton.push(buttons[0]);
          answer_click.midButton.push(buttons[1]);
          answer_click.rightButton.push(buttons[2]);
          answer_click.time.push(answer_click.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [$circle_answer]) {
            if (obj.contains(answer_click)) {
              gotValidClick = true;
              answer_click.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *answer_stableHand* updates
    if (t >= 0.0 && answer_stableHand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      answer_stableHand.tStart = t;  // (not accounting for frame time here)
      answer_stableHand.frameNStart = frameN;  // exact frame index
      
      answer_stableHand.setAutoDraw(true);
    }

    
    // *min1ans* updates
    if (t >= 0.0 && min1ans.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min1ans.tStart = t;  // (not accounting for frame time here)
      min1ans.frameNStart = frameN;  // exact frame index
      
      min1ans.setAutoDraw(true);
    }

    
    // *min2ans* updates
    if (t >= 0.0 && min2ans.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min2ans.tStart = t;  // (not accounting for frame time here)
      min2ans.frameNStart = frameN;  // exact frame index
      
      min2ans.setAutoDraw(true);
    }

    
    // *min3ans* updates
    if (t >= 0.0 && min3ans.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min3ans.tStart = t;  // (not accounting for frame time here)
      min3ans.frameNStart = frameN;  // exact frame index
      
      min3ans.setAutoDraw(true);
    }

    
    // *min4ans* updates
    if (t >= 0.0 && min4ans.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min4ans.tStart = t;  // (not accounting for frame time here)
      min4ans.frameNStart = frameN;  // exact frame index
      
      min4ans.setAutoDraw(true);
    }

    
    // *min1aAns* updates
    if (t >= 0.0 && min1aAns.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min1aAns.tStart = t;  // (not accounting for frame time here)
      min1aAns.frameNStart = frameN;  // exact frame index
      
      min1aAns.setAutoDraw(true);
    }

    
    // *min1bAns* updates
    if (t >= 0.0 && min1bAns.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min1bAns.tStart = t;  // (not accounting for frame time here)
      min1bAns.frameNStart = frameN;  // exact frame index
      
      min1bAns.setAutoDraw(true);
    }

    
    // *min2aAns* updates
    if (t >= 0.0 && min2aAns.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min2aAns.tStart = t;  // (not accounting for frame time here)
      min2aAns.frameNStart = frameN;  // exact frame index
      
      min2aAns.setAutoDraw(true);
    }

    
    // *min2bAns* updates
    if (t >= 0.0 && min2bAns.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min2bAns.tStart = t;  // (not accounting for frame time here)
      min2bAns.frameNStart = frameN;  // exact frame index
      
      min2bAns.setAutoDraw(true);
    }

    
    // *min3aAns* updates
    if (t >= 0.0 && min3aAns.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min3aAns.tStart = t;  // (not accounting for frame time here)
      min3aAns.frameNStart = frameN;  // exact frame index
      
      min3aAns.setAutoDraw(true);
    }

    
    // *min3bAns* updates
    if (t >= 0.0 && min3bAns.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min3bAns.tStart = t;  // (not accounting for frame time here)
      min3bAns.frameNStart = frameN;  // exact frame index
      
      min3bAns.setAutoDraw(true);
    }

    
    // *min4aAns* updates
    if (t >= 0.0 && min4aAns.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min4aAns.tStart = t;  // (not accounting for frame time here)
      min4aAns.frameNStart = frameN;  // exact frame index
      
      min4aAns.setAutoDraw(true);
    }

    
    // *min4bAns* updates
    if (t >= 0.0 && min4bAns.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min4bAns.tStart = t;  // (not accounting for frame time here)
      min4bAns.frameNStart = frameN;  // exact frame index
      
      min4bAns.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    answerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function answerRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'answer'-------
    answerComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    marking = 1;
    
    // store data for thisExp (ExperimentHandler)
    if (answer_click.x) {  psychoJS.experiment.addData('answer_click.x', answer_click.x[0])};
    if (answer_click.y) {  psychoJS.experiment.addData('answer_click.y', answer_click.y[0])};
    if (answer_click.leftButton) {  psychoJS.experiment.addData('answer_click.leftButton', answer_click.leftButton[0])};
    if (answer_click.midButton) {  psychoJS.experiment.addData('answer_click.midButton', answer_click.midButton[0])};
    if (answer_click.rightButton) {  psychoJS.experiment.addData('answer_click.rightButton', answer_click.rightButton[0])};
    if (answer_click.time) {  psychoJS.experiment.addData('answer_click.time', answer_click.time[0])};
    if (answer_click.clicked_name) {  psychoJS.experiment.addData('answer_click.clicked_name', answer_click.clicked_name[0])};
    
    // the Routine "answer" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function answer_markedRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'answer_marked'-------
    t = 0;
    answer_markedClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if ((marking === 1)) {
        pos = [answer_click.getPos()[0], answer_click.getPos()[1]];
    }
    if ((marking > 1)) {
        pos = [changed_answer.getPos()[0], changed_answer.getPos()[1]];
    }
    
    marker.setPos(pos);
    marked_clockHand.setOri(0);
    // setup some python lists for storing info about the changed_answer
    // current position of the mouse:
    changed_answer.x = [];
    changed_answer.y = [];
    changed_answer.leftButton = [];
    changed_answer.midButton = [];
    changed_answer.rightButton = [];
    changed_answer.time = [];
    changed_answer.clicked_name = [];
    gotValidClick = false; // until a click is received
    marking_end.keys = undefined;
    marking_end.rt = undefined;
    _marking_end_allKeys = [];
    // keep track of which components have finished
    answer_markedComponents = [];
    answer_markedComponents.push(marked_answerText);
    answer_markedComponents.push(circle_marked);
    answer_markedComponents.push(marker);
    answer_markedComponents.push(marked_clockHand);
    answer_markedComponents.push(changed_answer);
    answer_markedComponents.push(marking_end);
    answer_markedComponents.push(min1marked);
    answer_markedComponents.push(min2marked);
    answer_markedComponents.push(min3marked);
    answer_markedComponents.push(min4marked);
    answer_markedComponents.push(min1amarked);
    answer_markedComponents.push(min1bmarked);
    answer_markedComponents.push(min2amarked);
    answer_markedComponents.push(min2bmarked);
    answer_markedComponents.push(min3amarked);
    answer_markedComponents.push(min3bmarked);
    answer_markedComponents.push(min4amarked);
    answer_markedComponents.push(min4bmarked);
    
    answer_markedComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}

function answer_markedRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'answer_marked'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = answer_markedClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *marked_answerText* updates
    if (t >= 0.0 && marked_answerText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      marked_answerText.tStart = t;  // (not accounting for frame time here)
      marked_answerText.frameNStart = frameN;  // exact frame index
      
      marked_answerText.setAutoDraw(true);
    }

    
    // *circle_marked* updates
    if (t >= 0.0 && circle_marked.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      circle_marked.tStart = t;  // (not accounting for frame time here)
      circle_marked.frameNStart = frameN;  // exact frame index
      
      circle_marked.setAutoDraw(true);
    }

    
    // *marker* updates
    if (t >= 0.0 && marker.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      marker.tStart = t;  // (not accounting for frame time here)
      marker.frameNStart = frameN;  // exact frame index
      
      marker.setAutoDraw(true);
    }

    
    // *marked_clockHand* updates
    if (t >= 0.0 && marked_clockHand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      marked_clockHand.tStart = t;  // (not accounting for frame time here)
      marked_clockHand.frameNStart = frameN;  // exact frame index
      
      marked_clockHand.setAutoDraw(true);
    }

    // *changed_answer* updates
    if (t >= 0.0 && changed_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      changed_answer.tStart = t;  // (not accounting for frame time here)
      changed_answer.frameNStart = frameN;  // exact frame index
      
      changed_answer.status = PsychoJS.Status.STARTED;
      changed_answer.mouseClock.reset();
      prevButtonState = changed_answer.getPressed();  // if button is down already this ISN'T a new click
      }
    if (changed_answer.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      let buttons = changed_answer.getPressed();
      if (!buttons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = buttons;
        if (buttons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          const xys = changed_answer.getPos();
          changed_answer.x.push(xys[0]);
          changed_answer.y.push(xys[1]);
          changed_answer.leftButton.push(buttons[0]);
          changed_answer.midButton.push(buttons[1]);
          changed_answer.rightButton.push(buttons[2]);
          changed_answer.time.push(changed_answer.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [$circle_marked]) {
            if (obj.contains(changed_answer)) {
              gotValidClick = true;
              changed_answer.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *marking_end* updates
    if (t >= 0.0 && marking_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      marking_end.tStart = t;  // (not accounting for frame time here)
      marking_end.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { marking_end.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { marking_end.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { marking_end.clearEvents(); });
    }

    if (marking_end.status === PsychoJS.Status.STARTED) {
      let theseKeys = marking_end.getKeys({keyList: ['return'], waitRelease: false});
      _marking_end_allKeys = _marking_end_allKeys.concat(theseKeys);
      if (_marking_end_allKeys.length > 0) {
        marking_end.keys = _marking_end_allKeys[_marking_end_allKeys.length - 1].name;  // just the last key pressed
        marking_end.rt = _marking_end_allKeys[_marking_end_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *min1marked* updates
    if (t >= 0.0 && min1marked.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min1marked.tStart = t;  // (not accounting for frame time here)
      min1marked.frameNStart = frameN;  // exact frame index
      
      min1marked.setAutoDraw(true);
    }

    
    // *min2marked* updates
    if (t >= 0.0 && min2marked.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min2marked.tStart = t;  // (not accounting for frame time here)
      min2marked.frameNStart = frameN;  // exact frame index
      
      min2marked.setAutoDraw(true);
    }

    
    // *min3marked* updates
    if (t >= 0.0 && min3marked.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min3marked.tStart = t;  // (not accounting for frame time here)
      min3marked.frameNStart = frameN;  // exact frame index
      
      min3marked.setAutoDraw(true);
    }

    
    // *min4marked* updates
    if (t >= 0.0 && min4marked.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min4marked.tStart = t;  // (not accounting for frame time here)
      min4marked.frameNStart = frameN;  // exact frame index
      
      min4marked.setAutoDraw(true);
    }

    
    // *min1amarked* updates
    if (t >= 0.0 && min1amarked.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min1amarked.tStart = t;  // (not accounting for frame time here)
      min1amarked.frameNStart = frameN;  // exact frame index
      
      min1amarked.setAutoDraw(true);
    }

    
    // *min1bmarked* updates
    if (t >= 0.0 && min1bmarked.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min1bmarked.tStart = t;  // (not accounting for frame time here)
      min1bmarked.frameNStart = frameN;  // exact frame index
      
      min1bmarked.setAutoDraw(true);
    }

    
    // *min2amarked* updates
    if (t >= 0.0 && min2amarked.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min2amarked.tStart = t;  // (not accounting for frame time here)
      min2amarked.frameNStart = frameN;  // exact frame index
      
      min2amarked.setAutoDraw(true);
    }

    
    // *min2bmarked* updates
    if (t >= 0.0 && min2bmarked.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min2bmarked.tStart = t;  // (not accounting for frame time here)
      min2bmarked.frameNStart = frameN;  // exact frame index
      
      min2bmarked.setAutoDraw(true);
    }

    
    // *min3amarked* updates
    if (t >= 0.0 && min3amarked.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min3amarked.tStart = t;  // (not accounting for frame time here)
      min3amarked.frameNStart = frameN;  // exact frame index
      
      min3amarked.setAutoDraw(true);
    }

    
    // *min3bmarked* updates
    if (t >= 0.0 && min3bmarked.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min3bmarked.tStart = t;  // (not accounting for frame time here)
      min3bmarked.frameNStart = frameN;  // exact frame index
      
      min3bmarked.setAutoDraw(true);
    }

    
    // *min4amarked* updates
    if (t >= 0.0 && min4amarked.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min4amarked.tStart = t;  // (not accounting for frame time here)
      min4amarked.frameNStart = frameN;  // exact frame index
      
      min4amarked.setAutoDraw(true);
    }

    
    // *min4bmarked* updates
    if (t >= 0.0 && min4bmarked.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min4bmarked.tStart = t;  // (not accounting for frame time here)
      min4bmarked.frameNStart = frameN;  // exact frame index
      
      min4bmarked.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    answer_markedComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function answer_markedRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'answer_marked'-------
    answer_markedComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    marking = (marking + 1);
    if ((marking_end.keys === "return")) {
        marker_change.finished = true;
    }
    
    // store data for thisExp (ExperimentHandler)
    if (changed_answer.x) {  psychoJS.experiment.addData('changed_answer.x', changed_answer.x[0])};
    if (changed_answer.y) {  psychoJS.experiment.addData('changed_answer.y', changed_answer.y[0])};
    if (changed_answer.leftButton) {  psychoJS.experiment.addData('changed_answer.leftButton', changed_answer.leftButton[0])};
    if (changed_answer.midButton) {  psychoJS.experiment.addData('changed_answer.midButton', changed_answer.midButton[0])};
    if (changed_answer.rightButton) {  psychoJS.experiment.addData('changed_answer.rightButton', changed_answer.rightButton[0])};
    if (changed_answer.time) {  psychoJS.experiment.addData('changed_answer.time', changed_answer.time[0])};
    if (changed_answer.clicked_name) {  psychoJS.experiment.addData('changed_answer.clicked_name', changed_answer.clicked_name[0])};
    
    // the Routine "answer_marked" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function warningRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'warning'-------
    t = 0;
    warningClock.reset(); // clock
    frameN = -1;
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    warningComponents = [];
    warningComponents.push(warning_text);
    
    warningComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}

function warningRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'warning'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = warningClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((marking < 6)) {
        continueRoutine = false;
    }
    
    
    // *warning_text* updates
    if (t >= 0.0 && warning_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      warning_text.tStart = t;  // (not accounting for frame time here)
      warning_text.frameNStart = frameN;  // exact frame index
      
      warning_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (warning_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      warning_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    warningComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function warningRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'warning'-------
    warningComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}

function explicit_testRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'explicit_test'-------
    t = 0;
    explicit_testClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    slider.reset()
    slider_ending.keys = undefined;
    slider_ending.rt = undefined;
    _slider_ending_allKeys = [];
    // keep track of which components have finished
    explicit_testComponents = [];
    explicit_testComponents.push(slider_text);
    explicit_testComponents.push(slider);
    explicit_testComponents.push(slider_ending);
    
    explicit_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}

function explicit_testRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'explicit_test'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = explicit_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((block_random[block] === 1)) {
        continueRoutine = false;
    }
    if (((effect_block[act_block] === 1) && (explicit === 0))) {
        continueRoutine = false;
    }
    if (((effect_block[act_block] === 2) && (effect2 === 0))) {
        continueRoutine = false;
    }
    if ((exp[0] === 0)) {
        continueRoutine = false;
    }
    
    
    // *slider_text* updates
    if (t >= 0.0 && slider_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_text.tStart = t;  // (not accounting for frame time here)
      slider_text.frameNStart = frameN;  // exact frame index
      
      slider_text.setAutoDraw(true);
    }

    
    // *slider* updates
    if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }

    
    // *slider_ending* updates
    if (t >= 0.0 && slider_ending.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_ending.tStart = t;  // (not accounting for frame time here)
      slider_ending.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { slider_ending.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { slider_ending.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { slider_ending.clearEvents(); });
    }

    if (slider_ending.status === PsychoJS.Status.STARTED) {
      let theseKeys = slider_ending.getKeys({keyList: ['return'], waitRelease: false});
      _slider_ending_allKeys = _slider_ending_allKeys.concat(theseKeys);
      if (_slider_ending_allKeys.length > 0) {
        slider_ending.keys = _slider_ending_allKeys[_slider_ending_allKeys.length - 1].name;  // just the last key pressed
        slider_ending.rt = _slider_ending_allKeys[_slider_ending_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    explicit_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function explicit_testRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'explicit_test'-------
    explicit_testComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider.response', slider.getRating());
    // the Routine "explicit_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function memory_questionRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'memory_question'-------
    t = 0;
    memory_questionClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    textFill = "";
    keyList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    
    mem_resp.keys = undefined;
    mem_resp.rt = undefined;
    _mem_resp_allKeys = [];
    // keep track of which components have finished
    memory_questionComponents = [];
    memory_questionComponents.push(mem_question_text);
    memory_questionComponents.push(mem_resp);
    memory_questionComponents.push(displayText);
    
    memory_questionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}

function memory_questionRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'memory_question'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = memory_questionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = event.getKeys();
    if (keys) {
        if ((keys[0] === "backspace")) {
            textFill = textFill.slice(0, (- 1));
        } else {
            if ((keys[0] === "return")) {
                continueRoutine = false;
            } else {
                if (_pj.in_es6(keys[0], keyList)) {
                    textFill += keys[0];
                }
            }
        }
        displayText.setText(textFill);
    }
    
    
    // *mem_question_text* updates
    if (t >= 0.0 && mem_question_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mem_question_text.tStart = t;  // (not accounting for frame time here)
      mem_question_text.frameNStart = frameN;  // exact frame index
      
      mem_question_text.setAutoDraw(true);
    }

    
    // *mem_resp* updates
    if (t >= 0.0 && mem_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mem_resp.tStart = t;  // (not accounting for frame time here)
      mem_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { mem_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { mem_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { mem_resp.clearEvents(); });
    }

    if (mem_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = mem_resp.getKeys({keyList: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'backspace'], waitRelease: false});
      _mem_resp_allKeys = _mem_resp_allKeys.concat(theseKeys);
      if (_mem_resp_allKeys.length > 0) {
        mem_resp.keys = _mem_resp_allKeys.map((key) => key.name);  // storing all keys
        mem_resp.rt = _mem_resp_allKeys.map((key) => key.rt);
      }
    }
    
    
    // *displayText* updates
    if (t >= 0.0 && displayText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      displayText.tStart = t;  // (not accounting for frame time here)
      displayText.frameNStart = frameN;  // exact frame index
      
      displayText.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    memory_questionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function memory_questionRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'memory_question'-------
    memory_questionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('mem_resp.keys', mem_resp.keys);
    if (typeof mem_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('mem_resp.rt', mem_resp.rt);
        }
    
    mem_resp.stop();
    // the Routine "memory_question" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function block_endRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'block_end'-------
    t = 0;
    block_endClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    block1_endKey.keys = undefined;
    block1_endKey.rt = undefined;
    _block1_endKey_allKeys = [];
    // keep track of which components have finished
    block_endComponents = [];
    block_endComponents.push(block1_endText);
    block_endComponents.push(block1_endKey);
    block_endComponents.push(block2_endTest);
    block_endComponents.push(block3_endText);
    block_endComponents.push(block4_endText);
    block_endComponents.push(block5_end);
    
    block_endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}

function block_endRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'block_end'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = block_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *block1_endText* updates
    if (((block == 0)) && block1_endText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block1_endText.tStart = t;  // (not accounting for frame time here)
      block1_endText.frameNStart = frameN;  // exact frame index
      
      block1_endText.setAutoDraw(true);
    }

    
    // *block1_endKey* updates
    if (t >= 0.0 && block1_endKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block1_endKey.tStart = t;  // (not accounting for frame time here)
      block1_endKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { block1_endKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { block1_endKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { block1_endKey.clearEvents(); });
    }

    if (block1_endKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = block1_endKey.getKeys({keyList: ['return'], waitRelease: false});
      _block1_endKey_allKeys = _block1_endKey_allKeys.concat(theseKeys);
      if (_block1_endKey_allKeys.length > 0) {
        block1_endKey.keys = _block1_endKey_allKeys[_block1_endKey_allKeys.length - 1].name;  // just the last key pressed
        block1_endKey.rt = _block1_endKey_allKeys[_block1_endKey_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *block2_endTest* updates
    if (((block == 1)) && block2_endTest.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block2_endTest.tStart = t;  // (not accounting for frame time here)
      block2_endTest.frameNStart = frameN;  // exact frame index
      
      block2_endTest.setAutoDraw(true);
    }

    
    // *block3_endText* updates
    if (((block == 2)) && block3_endText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block3_endText.tStart = t;  // (not accounting for frame time here)
      block3_endText.frameNStart = frameN;  // exact frame index
      
      block3_endText.setAutoDraw(true);
    }

    
    // *block4_endText* updates
    if (((block == 3)) && block4_endText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block4_endText.tStart = t;  // (not accounting for frame time here)
      block4_endText.frameNStart = frameN;  // exact frame index
      
      block4_endText.setAutoDraw(true);
    }

    
    // *block5_end* updates
    if (t >= (block == 4) && block5_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block5_end.tStart = t;  // (not accounting for frame time here)
      block5_end.frameNStart = frameN;  // exact frame index
      
      block5_end.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    block_endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function block_endRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'block_end'-------
    block_endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    block = (block + 1);
    if ((block[random] === 0)) {
        act_block = (act_block + 1);
    }
    
    psychoJS.experiment.addData('block1_endKey.keys', block1_endKey.keys);
    if (typeof block1_endKey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('block1_endKey.rt', block1_endKey.rt);
        routineTimer.reset();
        }
    
    block1_endKey.stop();
    // the Routine "block_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
