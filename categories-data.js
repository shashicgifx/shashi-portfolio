/**
 * WORK CATEGORIES & VIDEO SHOWCASE DATA
 * ============================================================================
 * Edit this file anytime to add, update, or remove videos from your categories!
 * 
 * All media is loaded directly from your local folders with full HD quality!
 * ============================================================================
 */

const WORK_CATEGORIES_DATA = [
  {
    id: "ai-ad-films",
    title: "AI Ad Films",
    subtitle: "Commercial & Promotional",
    description: "High-impact AI commercial advertisements, generative product spots, and viral campaigns.",
    badge: "11 videos",
    stickyTag: "commercial ✨",
    thumbnail: "./assets/cat_ai_ad_films.svg",
    tools: ["Runway Gen-3", "Higgsfield", "Premiere Pro", "Claude AI"],
    videos: [
      {
        title: "Titan Watch Commercial",
        description: "Cinematic commercial for Titan timepieces with dynamic motion and lighting.",
        url: "./videos/ai-ad-films/titannn.mp4",
        poster: "./assets/thumbnails/thumb_titannn.jpg"
      },
      {
        title: "Dior Luxury Bag Campaign",
        description: "High-fashion AI generative commercial featuring elegant cinematic compositions.",
        url: "./videos/ai-ad-films/Dior Bag.mp4",
        poster: "./assets/thumbnails/thumb_dior_bag.jpg"
      },
      {
        title: "Apple Newton Commercial",
        description: "Retro-futuristic brand commercial spot with dynamic kinetic framing.",
        url: "./videos/ai-ad-films/APPLE NEWTON AD.mp4",
        poster: "./assets/thumbnails/thumb_apple_newton.jpg"
      },
      {
        title: "Nightcrew AI SaaS Product Film",
        description: "Modern digital product promo highlighting AI SaaS workflow automation.",
        url: "./videos/ai-ad-films/Nightcrew_AI_SaaS_Product_Video_Shahi_Singh.mp4",
        poster: "./assets/thumbnails/thumb_nightcrew.jpg"
      },
      {
        title: "Vaara Brand Commercial",
        description: "Story-driven commercial film featuring atmospheric visuals and styling.",
        url: "./videos/ai-ad-films/Vaara.mp4",
        poster: "./assets/thumbnails/thumb_vaara.jpg"
      },
      {
        title: "Alien Sci-Fi Cinematic",
        description: "Generative sci-fi trailer sequence with intense atmosphere and VFX pacing.",
        url: "./videos/ai-ad-films/final alien mp4.mp4",
        poster: "./assets/thumbnails/thumb_final_alien.jpg"
      },
      {
        title: "Ice Cream Delight Commercial",
        description: "Vibrant and playful confectionery spot with rich macro close-ups.",
        url: "./videos/ai-ad-films/ice cream.mp4",
        poster: "./assets/thumbnails/thumb_ice_cream.jpg"
      },
      {
        title: "Monster Energy Promo",
        description: "High-octane action commercial with fast-paced rhythm and sound design.",
        url: "./videos/ai-ad-films/monster drink-.mp4",
        poster: "./assets/thumbnails/thumb_monster_drink.jpg"
      },
      {
        title: "Amazon Ad Campaign",
        description: "E-commerce commercial visual sequence with product narrative rhythm.",
        url: "./videos/ai-ad-films/amzone.mp4",
        poster: "./assets/thumbnails/thumb_amzone.jpg"
      },
      {
        title: "Chocolate Artisanal Ad",
        description: "Rich textural commercial spot with smooth camera sweeps and appetizing motion.",
        url: "./videos/ai-ad-films/choclate B ad.mp4",
        poster: "./assets/thumbnails/thumb_choclate_b.jpg"
      },
      {
        title: "Protiwon Health Commercial",
        description: "Wellness and nutrition brand ad focused on vitality and energy.",
        url: "./videos/ai-ad-films/PROTIWON.mp4",
        poster: "./assets/thumbnails/thumb_protiwon.jpg"
      }
    ]
  },
  {
    id: "brand-films",
    title: "Brand Films",
    subtitle: "Narrative & Identity",
    description: "Cinematic brand storytelling, corporate identity films, and creative vision showcases.",
    badge: "3 videos",
    stickyTag: "cinematic 🎬",
    thumbnail: "./assets/cat_brand_films.svg",
    tools: ["After Effects", "Color Grading", "Sound Design", "Premiere Pro"],
    videos: [
      {
        title: "Our India - Cinematic Heritage Film",
        description: "Epic cultural storytelling celebrating Indian heritage, architecture, and spirit.",
        url: "./videos/brand-films/OUR INDIA .mp4",
        poster: "./assets/thumbnails/thumb_our_india.jpg"
      },
      {
        title: "Gody Bab Cinematic Brand Story",
        description: "Narrative brand identity film highlighting vision, lifestyle, and craftsmanship.",
        url: "./videos/brand-films/GODY BAB_fi.mp4",
        poster: "./assets/thumbnails/thumb_gody_bab.jpg"
      },
      {
        title: "Brand Vision & Identity",
        description: "Atmospheric brand showcase with polished cinematography and color grading.",
        url: "./videos/brand-films/for yttt.mp4",
        poster: "./assets/thumbnails/thumb_for_yttt.jpg"
      }
    ]
  },
  {
    id: "motion-graphics",
    title: "Motion Graphics",
    subtitle: "Kinetic & Visual Effects",
    description: "Dynamic kinetic typography, broadcast package motion graphics, and logo animations.",
    badge: "0 videos",
    stickyTag: "kinetic ⚡",
    thumbnail: "./assets/cat_motion_graphics.svg",
    tools: ["After Effects", "Illustrator", "Cinema 4D", "Lottie"],
    videos: []
  },
  {
    id: "animation",
    title: "Animation",
    subtitle: "2D/3D & Character",
    description: "Character animation, stylistic visual storytelling, and 2D/3D composite sequences.",
    badge: "0 videos",
    stickyTag: "creative 🎨",
    thumbnail: "./assets/cat_animation.svg",
    tools: ["Nuke", "Fusion", "After Effects", "Photoshop"],
    videos: []
  },
  {
    id: "video-editing",
    title: "Video Editing",
    subtitle: "Pacing & Post-Production",
    description: "Rhythm-driven montage cutting, sound design synchronization, and color grading.",
    badge: "2 videos",
    stickyTag: "post-prod ✂️",
    thumbnail: "./assets/cat_video_editing.svg",
    tools: ["Premiere Pro", "Filmora", "Audio Sync", "Color Match"],
    videos: [
      {
        title: "Corporate Brand & Dynamic Motion",
        description: "Polished corporate edit with seamless graphic transitions and clean pacing.",
        url: "./videos/video-editing/COMPANY FF.mp4",
        poster: "./assets/thumbnails/thumb_company_ff.jpg"
      },
      {
        title: "Rhythm Montage & Visual Transitions",
        description: "High-energy timeline edit showcasing multi-layer pacing and sync sound design.",
        url: "./videos/video-editing/Comp 1.mp4",
        poster: "./assets/thumbnails/thumb_comp_1.jpg"
      }
    ]
  },
  {
    id: "photography",
    title: "Photography",
    subtitle: "Visuals & Prompts",
    description: "Framed lens captures, editorial portraiture, and neural image synthesis direction.",
    badge: "4 photos",
    stickyTag: "lens 📷",
    thumbnail: "./assets/cat_photography.svg",
    tools: ["Photoshop", "Lightroom", "OpenArt", "Midjourney"],
    videos: [
      {
        title: "Editorial Portrait I",
        description: "Cinematic framed lens capture with natural atmospheric lighting.",
        url: "./videos/photography/IMG_20250419_193109.jpg",
        poster: "./videos/photography/IMG_20250419_193109.jpg"
      },
      {
        title: "Editorial Portrait II",
        description: "Character study portrait with artistic depth of field.",
        url: "./videos/photography/IMG_20250419_193300.jpg",
        poster: "./videos/photography/IMG_20250419_193300.jpg"
      },
      {
        title: "Editorial Portrait III",
        description: "Moody environmental portrait highlighting tone and texture.",
        url: "./videos/photography/IMG_20250419_193407.jpg",
        poster: "./videos/photography/IMG_20250419_193407.jpg"
      },
      {
        title: "Editorial Portrait IV",
        description: "Intimate close-up framing with expressive contrast.",
        url: "./videos/photography/IMG_20250419_193558.jpg",
        poster: "./videos/photography/IMG_20250419_193558.jpg"
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.WORK_CATEGORIES_DATA = WORK_CATEGORIES_DATA;
}
