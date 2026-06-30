const BIN_META = {
  recycling: {
    label: "黄色盖回收桶",
    title: "可回收",
    guide: "纸张、纸板、干净的硬塑料容器、玻璃瓶/罐、铝罐和钢罐。不要装袋，容器尽量清空。",
    color: "#d8a319"
  },
  fogo: {
    label: "绿色盖食物和花园垃圾桶",
    title: "食物和花园垃圾",
    guide: "所有食物残渣、果皮、菜叶、肉骨、咖啡渣、草屑、小树枝和修剪物。",
    color: "#2f7d4c"
  },
  landfill: {
    label: "红色/深色盖普通垃圾桶",
    title: "普通垃圾",
    guide: "不能回收、不能放进绿桶、也不属于危险品的日常垃圾。尽量先确认有没有专门回收点。",
    color: "#bd4636"
  },
  special: {
    label: "特殊回收/投放点",
    title: "不要放家用垃圾桶",
    guide: "电池、电子垃圾、油漆、化学品、灯管、药品、针头等需要专门投放或预约处理。",
    color: "#347b91"
  }
};

const ITEMS = [
  {
    name: "电池 / Battery",
    bin: "special",
    answer: "电池不能放进任何家用垃圾桶。请送到电池回收点或 Monash 指定回收服务。",
    note: "电池在垃圾车或回收厂可能引发火灾，尤其是锂电池。",
    keywords: ["电池", "battery", "batteries", "纽扣电池", "lithium", "aa", "aaa"]
  },
  {
    name: "手机、电脑、小电器 / E-waste",
    bin: "special",
    answer: "电子垃圾不要放家用桶，送到电子垃圾回收点或指定设施。",
    note: "包括手机、电脑、充电器、耳机、小家电、遥控器等。",
    keywords: ["手机", "电脑", "电器", "充电器", "线", "耳机", "e waste", "ewaste", "electronics", "phone", "laptop", "charger"]
  },
  {
    name: "食物残渣 / Food scraps",
    bin: "fogo",
    answer: "放绿色盖食物和花园垃圾桶。",
    note: "Monash 官方说明绿桶可放所有 food scraps。",
    keywords: ["食物", "厨余", "剩饭", "剩菜", "米饭", "面条", "bread", "rice", "pasta", "leftovers", "food scraps"]
  },
  {
    name: "果皮、菜叶 / Fruit and veg scraps",
    bin: "fogo",
    answer: "放绿色盖食物和花园垃圾桶。",
    note: "包括水果皮、菜叶、菜根、坏掉的水果蔬菜。",
    keywords: ["果皮", "香蕉皮", "苹果核", "菜叶", "蔬菜", "水果", "fruit", "vegetable", "peel"]
  },
  {
    name: "肉、鱼、骨头 / Meat, fish and bones",
    bin: "fogo",
    answer: "放绿色盖食物和花园垃圾桶。",
    note: "可以用厨房小桶收集后倒入绿桶，减少普通垃圾异味。",
    keywords: ["肉", "鱼", "骨头", "鸡骨", "鱼骨", "虾壳", "meat", "fish", "bones", "seafood"]
  },
  {
    name: "咖啡渣、茶叶 / Coffee grounds and tea leaves",
    bin: "fogo",
    answer: "咖啡渣和散茶叶放绿色盖食物和花园垃圾桶。",
    note: "茶包是否可放取决于材质；含塑料的茶包放普通垃圾。",
    keywords: ["咖啡渣", "茶叶", "coffee grounds", "tea leaves", "coffee"]
  },
  {
    name: "草屑、树叶、小树枝 / Garden clippings",
    bin: "fogo",
    answer: "放绿色盖食物和花园垃圾桶。",
    note: "适合草屑、落叶、花、杂草、小枝条和修剪物。",
    keywords: ["草", "树叶", "树枝", "花", "杂草", "garden", "grass", "leaves", "prunings", "clippings"]
  },
  {
    name: "纸板箱 / Cardboard box",
    bin: "recycling",
    answer: "压扁后放黄色盖回收桶。",
    note: "保持干净干燥；如果沾满油或食物，先去掉脏污部分。",
    keywords: ["纸板", "纸箱", "快递盒", "cardboard", "box", "carton"]
  },
  {
    name: "纸张、信件、报纸 / Paper",
    bin: "recycling",
    answer: "放黄色盖回收桶。",
    note: "不要把回收物装进塑料袋；松散放入桶内。",
    keywords: ["纸", "信", "报纸", "杂志", "paper", "newspaper", "magazine", "mail"]
  },
  {
    name: "塑料瓶、硬塑料容器 / Hard plastic containers",
    bin: "recycling",
    answer: "清空后放黄色盖回收桶。",
    note: "适合饮料瓶、洗发水瓶、酸奶盒等硬塑料容器；软塑料袋不算。",
    keywords: ["塑料瓶", "塑料盒", "酸奶盒", "洗发水瓶", "plastic bottle", "plastic container", "yoghurt tub"]
  },
  {
    name: "玻璃瓶、玻璃罐 / Glass bottles and jars",
    bin: "recycling",
    answer: "清空后放黄色盖回收桶。",
    note: "饮料瓶、酱料罐可以；窗玻璃、镜子、陶瓷和耐热玻璃不放回收桶。",
    keywords: ["玻璃瓶", "玻璃罐", "啤酒瓶", "酱料瓶", "glass bottle", "glass jar", "jar"]
  },
  {
    name: "铝罐、钢罐 / Cans",
    bin: "recycling",
    answer: "清空后放黄色盖回收桶。",
    note: "饮料罐也可能符合 Victoria Container Deposit Scheme，可考虑退瓶拿返现。",
    keywords: ["易拉罐", "罐头", "铝罐", "钢罐", "can", "cans", "tin", "aluminium"]
  },
  {
    name: "披萨盒 / Pizza box",
    bin: "recycling",
    answer: "干净的纸板部分放回收桶；油污或食物残渣多的部分放绿桶或普通垃圾。",
    note: "先把剩余食物倒进绿桶，纸板如果湿油严重就不要放回收。",
    keywords: ["披萨盒", "pizza box", "外卖盒"]
  },
  {
    name: "软塑料、塑料袋 / Soft plastics",
    bin: "landfill",
    answer: "不要放黄色回收桶。没有可用专门回收点时，放普通垃圾桶。",
    note: "包括塑料袋、薯片袋、保鲜膜、面包袋等软塑料。",
    keywords: ["塑料袋", "软塑料", "保鲜膜", "薯片袋", "soft plastic", "plastic bag", "cling wrap", "chip packet"]
  },
  {
    name: "一次性咖啡杯 / Takeaway coffee cup",
    bin: "landfill",
    answer: "通常放普通垃圾桶。",
    note: "纸杯内层常有防水涂层；塑料杯盖若是干净硬塑料，可按本地规则尝试回收。",
    keywords: ["咖啡杯", "一次性杯", "纸杯", "coffee cup", "takeaway cup", "paper cup"]
  },
  {
    name: "纸巾、湿巾 / Tissues and wipes",
    bin: "landfill",
    answer: "放普通垃圾桶。",
    note: "湿巾不能冲厕所，也不要放回收桶。",
    keywords: ["纸巾", "卫生纸", "湿巾", "tissue", "wipes", "napkin"]
  },
  {
    name: "尿布 / Nappies",
    bin: "landfill",
    answer: "包好后放普通垃圾桶。",
    note: "不要放回收桶或绿桶。",
    keywords: ["尿布", "尿片", "nappy", "nappies", "diaper"]
  },
  {
    name: "泡沫塑料 / Polystyrene",
    bin: "landfill",
    answer: "不要放黄色回收桶。小块通常放普通垃圾桶，大量包装材料查找专门回收点。",
    note: "白色泡沫箱、泡沫缓冲包装容易污染回收流。",
    keywords: ["泡沫", "保丽龙", "polystyrene", "styrofoam", "foam"]
  },
  {
    name: "破杯子、陶瓷、镜子 / Ceramics and broken glass",
    bin: "landfill",
    answer: "小心包好后放普通垃圾桶。",
    note: "这些材质熔点不同，不能按玻璃瓶罐回收。",
    keywords: ["陶瓷", "碗", "盘子", "镜子", "碎玻璃", "玻璃杯", "ceramic", "mirror", "drinking glass", "broken glass"]
  },
  {
    name: "衣服、鞋、纺织品 / Clothes and textiles",
    bin: "special",
    answer: "能再用的优先捐赠；不能再用的查找纺织品回收服务。",
    note: "不要放黄色回收桶。很脏或无法回收的小量纺织品才考虑普通垃圾。",
    keywords: ["衣服", "鞋", "布", "纺织", "clothes", "shoes", "textile", "fabric"]
  },
  {
    name: "油漆、化学品 / Paint and chemicals",
    bin: "special",
    answer: "送到指定危险废物/化学品回收服务。",
    note: "不要倒进下水道，也不要放家用垃圾桶。",
    keywords: ["油漆", "化学品", "清洁剂", "paint", "chemicals", "solvent"]
  },
  {
    name: "药品 / Medicines",
    bin: "special",
    answer: "带回药房做药品回收。",
    note: "不要倒进水槽或马桶。",
    keywords: ["药", "药品", "过期药", "medicine", "medication", "pills"]
  },
  {
    name: "针头、注射器 / Sharps",
    bin: "special",
    answer: "放入合规锐器盒，并送到指定回收/处置点。",
    note: "不要直接放进任何家用垃圾桶。",
    keywords: ["针头", "注射器", "针", "sharps", "needle", "syringe"]
  },
  {
    name: "灯泡、荧光灯管 / Light globes",
    bin: "special",
    answer: "查找灯泡或荧光灯管回收点。",
    note: "荧光灯管可能含汞，不适合普通垃圾或回收桶。",
    keywords: ["灯泡", "灯管", "荧光灯", "light globe", "light bulb", "fluorescent"]
  }
];

const quickSearches = ["电池", "咖啡杯", "披萨盒", "塑料袋", "骨头", "纸板箱", "泡沫", "手机"];
const searchInput = document.querySelector("#searchInput");
const clearButton = document.querySelector("#clearButton");
const quickChips = document.querySelector("#quickChips");
const featuredResult = document.querySelector("#featuredResult");
const resultList = document.querySelector("#resultList");
const binGuide = document.querySelector("#binGuide");
const customForm = document.querySelector("#customForm");
const customName = document.querySelector("#customName");
const customBin = document.querySelector("#customBin");
const installButton = document.querySelector("#installButton");
const template = document.querySelector("#resultTemplate");

let deferredInstallPrompt = null;

function normalise(value) {
  return value.toLowerCase().trim().replace(/\s+/g, " ");
}

function getCustomItems() {
  try {
    return JSON.parse(localStorage.getItem("monashCustomWasteItems") || "[]");
  } catch {
    return [];
  }
}

function saveCustomItems(items) {
  localStorage.setItem("monashCustomWasteItems", JSON.stringify(items));
}

function allItems() {
  return [...getCustomItems(), ...ITEMS];
}

function scoreItem(item, query) {
  const q = normalise(query);
  const haystack = normalise([item.name, item.answer, item.note, ...(item.keywords || [])].join(" "));
  if (!q) return 1;
  if (normalise(item.name).includes(q)) return 100;
  if ((item.keywords || []).some((keyword) => normalise(keyword) === q)) return 95;
  if ((item.keywords || []).some((keyword) => normalise(keyword).includes(q))) return 80;
  if (haystack.includes(q)) return 55;
  return q.split(" ").filter((part) => part && haystack.includes(part)).length * 12;
}

function createResultCard(item, featured = false) {
  const node = template.content.firstElementChild.cloneNode(true);
  const meta = BIN_META[item.bin];
  node.classList.add(item.bin);
  if (featured) node.classList.add("is-featured");
  node.querySelector(".bin-dot").style.color = meta.color;
  node.querySelector(".bin-label").textContent = meta.label;
  node.querySelector("h3").textContent = item.name;
  node.querySelector(".answer").textContent = item.answer;
  node.querySelector(".note").textContent = item.note;

  const tagRow = node.querySelector(".tag-row");
  (item.keywords || []).slice(0, 5).forEach((keyword) => {
    const tag = document.createElement("span");
    tag.textContent = keyword;
    tagRow.append(tag);
  });
  return node;
}

function renderResults(query = "") {
  const results = allItems()
    .map((item) => ({ item, score: scoreItem(item, query) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, query ? 8 : 5)
    .map((entry) => entry.item);

  featuredResult.innerHTML = "";
  resultList.innerHTML = "";

  if (!results.length) {
    featuredResult.innerHTML = `<div class="empty-state">没找到很确定的答案。可以换个说法，比如搜英文名、材质，或者先查 Monash 官方页面。你也可以在下面手动添加这个物品。</div>`;
    return;
  }

  featuredResult.append(createResultCard(results[0], true));
  results.slice(1).forEach((item) => resultList.append(createResultCard(item)));
}

function renderQuickChips() {
  quickSearches.forEach((term) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = term;
    button.addEventListener("click", () => {
      searchInput.value = term;
      renderResults(term);
      searchInput.focus();
    });
    quickChips.append(button);
  });
}

function renderBinGuide() {
  Object.entries(BIN_META).forEach(([key, meta]) => {
    const card = document.createElement("article");
    card.className = "bin-card";
    card.style.borderTop = `6px solid ${meta.color}`;
    card.innerHTML = `<strong>${meta.label}</strong><p>${meta.guide}</p>`;
    binGuide.append(card);
  });
}

searchInput.addEventListener("input", (event) => renderResults(event.target.value));
clearButton.addEventListener("click", () => {
  searchInput.value = "";
  renderResults("");
  searchInput.focus();
});

customForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const meta = BIN_META[customBin.value];
  const item = {
    name: customName.value.trim(),
    bin: customBin.value,
    answer: `你保存的分类：${meta.label}。`,
    note: "这是本机自定义条目；如果不确定，请再核对 Monash 官方说明。",
    keywords: [customName.value.trim()],
    custom: true
  };
  saveCustomItems([item, ...getCustomItems()]);
  customForm.reset();
  searchInput.value = item.name;
  renderResults(item.name);
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installButton.hidden = false;
});

installButton.addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  installButton.hidden = true;
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

renderQuickChips();
renderBinGuide();
renderResults("");
