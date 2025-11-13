'use client'

import { useState } from 'react'
import {
  TrendingUp,
  Package,
  ShoppingCart,
  Users,
  Zap,
  Target,
  DollarSign,
  BarChart3,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Star,
  Leaf,
  Heart,
  Home as HomeIcon,
  Smartphone,
  Baby,
  Shirt,
  Dumbbell,
  Book
} from 'lucide-react'

export default function Home() {
  const [selectedNiche, setSelectedNiche] = useState<number | null>(null)

  const niches = [
    {
      icon: <Leaf className="w-8 h-8" />,
      name: "Organic & Ayurvedic Products",
      profit: "35-50%",
      investment: "₹50,000 - ₹2,00,000",
      demand: "Very High",
      competition: "Medium",
      description: "Health-conscious Indians are increasingly seeking chemical-free, natural products for personal care, food, and wellness.",
      products: ["Organic skincare", "Herbal supplements", "Natural hair care", "Ayurvedic medicines", "Organic food items"],
      whyProfitable: [
        "Growing health awareness post-COVID",
        "Premium pricing accepted by customers",
        "Low return rates",
        "Strong repeat purchase behavior",
        "Government support for organic farming"
      ],
      targetAudience: "Urban millennials and Gen-Z (25-40 years), health-conscious families",
      marketingTips: [
        "Instagram & Facebook marketing with before/after content",
        "Partner with wellness influencers",
        "Certifications (USDA Organic, India Organic) build trust",
        "Educational content about benefits"
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      name: "Mobile Accessories & Tech Gadgets",
      profit: "40-60%",
      investment: "₹30,000 - ₹1,50,000",
      demand: "Very High",
      competition: "High",
      description: "India's massive smartphone market creates endless demand for innovative accessories and smart gadgets.",
      products: ["Wireless earbuds", "Phone cases", "Power banks", "Smart watches", "Phone holders", "Screen protectors"],
      whyProfitable: [
        "500M+ smartphone users in India",
        "Frequent product upgrades",
        "Low shipping costs",
        "High impulse purchase rate",
        "Viral potential on social media"
      ],
      targetAudience: "18-35 years, tech enthusiasts, students, young professionals",
      marketingTips: [
        "Video demonstrations on Instagram Reels/YouTube Shorts",
        "Bundle offers to increase cart value",
        "Collaborate with tech reviewers",
        "Amazon & Flipkart presence essential"
      ]
    },
    {
      icon: <HomeIcon className="w-8 h-8" />,
      name: "Home Organization & Storage",
      profit: "45-65%",
      investment: "₹40,000 - ₹1,75,000",
      demand: "High",
      competition: "Medium",
      description: "Urban housing constraints and work-from-home trends drive demand for smart storage solutions.",
      products: ["Closet organizers", "Kitchen storage", "Space-saving furniture", "Bathroom organizers", "Desk accessories"],
      whyProfitable: [
        "Small apartment living creates pain point",
        "One-time solutions lead to word-of-mouth",
        "Low return rate",
        "Social media shareability",
        "Works well with influencer marketing"
      ],
      targetAudience: "Working couples, small apartment residents (Tier 1 & 2 cities)",
      marketingTips: [
        "Before/after transformation videos",
        "Pinterest marketing",
        "Collaborate with interior design influencers",
        "DIY content on YouTube"
      ]
    },
    {
      icon: <Shirt className="w-8 h-8" />,
      name: "Sustainable Fashion & Accessories",
      profit: "50-80%",
      investment: "₹60,000 - ₹3,00,000",
      demand: "High",
      competition: "Medium",
      description: "Eco-conscious consumers seeking ethically made, sustainable clothing and accessories.",
      products: ["Handloom clothing", "Eco-friendly bags", "Sustainable jewelry", "Upcycled fashion", "Organic cotton wear"],
      whyProfitable: [
        "Premium pricing for sustainable products",
        "Strong brand loyalty",
        "Government initiatives supporting handloom",
        "International market potential",
        "Emotional connection with customers"
      ],
      targetAudience: "Eco-conscious consumers (25-45 years), urban professionals",
      marketingTips: [
        "Storytelling about artisans and craft",
        "Instagram-first strategy",
        "Collaborate with sustainable lifestyle influencers",
        "Participate in eco-fairs and exhibitions"
      ]
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      name: "Fitness & Home Gym Equipment",
      profit: "35-55%",
      investment: "₹75,000 - ₹3,50,000",
      demand: "Very High",
      competition: "High",
      description: "Post-pandemic fitness consciousness and home workout trends create sustained demand.",
      products: ["Resistance bands", "Yoga mats", "Dumbbells", "Home gym combos", "Fitness trackers", "Protein shakers"],
      whyProfitable: [
        "Recurring purchases (consumables like bands)",
        "High ticket items possible",
        "Subscription box potential",
        "Strong online community",
        "Cross-selling opportunities"
      ],
      targetAudience: "Fitness enthusiasts (20-45 years), home workout practitioners",
      marketingTips: [
        "Workout tutorials and fitness content",
        "YouTube & Instagram Reels",
        "Partner with fitness coaches",
        "Challenge campaigns for engagement"
      ]
    },
    {
      icon: <Baby className="w-8 h-8" />,
      name: "Baby & Mom Products",
      profit: "40-60%",
      investment: "₹50,000 - ₹2,50,000",
      demand: "Very High",
      competition: "Medium",
      description: "Parents prioritizing quality and safety for baby products, willing to pay premium prices.",
      products: ["Baby clothing", "Organic baby care", "Feeding accessories", "Maternity wear", "Baby toys", "Diaper bags"],
      whyProfitable: [
        "High customer lifetime value",
        "Parents prioritize quality over price",
        "Strong word-of-mouth marketing",
        "Subscription model potential",
        "Low price sensitivity for safety items"
      ],
      targetAudience: "New parents, expecting mothers (25-35 years)",
      marketingTips: [
        "Facebook groups for parents",
        "Mommy blogger collaborations",
        "Safety certifications prominently displayed",
        "Educational content about baby care"
      ]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      name: "Personalized Gifts & Custom Products",
      profit: "55-75%",
      investment: "₹35,000 - ₹1,50,000",
      demand: "High",
      competition: "Medium",
      description: "Indians love gifting, and personalized products add emotional value with premium pricing.",
      products: ["Custom mugs", "Photo frames", "Personalized jewelry", "Custom cushions", "Engraved items", "Name plates"],
      whyProfitable: [
        "Very high profit margins",
        "Low inventory risk (made-to-order)",
        "Seasonal spikes (festivals, occasions)",
        "Viral social media potential",
        "Emotional purchase = less price sensitivity"
      ],
      targetAudience: "Gift buyers (all ages), corporate gifting sector",
      marketingTips: [
        "User-generated content campaigns",
        "Festival-specific marketing",
        "Instagram & Pinterest focus",
        "Quick turnaround time as USP"
      ]
    },
    {
      icon: <Book className="w-8 h-8" />,
      name: "Educational Toys & Learning Kits",
      profit: "40-65%",
      investment: "₹45,000 - ₹2,00,000",
      demand: "High",
      competition: "Medium",
      description: "Parents investing heavily in child development through STEM toys and educational products.",
      products: ["STEM kits", "Puzzle games", "Educational books", "Art & craft supplies", "Learning tablets", "Board games"],
      whyProfitable: [
        "Parents prioritize education spending",
        "Subscription box potential",
        "Growing homeschooling trend",
        "Premium pricing accepted",
        "Recurring purchases as child grows"
      ],
      targetAudience: "Parents with kids (3-12 years), educators, homeschoolers",
      marketingTips: [
        "Educational content marketing",
        "Partnerships with schools and educators",
        "YouTube demonstrations",
        "Age-appropriate product bundling"
      ]
    }
  ]

  const blueprintSteps = [
    {
      step: 1,
      title: "Market Research & Niche Selection",
      icon: <Target className="w-6 h-6" />,
      tasks: [
        "Analyze competition on Amazon, Flipkart, Meesho",
        "Research trending products on Google Trends",
        "Join Facebook groups and Reddit communities in your niche",
        "Study customer reviews to identify gaps",
        "Validate demand using keyword research tools"
      ],
      duration: "1-2 weeks"
    },
    {
      step: 2,
      title: "Business Registration & Legal",
      icon: <CheckCircle2 className="w-6 h-6" />,
      tasks: [
        "Register business (Proprietorship/LLP/Pvt Ltd)",
        "Obtain GSTIN (GST registration)",
        "Get FSSAI license (if selling food items)",
        "Open current bank account",
        "Register trademark for brand protection"
      ],
      duration: "2-3 weeks"
    },
    {
      step: 3,
      title: "Supplier Sourcing & Product Selection",
      icon: <Package className="w-6 h-6" />,
      tasks: [
        "Source from IndiaMART, Alibaba, local manufacturers",
        "Order samples and test quality",
        "Negotiate pricing and minimum order quantities",
        "Build relationships with 2-3 backup suppliers",
        "Ensure product certifications and compliance"
      ],
      duration: "2-4 weeks"
    },
    {
      step: 4,
      title: "E-Commerce Setup",
      icon: <ShoppingCart className="w-6 h-6" />,
      tasks: [
        "Choose platform: Shopify/WooCommerce/Custom",
        "Design professional website (mobile-first)",
        "Set up payment gateway (Razorpay/PayU/Instamojo)",
        "Configure shipping integrations (Shiprocket/Delhivery)",
        "List products on marketplaces (Amazon/Flipkart)"
      ],
      duration: "3-4 weeks"
    },
    {
      step: 5,
      title: "Branding & Content Creation",
      icon: <Lightbulb className="w-6 h-6" />,
      tasks: [
        "Create memorable brand name and logo",
        "Professional product photography",
        "Write compelling product descriptions",
        "Create brand guidelines and voice",
        "Design packaging (unboxing experience matters)"
      ],
      duration: "2-3 weeks"
    },
    {
      step: 6,
      title: "Marketing & Customer Acquisition",
      icon: <TrendingUp className="w-6 h-6" />,
      tasks: [
        "Launch social media profiles (Instagram/Facebook)",
        "Run Meta Ads targeting your audience",
        "Collaborate with micro-influencers (10k-100k followers)",
        "Start WhatsApp marketing and customer groups",
        "Launch referral program for word-of-mouth"
      ],
      duration: "Ongoing"
    },
    {
      step: 7,
      title: "Operations & Fulfillment",
      icon: <Zap className="w-6 h-6" />,
      tasks: [
        "Set up inventory management system",
        "Choose fulfillment: Self-ship or use FBA/WMS",
        "Create returns and refund policy",
        "Set up customer service (phone/chat/email)",
        "Implement order tracking and notifications"
      ],
      duration: "2-3 weeks"
    },
    {
      step: 8,
      title: "Scale & Optimize",
      icon: <BarChart3 className="w-6 h-6" />,
      tasks: [
        "Analyze data: conversion rate, CAC, LTV",
        "A/B test product pages and ads",
        "Expand product line based on sales data",
        "Automate repetitive tasks",
        "Build email marketing sequences"
      ],
      duration: "Ongoing"
    }
  ]

  const keyMetrics = [
    { label: "Target Break-even", value: "6-12 months", icon: <DollarSign /> },
    { label: "Expected Profit Margin", value: "25-40%", icon: <TrendingUp /> },
    { label: "Initial Investment", value: "₹50K - ₹3L", icon: <Package /> },
    { label: "Monthly Revenue (Year 1)", value: "₹1L - ₹5L", icon: <BarChart3 /> }
  ]

  const essentialTools = [
    {
      category: "E-Commerce Platforms",
      tools: ["Shopify (₹2,000/mo)", "WooCommerce (Free)", "Instamojo (3% + ₹3)"]
    },
    {
      category: "Payment Gateways",
      tools: ["Razorpay (2% + GST)", "PayU", "Cashfree"]
    },
    {
      category: "Shipping Partners",
      tools: ["Shiprocket", "Delhivery", "Shadowfax"]
    },
    {
      category: "Marketing Tools",
      tools: ["Meta Business Suite", "Google Analytics", "Canva", "Mailchimp"]
    },
    {
      category: "Inventory Management",
      tools: ["Zoho Inventory", "Unicommerce", "Excel (start)"]
    },
    {
      category: "Customer Support",
      tools: ["WhatsApp Business", "Freshdesk", "Intercom"]
    }
  ]

  const successTips = [
    "Start Small: Begin with 5-10 SKUs, master them, then expand",
    "Focus on Retention: Acquiring a new customer costs 5x more than retaining",
    "Mobile-First: 70% of Indian e-commerce traffic is mobile",
    "Festive Planning: 40% of annual sales happen during festivals (Diwali, etc.)",
    "COD is King: 60-80% prefer Cash on Delivery in India",
    "Fast Shipping: Partner with multiple logistics for 2-3 day delivery",
    "Social Proof: Display reviews, testimonials, and UGC prominently",
    "WhatsApp Marketing: Build broadcast lists for direct customer communication"
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Star className="w-12 h-12 text-yellow-300" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            E-Commerce Blueprint for India
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Complete roadmap to launch and scale your profitable online business
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              8 Profitable Niches
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              Step-by-Step Guide
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              India-Specific Insights
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl">
                <div className="flex justify-center mb-4 text-purple-600">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profitable Niches */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              8 Most Profitable Niches for India
            </h2>
            <p className="text-xl text-gray-600">
              Carefully researched opportunities with high demand and profit potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {niches.map((niche, index) => (
              <div
                key={index}
                onClick={() => setSelectedNiche(selectedNiche === index ? null : index)}
                className={`bg-white p-6 rounded-xl shadow-md cursor-pointer card-hover ${
                  selectedNiche === index ? 'ring-4 ring-purple-500' : ''
                }`}
              >
                <div className="text-purple-600 mb-4">{niche.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{niche.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Profit:</span>
                    <span className="font-semibold text-green-600">{niche.profit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Investment:</span>
                    <span className="font-semibold">{niche.investment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Demand:</span>
                    <span className="font-semibold text-orange-600">{niche.demand}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Competition:</span>
                    <span className="font-semibold">{niche.competition}</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <button className="text-purple-600 text-sm font-semibold flex items-center justify-center w-full">
                    {selectedNiche === index ? 'Hide Details' : 'View Details'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Niche View */}
          {selectedNiche !== null && (
            <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in-up">
              <div className="flex items-start gap-6 mb-6">
                <div className="text-purple-600">{niches[selectedNiche].icon}</div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">
                    {niches[selectedNiche].name}
                  </h3>
                  <p className="text-gray-600 text-lg">{niches[selectedNiche].description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Package className="w-5 h-5 mr-2 text-purple-600" />
                    Product Ideas
                  </h4>
                  <ul className="space-y-2">
                    {niches[selectedNiche].products.map((product, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{product}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
                    Why This is Profitable
                  </h4>
                  <ul className="space-y-2">
                    {niches[selectedNiche].whyProfitable.map((reason, idx) => (
                      <li key={idx} className="flex items-start">
                        <Star className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-purple-600" />
                    Target Audience
                  </h4>
                  <p className="text-gray-700 bg-purple-50 p-4 rounded-lg">
                    {niches[selectedNiche].targetAudience}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2 text-purple-600" />
                    Marketing Tips
                  </h4>
                  <ul className="space-y-2">
                    {niches[selectedNiche].marketingTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Blueprint Steps */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              8-Step Launch Blueprint
            </h2>
            <p className="text-xl text-gray-600">
              Your complete roadmap from idea to first sale
            </p>
          </div>

          <div className="space-y-6">
            {blueprintSteps.map((step, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 card-hover">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                        <span className="text-purple-600">{step.icon}</span>
                        {step.title}
                      </h3>
                      <span className="text-sm bg-purple-600 text-white px-4 py-2 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {step.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Tools */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Essential Tools & Services
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to run your e-commerce business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {essentialTools.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.tools.map((tool, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Success Tips for Indian E-Commerce
            </h2>
            <p className="text-xl text-gray-600">
              Learn from successful entrepreneurs and avoid common pitfalls
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {successTips.map((tip, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 flex items-start gap-4">
                <Zap className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your E-Commerce Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Choose your niche, follow the blueprint, and launch your profitable online business in India
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition flex items-center gap-2"
            >
              Explore Niches Again
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-12 text-sm opacity-75">
            <p>💡 Pro Tip: Start with one niche, validate with small orders, then scale aggressively</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">
            Built for aspiring entrepreneurs in India | Market data updated January 2025
          </p>
          <p className="text-xs mt-4 opacity-75">
            Disclaimer: Profit margins and investment figures are estimates. Actual results may vary based on execution, market conditions, and business decisions.
          </p>
        </div>
      </footer>
    </main>
  )
}
