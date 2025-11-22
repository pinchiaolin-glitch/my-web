
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
  Play 
} from 'lucide-react';
import { PersonalInfo, Skill, Project, Experience, Testimonial } from './types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "Pinchiao Lin",
  role: "Product Designer",
  bio: "專注於打造富有表現力且引人入勝的數位體驗。協助新創公司與企業將創意轉化為以使用者為核心的解決方案。",
  longBio: "你好！我是 Pinchiao。擁有三年以上的設計經驗，我熱衷於探索設計與科技的交會點。我曾在不同規模的團隊中工作，從初創公司到大型企業，這讓我學會了如何在美學與商業目標之間取得平衡。閒暇之餘，我喜歡動漫、攝影以及研究最新的互動科技。",
  tags: [
    "UX Research", 
    "UI Design", 
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
  email: "your.email@example.com",
  location: "Taiwan",
  socials: {
    twitter: "#",
    linkedin: "#",
    instagram: "#",
    behance: "#"
  }
};

export const PROFILE_IMAGE = "https://images.plurk.com/16c6yr1De5nCExqmQPkROr.jpg";

export const SKILLS: Skill[] = [
  { name: "Adobe Illustrator", icon: <PenTool className="w-6 h-6" />, color: "text-orange-500" },
  { name: "Adobe Photoshop", icon: <ImageIcon className="w-6 h-6" />, color: "text-blue-500" },
  { name: "Adobe Premiere", icon: <Video className="w-6 h-6" />, color: "text-purple-500" },
  { name: "Adobe After Effects", icon: <Zap className="w-6 h-6" />, color: "text-indigo-500" },
  { name: "Figma", icon: <Layout className="w-6 h-6" />, color: "text-red-400" },
  { name: "ChatGPT", icon: <Bot className="w-6 h-6" />, color: "text-green-400" },
  { name: "Gemini", icon: <Sparkles className="w-6 h-6" />, color: "text-blue-400" },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    type: "活動企劃",
    category: "UX Planning",
    title: "E-Commerce UX Redesign",
    description: "針對時尚電商平台的購物流程進行全面審計與優化企劃。",
    fullDescription: "此專案針對現有用戶旅程進行了全面審計，最終使轉換率提高了 40%。我們專注於行動優先的設計原則並簡化了結帳流程。",
    stack: ["Figma", "User Flow", "Strategy"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    icon: <Layout className="w-6 h-6" />
  },
  {
    id: 2,
    type: "活動企劃",
    category: "App Strategy",
    title: "Finance App Strategy",
    description: "為金融追蹤應用程式制定的產品策略與功能規劃。",
    fullDescription: "設計了一個直觀的個人財務管理介面。功能包括自動分類、AI 驅動的支出洞察和目標追蹤視覺化。",
    stack: ["Notion", "Miro", "Market Research"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
    icon: <FileText className="w-6 h-6" />
  },
  {
    id: 3,
    type: "平面設計",
    category: "Brand Identity",
    title: "Tech Startup Branding",
    description: "為科技新創公司設計的動態品牌識別系統。",
    fullDescription: "創建了一個有凝聚力的視覺識別系統，包括標誌設計、排版、調色板和數位接觸點的動態指南。",
    stack: ["Illustrator", "Photoshop", "Branding"],
    image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=2340&auto=format&fit=crop",
    icon: <Palette className="w-6 h-6" />
  },
  {
    id: 4,
    type: "平面設計",
    category: "Marketing Material",
    title: "Event Key Visual",
    description: "大型年度活動的主視覺設計與周邊延展。",
    fullDescription: "負責年度科技論壇的主視覺設計，並延展至海報、識別證、社群媒體素材等周邊應用。",
    stack: ["Photoshop", "InDesign"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2340&auto=format&fit=crop",
    icon: <PenTool className="w-6 h-6" />
  },
  {
    id: 5,
    type: "影音",
    category: "Motion Graphics",
    title: "Product Promo Video",
    description: "為新產品發布製作的 30 秒動態宣傳短片。",
    fullDescription: "使用 After Effects 製作的動態圖形影片，展示產品核心功能，用於社群媒體廣告投放。",
    stack: ["After Effects", "Premiere", "Sound Design"],
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2200&auto=format&fit=crop",
    icon: <Video className="w-6 h-6" />
  },
  {
    id: 6,
    type: "影音",
    category: "Video Editing",
    title: "Interview Series",
    description: "企業內部訪談系列的剪輯與後期製作。",
    fullDescription: "負責剪輯一系列員工訪談，包含調色、收音處理與字幕製作，提升企業雇主品牌形象。",
    stack: ["Premiere Pro", "DaVinci Resolve"],
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?q=80&w=2340&auto=format&fit=crop",
    icon: <Play className="w-6 h-6" />
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

export const GALLERY_IMAGES: string[] = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2264&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2340&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2164&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2340&auto=format&fit=crop",
];
