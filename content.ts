import React from 'react';
import { Service, Testimonial, NavLink, ProcessStep, FAQItem } from './types';

// Define SVG icon components used throughout the application.
const WillIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5, ...props },
        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" })
    )
);
const TrustIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
     React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5, ...props },
        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 13.5l2.25 2.25L15 12m6-2.25a8.25 8.25 0 11-16.5 0 8.25 8.25 0 0116.5 0z" })
    )
);
const InsuranceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5, ...props },
         React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 12c0-5.25-4.25-9.5-9.5-9.5S.5 6.75.5 12s4.25 9.5 9.5 9.5 9.5-4.25 9.5-9.5z" }),
         React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 9.75 12 13.5l-3.75-3.75" })
    )
);

const CalendarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
      React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" })
    )
);
const ClockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" })
    )
);

const navLinksEn: NavLink[] = [
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Our Services' },
    { href: '#process', label: 'Our Process' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact Us' },
];

const servicesEn: Service[] = [
    {
        icon: React.createElement(WillIcon),
        title: 'Will Writing',
        description: [
            'Drafting of legally valid wills.',
            'Appointing executors and guardians.',
            'Clear distribution of assets.',
            'Minimizing potential family disputes.'
        ],
    },
    {
        icon: React.createElement(TrustIcon),
        title: 'Trust Creation',
        description: [
            'Setting up living trusts and testamentary trusts.',
            'Protecting assets for beneficiaries.',
            'Professional management of your wealth.',
            'Ensuring privacy and bypassing probate.'
        ],
    },
    {
        icon: React.createElement(InsuranceIcon),
        title: 'Life Insurance Review',
        description: [
            'Review existing policies to ensure adequate coverage.',
            'Nomination and Insurance Trust setup.',
            'Optimize policies for your family’s needs.',
            'Align insurance with your overall estate plan.'
        ],
    }
];

const testimonialsEn: Testimonial[] = [
    {
        id: 1,
        initials: 'DL',
        name: 'Daniel Lim',
        role: 'Business Owner, Kuala Lumpur',
        quote: "The team at EstateWealth MY made the complex process of setting up a trust for my family straightforward and stress-free. Their professionalism and attention to detail were exceptional. Highly recommended!",
        tags: [
            { text: 'Trust Creation', type: 'featured' },
            { text: 'Business Succession', type: 'default' },
        ],
        stats: [
            { icon: CalendarIcon, text: '3 Weeks' },
            { icon: ClockIcon, text: '2 Meetings' },
        ],
        avatarGradient: 'linear-gradient(to top right, #34d399, #10b981)',
    },
    {
        id: 2,
        initials: 'RS',
        name: 'Rina Sivam',
        role: 'Doctor, Johor Bahru',
        quote: "I had been putting off writing my will for years. EstateWealth MY provided clear, concise advice and handled everything efficiently. I now have peace of mind knowing my children's future is secure.",
        tags: [
            { text: 'Will Writing', type: 'featured' },
        ],
        stats: [
            { icon: CalendarIcon, text: '1 Week' },
            { icon: ClockIcon, text: '1 Meeting' },
        ],
        avatarGradient: 'linear-gradient(to top right, #fb923c, #f97316)',
    },
    {
        id: 3,
        initials: 'LW',
        name: 'Lee Wei',
        role: 'Retired Teacher, Penang',
        quote: "Reviewing my life insurance policies was something I knew was important. The consultant was patient and explained all the technical aspects in a way I could easily understand. Thank you for the excellent service.",
        tags: [
            { text: 'Insurance Review', type: 'featured' },
        ],
        stats: [
            { icon: CalendarIcon, text: '10 Days' },
            { icon: ClockIcon, text: '1 Meeting' },
        ],
        avatarGradient: 'linear-gradient(to top right, #60a5fa, #3b82f6)',
    },
];

const processStepsEn: ProcessStep[] = [
    {
        title: 'Discovery & Consultation',
        content: 'We begin with a personal consultation to understand your unique family situation, financial goals, and legacy wishes.',
        image: 'https://i.imgur.com/tJAUi6F.png',
    },
    {
        title: 'Tailored Strategy Design',
        content: 'We craft a bespoke estate plan, presenting you with clear, strategic options for wills, trusts, and insurance to best protect your assets.',
        image: 'https://i.imgur.com/zgarMRK.png',
    },
    {
        title: 'Drafting & Review',
        content: 'We handle the drafting of all legal documents and guide you through the finalization process, ensuring your legacy is secured with precision and care.',
        image: 'https://i.imgur.com/usTuxWg.png',
    },
    {
        title: 'Execution & Safekeeping',
        content: 'We guide you through the official signing and witnessing process, and offer secure storage for your important documents.',
        image: 'https://i.imgur.com/dJZyl9v.png',
    },
];

const faqItemsEn: FAQItem[] = [
    {
        question: 'Why do I need a will?',
        answer: "A will is a legal document that outlines your wishes regarding the distribution of your assets, the care of any minor children, and the appointment of an executor to manage your estate after your death. Without a will, your assets will be distributed according to Malaysia's Distribution Act 1958, which may not align with your wishes."
    },
    {
        question: 'What is the difference between a will and a trust?',
        answer: 'A will only takes effect after you pass away. A trust can be effective during your lifetime (a living trust) or upon your death. Trusts offer more control over how and when your assets are distributed to your beneficiaries and can help avoid the probate process, offering more privacy.'
    },
    {
        question: 'Who should I appoint as my executor or trustee?',
        answer: "You should choose someone you trust implicitly to act in your best interests and the interests of your beneficiaries. This can be a family member, a friend, or a professional trustee company. It's important to select someone who is responsible, organized, and willing to take on the role."
    },
    {
        question: 'How often should I review my estate plan?',
        answer: "It's a good practice to review your estate plan every 3-5 years, or whenever you experience a major life event such as marriage, divorce, the birth of a child, or a significant change in your financial situation. This ensures your plan remains current and reflects your wishes."
    }
];

const contentEn = {
    navLinks: navLinksEn,
    hero: {
        preTitle: 'Your Legacy, Secured',
        subtitle: {
            regular: 'Comprehensive Estate Planning in ',
            gradient: 'Malaysia'
        },
        description: 'Navigate the complexities of wills, trusts, and succession planning with our expert guidance. Secure your family\'s future and ensure your assets are protected for generations to come.',
        ctaButton: 'Get a Free Consultation',
    },
    about: {
        title: 'Your Trusted Partner in Legacy Planning',
        p1: "With years of experience in financial and estate planning in Malaysia, I am dedicated to helping individuals and families secure their financial future. My passion lies in crafting personalized strategies that protect your hard-earned assets and ensure your legacy is preserved according to your wishes.",
        p2: "I believe that proper estate planning is one of the greatest gifts you can give to your loved ones, providing them with clarity and security during difficult times. My approach is built on trust, integrity, and a deep understanding of the local legal landscape.",
        quote: "Planning is bringing the future into the present so that you can do something about it now."
    },
    services: {
        title: 'Our Core Services',
        subtitle: 'Comprehensive solutions to secure your assets and legacy.',
        items: servicesEn,
    },
    process: {
        title: 'Our Simple 4-Step Process',
        steps: processStepsEn,
    },
    testimonials: {
        title: 'What Our Clients Say',
        subtitle: "We are proud to have helped numerous families in Malaysia secure their legacies. Here's what some of them have to say.",
        items: testimonialsEn,
    },
    faq: {
        title: 'Frequently Asked Questions',
        subtitle: "Have questions? We have answers. Here are some of the most common questions we receive.",
        items: faqItemsEn,
    },
    contact: {
        title: 'Get In Touch',
        subtitle: "Ready to plan for your future? Contact us today for a free, confidential consultation.",
        form: {
            name: 'Full Name',
            email: 'Email Address',
            phone: 'Phone Number (Optional)',
            message: 'Your Message',
            submit: 'Send Message'
        },
        status: {
            loading: 'Sending...',
            success: 'Thank you for your message! We will get back to you shortly.',
            error: 'An error occurred. Please fill in all required fields and try again.'
        }
    },
    footer: {
        tagline: 'Securing your legacy, one family at a time.',
        navigation: 'Navigation',
        contact: 'Contact Info',
        disclaimer: {
            title: 'Disclaimer',
            text: 'The information provided on this website is for general informational purposes only and does not constitute legal or financial advice.'
        },
        copyright: 'All Rights Reserved.'
    }
};

// Chinese Version
const navLinksCn: NavLink[] = [
    { href: '#about', label: '关于我们' },
    { href: '#services', label: '我们的服务' },
    { href: '#process', label: '我们的流程' },
    { href: '#testimonials', label: '客户评价' },
    { href: '#faq',label: '常见问题' },
    { href: '#contact', label: '联系我们' },
];

const servicesCn: Service[] = [
    {
        icon: React.createElement(WillIcon),
        title: '遗嘱撰写',
        description: [
            '撰写具有法律效力的遗嘱。',
            '指定执行人和监护人。',
            '清晰的资产分配。',
            '最大限度地减少潜在的家庭纠纷。'
        ],
    },
    {
        icon: React.createElement(TrustIcon),
        title: '信托设立',
        description: [
            '设立生前信托和遗嘱信托。',
            '为受益人保护资产。',
            '专业管理您的财富。',
            '确保隐私并绕过遗嘱认证。'
        ],
    },
    {
        icon: React.createElement(InsuranceIcon),
        title: '人寿保险审查',
        description: [
            '审查现有保单以确保足够的保障。',
            '提名和保险信托设立。',
            '为您家庭的需求优化保单。',
            '将保险与您的整体遗产规划相结合。'
        ],
    }
];

const testimonialsCn: Testimonial[] = [
    {
        id: 1,
        initials: '林',
        name: 'Daniel Lim',
        role: '企业主，吉隆坡',
        quote: "EstateWealth MY 的团队让我为家人设立信托的复杂过程变得简单无忧。他们的专业精神和对细节的关注非常出色。强烈推荐！",
        tags: [
            { text: '信托设立', type: 'featured' },
            { text: '商业继承', type: 'default' },
        ],
        stats: [
            { icon: CalendarIcon, text: '3 周' },
            { icon: ClockIcon, text: '2 次会议' },
        ],
        avatarGradient: 'linear-gradient(to top right, #34d399, #10b981)',
    },
    {
        id: 2,
        initials: '莉',
        name: 'Rina Sivam',
        role: '医生，新山',
        quote: "多年来我一直推迟写遗嘱。EstateWealth MY 提供了清晰、简洁的建议，并高效地处理了一切。我现在很安心，因为我知道我孩子的未来是有保障的。",
        tags: [
            { text: '遗嘱撰写', type: 'featured' },
        ],
        stats: [
            { icon: CalendarIcon, text: '1 周' },
            { icon: ClockIcon, text: '1 次会议' },
        ],
        avatarGradient: 'linear-gradient(to top right, #fb923c, #f97316)',
    },
    {
        id: 3,
        initials: '李',
        name: 'Lee Wei',
        role: '退休教师，槟城',
        quote: "审查我的人寿保险保单是我知道很重要的一件事。顾问很有耐心，用我能轻易理解的方式解释了所有的技术问题。感谢你们的优质服务。",
        tags: [
            { text: '保险审查', type: 'featured' },
        ],
        stats: [
            { icon: CalendarIcon, text: '10 天' },
            { icon: ClockIcon, text: '1 次会议' },
        ],
        avatarGradient: 'linear-gradient(to top right, #60a5fa, #3b82f6)',
    },
];

const processStepsCn: ProcessStep[] = [
    {
        title: '探索与咨询',
        content: '我们通过个人咨询开始，了解您独特的家庭状况、财务目标和遗产愿望。',
        image: 'https://i.imgur.com/tJAUi6F.png',
    },
    {
        title: '量身定制策略设计',
        content: '我们制定一份定制的遗产计划，为您提供清晰的遗嘱、信托和保险战略选择，以最好地保护您的资产。',
        image: 'https://i.imgur.com/zgarMRK.png',
    },
    {
        title: '起草与审查',
        content: '我们处理所有法律文件的起草工作，并指导您完成最终确定过程，确保您的遗产得到精确和谨慎的保障。',
        image: 'https://i.imgur.com/usTuxWg.png',
    },
    {
        title: '执行与保管',
        content: '我们指导您完成正式的签署和见证过程，并为您的重要文件提供安全的存储。',
        image: 'https://i.imgur.com/dJZyl9v.png',
    },
];

const faqItemsCn: FAQItem[] = [
    {
        question: '为什么我需要遗嘱？',
        answer: "遗嘱是一份法律文件，概述了您关于资产分配、任何未成年子女的照顾以及指定执行人来管理您去世后遗产的愿望。没有遗嘱，您的资产将根据马来西亚的 1958 年分配法进行分配，这可能与您的意愿不符。"
    },
    {
        question: '遗嘱和信托有什么区别？',
        answer: '遗嘱仅在您去世后生效。信托可以在您在世时生效（生前信托），也可以在您去世时生效。信托为您如何以及何时将资产分配给受益人提供了更多的控制权，并可以帮助避免遗嘱认证过程，提供更多的隐私。'
    },
    {
        question: '我应该任命谁为我的执行人或受托人？',
        answer: "您应该选择一个您完全信任的人，以您的最佳利益和受益人的利益行事。这可以是家人、朋友或专业的受托公司。选择一个负责任、有条理并愿意承担这个角色的人很重要。"
    },
    {
        question: '我应该多久审查一次我的遗产计划？',
        answer: "每 3-5 年审查一次您的遗产计划是一个好习惯，或者在您经历重大生活事件时，例如结婚、离婚、生子或财务状况发生重大变化时。这可以确保您的计划保持最新并反映您的愿望。"
    }
];

const contentCn = {
    navLinks: navLinksCn,
    hero: {
        preTitle: '您的传承，得到保障',
        subtitle: {
            regular: '马来西亚全面的遗产规划',
            gradient: ''
        },
        description: '在我们的专家指导下，应对遗嘱、信托和继承规划的复杂性。保障您家人的未来，并确保您的资产为子孙后代得到保护。',
        ctaButton: '获取免费咨询',
    },
    about: {
        title: '您值得信赖的传承规划伙伴',
        p1: "凭借在马来西亚金融和遗产规划领域多年的经验，我致力于帮助个人和家庭保障他们的财务未来。我的热情在于制定个性化策略，保护您辛苦赚来的资产，并确保您的遗产按照您的意愿得以保留。",
        p2: "我相信，适当的遗产规划是您可以给您所爱的人最好的礼物之一，在困难时期为他们提供清晰和安全感。我的方法建立在信任、诚信和对当地法律环境的深刻理解之上。",
        quote: "规划就是将未来带到现在，这样你现在就可以对此做些什么。"
    },
    services: {
        title: '我们的核心服务',
        subtitle: '全面的解决方案，以保障您的资产和传承。',
        items: servicesCn,
    },
    process: {
        title: '我们简单的四步流程',
        steps: processStepsCn,
    },
    testimonials: {
        title: '我们的客户怎么说',
        subtitle: "我们很自豪能够帮助马来西亚的众多家庭保障他们的传承。以下是其中一些人的评价。",
        items: testimonialsCn,
    },
    faq: {
        title: '常见问题',
        subtitle: "有疑问吗？我们有答案。以下是我们收到的一些最常见的问题。",
        items: faqItemsCn,
    },
    contact: {
        title: '联系我们',
        subtitle: "准备好规划您的未来了吗？立即联系我们进行免费、保密的咨询。",
        form: {
            name: '全名',
            email: '电子邮件地址',
            phone: '电话号码（可选）',
            message: '您的信息',
            submit: '发送信息'
        },
        status: {
            loading: '发送中...',
            success: '感谢您的留言！我们会尽快回复您。',
            error: '发生错误。请填写所有必填字段，然后重试。'
        }
    },
    footer: {
        tagline: '一次为一个家庭，保障您的传承。',
        navigation: '导航',
        contact: '联系信息',
        disclaimer: {
            title: '免责声明',
            text: '本网站上提供的信息仅供一般参考之用，不构成法律或财务建议。'
        },
        copyright: '版权所有。'
    }
};

export const content = {
    en: contentEn,
    cn: contentCn,
};