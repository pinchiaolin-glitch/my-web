
import React from 'react';
import { 
  PenTool, 
  Image as ImageIcon, 
  Video, 
  Zap, 
  Layout, 
  Bot, 
  Sparkles, 
  FileText, 
  Palette, 
  Play,
  Smartphone
} from 'lucide-react';
import { PersonalInfo, Skill, Project, Experience, Testimonial } from './types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "Pinchiao Lin",
  role: "Product Designer",
  bio: "專注於打造富有表現力且引人入勝的數位體驗。協助新創公司與企業將創意轉化為以使用者為核心的解決方案。",
  longBio: "你好！我是 Pinchiao，一位熱愛探索設計邊界的產品設計師。擁有三年以上的實戰經驗，我擅長將複雜的商業需求轉化為直觀且富有美感的用戶體驗。\n\n我的設計旅程橫跨了快節奏的新創公司與制度嚴謹的大型企業。在福維克 (Vorwerk) 的行銷團隊中，我負責大型活動的視覺統籌與執行，學會了如何在跨部門協作中精準傳遞品牌價值；而在藝高文創的經歷，則磨練了我對視覺細節的極致追求與平面設計的深厚功底。\n\n我堅信好的設計不僅是視覺上的享受，更是解決問題的優雅方案。我喜歡深入挖掘使用者的真實需求，並運用數據驅動的思維來優化每一個互動環節。除了設計專業，我也熱衷於研究 AI 工具（如 ChatGPT、Gemini）在設計流程中的應用，致力於提升工作效率並探索更多創意的可能性。\n\n閒暇之餘，我是一個動漫愛好者與攝影迷，這些興趣不僅豐富了我的生活，也成為我創作靈感的泉源。我隨時準備好迎接新的挑戰，期待能與更多優秀的團隊合作，共同創造出令人驚艷的產品。",
  tags: [
    "Prototyping", 
    "Adobe Illustrator", 
    "Adobe Photoshop", 
    "Adobe Premiere", 
    "Adobe After Effects", 
    "Figma", 
    "ChatGPT", 
    "Gemini", 
    "Anime Lover 🍜", 
    "Tech Enthusiast 💻"
  ],
  email: "pinchiaolin@gmail.com",
  location: "Taiwan",
  socials: {
    linkedin: "https://www.linkedin.com/in/pinchiao-lin-b92458243",
    instagram: "https://www.instagram.com/pin_lin03/"
  }
};

export const PROFILE_IMAGE = "https://images.plurk.com/16c6yr1De5nCExqmQPkROr.jpg";

export const SKILLS: Skill[] = [
  { name: "Illustrator", icon: <PenTool className="w-6 h-6" />, color: "text-orange-500" },
  { name: "Photoshop", icon: <ImageIcon className="w-6 h-6" />, color: "text-blue-500" },
  { name: "Premiere", icon: <Video className="w-6 h-6" />, color: "text-purple-500" },
  { name: "After Effects", icon: <Zap className="w-6 h-6" />, color: "text-indigo-500" },
  { name: "Figma", icon: <Layout className="w-6 h-6" />, color: "text-red-400" },
  { name: "ChatGPT", icon: <Bot className="w-6 h-6" />, color: "text-green-400" },
  { name: "Gemini", icon: <Sparkles className="w-6 h-6" />, color: "text-blue-400" },
  { name: "Canva", icon: <Palette className="w-6 h-6" />, color: "text-cyan-500" },
];

// New constants for the specific Resume Layout
export const RESUME_LANGUAGES = [
  { language: "Taiwanese Mandarin", level: "Native", flag: "🇹🇼" },
  { language: "English", level: "Professional working", flag: "🇬🇧" }
];

export const RESUME_SPECIFIC_SKILLS = {
  design: ["Graphic Design", "Exhibition Design", "Print Design"],
  video: ["Video Editing", "Motion Graphics", "Storyboard", "Script Writing"]
};

export const PROJECTS: Project[] = [
  {
    id: 29,
    type: "平面設計",
    category: "Exhibition Design",
    title: "2024 Thermomix Taipei 3C Exhibition",
    description: "2024 台北 3C 大展 Thermomix 展場整體設計與背板設計。",
    fullDescription: "展場整體設計 / 背板設計 (Exhibition Design / Backdrop Design)\n\n負責 2024 Thermomix 台北電器空調影音 3C 大展的展場整體視覺設計。專案內容包含展位空間氛圍營造、動線規劃以及大型形象背板設計，旨在於喧鬧的展場中建立清晰、專業且具吸引力的品牌形象，提升顧客駐足率與體驗質感。",
    stack: ["Exhibition Design", "Large Format Print", "Space Planning"],
    image: "https://images.plurk.com/7wYl1YTckjRuFaCGPsvqyV.png",
    icon: <PenTool className="w-6 h-6" />,
    embedUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fthermomix.taiwan%2Fvideos%2F2122355954786395%2F&show_text=false&width=560&t=0"
  },
  {
    id: 28,
    type: "影音",
    category: "CSR Event",
    title: "Karcher Taiwan 感恩清潔日",
    description: "Karcher Taiwan 年度公益活動「感恩清潔日」活動紀錄影片。",
    fullDescription: "活動紀錄與製作統籌 (Event Videography & Production Coordination)\n\n這是一支為 Karcher Taiwan 拍攝的年度公益活動「感恩清潔日」紀錄片。透過鏡頭捕捉團隊回饋社會的溫暖時刻，傳遞品牌致力於公益與清潔服務的核心價值。\n\n【專案分工 Credits】\n• 分鏡規劃與指導：我 (Storyboard Planning & Direction)\n• 拍攝器材統籌：我 (Equipment Coordination)",
    stack: ["Storyboard", "Direction", "Video Production"],
    image: "https://images.plurk.com/1lcd1KhcFd8FP7oCjD0FoP.png",
    icon: <Video className="w-6 h-6" />,
    link: "https://www.facebook.com/karchertw/videos/1760338998095512/",
    embedUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fkarchertw%2Fvideos%2F1760338998095512%2F&show_text=false&width=560&t=0",
    facebookVideoUrl: "https://www.facebook.com/karchertw/videos/1760338998095512/"
  },
  {
    id: 27,
    type: "影音",
    category: "Social Media",
    title: "Karcher Taiwan New Year Video",
    description: "Karcher Taiwan 新年賀歲社群短影音。",
    fullDescription: "社群短影音製作 (Social Media Video Production)\n\n為 Karcher Taiwan 製作的新年賀歲短影音 (Reels)。結合品牌識別與農曆新年元素，透過輕快的剪輯節奏與動態特效，在社群媒體上傳遞節慶祝福，同時強化品牌親和力。\n\n【專案重點 Key Points】\n• 節慶氛圍：運用動態特效營造熱鬧新春氣息。\n• 品牌連結：巧妙將產品與新年掃除習俗連結。\n• 社群互動：直式影音格式優化手機觀看體驗。",
    stack: ["Video Editing", "Social Media", "Reels"],
    image: "https://images.plurk.com/6rJyT83U4oQgUgQBnNtCMh.png",
    icon: <Video className="w-6 h-6" />,
    link: "https://www.instagram.com/reel/C3HGKL6Cyx-/",
    embedUrl: "https://www.instagram.com/reel/C3HGKL6Cyx-/embed"
  },
  {
    id: 26,
    type: "平面設計",
    category: "Festival Design",
    title: "Thermomix 中秋小卡",
    description: "Thermomix 中秋節慶賀卡設計，傳達溫馨祝福。",
    fullDescription: "節慶賀卡設計 (Festival Card Design)\n\n這是一張為 Thermomix 設計的中秋節慶賀卡，旨在向客戶傳達節日的溫馨祝福。設計上融合了品牌元素與傳統中秋意象，營造出優雅且具質感的視覺效果。\n\n【設計重點 Design Highlights】\n• 氛圍營造：運用暖色調與圓月元素，象徵團圓與美好。\n• 品牌結合：巧妙將品牌識別融入節慶圖騰中。\n• 質感呈現：注重印刷細節與紙材選擇，提升手感溫潤度。",
    stack: ["Illustrator", "Print Design", "Typography"],
    image: "https://images.plurk.com/LJBklpephVfMdpxacxlW7.png",
    icon: <PenTool className="w-6 h-6" />,
    hasCaseStudy: true,
  },
  {
    id: 25,
    type: "平面設計",
    category: "Brand Identity",
    title: "E04 Barber Shop Business Card",
    description: "E04 Barber Shop 品牌識別與名片設計，展現硬派黑金風格。",
    fullDescription: "品牌識別設計 (Brand Identity Design)\n\n為 E04 Barber Shop 打造的全新品牌識別與名片設計。透過黑金配色的強烈對比，傳達專業、質感與硬派的理髮風格。\n\n【設計重點 Design Highlights】\n• 視覺識別：以手寫書法字體呈現品牌名稱，展現獨特個性。\n• 質感工藝：名片採用燙金工藝搭配深色紙材，提升觸感與視覺層次。\n• 應用延展：確保標誌在不同載體（名片、招牌、社群）上皆能保持清晰識別度。",
    stack: ["Illustrator", "Brand Identity", "Print Design"],
    image: "https://images.plurk.com/1wx6enDSsSKpVGD94jAz5.jpg",
    icon: <PenTool className="w-6 h-6" />,
    hasCaseStudy: true,
  },
  {
    id: 24,
    type: "活動企劃",
    category: "Event Execution",
    title: "2024 Taiwan Thermomix Gala",
    description: "負責春酒最核心的頒獎環節，統籌 30+ 個獎項的物資排序與人員核對。",
    fullDescription: "舞台執行 / 舞台助理 (Stage Executive / Stage Assistant)\n\n負責春酒最核心的頒獎環節，統籌 30+ 個獎項的物資排序與人員核對。\n\n【關鍵職責 Key Responsibilities】\n• 頒獎統籌：管理 30+ 個獎項物資與人員核對，確保流程順暢。\n• 動線引導：引導長官與得獎者之舞台動線，協助調整合照站位，確保畫面構圖專業。\n• 現場控管：與主持人及後台場控密切配合，精準掌控頒獎節奏，達成活動零失誤。",
    stack: ["Stage Management", "Event Execution", "Coordination"],
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2340&auto=format&fit=crop",
    icon: <Sparkles className="w-6 h-6" />,
    link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7320678047563579393",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7320678047563579393?compact=1"
  },
  {
    id: 23,
    type: "平面設計",
    category: "Merchandise Design",
    title: "Thermomix Tumbler",
    description: "Thermomix 品牌隨行杯視覺設計。",
    fullDescription: "周邊商品設計 (Merchandise Design)\n\n這是一個關於 Thermomix 品牌隨行杯的設計專案，旨在透過周邊商品強化品牌認同感與生活風格的連結。\n\n【設計概念 Design Concept】\n• 品牌延伸：將品牌視覺識別延伸至日常生活用品。\n• 簡約風格：保持乾淨俐落的設計語彙，符合現代審美。",
    stack: ["Illustrator", "Mockup", "Print Design"],
    image: "https://images.plurk.com/UZAbYPRpPScF5btEoPb1S.png",
    icon: <PenTool className="w-6 h-6" />,
    link: "https://www.linkedin.com/feed/update/urn:li:share:7223883344051101696",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7223883344051101696?compact=1"
  },
  {
    id: 22,
    type: "平面設計",
    category: "Social Media",
    title: "Karcher Taiwan Trade-in Promotion",
    description: "Karcher Taiwan 舊換新活動社群素材設計。",
    fullDescription: "社群圖文設計 (Social Media Design)\n\n為 Karcher Taiwan 德國凱馳設計的「舊換新特賣會」社群行銷素材。透過清晰的資訊層級與吸睛的視覺排版，傳達活動優惠資訊並吸引消費者參與。\n\n【設計重點 Key Points】\n• 資訊視覺化：將活動時間、地點與優惠內容條理化呈現。\n• 促銷氛圍：運用強烈的視覺元素營造活動熱度。\n• 社群優化：針對手機閱讀習慣調整版面配置。",
    stack: ["Photoshop", "Social Media", "Promotion Design"],
    image: "https://images.plurk.com/6qCp9Pe4bdo7Jcd72vpSEK.jpg",
    icon: <PenTool className="w-6 h-6" />,
    link: "https://www.instagram.com/p/C7vJ_BNISgk/",
    embedUrl: "https://www.instagram.com/p/C7vJ_BNISgk/embed"
  },
  {
    id: 21,
    type: "平面設計",
    category: "Social Media",
    title: "Karcher Taiwan Mid-Autumn Design",
    description: "Karcher Taiwan 中秋節社群行銷素材設計。",
    fullDescription: "社群圖文設計 (Social Media Design)\n\n為 Karcher Taiwan 德國凱馳設計的中秋節社群行銷素材。結合品牌識別色與中秋節慶元素，營造溫馨且具品牌辨識度的節慶氛圍。\n\n【設計重點 Key Points】\n• 節慶氛圍營造：融合中秋元素與品牌調性。\n• 產品結合：巧妙將清潔家電融入節慶場景。\n• 社群互動：設計吸睛視覺提升貼文互動率。",
    stack: ["Photoshop", "Social Media", "Festival Design"],
    image: "https://images.plurk.com/6qCp9Pe4bdo7Jcd72vpSEK.jpg",
    icon: <PenTool className="w-6 h-6" />,
    link: "https://www.instagram.com/p/C_-psrdpkoQ/",
    embedUrl: "https://www.instagram.com/p/C_-psrdpkoQ/embed"
  },
  {
    id: 19,
    type: "活動企劃",
    category: "Event Planning",
    title: "2024 Vorwerk Glamping",
    description: "為慰勞高績效業務團隊，策劃兩天一夜的戶外豪華露營行程。",
    fullDescription: "豪華露營活動企劃 (Luxury Glamping Planner)\n\n為慰勞高績效業務團隊，策劃兩天一夜的戶外豪華露營行程。有別於傳統飯店宴會，本次活動聚焦於「沈浸式自然體驗」與「深度交流」，打造放鬆且兼具尊榮感的獎勵旅程。\n\n【關鍵職責 Key Responsibilities】\n• 營地晚宴：規劃戶外動線與無限暢飲吧台，營造美式派對氛圍。\n• 流程控管：執行營火晚會與團隊遊戲，成功活絡氣氛並深化團隊情誼。\n• 現場應變：解決戶外環境（供電/天候）之突發狀況，確保全程體驗順暢舒適。",
    stack: ["Event Planning", "Outdoor Event", "Crisis Management"],
    image: "https://images.plurk.com/6EGiSw0CtYhhnZt4ex3N3Y.png",
    icon: <Sparkles className="w-6 h-6" />,
    link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7189069880552312833",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7189069880552312833?compact=1"
  },
  {
    id: 18,
    type: "影音",
    category: "Event Coverage",
    title: "2024 Vorwerk Taiwan HQ Year-End Activities",
    description: "2024 Vorwerk Taiwan HQ 年終活動精華紀錄。",
    fullDescription: "春酒活動主辦 (Spring Banquet Organizer)\n\n策劃並執行 50 人規模的溫馨精緻春酒。區別於傳統大型宴會，本次活動專注於強化團隊凝聚力，透過客製化的互動環節與場地氛圍營造，打造高參與度的員工體驗。\n\n【專案特色 Highlights】\n• 溫馨精緻風格：打造區別於傳統大型宴會的溫馨氛圍。\n• 強化凝聚力：設計客製化互動環節，提升員工參與度。\n• 氛圍營造：精心規劃場地佈置，創造獨特的活動體驗。",
    stack: ["Event Coverage", "Video Record", "Event Highlight"],
    image: "https://images.plurk.com/78gJa2SSV28iXjgkxGpwIn.png",
    icon: <Video className="w-6 h-6" />,
    link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7288570379164401664",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7288570379164401664?compact=1"
  },
  {
    id: 17,
    type: "影音",
    category: "Event Coverage",
    title: "2023 Vorwerk Taiwan HQ Year-End Activities",
    description: "2023 Vorwerk Taiwan HQ 年終活動精華紀錄。",
    fullDescription: "春酒活動主辦 (Spring Banquet Organizer)\n\n策劃並執行 50 人規模的溫馨精緻春酒。區別於傳統大型宴會，本次活動專注於強化團隊凝聚力，透過客製化的互動環節與場地氛圍營造，打造高參與度的員工體驗。\n\n【專案特色 Highlights】\n• 溫馨精緻風格：打造區別於傳統大型宴會的溫馨氛圍。\n• 強化凝聚力：設計客製化互動環節，提升員工參與度。\n• 氛圍營造：精心規劃場地佈置，創造獨特的活動體驗。",
    stack: ["Event Coverage", "Video Record", "Event Highlight"],
    image: "https://images.plurk.com/54ppv7F0RV7HnSlQ7ovLue.png",
    icon: <Video className="w-6 h-6" />,
    link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7159013873889513473",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7159013873889513473?compact=1"
  },
  {
    id: 16,
    type: "活動企劃",
    category: "Event Execution",
    title: "2023 Taiwan Thermomix Gala",
    description: "負責春酒最核心的頒獎環節，統籌 30+ 個獎項的物資排序與人員核對。",
    fullDescription: "舞台執行 / 舞台助理 (Stage Executive / Stage Assistant)\n\n負責春酒最核心的頒獎環節，統籌 30+ 個獎項的物資排序與人員核對。\n\n【關鍵職責 Key Responsibilities】\n• 頒獎統籌：管理 30+ 個獎項物資與人員核對，確保流程順暢。\n• 動線引導：引導長官與得獎者之舞台動線，協助調整合照站位，確保畫面構圖專業。\n• 現場控管：與主持人及後台場控密切配合，精準掌控頒獎節奏，達成活動零失誤。",
    stack: ["Stage Management", "Event Execution", "Coordination"],
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2340&auto=format&fit=crop",
    icon: <Sparkles className="w-6 h-6" />,
    link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7138798105126195200",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7138798105126195200?compact=1"
  },
  {
    id: 15,
    type: "活動企劃",
    category: "Event Planning",
    title: "2023 Vorwerk Taiwan HQ Year-End Activities",
    description: "策劃並執行 50 人規模的溫馨精緻春酒，專注於強化團隊凝聚力。",
    fullDescription: "春酒活動主辦 (Spring Banquet Organizer)\n\n策劃並執行 50 人規模的溫馨精緻春酒。區別於傳統大型宴會，本次活動專注於強化團隊凝聚力，透過客製化的互動環節與場地氛圍營造，打造高參與度的員工體驗。\n\n【專案特色 Highlights】\n• 溫馨精緻風格：打造區別於傳統大型宴會的溫馨氛圍。\n• 強化凝聚力：設計客製化互動環節，提升員工參與度。\n• 氛圍營造：精心規劃場地佈置，創造獨特的活動體驗。",
    stack: ["Event Planning", "Team Building", "Employee Experience"],
    image: "https://images.plurk.com/54ppv7F0RV7HnSlQ7ovLue.png",
    icon: <Sparkles className="w-6 h-6" />,
    link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7159013873889513473",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7159013873889513473?compact=1"
  },
  {
    id: 14,
    type: "活動企劃",
    category: "Event Planning",
    title: "2024 Vorwerk Taiwan HQ Year-End Activities",
    description: "策劃並執行 50 人規模的溫馨精緻春酒，專注於強化團隊凝聚力。",
    fullDescription: "春酒活動主辦 (Spring Banquet Organizer)\n\n策劃並執行 50 人規模的溫馨精緻春酒。區別於傳統大型宴會，本次活動專注於強化團隊凝聚力，透過客製化的互動環節與場地氛圍營造，打造高參與度的員工體驗。\n\n【專案特色 Highlights】\n• 溫馨精緻風格：打造區別於傳統大型宴會的溫馨氛圍。\n• 強化凝聚力：設計客製化互動環節，提升員工參與度。\n• 氛圍營造：精心規劃場地佈置，創造獨特的活動體驗。",
    stack: ["Event Management", "Team Building", "Employee Experience"],
    image: "https://images.plurk.com/78gJa2SSV28iXjgkxGpwIn.png",
    icon: <Sparkles className="w-6 h-6" />,
    link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7288570379164401664",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7288570379164401664?compact=1"
  },
  {
    id: 13,
    type: "活動企劃",
    category: "Event Planning",
    title: "Kobold Division Annual Recognition Party",
    description: "獨自企劃並主導 100+ 人規模之年度春酒活動，負責全流程管理。",
    fullDescription: "春酒全案統籌 (Event Lead & Planner)\n\n獨自企劃並主導 100+ 人規模之年度春酒活動，負責從預算規劃、供應商談判至現場活動執行的全流程管理，確保活動圓滿落幕。\n\n【關鍵職責 Key Responsibilities】\n• 全案統籌與企劃 (End-to-End Planning)：制定活動主題、流程（Rundown）與預算控管，在有限資源下最大化活動效益。\n• 供應商管理與談判 (Vendor Management)：獨立篩選並對接場地、餐飲、硬體設備與表演團隊，成功協調出符合需求的合作方案。\n• 跨部門溝通協調 (Cross-functional Communication)：整合公司內部百人需求，處理報名、座位安排及特殊飲食需求，確保資訊傳遞無誤。\n• 現場執行與場控 (On-site Execution & Crisis Management)：擔任活動當日總指揮，監控活動流程，即時排除現場突發狀況，確保活動零延遲/零失誤。\n\n【成效 Achievements】\n• 活動後獲得同仁高度好評，滿意度達 90%。\n• 透過有效宣傳與動員，達成 98% 的高出席率。",
    stack: ["Event Management", "Budget Control", "Vendor Negotiation", "Team Leadership"],
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2338&auto=format&fit=crop",
    icon: <Sparkles className="w-6 h-6" />,
    link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7326428422249873409",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7326428422249873409?compact=1"
  },
  {
    id: 12,
    type: "影音",
    category: "Event Coverage",
    title: "2024 Thermomix 業務啟動大會",
    description: "Thermomix 2024 業務啟動大會活動紀錄影片。",
    fullDescription: "影音專案統籌 (Video Project Coordinator)\n\n這是 Thermomix 2024 業務啟動大會的精彩活動紀錄，展現了團隊的活力與凝聚力。\n\n【專案分工 Credits】\n• 影音專案統籌：我 (Project Coordination)\n• 剪輯/拍攝/配音/收音：一打工作室",
    stack: ["Project Management", "Video Production", "Event"],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2340&auto=format&fit=crop",
    icon: <Video className="w-6 h-6" />,
    link: "https://www.facebook.com/thermomix.taiwan/videos/1109997923462436/",
    embedUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fthermomix.taiwan%2Fvideos%2F1109997923462436%2F&show_text=false&width=560&t=0",
    facebookVideoUrl: "https://www.facebook.com/thermomix.taiwan/videos/1109997923462436/"
  },
  {
    id: 11,
    type: "影音",
    category: "Localization",
    title: "Thermomix Cookidoo App 全新登場",
    description: "總部品牌影片繁體中文化，介面在地化與動效還原。",
    fullDescription: "影片在地化與動效製作 (Video Localization & Motion Graphics)\n\n本專案將總公司的品牌視覺識別（VI）影片進行了精細的「繁體中文化」處理。除了將影片中的英文介面與標題字卡（Title Cards）全面替換為繁體中文外，更注重動態特效（Motion）的細節重現，完美還原總部影片的質感與流暢度。\n\n【關鍵執行 Key Execution】\n• 介面中文化：將英文介面精準替換為繁體中文版本。\n• 動效還原：細緻重現原版影片的動態特效與轉場。\n• 質感維持：確保在地化版本與總部品牌識別的一致性。",
    stack: ["After Effects", "Localization", "Motion Graphics"],
    image: "https://images.plurk.com/WtUQESQZoiYeh6ysdyKfx.jpg",
    icon: <Video className="w-6 h-6" />,
    link: "https://www.facebook.com/thermomix.taiwan/videos/958369523166305/",
    embedUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fthermomix.taiwan%2Fvideos%2F958369523166305%2F&show_text=false&width=560&t=0",
    facebookVideoUrl: "https://www.facebook.com/thermomix.taiwan/videos/958369523166305/"
  },
  {
    id: 10,
    type: "影音",
    category: "Social Campaign",
    title: "Thermomix 2024 聖誕 CRM 方案",
    description: "Thermomix 2024 聖誕 CRM 方案宣傳短影音。",
    fullDescription: "社群短影音製作 (Social Media Video Production)\n\n這是一支針對 Thermomix 2024 聖誕 CRM 方案的社群宣傳影片，透過生動的視覺語言傳達活動亮點與節慶氛圍。\n\n【專案分工 Credits】\n• 排版設計/分鏡：我 (Layout Design & Storyboard)\n• 剪輯/配樂：王惟正 (Editing & Music)",
    stack: ["Social Media", "Layout Design", "Video Editing"],
    image: "https://images.plurk.com/1BIICoYG5HnXnk2ZjexPKO.jpg",
    icon: <Smartphone className="w-6 h-6" />,
    link: "https://www.facebook.com/thermomix.taiwan/videos/490698840058467/",
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fthermomix.taiwan%2Fvideos%2F490698840058467%2F&show_text=false&width=476&t=0"
  },
  {
    id: 9,
    type: "影音",
    category: "Social Campaign",
    title: "Thermomix 2025 新春 CRM 方案",
    description: "Thermomix 2025 新春 CRM 方案宣傳短影音。",
    fullDescription: "社群短影音製作 (Social Media Video Production)\n\n這是一支針對 Thermomix 2025 新春 CRM 方案的社群宣傳影片，透過生動的視覺語言傳達活動亮點。\n\n【專案分工 Credits】\n• 排版設計/分鏡：我 (Layout Design & Storyboard)\n• 剪輯/配樂：謝沛辰 (Editing & Music)",
    stack: ["Social Media", "Layout Design", "Storyboard"],
    image: "https://images.plurk.com/7rtD2YD3x0400kxvvbUzVF.jpg",
    icon: <Smartphone className="w-6 h-6" />,
    link: "https://www.facebook.com/reel/2407671559563890",
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fthermomix.taiwan%2Fvideos%2F2407671559563890%2F&show_text=false&width=476&t=0"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    company: "Freelance",
    role: "Graphic Designer",
    period: "May 2025 - Present",
    description: "Delivering creative graphic design solutions for various clients and brand identities.",
    logo: "https://cdn-icons-png.flaticon.com/512/1005/1005141.png"
  },
  {
    id: 2,
    company: "Vorwerk 福維克",
    role: "Marketing Assistant",
    period: "Feb 2022 - Apr 2025",
    description: "Assisted in marketing strategies, campaign execution, and brand promotion activities.",
    logo: "https://images.plurk.com/6Do2myBS18wPTYTKtO0DUk.jpg"
  },
  {
    id: 3,
    company: "iEgoArt藝高文創",
    role: "Graphic Designer",
    period: "Sep 2021 - Sep 2022",
    description: "Created visual assets, marketing materials, and contributed to creative design projects.",
    logo: "https://images.plurk.com/KrSOXDtjoTLhz6v4T1sim.png"
  }
];

export const CLIENT_LOGOS = [
  { url: "https://images.plurk.com/6czyo0BmIHG0Kl0TgL6scF.jpg", scale: "scale-100" },
  { url: "https://images.plurk.com/kzcSMw9zbgrn3ZIj7KsJ9.png", scale: "scale-150" }, // Vorwerk
  { url: "https://images.plurk.com/KrSOXDtjoTLhz6v4T1sim.png", scale: "scale-150" }, // iEgoArt
  { url: "https://images.plurk.com/6qCp9Pe4bdo7Jcd72vpSEK.jpg", scale: "scale-100" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Product Manager",
    company: "Tech Solutions Inc.",
    text: "Pinchiao 是一位非常有才華的設計師！她不僅能精準抓到品牌風格，溝通也非常順暢。強烈推薦！",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2340&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Sarah Wu",
    role: "Marketing Director",
    company: "Vorwerk 福維克",
    text: "在合作期間，Pinchiao 展現了極高的專業度與創意，總是能超出我們的預期完成任務。",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2340&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "David Liu",
    role: "Founder",
    company: "StartUp X",
    text: "與 Pinchiao 合作非常愉快，她的設計不僅美觀，更重要的是非常符合使用者體驗。",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2187&auto=format&fit=crop"
  }
];
