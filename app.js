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
  },
  {
    name: "头发 / Hair",
    bin: "fogo",
    answer: "头发本身可以放绿色盖食物和花园垃圾桶。",
    note: "如果混着塑料袋、纸巾、染发剂手套等，先把非有机物分开。",
    keywords: ["头发", "毛发", "剪头发", "hair", "hair clippings"]
  },
  {
    name: "宠物毛 / Pet fur",
    bin: "fogo",
    answer: "宠物毛本身可以放绿色盖食物和花园垃圾桶。",
    note: "不要连塑料袋、湿巾或清洁垫一起放进去。",
    keywords: ["宠物毛", "狗毛", "猫毛", "pet fur", "dog hair", "cat hair"]
  },
  {
    name: "宠物粪便 / Pet poo",
    bin: "landfill",
    answer: "包好后放普通垃圾桶。",
    note: "不要放回收桶；如果使用可堆肥袋，也要按 Monash 最新绿桶规则核对。",
    keywords: ["狗屎", "猫屎", "宠物粪便", "poo", "dog poo", "cat poo", "pet waste"]
  },
  {
    name: "猫砂 / Cat litter",
    bin: "landfill",
    answer: "包好后放普通垃圾桶。",
    note: "不要倒进回收桶或绿桶，避免污染和异味。",
    keywords: ["猫砂", "cat litter", "litter tray"]
  },
  {
    name: "蛋壳 / Egg shells",
    bin: "fogo",
    answer: "放绿色盖食物和花园垃圾桶。",
    note: "蛋壳属于食物残渣。",
    keywords: ["蛋壳", "鸡蛋壳", "egg shell", "eggshell"]
  },
  {
    name: "贝壳、螃蟹壳 / Shellfish shells",
    bin: "fogo",
    answer: "放绿色盖食物和花园垃圾桶。",
    note: "海鲜壳属于食物残渣；有包装或塑料托盘要分开。",
    keywords: ["贝壳", "螃蟹壳", "虾壳", "shellfish", "crab shell", "prawn shell"]
  },
  {
    name: "面包、蛋糕、饼干 / Bread and bakery",
    bin: "fogo",
    answer: "放绿色盖食物和花园垃圾桶。",
    note: "包装袋通常是软塑料，不要一起放进绿桶。",
    keywords: ["面包", "蛋糕", "饼干", "糕点", "bread", "cake", "biscuit", "cookie"]
  },
  {
    name: "乳制品 / Dairy",
    bin: "fogo",
    answer: "放绿色盖食物和花园垃圾桶。",
    note: "奶酪、酸奶残渣等可放绿桶；容器按材质另行处理。",
    keywords: ["奶酪", "芝士", "酸奶", "dairy", "cheese", "yoghurt", "yogurt"]
  },
  {
    name: "油、酱汁少量残渣 / Small food oil residue",
    bin: "fogo",
    answer: "少量随食物残渣放绿色盖食物和花园垃圾桶。",
    note: "大量食用油不要倒入水槽或桶里，需查找食用油回收或妥善密封处理。",
    keywords: ["油", "酱汁", "汤汁", "cooking oil", "sauce", "gravy"]
  },
  {
    name: "牛奶盒、果汁纸盒 / Milk and juice cartons",
    bin: "recycling",
    answer: "清空后放黄色盖回收桶。",
    note: "把盖子按本地规则拧回或分开处理；不要装袋。",
    keywords: ["牛奶盒", "果汁盒", "纸盒", "milk carton", "juice carton", "tetra pak"]
  },
  {
    name: "外卖塑料盒 / Takeaway plastic container",
    bin: "recycling",
    answer: "清空、刮干净后放黄色盖回收桶。",
    note: "太油、食物残渣很多的容器会污染回收，先尽量清空。",
    keywords: ["外卖盒", "塑料饭盒", "takeaway container", "plastic takeaway", "food container"]
  },
  {
    name: "外卖纸盒、纸碗 / Paper takeaway container",
    bin: "landfill",
    answer: "有防水涂层或油污的通常放普通垃圾桶。",
    note: "干净纸板可回收；明显沾油或覆膜的外卖纸盒不要放回收桶。",
    keywords: ["纸碗", "纸饭盒", "外卖纸盒", "paper takeaway", "noodle box", "paper bowl"]
  },
  {
    name: "一次性餐具 / Disposable cutlery",
    bin: "landfill",
    answer: "放普通垃圾桶。",
    note: "塑料刀叉勺体积小且材质复杂，通常不适合黄盖回收桶。",
    keywords: ["一次性餐具", "塑料叉", "塑料勺", "plastic cutlery", "disposable cutlery"]
  },
  {
    name: "吸管 / Straws",
    bin: "landfill",
    answer: "放普通垃圾桶。",
    note: "吸管太小，容易从回收分拣中掉出或污染回收。",
    keywords: ["吸管", "straw", "straws"]
  },
  {
    name: "瓶盖、罐盖 / Lids and caps",
    bin: "recycling",
    answer: "硬塑料或金属瓶盖通常可随对应容器回收。",
    note: "很小的盖子容易丢失；按 Monash 最新说明处理，不能确定时放普通垃圾。",
    keywords: ["瓶盖", "盖子", "罐盖", "lid", "cap", "bottle cap"]
  },
  {
    name: "铝箔、锡纸 / Aluminium foil",
    bin: "recycling",
    answer: "干净铝箔揉成球后可放黄色盖回收桶。",
    note: "沾满食物或油污的铝箔先清理；清不掉就放普通垃圾。",
    keywords: ["锡纸", "铝箔", "foil", "aluminium foil", "aluminum foil"]
  },
  {
    name: "烘焙纸、蜡纸 / Baking paper",
    bin: "landfill",
    answer: "放普通垃圾桶。",
    note: "烘焙纸常有硅油或防粘涂层，不适合回收。",
    keywords: ["烘焙纸", "蜡纸", "baking paper", "greaseproof paper", "wax paper"]
  },
  {
    name: "保鲜膜 / Cling wrap",
    bin: "landfill",
    answer: "放普通垃圾桶。",
    note: "属于软塑料，不要放黄盖回收桶。",
    keywords: ["保鲜膜", "cling wrap", "plastic wrap", "glad wrap"]
  },
  {
    name: "泡泡纸 / Bubble wrap",
    bin: "landfill",
    answer: "没有专门软塑料回收时放普通垃圾桶。",
    note: "不要放黄色回收桶；可重复使用做包装。",
    keywords: ["泡泡纸", "气泡膜", "bubble wrap", "air pillow"]
  },
  {
    name: "薯片袋、巧克力包装 / Foil snack packets",
    bin: "landfill",
    answer: "放普通垃圾桶。",
    note: "这类复合软包装不要放黄盖回收桶。",
    keywords: ["薯片袋", "零食袋", "巧克力包装", "chip packet", "snack packet", "wrapper"]
  },
  {
    name: "牙刷 / Toothbrush",
    bin: "landfill",
    answer: "普通牙刷放普通垃圾桶，或找专门口腔护理回收项目。",
    note: "不要放黄色回收桶。",
    keywords: ["牙刷", "toothbrush", "oral care"]
  },
  {
    name: "牙膏管 / Toothpaste tube",
    bin: "landfill",
    answer: "通常放普通垃圾桶，或找专门口腔护理回收项目。",
    note: "软管材质复合，通常不适合黄盖回收。",
    keywords: ["牙膏", "牙膏管", "toothpaste", "toothpaste tube"]
  },
  {
    name: "洗发水瓶、沐浴露瓶 / Shampoo bottle",
    bin: "recycling",
    answer: "清空后放黄色盖回收桶。",
    note: "泵头若含金属弹簧可能不适合回收；不能确定时取下放普通垃圾。",
    keywords: ["洗发水瓶", "沐浴露瓶", "护发素瓶", "shampoo bottle", "conditioner bottle", "body wash"]
  },
  {
    name: "化妆品瓶罐 / Cosmetic containers",
    bin: "recycling",
    answer: "硬塑料、玻璃或金属容器清空后通常可放黄色回收桶。",
    note: "软管、泵头、镜子、刷头和复合材质通常放普通垃圾或专门回收。",
    keywords: ["化妆品瓶", "护肤品瓶", "面霜罐", "cosmetic container", "makeup", "skincare"]
  },
  {
    name: "棉签、化妆棉 / Cotton buds and pads",
    bin: "landfill",
    answer: "放普通垃圾桶。",
    note: "不要冲厕所，也不要放回收桶。",
    keywords: ["棉签", "化妆棉", "cotton bud", "cotton pad", "q tip"]
  },
  {
    name: "卫生巾、卫生棉条 / Period products",
    bin: "landfill",
    answer: "包好后放普通垃圾桶。",
    note: "不要冲厕所，不要放回收桶或绿桶。",
    keywords: ["卫生巾", "卫生棉条", "姨妈巾", "pad", "tampon", "period product"]
  },
  {
    name: "创可贴、绷带 / Bandages",
    bin: "landfill",
    answer: "放普通垃圾桶。",
    note: "医疗锐器如针头必须走特殊处置，不要混在一起。",
    keywords: ["创可贴", "绷带", "纱布", "bandage", "band aid", "plaster"]
  },
  {
    name: "口罩、一次性手套 / Masks and gloves",
    bin: "landfill",
    answer: "放普通垃圾桶。",
    note: "不要放回收桶；使用后最好包好。",
    keywords: ["口罩", "手套", "一次性手套", "mask", "face mask", "gloves"]
  },
  {
    name: "清洁喷雾瓶 / Cleaning spray bottle",
    bin: "recycling",
    answer: "空的硬塑料瓶通常可放黄色盖回收桶。",
    note: "仍有化学品残留的要按标签和危险废物规则处理。",
    keywords: ["清洁剂瓶", "喷雾瓶", "cleaning bottle", "spray bottle", "detergent bottle"]
  },
  {
    name: "洗衣液瓶 / Laundry detergent bottle",
    bin: "recycling",
    answer: "清空后放黄色盖回收桶。",
    note: "不要把回收物装袋；瓶内尽量倒空。",
    keywords: ["洗衣液瓶", "洗衣粉桶", "laundry bottle", "detergent bottle"]
  },
  {
    name: "海绵、刷子 / Sponges and scrubbers",
    bin: "landfill",
    answer: "放普通垃圾桶。",
    note: "厨房海绵和清洁刷通常不能放回收桶。",
    keywords: ["海绵", "刷子", "百洁布", "sponge", "scrubber", "dish brush"]
  },
  {
    name: "纸质购物袋 / Paper bag",
    bin: "recycling",
    answer: "干净纸袋放黄色盖回收桶。",
    note: "如果沾满食物或油污，先去掉脏污部分或放普通垃圾。",
    keywords: ["纸袋", "购物纸袋", "paper bag"]
  },
  {
    name: "礼品包装纸 / Wrapping paper",
    bin: "recycling",
    answer: "普通纸质包装纸可放黄色盖回收桶。",
    note: "闪粉、金属膜、塑料涂层或丝带要放普通垃圾。",
    keywords: ["包装纸", "礼品纸", "wrapping paper", "gift wrap"]
  },
  {
    name: "信封 / Envelopes",
    bin: "recycling",
    answer: "放黄色盖回收桶。",
    note: "带透明窗口的信封通常也可回收；大量胶带或塑料衬垫要分开。",
    keywords: ["信封", "envelope", "mail envelope"]
  },
  {
    name: "收据 / Receipts",
    bin: "landfill",
    answer: "多数热敏纸收据放普通垃圾桶。",
    note: "热敏纸不适合普通纸张回收；电子收据更省事。",
    keywords: ["收据", "小票", "receipt", "thermal paper"]
  },
  {
    name: "碎纸 / Shredded paper",
    bin: "recycling",
    answer: "少量碎纸可按纸类处理，但最好装入纸袋再放回收桶。",
    note: "碎纸太细容易飞散或掉出分拣线；大量碎纸可考虑安全文件回收。",
    keywords: ["碎纸", "碎文件", "shredded paper"]
  },
  {
    name: "书、笔记本 / Books and notebooks",
    bin: "recycling",
    answer: "不能捐赠再用时，可放黄色盖回收桶。",
    note: "硬壳、塑料封面、金属线圈尽量拆开分开处理。",
    keywords: ["书", "本子", "笔记本", "book", "notebook", "exercise book"]
  },
  {
    name: "笔、马克笔 / Pens and markers",
    bin: "landfill",
    answer: "通常放普通垃圾桶，或找文具专门回收项目。",
    note: "不要放黄盖回收桶。",
    keywords: ["笔", "圆珠笔", "马克笔", "pen", "marker", "highlighter"]
  },
  {
    name: "CD、DVD、录像带 / Discs and tapes",
    bin: "landfill",
    answer: "通常放普通垃圾桶，或查找专门回收服务。",
    note: "不要放黄盖回收桶。",
    keywords: ["光盘", "cd", "dvd", "磁带", "录像带", "vhs"]
  },
  {
    name: "玩具 / Toys",
    bin: "landfill",
    answer: "可用玩具优先捐赠；坏掉的普通玩具通常放普通垃圾桶。",
    note: "含电池或电子元件的玩具按电子垃圾处理，电池先取出。",
    keywords: ["玩具", "toy", "toys", "plastic toy"]
  },
  {
    name: "锅、平底锅 / Pots and pans",
    bin: "special",
    answer: "可用的捐赠；金属锅具可查找金属回收或硬垃圾服务。",
    note: "不要放黄盖回收桶；小件无法回收时才放普通垃圾。",
    keywords: ["锅", "平底锅", "锅具", "pot", "pan", "frying pan"]
  },
  {
    name: "刀具 / Knives",
    bin: "landfill",
    answer: "包好刀刃后放普通垃圾桶，或送金属回收/硬垃圾服务。",
    note: "确保不会割伤收运人员。",
    keywords: ["刀", "菜刀", "刀具", "knife", "knives"]
  },
  {
    name: "衣架 / Clothes hangers",
    bin: "landfill",
    answer: "可重复使用或捐赠；坏掉的通常放普通垃圾桶。",
    note: "金属衣架可问干洗店或金属回收；不要放黄盖回收桶。",
    keywords: ["衣架", "hanger", "coat hanger"]
  },
  {
    name: "小块木头 / Small timber",
    bin: "landfill",
    answer: "小块处理过的木头通常放普通垃圾桶；大件走硬垃圾或回收设施。",
    note: "花园枝条放绿桶，但建筑木材、油漆木材不要放绿桶。",
    keywords: ["木头", "木板", "timber", "wood", "wood offcut"]
  },
  {
    name: "土、石头、砖 / Soil, rocks and bricks",
    bin: "special",
    answer: "不要放家用桶；查找转运站、硬垃圾或专门处置方式。",
    note: "这些材料太重，可能损坏垃圾桶和收运设备。",
    keywords: ["土", "泥土", "石头", "砖", "soil", "rocks", "bricks", "rubble"]
  },
  {
    name: "花盆 / Plant pots",
    bin: "landfill",
    answer: "可重复使用或送园艺店回收；否则通常放普通垃圾桶。",
    note: "很多花盆黑色塑料或材质不适合黄盖回收桶。",
    keywords: ["花盆", "育苗盆", "plant pot", "plastic pot"]
  },
  {
    name: "盆栽植物 / Potted plant",
    bin: "fogo",
    answer: "植物和少量根系可放绿色盖食物和花园垃圾桶。",
    note: "土、石头和塑料盆要分开，不要放绿桶。",
    keywords: ["盆栽", "植物", "枯萎植物", "potted plant", "plant"]
  },
  {
    name: "圣诞树、较大树枝 / Large branches",
    bin: "special",
    answer: "大件或过粗树枝不要硬塞绿桶，查找 Monash 花园废弃物/硬垃圾安排。",
    note: "小枝条和修剪物可放绿桶。",
    keywords: ["大树枝", "圣诞树", "large branch", "christmas tree"]
  },
  {
    name: "喷雾罐 / Aerosol cans",
    bin: "recycling",
    answer: "完全空的喷雾罐通常可放黄色盖回收桶。",
    note: "未空、危险化学品或内容不明的喷雾罐按危险废物处理。",
    keywords: ["喷雾罐", "气雾罐", "aerosol", "spray can"]
  },
  {
    name: "煤气罐、露营气罐 / Gas bottles",
    bin: "special",
    answer: "不要放家用桶，送到指定回收/更换/处置点。",
    note: "加压容器在收运和处理过程中有爆炸风险。",
    keywords: ["煤气罐", "瓦斯罐", "露营气罐", "gas bottle", "gas cylinder", "butane"]
  },
  {
    name: "灭火器 / Fire extinguisher",
    bin: "special",
    answer: "不要放家用桶，查找指定危险品或压力容器处置点。",
    note: "属于压力容器，不能进入普通垃圾或回收流程。",
    keywords: ["灭火器", "fire extinguisher"]
  },
  {
    name: "汽车机油 / Motor oil",
    bin: "special",
    answer: "送到汽车机油回收点或相关回收设施。",
    note: "不要倒进下水道、土里或家用垃圾桶。",
    keywords: ["机油", "汽车油", "motor oil", "engine oil"]
  },
  {
    name: "汽车电池 / Car battery",
    bin: "special",
    answer: "送到汽车电池回收点、汽修店或指定设施。",
    note: "含酸和重金属，不能放家用桶。",
    keywords: ["汽车电池", "车电池", "car battery", "lead acid battery"]
  },
  {
    name: "轮胎 / Tyres",
    bin: "special",
    answer: "送到轮胎回收或相关转运设施。",
    note: "不要放家用桶，也通常不属于普通回收。",
    keywords: ["轮胎", "tyre", "tire"]
  },
  {
    name: "旧家具 / Furniture",
    bin: "special",
    answer: "可用的优先捐赠；不能用的大件走 Monash 硬垃圾或预约收集。",
    note: "不要放在路边，除非已按 council 规则预约或在指定收集期。",
    keywords: ["家具", "沙发", "桌子", "椅子", "furniture", "sofa", "chair", "table"]
  },
  {
    name: "床垫 / Mattress",
    bin: "special",
    answer: "走硬垃圾、床垫回收或预约收集。",
    note: "不要塞进普通垃圾桶。",
    keywords: ["床垫", "mattress"]
  },
  {
    name: "地毯、地垫 / Carpet and rugs",
    bin: "special",
    answer: "大件走硬垃圾或转运站；小块不可回收时放普通垃圾。",
    note: "不要放黄盖回收桶。",
    keywords: ["地毯", "地垫", "carpet", "rug", "mat"]
  },
  {
    name: "白色家电 / Whitegoods",
    bin: "special",
    answer: "冰箱、洗衣机等走硬垃圾、金属回收或专门回收服务。",
    note: "不要放路边，除非已经预约或符合 council 收集规则。",
    keywords: ["冰箱", "洗衣机", "烘干机", "whitegoods", "fridge", "washing machine", "dryer"]
  },
  {
    name: "打印机墨盒 / Printer cartridges",
    bin: "special",
    answer: "送到墨盒回收点或办公用品店回收项目。",
    note: "不要放黄盖回收桶。",
    keywords: ["墨盒", "硒鼓", "printer cartridge", "toner", "ink cartridge"]
  },
  {
    name: "咖啡胶囊 / Coffee pods",
    bin: "special",
    answer: "优先使用品牌或专门咖啡胶囊回收项目。",
    note: "普通黄盖回收桶通常不适合咖啡胶囊；没有回收点时放普通垃圾。",
    keywords: ["咖啡胶囊", "胶囊咖啡", "coffee pod", "nespresso pod", "capsule"]
  },
  {
    name: "软木塞 / Corks",
    bin: "landfill",
    answer: "通常放普通垃圾桶，或找专门软木回收。",
    note: "天然软木少量可家用堆肥，但不要把塑料塞放绿桶。",
    keywords: ["软木塞", "酒塞", "cork", "wine cork"]
  },
  {
    name: "蜡烛、蜡 / Candles",
    bin: "landfill",
    answer: "蜡烛残渣通常放普通垃圾桶。",
    note: "玻璃蜡烛罐清空后可按玻璃容器处理；金属底座分开。",
    keywords: ["蜡烛", "蜡", "candle", "wax"]
  },
  {
    name: "照片 / Photos",
    bin: "landfill",
    answer: "放普通垃圾桶。",
    note: "相纸有涂层，通常不适合纸类回收。",
    keywords: ["照片", "相片", "photo", "photograph"]
  },
  {
    name: "尿垫、宠物垫 / Puppy pads",
    bin: "landfill",
    answer: "包好后放普通垃圾桶。",
    note: "不要放绿桶或回收桶。",
    keywords: ["尿垫", "宠物垫", "puppy pad", "pet pad"]
  },
  {
    name: "木筷、竹签 / Wooden chopsticks and skewers",
    bin: "fogo",
    answer: "未涂塑、未包装的木筷和竹签可放绿色盖食物和花园垃圾桶。",
    note: "塑料包装分开；大量或涂漆木制品不要放绿桶。",
    keywords: ["木筷", "竹签", "牙签", "chopsticks", "skewer", "toothpick"]
  },
  {
    name: "可堆肥包装 / Compostable packaging",
    bin: "landfill",
    answer: "不确定是否被 Monash 绿桶系统接受时，放普通垃圾桶。",
    note: "很多 commercial compostable 包装不适合家庭绿桶；先看 Monash 官方最新说明。",
    keywords: ["可堆肥包装", "compostable packaging", "bioplastic", "plant based plastic"]
  },
  {
    name: "可降解塑料袋 / Biodegradable plastic bags",
    bin: "landfill",
    answer: "不确定被接受时放普通垃圾桶。",
    note: "可降解不等于适合绿桶或回收桶。",
    keywords: ["可降解袋", "生物降解袋", "biodegradable bag", "compostable bag"]
  },
  {
    name: "园艺塑料袋、土袋 / Potting mix bags",
    bin: "landfill",
    answer: "放普通垃圾桶。",
    note: "属于软塑料包装，不要放黄盖回收桶。",
    keywords: ["土袋", "肥料袋", "园艺袋", "potting mix bag", "soil bag", "fertiliser bag"]
  }
];

const quickSearches = ["头发", "电池", "咖啡杯", "猫砂", "披萨盒", "塑料袋", "床垫", "纸板箱", "喷雾罐", "手机"];
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
