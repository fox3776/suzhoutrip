const routePoints = {
  shanghai: { place: "上海", x: "86%", y: "14%" },
  beijing: { place: "北京", x: "86%", y: "14%" },
  station: { place: "苏州站", x: "21%", y: "18%" },
  hotpot: { place: "Masa台式小店", x: "32%", y: "65%" },
  stay: { place: "民宿", x: "31%", y: "32%" },
  taihuxue: { place: "太湖雪", x: "17%", y: "64%" },
  ronghua: { place: "花无缺非遗绒花店", x: "76%", y: "65%" },
  matcha: { place: "九十叶抹茶店", x: "62%", y: "65%" },
  xiangxin: { place: "祥鑫", x: "48%", y: "65%" },
  yangrou: { place: "兴兴藏书羊肉", x: "91%", y: "65%" },
  badminton: { place: "羽毛球待定", x: "72%", y: "34%" },
  dinner: { place: "晚饭待定", x: "67%", y: "64%" },
  breakfast: { place: "西园寺素面", x: "17%", y: "55%" },
};

const storyTemplates = [
  { day: "5/30", time: "上午", title: "出发准备", point: "shanghai" },
  { day: "5/30", time: "中午", title: "抵达苏州", point: "station" },
  { day: "5/30", time: "下午", title: "苏州开逛", point: "hotpot" },
  { day: "5/30", time: "傍晚", title: "集合休整", point: "stay" },
  { day: "5/30", time: "晚上", title: "一起吃饭", point: "dinner" },
  { day: "5/30", time: "深夜", title: "夜间剧情", point: "stay" },
  { day: "5/31", time: "早上", title: "第二天重启", point: "breakfast" },
  { day: "5/31", time: "下午", title: "返程告别", point: "station" },
];

const storyCopy = {
  bobo: [
    { time: "周六 早上", title: "上海惊醒", detail: "火车已经开了，bobo 从床上弹起，以错过火车开场。" },
    { time: "周六 中午", title: "狼狈抵达苏州站", detail: "bobo拖着行李终于赶到到苏州站。" },
    { time: "周六 下午", title: "十全街拍照", detail: "到十全街进入游客模式，开始认真取景。" },
    { time: "周六 傍晚", title: "顶级洗牌师傅", detail: "成功包揽牌局所有洗牌服务，递牌的姿态非常认真。" },
    { time: "周六 晚上", title: "晚饭喝酒", detail: "和大家一起吃饭喝酒，bobo开始搞节目效果。" },
    { time: "周六 深夜", title: "厕所崩盘", detail: "酒后剧情急转直下，进入需要朋友照看的状态。" },
    { time: "周日 早上", title: "宿醉回血", detail: "第二天在床上重启，手机、水瓶和头痛一起出现。" },
    { time: "周日 下午", title: "挥手离开苏州", detail: "背包返程，在苏州站和这趟周末告别。" },
  ],
  yuki: [
    { time: "周六 上午", title: "yuki到达苏州站", detail: "yuki 提前众人2小时到达苏州" },
    { time: "周六 中午", title: "yuki干饭", detail: "yuki 来到热炒店，板前师傅炒菜到手抽筋" },
    { time: "周六 下午", title: "yuki继续干饭", detail: "yuki 来到抹茶店，开启甜品胃" },
    { time: "周六 下午", title: "yuki消食儿", detail: "yuki 在十全街暴走消食，在太湖雪给朋友买礼物。" },
    { time: "周六 下午", title: "yuki继续暴走消食", detail: "yuki 在十全街暴走消食，在绒花首饰店给朋友买礼物。" },
    { time: "周六 傍晚", title: "yuki牌桌大杀四方", detail: "yuki开启蜘蛛感应，收割全场" },
    { time: "周六 晚上", title: "yuki继续干饭", detail: "yuki 晚上在民宿继续干饭" },
    { time: "周日 早上", title: "yuki返程前继续干饭", detail: "yuki 照顾老板生意，吃了两碗赤豆小圆子" },
  ],
  xiaotong: [
    { time: "周六 上午", title: "小童抵达苏州", detail: "女歌星抵达苏州站，险些引起粉丝踩踏事件" },
    { time: "周六 中午", title: "小童在铁板烧店辟谷", detail: "小童展现辟谷技巧，赢得众人喝彩" },
    { time: "周六 下午", title: "小童在抹茶店辟谷", detail: "小童面对抹茶甜品面不改色，高价辟谷课程名不虚传！" },
    { time: "周六 下午", title: "小童在太湖雪买丝绸", detail: "小童仍未出戏，闭眼挑选丝绸" },
    { time: "周六 下午", title: "小童在店里挑绒花", detail: "小童似乎仍未出戏" },
    { time: "周六 傍晚", title: "小童专著打牌", detail: "小童目光如炬，同大家一起打牌" },
    { time: "周六 晚上", title: "小童参加晚餐", detail: "小童。。她还在辟谷" },
    { time: "周日 早晨", title: "小童返程告别", detail: "小童陪大家早上一起吃苏州面" },
  ],
  frank: [
    { time: "周五晚上", title: "北京出发", detail: "frank 从北京出发，卧铺舒服。" },
    { time: "周六 上午", title: "frank抵达苏州", detail: "frank 抵达苏州，和酒兄弟团聚" },
    { time: "周六 中午", title: "frank吃藏书羊肉", detail: "frank 吃到心心念念的藏书羊肉" },
    { time: "周六 下午", title: "frank和酒兄弟打羽毛球", detail: "frank 和酒兄弟调整身体状态，为晚上的酒局pre-fight" },
    { time: "周六 晚上", title: "frank连喝3场面不改色", detail: "frank通过眼泪排酒，千杯不醉" },
    { time: "周日 早上", title: "frank宿醉", detail: "frank眼泪排酒法被酒兄弟破防，毒气入体，痛苦万分。" },
    { time: "周日 早上", title: "frank 吃醒酒汤面", detail: "frank 凭借强大内力，起床嗦面。" },
    { time: "周日 下午", title: "frank含泪告别酒兄弟", detail: "frank 酒气入体过剩，直到离开，仍在使用眼泪排酒。" },
  ],
  juzi: [
    { time: "周五 下午", title: "橘子酱下班", detail: "周五下午两点刚喝完咖啡，橘子酱从万恶的外企下班了。" },
    { time: "周六 早上", title: "橘子酱睡懒觉", detail: "橘子酱不用回上海，不用早起，睡到自然醒" },
    { time: "周六 中午", title: "橘子酱接到朋友们", detail: "朋友们一眼就找到了橘子酱，大家在火车站顺利汇合" },
    { time: "周六 下午", title: "橘子酱带大家买买买", detail: "橘子酱作为工作了2个月的老苏州人，带朋友们疯狂购物" },
    { time: "周六 下午", title: "橘子酱带大家买非遗绒花", detail: "橘子酱作为工作了2个月的老苏州人，带朋友们疯狂购物" },
    { time: "周六 傍晚", title: "橘子酱和大家打牌", detail: "橘子酱精算风水，拜了财神爷后跟大家打牌。" },
    { time: "周六 晚上", title: "橘子酱和大家吃晚餐", detail: "橘子酱和大家吃晚餐，被当成饭后水果咬了一口" },
    { time: "周日 下午", title: "橘子酱等待上班", detail: "由于没有回上海，在苏州等候上班的时间也显得格外漫长" },
  ],
  haoge: [
    { time: "周六 上午", title: "浩哥出发去接酒兄弟", detail: "浩哥开着车横穿马路，去苏州站接酒兄弟" },
    { time: "周六 中午", title: "浩哥招待酒兄弟吃午饭", detail: "浩哥看着酒兄弟爽吃藏书羊肉，想到晚上要怎么赖酒就忍不住笑出来。" },
    { time: "周六 下午", title: "浩哥和frank打羽毛球", detail: "浩哥暴力扣杀frank，引起frank怒火" },
    { time: "周六 傍晚", title: "浩哥酒局展雄风", detail: "浩哥酒局前期开启无敌buff，来着不拒。" },
    { time: "周六 晚上", title: "浩哥开启404模式", detail: "浩哥开始拒绝摄入酒精，且无法响应任何人的任何话语。" },
    { time: "周六 深夜", title: "浩哥醒酒偷乐", detail: "浩哥已经醒酒，看到烂醉的大家偷笑" },
    { time: "周日 早上", title: "浩哥第二天重启", detail: "浩哥嘲讽宿醉的众人" },
    { time: "周日 下午", title: "浩哥返程告别", detail: "浩哥含泪送别各位离开苏州。" },
  ],
};

function makeEvents(person, imagePrefix, pointOverrides = {}) {
  return storyTemplates.map((template, index) => {
    const number = index + 1;
    const point = routePoints[pointOverrides[number] || template.point];

    return {
      day: template.day,
      time: template.time,
      title: `${person}${template.title}`,
      detail: `${person} 的第 ${number} 张漫画分镜，后续可按真实行程微调文案。`,
      place: point.place,
      x: point.x,
      y: point.y,
      art: `${person} 第 ${number} 张分镜`,
      image: `./assets/${imagePrefix}-${number}.png`,
    };
  });
}

const travelers = [
  {
    id: "bobo",
    name: "bobo",
    color: "#f6a6a6",
    face: "bo",
    avatar: "./assets/bobo-0.png",
    route: "shanghai",
    events: makeEvents("bobo", "bobo", {
      1: "shanghai",
      2: "station",
      3: "hotpot",
      4: "stay",
      5: "stay",
      6: "stay",
      7: "stay",
      8: "station",
    }),
  },
  {
    id: "yuki",
    name: "yuki",
    color: "#8fb9d9",
    face: "yu",
    avatar: "./assets/yuki-0.png",
    route: "shanghai",
    events: makeEvents("yuki", "yuki", {
      1: "station",
      2: "hotpot",
      3: "matcha",
      4: "taihuxue",
      5: "ronghua",
      6: "stay",
      7: "stay",
      8: "breakfast",
    }),
  },
  {
    id: "xiaotong",
    name: "小童",
    color: "#91c7a9",
    face: "童",
    avatar: "./assets/小童-0.png",
    route: "shanghai",
    events: makeEvents("小童", "小童", {
      1: "station",
      2: "hotpot",
      3: "matcha",
      4: "taihuxue",
      5: "ronghua",
      6: "stay",
      7: "stay",
      8: "breakfast",
    }),
  },
  {
    id: "frank",
    name: "frank",
    color: "#de6e5b",
    face: "fr",
    avatar: "./assets/frank-0.png",
    route: "frank",
    events: makeEvents("frank", "frank", {
      1: "beijing",
      2: "station",
      3: "yangrou",
      4: "badminton",
      5: "stay",
      6: "stay",
      7: "breakfast",
      8: "station",
    }),
  },
  {
    id: "juzi",
    name: "橘子",
    color: "#f2a85f",
    face: "橘",
    avatar: "./assets/橘子-0.png",
    route: "shanghai",
    events: makeEvents("橘子", "橘子", {
      1: "shanghai",
      2: "shanghai",
      3: "station",
      4: "taihuxue",
      5: "ronghua",
      6: "stay",
      7: "stay",
      8: "shanghai",
    }),
  },
  {
    id: "haoge",
    name: "浩哥",
    color: "#a6c7df",
    face: "浩",
    avatar: "./assets/浩哥-0.png",
    route: "frank",
    events: makeEvents("浩哥", "浩哥", {
      1: "station",
      2: "yangrou",
      3: "badminton",
      4: "stay",
      5: "stay",
      6: "stay",
      7: "breakfast",
      8: "station",
    }),
  },
];

function applyStoryCopy() {
  travelers.forEach((traveler) => {
    const copy = storyCopy[traveler.id];
    if (!copy) return;
    traveler.events.forEach((event, index) => {
      Object.assign(event, copy[index] || {});
    });
  });
}

const travelerList = document.querySelector("#travelerList");
const storyFrame = document.querySelector("#storyFrame");
const storyCaption = document.querySelector("#storyCaption");
const storyPrev = document.querySelector("#storyPrev");
const storyNext = document.querySelector("#storyNext");
const avatarPin = document.querySelector("#avatarPin");
const avatarFace = document.querySelector("#avatarFace");
const paperMap = document.querySelector("#paperMap");
const mapHotspots = [...document.querySelectorAll(".map-hotspot")];
const mapPhotoPanel = document.querySelector("#mapPhotoPanel");
const photoTitle = document.querySelector("#photoTitle");
const photoGrid = document.querySelector("#photoGrid");
const photoClose = document.querySelector("#photoClose");

const placePhotos = {
  苏州站: ["苏州站-1.jpeg"],
  民宿: ["民宿-1.png", "民宿-2.png", "民宿-3.png", "民宿-4.png", "民宿-5.png", "民宿-6.png", "民宿-7.png"],
  太湖雪: ["太湖雪-1.png", "太湖雪-2.png", "太湖雪-3.png"],
  Masa台式小店: ["热炒店-1.png", "热炒店-2.png", "热炒店-3.png"],
  祥鑫: ["祥鑫-1.jpg", "祥鑫-2.jpg", "祥鑫-3.jpg", "祥鑫-4.jpg"],
  九十叶抹茶店: ["抹茶店-1.jpeg", "抹茶店-2.jpg", "抹茶店-3.jpg"],
  花无缺非遗绒花店: ["绒花-1.png", "绒花-2.png", "绒花-3.png"],
  兴兴藏书羊肉: ["羊肉店-1.png", "羊肉店-2.png", "羊肉店-3.png"],
  西园寺素面: ["西园寺-1.jpg", "西园寺-2.jpg", "西园寺-3.jpg", "西园寺-4.jpg", "西园寺-5.jpg"],
};

let activeTraveler = travelers[0];
let activeEventIndex = 0;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function avatarMarkup(traveler) {
  if (!traveler.avatar) return traveler.face;
  return `<img src="${traveler.avatar}" alt="${traveler.name}头像" onerror="this.remove(); this.parentElement.textContent='${traveler.face}'" />`;
}

function renderTravelers() {
  travelerList.innerHTML = travelers
    .map(
      (traveler) => `
        <button class="traveler-button" type="button" data-id="${traveler.id}">
          <span class="mini-face" style="--face-color: ${traveler.color}">
            ${avatarMarkup(traveler)}
          </span>
          <strong>${traveler.name}</strong>
        </button>
      `,
    )
    .join("");

  travelerList.addEventListener("click", (event) => {
    const button = event.target.closest(".traveler-button");
    if (!button) return;
    activeTraveler = travelers.find((traveler) => traveler.id === button.dataset.id);
    activeEventIndex = 0;
    renderActiveTraveler();
  });
}

function renderActiveTraveler() {
  travelerList.querySelectorAll(".traveler-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.id === activeTraveler.id);
  });

  avatarFace.innerHTML = avatarMarkup(activeTraveler);
  avatarPin.style.setProperty("--face-color", activeTraveler.color);
  paperMap.dataset.route = activeTraveler.route || "shanghai";

  updateMapState();
}

function updateMapState() {
  const event = activeTraveler.events[activeEventIndex];
  paperMap.dataset.route = event.time.includes("周日") ? "sunday" : activeTraveler.route || "shanghai";

  storyFrame.innerHTML = `
    <div class="mock-art ${event.image ? "" : "is-missing"}">
      ${
        event.image
          ? `<img src="${event.image}" alt="${event.art}" onerror="this.remove(); this.parentElement.classList.add('is-missing')" />`
          : ""
      }
      <span>插画 ${activeEventIndex + 1}<br>${event.art}</span>
    </div>
  `;
  storyCaption.innerHTML = `
    <p class="story-kicker">${escapeHtml(event.time)}</p>
    <h2>${escapeHtml(event.title)}</h2>
    <p class="story-detail">${escapeHtml(event.detail)}</p>
  `;

  avatarPin.style.left = event.x;
  avatarPin.style.top = event.y;
  paperMap.style.setProperty("--avatar-x", event.x);
  paperMap.style.setProperty("--avatar-y", event.y);

  mapHotspots.forEach((hotspot) => {
    hotspot.classList.toggle("active", hotspot.dataset.place === event.place);
  });

}

function moveStory(step) {
  const eventCount = activeTraveler.events.length;
  activeEventIndex = (activeEventIndex + step + eventCount) % eventCount;
  updateMapState();
}

mapHotspots.forEach((hotspot) => {
  hotspot.addEventListener("click", (event) => {
    event.stopPropagation();
    mapHotspots.forEach((item) => item.classList.toggle("active", item === hotspot));
    showPlacePhotos(hotspot.dataset.place);
  });
});

function showPlacePhotos(place) {
  const photos = placePhotos[place] || [];
  photoTitle.textContent = place;
  mapPhotoPanel.classList.add("open");
  photoGrid.innerHTML = photos.length
    ? photos
        .map(
          (photo) => `
            <button class="photo-card" type="button">
              <img src="./assets/${photo}" alt="${place} 实拍照片" loading="lazy" />
            </button>
          `,
        )
        .join("")
    : `<p class="photo-empty">${place} 的实拍照片待补。</p>`;
}

function closePlacePhotos() {
  mapPhotoPanel.classList.remove("open");
  mapHotspots.forEach((item) => item.classList.remove("active"));
}

photoClose.addEventListener("click", (event) => {
  event.stopPropagation();
  closePlacePhotos();
});

mapPhotoPanel.addEventListener("click", (event) => {
  event.stopPropagation();
});

paperMap.addEventListener("click", () => {
  if (mapPhotoPanel.classList.contains("open")) {
    closePlacePhotos();
  }
});

storyPrev.addEventListener("click", () => moveStory(-1));
storyNext.addEventListener("click", () => moveStory(1));

applyStoryCopy();
renderTravelers();
renderActiveTraveler();
