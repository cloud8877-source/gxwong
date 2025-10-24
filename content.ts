import React from 'react';
import type { Service, Testimonial, NavLink, ProcessStep, FAQItem, AboutContent } from './types';

// --- SVG Icon Components ---
const DocumentTextIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props},
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" })
    )
);

const ShieldCheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.6-3.75M9 12l2.25 2.25L15 9" })
    )
);

const HeartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" })
    )
);

const BuildingOffice2Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636l1.5.545m-2.09-2.09l1.5.545M18.75 10.75h-4.5v-4.5h4.5v4.5z" })
    )
);

const UserGroupIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.14-4.08a3 3 0 00-4.682-2.72-3 3 0 00-4.682 2.72m6.11-3.04a2.25 2.25 0 103.75 0 2.25 2.25 0 00-3.75 0zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" })
    )
);


const enContent = {
    navLinks: [
        { href: '#about', label: 'About' },
        { href: '#services', label: 'Services' },
        { href: '#process', label: 'Process' },
        { href: '#testimonials', label: 'Testimonials' },
        { href: '#faq', label: 'FAQ' },
        { href: '#contact', label: 'Contact' },
    ] as NavLink[],
    hero: {
        preTitle: 'Your Legacy, Secured for Generations',
        subtitle: {
            regular: 'Expert Will, Trust & ',
            gradient: 'Estate Planning',
        },
        description: 'Navigate the complexities of estate planning with confidence. We provide personalized will writing, trust creation, and comprehensive wealth management solutions in Malaysia.',
        ctaButton: 'Get a Free Consultation',
    },
    about: {
        title: 'Your Trusted Partner in Legacy Planning',
        paragraphs: [
            "With years of experience in financial and estate planning in Malaysia, I am dedicated to helping individuals and families secure their financial future. My passion lies in crafting personalized strategies that protect your hard-earned assets and ensure your legacy is preserved according to your wishes.",
            "I believe that proper estate planning is one of the greatest gifts you can give to your loved ones, providing them with clarity and security during difficult times. My approach is built on trust, integrity, and a deep understanding of the local legal landscape."
        ],
        quote: "Planning is bringing the future into the present so that you can do something about it now.",
        image: 'https://i.imgur.com/5y0vnNL.jpeg',
    } as AboutContent,
    services: {
        title: 'Our Core Services',
        subtitle: 'Comprehensive solutions to secure your assets and legacy.',
        items: [
            {
                icon: React.createElement(DocumentTextIcon, { className: "w-10 h-10" }),
                title: 'Will Writing',
                description: [
                    'Drafting of legally valid wills.',
                    'Appointing executors and guardians.',
                    'Clear distribution of assets.',
                    'Minimizing potential family disputes.',
                ],
            },
            {
                icon: React.createElement(ShieldCheckIcon, { className: "w-10 h-10" }),
                title: 'Trust Creation',
                description: [
                    'Setting up living trusts and testamentary trusts.',
                    'Protecting assets for beneficiaries.',
                    'Professional management of your wealth.',
                    'Ensuring privacy and bypassing probate.',
                ],
            },
            {
                icon: React.createElement(HeartIcon, { className: "w-10 h-10" }),
                title: 'Life Insurance Review',
                description: [
                    'Reviewing existing policies for adequacy.',
                    'Structuring policies to be creditor-proof.',
                    'Setting up insurance trusts for beneficiaries.',
                    'Ensuring efficient claim distribution.',
                ],
            },
        ] as Service[],
    },
    process: {
        title: 'Our Simple 4-Step Process',
        steps: [
            {
                title: 'Initial Consultation',
                content: 'We start with a free, no-obligation consultation to understand your needs, assets, and family situation.',
                image: 'https://i.imgur.com/tJAUi6F.png',
            },
            {
                title: 'Strategy & Planning',
                content: 'Based on our discussion, we develop a tailored estate plan strategy that aligns with your specific goals.',
                image: 'https://i.imgur.com/zgarMRK.png',
            },
            {
                title: 'Drafting & Review',
                content: 'We draft all the necessary legal documents (Wills, Trusts, LPA) and review them with you to ensure every detail is perfect.',
                image: 'https://i.imgur.com/usTuxWg.png',
            },
            {
                title: 'Execution & Safekeeping',
                content: 'We guide you through the official signing and witnessing process, and offer secure storage for your important documents.',
                image: 'https://i.imgur.com/dJZyl9v.png',
            },
        ] as ProcessStep[],
    },
    testimonials: {
        title: 'What Our Clients Say',
        subtitle: 'Real stories from families who have secured their future with us.',
        items: [
            {
                id: 1,
                initials: 'DL',
                name: 'Daniel Lim',
                role: 'Business Owner, Johor Bahru',
                quote: 'The team made a complex process feel simple and straightforward. I now have peace of mind knowing my business and family are protected. Highly recommended for their professionalism.',
                tags: [
                    { text: 'Business Succession', type: 'featured' },
                    { text: 'Trust Setup', type: 'default' },
                ],
                stats: [
                    { icon: BuildingOffice2Icon, text: 'SME Founder' },
                    { icon: UserGroupIcon, text: 'Family of 5' },
                ],
                avatarGradient: 'linear-gradient(to top right, #34d399, #065f46)',
            },
            {
                id: 2,
                initials: 'RA',
                name: 'Dr. Ramesh & Anjali',
                role: 'Medical Professionals, KL',
                quote: 'As busy professionals, we kept putting off our will writing. They were efficient, understanding, and tailored a plan perfectly for our two young children. Their guidance was invaluable.',
                tags: [
                    { text: 'Will Writing', type: 'featured' },
                    { text: 'Guardian Appointment', type: 'default' },
                ],
                stats: [
                    { icon: UserGroupIcon, text: '2 Children' },
                ],
                avatarGradient: 'linear-gradient(to top right, #fb923c, #b91c1c)',
            },
            {
                id: 3,
                initials: 'LS',
                name: 'Lim Siew Bee',
                role: 'Retiree, Penang',
                quote: 'I wanted to ensure my assets were distributed fairly among my children and also contribute to a charity. They listened patiently and created a trust that fulfilled all my wishes. I am very grateful for their service.',
                tags: [
                    { text: 'Retirement Planning', type: 'default' },
                    { text: 'Charitable Trust', type: 'featured' },
                ],
                stats: [
                    { icon: UserGroupIcon, text: '3 Beneficiaries' },
                ],
                avatarGradient: 'linear-gradient(to top right, #60a5fa, #1e3a8a)',
            },
        ] as Testimonial[],
    },
    faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Have questions? We have answers. Here are some common queries.',
        items: [
            {
                question: 'Why do I need a will in Malaysia?',
                answer: 'A will ensures your assets are distributed according to your wishes after you pass away. Without a will, your assets will be distributed according to the Distribution Act 1958 (for non-Muslims), which may not align with your intentions and can lead to lengthy, costly legal processes for your family.',
            },
            {
                question: 'What is the difference between an executor and a trustee?',
                answer: 'An Executor is the person you appoint in your will to administer your estate and carry out your instructions. A Trustee is a person or company appointed to manage assets held in a trust for the benefit of your beneficiaries. Their roles can sometimes overlap.',
            },
            {
                question: 'When should I consider setting up a trust?',
                answer: 'A trust is beneficial if you have minor children, dependents with special needs, or if you want to protect your assets from creditors. It is also a powerful tool for complex family situations, business succession, or leaving a charitable legacy.',
            },
             {
                question: 'How much does it cost to write a will?',
                answer: 'The cost varies depending on the complexity of your estate and wishes. We offer transparent pricing and packages to suit different needs. Contact us for a free, no-obligation quotation.',
            },
             {
                question: 'Can I change my will after it has been made?',
                answer: 'Yes, you can and should review your will every 3-5 years or after major life events such as marriage, divorce, the birth of a child, or significant changes in your financial situation. You can update your will by creating a new one or by adding a "codicil" (an amendment) to the existing will.',
            },
        ] as FAQItem[],
    },
    contact: {
        title: 'Let’s Get In Touch.',
        subtitle: 'Ready to plan for your future? Contact us today for a free, confidential consultation.',
        subtitleManual: "Or just reach out manually to us at",
        form: {
            name: 'Enter your full name',
            email: 'Enter your email address',
            message: 'Enter your message',
            submit: 'Submit Form',
        },
        status: {
            loading: 'Sending...',
            success: 'Thank you! Your message has been sent. We will get back to you shortly.',
            error: 'Oops! Something went wrong. Please check your details and try again.',
        },
    },
    footer: {
        tagline: 'Providing peace of mind through expert estate planning and wealth management solutions in Malaysia.',
        navigation: 'Navigation',
        contact: 'Contact Info',
        disclaimer: {
            title: 'Disclaimer',
            text: 'The information provided on this website is for general informational purposes only and does not constitute legal or financial advice. Please consult with a qualified professional for advice tailored to your specific situation.',
        },
        copyright: 'All Rights Reserved.',
    },
};

const cnContent = {
    navLinks: [
        { href: '#about', label: '关于我' },
        { href: '#services', label: '核心服务' },
        { href: '#process', label: '流程' },
        { href: '#testimonials', label: '客户评价' },
        { href: '#faq', label: '常见问题' },
        { href: '#contact', label: '联系方式' },
    ] as NavLink[],
    hero: {
        preTitle: '您的传承，世代保障',
        subtitle: {
            regular: '专业的遗嘱、信托与',
            gradient: '遗产规划',
        },
        description: '充满信心地应对复杂的遗产规划。我们在马来西亚提供个性化的遗嘱撰写、信托设立和全面的财富管理解决方案。',
        ctaButton: '获取免费咨询',
    },
    about: {
        title: '您值得信赖的传承规划伙伴',
        paragraphs: [
            "凭借在马来西亚金融和遗产规划领域多年的经验，我致力于帮助个人和家庭保障他们的财务未来。我的热情在于打造个性化的策略，保护您辛苦赚来的资产，并确保您的遗产按照您的意愿得以保留。",
            "我相信，妥善的遗产规划是您可以给予亲人最伟大的礼物之一，在困难时期为他们提供清晰和保障。我的方法建立在信任、诚信和对当地法律环境的深刻理解之上。"
        ],
        quote: "规划就是将未来带到现在，这样你就可以立即采取行动。",
        image: 'https://i.imgur.com/5y0vnNL.jpeg',
    } as AboutContent,
    services: {
        title: '我们的核心服务',
        subtitle: '保障您资产与传承的全面解决方案。',
        items: [
            {
                icon: React.createElement(DocumentTextIcon, { className: "w-10 h-10" }),
                title: '遗嘱撰写',
                description: [
                    '起草具有法律效力的遗嘱。',
                    '任命执行人和监护人。',
                    '清晰的资产分配。',
                    '最大限度地减少潜在的家庭纠纷。',
                ],
            },
            {
                icon: React.createElement(ShieldCheckIcon, { className: "w-10 h-10" }),
                title: '信托设立',
                description: [
                    '设立生前信托和遗嘱信托。',
                    '为受益人保护资产。',
                    '专业管理您的财富。',
                    '确保隐私并绕过遗嘱认证。',
                ],
            },
            {
                icon: React.createElement(HeartIcon, { className: "w-10 h-10" }),
                title: '人寿保险审查',
                description: [
                    '审查现有保单是否足够。',
                    '构建保单以防范债权人。',
                    '为受益人设立保险信托。',
                    '确保高效的理赔分配。',
                ],
            },
        ] as Service[],
    },
    process: {
        title: '我们简单的四步流程',
        steps: [
            {
                title: '初步咨询',
                content: '我们从免费、无义务的咨询开始，了解您的需求、资产和家庭状况。',
                image: 'https://i.imgur.com/tJAUi6F.png',
            },
            {
                title: '策略与规划',
                content: '根据我们的讨论，我们制定符合您特定目标的量身定制的遗产规划策略。',
                image: 'https://i.imgur.com/zgarMRK.png',
            },
            {
                title: '起草与审核',
                content: '我们起草所有必要的法律文件（遗嘱、信托、LPA），并与您一同审核，确保每个细节都完美无缺。',
                image: 'https://i.imgur.com/usTuxWg.png',
            },
            {
                title: '执行与保管',
                content: '我们指导您完成正式的签署和见证过程，并为您的重要文件提供安全存储。',
                image: 'https://i.imgur.com/dJZyl9v.png',
            },
        ] as ProcessStep[],
    },
    testimonials: {
        title: '客户评价',
        subtitle: '与我们一起保障未来的家庭的真实故事。',
        items: [
            {
                id: 1,
                initials: 'DL',
                name: 'Daniel Lim (林先生)',
                role: '企业主，新山',
                quote: '团队让一个复杂的过程变得简单明了。我现在很安心，因为知道我的企业和家庭都得到了保障。他们的专业精神非常值得推荐。',
                tags: [
                    { text: '商业继承', type: 'featured' },
                    { text: '信托设立', type: 'default' },
                ],
                stats: [
                    { icon: BuildingOffice2Icon, text: '中小企业创始人' },
                    { icon: UserGroupIcon, text: '五口之家' },
                ],
                avatarGradient: 'linear-gradient(to top right, #34d399, #065f46)',
            },
            {
                id: 2,
                initials: 'RA',
                name: 'Ramesh 医生与 Anjali 医生',
                role: '医疗专业人士，吉隆坡',
                quote: '作为忙碌的专业人士，我们一直推迟写遗嘱。他们非常高效、善解人意，并为我们的两个年幼的孩子量身定制了一个完美的计划。他们的指导非常宝贵。',
                tags: [
                    { text: '遗嘱撰写', type: 'featured' },
                    { text: '监护人指定', type: 'default' },
                ],
                stats: [
                    { icon: UserGroupIcon, text: '2个孩子' },
                ],
                avatarGradient: 'linear-gradient(to top right, #fb923c, #b91c1c)',
            },
            {
                id: 3,
                initials: 'LS',
                name: 'Lim Siew Bee (林女士)',
                role: '退休人士，槟城',
                quote: '我希望确保我的资产能公平地分配给我的孩子们，并为一家慈善机构做出贡献。他们耐心地倾听，并设立了一个满足我所有愿望的信托。我非常感谢他们的服务。',
                tags: [
                    { text: '退休规划', type: 'default' },
                    { text: '慈善信托', type: 'featured' },
                ],
                stats: [
                    { icon: UserGroupIcon, text: '3位受益人' },
                ],
                avatarGradient: 'linear-gradient(to top right, #60a5fa, #1e3a8a)',
            },
        ] as Testimonial[],
    },
    faq: {
        title: '常见问题',
        subtitle: '有疑问吗？我们有答案。这里是一些常见的问题。',
        items: [
            {
                question: '为什么我在马来西亚需要一份遗嘱？',
                answer: '遗嘱确保您的资产在您去世后按照您的意愿进行分配。如果没有遗嘱，您的资产将根据1958年《分配法》（适用于非穆斯林）进行分配，这可能与您的意图不符，并可能给您的家人带来漫长而昂贵的法律程序。',
            },
            {
                question: '执行人和受托人有什么区别？',
                answer: '执行人是您在遗嘱中指定的人，负责管理您的遗产并执行您的指示。受托人是为受益人的利益而管理信托中资产的个人或公司。他们的角色有时可能会重叠。',
            },
            {
                question: '我应该在什么时候考虑设立信托？',
                answer: '如果您有未成年的孩子、有特殊需求的受抚养人，或者您想保护您的资产免受债权人的侵害，那么信托是有益的。对于复杂的家庭情况、商业继承或留下慈善遗产来说，它也是一个强大的工具。',
            },
             {
                question: '写一份遗嘱需要多少钱？',
                answer: '费用根据您遗产的复杂性和您的意愿而有所不同。我们提供透明的定价和套餐以满足不同的需求。请联系我们获取免费的无义务报价。',
            },
             {
                question: '遗嘱立好后可以更改吗？',
                answer: '是的，您可以而且应该每3-5年或在重大生活事件（如结婚、离婚、生子或财务状况发生重大变化）后审查您的遗嘱。您可以通过创建一份新遗嘱或在现有遗嘱中添加“遗嘱附录”来更新您的遗嘱。',
            },
        ] as FAQItem[],
    },
    contact: {
        title: '让我们开始吧',
        subtitle: '准备好规划您的未来了吗？立即联系我们，进行免费、保密的咨询。',
        subtitleManual: "或者直接通过邮件联系我们：",
        form: {
            name: '请输入您的全名',
            email: '请输入您的电子邮件地址',
            message: '请输入您的留言',
            submit: '提交表格',
        },
        status: {
            loading: '发送中...',
            success: '谢谢！您的信息已发送。我们会尽快与您联系。',
            error: '哎呀！出错了。请检查您的信息然后重试。',
        },
    },
    footer: {
        tagline: '通过马来西亚专业的遗产规划和财富管理解决方案，为您提供安心。',
        navigation: '网站导航',
        contact: '联系信息',
        disclaimer: {
            title: '免责声明',
            text: '本网站提供的信息仅供一般参考，不构成法律或财务建议。请咨询合格的专业人士，以获取针对您具体情况的建议。',
        },
        copyright: '版权所有。',
    },
};

export const content = {
    en: enContent,
    cn: cnContent
};
