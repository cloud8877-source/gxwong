import React from 'react';
import type { Service, Testimonial, NavLink, ProcessStep, FAQItem } from './types';

// Icons for Services
const WillIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5, ...props },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" })
  )
);

const TrustIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5, ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" })
    )
);

const PowerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5, ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" }),
        React.createElement('path', { d: "M12 15a3 3 0 100-6 3 3 0 000 6z" })
    )
);

// Icons for Testimonials
const ClockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props},
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" })
    )
);
const ThumbsUpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props},
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M6.633 10.5c.806 0 1.533-.424 2.033-1.087a.99.99 0 011.734 0c.5.663 1.227 1.087 2.033 1.087m0 0a2.499 2.499 0 012.499 2.499v.001a2.499 2.499 0 01-2.499 2.499h-4.066a2.499 2.499 0 01-2.499-2.499v-.001a2.499 2.499 0 012.499-2.499m5.42-3.11a.99.99 0 00-.547-.547l-3.334-1.333a.99.99 0 00-1.103.344l-1.583 2.926a.99.99 0 01-1.734 0L6.22 5.84a.99.99 0 00-1.103-.344l-3.334 1.333a.99.99 0 00-.547.547l-1.01 3.535a.99.99 0 00.22 1.054l2.25 2.25a.99.99 0 001.4 0l1.94-1.94a.99.99 0 011.4 0l1.94 1.94a.99.99 0 001.4 0l2.25-2.25a.99.99 0 00.22-1.054l-1.01-3.535z" })
    )
);


interface Content {
  navLinks: NavLink[];
  hero: {
    preTitle: string;
    subtitle: {
      regular: string;
      gradient: string;
    };
    description: string;
    ctaButton: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    quote: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: Service[];
  };
  process: {
    title: string;
    steps: ProcessStep[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Testimonial[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: FAQItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
    };
    status: {
      loading: string;
      success: string;
      error: string;
    };
  };
  footer: {
    tagline: string;
    navigation: string;
    contact: string;
    disclaimer: {
      title: string;
      text: string;
    };
    copyright: string;
  };
}

const enContent: Content = {
  navLinks: [
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Our Process' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact Us' },
  ],
  hero: {
    preTitle: 'Your Legacy, Secured.',
    subtitle: {
      regular: 'Professional Estate Planning & ',
      gradient: 'Will Writing Services',
    },
    description: 'We help you protect your assets and ensure your loved ones are taken care of according to your wishes. Plan for the future with confidence.',
    ctaButton: 'Get a Free Consultation',
  },
  about: {
    title: 'Your Trusted Partner in Estate Planning',
    p1: 'With years of dedicated experience in Malaysian estate law, I provide personalized and comprehensive estate planning services. My mission is to demystify the process, making it accessible and straightforward for everyone.',
    p2: 'From drafting legally sound wills to setting up robust trusts, I am committed to safeguarding your legacy and providing peace of mind for you and your family.',
    quote: '"The best time to plant a tree was 20 years ago. The second best time is now." Planning your estate is planning for your family\'s future.',
  },
  services: {
    title: 'Our Core Services',
    subtitle: 'Comprehensive solutions to secure your assets and legacy.',
    items: [
      {
        icon: React.createElement(WillIcon),
        title: 'Will Writing',
        description: [
          'Drafting of legally valid wills.',
          'Appointing executors and guardians.',
          'Clear distribution of assets.',
          'Minimizing potential family disputes.',
        ],
      },
      {
        icon: React.createElement(TrustIcon),
        title: 'Trust Creation',
        description: [
          'Setting up living trusts and testamentary trusts.',
          'Protecting assets for beneficiaries.',
          'Professional management of your wealth.',
          'Ensuring privacy and bypassing probate.',
        ],
      },
      {
        icon: React.createElement(PowerIcon),
        title: 'Lasting Power of Attorney (LPA)',
        description: [
          'Appointing someone to make decisions on your behalf.',
          'Covering financial and personal welfare matters.',
          'Crucial for managing affairs if you become incapacitated.',
          'Ensures your wishes are respected.',
        ],
      },
    ],
  },
  process: {
    title: 'Our Simple 4-Step Process',
    steps: [
      {
        title: 'Initial Consultation',
        content: 'We start with a free, no-obligation consultation to understand your needs, assets, and family situation.',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop',
      },
      {
        title: 'Strategy & Planning',
        content: 'Based on our discussion, we develop a tailored estate plan strategy that aligns with your specific goals.',
        image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop',
      },
      {
        title: 'Drafting & Review',
        content: 'We draft all the necessary legal documents (Wills, Trusts, LPA) and review them with you to ensure every detail is perfect.',
        image: 'https://images.unsplash.com/photo-1554224155-8d04421cd6e2?q=80&w=2672&auto=format&fit=crop',
      },
      {
        title: 'Execution & Safekeeping',
        content: 'We guide you through the official signing and witnessing process, and offer secure storage for your important documents.',
        image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=2676&auto=format&fit=crop',
      },
    ],
  },
  testimonials: {
    title: 'What Our Clients Say',
    subtitle: 'Real stories from families we\'ve helped secure their future.',
    items: [
      {
        id: 1,
        initials: 'LT',
        name: 'Lim T.',
        role: 'Business Owner, Johor Bahru',
        quote: 'The entire process was so much simpler than I imagined. They explained everything clearly and patiently. I feel a great sense of relief knowing my family is protected.',
        tags: [
          { text: 'Will Writing', type: 'featured' },
          { text: 'Professional', type: 'default' },
        ],
        stats: [
          { icon: ClockIcon, text: '2 Weeks Process' },
          { icon: ThumbsUpIcon, text: 'Highly Recommended' },
        ],
        avatarGradient: 'linear-gradient(to top right, #34d399, #10b981)',
      },
      {
        id: 2,
        initials: 'RS',
        name: 'R. Selvam',
        role: 'Retired Teacher, Kuala Lumpur',
        quote: 'I was worried about setting up a trust for my special needs child. Their expertise was invaluable. They created a plan that gives me complete peace of mind.',
        tags: [
          { text: 'Trust Creation', type: 'featured' },
          { text: 'Compassionate', type: 'default' },
        ],
        stats: [
          { icon: ClockIcon, text: '4 Weeks Process' },
          { icon: ThumbsUpIcon, text: 'Life Saver' },
        ],
        avatarGradient: 'linear-gradient(to top right, #fb923c, #f97316)',
      },
      {
        id: 3,
        initials: 'WC',
        name: 'Wong C.',
        role: 'Doctor, Penang',
        quote: 'Very professional and efficient. They handled both my personal will and business succession planning flawlessly. I appreciate their attention to detail.',
        tags: [
          { text: 'Business Succession', type: 'featured' },
          { text: 'Efficient', type: 'default' },
        ],
        stats: [
          { icon: ClockIcon, text: '3 Weeks Process' },
          { icon: ThumbsUpIcon, text: 'Exceptional Service' },
        ],
        avatarGradient: 'linear-gradient(to top right, #60a5fa, #3b82f6)',
      },
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Answering your common questions about estate planning.',
    items: [
      {
        question: 'Why do I need a will?',
        answer: 'A will is a legal document that specifies how you want your assets to be distributed after your death. Without a will, your assets will be distributed according to Malaysia\'s Distribution Act 1958, which may not align with your wishes and can lead to family disputes and delays.',
      },
      {
        question: 'What is the difference between a will and a trust?',
        answer: 'A will only takes effect after you pass away. A trust can be effective during your lifetime (a living trust) or after death (a testamentary trust). Trusts offer more control over how and when your assets are distributed to beneficiaries and can help avoid the probate process.',
      },
      {
        question: 'How much does it cost?',
        answer: 'The cost varies depending on the complexity of your estate and the services required. We offer transparent pricing and will provide a detailed quote after our initial free consultation. Our goal is to provide affordable and accessible services.',
      },
      {
        question: 'How often should I review my will?',
        answer: 'It\'s a good practice to review your will every 3-5 years, or after any major life event such as marriage, divorce, the birth of a child, or a significant change in your financial situation. This ensures your will remains up-to-date with your current wishes.',
      },
    ],
  },
  contact: {
    title: 'Get In Touch',
    subtitle: 'Ready to plan for your future? Contact us today for a free, confidential consultation.',
    form: {
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number (Optional)',
      message: 'Your Message',
      submit: 'Send Message',
    },
    status: {
      loading: 'Sending...',
      success: 'Thank you! Your message has been sent. We will get back to you shortly.',
      error: 'Oops! Something went wrong. Please try again.',
    },
  },
  footer: {
    tagline: 'Securing legacies and providing peace of mind for families across Malaysia.',
    navigation: 'Navigation',
    contact: 'Contact Info',
    disclaimer: {
      title: 'Disclaimer',
      text: 'The information provided on this website is for general informational purposes only and does not constitute legal advice. Please consult with a qualified professional for advice tailored to your specific situation.',
    },
    copyright: 'All Rights Reserved.',
  },
};

const cnContent: Content = {
  navLinks: [
    { href: '#about', label: '关于我们' },
    { href: '#services', label: '服务项目' },
    { href: '#process', label: '我们的流程' },
    { href: '#testimonials', label: '客户评价' },
    { href: '#faq', label: '常见问题' },
    { href: '#contact', label: '联系我们' },
  ],
  hero: {
    preTitle: '您的传承，得到保障。',
    subtitle: {
      regular: '专业遗产规划与',
      gradient: '遗嘱撰写服务',
    },
    description: '我们帮助您保护您的资产，并确保您所爱的人根据您的意愿得到照顾。满怀信心地规划未来。',
    ctaButton: '获取免费咨询',
  },
  about: {
    title: '您值得信赖的遗产规划伙伴',
    p1: '凭借多年在马来西亚遗产法领域的专注经验，我提供个性化和全面的遗产规划服务。我的使命是揭开这个过程的神秘面纱，让每个人都能轻松、直接地进行规划。',
    p2: '从起草具有法律效力的遗嘱到建立稳健的信托，我致力于守护您的遗产，为您和您的家人带来安心。',
    quote: '“种一棵树最好的时间是20年前，其次是现在。” 规划您的遗产就是规划您家庭的未来。',
  },
  services: {
    title: '我们的核心服务',
    subtitle: '保障您资产和遗产的全面解决方案。',
    items: [
      {
        icon: React.createElement(WillIcon),
        title: '遗嘱撰写',
        description: [
          '起草具有法律效力的遗嘱。',
          '指定遗嘱执行人和监护人。',
          '清晰的资产分配。',
          '最大限度地减少潜在的家庭纠纷。',
        ],
      },
      {
        icon: React.createElement(TrustIcon),
        title: '信托设立',
        description: [
          '设立生前信托和遗嘱信托。',
          '为受益人保护资产。',
          '专业管理您的财富。',
          '确保隐私并绕过遗嘱认证程序。',
        ],
      },
      {
        icon: React.createElement(PowerIcon),
        title: '持久授权书 (LPA)',
        description: [
          '指定某人代表您做决定。',
          '涵盖财务和个人福利事宜。',
          '在您丧失行为能力时管理事务至关重要。',
          '确保您的意愿得到尊重。',
        ],
      },
    ],
  },
  process: {
    title: '我们简单的四步流程',
    steps: [
      {
        title: '初步咨询',
        content: '我们从免费、无义务的咨询开始，了解您的需求、资产和家庭状况。',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop',
      },
      {
        title: '策略与规划',
        content: '根据我们的讨论，我们制定一个符合您特定目标的量身定制的遗产规划策略。',
        image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop',
      },
      {
        title: '起草与审查',
        content: '我们起草所有必要的法律文件（遗嘱、信托、LPA），并与您一起审查，确保每个细节都完美无缺。',
        image: 'https://images.unsplash.com/photo-1554224155-8d04421cd6e2?q=80&w=2672&auto=format&fit=crop',
      },
      {
        title: '执行与保管',
        content: '我们指导您完成正式的签署和见证过程，并为您的重要文件提供安全的保管服务。',
        image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=2676&auto=format&fit=crop',
      },
    ],
  },
  testimonials: {
    title: '客户怎么说',
    subtitle: '我们帮助过的家庭保障他们未来的真实故事。',
    items: [
      {
        id: 1,
        initials: '林',
        name: '林先生',
        role: '企业主，新山',
        quote: '整个过程比我想象的要简单得多。他们清晰耐心地解释了一切。知道我的家人得到了保障，我感到非常安心。',
        tags: [
          { text: '遗嘱撰写', type: 'featured' },
          { text: '专业', type: 'default' },
        ],
        stats: [
          { icon: ClockIcon, text: '2周完成' },
          { icon: ThumbsUpIcon, text: '强烈推荐' },
        ],
        avatarGradient: 'linear-gradient(to top right, #34d399, #10b981)',
      },
      {
        id: 2,
        initials: 'RS',
        name: 'R. Selvam 先生',
        role: '退休教师，吉隆坡',
        quote: '我曾为我的特殊需求孩子设立信托而担忧。他们的专业知识非常宝贵。他们制定的计划让我完全安心。',
        tags: [
          { text: '信托设立', type: 'featured' },
          { text: '富同情心', type: 'default' },
        ],
        stats: [
          { icon: ClockIcon, text: '4周完成' },
          { icon: ThumbsUpIcon, text: '人生救星' },
        ],
        avatarGradient: 'linear-gradient(to top right, #fb923c, #f97316)',
      },
      {
        id: 3,
        initials: '黄',
        name: '黄女士',
        role: '医生，槟城',
        quote: '非常专业和高效。他们完美地处理了我的个人遗嘱和企业继承规划。我非常欣赏他们对细节的关注。',
        tags: [
          { text: '企业继承', type: 'featured' },
          { text: '高效', type: 'default' },
        ],
        stats: [
          { icon: ClockIcon, text: '3周完成' },
          { icon: ThumbsUpIcon, text: '卓越服务' },
        ],
        avatarGradient: 'linear-gradient(to top right, #60a5fa, #3b82f6)',
      },
    ],
  },
  faq: {
    title: '常见问题',
    subtitle: '解答您关于遗产规划的常见问题。',
    items: [
      {
        question: '为什么我需要遗嘱？',
        answer: '遗嘱是一份法律文件，规定了您去世后希望如何分配您的资产。没有遗嘱，您的资产将根据马来西亚的1958年分配法令进行分配，这可能不符合您的意愿，并可能导致家庭纠纷和延误。',
      },
      {
        question: '遗嘱和信托有什么区别？',
        answer: '遗嘱只在您去世后生效。信托可以在您在世时生效（生前信托），也可以在去世后生效（遗嘱信托）。信托在如何以及何时向受益人分配资产方面提供更多控制权，并可以帮助避免遗嘱认证过程。',
      },
      {
        question: '费用是多少？',
        answer: '费用根据您遗产的复杂性和所需服务而有所不同。我们提供透明的定价，并在我们初步免费咨询后提供详细报价。我们的目标是提供价格合理且易于获得的服务。',
      },
      {
        question: '我应该多久审查一次我的遗嘱？',
        answer: '每3-5年审查一次您的遗嘱是一个好习惯，或者在任何重大生活事件之后，如结婚、离婚、生子或财务状况发生重大变化后。这能确保您的遗嘱与您当前的意愿保持一致。',
      },
    ],
  },
  contact: {
    title: '联系我们',
    subtitle: '准备好为您的未来规划了吗？立即联系我们进行免费、保密的咨询。',
    form: {
      name: '全名',
      email: '电子邮件地址',
      phone: '电话号码（可选）',
      message: '您的留言',
      submit: '发送留言',
    },
    status: {
      loading: '发送中...',
      success: '谢谢！您的留言已发送。我们会尽快回复您。',
      error: '哎呀！出错了。请再试一次。',
    },
  },
  footer: {
    tagline: '为马来西亚各地的家庭保障传承，带来安心。',
    navigation: '网站导航',
    contact: '联系信息',
    disclaimer: {
      title: '免责声明',
      text: '本网站提供的信息仅供一般参考，不构成法律建议。请咨询合格的专业人士，以获得针对您具体情况的建议。',
    },
    copyright: '版权所有。',
  },
};


export const content = {
    en: enContent,
    cn: cnContent
};