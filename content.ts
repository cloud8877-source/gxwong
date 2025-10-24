import type { Testimonial, FAQItem, ProcessStep, NavLink, Service, AboutContent, CtaSectionContent } from './types';

const content = {
  en: {
    navLinks: [
      { href: '#about', label: 'About' },
      { href: '#services', label: 'Services' },
      { href: '#process', label: 'Process' },
      { href: '#testimonials', label: 'Testimonials' },
      { href: '#faq', label: 'FAQ' },
      { href: '#contact', label: 'Contact' },
    ] as NavLink[],
    hero: {
      preTitle: 'Securing Your Legacy in Malaysia',
      subtitle: {
        regular: "Your Income Isn't Your Legacy. ",
        gradient: 'Your Plan Is.',
      },
      description: 'Navigate the complexities of estate planning with confidence. We provide expert guidance on Wills, Trusts, and Life Insurance to protect your family\'s future.',
      ctaButton: 'Get a Free Consultation',
    },
    ctaSection: {
        headline: "Ready to Secure Your Legacy?",
        subtext: "Discover how our tailored services can help protect your assets and provide for your loved ones.",
        buttonText: "Explore Our Services",
        buttonLink: "#services"
    } as CtaSectionContent,
    about: {
        title: "Your Trusted Partner in Legacy Planning",
        profilePictureUrl: "https://i.ibb.co/s9KVGHsZ/Generated-Image-October-21-2025-3-52-PM.webp",
        paragraphs: [
            "With years of experience in financial and estate planning in Malaysia, I am dedicated to helping individuals and families secure their financial future. My passion lies in crafting personalized strategies that protect your hard-earned assets and ensure your legacy is preserved according to your wishes.",
            "I believe that proper estate planning is one of the greatest gifts you can give to your loved ones, providing them with clarity and security during difficult times. My approach is built on trust, integrity, and a deep understanding of the local legal landscape."
        ],
        quote: "Planning is bringing the future into the present so that you can do something about it now.",
    } as AboutContent,
    services: {
        title: "Our Core Services",
        subtitle: "Comprehensive solutions to secure your assets and legacy.",
        items: [
          {
            icon: 'document',
            title: "Will Writing",
            description: "Ensure your assets are distributed exactly as you wish. We help you draft legally valid wills, appoint executors, and minimize potential family disputes.",
          },
          {
            icon: 'shield',
            title: "Trust Creation",
            description: "Protect and manage your assets for future generations. We assist in setting up living trusts and testamentary trusts to ensure privacy and bypass probate.",
          },
          {
            icon: 'insurance',
            title: "Life Insurance Review",
            description: "Optimize your coverage to secure your family's financial stability. We review your policies and can help establish an Insurance Trust for seamless wealth transfer.",
          },
        ] as Service[]
    },
    process: {
      title: 'Our Simple 4-Step Process',
      steps: [
        {
          title: 'Initial Consultation',
          content: 'We start with a free, no-obligation consultation to understand your needs, assets, and family situation.',
          image: 'https://i.ibb.co/B5yQNYV0/Gemini-Generated-Image-j0qvttj0qvttj0qv.webp',
        },
        {
          title: 'Strategy & Planning',
          content: 'Based on our discussion, we develop a tailored estate plan strategy that aligns with your specific goals.',
          image: 'https://i.ibb.co/gZ9VJ90W/Gemini-Generated-Image-ma0bzzma0bzzma0b-1.webp',
        },
        {
          title: 'Drafting & Review',
          content: 'We draft all the necessary legal documents (Wills, Trusts, etc) and review them with you to ensure every detail is perfect.',
          image: 'https://i.ibb.co/3mtRgJ1T/Gemini-Generated-Image-tlpt48tlpt48tlpt.webp',
        },
        {
          title: 'Execution & Safekeeping',
          content: 'We guide you through the official signing and witnessing process, and offer secure storage for your important documents.',
          image: 'https://i.ibb.co/svmxgK5R/Gemini-Generated-Image-2kk4jg2kk4jg2kk4.webp',
        },
      ] as ProcessStep[],
    },
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Building trust and peace of mind is at the heart of what we do.',
      items: [
        {
          id: 1,
          name: 'Daniel Lim',
          role: 'Business Owner, Johor Bahru',
          initials: 'DL',
          avatarGradient: 'linear-gradient(to top, #262626, #737373)',
          quote: 'The team made a complex process feel simple and straightforward. We now have peace of mind knowing our children and business are protected. Highly recommended!',
          tags: [
            { type: 'featured', text: 'Will & Trust' },
            { type: 'default', text: 'Business Succession' },
          ],
          stats: [
            { icon: 'building', text: 'Family Business' },
            { icon: 'group', text: '4 Beneficiaries' },
          ],
        },
        {
          id: 2,
          name: 'Chloe Tan',
          role: 'Retired Teacher, Kuala Lumpur',
          initials: 'CT',
          avatarGradient: 'linear-gradient(to top, #404040, #a3a3a3)',
          quote: 'I was worried about planning for my later years. The consultant was patient and explained everything clearly. I feel much more secure now.',
          tags: [
            { type: 'featured', text: 'Legacy Planning' },
            { type: 'default', text: 'Personal Planning' },
          ],
          stats: [
            { icon: 'group', text: 'Full Consultation' },
          ],
        },
        {
            id: 3,
            name: 'The Lee Family',
            role: 'Young Couple, Selangor',
            initials: 'L',
            avatarGradient: 'linear-gradient(to top, #171717, #525252)',
            quote: 'As new parents, getting our wills done was a top priority. They were professional, efficient, and affordable. They understood our needs perfectly.',
            tags: [
              { type: 'featured', text: 'Will Writing' },
              { type: 'default', text: 'Young Family' },
            ],
            stats: [
              { icon: 'group', text: '1 Minor Child' },
            ],
          },
      ] as Testimonial[],
    },
    faq: {
        title: "Frequently Asked Questions",
        subtitle: "Have questions? We have answers. Here are some of the most common inquiries we receive.",
        items: [
            {
                question: "Why do I need a will?",
                answer: "A will is a legal document that specifies how you want your assets to be distributed after your death. Without a will, your assets will be distributed according to Malaysia's Intestacy laws, which may not align with your wishes and can cause delays and disputes for your family."
            },
            {
                question: "What is the difference between a will and a trust?",
                answer: "A will only takes effect after you pass away. A trust can be set up to take effect during your lifetime (a living trust) or after your death. Trusts offer more control over how and when your assets are distributed to your beneficiaries and can provide creditor protection."
            },
            {
                question: "Is my EPF nomination covered by my will?",
                answer: "No, your Employees Provident Fund (EPF) nomination is separate from your will. The person you nominate for your EPF will receive those funds directly. It's important to keep both your will and your EPF nomination updated."
            },
            {
                question: "How much does estate planning cost?",
                answer: "The cost varies depending on the complexity of your needs. We offer transparent pricing and tailored packages. We invite you for a free, no-obligation consultation to discuss your requirements and provide a detailed quote."
            }
        ] as FAQItem[]
    },
    contact: {
        title: "Let’s Get In Touch",
        subtitleManual: "Or just reach out manually to us at",
        form: {
            name: "Full Name",
            email: "Email Address",
            message: "Your Message",
            submit: "Submit Form",
        },
        status: {
            loading: "Sending...",
            success: "Thank you for your message! We will get back to you shortly.",
            error: "Something went wrong. Please try again or email us directly.",
        },
        errors: {
            required: "This field is required.",
            invalidEmail: "Please enter a valid email address.",
            messageTooLong: "Message cannot exceed {max} characters."
        }
    },
    footer: {
        tagline: "Providing clarity and confidence in estate planning for families and businesses across Malaysia.",
        navigation: "Navigation",
        contact: "Contact Info",
        disclaimer: {
            title: "Disclaimer",
            text: "The information on this website is for general informational purposes only and does not constitute legal advice. Please consult with a qualified professional for advice tailored to your specific situation."
        },
        copyright: "All Rights Reserved."
    }
  },
  cn: {
    navLinks: [
      { href: '#about', label: '关于我' },
      { href: '#services', label: '核心服务' },
      { href: '#process', label: '我们的流程' },
      { href: '#testimonials', label: '客户评价' },
      { href: '#faq', label: '常见问题' },
      { href: '#contact', label: '联系我们' },
    ] as NavLink[],
    hero: {
      preTitle: '守护您在马来西亚的传承',
      subtitle: {
        regular: '您的收入不是您的传承，',
        gradient: '您的规划才是。',
      },
      description: '自信地应对复杂的遗产规划。我们为您的遗嘱、信托和人寿保险提供专业指导，保护您家庭的未来。',
      ctaButton: '获取免费咨询',
    },
    ctaSection: {
        headline: "准备好守护您的传承了吗？",
        subtext: "了解我们量身定制的服务如何帮助您保护资产并为您所爱的人提供保障。",
        buttonText: "浏览我们的服务",
        buttonLink: "#services"
    } as CtaSectionContent,
    about: {
        title: "您值得信赖的传承规划伙伴",
        profilePictureUrl: "https://i.ibb.co/s9KVGHsZ/Generated-Image-October-21-2025-3-52-PM.webp",
        paragraphs: [
            "凭借在马来西亚金融和遗产规划领域多年的经验，我致力于帮助个人和家庭保障他们的财务未来。我的热情在于制定个性化策略，保护您辛苦赚来的资产，并确保您的遗产按照您的意愿得以传承。",
            "我相信，妥善的遗产规划是您可以给予挚爱的最好礼物之一，在困难时期为他们提供清晰的指引和保障。我的方法建立在信任、诚信和对当地法律环境的深刻理解之上。"
        ],
        quote: "规划就是将未来带到现在，这样你就可以立刻采取行动。",
    } as AboutContent,
    services: {
        title: "我们的核心服务",
        subtitle: "全面的解决方案，以保障您的资产和传承。",
        items: [
          {
            icon: 'document',
            title: "遗嘱撰写",
            description: "确保您的资产完全按照您的意愿分配。我们帮助您起草具有法律效力的遗嘱，指定执行人，并最大限度地减少潜在的家庭纠纷。",
          },
          {
            icon: 'shield',
            title: "信托设立",
            description: "为后代保护和管理您的资产。我们协助设立生前信托和遗嘱信托，以确保隐私并绕过遗嘱认证程序。",
          },
          {
            icon: 'insurance',
            title: "人寿保险审查",
            description: "优化您的保险覆盖范围，以保障您家庭的财务稳定。我们审查您的保单，并可以帮助设立保险信托，以实现无缝的财富转移。",
          },
        ] as Service[]
    },
    process: {
      title: '我们简单的四步流程',
      steps: [
        {
          title: '初步咨询',
          content: '我们从一次免费、无义务的咨询开始，了解您的需求、资产和家庭情况。',
          image: 'https://i.ibb.co/B5yQNYV0/Gemini-Generated-Image-j0qvttj0qvttj0qv.webp',
        },
        {
          title: '策略与规划',
          content: '根据我们的讨论，我们制定一个符合您具体目标的量身定制的遗产规划策略。',
          image: 'https://i.ibb.co/gZ9VJ90W/Gemini-Generated-Image-ma0bzzma0bzzma0b-1.webp',
        },
        {
          title: '起草与审查',
          content: '我们起草所有必要的法律文件（遗嘱、信托等），并与您一同审查，以确保每个细节都完美无瑕。',
          image: 'https://i.ibb.co/3mtRgJ1T/Gemini-Generated-Image-tlpt48tlpt48tlpt.webp',
        },
        {
          title: '执行与保管',
          content: '我们指导您完成正式的签署和见证过程，并为您的重要文件提供安全的保管服务。',
          image: 'https://i.ibb.co/svmxgK5R/Gemini-Generated-Image-2kk4jg2kk4jg2kk4.webp',
        },
      ] as ProcessStep[],
    },
    testimonials: {
      title: '客户评价',
      subtitle: '建立信任和安心是我们工作的核心。',
      items: [
        {
          id: 1,
          name: '林先生',
          role: '企业主, 新山',
          initials: '林',
          avatarGradient: 'linear-gradient(to top, #262626, #737373)',
          quote: '团队让一个复杂的过程变得简单明了。我们现在很安心，知道我们的孩子和生意都得到了保护。强烈推荐！',
          tags: [
            { type: 'featured', text: '遗嘱与信托' },
            { type: 'default', text: '商业继承' },
          ],
          stats: [
            { icon: 'building', text: '家族企业' },
            { icon: 'group', text: '4位受益人' },
          ],
        },
        {
          id: 2,
          name: '陈女士',
          role: '退休教师, 吉隆坡',
          initials: '陈',
          avatarGradient: 'linear-gradient(to top, #404040, #a3a3a3)',
          quote: '我曾为我的晚年规划感到担忧。顾问非常有耐心，清楚地解释了一切。我现在感觉安全多了。',
          tags: [
            { type: 'featured', text: '遗产规划' },
            { type: 'default', text: '个人规划' },
          ],
          stats: [
            { icon: 'group', text: '全面咨询' },
          ],
        },
        {
            id: 3,
            name: '李氏家庭',
            role: '年轻夫妇, 雪兰莪',
            initials: '李',
            avatarGradient: 'linear-gradient(to top, #171717, #525252)',
            quote: '作为新手父母，立遗嘱是我们的首要任务。他们专业、高效且价格合理。他们完全理解我们的需求。',
            tags: [
              { type: 'featured', text: '遗嘱撰写' },
              { type: 'default', text: '年轻家庭' },
            ],
            stats: [
              { icon: 'group', text: '1位未成年子女' },
            ],
          },
      ] as Testimonial[],
    },
    faq: {
        title: "常见问题解答",
        subtitle: "有疑问吗？我们有答案。以下是我们收到的一些最常见问题。",
        items: [
            {
                question: "为什么我需要立遗嘱？",
                answer: "遗嘱是一份法律文件，规定了您希望在去世后如何分配您的资产。如果没有遗嘱，您的资产将根据马来西亚的无遗嘱继承法进行分配，这可能与您的意愿不符，并可能给您的家人带来延误和纠纷。"
            },
            {
                question: "遗嘱和信托有什么区别？",
                answer: "遗嘱仅在您去世后生效。信托可以设立为在您生前生效（生前信托）或在您去世后生效。信托能更好地控制您的资产如何以及何时分配给受益人，并可以提供债权人保护。"
            },
            {
                question: "我的公积金（EPF）提名是否包含在我的遗嘱中？",
                answer: "不，您的公积金（EPF）提名与您的遗嘱是分开的。您为公积金提名的人将直接获得这些资金。保持您的遗嘱和公积金提名都更新是非常重要的。"
            },
            {
                question: "遗产规划的费用是多少？",
                answer: "费用根据您需求的复杂性而异。我们提供透明的定价和量身定制的套餐。我们邀请您参加免费的、无义务的咨询，讨论您的要求并提供详细报价。"
            }
        ] as FAQItem[]
    },
    contact: {
        title: "联系我们",
        subtitleManual: "或者直接发送邮件至",
        form: {
            name: "全名",
            email: "电子邮件地址",
            message: "您的留言",
            submit: "提交表格",
        },
        status: {
            loading: "发送中...",
            success: "感谢您的留言！我们会尽快与您联系。",
            error: "发生错误。请重试或直接给我们发送电子邮件。",
        },
        errors: {
            required: "此为必填项。",
            invalidEmail: "请输入有效的电子邮件地址。",
            messageTooLong: "留言不能超过 {max} 个字符。"
        }
    },
    footer: {
        tagline: "为马来西亚各地的家庭和企业提供清晰、自信的遗产规划。",
        navigation: "网站导航",
        contact: "联系信息",
        disclaimer: {
            title: "免责声明",
            text: "本网站上的信息仅供一般参考之用，不构成法律建议。请咨询合格的专业人士，以获取针对您具体情况的建议。"
        },
        copyright: "版权所有。"
    }
  }
};

export { content };